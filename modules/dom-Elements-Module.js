//! Accesskey:  Belge içerisindeki herhangi bir html elemanına atanmış olan kısayol tuşu referansını elde etmek için kullanılır
function accesskeyFunctionSimple() {
    var redBG = document.getElementById("btnRedBG").accessKey = "1";
    var blackBG = document.getElementById("btnBlackBG").accessKey = "2";
    var blueBG = document.getElementById("btnBlueBG").accessKey = "3";
    var greenBG = document.getElementById("btnGreenBG").accessKey = "4";
    var whiteBG = document.getElementById("btnWhiteBG").accessKey = "5";
    var process = redBG + "," + blackBG + "," + blueBG + "," + greenBG + "," + whiteBG;
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
//! classList:  Belge içerisinde herhangi bir html elemanına atanmış olan class özelliklerini elde etmek veya ayarlamak için kullanılır .
function classListFunctionSimple() {
    document.getElementById("domElement").classList.toggle("domElementAdd");
};
//! children:  Belge içerisinde herhangi bir html elemanın içerdiği alt elemanları elde etmek için kullanılır .
function childrenFunctionSimple() {
    var area = document.getElementById("domElement").children;
    var areaLength = area.length;
    var childrenView = "";
    for (let index = 0; index < areaLength; index++) {
        childrenView = childrenView + area[index].tagName;
    }
    document.getElementById("sChildren").innerHTML = childrenView;
};
//! childNodes:  Belge içerisinde herhangi bir html elemanın içerdiği alt nodeları elde etmek için kullanılır .
function childNodesFunctionSimple() {
    var area = document.getElementById("domElement").childNodes;
    var areaLength = area.length;
    var childrenView = "";
    for (let index = 0; index < areaLength; index++) {
        childrenView = childrenView + area[index].nodeName;
    }
    document.getElementById("sChildNodes").innerHTML = childrenView;
};
export {
    accesskeyFunctionSimple,
    focusFunctionSimple,
    blurFunctionSimple,
    classListFunctionSimple,
    childrenFunctionSimple,
    childNodesFunctionSimple
};