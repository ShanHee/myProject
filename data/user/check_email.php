<?php
/**
* 接收客户端提交的email，验证此邮箱是否已经存在。
* 若不存在，则返回{"code":200, "msg":"non-exists"}
* 若存在，则返回{"code":201, "msg":"exists"}
*/
header('Content-Type: application/json;charset=UTF-8');

@$email = $_REQUEST['email'] or die('{"code":401,"msg":"email required"}');

require_once('../init.php');
$sql = "SELECT uid FROM xz_user WHERE email='$email' LIMIT 1";
$result = mysqli_query($conn,$sql);
$output = [];
if(!$result){       //SQL语句执行失败
  $output = '{"code":500, "msg":"db execute err"}';
}else {
  $row = mysqli_fetch_assoc($result);
  if(!$row){        //邮箱不存在
    $output = '{"code":200, "msg":"non-exists"}';
  }else {           //邮箱已经存在
    $output = '{"code":201, "msg":"exists"}';
  }
}

echo $_GET['callback']."(".json_encode($output).");";