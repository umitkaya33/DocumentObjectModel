//! length: Belge içerisinde html elemanına eklenmiş olan özelliklerin sayı değerini elde etmek için kullanılır.
function lengthSimpleFunction() {
    var process = document.getElementsByName("attributesLength")[0].attributes.length;
    document.getElementById("sAttLength").innerHTML = process;
};
//! name: Belge içerisinde html elemanına eklenmiş olan özelliklerin isim değerini elde etmek için kullanılır.
function nameSimpleFunction() {
    var process = document.getElementsByName("attributesName")[0].attributes;
    var piece = process.length;
    var range = [];
    for (let index = 0; index < piece; index++) {
        var result = document.getElementById("bAttName").attributes[index].name;
        range[index] = result;
    }
    document.getElementById("sAttName").innerHTML = range;
};
export {
    lengthSimpleFunction,
    nameSimpleFunction
};