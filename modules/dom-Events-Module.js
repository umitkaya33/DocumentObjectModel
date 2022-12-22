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
export {
    ocClickFunctionSimple,
    ocdblClickFunctionSimple,
    onMouseDownFunctionSimple,
    onContextMenuFunctionSimple,
    onMouseOverFunctionSimple,
    onMouseOutFunctionSimple
};