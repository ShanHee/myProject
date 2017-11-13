$(function () {

   $.ajax({
       type:'get',
       url:'http://127.0.0.1:8081/myProject/data/index/index.php',
       success:function (data) {
           console.log(data.hotGoods);
           var hotGoods=data.hotGoods;
           var hothtml="";
           for (var p of hotGoods){
               hothtml +=`            
                    <li>
                        <a href="./addToCart.html?id=${p.id}" target="self">
                            <img src="../images${p.tupian}" width="120" height="120">
                        </a>
                        <div class="name">
                            <p>${p.name}</p>
                            <div class="price"><em>￥ <b>${p.jiage}</b></em></div>
                        </div>
                    </li>
                `
           }
           $("#hotitems").html(hothtml);
       },
       error:function (err) {
           console.log(err);
       }
   })
});
