(this.webpackJsonpconcentration_calculator_app=this.webpackJsonpconcentration_calculator_app||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(16),s=a.n(l),o=a(7),r=a(6),i=function(e){Object(n.useEffect)((function(){var t=document.querySelector(".".concat(e));return t&&t.classList.add("".concat(e,"--active")),function(){t.classList.remove("".concat(e,"--active"))}}),[e])};var u=function(){return i("home"),c.a.createElement("section",{className:"home"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",{className:"section__title"},"Kalkulator st\u0119\u017ce\u0144")),c.a.createElement("section",{className:"home__list"},c.a.createElement(r.b,{to:"/conversion",className:"home__link"},c.a.createElement("i",{className:"fas fa-calculator"}),c.a.createElement("section",{className:"home__content"},c.a.createElement("h3",{className:"home__subtitle"},"Konwersja"),c.a.createElement("p",{className:"home__text"},"Zamie\u0144 jednostki masy, obj\u0119to\u015bci oraz st\u0119\u017cenia molowego i\xa0procentowego."))),c.a.createElement(r.b,{to:"/concentration",className:"home__link"},c.a.createElement("i",{className:"fas fa-percentage"}),c.a.createElement("section",{className:"home__content"},c.a.createElement("h3",{className:"home__subtitle"},"St\u0119\u017cenie"),c.a.createElement("p",{className:"home__text"},"Oblicz jak\u0105 ilo\u015b\u0107 substancji i\xa0rozpuszczalnika nale\u017cy po\u0142\u0105czy\u0107 aby otrzyma\u0107 roztw\xf3r o\xa0okre\u015blonym st\u0119\u017ceniu."))),c.a.createElement(r.b,{to:"/dose",className:"home__link"},c.a.createElement("i",{className:"fas fa-vial"}),c.a.createElement("section",{className:"home__content"},c.a.createElement("h3",{className:"home__subtitle"},"Dawki"),c.a.createElement("p",{className:"home__text"},"Oblicz jak\u0105 ilo\u015b\u0107 leku / substancji i\xa0rozpuszczalnika nale\u017cy po\u0142\u0105czy\u0107 aby otrzyma\u0107 dawk\u0119 odpowiedni\u0105 dla okre\u015blonego celu.")))),c.a.createElement("footer",{className:"footer"},c.a.createElement("p",{className:"footer__text"},"Created by"," ",c.a.createElement("a",{href:"https://martazaorska.github.io/portfolio/",rel:"noopener noreferrer",target:"_blank"},"Marta Zaorska")),c.a.createElement("p",{className:"footer__text"},"\xa9 Concentration Calculator App ",(new Date).getFullYear())))},m={gram:{abbr:"g",value:1},miligram:{abbr:"mg",value:.001},kilogram:{abbr:"kg",value:1e3}},b={litr:{abbr:"l",value:1},mililitr:{abbr:"ml",value:.001},hektolitr:{abbr:"hl",value:100},metr_szescienny:{abbr:"m",value:1e3,sup:!0},decymetr_szescienny:{abbr:"dm",value:1,sup:!0},centymetr_szescienny:{abbr:"cm",value:.001,sup:!0},milimetr_szescienny:{abbr:"mm",value:1e-6,sup:!0}},E=a(1),v=function(e){var t=e.replace(",",".");return _(t)?t:""},_=function(e){return/^\d*\.?\d*$/.test(e)},j=function(e){var t="".concat(e).split(".");return t.length<=1?e:t[1].length>4?parseFloat(e.toFixed(4)):e},d=function(e){var t=Object(n.useState)("1"),a=Object(E.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(Object.keys(e)[0]),o=Object(E.a)(s,2),r=o[0],i=o[1],u=Object(n.useState)("1000"),m=Object(E.a)(u,2),b=m[0],_=m[1],d=Object(n.useState)(Object.keys(e)[1]),p=Object(E.a)(d,2),f=p[0],O=p[1];Object(n.useEffect)((function(){var t=(parseFloat(c)||0)*e[r].value/e[f].value;_("".concat(j(t)))}),[c,r,f,e]);return[c,function(e){return l(v(e.target.value))},r,i,f,O,b]};var p=c.a.memo((function(e){var t=e.data,a=e.value,n=e.setValue;return c.a.createElement("select",{value:a,onChange:function(e){return n(e.target.value)}},Object.entries(t).map((function(e){return c.a.createElement("option",{value:e[0],key:e[0]},e[1].abbr,e[1].sup?3:null)})))}));var f=c.a.memo((function(e){var t=e.unitList,a=d(t),n=Object(E.a)(a,7),l=n[0],s=n[1],o=n[2],r=n[3],i=n[4],u=n[5],m=n[6];return c.a.createElement("section",{className:"section__content"},c.a.createElement("div",{className:"section__control"},c.a.createElement("input",{type:"text",value:l,onChange:s,placeholder:"0.0"}),c.a.createElement(p,{data:t,value:o,setValue:r})),c.a.createElement("div",{className:"conversion__icon"},c.a.createElement("i",{className:"fas fa-sync-alt"})),c.a.createElement("div",{className:"section__control"},c.a.createElement("input",{type:"text",value:m,disabled:!0,className:"input--disabled"}),c.a.createElement(p,{data:t,value:i,setValue:u})))}));var O=function(){return c.a.createElement("section",{className:"section__box mass_conversion"},c.a.createElement("h4",{className:"section__subtitle"},"Jednostki masy"),c.a.createElement(f,{unitList:m}))};var N=function(){return c.a.createElement("section",{className:"section__box volume_conversion"},c.a.createElement("h4",{className:"section__subtitle"},"Jednostki obj\u0119to\u015bci"),c.a.createElement(f,{unitList:b}))},h=a(9),g=a.n(h);var k=c.a.memo((function(e){var t=e.label,a=void 0===t?"":t,n=e.value,l=e.setValue,s=e.options;return c.a.createElement("div",{className:"section__control"},""===a?null:c.a.createElement("label",null,a),c.a.createElement("button",{className:g()({radio__button:!0,"radio__button--right":n===s[1].value}),onClick:function(){n===s[0].value?l(s[1].value):l(s[0].value)}},c.a.createElement("span",{className:"label"},s[0].name),c.a.createElement("span",{className:"spin"},c.a.createElement("span",{className:"stripe"}),c.a.createElement("span",{className:"dot"})),c.a.createElement("span",{className:"label"},s[1].name)))}));var w=c.a.memo((function(e){var t=e.label,a=e.value,n=e.setValue,l=e.unitValue,s=e.setUnitValue,o=void 0===s?void 0:s,r=e.unitList,i=void 0===r?[]:r,u=e.sup,m=void 0!==u&&u;return c.a.createElement("div",{className:"section__control"},""===t?null:c.a.createElement("label",null,t),c.a.createElement("input",{type:"text",value:a,onChange:function(e){return n(v(e.target.value))},placeholder:"0.0"}),o?c.a.createElement("select",{value:l,onChange:function(e){return o(e.target.value)}},i.map((function(e,t){return c.a.createElement("option",{value:e,key:"".concat(e,"_").concat(t)},e)}))):""!==l?c.a.createElement("span",{className:"unit"},"[",l,m?c.a.createElement("sup",null,"3"):null,"]"):null)}));var S=c.a.memo((function(e){var t=e.name,a=e.result,n=e.unit,l=e.sup,s=void 0!==l&&l;return c.a.createElement("p",{className:"section__text"},c.a.createElement("span",{className:"name"},t),c.a.createElement("span",{className:"result"}," ",a," "),c.a.createElement("span",{className:"unit"},"[",n,s?c.a.createElement("sup",null,"3"):null,"]"))})),V=[{value:"mol/dm3",name:"molowe"},{value:"%",name:"procentowe"}];var y=function(){var e=Object(n.useState)("%"),t=Object(E.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(""),o=Object(E.a)(s,2),r=o[0],i=o[1],u=Object(n.useState)(""),m=Object(E.a)(u,2),b=m[0],v=m[1],_=Object(n.useState)(""),d=Object(E.a)(_,2),p=d[0],f=d[1],O=Object(n.useState)(!0),N=Object(E.a)(O,2),h=N[0],y=N[1],z=Object(n.useState)(""),x=Object(E.a)(z,2),q=x[0],M=x[1],C=Object(n.useState)(""),F=Object(E.a)(C,2),A=F[0],L=F[1],W=Object(n.useMemo)((function(){return""!==r&&""!==b&&""!==p}),[r,b,p]);return Object(n.useEffect)((function(){M(""),L(""),y(!W)}),[a,W]),c.a.createElement("section",{className:g()({section__box:!0,concentration_conversion:!0,"concentration_conversion--molar":"mol/dm3"===a})},c.a.createElement("section",{className:"section__content"},c.a.createElement("h4",{className:"section__subtitle"},"St\u0119\u017cenie"),c.a.createElement(k,{value:a,setValue:l,options:V}),c.a.createElement(w,{label:"",value:r,setValue:i,unitValue:a}),c.a.createElement(w,{label:"Masa molowa",value:b,setValue:v,unitValue:"g / mol"}),c.a.createElement(w,{label:"G\u0119sto\u015b\u0107",value:p,setValue:f,sup:!0,unitValue:"g / cm"}),c.a.createElement("div",{className:"section__button"},c.a.createElement("button",{onClick:function(){var e=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=1e3*t;return n?e*c/(100*a):100*e*a/c}(r,p,b,"%"===a);isFinite(e)?M("".concat(j(e))):L("Niepoprawne dane")},disabled:h},c.a.createElement("i",{className:"fas fa-check"})))),0!==q.length?c.a.createElement("section",{className:"section__result"},"%"===a?c.a.createElement(S,{name:"St\u0119\u017cenie molowe",result:q,unit:"mol / dm",sup:!0}):c.a.createElement(S,{name:"St\u0119\u017cenie procentowe",result:q,unit:"%"})):null,0!==A.length?c.a.createElement("p",{className:"section__error"},A):null)};var z=function(e){var t=e.title;return c.a.createElement("h2",{className:"section__title"},c.a.createElement(r.b,{to:"/"},t))};var x=function(){return i("conversion"),c.a.createElement("section",{className:"conversion"},c.a.createElement(z,{title:"Konwersja"}),c.a.createElement("section",{className:"section__wrapper"},c.a.createElement(O,null),c.a.createElement(N,null),c.a.createElement(y,null)))},q=[{value:"liquid",name:"ciecz"},{value:"solid",name:"cia\u0142o sta\u0142e"}];var M=function(){var e=Object(n.useState)("liquid"),t=Object(E.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(""),o=Object(E.a)(s,2),r=o[0],i=o[1],u=Object(n.useState)(""),m=Object(E.a)(u,2),b=m[0],v=m[1],_=Object(n.useState)(""),d=Object(E.a)(_,2),p=d[0],f=d[1],O=Object(n.useState)(""),N=Object(E.a)(O,2),h=N[0],g=N[1],V=Object(n.useState)(!0),y=Object(E.a)(V,2),z=y[0],x=y[1],M=Object(n.useState)(""),C=Object(E.a)(M,2),F=C[0],A=C[1],L=Object(n.useState)(""),W=Object(E.a)(L,2),D=W[0],U=W[1],I=Object(n.useMemo)((function(){return("liquid"!==a||""!==h)&&(""!==r&&""!==b&&""!==p)}),[r,b,p,a,h]);return Object(n.useEffect)((function(){A(""),U(""),x(!I)}),[I]),c.a.createElement("section",{className:"section__box molar_dose"},c.a.createElement("section",{className:"section__content"},c.a.createElement("h4",{className:"section__subtitle"},"Dawka - substancja"),c.a.createElement(k,{value:a,setValue:l,options:q}),c.a.createElement(w,{label:"Masa molowa substancji",value:r,setValue:i,unitValue:"g / mol"}),c.a.createElement(w,{label:"Dawka",value:b,setValue:v,unitValue:"mmol / kg masy cia\u0142a"}),c.a.createElement(w,{label:"Waga badanego obiektu",value:p,setValue:f,unitValue:"g"}),"liquid"===a?c.a.createElement(w,{label:"G\u0119sto\u015b\u0107",value:h,setValue:g,unitValue:"g / cm",sup:!0}):null,c.a.createElement("div",{className:"section__button"},c.a.createElement("button",{onClick:function(){var e=function(e,t,a,n,c){var l=a*t/1e3*e;return"liquid"===n&&(l/=1e3*c),l}(r,b,p,a,h);isFinite(e)?A("".concat(j(e))):U("Niepoprawne dane")},disabled:z},c.a.createElement("i",{className:"fas fa-check"})))),0!==F.length?c.a.createElement("section",{className:"section__result"},"liquid"===a?c.a.createElement(S,{name:"Obj\u0119to\u015b\u0107 substancji dla pojedy\u0144czej dawki",result:F,unit:"ml"}):c.a.createElement(S,{name:"Masa substancji dla pojedy\u0144czej dawki",result:F,unit:"mg"})):null,0!==D.length?c.a.createElement("p",{className:"section__error"},D):null)},C=[{value:"liquid",name:"ciecz"},{value:"solid",name:"cia\u0142o sta\u0142e"}];var F=function(){var e=Object(n.useState)("liquid"),t=Object(E.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(""),o=Object(E.a)(s,2),r=o[0],i=o[1],u=Object(n.useState)(""),m=Object(E.a)(u,2),b=m[0],v=m[1],_=Object(n.useState)(""),d=Object(E.a)(_,2),p=d[0],f=d[1],O=Object(n.useState)(""),N=Object(E.a)(O,2),h=N[0],V=N[1],y=Object(n.useState)(""),z=Object(E.a)(y,2),x=z[0],q=z[1],M=Object(n.useState)(""),F=Object(E.a)(M,2),A=F[0],L=F[1],W=Object(n.useState)(!0),D=Object(E.a)(W,2),U=D[0],I=D[1],J=Object(n.useState)(""),P=Object(E.a)(J,2),B=P[0],G=P[1],K=Object(n.useState)(""),R=Object(E.a)(K,2),T=R[0],Z=R[1],$=Object(n.useMemo)((function(){return""!==r&&""!==b&&""!==p&&""!==h&&""!==x&&""!==A}),[r,b,p,h,x,A]);return Object(n.useEffect)((function(){G(""),Z(""),"liquid"===a&&v("1"),I(!$)}),[a,$]),c.a.createElement("section",{className:g()({section__box:!0,percentage_dose:!0,"percentage_dose--liquid":"liquid"===a,"percentage_dose--solid":"solid"===a})},c.a.createElement("section",{className:"section__content"},c.a.createElement("h4",{className:"section__subtitle"},"Dawka - lek"),c.a.createElement(k,{value:a,setValue:l,options:C,label:"Posta\u0107 leku"}),c.a.createElement(w,{label:"Ilo\u015b\u0107 substancji czynnej (A)",value:r,setValue:i,unitValue:"liquid"===a?"mg / ml":"mg"}),"solid"===a?c.a.createElement(w,{label:"Obj\u0119to\u015b\u0107 rozpuszczalnika (A)",value:b,setValue:v,unitValue:"ml"}):null,c.a.createElement(w,{label:"Dawka",value:p,setValue:f,unitValue:"mg / kg masy cia\u0142a"}),c.a.createElement(w,{label:"Waga badanego obiektu",value:h,setValue:V,unitValue:"g"}),c.a.createElement(w,{label:"Liczba badanych obiekt\xf3w",value:x,setValue:q,unitValue:""}),c.a.createElement(w,{label:"Obj\u0119to\u015b\u0107 pojedy\u0144czej dawki",value:A,setValue:L,unitValue:"ml"}),c.a.createElement("div",{className:"section__button"},c.a.createElement("button",{onClick:function(){var e=function(e,t,a,n,c,l){return n*a/1e3/l*100*(c*l)/100*(100/(e/t*100))}(r,b,p,h,x,A);isFinite(e)?G("".concat(j(e))):Z("Niepoprawne dane")},disabled:U},c.a.createElement("i",{className:"fas fa-check"})))),0!==B.length?c.a.createElement("section",{className:"section__result"},c.a.createElement(S,{name:"Obj\u0119to\u015b\u0107 roztworu (A) jak\u0105 nale\u017cy pobra\u0107 dla ".concat(x," obiekt\xf3w"),result:B,unit:"ml"}),c.a.createElement(S,{name:"Obj\u0119to\u015b\u0107 rozpuszczalnika (B) jak\u0105 nale\u017cy u\u017cy\u0107 do rozcie\u0144czenia pobranego roztworu (A)",result:"".concat(j(parseFloat(x*A)-parseFloat(B))),unit:"ml"})):null,0!==T.length?c.a.createElement("p",{className:"section__error"},T):null)};var A=function(){return i("dose"),c.a.createElement("section",{className:"dose"},c.a.createElement(z,{title:"Dawki"}),c.a.createElement("section",{className:"section__wrapper"},c.a.createElement(F,null),c.a.createElement(M,null)))},L=[{name:"cia\u0142o sta\u0142e",value:"solid"},{name:"ciecz",value:"liquid"}];var W=function(){var e=Object(n.useState)("solid"),t=Object(E.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(""),o=Object(E.a)(s,2),r=o[0],i=o[1],u=Object(n.useState)("mM"),m=Object(E.a)(u,2),b=m[0],v=m[1],_=Object(n.useState)(""),d=Object(E.a)(_,2),p=d[0],f=d[1],O=Object(n.useState)(""),N=Object(E.a)(O,2),h=N[0],g=N[1],V=Object(n.useState)(""),y=Object(E.a)(V,2),z=y[0],x=y[1],q=Object(n.useState)(""),M=Object(E.a)(q,2),C=M[0],F=M[1],A=Object(n.useState)(!0),W=Object(E.a)(A,2),D=W[0],U=W[1],I=Object(n.useState)(""),J=Object(E.a)(I,2),P=J[0],B=J[1],G=Object(n.useState)(""),K=Object(E.a)(G,2),R=K[0],T=K[1],Z=Object(n.useMemo)((function(){return("liquid"!==a||""!==z&&""!==C)&&(""!==r&&""!==p&&""!==h)}),[r,p,h,z,C,a]);return Object(n.useEffect)((function(){B(""),T(""),U(!Z)}),[Z]),c.a.createElement("section",{className:"section__box molar_concentration"},c.a.createElement("section",{className:"section__content"},c.a.createElement("h4",{className:"section__subtitle"},"Molowe"),c.a.createElement(k,{value:a,setValue:l,options:L}),c.a.createElement(w,{label:"Masa molowa substancji",value:h,setValue:g,unitValue:"g / mol"}),"liquid"===a?c.a.createElement(c.a.Fragment,null,c.a.createElement(w,{label:"St\u0119\u017cenie wyj\u015bciowe",value:z,setValue:x,unitValue:"%"}),c.a.createElement(w,{label:"G\u0119sto\u015b\u0107 substancji",value:C,setValue:F,unitValue:"g / cm",sup:!0})):null,c.a.createElement(w,{label:"Obj\u0119to\u015b\u0107 ko\u0144cowa",value:p,setValue:f,unitValue:"ml"}),c.a.createElement(w,{label:"St\u0119\u017cenie ko\u0144cowe",value:r,setValue:i,unitValue:b,setUnitValue:v,unitList:["mM","M"]}),c.a.createElement("div",{className:"section__button"},c.a.createElement("button",{onClick:function(){var e=function(e,t,a,n,c,l,s){var o=.001*a*e*n;return o="liquid"===c?"mM"===t?100*o/l*.001/s:100*o/l/s:"mM"===t?o:1e3*o}(r,b,p,h,a,z,C);isFinite(e)?B("".concat(j(e))):T("Niepoprawne dane")},disabled:D},c.a.createElement("i",{className:"fas fa-check"})))),0!==P.length?c.a.createElement("section",{className:"section__result"},"solid"===a?c.a.createElement(S,{unit:"mg",name:"Masa substancji",result:P}):c.a.createElement(S,{unit:"ml",name:"Ilo\u015b\u0107 substancji",result:P}),c.a.createElement(S,{result:"solid"===a?p:"".concat(j(parseFloat(p)-parseFloat(P))),name:"Obj\u0119to\u015b\u0107 rozpuszczalnika",unit:"ml"})):null,0!==R.length?c.a.createElement("p",{className:"section__error"},R):null)};var D=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(""),o=Object(E.a)(s,2),r=o[0],i=o[1],u=Object(n.useState)(""),m=Object(E.a)(u,2),b=m[0],v=m[1],_=Object(n.useState)(!0),d=Object(E.a)(_,2),p=d[0],f=d[1],O=Object(n.useState)(""),N=Object(E.a)(O,2),h=N[0],g=N[1],k=Object(n.useState)(""),V=Object(E.a)(k,2),y=V[0],z=V[1],x=Object(n.useMemo)((function(){return""!==r&&""!==a&&""!==b}),[r,a,b]);return Object(n.useEffect)((function(){g(""),z(""),f(!x)}),[x]),c.a.createElement("section",{className:"section__box percentage_concentration"},c.a.createElement("section",{className:"section__content"},c.a.createElement("h4",{className:"section__subtitle"},"Procentowe"),c.a.createElement(w,{label:"St\u0119\u017cenie wyj\u015bciowe",value:a,setValue:l,unitValue:"%"}),c.a.createElement(w,{label:"Obj\u0119to\u015b\u0107 ko\u0144cowa",value:r,setValue:i,unitValue:"ml"}),c.a.createElement(w,{label:"St\u0119\u017cenie ko\u0144cowe",unitValue:"%",value:b,setValue:v}),c.a.createElement("div",{className:"section__button"},c.a.createElement("button",{onClick:function(){var e=function(e,t,a){return t*a/100*(100/e)}(a,b,r);isFinite(e)?g("".concat(j(e))):z("Niepoprawne dane")},disabled:p},c.a.createElement("i",{className:"fas fa-check"})))),0!==h.length?c.a.createElement("section",{className:"section__result"},c.a.createElement(S,{name:"Ilo\u015b\u0107 substancji",result:h,unit:"ml"}),c.a.createElement(S,{name:"Obj\u0119to\u015b\u0107 rozpuszczalnika",result:"".concat(j(parseFloat(r)-parseFloat(h))),unit:"ml"})):null,0!==y.length?c.a.createElement("p",{className:"section__error"},y):null)};var U=function(){return i("concentration"),c.a.createElement("section",{className:"concentration"},c.a.createElement(z,{title:"St\u0119\u017cenie"}),c.a.createElement("section",{className:"section__wrapper"},c.a.createElement(D,null),c.a.createElement(W,null)))};var I=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:u}),c.a.createElement(o.a,{exact:!0,path:"/conversion",component:x}),c.a.createElement(o.a,{exact:!0,path:"/dose",component:A}),c.a.createElement(o.a,{exact:!0,path:"/concentration",component:U})))},J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(29);s.a.render(c.a.createElement(r.a,{basename:"/concentration_calculator_app"},c.a.createElement(I,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/concentration_calculator_app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/concentration_calculator_app","/service-worker.js");J?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):P(t,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.666472e5.chunk.js.map