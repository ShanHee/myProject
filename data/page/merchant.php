<?php
    require_once('../init.php');
    header('Content-Type: application/json;charset=UTF-8');

    $output = [];
    $sql = "SELECT id,accountname,address,createtime,des,jcremark,name,tupian,tel FROM shanghu";
    $result = mysqli_query($conn, $sql);
    $output['merchant'] = mysqli_fetch_all($result, MYSQLI_ASSOC);

    echo json_encode($output);