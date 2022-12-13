//! Accesskey:  Belge içerisindeki herhangi bir html elemanına atanmış olan kısayol tuşu referansını elde etmek için kullanılır
function accesskeyFunctionSimple() {
    var redBG = document.getElementById("btnRedBG").accessKey = "1";
    var blackBG = document.getElementById("btnBlackBG").accessKey = "2";
    var blueBG = document.getElementById("btnBlueBG").accessKey = "3";
    var greenBG = document.getElementById("btnGreenBG").accessKey = "4";
    var whiteBG = document.getElementById("btnWhiteBG").accessKey = "5";
    var process = redBG + " " + blackBG + " " + blueBG + " " + greenBG + " " + whiteBG;
    document.getElementById("sAccessKey").innerHTML = "ATANAN DEGERLER: ALT + " + "(" + process + ")";
};
//! Focus():  Belge içerisindeki herhangi bir html elemanına odaklanmak kullanılır.
function focusFunctionSimple() {
    document.getElementById("sFocus").focus();
};
//! blur():  Belge içerisinde odaklanılmış herhangi bir html elemanının odağından çıkmak için kullanılır.
function blurFunctionSimple() {
    document.getElementById("sFocus").blur();
};
export {
    accesskeyFunctionSimple,
    focusFunctionSimple,
    blurFunctionSimple
};