import * as  domModule from "./modules/dom-Module.js";

const btnDomModule = document.getElementById('btnDomModule');
btnDomModule.addEventListener('click', () => {
    domModule.get_SimpleFunction();
});

const btnDomModule_sec = document.getElementById('btnDomModule_sec');
btnDomModule_sec.addEventListener('click', () => {
    domModule.get_hepsinisec_SimpleFunction();
});
const btnDomModule_temizle = document.getElementById('btnDomModule_temizle');
btnDomModule_temizle.addEventListener('click', () => {
    domModule.get_hepsinitemizle_SimpleFunction();
});
const btnDomModule_degistir = document.getElementById('btnDomModule_degistir');
btnDomModule_degistir.addEventListener('click', () => {
    domModule.get_degistir_SimpleFunction();
});
const btnDomModule_arkaplan = document.getElementById('btnDomModule_arkaplan');
btnDomModule_arkaplan.addEventListener('click', () => {
    domModule.get_arkaplan_SimpleFunction();
});
const btnRedBG = document.getElementById('btnRedBG');
btnRedBG.addEventListener('click', () => {
    domModule.SetColor('Red');
});
const btnBlackBG = document.getElementById('btnBlackBG');
btnBlackBG.addEventListener('click', () => {
    domModule.SetColor('Black');
});
const btnBlueBG = document.getElementById('btnBlueBG');
btnBlueBG.addEventListener('click', () => {
    domModule.SetColor('Blue');
});
const btnGreenBG = document.getElementById('btnGreenBG');
btnGreenBG.addEventListener('click', () => {
    domModule.SetColor('Green');
});
const btnWhiteBG = document.getElementById('btnWhiteBG');
btnWhiteBG.addEventListener('click', () => {
    domModule.SetColor('White');
});
const imagesSmall = document.getElementById('images_Small');
imagesSmall.addEventListener('click', () => {
    domModule.imagesFunction();
});
const linksAdd = document.getElementById('btnLinksAdd');
linksAdd.addEventListener('click', () => {
    domModule.linksAdd();
});
const example_Doctype = document.getElementById('bDoctype');
example_Doctype.addEventListener('click', () => {
    domModule.doctypeFunctionSimple();
});
const example_DocumentElement = document.getElementById('bDocumentElement');
example_DocumentElement.addEventListener('click', () => {
    domModule.documentElementFunctionSimple();
});
const example_CharacterSet = document.getElementById('bCharacterSet');
example_CharacterSet.addEventListener('click', () => {
    domModule.characterSetFunctionSimple();
});
const example_InputEncoding = document.getElementById('bInputEncoding');
example_InputEncoding.addEventListener('click', () => {
    domModule.inputEncodingFunctionSimple();
});
const example_Title = document.getElementById('bTitle');
example_Title.addEventListener('click', () => {
    domModule.titleFunctionSimple();
});
const example_CompatMode = document.getElementById('bCompatMode');
example_CompatMode.addEventListener('click', () => {
    domModule.compatModeFunctionSimple();
});
const example_DefaultView = document.getElementById('bDefaultView');
example_DefaultView.addEventListener('click', () => {
    domModule.defaultViewFunctionSimple();
});
const example_DocumentURI = document.getElementById('bDocumentURI');
example_DocumentURI.addEventListener('click', () => {
    domModule.documentURIFunctionSimple();
});
const example_BaseURI = document.getElementById('bBaseURI');
example_BaseURI.addEventListener('click', () => {
    domModule.baseURIFunctionSimple();
});
const example_URL = document.getElementById('bURL');
example_URL.addEventListener('click', () => {
    domModule.URLFunctionSimple();
});
const example_Domain = document.getElementById('bDomain');
example_Domain.addEventListener('click', () => {
    domModule.domainFunctionSimple();
});
const example_LastModified = document.getElementById('bLastModified');
example_LastModified.addEventListener('click', () => {
    domModule.lastModifiedFunctionSimple();
});
const example_ReadyState = document.getElementById('bReadyState');
example_ReadyState.addEventListener('click', () => {
    domModule.readyStateFunctionSimple();
});
const example_DesignMode = document.getElementById('bDesignMode');
example_DesignMode.addEventListener('click', () => {
    domModule.designModeFunctionSimple();
});
const example_HasFocus = document.getElementById('bHasFocus');
example_HasFocus.addEventListener('click', () => {
    domModule.hasFocusFunctionSimple();
});
const example_Plugin = document.getElementById('bPlugin');
example_Plugin.addEventListener('click', () => {
    domModule.pluginFunctionSimple();
});
const example_Anchors = document.getElementById('bAnchors');
example_Anchors.addEventListener('click', () => {
    domModule.anchorsFunctionSimple();
});
const example_Links = document.getElementById('bLinks');
example_Links.addEventListener('click', () => {
    domModule.linksFunctionSimple();
});
const example_Scripts = document.getElementById('bScripts');
example_Scripts.addEventListener('click', () => {
    domModule.scriptsFunctionSimple();
});
const example_Forms = document.getElementById('bForms');
example_Forms.addEventListener('click', () => {
    domModule.formsFunctionSimple();
});
const example_Location = document.getElementById('btnLocation');
example_Location.addEventListener('click', () => {
    domModule.locationFunctionSimple();
});
const example_createElement = document.getElementById('bCreateElement');
example_createElement.addEventListener('click', () => {
    domModule.createElementFunctionSimple();
});
const example_querySelector = document.getElementById('bQuerySelector');
example_querySelector.addEventListener('click', () => {
    domModule.querySelectorFunctionSimple();
});
const example_querySelectorAll = document.getElementById('bQuerySelectorAll');
example_querySelectorAll.addEventListener('click', () => {
    domModule.querySelectorAllFunctionSimple();
});

