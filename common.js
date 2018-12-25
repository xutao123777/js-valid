//校验方法
function publicValid(tipEm, type, v1, v2){
    var value = $.trim(v1);
    var value2 = $.trim(v2);
    var resultValid;
    var vo = {
        //手机号
        phone: function(){
            if(/^1[356789]\d{9}$/.test(value)){

                return {result: true, value: value, msg: ""};
            }else{
                return {result: false, msg: "输入的手机号不正确"};
            }
        },
        pwd: function(){
            if(("" + value).length < 6){
                return {result: false, msg: "密码长度小于6位数"};
            }else if(value2 && value !== value2){
                return {result: false, msg: "二次密码不一致"};
            }else{
                return {result: true, value: value, msg: ""};
            }
        },
        pwd2: function(){
            if(("" + value).length < 6){
                return {result: false, msg: "密码长度小于6位数"};
            }else if(value !== value2){
                return {result: false, msg: "二次密码不一致"};
            }else{
                return {result: true, value: value2, msg: ""};
            }
        },
        code: function(){
            if((""+value).length < 4 || !/\w{4}/.test(value)){
                return {result: false, msg: "验证码输入不正确"};
            }else{
                return {result: true, value: value, msg: ""};
            }

        },
        email: function(){
            if( /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value)){
                return {result: true, value: value, msg: ""};
            }else{
                return {result: false, msg: "邮箱输入不正确"};
            }
        },
        smsCode: function(){
            if((""+value).length < 6 || !/\w{6}/.test(value)){
                return {result: false, msg: "验证码输入不正确"};
            }else{
                return {result: true, value: value, msg: ""};
            }

        }

    }

    resultValid = vo[type]();

    tipEm.html(resultValid["msg"]);
    return resultValid;
}
