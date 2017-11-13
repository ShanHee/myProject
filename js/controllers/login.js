$(function () {
    $("#username").blur(function () {
        if (!this.value) {
            $("#showResult").text("用户名不能为空！");
            $("#showResult").addClass('error');
            return false;
        }
    });
    $("#userpassword").blur(function () {
        if (!this.value) {
            $("#showResult").text("密码不能为空！");
            $("#showResult").addClass('error');
            return false;
        }
    });
     $("#btnLogin").click( function () {
        var uname=$("#username").val();
        var upwd=$("#userpassword").val();
        $.ajax({
            url:"http://127.0.0.1:8081/myProject/data/user/login.php",
            data:{uname:uname,upwd:upwd},
            type:'POST',
            success:function (result) {
                console.log(result);
                if (result.code === 200) {              //登录成功
                    var pageToJump = result.pageToJump?result.pageToJump:'./index.html';
                    location.href = pageToJump;
                } else if (result.code === 201) {       //登录失败
                    alertMsg='登录失败！用户名或密码输入有误。';
                    $("#showResult").text(alertMsg);
                    $("#showResult").addClass('error');
                } else {
                    alertMsg='登录失败！原因：' + result.msg;
                    $("#showResult").text(alertMsg);
                    $("#showResult").addClass('error');
                }
            },
            error:function () {

            }
        });
    });
    /***7天之内不再登录***/
  /**  $(document).ready(function () {
        if ($.cookie("rmbUser") == "true") {
            $("#ck_rmbUser").attr("checked", true);
            $("#username").val($.cookie("username"));
            $("#password").val($.cookie("password"));
        }
    }); **/
    /***记住用户名密码***/
/**   function save() {
        if ($("#ck_rmbUser").attr("checked")) {
            var str_username = $("#uname").val();
            console.log(str_username);
            var str_password = $("#upwd").val();
            $.cookie("rmbUser", "true", {expires: 7}); //存储一个带7天期限的cookie
            $.cookie("username", str_username, {expires: 7});
            $.cookie("password", str_password, {expires: 7});
        }
        else {
            $.cookie("rmbUser", "false", {expire: -1});
            $.cookie("username", "", {expires: -1});
            $.cookie("password", "", {expires: -1});
        }
    }**/

});
