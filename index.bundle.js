(()=>{"use strict";var n={464:(n,e,t)=>{t.d(e,{A:()=>A});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,".about {\n    display: grid;\n    grid-template-rows: 1fr auto 1fr;\n    height: 100%;\n}\n\n#title {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    text-align: right;\n}\n\n#about-us, \n#our-story {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 2rem;\n}\n\n#right-about-us {\n    min-width: 20rem;\n    max-width: 50%;\n}\n\n#right-about-us,\n#our-story > p {\n    font-size: 1.4rem;\n    font-weight: 200;\n}\n\n#about-us {\n    grid-row: 1;\n}\n\n#our-story-header {\n    grid-row: 2;\n    font-size: 4rem;\n    font-weight: 700;\n    background: orange;\n    padding: 0.5rem;\n}\n\n#our-story {\n    grid-row: 3;\n}\n\n#right-about-us > p {\n    grid-column: 1;\n}\n\n#our-story > p {\n    grid-column: 2;\n    width: 70%;\n}\n\n#title > span {\n    margin-top: -25px;\n    font-size: 8rem;\n    font-weight: 700;\n}\n","",{version:3,sources:["webpack://./src/css/about.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;IACb,8BAA8B;IAC9B,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,cAAc;AAClB;;AAEA;;IAEI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;AACpB",sourcesContent:[".about {\n    display: grid;\n    grid-template-rows: 1fr auto 1fr;\n    height: 100%;\n}\n\n#title {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    text-align: right;\n}\n\n#about-us, \n#our-story {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 2rem;\n}\n\n#right-about-us {\n    min-width: 20rem;\n    max-width: 50%;\n}\n\n#right-about-us,\n#our-story > p {\n    font-size: 1.4rem;\n    font-weight: 200;\n}\n\n#about-us {\n    grid-row: 1;\n}\n\n#our-story-header {\n    grid-row: 2;\n    font-size: 4rem;\n    font-weight: 700;\n    background: orange;\n    padding: 0.5rem;\n}\n\n#our-story {\n    grid-row: 3;\n}\n\n#right-about-us > p {\n    grid-column: 1;\n}\n\n#our-story > p {\n    grid-column: 2;\n    width: 70%;\n}\n\n#title > span {\n    margin-top: -25px;\n    font-size: 8rem;\n    font-weight: 700;\n}\n"],sourceRoot:""}]);const A=i},608:(n,e,t)=>{t.d(e,{A:()=>A});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,':root {\n    --text: #F3F5F0;\n    --background: rgba(41, 41, 41, 0.4);\n    --background-menu-items: rgba(1, 1, 1, 0.8);\n    --primary: #e28812;\n    --secondary: #7e5f35;\n    --accent: #f19a27;\n}\n\n* {\n    color: var(--text);\n}\n\nbody {\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n    margin: 0px;\n    padding: 0px;\n    font-family: "Inter", sans-serif;\n\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n/* BAR */\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0px 20px;\n}\n\nh1 {\n    font-size: 32px;\n    font-weight: 500;\n}\n\nnav > * {\n    background: none;\n    font-size: 24px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n}\n\n/* FOOTER */\n\nfooter {\n    background: rgba(1, 1, 1, 0.5);\n    font-size: 1.2rem;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 1rem;\n}\n\nfooter > * {\n    margin: 0.5rem;\n}\n\na {\n    text-decoration: none;\n}\n\na > img {\n    width: 2.4rem;\n    height: auto;\n}\n',"",{version:3,sources:["webpack://./src/css/base.css"],names:[],mappings:"AAAA;IACI,eAAe;IACf,mCAAmC;IACnC,2CAA2C;IAC3C,kBAAkB;IAClB,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,4BAA4B;IAC5B,4BAA4B;IAC5B,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,gCAAgC;;IAEhC,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA,QAAQ;AACR;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,aAAa;IACb,YAAY;IACZ,eAAe;AACnB;;AAEA,WAAW;;AAEX;IACI,8BAA8B;IAC9B,iBAAiB;;IAEjB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB",sourcesContent:[':root {\n    --text: #F3F5F0;\n    --background: rgba(41, 41, 41, 0.4);\n    --background-menu-items: rgba(1, 1, 1, 0.8);\n    --primary: #e28812;\n    --secondary: #7e5f35;\n    --accent: #f19a27;\n}\n\n* {\n    color: var(--text);\n}\n\nbody {\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n    margin: 0px;\n    padding: 0px;\n    font-family: "Inter", sans-serif;\n\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n/* BAR */\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0px 20px;\n}\n\nh1 {\n    font-size: 32px;\n    font-weight: 500;\n}\n\nnav > * {\n    background: none;\n    font-size: 24px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n}\n\n/* FOOTER */\n\nfooter {\n    background: rgba(1, 1, 1, 0.5);\n    font-size: 1.2rem;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 1rem;\n}\n\nfooter > * {\n    margin: 0.5rem;\n}\n\na {\n    text-decoration: none;\n}\n\na > img {\n    width: 2.4rem;\n    height: auto;\n}\n'],sourceRoot:""}]);const A=i},310:(n,e,t)=>{t.d(e,{A:()=>A});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,".home {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    margin-top: 15vh;\n}\n\n.home > * {\n    margin: 1rem 0;\n}\n\n.home > h1 {\n    font-weight: 700;\n    font-size: 64px;\n}\n\n.home > p {\n    font-size: 32px;\n    font-weight: 300;\n    width: 60%;\n    text-align: center;\n}\n","",{version:3,sources:["webpack://./src/css/home.css"],names:[],mappings:"AAAA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;IAC3B,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,UAAU;IACV,kBAAkB;AACtB",sourcesContent:[".home {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    margin-top: 15vh;\n}\n\n.home > * {\n    margin: 1rem 0;\n}\n\n.home > h1 {\n    font-weight: 700;\n    font-size: 64px;\n}\n\n.home > p {\n    font-size: 32px;\n    font-weight: 300;\n    width: 60%;\n    text-align: center;\n}\n"],sourceRoot:""}]);const A=i},22:(n,e,t)=>{t.d(e,{A:()=>A});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,".menu-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#menu {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));\n    grid-gap: 2rem;\n    width: 100%;\n    max-width: 48rem;\n\n    background: var(--background);\n    border-radius: 1rem;\n}\n\n.menu-item > img {\n    width: 13rem;\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n    cursor: pointer;\n\n    margin: 1.5rem;\n    background: var(--background-menu-items);\n    border-radius: 1rem;\n}\n\n.menu-item > p {\n    margin: 1rem;\n}\n","",{version:3,sources:["webpack://./src/css/menu.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,cAAc;IACd,WAAW;IACX,gBAAgB;;IAEhB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;;IAEf,cAAc;IACd,wCAAwC;IACxC,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB",sourcesContent:[".menu-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#menu {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));\n    grid-gap: 2rem;\n    width: 100%;\n    max-width: 48rem;\n\n    background: var(--background);\n    border-radius: 1rem;\n}\n\n.menu-item > img {\n    width: 13rem;\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n    cursor: pointer;\n\n    margin: 1.5rem;\n    background: var(--background-menu-items);\n    border-radius: 1rem;\n}\n\n.menu-item > p {\n    margin: 1rem;\n}\n"],sourceRoot:""}]);const A=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],A=0;A<n.length;A++){var s=n[A],c=r.base?s[0]+r.base:s[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var m=t(u),l={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(l);else{var p=o(l,r);r.byIndex=A,e.splice(A,0,{identifier:u,updater:p,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=t(a[i]);e[A].references--}for(var s=r(n,o),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{const n=function(){const n=document.getElementById("content");n.classList.add("home");const e=document.createElement("h1"),t=document.createElement("p");e.textContent="Best Pizza In The World",t.textContent="Indulge in our mouthwatering selection of authentic Italian pizzas, crafted with love and tradition. From classic Margheritas to gourmet specialties, every bite is a taste of Italy.",n.append(e,t)};var e=t(72),r=t.n(e),o=t(825),a=t.n(o),i=t(659),A=t.n(i),s=t(56),c=t.n(s),d=t(540),u=t.n(d),m=t(113),l=t.n(m),p=t(608),g={};g.styleTagTransform=l(),g.setAttributes=c(),g.insert=A().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),r()(p.A,g),p.A&&p.A.locals&&p.A.locals;var f=t(310),C={};C.styleTagTransform=l(),C.setAttributes=c(),C.insert=A().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=u(),r()(f.A,C),f.A&&f.A.locals&&f.A.locals;var h=t(22),B={};B.styleTagTransform=l(),B.setAttributes=c(),B.insert=A().bind(null,"head"),B.domAPI=a(),B.insertStyleElement=u(),r()(h.A,B),h.A&&h.A.locals&&h.A.locals;var I=t(464),b={};b.styleTagTransform=l(),b.setAttributes=c(),b.insert=A().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=u(),r()(I.A,b),I.A&&I.A.locals&&I.A.locals,document.body.style.backgroundImage="url('assets/background.jpg')",n(),document.querySelectorAll(".button-nav").forEach((e=>{!function(e){e.addEventListener("click",(()=>{switch(function(){const n=document.getElementById("content");n.textContent="",n.className=""}(),e.textContent.trim()){case"Home":n();break;case"About":!function(){const n=document.getElementById("content");n.classList.add("about"),n.append(function(){const n=document.createElement("div"),e=document.createElement("div"),t=document.createElement("div"),r=document.createElement("span"),o=document.createElement("span");return n.id="about-us",e.id="title",t.id="right-about-us",t.textContent="We're your neighborhood pizzeria dedicated to serving up authentic  Italian pizzas with a modern twist. Our passion for quality ingredients  and traditional recipes ensures every bite is a taste of Italy. Come  join us and experience the joy of great pizza, made with love.",r.textContent="ABOUT",o.textContent="US",e.append(r,o),n.append(e,t),n}(),function(){const n=document.createElement("div");return n.id="our-story-header",n.textContent="OUR STORY",n}(),function(){const n=document.createElement("div"),e=document.createElement("p");return e.textContent="Mamma Mia Pizza Shop is more than just a place to grab a slice—it's a journey rooted in tradition and family. Founded by Giovanni Rossi, inspired by his Nonna Maria's recipes, our story began in Napoli. With a commitment to quality and a love for crafting delicious pizzas, we've brought the taste of Italy to your table. Join us as we continue to share our passion for great food and unforgettable experiences.",n.id="our-story",n.appendChild(e),n}())}();break;case"Menu":!function(){const n=document.getElementById("content");n.classList.add("menu-container");const e=document.createElement("div");e.id="menu",[{name:"Pizza",ext:"svg",description:"Amazing Pizza"},{name:"Pizza",ext:"svg",description:"Everyone Loves Me"},{name:"Pizza",ext:"svg",description:"PICK ME! PICK ME!"},{name:"Pizza",ext:"svg",description:"I look just like everyone else"},{name:"Pizza",ext:"svg",description:"I wish I was different but my creator couldn't be bothered to find other images that are the same size or modify me to be like other images"},{name:"Pizza",ext:"svg",description:"It's very comfy over here"}].forEach((n=>{e.appendChild(function(n,e,t){let r=document.createElement("div");r.classList.add("menu-item");let o=document.createElement("img");o.src=`assets/${n.toLowerCase()}.${e}`,o.alt=n;let a=document.createElement("h1");a.textContent=n;let i=document.createElement("p");return i.textContent=t,r.append(o,a,i),r}(n.name,n.ext,n.description))})),n.appendChild(e)}();break;default:alert("Error loading navigation elements. Please refresh the page.")}}))}(e)}))})()})();
//# sourceMappingURL=index.bundle.js.map