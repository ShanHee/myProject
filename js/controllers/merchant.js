$(function () {

    $.ajax({
        type:'get',
        url:'http://127.0.0.1:8081/myProject/data/page/merchant.php',
        success:function (data) {
            var merchant=data.merchant
            var html="";
            for (var p of merchant){
                html +=`
                   <div class="item">
                        <div class="image-area">
                            <img src="myProject/../../images${p.tupian}">
                        </div>
                        <div class="text-area">
                            <strong>${p.name}</strong>
                            <div class="row">
                                <div class="column">
                                    <img src="myProject/../../images/business/tese.png" class="img">特色:</div>
                                <div class="column">
                                    <img src="myProject/../../images/business/dizhi.png" class="img"> ${p.address}</div>
                            </div>
                            <div class="row">
                                <div class="column">
                                    推荐星级:
                                    <img src="myProject/../../images/business/star1.gif">
                                    <img src="myProject/../../images/business/star1.gif">
                                    <img src="myProject/../../images/business/star1.gif">
                                    <img src="myProject/../../images/business/star2.gif">
                                    <img src="myProject/../../images/business/star2.gif">
                                </div>
                                <div class="column">
                                    订餐电话：${p.tel}
                                </div>
                            </div>
                            <div class="row">
                                <div class="column">
                                    <img src="myProject/../../images/business/changhe.png" class="img">休假、旅游</div>
                                <div class="column">
                                    订餐电话：${p.tel}</div>
                            </div>
                        </div>
                        <div class="action-area">
                            <div class="renjun">
                                人均消费:<span class="money">￥50</span>
                            </div>
                            <div class="action-button">
                                <a href="#">查看菜谱</a>
                            </div>
                        </div>
                    </div>
                `
            }
            $(".content").html(html);
        },
        error:function (err) {
            console.log(err);
        }
    })

});
