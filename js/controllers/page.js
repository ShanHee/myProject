$(function () {
   $.ajax({
       type:'get',
       url:'http://127.0.0.1:8081/myProject/data/index/index.php',
       success:function (data) {
           console.log(data)
           //中餐
           var chineseFoodItems = data.chineseFoodItems;
           var chinesehtml ='';
            for (var p of chineseFoodItems) {
                chinesehtml += `
                    <div class="image-item image-size">
                        <a href="./addToCart.html?id=${p.id}">
                            <img src="myProject/../../images${p.tupian}"/> 
                        </a>
                        <div class="text-info">
                            <a href="./addToCart.html?id=${p.id}">${p.name}</a>
                        </div>
                    </div>
           `
            }

           $("#chineseFood").html(chinesehtml);

           var westFoodItems=data.westFoodItems;
           var westhtml="";
           for (var p of westFoodItems){
               westhtml +=`
                <div class="image-item image-size">
                        <a href="./addToCart.html?id=${p.id}">
                            <img src="myProject/../../images${p.tupian}"/> 
                        </a>
                        <div class="text-info">
                            <a href="./addToCart.html?id=${p.id}">${p.name}</a>
                        </div>
                    </div>
                `
           }
           $("#westFood").html(westhtml);

           //火锅
           var hotPotItems=data.hotPotItems;
           var pothtml="";
           for (var p of hotPotItems){
               pothtml +=`
                   <div class="image-item image-size">
                        <a href="./addToCart.html?id=${p.id}">
                            <img src="myProject/../../images${p.tupian}"/> 
                        </a>
                        <div class="text-info">
                            <a href="./addToCart.html?id=${p.id}">${p.name}</a>
                        </div>
                    </div>
                `
           }
           $("#hotPot").html(pothtml);

           //自助餐
           var BuffetItems=data.BuffetItems;
           var BuffetItemshtml="";
           for (var p of BuffetItems){
               BuffetItemshtml +=`
                   <div class="image-item image-size">
                        <a href="./addToCart.html?id=${p.id}">
                            <img src="myProject/../../images${p.tupian}"/> 
                        </a>
                        <div class="text-info">
                            <a href="./addToCart.html?id=${p.id}">${p.name}</a>
                        </div>
                    </div>
                `
           }
           $("#BuffetItems").html(BuffetItemshtml);

           //家常小炒
           var xiaoChaoItems=data.xiaoChaoItems;
           var xiaoChaoItemshtml="";
           for (var p of xiaoChaoItems){
               xiaoChaoItemshtml +=`
                   <div class="image-item image-size">
                        <a href="./addToCart.html?id=${p.id}">
                            <img src="myProject/../../images${p.tupian}"/> 
                        </a>
                        <div class="text-info">
                            <a href="./addToCart.html?id=${p.id}">${p.name}</a>
                        </div>
                    </div>
                `
           }
           $("#xiaoChaoItems").html(xiaoChaoItemshtml);

           //海鲜
           var seaFoodItems=data.seaFoodItems;
           var seaFoodItemshtml="";
           for (var p of seaFoodItems){
               seaFoodItemshtml +=`
                   <div class="image-item image-size">
                        <a href="./addToCart.html?id=${p.id}">
                            <img src="myProject/../../images${p.tupian}"/> 
                        </a>
                        <div class="text-info">
                            <a href="./addToCart.html?id=${p.id}">${p.name}</a>
                        </div>
                    </div>
                `
           }
           $("#seaFoodItems").html(seaFoodItemshtml);

           //面食
           var noodleItems=data.noodleItems;
           var noodleItemshtml="";
           for (var p of noodleItems){
               noodleItemshtml +=`
                   <div class="image-item image-size">
                        <a href="./addToCart.html?id=${p.id}">
                            <img src="myProject/../../images${p.tupian}"/> 
                        </a>
                        <div class="text-info">
                            <a href="./addToCart.html?id=${p.id}">${p.name}</a>
                        </div>
                    </div>
                `
           }
           $("#noodleItems").html(noodleItemshtml);
       },
       error:function (err) {
           console.log(err);
       }
   });
});
