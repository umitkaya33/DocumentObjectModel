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
//! FirstElementChild:  Belge içerisinde herhangi bir html elemanın içerdiği ilk elemanı elde etmek için kullanılır .
function firstElementChildFunctionSimple() {
    var value = document.getElementById("domElement").firstElementChild.tagName
    document.getElementById("sFirstElementChild").innerHTML = value;
};
//! FirstChild:  Belge içerisinde herhangi bir html elemanın içerdiği ilk alt node'u elde etmek için kullanılır .
function firstChildFunctionSimple() {
    var value = document.getElementById("domElement").firstChild;
    document.getElementById("sFirstChild").innerHTML = value;
};
//! LastElementChild:  Belge içerisinde herhangi bir html elemanın içerdiği son elemanı elde etmek için kullanılır .
function lastElementChildFunctionSimple() {
    var value = document.getElementById("domElement").lastElementChild.tagName;
    document.getElementById("sLastElementChild").innerHTML = value;
};
//! LastChild:  Belge içerisinde herhangi bir html elemanın içerdiği son alt node'u elde etmek için kullanılır .
function lastChildFunctionSimple() {
    var value = document.getElementById("domElement").lastChild;
    document.getElementById("sLastChild").innerHTML = value;
};
//! nextElementSibling:  Belge içerisinde herhangi bir html elemanın içersindeki aynı seviyede olan elemanlardan belirtilecek olan elemandan sonra gelecek ilk elemanı elde etmek için kullanılır .
function nextElementSiblingFunctionSimple() {
    var value = document.getElementById("domElement").nextElementSibling.className;
    document.getElementById("sNextElementSibling").innerHTML = value;
};
//! nextSibling:  Belge içerisinde herhangi bir html elemanın içersindeki aynı seviyede olan nodelardan belirtilecek olan düğümden sonra gelen ilk düğümü elde etmek için kullanılır .
function nextSiblingFunctionSimple() {
    var value = document.getElementById("domElement").nextSibling;
    document.getElementById("sNextSibling").innerHTML = value;
};
//! previousElementSibling:  Belge içerisinde herhangi bir html elemanın içersindeki aynı seviyede olan elemanlardan belirtilecek olan elemandan önce gelecek ilk elemanı elde etmek için kullanılır .
function previousElementSiblingFunctionSimple() {
    document.getElementById("ustkisim").previousElementSibling.style.backgroundColor = "grey";
};
//! previousSibling:  Belge içerisinde herhangi bir html elemanın içersindeki aynı seviyede olan nodelardan belirtilecek olan düğümden önce gelen ilk düğümü elde etmek için kullanılır .
function previousSiblingFunctionSimple() {
    var value = document.getElementById("ustkisim").previousSibling;
    document.getElementById("sPreviousSibling").innerHTML = value;
};
//! offsetParent:  Belge içerisindeki herhangi bir html elemanın içerisinde mutlak olarak konumlandırıldığı ilk elemanın referans nesnesini elde etmek iin kullanılır.
function offsetParentFunctionSimple() {
    var value = document.getElementById("domElement").offsetParent;
    document.getElementById("sOffsetParent").innerHTML = value;
};
//! contains():  Belge içerisindeki herhangi bir node'un başka bir düğümün alt düğümü olup olmadığını kontrol ederek sonucu Boolean veri türünde döndürür.
function containsFunctionSimple() {
    var value = document.getElementById("domElement");
    var process = document.getElementById("bContains").contains(value);
    document.getElementById("sContains").innerHTML = process;
};
//! textContent():  Belge içerisindeki herhangi bir node'un metin düğümlerini elde etmek için kullanılır.
function textContentFunctionSimple() {
    var value = document.getElementById("bTextContent").textContent;
    document.getElementById("sTextContent").innerHTML = value;
};
//! compareDocumentPosition():  Belge içerisinde bulunan node'ların konum değerlerini elde etmek için kullanılır.
function compareDocumentPositionFunctionSimple() {
    var value = document.getElementById("domElement");
    var value2 = document.getElementById("bCompareDocumentPosition");
    var process = value.compareDocumentPosition(value2);
    document.getElementById("sCompareDocumentPosition").innerHTML = process;
};
export {
    accesskeyFunctionSimple,
    focusFunctionSimple,
    blurFunctionSimple,
    classListFunctionSimple,
    childrenFunctionSimple,
    childNodesFunctionSimple,
    firstElementChildFunctionSimple,
    firstChildFunctionSimple,
    lastElementChildFunctionSimple,
    lastChildFunctionSimple,
    nextElementSiblingFunctionSimple,
    nextSiblingFunctionSimple,
    previousElementSiblingFunctionSimple,
    previousSiblingFunctionSimple,
    offsetParentFunctionSimple,
    containsFunctionSimple,
    textContentFunctionSimple,
    compareDocumentPositionFunctionSimple
};