<?php
    require_once('../init.php');
    header('Content-Type: application/json;charset=UTF-8');
    @$pid = $_REQUEST['pid'] or die('{"code":401,"msg":"pid required"}');
    $output = [];
    $sql = "SELECT hyjia,jiage,jieshao,tupian,name,pubren FROM shangpin WHERE id=$pid";

    $result = mysqli_query($conn, $sql);
    $output['merchant'] = mysqli_fetch_all($result, MYSQLI_ASSOC);

    echo json_encode($output);