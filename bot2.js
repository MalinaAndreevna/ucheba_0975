// ==UserScript==
// @name         Bing Bot 2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot 2 for Bing
// @author       Alina Blinova
// @match        https://www.bing.com/*
// @match        https://napli.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links;
let btnSearch = document.getElementById("search_icon");
let keywords = [
  "Установка и настройка Git",
  "10 самых популярных шрифтов от Google",
  "Отключение редакций и ревизий в WordPress",
  "Вывод произвольных типов записей и полей в WordPress",
];
let keyword = keywords[getRandom(0, keywords.length)];
let bingInput = document.getElementsByName("q")[0];

if (location.hostname == "napli.ru") {
  console.log("Мы на целевом сайте!");
  setInterval(() => {
    let index = getRandom(0, links.length);
    if (getRandom(0, 101) > 70) {
      location.href = "https://www.bing.com/";
    }
    if (links[index].href.indexOf("napli.ru") !== -1) links[index].click();
  }, getRandom(3000, 5000));
} else if (window.location.toString().includes("search") == false) {
  let i = 0;
  let timerId = setInterval(() => {
    bingInput.value += keyword[i];
    i++;
    if (i == keyword.length) {
      clearInterval(timerId);
      setTimeout(() => {
        btnSearch.click();
      }, getRandom(3000, 5000));
    }
  }, 300);
} else {
  let nextPage = true;
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("napli.ru") !== -1) {
      let link = links[i];
      nextPage = false;
      console.log("Нашел строку " + link);
      setTimeout(() => {
        link.click();
      }, getRandom(2000, 3000));
      break;
    }
  }
  if (document.querySelector(".sb_pagS_bp").innerHTML == "5") {
    nextPage = false;
    location.href = "https://www.bing.com/";
  }
  if (nextPage) {
    setTimeout(() => {
      let nextP = document.querySelector(".sb_pagN_bp");
      nextP.click();
    }, getRandom(2000, 4000));
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
