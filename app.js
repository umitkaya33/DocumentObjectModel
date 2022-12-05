import * as  domModule from "./modules/dom-Module.js";
const btnDomModule = document.getElementById('btnDomModule');
btnDomModule.addEventListener('click',()=>{
    domModule.domModuleSimpleFunction();
});