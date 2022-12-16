import * as domDocumentModule from "./modules/dom-Document-Module.js";
import * as domAttributesModule from "./modules/dom-Attributes-Module.js";
import * as domElementsModule from "./modules/dom-Elements-Module.js";

const accessKeyModule = document.getElementById('bAcsessKey');
accessKeyModule.addEventListener('click', () => {
    domElementsModule.accesskeyFunctionSimple();
});
const focusModule = document.getElementById('bFocus');
focusModule.addEventListener('click', () => {
    domElementsModule.focusFunctionSimple();
});
const blurModule = document.getElementById('bBlur');
blurModule.addEventListener('click', () => {
    domElementsModule.blurFunctionSimple();
});
const classListModule = document.getElementById('bClassList');
classListModule.addEventListener('click', () => {
    domElementsModule.classListFunctionSimple();
});
const childrenModule = document.getElementById('bChildren');
childrenModule.addEventListener('click', () => {
    domElementsModule.childrenFunctionSimple();
});
const childNodesModule = document.getElementById('bChildNodes');
childNodesModule.addEventListener('click', () => {
    domElementsModule.childNodesFunctionSimple();
});
const firstElementChildModule = document.getElementById('bFirstElementChild');
firstElementChildModule.addEventListener('click', () => {
    domElementsModule.firstElementChildFunctionSimple();
});
const firstChildModule = document.getElementById('bFirstChild');
firstChildModule.addEventListener('click', () => {
    domElementsModule.firstChildFunctionSimple();
});
const lastElementChildModule = document.getElementById('bLastElementChild');
lastElementChildModule.addEventListener('click', () => {
    domElementsModule.lastElementChildFunctionSimple();
});
const lastChildModule = document.getElementById('bLastChild');
lastChildModule.addEventListener('click', () => {
    domElementsModule.lastChildFunctionSimple();
});
const nextElementSiblingModule = document.getElementById('bNextElementSibling');
nextElementSiblingModule.addEventListener('click', () => {
    domElementsModule.nextElementSiblingFunctionSimple();
});
const nextSiblingModule = document.getElementById('bNextSibling');
nextSiblingModule.addEventListener('click', () => {
    domElementsModule.nextSiblingFunctionSimple();
});
/*
const btnDomModule = document.getElementById('btnDomModule');
btnDomModule.addEventListener('click', () => {
    domDocumentModule.get_SimpleFunction();
});
const btnDomModule_sec = document.getElementById('btnDomModule_sec');
btnDomModule_sec.addEventListener('click', () => {
    domDocumentModule.get_hepsinisec_SimpleFunction();
});
const btnDomModule_temizle = document.getElementById('btnDomModule_temizle');
btnDomModule_temizle.addEventListener('click', () => {
    domDocumentModule.get_hepsinitemizle_SimpleFunction();
});
const btnDomModule_degistir = document.getElementById('btnDomModule_degistir');
btnDomModule_degistir.addEventListener('click', () => {
    domDocumentModule.get_degistir_SimpleFunction();
});
const btnDomModule_arkaplan = document.getElementById('btnDomModule_arkaplan');
btnDomModule_arkaplan.addEventListener('click', () => {
    domDocumentModule.get_arkaplan_SimpleFunction();
});
const btnRedBG = document.getElementById('btnRedBG');
btnRedBG.addEventListener('click', () => {
    domDocumentModule.SetColor('Red');
});
const btnBlackBG = document.getElementById('btnBlackBG');
btnBlackBG.addEventListener('click', () => {
    domDocumentModule.SetColor('Black');
});
const btnBlueBG = document.getElementById('btnBlueBG');
btnBlueBG.addEventListener('click', () => {
    domDocumentModule.SetColor('Blue');
});
const btnGreenBG = document.getElementById('btnGreenBG');
btnGreenBG.addEventListener('click', () => {
    domDocumentModule.SetColor('Green');
});
const btnWhiteBG = document.getElementById('btnWhiteBG');
btnWhiteBG.addEventListener('click', () => {
    domDocumentModule.SetColor('White');
});
const imagesSmall = document.getElementById('images_Small');
imagesSmall.addEventListener('click', () => {
    domDocumentModule.imagesFunction();
});
const linksAdd = document.getElementById('btnLinksAdd');
linksAdd.addEventListener('click', () => {
    domDocumentModule.linksAdd();
});
const example_Doctype = document.getElementById('bDoctype');
example_Doctype.addEventListener('click', () => {
    domDocumentModule.doctypeFunctionSimple();
});
const example_DocumentElement = document.getElementById('bDocumentElement');
example_DocumentElement.addEventListener('click', () => {
    domDocumentModule.documentElementFunctionSimple();
});
const example_CharacterSet = document.getElementById('bCharacterSet');
example_CharacterSet.addEventListener('click', () => {
    domDocumentModule.characterSetFunctionSimple();
});
const example_InputEncoding = document.getElementById('bInputEncoding');
example_InputEncoding.addEventListener('click', () => {
    domDocumentModule.inputEncodingFunctionSimple();
});
const example_Title = document.getElementById('bTitle');
example_Title.addEventListener('click', () => {
    domDocumentModule.titleFunctionSimple();
});
const example_CompatMode = document.getElementById('bCompatMode');
example_CompatMode.addEventListener('click', () => {
    domDocumentModule.compatModeFunctionSimple();
});
const example_DefaultView = document.getElementById('bDefaultView');
example_DefaultView.addEventListener('click', () => {
    domDocumentModule.defaultViewFunctionSimple();
});
const example_DocumentURI = document.getElementById('bDocumentURI');
example_DocumentURI.addEventListener('click', () => {
    domDocumentModule.documentURIFunctionSimple();
});
const example_BaseURI = document.getElementById('bBaseURI');
example_BaseURI.addEventListener('click', () => {
    domDocumentModule.baseURIFunctionSimple();
});
const example_URL = document.getElementById('bURL');
example_URL.addEventListener('click', () => {
    domDocumentModule.URLFunctionSimple();
});
const example_Domain = document.getElementById('bDomain');
example_Domain.addEventListener('click', () => {
    domDocumentModule.domainFunctionSimple();
});
const example_LastModified = document.getElementById('bLastModified');
example_LastModified.addEventListener('click', () => {
    domDocumentModule.lastModifiedFunctionSimple();
});
const example_ReadyState = document.getElementById('bReadyState');
example_ReadyState.addEventListener('click', () => {
    domDocumentModule.readyStateFunctionSimple();
});
const example_DesignMode = document.getElementById('bDesignMode');
example_DesignMode.addEventListener('click', () => {
    domDocumentModule.designModeFunctionSimple();
});
const example_HasFocus = document.getElementById('bHasFocus');
example_HasFocus.addEventListener('click', () => {
    domDocumentModule.hasFocusFunctionSimple();
});
const example_Plugin = document.getElementById('bPlugin');
example_Plugin.addEventListener('click', () => {
    domDocumentModule.pluginFunctionSimple();
});
const example_Anchors = document.getElementById('bAnchors');
example_Anchors.addEventListener('click', () => {
    domDocumentModule.anchorsFunctionSimple();
});
const example_Links = document.getElementById('bLinks');
example_Links.addEventListener('click', () => {
    domDocumentModule.linksFunctionSimple();
});
const example_Scripts = document.getElementById('bScripts');
example_Scripts.addEventListener('click', () => {
    domDocumentModule.scriptsFunctionSimple();
});
const example_Forms = document.getElementById('bForms');
example_Forms.addEventListener('click', () => {
    domDocumentModule.formsFunctionSimple();
});
const example_Location = document.getElementById('btnLocation');
example_Location.addEventListener('click', () => {
    domDocumentModule.locationFunctionSimple();
});
const example_createElement = document.getElementById('bCreateElement');
example_createElement.addEventListener('click', () => {
    domDocumentModule.createElementFunctionSimple();
});
const example_querySelector = document.getElementById('bQuerySelector');
example_querySelector.addEventListener('click', () => {
    domDocumentModule.querySelectorFunctionSimple();
});
const example_querySelectorAll = document.getElementById('bQuerySelectorAll');
example_querySelectorAll.addEventListener('click', () => {
    domDocumentModule.querySelectorAllFunctionSimple();
});
const example_adoptNode = document.getElementById('bAdoptNode');
example_adoptNode.addEventListener('click', () => {
    domDocumentModule.adoptNodeFunctionSimple();
});
const example_importNode = document.getElementById('bImportNode');
example_importNode.addEventListener('click', () => {
    domDocumentModule.importNodeFunctionSimple();
});
const example_normalize = document.getElementById('bNormalize');
example_normalize.addEventListener('click', () => {
    domDocumentModule.normalizeFunctionSimple();
});
const example_cookie = document.getElementById('bCookie');
example_cookie.addEventListener('click', () => {
    domDocumentModule.cookieFunctionSimple();
});
const length_example = document.getElementById('bAttLength');
length_example.addEventListener('click', () => {
    domAttributesModule.lengthSimpleFunction();
});
const name_example = document.getElementById('bAttName');
name_example.addEventListener('click', () => {
    domAttributesModule.nameSimpleFunction();
});
const value_example = document.getElementById('bAttValue');
value_example.addEventListener('click', () => {
    domAttributesModule.valueSimpleFunction();
});
const specified_example = document.getElementById('bAttSpecified');
specified_example.addEventListener('click', () => {
    domAttributesModule.specifiedSimpleFunction();
});
const getNamedItem_example = document.getElementById('bAttgetNamedItem');
getNamedItem_example.addEventListener('click', () => {
    domAttributesModule.getNamedItemSimpleFunction();
});
const setNamedItem_example = document.getElementById('bAttsetNamedItem');
setNamedItem_example.addEventListener('click', () => {
    domAttributesModule.setNamedItemSimpleFunction();
});
const removeNamedItem_example = document.getElementById('bAttremoveNamedItem');
removeNamedItem_example.addEventListener('click', () => {
    domAttributesModule.removeNamedItemSimpleFunction();
});
const item_example = document.getElementById('bAttItem');
item_example.addEventListener('click', () => {
    domAttributesModule.itemSimpleFunction();
});
*/