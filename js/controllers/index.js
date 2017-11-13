$(function () {
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:8081/myProject/data/index/index.php',
        success:function (data) {
            console.log(data);
            //导航栏
            var siteNavItems=data.siteNavItems;
            var navhtml="";
            for (var p of siteNavItems){
                navhtml +=`
                    <li><a id="${p.id}"  href="../${p.href}">${p.title}</a></li>
                `
            }
            $("#foodTitle").html(navhtml);


            // //轮播广告图
            // var carouselItems=data.carouselItems;
            // var carousel="";
            // for (var p of carouselItems){
            //     carousel +=`
            //        <a target="_blank" href='./addToCart.html?id=${p.id}'>
            //     <img alt="" title="" src="images${p.tupian}">
            //     </a>
            //     `
            // }
            // $("#slide_c").html(carousel);



            //商品分类
            var categoryItems=data.categoryItems;
            var catehtml="";
            for (var p of categoryItems){
                catehtml +=`
                   <li><a href="./addToCart.html?id=${p.id}">${p.mingcheng}</a></li>
                `
            }

            $(".item ul").html(catehtml);
            //热销商品
            var hotGoods=data.hotGoods;
            var hothtml="";
            for (var p of hotGoods){
                hothtml +=`
                    <div class="image-item image-size">
                    <a href="./addToCart.html?id=${p.id}">
                    <img src="myProject/../../images${p.tupian}"/> 
                    </a>
                    <div class="text-info"><a href="./addToCart.html?id=${p.id}">${p.name}</a></div>
                </div>
                `
            }
            $("#hotitems").html(hothtml);
            //中餐
            var chineseFoodItems=data.chineseFoodItems;
            var cnhtml="";
            for (var p of chineseFoodItems){
                cnhtml +=`
                   <div class="image-item image-size">
                    <a href="./addToCart.html?id=${p.id}"><img
                            src="myProject/../../images${p.tupian}"/> </a>
                    <div class="text-info"><a href="./addToCart.html?id=${p.id}">${p.name}</a></div>
                </div>
                `
            }
            $("#chineseFood").html(cnhtml);

            //火锅
            var hotPotItems=data.hotPotItems;
            var pothtml="";
            for (var p of hotPotItems){
                pothtml +=`
                   <div class="image-item image-size">
                    <a href="./addToCart.html?id=${p.id}"><img
                            src="myProject/../../images${p.tupian}"/> </a>
                    <div class="text-info"><a href="./addToCart.html?id=${p.id}">${p.name}</a></div>
                </div>
                `
            }
            $("#hotPot").html(pothtml);

            //西餐
            var westFoodItems=data.westFoodItems;
            var westhtml="";
            for (var p of westFoodItems){
                westhtml +=`
                   <div class="image-item image-size">
                    <a href="./addToCart.html?id=${p.id}"><img
                            src="myProject/../../images${p.tupian}"/> </a>
                    <div class="text-info"><a href="./addToCart.html?id=${p.id}">${p.name}</a></div>
                </div>
                `
            }
            $("#westFood").html(westhtml);

            var friendLink=data.friendLink;
            var friendhtml="";
            for (var p of friendLink){
                friendhtml +=`
                  <div><a href="${p.href}">${p.title}</a></div>
                `
            }
            $("#footer").html(friendhtml);

        },
        error:function (err) {
            console.log(err);
        }
    });

});
$(function () {
    $('div#slide_c').iFadeSlide({
        field: $('div#slide_c img'),
        icocon: $('div.ico_c'),
        outTime: 100,
        inTime: 200
    });

    $(".collapsed").each(function(i,dom){


        $(this).click(function(){
            var blockid= $(this).attr("blockid");
            if($("#"+blockid).is(":hidden")){

                $(this).attr("src","images/collapsed_no.gif");
                $("#"+blockid).show();

            }else
            {
                $(this).attr("src","images/collapsed_yes.gif");
                $("#"+blockid).hide();
            }
        });



    });

    $(".tabcontainer dl dt").each(function(index,dom){


        $(this).mouseenter(function(){


            $(".tabcontainer dl dt").removeClass("on");
            $(this).addClass("on");
            $(".tabcontainer dl dd").hide().eq(index).show();

        })
    })

});
$(function () {
    $.ajax({
        url:"http://127.0.0.1:8081/myProject/data/user/session_data.php",
        type:"GET",
        success:function (data) {
            console.log(data);
            $("#loginHeader").html(`
                 <a href="../page/login.html">用户登录</a>|
                <a href="../page/register.html">用户注册</a>|
            `);
        }
    })
})

