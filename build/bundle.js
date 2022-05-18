var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c,a;function i(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function u(e){return e&&o(e.destroy)?e.destroy:t}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function v(){return m("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t){a=t}function b(){if(!a)throw new Error("Function called outside component initialization");return a}function x(){const t=b();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}(e,n,{cancelable:s});return r.slice().forEach((e=>{e.call(t,o)})),!o.defaultPrevented}return!0}}function y(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const C=[],_=[],k=[],E=[],M=Promise.resolve();let z=!1;function j(){z||(z=!0,M.then(A))}function L(t){k.push(t)}const S=new Set;let H=0;function A(){const t=a;do{for(;H<C.length;){const t=C[H];H++,w(t),q(t.$$)}for(w(null),C.length=0,H=0;_.length;)_.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];S.has(e)||(S.add(e),e())}k.length=0}while(C.length);for(;E.length;)E.pop()();z=!1,S.clear(),w(t)}function q(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const N=new Set;let T;function O(){T={r:0,c:[],p:T}}function D(){T.r||r(T.c),T=T.p}function B(t,e){t&&t.i&&(N.delete(t),t.i(e))}function U(t,e,n,s){if(t&&t.o){if(N.has(t))return;N.add(t),T.c.push((()=>{N.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function R(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const l=t[o],c=e[o];if(c){for(const t in l)t in c||(s[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[o]=c}else for(const t in l)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function P(t){return"object"==typeof t&&null!==t?t:{}}function F(t){t&&t.c()}function I(t,e,s,l){const{fragment:c,on_mount:a,on_destroy:i,after_update:u}=t.$$;c&&c.m(e,s),l||L((()=>{const e=a.map(n).filter(o);i?i.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(L)}function V(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,n,o,l,c,i,u,f=[-1]){const p=a;w(e);const d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(p?p.$$.context:[])),callbacks:s(),dirty:f,skip_bound:!1,root:n.target||p.$$.root};u&&u(d.root);let m=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),m&&function(t,e){-1===t.$$.dirty[0]&&(C.push(t),j(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],d.update(),m=!0,r(d.before_update),d.fragment=!!l&&l(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&B(e.$$.fragment),I(e,n.target,n.anchor,n.customElement),A()}w(p)}class K{$destroy(){V(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const W=[];function X(t,e){return{subscribe:G(t,e).subscribe}}function G(e,n=t){let s;const r=new Set;function o(t){if(l(e,t)&&(e=t,s)){const t=!W.length;for(const t of r)t[1](),W.push(t,e);if(t){for(let t=0;t<W.length;t+=2)W[t][0](W[t+1]);W.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(l,c=t){const a=[l,c];return r.add(a),1===r.size&&(s=n(o)||t),l(e),()=>{r.delete(a),0===r.size&&(s(),s=null)}}}}function J(e,n,s){const l=!Array.isArray(e),c=l?[e]:e,a=n.length<2;return X(s,(e=>{let s=!1;const i=[];let u=0,f=t;const p=()=>{if(u)return;f();const s=n(l?i[0]:i,e);a?e(s):f=o(s)?s:t},h=c.map(((e,n)=>function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(e,(t=>{i[n]=t,u&=~(1<<n),s&&p()}),(()=>{u|=1<<n}))));return s=!0,p(),function(){r(h),f()}}))}function Q(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,s,r,o,l=[],c="",a=t.split("/");for(a[0]||a.shift();r=a.shift();)"*"===(n=r[0])?(l.push("wild"),c+="/(.*)"):":"===n?(s=r.indexOf("?",1),o=r.indexOf(".",1),l.push(r.substring(1,~s?s:~o?o:r.length)),c+=~s&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(c+=(~s?"?":"")+"\\"+r.substring(o))):c+="/"+r;return{keys:l,pattern:new RegExp("^"+c+(e?"(?=$|/)":"/?$"),"i")}}function Z(t){let n,s,r;const o=[t[2]];var l=t[0];function c(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return l&&(n=new l(c()),n.$on("routeEvent",t[7])),{c(){n&&F(n.$$.fragment),s=v()},m(t,e){n&&I(n,t,e),p(t,s,e),r=!0},p(t,e){const r=4&e?R(o,[P(t[2])]):{};if(l!==(l=t[0])){if(n){O();const t=n;U(t.$$.fragment,1,0,(()=>{V(t,1)})),D()}l?(n=new l(c()),n.$on("routeEvent",t[7]),F(n.$$.fragment),B(n.$$.fragment,1),I(n,s.parentNode,s)):n=null}else l&&n.$set(r)},i(t){r||(n&&B(n.$$.fragment,t),r=!0)},o(t){n&&U(n.$$.fragment,t),r=!1},d(t){t&&h(s),n&&V(n,t)}}}function tt(t){let n,s,r;const o=[{params:t[1]},t[2]];var l=t[0];function c(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return l&&(n=new l(c()),n.$on("routeEvent",t[6])),{c(){n&&F(n.$$.fragment),s=v()},m(t,e){n&&I(n,t,e),p(t,s,e),r=!0},p(t,e){const r=6&e?R(o,[2&e&&{params:t[1]},4&e&&P(t[2])]):{};if(l!==(l=t[0])){if(n){O();const t=n;U(t.$$.fragment,1,0,(()=>{V(t,1)})),D()}l?(n=new l(c()),n.$on("routeEvent",t[6]),F(n.$$.fragment),B(n.$$.fragment,1),I(n,s.parentNode,s)):n=null}else l&&n.$set(r)},i(t){r||(n&&B(n.$$.fragment,t),r=!0)},o(t){n&&U(n.$$.fragment,t),r=!1},d(t){t&&h(s),n&&V(n,t)}}}function et(t){let e,n,s,r;const o=[tt,Z],l=[];function c(t,e){return t[1]?0:1}return e=c(t),n=l[e]=o[e](t),{c(){n.c(),s=v()},m(t,n){l[e].m(t,n),p(t,s,n),r=!0},p(t,[r]){let a=e;e=c(t),e===a?l[e].p(t,r):(O(),U(l[a],1,1,(()=>{l[a]=null})),D(),n=l[e],n?n.p(t,r):(n=l[e]=o[e](t),n.c()),B(n,1),n.m(s.parentNode,s))},i(t){r||(B(n),r=!0)},o(t){U(n),r=!1},d(t){l[e].d(t),t&&h(s)}}}function nt(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let s="";return n>-1&&(s=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:s}}const st=X(null,(function(t){t(nt());const e=()=>{t(nt())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));J(st,(t=>t.location)),J(st,(t=>t.querystring));const rt=G(void 0);function ot(t,e){if(e=ct(e),!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return lt(t,e),{update(e){e=ct(e),lt(t,e)}}}function lt(t,e){let n=e.href||t.getAttribute("href");if(n&&"/"==n.charAt(0))n="#"+n;else if(!n||n.length<2||"#/"!=n.slice(0,2))throw Error('Invalid value for "href" attribute: '+n);t.setAttribute("href",n),t.addEventListener("click",(t=>{t.preventDefault(),e.disabled||function(t){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0,void 0),window.location.hash=t}(t.currentTarget.getAttribute("href"))}))}function ct(t){return t&&"string"==typeof t?{href:t}:t||{}}function at(t,e,n){let{routes:s={}}=e,{prefix:r=""}=e,{restoreScrollState:o=!1}=e;class l{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:s}=Q(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=s}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const e=t.match(r);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let s=0;for(;s<this._keys.length;){try{n[this._keys[s]]=decodeURIComponent(e[s+1]||"")||null}catch(t){n[this._keys[s]]=null}s++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const c=[];s instanceof Map?s.forEach(((t,e)=>{c.push(new l(e,t))})):Object.keys(s).forEach((t=>{c.push(new l(t,s[t]))}));let a=null,i=null,u={};const f=x();async function p(t,e){await(j(),M),f(t,e)}let h=null,d=null;var m;o&&(d=t=>{h=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",d),m=()=>{h?window.scrollTo(h.__svelte_spa_router_scrollX,h.__svelte_spa_router_scrollY):window.scrollTo(0,0)},b().$$.after_update.push(m));let g=null,v=null;const $=st.subscribe((async t=>{g=t;let e=0;for(;e<c.length;){const s=c[e].match(t.location);if(!s){e++;continue}const r={route:c[e].path,location:t.location,querystring:t.querystring,userData:c[e].userData,params:s&&"object"==typeof s&&Object.keys(s).length?s:null};if(!await c[e].checkConditions(r))return n(0,a=null),v=null,void p("conditionsFailed",r);p("routeLoading",Object.assign({},r));const o=c[e].component;if(v!=o){o.loading?(n(0,a=o.loading),v=o,n(1,i=o.loadingParams),n(2,u={}),p("routeLoaded",Object.assign({},r,{component:a,name:a.name,params:i}))):(n(0,a=null),v=null);const e=await o();if(t!=g)return;n(0,a=e&&e.default||e),v=o}return s&&"object"==typeof s&&Object.keys(s).length?n(1,i=s):n(1,i=null),n(2,u=c[e].props),void p("routeLoaded",Object.assign({},r,{component:a,name:a.name,params:i})).then((()=>{rt.set(i)}))}n(0,a=null),v=null,rt.set(void 0)}));return function(t){b().$$.on_destroy.push(t)}((()=>{$(),d&&window.removeEventListener("popstate",d)})),t.$$set=t=>{"routes"in t&&n(3,s=t.routes),"prefix"in t&&n(4,r=t.prefix),"restoreScrollState"in t&&n(5,o=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=o?"manual":"auto")},[a,i,u,s,r,o,function(e){y.call(this,t,e)},function(e){y.call(this,t,e)}]}class it extends K{constructor(t){super(),Y(this,t,at,et,l,{routes:3,prefix:4,restoreScrollState:5})}}function ut(e){let n;return{c(){n=d("div"),$(n,"class","m-4 d-block d-xl-none")},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class ft extends K{constructor(t){super(),Y(this,t,null,ut,l,{})}}const pt=[];let ht;function dt(t){const e=t.pattern.test(ht);mt(t,t.className,e),mt(t,t.inactiveClassName,!e)}function mt(t,e,n){(e||"").split(" ").forEach((e=>{e&&(t.node.classList.remove(e),n&&t.node.classList.add(e))}))}function gt(t,e){if(!(e=e&&("string"==typeof e||"object"==typeof e&&e instanceof RegExp)?{path:e}:e||{}).path&&t.hasAttribute("href")&&(e.path=t.getAttribute("href"),e.path&&e.path.length>1&&"#"==e.path.charAt(0)&&(e.path=e.path.substring(1))),e.className||(e.className="active"),!e.path||"string"==typeof e.path&&(e.path.length<1||"/"!=e.path.charAt(0)&&"*"!=e.path.charAt(0)))throw Error('Invalid value for "path" argument');const{pattern:n}="string"==typeof e.path?Q(e.path):{pattern:e.path},s={node:t,className:e.className,inactiveClassName:e.inactiveClassName,pattern:n};return pt.push(s),dt(s),{destroy(){pt.splice(pt.indexOf(s),1)}}}function vt(e){let n,s,o,l,c,a,i,m,v,w,b,x,y,C,_,k,E,M,z,j,L,S,H;return l=new ft({}),M=new ft({}),{c(){n=d("header"),s=d("div"),o=d("div"),F(l.$$.fragment),c=g(),a=d("h2"),a.textContent="The Key Seekers",i=g(),m=d("div"),v=d("nav"),w=d("a"),w.textContent="Home",b=g(),x=d("a"),x.textContent="Projekte",y=g(),C=d("a"),C.textContent="Über Uns",_=g(),k=d("a"),k.textContent="Kontakt",E=g(),F(M.$$.fragment),z=g(),j=d("div"),j.innerHTML='<div class="bs justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"></path></svg></div>',$(a,"class","float-md-start mb-0 "),$(o,"class","d-flex"),$(w,"class","nav-link svelte-hxnb38"),$(x,"class","nav-link svelte-hxnb38"),$(C,"class","nav-link svelte-hxnb38"),$(k,"class","nav-link svelte-hxnb38"),$(v,"class","nav nav-head justify-conent-center float-md-end  svelte-hxnb38"),$(m,"class","d-none d-sm-block d-flex"),$(j,"class","d-block d-sm-none"),$(s,"class","d-flex justify-content-between align-items-center"),$(n,"class","mb-auto")},m(t,e){p(t,n,e),f(n,s),f(s,o),I(l,o,null),f(o,c),f(o,a),f(s,i),f(s,m),f(m,v),f(v,w),f(v,b),f(v,x),f(v,y),f(v,C),f(v,_),f(v,k),f(v,E),I(M,v,null),f(s,z),f(s,j),L=!0,S||(H=[u(ot.call(null,w,{href:"/"})),u(gt.call(null,w)),u(ot.call(null,x,{href:"/projects"})),u(gt.call(null,x)),u(ot.call(null,C,{href:"/about"})),u(gt.call(null,C)),u(ot.call(null,k,{href:"/contact"})),u(gt.call(null,k))],S=!0)},p:t,i(t){L||(B(l.$$.fragment,t),B(M.$$.fragment,t),L=!0)},o(t){U(l.$$.fragment,t),U(M.$$.fragment,t),L=!1},d(t){t&&h(n),V(l),V(M),S=!1,r(H)}}}st.subscribe((t=>{ht=t.location+(t.querystring?"?"+t.querystring:""),pt.map(dt)}));class $t extends K{constructor(t){super(),Y(this,t,null,vt,l,{})}}function wt(e){let n;return{c(){n=d("span"),n.innerHTML='<a href="mailto:info@thekeyseekers.de"><svg class="bs svelte-1mtasq3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" class="svelte-1mtasq3"></path></svg></a>',$(n,"class","bs me-3 svelte-1mtasq3")},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class bt extends K{constructor(t){super(),Y(this,t,null,wt,l,{})}}function xt(e){let n;return{c(){n=d("span"),n.innerHTML='<a href="https://www.instagram.com/thekeyseekers01/"><svg class="bs svelte-1mtasq3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" class="svelte-1mtasq3"></path></svg></a>',$(n,"class","bs me-3 svelte-1mtasq3")},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class yt extends K{constructor(t){super(),Y(this,t,null,xt,l,{})}}function Ct(e){let n,s,r,o,l,c,a,i,u,m,v,w,b,x,y,C;return v=new bt({}),b=new yt({}),{c(){n=d("footer"),s=d("div"),r=d("div"),o=d("span"),l=g(),c=d("a"),c.textContent=`© Dendo ${e[0]}`,a=g(),i=d("div"),i.innerHTML='<span class="d-inline-flex"><span>Made with  </span> \n        <a class="bs svelte-89ey7v" href="https://getbootstrap.com/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"></path></svg></a> \n        <span>  and  </span> \n        <a class="bs svelte-89ey7v" href="https://svelte.dev/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M110.293 16.914C98.586-.086 75.668-5 58.02 5.707l-29.856 18.98a33.94 33.94 0 00-15.418 22.938 35.543 35.543 0 003.566 23.102 33.01 33.01 0 00-5.066 12.793 36.517 36.517 0 006.191 27.52c11.727 16.96 34.583 21.897 52.27 11.312l29.879-19a34.025 34.025 0 0015.355-22.938 35.44 35.44 0 00-3.586-23.02c7.938-12.456 7.52-28.48-1.062-40.48zm-55.254 95.773a23.645 23.645 0 01-25.394-9.433c-3.461-4.793-4.73-10.711-3.73-16.586l.585-2.832.54-1.75 1.605 1.062c3.52 2.668 7.46 4.582 11.668 5.875l1.082.375-.122 1.067c-.105 1.48.332 3.144 1.188 4.414 1.75 2.52 4.793 3.73 7.727 2.937.644-.207 1.273-.418 1.812-.754l29.754-18.976c1.5-.961 2.457-2.398 2.832-4.106.328-1.773-.106-3.585-1.066-5.02-1.774-2.46-4.793-3.565-7.727-2.831-.645.226-1.332.48-1.879.812l-11.25 7.145c-10.644 6.328-24.394 3.355-31.46-6.832a21.854 21.854 0 01-3.75-16.586 20.643 20.643 0 019.456-13.875l29.692-18.98c1.875-1.168 3.894-2.02 6.082-2.668 9.605-2.5 19.726 1.27 25.394 9.394a22.027 22.027 0 013.043 19.398l-.543 1.77-1.539-1.062a39.399 39.399 0 00-11.727-5.875l-1.066-.313.106-1.066c.105-1.563-.332-3.207-1.188-4.48-1.754-2.52-4.793-3.583-7.727-2.833-.644.211-1.273.418-1.812.754L45.812 49.977c-1.5 1-2.46 2.394-2.773 4.144-.312 1.707.106 3.582 1.066 4.957 1.708 2.524 4.81 3.586 7.688 2.832.687-.207 1.332-.414 1.855-.75l11.375-7.254c1.856-1.226 3.938-2.12 6.067-2.707 9.668-2.52 19.75 1.274 25.394 9.438 3.461 4.793 4.793 10.707 3.832 16.52a20.487 20.487 0 01-9.332 13.874L61.23 109.97a25.82 25.82 0 01-6.187 2.707zm0 0"></path></svg></a></span>',u=g(),m=d("div"),F(v.$$.fragment),w=g(),F(b.$$.fragment),x=g(),y=d("span"),$(o,"class","mx-4 d-xl-none"),$(c,"href","https://www.d3nda.de"),$(c,"class","svelte-89ey7v"),$(r,"class","col-md-4 col-6 text-start"),$(i,"class","col-4 d-none d-md-block"),$(y,"class","mx-4 d-xl-none"),$(m,"class","col-md-4 col-6 text-end"),$(s,"class","row mx-0"),$(n,"class","mt-auto")},m(t,e){p(t,n,e),f(n,s),f(s,r),f(r,o),f(r,l),f(r,c),f(s,a),f(s,i),f(s,u),f(s,m),I(v,m,null),f(m,w),I(b,m,null),f(m,x),f(m,y),C=!0},p:t,i(t){C||(B(v.$$.fragment,t),B(b.$$.fragment,t),C=!0)},o(t){U(v.$$.fragment,t),U(b.$$.fragment,t),C=!1},d(t){t&&h(n),V(v),V(b)}}}function _t(t){return[(new Date).getFullYear()]}class kt extends K{constructor(t){super(),Y(this,t,_t,Ct,l,{})}}function Et(t,e,n){const s=t.slice();return s[3]=e[n],s}function Mt(t){let e,n,s,r,o,l,c,a,u,v,w,b=t[3].captionText+"";return{c(){e=d("a"),n=d("figure"),s=d("img"),l=g(),c=d("figcaption"),a=d("span"),u=m(b),v=g(),$(s,"class","post-image svelte-1lf00g1"),i(s.src,r=t[3].imageUrl)||$(s,"src",r),$(s,"alt",o=t[3].titleText),$(a,"class","svelte-1lf00g1"),$(c,"class","svelte-1lf00g1"),$(n,"class","post svelte-1lf00g1"),$(e,"href",w=t[3].postUrl),$(e,"target","blank"),$(e,"rel","noopener"),$(e,"class","svelte-1lf00g1")},m(t,r){p(t,e,r),f(e,n),f(n,s),f(n,l),f(n,c),f(c,a),f(a,u),f(e,v)},p(t,n){1&n&&!i(s.src,r=t[3].imageUrl)&&$(s,"src",r),1&n&&o!==(o=t[3].titleText)&&$(s,"alt",o),1&n&&b!==(b=t[3].captionText+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(u,b),1&n&&w!==(w=t[3].postUrl)&&$(e,"href",w)},d(t){t&&h(e)}}}function zt(e){let n,s=e[0],r=[];for(let t=0;t<s.length;t+=1)r[t]=Mt(Et(e,s,t));return{c(){n=d("div");for(let t=0;t<r.length;t+=1)r[t].c();$(n,"class","main-grid svelte-1lf00g1")},m(t,e){p(t,n,e);for(let t=0;t<r.length;t+=1)r[t].m(n,null)},p(t,[e]){if(1&e){let o;for(s=t[0],o=0;o<s.length;o+=1){const l=Et(t,s,o);r[o]?r[o].p(l,e):(r[o]=Mt(l),r[o].c(),r[o].m(n,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=s.length}},i:t,o:t,d(t){t&&h(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t)}}}function jt(t,e,n){const s=new window.DOMParser;let r=[];var o;return o=async()=>{const t=await fetch("https://ig-assistant.d3nda.de/u/thekeyseekers01/rss.xml",{credentials:"same-origin",headers:{Accept:"text/html, application/xhtml+xml, application/xml, text/xml"}}),e=await t.text(),o=s.parseFromString(e,"text/xml");console.log(o),document.querySelector(".main-grid");const l=o.querySelectorAll("item");n(0,r=(t=>[...t].map((t=>{let e=t.querySelector("description").textContent,n=new URL(t.querySelector("link").textContent);n=`https://instagram.com/${n.pathname}`;const r=e.match(/<img.*\/>/).at(0);e=e.replace(r,"").replace(/<br\s?\/>/gm,"\n");const o=s.parseFromString(r,"text/html").querySelector("img");return{postUrl:n,captionText:e,imageUrl:o.src,imageSize:{width:o.width,height:o.height},titleText:t.querySelector("title").textContent}})))(l)),r.push(...r),r.push(...r),r.push(...r),r.push(...r),r.push(...r),r.push(...r),console.log(r)},b().$$.on_mount.push(o),[r]}class Lt extends K{constructor(t){super(),Y(this,t,jt,zt,l,{})}}function St(e){let n;return{c(){n=d("div"),n.textContent="projects"},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class Ht extends K{constructor(t){super(),Y(this,t,null,St,l,{})}}class At extends K{constructor(t){super(),Y(this,t,null,null,l,{})}}function qt(e){let n,s,r;return{c(){n=d("h4"),n.textContent="Die Seite konnte leider nicht gefunden werden :(",s=g(),r=d("div"),r.innerHTML='<svg class="er svelte-iiwhkg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 334.2c0 17.67-14.33 32-32 32h-32v81.78c0 17.67-14.33 32-32 32s-32-14.33-32-32v-81.78H32c-10.97 0-21.17-5.625-27.05-14.89c-5.859-9.266-6.562-20.89-1.875-30.81l128-270.2C138.6 34.33 157.8 27.56 173.7 35.09c15.97 7.562 22.78 26.66 15.22 42.63L82.56 302.2H256V160c0-17.67 14.33-32 32-32s32 14.33 32 32v142.2h32C369.7 302.2 384 316.6 384 334.2z"></path></svg> \n  <svg class="er rotate svelte-iiwhkg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM80.72 256H79.63c-9.078 0-16.4-8.011-15.56-17.34C72.36 146 146.5 72.06 239.3 64.06C248.3 63.28 256 70.75 256 80.09c0 8.35-6.215 15.28-14.27 15.99C164.7 102.9 103.1 164.3 96.15 241.4C95.4 249.6 88.77 256 80.72 256zM256 351.1c-53.02 0-96-43-96-95.1s42.98-96 96-96s96 43 96 96S309 351.1 256 351.1zM256 224C238.3 224 224 238.2 224 256s14.3 32 32 32c17.7 0 32-14.25 32-32S273.7 224 256 224z"></path></svg> \n  <svg class="er svelte-iiwhkg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 334.2c0 17.67-14.33 32-32 32h-32v81.78c0 17.67-14.33 32-32 32s-32-14.33-32-32v-81.78H32c-10.97 0-21.17-5.625-27.05-14.89c-5.859-9.266-6.562-20.89-1.875-30.81l128-270.2C138.6 34.33 157.8 27.56 173.7 35.09c15.97 7.562 22.78 26.66 15.22 42.63L82.56 302.2H256V160c0-17.67 14.33-32 32-32s32 14.33 32 32v142.2h32C369.7 302.2 384 316.6 384 334.2z"></path></svg>',$(n,"class","mb-3")},m(t,e){p(t,n,e),p(t,s,e),p(t,r,e)},p:t,i:t,o:t,d(t){t&&h(n),t&&h(s),t&&h(r)}}}class Nt extends K{constructor(t){super(),Y(this,t,null,qt,l,{})}}function Tt(e){let n,s,r,o,l,c,a,i,u,m,v,w,b,x,y,C,_,k,E;return w=new bt({}),x=new yt({}),{c(){n=d("div"),s=d("div"),r=d("div"),r.innerHTML='<img class="rounded-lg w-100 round  svelte-nonbni" src="./ressources/us.jpg" alt="of Me"/>',o=g(),l=d("div"),c=d("h3"),c.textContent="Hi!",a=g(),i=d("div"),i.textContent="Wenn du willst kannst du uns über folgende Kanäle kontaktieren.",u=g(),m=d("div"),m.textContent="Wir freuen uns über jede Nachricht 😊",v=g(),F(w.$$.fragment),b=g(),F(x.$$.fragment),y=g(),C=d("div"),_=g(),k=d("form"),k.innerHTML='<div class="form-group text-start"><label for="inputEmail">Deine E-Mail Adresse</label> \n          <input type="email" class="form-control w svelte-nonbni" id="inputEmail" aria-describedby="emailHelp" placeholder="E-Mail Adresse"/></div> \n        <div class="form-group text-start mt-2"><label for="inputMessage">Nachricht</label> \n          <textarea class="form-control w svelte-nonbni" id="inputMessage" rows="3" placeholder="Deine Nachricht an uns"></textarea></div> \n        <button type="submit" class="btn btn-primary disabled mt-4">Absenden</button>',$(r,"class","col-12 col-md-6 d-flex flex-warp align-items-center "),$(m,"class","mb-4"),$(C,"class","mb-4"),$(k,"class","d-flex flex-grow flex-column justify-content-center align-items-center"),$(l,"class","col-12 col-md-6 py-5 text-center"),$(s,"class","row"),$(n,"class","container")},m(t,e){p(t,n,e),f(n,s),f(s,r),f(s,o),f(s,l),f(l,c),f(l,a),f(l,i),f(l,u),f(l,m),f(l,v),I(w,l,null),f(l,b),I(x,l,null),f(l,y),f(l,C),f(l,_),f(l,k),E=!0},p:t,i(t){E||(B(w.$$.fragment,t),B(x.$$.fragment,t),E=!0)},o(t){U(w.$$.fragment,t),U(x.$$.fragment,t),E=!1},d(t){t&&h(n),V(w),V(x)}}}class Ot extends K{constructor(t){super(),Y(this,t,null,Tt,l,{})}}function Dt(e){let n,s,r,o,l,c,a,i,u;return r=new $t({}),c=new it({props:{routes:{"/":Lt,"/about":At,"/projects":Ht,"/contact":Ot,"*":Nt}}}),i=new kt({}),{c(){n=d("div"),s=d("div"),F(r.$$.fragment),o=g(),l=d("main"),F(c.$$.fragment),a=g(),F(i.$$.fragment),$(s,"class","cover-container d-flex w-100 min-vh-100 px-2 py-4 mx-auto flex-column svelte-m5lpiz"),$(n,"class","bg-image img-fluid w-100 img svelte-m5lpiz")},m(t,e){p(t,n,e),f(n,s),I(r,s,null),f(s,o),f(s,l),I(c,l,null),f(s,a),I(i,s,null),u=!0},p:t,i(t){u||(B(r.$$.fragment,t),B(c.$$.fragment,t),B(i.$$.fragment,t),u=!0)},o(t){U(r.$$.fragment,t),U(c.$$.fragment,t),U(i.$$.fragment,t),u=!1},d(t){t&&h(n),V(r),V(c),V(i)}}}function Bt(t){return[]}return new class extends K{constructor(t){super(),Y(this,t,Bt,Dt,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
