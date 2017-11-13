$(function(){
    $.ajax({
        url:'../../template/header.html',
        dataType:'html',
        type:'post',
        global:false,
        async:false,
        success:function(res){
            $("#myheader").html(res);
        },
        error:function (err) {
            console.log(err);
        }
    });
    $.ajax({
        url:'../../template/footer.html',
        dataType:'html',
        type:'post',
        global:false,
        async:false,
        success:function(res){
            $("#myfooter").html(res);
        },
        error:function (err) {
            console.log(err);
        }
    })
    $.ajax({
        url:'../../template/side.html',
        dataType:'html',
        type:'post',
        global:false,
        async:false,
        success:function(res){
            $("#myside").html(res);
        },
        error:function (err) {
            console.log(err);
        }
    })
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:8081/myProject/data/index/index.php',
        success:function (data) {
            // console.log(data);
            //导航栏
            var siteNavItems=data.siteNavItems;
            var navhtml="";
            for (var p of siteNavItems){
                navhtml +=`
                    <li><a id="${p.id}"  href="./${p.href}">${p.title}</a></li>
                `
            }
            $("#foodTitle").html(navhtml);
        }
    })
});
