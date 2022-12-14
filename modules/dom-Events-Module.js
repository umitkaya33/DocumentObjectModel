//! OnClick : Belge içersindeki herhangi bir elemana mouse ile sol tıklama işlemi yapıldığında belirtilecek olan fonksiyonun çalışması 
function ocClickFunctionSimple() {
    document.getElementById("domEventsResult").innerHTML = "Tıklama işlemi gerçekleşti";
};
//! OnDoubleClick : Belge içersindeki herhangi bir elemana mouse ile çift sol tıklama işlemi yapıldığında belirtilecek olan fonksiyonun çalışması 
function ocdblClickFunctionSimple() {
    document.getElementById("domEventsResult").innerHTML = "Çift Tıklama işlemi gerçekleşti";
};
//! OnMouseDown : Belge içersindeki herhangi bir elemana mouse ile sağ veya sol tıklama işlemi yapıldığında belirtilecek olan fonksiyonun çalışması 
function onMouseDownFunctionSimple() {
    document.getElementById("domEventsResult").innerHTML = "OnMouseDown işlemi gerçekleşti";
};
//! OnContextMenu : Belge içersindeki herhangi bir elemana mouse ile sağ tıklama işlemi yapıldığında belirtilecek olan fonksiyonun çalışması 
function onContextMenuFunctionSimple() {
    document.getElementById("domEventsResult").innerHTML = "Sağ tıklama işlemi gerçekleşti";
};
//! OnMouseOver : Belge içersindeki herhangi bir elemana mouse ile üzerine gelindiğinde belirtilecek olan fonksiyonun çalışması 
function onMouseOverFunctionSimple() {
    document.getElementById("domEventsResult").innerHTML = "Buton üzerine gelindi";
};
//! OnMouseOut : Belge içersindeki herhangi bir elemana mouse ile üzerinden gidildiğinde belirtilecek olan fonksiyonun çalışması 
function onMouseOutFunctionSimple() {
    document.getElementById("domEventsResult").innerHTML = "Buton üzerinden gidildi";
};
//! OnMouseEnter : Belge içersindeki herhangi bir elemanın mouse ile kapsama alanına giriş yapıldığında belirtilecek olan fonksiyonun çalışması 
function onMouseEnterFunctionSimple() {
    document.getElementById("domEvents").classList.add("domEventsAdd");
    document.getElementById("domEventsResult").innerHTML = "Mouse Enter özelliği aktif oldu";
};
//! OnMouseLeave : Belge içersindeki herhangi bir elemanın mouse ile kapsama alanında çıkış yapıldığında belirtilecek olan fonksiyonun çalışması 
function onMouseLeaveFunctionSimple() {
    document.getElementById("domEvents").classList.remove("domEventsAdd");
    document.getElementById("domEventsResult").innerHTML = "Mouse Leave özelliği aktif oldu";
};
//! Button : Belge içerisinde mouse ile tıklama işlemi yapıldığında tıklama olayı hangi tuşla gerçekleştiyse sonucu gösterir..
function buttonFunctionSimple() {
    var accessValue = event.button;
    if (accessValue == 0) {
        document.getElementById("domEventsResult").innerHTML = "Mouse'un sol tuşuna tıklama oldu..";
    } else if (accessValue == 1) {
        document.getElementById("domEventsResult").innerHTML = "Mouse'un orta tuşuna tıklama oldu..";
    } else if (accessValue == 2) {
        document.getElementById("domEventsResult").innerHTML = "Mouse'un sağ tuşuna tıklama oldu..";
    }
};
//! Detail : Belge içerisinde mouse ile kaç defa tıklama işlemi yapıldını gösterir.
function detailFunctionSimple() {
    var process = event.detail;
    document.getElementById("domEventsResult").innerHTML="Tıklama Sayısı: " + process;
};
export {
    ocClickFunctionSimple,
    ocdblClickFunctionSimple,
    onMouseDownFunctionSimple,
    onContextMenuFunctionSimple,
    onMouseOverFunctionSimple,
    onMouseOutFunctionSimple,
    onMouseEnterFunctionSimple,
    onMouseLeaveFunctionSimple,
    buttonFunctionSimple,
    detailFunctionSimple
};