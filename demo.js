var httpRequest = {
    _requst: function (path, data, fun, fail) {
        $.ajax({
            type: "POST",
            //headers:{Referer:""},
            url: path,
            //contentType: "application/json; charset=utf-8",
            data: data,
            dataType: "json",
            success: function (d) {
                fun(d);
            },
            error: function (message) {
                fail(message);
            }
        });
    },
    //发手机短信
    sendSmsCode: function (data, success, fail) {

        this._requst("/Verify/regsmscode", data, success, fail);
    },
    //发邮件验证码
    sendEmailCode: function (data, success, fail) {
        this._requst("/Verify/regssemail", data, success, fail);
    },
    //注册
    regist: function(data, success, fail){
        this._requst("/Login/upregister", data, success, fail);
    },
    login: function(data, success, fail){
        this._requst("/Login/submit", data, success, fail);
    },
    findpwd: function(data, success, fail){
        this._requst("/Login/findpwd", data, success, fail);
    },
    findPwdEmailCode: function(data, success, fail){
        this._requst("/Verify/findpwdemail", data, success, fail);
    },
    findPwdSmsCode: function(data, success, fail){
        this._requst("/Verify/findpwdsmscode", data, success, fail);
    }
}
