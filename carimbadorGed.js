// ==UserScript==
// @name         Carimbador
// @namespace    http://tampermonkey.net/
// @version      2023-12-26
// @description  try to take over the world!
// @author       You
// @require https://code.jquery.com/jquery-3.6.0.min.js
// @match        http://sigeduca.seduc.mt.gov.br/ged/hwgedteladocumento.aspx?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //var xpath = "//span[text()='Secretário(a)']";
    //var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    //console.log(matchingElement);
    //matchingElement.textContent = "New Span content";

    var aTags = document.getElementsByTagName("span");
    var searchText1 = "Secretário(a)";
    var searchText2 = "Diretor(a)";
    var secretario = " Lucas de Souza Monteiro \r\n Secretário Escolar \r\n Portaria nº1.677/2023/GS/SEDUC/MT ";
    var diretor = " Rodrigo Leandro Lemes Gonçalves \r\n Diretor Escolar \r\n Portaria nº1.678/2023/GS/SEDUC/MT ";
    var found;

    for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].textContent == searchText1) {
            console.log(aTags[i]);
            aTags[i].setAttribute('style', 'white-space: pre;font-size: 12px');
            aTags[i].textContent = secretario;
        }
        if (aTags[i].textContent == searchText2) {
            console.log(aTags[i]);
            aTags[i].setAttribute('style', 'white-space: pre;font-size: 12px');
            aTags[i].textContent = diretor;
        }
    }



    //var songlist = ['song1', 'song2', 'song3'];
   // var tabelas = document.getElementById("content").getElementsByTagName("table");
    //var sendData = function() {
     //   $.post('http://localhost/separador2/ficha_ind/recebe.php', {
    //        data: songlist
   //     }, function(response) {
   //         console.log(response);
   //     });
   // }
    //sendData();
})();
