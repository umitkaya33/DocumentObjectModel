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
//! value: Belge içerisinde html elemanına eklenmiş olan özelliklerin isim değerinin referanslarını elde etmek için kullanılır.
function valueSimpleFunction() {
    var process = document.getElementsByName("attributesValue")[0].attributes;
    var piece = process.length;
    var range = "";
    var index = 0;
    while (index < piece) {
        var result = process[index].value;
        range += result + " ";
        index++;
    }
    document.getElementById("sAttValue").innerHTML = range;
};
//! specified: Belge içerisinde html elemanına herhangi bir özelliğin eklenip eklenmediğini görmek için Boolean veri türünde gösterir.
function specifiedSimpleFunction() {
    var process = document.getElementsByName("attributesSpecified")[0];
    var result = process.getAttributeNode("id").specified;
    document.getElementById("sAttSpecified").innerHTML = result;
};
//! getNamedItem(): Belge içerisinde html elemanına eklenmiş olan özellik node'u referansını elde etmek için kullanılır.
function getNamedItemSimpleFunction() {
    var process = document.getElementsByName("attributesgetNamedItem")[0];
    var result = process.attributes.getNamedItem("id").value;
    document.getElementById("sAttgetNamedItem").innerHTML = result;
};
//! setNamedItem(): Belge içerisinde html elemanına özellik node'u eklemek için kullanılır.
function setNamedItemSimpleFunction() {
    var process = document.getElementById("sAttsetNamedItem");
    var addFeatures = document.createAttribute("style");
    addFeatures.value = "color:white;background-color:black;";
    process.attributes.setNamedItem(addFeatures);
};
export {
    lengthSimpleFunction,
    nameSimpleFunction,
    valueSimpleFunction,
    specifiedSimpleFunction,
    getNamedItemSimpleFunction,
    setNamedItemSimpleFunction
};