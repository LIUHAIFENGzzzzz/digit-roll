(function(e){function t(t){for(var r,a,u=t[0],s=t[1],l=t[2],c=0,d=[];c<u.length;c++)a=u[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return s.p+"js/"+({about:"about",demo:"demo"}[e]||e)+"."+{about:"1ed5559e",demo:"e0d2432a"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={demo:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",demo:"demo"}[e]||e)+"."+{about:"31d6cfe0",demo:"e0ebc3f8"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],c=l.getAttribute("data-href");if(c===r||c===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=u(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0087":function(e,t,n){},3576:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("a133"),n("ed0d"),n("f09c"),n("e117");var r=n("0261"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("5c0b"),n("9ca4")),u={},s=Object(i["a"])(u,a,o,!1,null,null,null),l=s.exports,c=(n("e18c"),n("3f11")),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],p={name:"Home"},m=p,h=Object(i["a"])(m,d,f,!1,null,null,null),v=h.exports;r["a"].use(c["a"]);var g=[{path:"/home",name:"Home",component:v},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/",name:"demo",component:function(){return n.e("demo").then(n.bind(null,"c0b3"))}}],b=new c["a"]({routes:g}),y=b,_=n("9f3a");r["a"].use(_["a"]);var w=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}}),x=(n("053b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"dr",style:{transitionDuration:e.getTime(e.duration),transitionDelay:e.getTime(e.delay),transitionTimingFunction:e.easing}},[e._l(e.valueFormat,(function(t,r){return[n("span",{key:r,class:["dr-element",/\d+/.test(t)?"dr-digit":t==e.resetFormat.radix?"dr-radix-mark":"dr-formatting-mark"]},[n("span",{staticClass:"dr-spacer"},[e._v(" "+e._s(/\d+/.test(t)?8:t)+" ")]),/\d+/.test(t)?[n("span",{staticClass:"dr-roll",style:{transform:e.state?"translateY("+10*-t+"%)":"translteY(0)"}},e._l(10,(function(t,r){return n("span",{key:r,staticClass:"dr-roll-element"},[e._v(" "+e._s(r)+" ")])})),0)]:e._e()],2)]}))],2)}),O=[],j=(n("fe59"),n("b130"),n("086d"),n("77ad"),n("e50e"),n("513c"),n("b92a"),n("e35a"),n("1c2e"),n("90aa"),n("0d7a"),n("08ba"),n("1fb3"),n("382a")),S=n("e8cf"),E=function(){function e(){Object(j["a"])(this,e)}return Object(S["a"])(e,null,[{key:"debounce",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=null;return function(){var r=this,a=arguments;clearTimeout(n),n=setTimeout((function(){e.apply(r,a)}),t)}}}]),e}(),k="(,ddd).dd",T=/^\(?([^)]*)\)?(?:(.)(d+))?$/,F={name:"digit-roll",model:{prop:"value",event:"change"},props:{value:{type:Number,default:0},duration:{type:Number,default:1e3},delay:{type:Number,default:0},easing:{type:String,default:"linear"},format:{type:String,default:k},math:{type:String,default:"round"}},computed:{resetFormat:function(){var e=T.exec(this.format).slice(1);return{repeating:e[0],radix:e[1],precision:e[2].length}},valueFormat:function(){var e=this,t=!0,n=this.resetFormat.repeating,r=[],a=this.createRound(this.math)(this.value,this.resetFormat.precision).toString().split("").reverse();this.value<0&&(a=a.slice(0,-1));var o=!a.includes(this.resetFormat.radix);return a.forEach((function(a){var i=!1;if(a==e.resetFormat.radix)o=!0,r.unshift(a);else{if(o){i=!1;while(t){if(!n.length){if(i)throw new Error("Bad odometer format without digits");n=e.resetFormat.repeating,i=!0}var u=n[n.length-1];if(n=n.substring(0,n.length-1),"d"===u)break;r.unshift(u)}}r.unshift(a)}})),this.value<0&&r.unshift("-"),r}},watch:{valueFormat:{handler:function(e,t){var n=this;this.state=!1,E.debounce((function(){n.state=!0}),1)()},immediate:!0}},data:function(){return{state:!1}},mounted:function(){},methods:{getTime:function(e){return e?"".concat(parseFloat(e/1e3),"s"):e},createRound:function(e){var t=Math[e];return function(e,n){if(n=null==n?0:Math.min(n,292),n&&e){var r=(String(e)+"e").split("e"),a=t(r[0]+"e"+(+r[1]+n));return r=(String(a)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return t(e)}}}},C=F,P=(n("cd20"),Object(i["a"])(C,x,O,!1,null,"4009361e",null)),N=P.exports,A={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in N.props)t[n]&&(N.props[n]["default"]=t[n]);e.component(N.name,N)}};r["a"].config.productionTip=!1,r["a"].use(A,{math:"floor",duration:2e3}),new r["a"]({router:y,store:w,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("3576"),a=n.n(r);a.a},cd20:function(e,t,n){"use strict";var r=n("0087"),a=n.n(r);a.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.5d31da1b.js.map