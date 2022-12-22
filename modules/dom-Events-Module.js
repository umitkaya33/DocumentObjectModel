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
export {
    ocClickFunctionSimple,
    ocdblClickFunctionSimple,
    onMouseDownFunctionSimple,
    onContextMenuFunctionSimple
};