//! OnClick : Belge içersindeki herhangi bir elemana mause ile sol tıklama işlemi yapıldığında belirtilecek olan fonksiyonun çalışması 
function ocClickFunctionSimple() {
    document.getElementById("domEventsResult").innerHTML = "Tıklama işlemi gerçekleşti";
};
//! OnDoubleClick : Belge içersindeki herhangi bir elemana mause ile çift sol tıklama işlemi yapıldığında belirtilecek olan fonksiyonun çalışması 
function ocdblClickFunctionSimple() {
    document.getElementById("domEventsResult").innerHTML = "Çift Tıklama işlemi gerçekleşti";
};
export {
    ocClickFunctionSimple,
    ocdblClickFunctionSimple
};