(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports={filter:"Filter_filter__wOy28","search-block":"Filter_search-block__2tJ7B","search-icon":"Filter_search-icon__2jf0n",search:"Filter_search__3cr43",option:"Filter_option__3jUmV"}},12:function(e,t,a){e.exports={interior:"Interior_interior__jyq85","interior-content--flex":"Interior_interior-content--flex__2Q0m3",flag:"Interior_flag__3vDjY",borders:"Interior_borders__1qDjU","button--border":"Interior_button--border__Ln0uf"}},16:function(e,t,a){e.exports={header:"Header_header__1EApl","header-content--flex":"Header_header-content--flex__1b9my",title:"Header_title__3fiAW","button--dark-mode":"Header_button--dark-mode__2iGF0"}},25:function(e,t,a){e.exports={button:"Button_button__pApp7"}},26:function(e,t,a){e.exports={grid:"Grid_grid__1Xczd"}},27:function(e,t,a){e.exports=a(70)},36:function(e,t,a){},60:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(24),l=a.n(r),o=(a(36),a(3)),i=(a(39),a(41),a(60),c.a.createContext({countriesList:[],newFilter:function(){},setSelectedCountry:function(){},selectedCountry:{},getBorderObjects:function(){}})),s=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)([]),m=Object(o.a)(s,2),u=m[0],d=m[1],f=Object(n.useState)({}),E=Object(o.a)(f,2),p=E[0],g=E[1];Object(n.useEffect)(function(){fetch("https://restcountries.com/v3.1/all").then(function(e){if(200===e.status)return e.json()}).then(function(e){l(e),d(e)})},[]);var _={countriesList:r,newFilter:function(e,t){if(0!==u.length){var a=u.filter(function(e){return e.region.toLowerCase().includes(t.toLowerCase())});""===t&&(a=u);var n=a.filter(function(t){return t.name.common.toLowerCase().includes(e.toLowerCase())});l(n)}},selectedCountry:p,setSelectedCountry:function(e){g(e),window.localStorage.setItem("currentCountry",JSON.stringify(e))},getBorderObjects:function(e){if(void 0!==e){var t=[];return e.forEach(function(e){var a=u.filter(function(t){return t.cca3.includes(e)});t.push(a[0])}),t}}};return c.a.createElement(i.Provider,{value:_},e.children)},m=a(16),u=a.n(m),d=a(71),f=a(25),E=a.n(f),p=function(e){return c.a.createElement("button",{onClick:e.onClick,className:"".concat(E.a.button," ").concat(e.className)},e.children)},g=function(e){return c.a.createElement("header",{className:"".concat(u.a.header)},c.a.createElement("div",{className:"content-width ".concat(u.a["header-content--flex"])},c.a.createElement("span",{className:u.a.title},"Where in the world?"),c.a.createElement(p,{className:"m-0 px-0 ".concat(u.a["button--dark-mode"]),onClick:e.darkModeFunction},c.a.createElement(d.a,null)," Dark mode")))},_=a(9),b=a(8),v=a.n(b),N=function(e){var t=Object(n.useContext)(i),a=e.country.name.common;return c.a.createElement(_.b,{onClick:function(){t.setSelectedCountry(e.country)},className:"col-12 col-sm-6 col-lg-3 ".concat(v.a["card--link"]),to:"/countries-api/".concat(a)},c.a.createElement("div",{className:v.a["card--padding"]},c.a.createElement("div",{className:" ".concat(v.a["card--custom"]," ").concat(e.className)},c.a.createElement("div",{className:v.a["card--image-container"]},c.a.createElement("img",{src:e.country.flags.svg,alt:"Flag of ".concat(a)})),c.a.createElement("ul",{className:v.a["card--info"]},c.a.createElement("li",{className:"strong ".concat(v.a["card--name"])},a),c.a.createElement("li",null,c.a.createElement("span",{className:"strong"},"Population: "),e.country.population.toLocaleString()),c.a.createElement("li",null,c.a.createElement("span",{className:"strong"},"Region: "),e.country.region),c.a.createElement("li",null,c.a.createElement("span",{className:"strong"},"Capital City: "),e.country.capital)))))},h=a(72),C=a(11),y=a.n(C),j=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(""),m=Object(o.a)(s,2),u=m[0],d=m[1],f=Object(n.useContext)(i);Object(n.useEffect)(function(){var e=setTimeout(function(){f.newFilter(r,u)},500);return function(){clearTimeout(e)}},[r,u]);return c.a.createElement("section",{className:"".concat(y.a.filter," ").concat(e.className)},c.a.createElement("div",{className:y.a["search-block"]},c.a.createElement("div",{className:y.a["search-icon"]},c.a.createElement(h.a,null)),c.a.createElement("input",{className:y.a.search,placeholder:"search for a country...",onChange:function(e){l(e.target.value)},type:"text"})),c.a.createElement("select",{className:y.a.option,onChange:function(e){d(e.target.value)}},c.a.createElement("option",{value:"",default:!0},"Select a region"),c.a.createElement("option",{value:"africa"},"Africa"),c.a.createElement("option",{value:"america"},"America"),c.a.createElement("option",{value:"asia"},"Asia"),c.a.createElement("option",{value:"europe"},"Europe"),c.a.createElement("option",{value:"oceania"},"Oceania")))},O=a(26),k=a.n(O),w=function(){var e=Object(n.useContext)(i).countriesList;return c.a.createElement("main",{className:"".concat(k.a.grid)},c.a.createElement("div",{className:"content-width"},c.a.createElement(j,null),c.a.createElement("div",{className:"row"},e.map(function(e,t){return c.a.createElement(N,{key:"country-".concat(t),className:"",country:e})}))))},x=a(0),F=a(73),S=a(12),L=a.n(S),I=function(e){var t=Object(n.useContext)(i),a=t.selectedCountry,r=Object(x.l)();0===Object.keys(a).length&&a.constructor===Object&&(a=JSON.parse(window.localStorage.getItem("currentCountry")));var l=t.getBorderObjects(a.borders),o=Object.values(a.name.nativeName),s=Object.values(a.languages),m=Object.values(a.currencies),u=o[0].common;return c.a.createElement("main",{className:"".concat(e.className," ").concat(L.a.interior)},c.a.createElement("div",{className:"content-width ".concat(L.a["interior-content--flex"])},c.a.createElement(p,{className:"mx-0",onClick:function(){r("/countries-api/")}},c.a.createElement(F.a,null)," Back"),c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("img",{className:L.a.flag,src:a.flags.svg,alt:"Flag of ".concat(a.name.common)})),c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("h1",{className:"my-3 align-left"},a.name.common),c.a.createElement("div",{className:"row"},c.a.createElement("ul",{className:"col-sm-6 align-left list-style-none"},c.a.createElement("li",null,c.a.createElement("span",{className:"strong"},"Native Name:")," ",c.a.createElement("span",null,u)),c.a.createElement("li",null,c.a.createElement("span",{className:"strong"},"Population:")," ",a.population.toLocaleString()),c.a.createElement("li",null,c.a.createElement("span",{className:"strong"},"Region:")," ",a.region),a.subregion&&c.a.createElement("li",null,c.a.createElement("span",{className:"strong"},"Subregion:")," ",a.subregion),c.a.createElement("li",null,c.a.createElement("span",{className:"strong"},"Capital City:")," ",a.capital.map(function(e,t){return c.a.createElement("span",{key:"capital-".concat(t)},e,t===a.capital.length-1?"":", ")}))),c.a.createElement("ul",{className:"col-sm-6 list-style-none align-left"},a.tld&&c.a.createElement("li",null,c.a.createElement("span",{className:"strong"},"Top level domain:")," ",a.tld.map(function(e,t){return c.a.createElement("span",{key:"tld-".concat(t)},e)})),c.a.createElement("li",null,c.a.createElement("span",{className:"strong"},"Currency:")," ",m.map(function(e,t){return c.a.createElement("span",{key:"currency-".concat(t)},e.name,t===m.length-1?"":", ")})),c.a.createElement("li",null,c.a.createElement("span",{className:"strong"},"Languages:")," ",s.map(function(e,t){return c.a.createElement("span",{key:"lang-".concat(t)},e,t===s.length-1?"":", ")})))),void 0!==l&&void 0!==l[0]&&c.a.createElement("div",{className:"".concat(L.a.borders)},c.a.createElement("span",{className:"strong col-12 col-sm-3 align-left"},"Border Countries:"),l.map(function(e,a){return c.a.createElement(p,{key:"borderCountry-".concat(a),className:L.a["button--border"]},c.a.createElement(_.b,{onClick:function(){return function(e){t.setSelectedCountry(e)}(e)},to:"/countries-api/".concat(e.name.common)},e.name.common))}))))))},B=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(w,null))},A=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(I,null))};var J=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1];return c.a.createElement(_.a,null,c.a.createElement("div",{className:"App","data-theme":a},c.a.createElement(s,null,c.a.createElement(g,{darkModeFunction:function(){r("light"===a?"dark":"light")}}),c.a.createElement(x.c,null,c.a.createElement(x.a,{path:"/countries-api/",element:c.a.createElement(B,null)}),c.a.createElement(x.a,{path:"/countries-api/:name",element:c.a.createElement(A,null)})))))},T=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,74)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(J,null))),T()},8:function(e,t,a){e.exports={"card--link":"Card_card--link__2vctF","card--padding":"Card_card--padding__1VJd_","card--custom":"Card_card--custom__2YQeG","card--image-container":"Card_card--image-container__1AaIO","card--info":"Card_card--info__25-8H","card--name":"Card_card--name__bLcTu"}}},[[27,3,2]]]);
//# sourceMappingURL=main.13946635.chunk.js.map