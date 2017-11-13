$(function () {
    $.ajax({
        url:"http://127.0.0.1:8081/myProject/data/page/product.php",
        type:"GET",
        data:{pid:location.search.split('=')[1]},
        success:function (data) {
            var info=data.merchant;
            var  merchant=info[0];
            var html=`
            <h1>
               ${merchant.name}
            </h1>
            <table cellpadding="0" cellspacing="1" class="grid" width="100%">
                <tr>
                    <td width="30%" colspan="2" rowspan="6">
                        <img id="imgTupian" width="200px" height="200px"
                             src="myProject/../../images${merchant.tupian}" />
                    </td>
                    <td width="10%" align="right">名称:</td>
                    <td width="*"> ${merchant.name}</td>
                </tr>
                <tr>
                    <td align="right">商品编号:</td>
                    <td> ${merchant.pubren}</td>
                </tr>
                <tr>
                    <td align="right">价格:(元)</td>
                    <td>¥${merchant.jiage}</td>
                </tr>
                <tr>
                    <td align="right">会员价:（元）</td>
                    <td>¥${merchant.hyjia}</td>
                </tr>
                <tr>
                    <td colspan="4" >
                        <a id="btnIncart" class="btn btn-default" href="cart.html" >
                            <i class="fa fa-plus"></i>加入购物车
                        </a>
                    </td>
                </tr>
            </table>
            <div class="news-content">
                   ${merchant.jieshao}
            </div>`;
            $("#cartInfo").html(html);

        },
        error:function (err) {
            console.log(err);
        }
    })
    $("#btnIncart").click(
        $.ajax({
            url:"http://127.0.0.1:8081/myProject/data/cart/add.php",
            type:"GET",
            data:{lid:location.search.split('=')[1],buyCount:1},
            success: function(result){
                if(result.code===300){
                    alertMsg('您尚未登录！');
                    $('#alertMsg_btn1').click(function () {
                        location.href = 'login.html';
                    });
                }else if(result.code===200){
                    alertMsg('添加成功！');
                    $('#alertMsg_btn1').click(function () {
                        location.href = 'cart.html';
                    });
                }else {
                    alertMsg('<b添加失败！</b><p>错误原因为：'+result.msg+'</p>');
                }
            },
            error:function () {
                
            }
        })
    );
});