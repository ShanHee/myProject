<?php
/**
* 接收客户端提交的登录信息：name、pwd，执行登录验证；
* 返回表明登录成功或失败的JSON消息：
* 如：{"code":200, "msg":"check passed"}
*/
header('Content-Type: application/json;charset=UTF-8');
header('Access-Control-Allow-Origin:*');
@$uname = $_REQUEST['uname'] or die('{"code":401,"msg":"uname required"}');
@$upwd = $_REQUEST['upwd'] or die('{"code":402,"msg":"upwd required"}');

require_once('../init.php');
$sql = "SELECT id,accountname FROM huiyuan WHERE accountname='$uname' AND password='$upwd'";
$result = mysqli_query($conn,$sql);

if(!$result){       //SQL语句执行失败
  echo('{"code":500, "msg":"db execute err"}');
}else {
  $row = mysqli_fetch_assoc($result);
  if(!$row){        //用户名或密码错误
    echo('{"code":201, "msg":"uname or upwd err"}');
  }else {           //登录成功
    session_start();
    $_SESSION['loginUname'] = $uname;
    $_SESSION['loginUid'] = $row['id'];
     if(@$_SESSION['pageToJump']){
            $pageToJump = @$_SESSION['pageToJump'];
        }else{
            $_SESSION['pageToJump']='./index.html';
        }

    if(!@$_SESSION['toBuyLid']){
        $_SESSION['toBuyLid']=NULL;
    }
    if(@$pageToJump==='./cart.html' && @$_SESSION['toBuyLid']){
      //完成购物车添加
       $sql = "SELECT iid FROM shoppingcart_item WHERE uid=$_SESSION[loginUid] AND pid=$_SESSION[toBuyLid]";
      $result = mysqli_query($conn, $sql);
      if( mysqli_fetch_row($result) ){
        $sql = "UPDATE shoppingcart_item SET count=count+1 WHERE uid=$_SESSION[loginUid] AND pid=$_SESSION[toBuyLid]";
      }else {
        if(!$_SESSION[toBuyCount]){
        @$_SESSION[toBuyCount]=0;
      }
        $sql = "INSERT INTO shoppingcart_item VALUES(NULL, $_SESSION[loginUid], $_SESSION[toBuyLid], $_SESSION[toBuyCount],false)";
      }
      $result = mysqli_query($conn, $sql);
      unset($_SESSION['toBuyLid']);
      unset($_SESSION['toBuyCount']);
      unset($_SESSION['pageToJump']);


      echo('{"code":200, "msg":"login succ", "pageToJump":"'.$pageToJump.'"}');
    }else if(@$pageToJump==='cart.html'){
      //完成购物车查看
      unset($_SESSION['pageToJump']);
      echo('{"code":200, "msg":"login succ", "pageToJump":"'.$pageToJump.'"}');
    }else {
      echo('{"code":200, "msg":"login succ"}');
    }
  }
}