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
const imagesSmall = document.getElementById('images_Small');
imagesSmall.addEventListener('click', () => {
    domModule.imagesFunction();
});
