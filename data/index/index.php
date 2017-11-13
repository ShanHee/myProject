<?php
/**
* 向首页提供必需的数据，包括轮播广告、首页推荐、最新上架、热销单品
* 返回数据形如：
  {
    carouselItems: [ ],
    recommendedItems: [ ],
    chineseFoodItems: [ ],
    hotPotItems: [ ],
    westFoodItems: [ ],
    BuffetItems: [ ],
    xiaoChaoItems: [ ],
    seaFoodItems: [ ],
    noodleItems: [ ],
    siteNavItems: [ ],
    categoryItems: [ ],
    friendLink:[ ]
  }
*/
require_once('../init.php');
header('Content-Type: application/json;charset=UTF-8');

$output = [];


//1.获取轮播广告项
$sql = "SELECT id,pindex,tupian,title,href FROM jiaodiantu";
$result = mysqli_query($conn, $sql);
$output['carouselItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);


//2.最新上架商品
//中餐
$sql = "SELECT id,name,jieshao,tupian,jiage,hyjia,jieshao FROM shangpin WHERE sptypeid=1 ORDER BY id  LIMIT 6";
$result = mysqli_query($conn, $sql);
$output['chineseFoodItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
//火锅
$sql = "SELECT id,name,jieshao,tupian,jiage,hyjia,jieshao FROM shangpin WHERE sptypeid=7 ORDER BY id  LIMIT 6";
$result = mysqli_query($conn, $sql);
$output['hotPotItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
//西餐
$sql = "SELECT id,name,jieshao,tupian,jiage,hyjia,jieshao FROM shangpin WHERE sptypeid=5 ORDER BY id  LIMIT 6";
$result = mysqli_query($conn, $sql);
$output['westFoodItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
//自助餐
$sql = "SELECT id,name,jieshao,tupian,jiage,hyjia,jieshao FROM shangpin WHERE sptypeid=8 ORDER BY id  LIMIT 6";
$result = mysqli_query($conn, $sql);
$output['BuffetItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
//家常小炒
$sql = "SELECT id,name,jieshao,tupian,jiage,hyjia,jieshao FROM shangpin WHERE sptypeid=9 ORDER BY id  LIMIT 6";
$result = mysqli_query($conn, $sql);
$output['xiaoChaoItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
//海鲜
$sql = "SELECT id,name,jieshao,tupian,jiage,hyjia,jieshao FROM shangpin WHERE sptypeid=10 ORDER BY id  LIMIT 6";
$result = mysqli_query($conn, $sql);
$output['seaFoodItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
//面食
$sql = "SELECT id,name,jieshao,tupian,jiage,hyjia,jieshao FROM shangpin WHERE sptypeid=11 ORDER BY id  LIMIT 6";
$result = mysqli_query($conn, $sql);
$output['noodleItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);

//3.热销商品
$sql = "SELECT id,name,jieshao,tupian,jiage,hyjia,jieshao FROM shangpin WHERE hot=1 ORDER BY id  LIMIT 6";
$result = mysqli_query($conn, $sql);
$output['hotGoods'] = mysqli_fetch_all($result, MYSQLI_ASSOC);

//4.首页导航
$sql = "SELECT id,href,sindex,title FROM sitenav  ORDER BY id";
$result = mysqli_query($conn, $sql);
$output['siteNavItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);

//5.类别介绍
$sql = "SELECT id,jieshao,mingcheng FROM spcategory ORDER BY id";
$result = mysqli_query($conn, $sql);
$output['categoryItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);

//5.类别介绍
$sql = "SELECT id,href,title FROM friendlink ORDER BY id";
$result = mysqli_query($conn, $sql);
$output['friendLink'] = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($output);

