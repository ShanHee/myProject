<?php
/**
* 修改购物车条目中的购买数量
*/
header('Content-Type: application/json;charset=UTF-8');

@$iid = $_REQUEST['iid'] or die('{"code":401,"msg":"iid required"}');
@$count = $_REQUEST['count'] or die('{"code":402,"msg":"count required"}');

session_start();
if(! @$_SESSION['loginUid']){
  die('{"code":300, "msg":"login required"}');
}

require_once('../init.php');
$sql = "UPDATE shoppingcart_item SET count=$count WHERE iid=$iid";
$result = mysqli_query($conn, $sql);
$output = [];
if($result){
  $output =  '{"code":200, "msg":"update succ"}';
}else {
  $output = '{"code":500, "msg":"update err"}';
}

echo $_GET['callback']."(".json_encode($output).");";