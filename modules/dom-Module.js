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
//! doctype : Belge döküman türü referansını elde etmek için kullanılır..
function doctypeFunctionSimple() {
    var doctypeView = document.doctype.name;
    document.getElementById("sDoctype").innerHTML = doctypeView;
};
//! documentElement : HTML TAG'ının referansını element nesnesi halinde elde etmek için kullanılır...
function documentElementFunctionSimple() {
    var documentElementView = document.documentElement.nodeName;
    document.getElementById("sDocumentElement").innerHTML = documentElementView;
};
//!  characterSet : Belgenin karakter kodlamısını görüntülemek için kullanılır..
function characterSetFunctionSimple() {
    var characterSetView = document.characterSet;
    document.getElementById("sCharacterSet").innerHTML = characterSetView;
};
//! inputEncoding : Belgenin karakter kodlamasının referansını elde etmek için kullanılır...
function inputEncodingFunctionSimple() {
    var inputEncodingView = document.inputEncoding;
    document.getElementById("sInputEncoding").innerHTML = inputEncodingView;
};
//! Title : Belge içerisindeki title tagını elde etmek için kullanılır...
function titleFunctionSimple() {
    var titleView = document.title;
    document.getElementById("sTitle").innerHTML = titleView;
};
//! compatMode : Belgenin tarayıcı tarafında hangi modda çalıştırıldığını elde etmek için kullanılır...
function compatModeFunctionSimple() {
    var compatModeView = document.compatMode;
    document.getElementById("sCompatMode").innerHTML = compatModeView;
};
//! defaultView: Belgenin pencere nesnesini elde etmek için kullanılır
function defaultViewFunctionSimple() {
    var defaultViewView = document.defaultView;
    document.getElementById("sDefaultView").innerHTML = defaultViewView;
};
//! documentURI: Belge sayfasının URI adresi referansını elde etmek için kullanılır.
function documentURIFunctionSimple() {
    var documentURIView = document.documentURI;
    document.getElementById("sDocumentURI").innerHTML = documentURIView;
};
//! baseURI: Belgenin mutlak URL adresi referansını elde etmek için kullanılır.
function baseURIFunctionSimple() {
    var baseURIView = document.baseURI;
    document.getElementById("sBaseURI").innerHTML = baseURIView;
};
//! URL: Belgenin tam URL adresi referansını elde etmek için kullanılır.
function URLFunctionSimple() {
    var URLView = document.URL;
    document.getElementById("sURL").innerHTML = URLView;
};
//! domain: Belgenin alan adı adresi referansını elde etmek için kullanılır.
function domainFunctionSimple() {
    var domainView = document.domain;
    document.getElementById("sDomain").innerHTML = domainView;
};
//! lastModified: Belgenin en son güncelleme tarihini ve saatini elde etmek için kullanılır.
function lastModifiedFunctionSimple() {
    var lastModifiedView = document.lastModified;
    document.getElementById("sLastModified").innerHTML = lastModifiedView;
};
//! readyState: Belge içeriğinin tarayıcı tarafından yüklenme durumu değeri referansını elde etmek için kullanılır.
function readyStateFunctionSimple() {
    var readyStateView = document.readyState;
    document.getElementById("sReadyState").innerHTML = readyStateView;
};
//! designMode: Belgenin çalışma anında düzenlenebilir olup olmadığını elde etmek için kullanılır.
function designModeFunctionSimple() {
    var designModeView = document.designMode;
    document.getElementById("sDesignMode").innerHTML = designModeView;
};
//! hasFocus: Belge odağının olup olmadığını(Boolean veri türünde) elde etmek için kullanılır.
function hasFocusFunctionSimple() {
    var hasFocusView = document.hasFocus();
    document.getElementById("sHasFocus").innerHTML = hasFocusView;
};
//! plugins: Tarayıcıdaki tüm eklentilerin referanslarını elde etmek için kullanılır.
function pluginFunctionSimple() {
    var pluginView = navigator.plugins.length;
    for (var index = 0; index < pluginView; index++) {
        var result = navigator.plugins[index].name;
        document.getElementById("sPlugin").innerHTML = result;
    }
};
//! anchors: Belge içerisindeki çapa TAG'ına sahip tüm elemanların referansını elde etmek için kullanılır.
function anchorsFunctionSimple() {
    var anchorsView = document.anchors.length;
    document.getElementById("sAnchors").innerHTML = anchorsView;
};
//! links: Belge içerisindeki tüm linklerin referansını elde etmek için kullanılır.
function linksFunctionSimple() {
    var linksView = document.links.length;
    document.getElementById("sLinks").innerHTML = linksView;
};
//! scripts: Belge içerisindeki script tagına sahip tüm elemanların referanslarını elde etmek için kullanılır.
function scriptsFunctionSimple() {
    var scriptsView = document.scripts.length;
    document.getElementById("sScripts").innerHTML = scriptsView;
};
//! forms: Belge içerisindeki form tagına sahip tüm elemanların referanslarını elde etmek için kullanılır.
function formsFunctionSimple() {
    var formsView = document.forms.length;
    document.getElementById("sForms").innerHTML = formsView;
};
//! location: Belge sayfasının URL adresi referansını elde etmek için kullanılır.
function locationFunctionSimple() {
    document.location.href = "#top"
};
export {
    get_SimpleFunction,
    get_hepsinisec_SimpleFunction,
    get_hepsinitemizle_SimpleFunction,
    get_degistir_SimpleFunction,
    get_arkaplan_SimpleFunction,
    imagesFunction,
    SetColor,
    linksAdd,
    doctypeFunctionSimple,
    documentElementFunctionSimple,
    characterSetFunctionSimple,
    inputEncodingFunctionSimple,
    titleFunctionSimple,
    compatModeFunctionSimple,
    defaultViewFunctionSimple,
    documentURIFunctionSimple,
    baseURIFunctionSimple,
    URLFunctionSimple,
    domainFunctionSimple,
    lastModifiedFunctionSimple,
    readyStateFunctionSimple,
    designModeFunctionSimple,
    hasFocusFunctionSimple,
    pluginFunctionSimple,
    anchorsFunctionSimple,
    linksFunctionSimple,
    scriptsFunctionSimple,
    formsFunctionSimple,
    locationFunctionSimple,
};