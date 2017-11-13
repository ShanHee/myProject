<?php
/**
* 添加到购物车
*/
header('Content-Type: application/json;charset=UTF-8');

@$lid = $_REQUEST['lid'] or die('{"code":401,"msg":"lid required"}');
@$buyCount = $_REQUEST['buyCount'] or die('{"code":402,"msg":"buyCount required"}');
session_start();
@$_SESSION['loginUid']=6;
if(! @$_SESSION['loginUid']){
  $_SESSION['pageToJump'] = './orderSuccess.html';
  $_SESSION['toBuyLid'] = $lid;
  $_SESSION['toBuyCount'] = $buyCount;
  die('{"code":300, "msg":"login required"}');
}
require_once('../init.php');
$sql = "SELECT iid FROM shoppingcart_item WHERE uid=$_SESSION[loginUid] AND pid=$lid";
$result = mysqli_query($conn, $sql);
if( mysqli_fetch_row($result) ){
$sql = "UPDATE shoppingcart_item SET count=count+1 WHERE uid=$_SESSION[loginUid] AND pid=$lid";
}else {
   $sql = "INSERT INTO shoppingcart_item VALUES(NULL, $_SESSION[loginUid], $lid, $buyCount, false)";
}
$result = mysqli_query($conn, $sql);
$output = [];
if($result){
  $output ='{"code":200, "msg":"add succ"}';
}else {
  $output ='{"code":500, "msg":"add err"}';
}


echo @$_GET['callback']."(".json_encode($output).");";