<?php
    require_once('../init.php');
    header('Content-Type: application/json;charset=UTF-8');
    @$pid =$_SESSION['toBuyLid'] or die('{"code":401,"msg":"pid required"}');
    @$comment=$_REQUEST['comment'] or die('{"code":401,"msg":"comment required"}');
    @$uname=$_SESSION['loginUname'] or die('{"code":401,"msg":"username required"}');
    $output = [];
    $sql = "INSERT INTO comment VALUES (NULL,$pid,$comment,$uname,NULL,UNIX_TIMESTAMP(),(SELECT name FROM shangpin WHERE id=$pid)),(SELECT sptype FROM shangpin WHERE id=$pid),(SELECT tupian FROM shangpin WHERE id=$pid))";
    $result = mysqli_query($conn, $sql);
    $output['merchant'] = mysqli_fetch_all($result, MYSQLI_ASSOC);

    echo json_encode($output);