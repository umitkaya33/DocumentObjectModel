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