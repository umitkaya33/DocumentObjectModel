//! getElementById(): Kendisine parametre olarak verilen değer doğrultusunda belge içerisindeki belirtilen ID özelliğine sahip elemanın referansını elde etmek için kullanılır.

function get_SimpleFunction() {
    document.getElementById("demo").innerHTML = "ÜMİT KAYA";
};
//! getElementsByName(): Kendisine parametre olarak verilen değer doğrultusunda belge içerisinde belirtilen Name özelliğine sahip tüm elemanların referansını elde etmek için kullanılır. Eleman referansları birden fazla ise her bir eleman döngüyle elde edilebilir.
function get_hepsinisec_SimpleFunction() {
    var values = document.getElementsByName("ilgialanlari");
    for (var i = 0; i < values.length; i++) {
        values[i].checked = true;
    }
};
function get_hepsinitemizle_SimpleFunction() {
    var values = document.getElementsByName("ilgialanlari");
    for (var i = 0; i < values.length; i++) {
        values[i].checked = false;
    }
};
//! getElementsByTagName(): Kendisine parametre olarak verilen değer doğrultusunda belge içerisinde belirtilen Tag özelliğine sahip tüm elemanların referansını elde etmek için kullanılır. Eleman referansları birden fazla ise her bir eleman döngüyle elde edilebilir.
function get_degistir_SimpleFunction() {
    document.getElementsByTagName("LI")[0].innerHTML = "JS";
};
//! getElementsByClassName(): Kendisine parametre olarak verilen değer doğrultusunda belge içerisinde belirtilen Class adına sahip tüm elemanların referansını elde etmek için kullanılır. Eleman referansları birden fazla ise her bir eleman döngüyle elde edilebilir.
function get_arkaplan_SimpleFunction() {
    var result = document.getElementsByClassName("bicimlendirme");
    for (var i = 0; i < result.length; i++) {
        result[i].style.backgroundColor = "#000000";
    }
};
//! body medodunun kullanımı : Belge içerisinde body tagının referansını elde etmek için kullanılır.. -->

function SetColor(color) {
    document.body.style.backgroundColor = color;
}

//! images: Belge içerisindeki img tagına sahip tüm elemanların referanslarını elde etmek için kullanılır.
function imagesFunction() {
    for (let index = 0; index < document.images.length; index++) {
        document.images[index].height = "50";
    }
};
//! createAttribute & setAttributeNode kullanım örneği
function linksAdd() {
    var valueLink = document.getElementById("linkekle");
    var features = document.createAttribute("href");
    features.value = "http://www.google.com";
    valueLink.setAttributeNode(features);
};

export {
    get_SimpleFunction,
    get_hepsinisec_SimpleFunction,
    get_hepsinitemizle_SimpleFunction,
    get_degistir_SimpleFunction,
    get_arkaplan_SimpleFunction,
    imagesFunction,
    SetColor,
    linksAdd
};