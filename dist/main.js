!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);const{cash:n,eu:o,rus:u}={cash:[4e4,5e3,30400,12e3],eu:["SRL","PLO","J&K"],rus:["RusAuto","SBO"]};new class{constructor(e,t="Victor",r,n){this.owner,this.director,this.cash,this.emp}getInfo(){const{owner:e,director:t,cash:r,emp:n}=this,i=[...o,...u,"unexpected sponsor"];console.log(`We have a business. Owner: ${e}, director: ${t}. Our budget: ${r}. And our employers: ${n} \nAnd we have a sponsors: \n${i.join(" ")} \nNote. Be careful with ${o[0]}. It's a huge risk.`)}}(...["Sam",,((e=0,...t)=>{return[t]=t,t.reduce((e,t)=>e+t,+e)})(null,n),["Alex","","ludmila","Viktor","","oleg","iNna","Ivan","Alex","Olga"," Ann"].filter(e=>""!=e).map(e=>e.toLowerCase().trim())]).getInfo()}]);