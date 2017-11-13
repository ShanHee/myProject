<?php
$db_host = '127.0.0.1';
$db_user = 'root';
$db_password = '';
$db_database = 'meal';
$db_port = 3307;
$db_charset = 'UTF8';
header("Access-Control-Allow-Origin:*");

$conn = mysqli_connect($db_host, $db_user, $db_password, $db_database, $db_port);
mysqli_query($conn, "SET NAMES $db_charset");