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

export {
    get_SimpleFunction,
    get_hepsinisec_SimpleFunction,
    get_hepsinitemizle_SimpleFunction
};