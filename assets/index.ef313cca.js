const je=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}};je();function B(){}function qe(t,e){for(const n in e)t[n]=e[n];return t}function ke(t){return t()}function de(){return Object.create(null)}function ee(t){t.forEach(ke)}function Fe(t){return typeof t=="function"}function F(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Pe(t){return Object.keys(t).length===0}function xe(t,...e){if(t==null)return B;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ye(t,e,n){t.$$.on_destroy.push(xe(e,n))}function ze(t,e,n,r){if(t){const l=Ce(t,e,n,r);return t[0](l)}}function Ce(t,e,n,r){return t[1]&&r?qe(n.ctx.slice(),t[1](r(e))):n.ctx}function Se(t,e,n,r){if(t[2]&&r){const l=t[2](r(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const i=[],s=Math.max(e.dirty.length,l.length);for(let u=0;u<s;u+=1)i[u]=e.dirty[u]|l[u];return i}return e.dirty|l}return e.dirty}function Me(t,e,n,r,l,i){if(l){const s=Ce(e,n,r,i);t.p(s,l)}}function Ee(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Ve(t,e,n){return t.set(n),e}function a(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function C(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function b(){return I(" ")}function We(){return I("")}function ce(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function De(t){return Array.from(t.childNodes)}function Q(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let ae;function K(t){ae=t}function Te(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const Y=[],me=[],re=[],ge=[],Re=Promise.resolve();let fe=!1;function Ue(){fe||(fe=!0,Re.then(Ae))}function ue(t){re.push(t)}const oe=new Set;let ne=0;function Ae(){const t=ae;do{for(;ne<Y.length;){const e=Y[ne];ne++,K(e),Ge(e.$$)}for(K(null),Y.length=0,ne=0;me.length;)me.pop()();for(let e=0;e<re.length;e+=1){const n=re[e];oe.has(n)||(oe.add(n),n())}re.length=0}while(Y.length);for(;ge.length;)ge.pop()();fe=!1,oe.clear(),K(t)}function Ge(t){if(t.fragment!==null){t.update(),ee(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ue)}}const le=new Set;let R;function Be(){R={r:0,c:[],p:R}}function Ie(){R.r||ee(R.c),R=R.p}function g(t,e){t&&t.i&&(le.delete(t),t.i(e))}function _(t,e,n,r){if(t&&t.o){if(le.has(t))return;le.add(t),R.c.push(()=>{le.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function z(t){t&&t.c()}function w(t,e,n,r){const{fragment:l,on_mount:i,on_destroy:s,after_update:u}=t.$$;l&&l.m(e,n),r||ue(()=>{const c=i.map(ke).filter(Fe);s?s.push(...c):ee(c),t.$$.on_mount=[]}),u.forEach(ue)}function k(t,e){const n=t.$$;n.fragment!==null&&(ee(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Je(t,e){t.$$.dirty[0]===-1&&(Y.push(t),Ue(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(t,e,n,r,l,i,s,u=[-1]){const c=ae;K(t);const o=t.$$={fragment:null,ctx:null,props:i,update:B,not_equal:l,bound:de(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:de(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(o.root);let m=!1;if(o.ctx=n?n(t,e.props||{},(d,E,...M)=>{const T=M.length?M[0]:E;return o.ctx&&l(o.ctx[d],o.ctx[d]=T)&&(!o.skip_bound&&o.bound[d]&&o.bound[d](T),m&&Je(t,d)),E}):[],o.update(),m=!0,ee(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){const d=De(e.target);o.fragment&&o.fragment.l(d),d.forEach($)}else o.fragment&&o.fragment.c();e.intro&&g(t.$$.fragment),w(t,e.target,e.anchor,e.customElement),Ae()}K(c)}class V{$destroy(){k(this,1),this.$destroy=B}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!Pe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const J=[];function Qe(t,e){return{subscribe:ie(t,e).subscribe}}function ie(t,e=B){let n;const r=new Set;function l(u){if(F(t,u)&&(t=u,n)){const c=!J.length;for(const o of r)o[1](),J.push(o,t);if(c){for(let o=0;o<J.length;o+=2)J[o][0](J[o+1]);J.length=0}}}function i(u){l(u(t))}function s(u,c=B){const o=[u,c];return r.add(o),r.size===1&&(n=e(l)||B),u(t),()=>{r.delete(o),r.size===0&&(n(),n=null)}}return{set:l,update:i,subscribe:s}}const Z=ie("white");function Xe(t){let e,n;return{c(){e=x("div"),n=I(t[0]),f(e,"class","px-4")},m(r,l){h(r,e,l),a(e,n)},p(r,[l]){l&1&&Q(n,r[0])},i:B,o:B,d(r){r&&$(e)}}}function Ye(t,e,n){let r;const l=Qe("",i=>{const s=setInterval(()=>{const u=new Date,c=u.getHours().toString().padStart(2,"0"),o=u.getMinutes().toString().padStart(2,"0");i(`${c}:${o}`)},1e3);return()=>{clearInterval(s)}});return ye(t,l,i=>n(0,r=i)),[r,l]}class Ze extends V{constructor(e){super(),P(this,e,Ye,Xe,F,{})}}function Ke(t){let e,n;return{c(){e=C("svg"),n=C("path"),f(n,"fill-rule","evenodd"),f(n,"d","M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"),f(n,"clip-rule","evenodd"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"class","h-5 w-5"),f(e,"viewBox","0 0 20 20"),f(e,"fill","currentColor")},m(r,l){h(r,e,l),a(e,n)},d(r){r&&$(e)}}}function et(t){let e,n;return{c(){e=C("svg"),n=C("path"),f(n,"d","M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"class","h-5 w-5"),f(e,"viewBox","0 0 20 20"),f(e,"fill","currentColor")},m(r,l){h(r,e,l),a(e,n)},d(r){r&&$(e)}}}function tt(t){let e,n,r;return{c(){e=C("svg"),n=C("path"),r=C("path"),f(n,"fill-rule","evenodd"),f(n,"d","M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"),f(n,"clip-rule","evenodd"),f(r,"fill-rule","evenodd"),f(r,"d","M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"),f(r,"clip-rule","evenodd"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"class","h-5 w-5"),f(e,"viewBox","0 0 20 20"),f(e,"fill","currentColor")},m(l,i){h(l,e,i),a(e,n),a(e,r)},d(l){l&&$(e)}}}function nt(t){let e,n;return{c(){e=C("svg"),n=C("path"),f(n,"fill-rule","evenodd"),f(n,"d","M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"),f(n,"clip-rule","evenodd"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"class","h-5 w-5"),f(e,"viewBox","0 0 20 20"),f(e,"fill","currentColor")},m(r,l){h(r,e,l),a(e,n)},d(r){r&&$(e)}}}function rt(t){let e,n;return{c(){e=C("svg"),n=C("path"),f(n,"fill-rule","evenodd"),f(n,"d","M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"),f(n,"clip-rule","evenodd"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"class","h-5 w-5"),f(e,"viewBox","0 0 20 20"),f(e,"fill","currentColor")},m(r,l){h(r,e,l),a(e,n)},d(r){r&&$(e)}}}function lt(t){let e,n;return{c(){e=C("svg"),n=C("path"),f(n,"fill-rule","evenodd"),f(n,"d","M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"),f(n,"clip-rule","evenodd"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"class","h-5 w-5"),f(e,"viewBox","0 0 20 20"),f(e,"fill","currentColor")},m(r,l){h(r,e,l),a(e,n)},d(r){r&&$(e)}}}function it(t){let e,n;return{c(){e=C("svg"),n=C("path"),f(n,"fill-rule","evenodd"),f(n,"d","M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"),f(n,"clip-rule","evenodd"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"class","h-5 w-5"),f(e,"viewBox","0 0 20 20"),f(e,"fill","currentColor")},m(r,l){h(r,e,l),a(e,n)},d(r){r&&$(e)}}}function ot(t){let e,n,r;return{c(){e=C("svg"),n=C("path"),r=C("path"),f(n,"fill-rule","evenodd"),f(n,"d","M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"),f(n,"clip-rule","evenodd"),f(r,"d","M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"class","h-5 w-5"),f(e,"viewBox","0 0 20 20"),f(e,"fill","currentColor")},m(l,i){h(l,e,i),a(e,n),a(e,r)},d(l){l&&$(e)}}}function st(t){let e,n;return{c(){e=C("svg"),n=C("path"),f(n,"fill-rule","evenodd"),f(n,"d","M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"),f(n,"clip-rule","evenodd"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"class","h-5 w-5"),f(e,"viewBox","0 0 20 20"),f(e,"fill","currentColor")},m(r,l){h(r,e,l),a(e,n)},d(r){r&&$(e)}}}function ft(t){let e;function n(i,s){if(i[0]==="document")return st;if(i[0]==="eye-off")return ot;if(i[0]==="cog")return it;if(i[0]==="chevron-left")return lt;if(i[0]==="chevron-double-left")return rt;if(i[0]==="chevron-right")return nt;if(i[0]==="chevron-double-right")return tt;if(i[0]==="switch-horizontal")return et;if(i[0]==="refresh")return Ke}let r=n(t),l=r&&r(t);return{c(){l&&l.c(),e=We()},m(i,s){l&&l.m(i,s),h(i,e,s)},p(i,[s]){r!==(r=n(i))&&(l&&l.d(1),l=r&&r(i),l&&(l.c(),l.m(e.parentNode,e)))},i:B,o:B,d(i){l&&l.d(i),i&&$(e)}}}function ut(t,e,n){let{name:r}=e;return t.$$set=l=>{"name"in l&&n(0,r=l.name)},[r]}class He extends V{constructor(e){super(),P(this,e,ut,ft,F,{name:0})}}function $e(t){let e,n;return e=new He({props:{name:t[1]}}),{c(){z(e.$$.fragment)},m(r,l){w(e,r,l),n=!0},p(r,l){const i={};l&2&&(i.name=r[1]),e.$set(i)},i(r){n||(g(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){k(e,r)}}}function he(t){let e,n;return{c(){e=x("div"),n=I(t[0]),f(e,"class","ml-1 first:ml-0")},m(r,l){h(r,e,l),a(e,n)},p(r,l){l&1&&Q(n,r[0])},d(r){r&&$(e)}}}function pe(t){let e;return{c(){e=I("BUTTON")},m(n,r){h(n,e,r)},d(n){n&&$(e)}}}function ct(t){let e,n,r,l,i,s,u,c=t[1]!==null&&$e(t),o=t[0]!==null&&he(t),m=t[1]===null&&t[0]===null&&pe();return{c(){e=x("div"),c&&c.c(),n=b(),o&&o.c(),r=b(),m&&m.c(),f(e,"class",l=`
    flex items-center
    my-1 px-3 py-1
    hover:bg-black/10 active:bg-black/20
    ${t[2]?"text-gray-900 underline":"text-gray-500 hover:text-gray-700"}
    rounded
  `)},m(d,E){h(d,e,E),c&&c.m(e,null),a(e,n),o&&o.m(e,null),a(e,r),m&&m.m(e,null),i=!0,s||(u=ce(e,"click",t[3]),s=!0)},p(d,[E]){d[1]!==null?c?(c.p(d,E),E&2&&g(c,1)):(c=$e(d),c.c(),g(c,1),c.m(e,n)):c&&(Be(),_(c,1,1,()=>{c=null}),Ie()),d[0]!==null?o?o.p(d,E):(o=he(d),o.c(),o.m(e,r)):o&&(o.d(1),o=null),d[1]===null&&d[0]===null?m||(m=pe(),m.c(),m.m(e,null)):m&&(m.d(1),m=null),(!i||E&4&&l!==(l=`
    flex items-center
    my-1 px-3 py-1
    hover:bg-black/10 active:bg-black/20
    ${d[2]?"text-gray-900 underline":"text-gray-500 hover:text-gray-700"}
    rounded
  `))&&f(e,"class",l)},i(d){i||(g(c),i=!0)},o(d){_(c),i=!1},d(d){d&&$(e),c&&c.d(),o&&o.d(),m&&m.d(),s=!1,u()}}}function at(t,e,n){let{label:r=null}=e,{icon:l=null}=e,{isCurrent:i=!1}=e;function s(u){Te.call(this,t,u)}return t.$$set=u=>{"label"in u&&n(0,r=u.label),"icon"in u&&n(1,l=u.icon),"isCurrent"in u&&n(2,i=u.isCurrent)},[r,l,i,s]}class L extends V{constructor(e){super(),P(this,e,at,ct,F,{label:0,icon:1,isCurrent:2})}}function dt(t){let e,n,r,l,i,s,u,c,o,m,d,E,M,T,y,N,H,O,U,A,G,j,v,S,X,W,q,D;return i=new L({props:{icon:"cog",label:"Settings"}}),u=new L({props:{label:"white"}}),u.$on("click",t[0]),o=new L({props:{label:"beige"}}),o.$on("click",t[1]),d=new L({props:{label:"blue"}}),d.$on("click",t[2]),M=new L({props:{label:"green"}}),M.$on("click",t[3]),N=new L({props:{icon:"chevron-double-left"}}),O=new L({props:{icon:"chevron-left"}}),A=new L({props:{icon:"refresh"}}),j=new L({props:{icon:"chevron-right"}}),S=new L({props:{icon:"chevron-double-right"}}),q=new Ze({}),{c(){e=x("div"),n=x("div"),r=x("h1"),r.textContent="zenpad",l=b(),z(i.$$.fragment),s=b(),z(u.$$.fragment),c=b(),z(o.$$.fragment),m=b(),z(d.$$.fragment),E=b(),z(M.$$.fragment),T=b(),y=x("div"),z(N.$$.fragment),H=b(),z(O.$$.fragment),U=b(),z(A.$$.fragment),G=b(),z(j.$$.fragment),v=b(),z(S.$$.fragment),X=b(),W=x("div"),z(q.$$.fragment),f(r,"class","px-4 font-semibold"),f(n,"class","flex items-center"),f(y,"class","flex items-center"),f(W,"class","flex items-center justify-end"),f(e,"class",`
    col-span-2
    grid grid-cols-[1fr,auto,1fr] items-center
    border-b border-gray-300
    bg-white
    backdrop-blur
  `)},m(p,Oe){h(p,e,Oe),a(e,n),a(n,r),a(n,l),w(i,n,null),a(n,s),w(u,n,null),a(n,c),w(o,n,null),a(n,m),w(d,n,null),a(n,E),w(M,n,null),a(e,T),a(e,y),w(N,y,null),a(y,H),w(O,y,null),a(y,U),w(A,y,null),a(y,G),w(j,y,null),a(y,v),w(S,y,null),a(e,X),a(e,W),w(q,W,null),D=!0},p:B,i(p){D||(g(i.$$.fragment,p),g(u.$$.fragment,p),g(o.$$.fragment,p),g(d.$$.fragment,p),g(M.$$.fragment,p),g(N.$$.fragment,p),g(O.$$.fragment,p),g(A.$$.fragment,p),g(j.$$.fragment,p),g(S.$$.fragment,p),g(q.$$.fragment,p),D=!0)},o(p){_(i.$$.fragment,p),_(u.$$.fragment,p),_(o.$$.fragment,p),_(d.$$.fragment,p),_(M.$$.fragment,p),_(N.$$.fragment,p),_(O.$$.fragment,p),_(A.$$.fragment,p),_(j.$$.fragment,p),_(S.$$.fragment,p),_(q.$$.fragment,p),D=!1},d(p){p&&$(e),k(i),k(u),k(o),k(d),k(M),k(N),k(O),k(A),k(j),k(S),k(q)}}}function mt(t){return[()=>Z.set("white"),()=>Z.set("beige"),()=>Z.set("blue"),()=>Z.set("green")]}class gt extends V{constructor(e){super(),P(this,e,mt,dt,F,{})}}function _e(t){let e,n,r;return n=new He({props:{name:t[0]}}),{c(){e=x("div"),z(n.$$.fragment),f(e,"class","mr-1")},m(l,i){h(l,e,i),w(n,e,null),r=!0},p(l,i){const s={};i&1&&(s.name=l[0]),n.$set(s)},i(l){r||(g(n.$$.fragment,l),r=!0)},o(l){_(n.$$.fragment,l),r=!1},d(l){l&&$(e),k(n)}}}function $t(t){let e,n,r,l,i,s=t[0]!==null&&_e(t);const u=t[2].default,c=ze(u,t,t[1],null);return{c(){e=x("div"),s&&s.c(),n=b(),c&&c.c(),f(e,"class",`
    flex items-center
    px-3 py-1
    hover:bg-black/10 active:bg-black/20
    font-semibold
  `)},m(o,m){h(o,e,m),s&&s.m(e,null),a(e,n),c&&c.m(e,null),r=!0,l||(i=ce(e,"click",t[3]),l=!0)},p(o,[m]){o[0]!==null?s?(s.p(o,m),m&1&&g(s,1)):(s=_e(o),s.c(),g(s,1),s.m(e,n)):s&&(Be(),_(s,1,1,()=>{s=null}),Ie()),c&&c.p&&(!r||m&2)&&Me(c,u,o,o[1],r?Se(u,o[1],m,null):Ee(o[1]),null)},i(o){r||(g(s),g(c,o),r=!0)},o(o){_(s),_(c,o),r=!1},d(o){o&&$(e),s&&s.d(),c&&c.d(o),l=!1,i()}}}function ht(t,e,n){let{$$slots:r={},$$scope:l}=e,{icon:i=null}=e;function s(u){Te.call(this,t,u)}return t.$$set=u=>{"icon"in u&&n(0,i=u.icon),"$$scope"in u&&n(1,l=u.$$scope)},[i,l,r,s]}class pt extends V{constructor(e){super(),P(this,e,ht,$t,F,{icon:0})}}function _t(t){let e,n;const r=t[1].default,l=ze(r,t,t[0],null);return{c(){e=x("div"),l&&l.c(),f(e,"class","px-4 py-1 text-gray-600")},m(i,s){h(i,e,s),l&&l.m(e,null),n=!0},p(i,[s]){l&&l.p&&(!n||s&1)&&Me(l,r,i,i[0],n?Se(r,i[0],s,null):Ee(i[0]),null)},i(i){n||(g(l,i),n=!0)},o(i){_(l,i),n=!1},d(i){i&&$(e),l&&l.d(i)}}}function bt(t,e,n){let{$$slots:r={},$$scope:l}=e;return t.$$set=i=>{"$$scope"in i&&n(0,l=i.$$scope)},[l,r]}class se extends V{constructor(e){super(),P(this,e,bt,_t,F,{})}}const vt=/['";:,.?¿\-!¡]+/g;function wt(t){return(t.replace(vt,"").match(/\S+/g)||[]).length}function kt(t){let e;return{c(){e=I("File")},m(n,r){h(n,e,r)},d(n){n&&$(e)}}}function xt(t){let e;return{c(){e=I("Temporary")},m(n,r){h(n,e,r)},d(n){n&&$(e)}}}function yt(t){let e=t[1].length+"",n,r,l=t[1].length===1?"character":"characters",i;return{c(){n=I(e),r=b(),i=I(l)},m(s,u){h(s,n,u),h(s,r,u),h(s,i,u)},p(s,u){u&2&&e!==(e=s[1].length+"")&&Q(n,e),u&2&&l!==(l=s[1].length===1?"character":"characters")&&Q(i,l)},d(s){s&&$(n),s&&$(r),s&&$(i)}}}function zt(t){let e,n,r=t[2]===1?"word":"words",l;return{c(){e=I(t[2]),n=b(),l=I(r)},m(i,s){h(i,e,s),h(i,n,s),h(i,l,s)},p(i,s){s&4&&Q(e,i[2]),s&4&&r!==(r=i[2]===1?"word":"words")&&Q(l,r)},d(i){i&&$(e),i&&$(n),i&&$(l)}}}function Ct(t){let e,n,r,l,i,s,u,c,o,m,d,E,M,T,y,N,H,O,U,A,G,j;return i=new pt({props:{icon:"document",$$slots:{default:[kt]},$$scope:{ctx:t}}}),u=new se({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),y=new se({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),H=new se({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),{c(){e=x("div"),n=x("div"),r=x("div"),l=x("div"),z(i.$$.fragment),s=b(),z(u.$$.fragment),c=b(),o=x("div"),m=b(),d=x("textarea"),E=b(),M=x("div"),T=x("div"),z(y.$$.fragment),N=b(),z(H.$$.fragment),O=b(),U=x("div"),f(l,"class","flex"),f(o,"class","ml-auto flex"),f(r,"class","border-b border-gray-300 flex"),f(d,"class",`
        px-4 py-2
        focus:outline-none
        bg-transparent
        resize-none
      `),d.value=t[1],f(T,"class","flex"),f(U,"class","ml-auto flex"),f(M,"class","border-t border-gray-300 flex"),f(n,"class",`
      grid grid-rows-[auto,1fr,auto]
      w-[80ex] max-w-full
      border-l border-t border-r border-gray-300
      rounded-t-md
      bg-white
      overflow-hidden
    `),f(e,"class","grid justify-center pt-4")},m(v,S){h(v,e,S),a(e,n),a(n,r),a(r,l),w(i,l,null),a(l,s),w(u,l,null),a(r,c),a(r,o),a(n,m),a(n,d),a(n,E),a(n,M),a(M,T),w(y,T,null),a(T,N),w(H,T,null),a(M,O),a(M,U),A=!0,G||(j=ce(d,"input",t[3]),G=!0)},p(v,[S]){const X={};S&16&&(X.$$scope={dirty:S,ctx:v}),i.$set(X);const W={};S&16&&(W.$$scope={dirty:S,ctx:v}),u.$set(W),(!A||S&2)&&(d.value=v[1]);const q={};S&18&&(q.$$scope={dirty:S,ctx:v}),y.$set(q);const D={};S&20&&(D.$$scope={dirty:S,ctx:v}),H.$set(D)},i(v){A||(g(i.$$.fragment,v),g(u.$$.fragment,v),g(y.$$.fragment,v),g(H.$$.fragment,v),A=!0)},o(v){_(i.$$.fragment,v),_(u.$$.fragment,v),_(y.$$.fragment,v),_(H.$$.fragment,v),A=!1},d(v){v&&$(e),k(i),k(u),k(y),k(H),G=!1,j()}}}function St(t,e,n){let r,l,i=B,s=()=>(i(),i=xe(u,o=>n(1,l=o)),u);t.$$.on_destroy.push(()=>i());let{editorStore:u}=e;s();function c(o){o.target instanceof HTMLTextAreaElement&&(console.log(o.target.value),Ve(u,l=o.target.value,l))}return t.$$set=o=>{"editorStore"in o&&s(n(0,u=o.editorStore))},t.$$.update=()=>{t.$$.dirty&2&&n(2,r=wt(l))},[u,l,r,c]}class be extends V{constructor(e){super(),P(this,e,St,Ct,F,{editorStore:0})}}var te=(t=>(t.version="zen.version",t.fontFace="zen.font-face",t.fontSize="zen.font-size",t.theme="zen.theme",t.layout="zen.layout",t.editorWidth="zen.editor-width",t.showClock="zen.show-clock",t.spellcheck="zen.spellcheck",t.leftText="zen.left-text",t.rightText="zen.right-text",t))(te||{}),ve;const Le=ie((ve=localStorage.getItem(te.leftText))!=null?ve:"");var we;const Ne=ie((we=localStorage.getItem(te.rightText))!=null?we:"");Le.subscribe(t=>{localStorage.setItem(te.leftText,t)});Ne.subscribe(t=>{localStorage.setItem(te.rightText,t)});function Mt(t){let e,n,r,l,i,s,u,c;return n=new gt({}),l=new be({props:{editorStore:Le}}),s=new be({props:{editorStore:Ne}}),{c(){e=x("div"),z(n.$$.fragment),r=b(),z(l.$$.fragment),i=b(),z(s.$$.fragment),f(e,"class",u=`
    fixed inset-0
    grid grid-rows-[auto,1fr] grid-cols-[1fr,1fr]
    transition-colors
    bg-[color:var(--bg)]
    ${t[0]==="white"?"[--bg:white]":t[0]==="beige"?"[--bg:beige]":t[0]==="blue"?"[--bg:#ddddff]":t[0]==="green"?"[--bg:#ddffdd]":"white"}
  `)},m(o,m){h(o,e,m),w(n,e,null),a(e,r),w(l,e,null),a(e,i),w(s,e,null),c=!0},p(o,[m]){(!c||m&1&&u!==(u=`
    fixed inset-0
    grid grid-rows-[auto,1fr] grid-cols-[1fr,1fr]
    transition-colors
    bg-[color:var(--bg)]
    ${o[0]==="white"?"[--bg:white]":o[0]==="beige"?"[--bg:beige]":o[0]==="blue"?"[--bg:#ddddff]":o[0]==="green"?"[--bg:#ddffdd]":"white"}
  `))&&f(e,"class",u)},i(o){c||(g(n.$$.fragment,o),g(l.$$.fragment,o),g(s.$$.fragment,o),c=!0)},o(o){_(n.$$.fragment,o),_(l.$$.fragment,o),_(s.$$.fragment,o),c=!1},d(o){o&&$(e),k(n),k(l),k(s)}}}function Et(t,e,n){let r;return ye(t,Z,l=>n(0,r=l)),[r]}class Tt extends V{constructor(e){super(),P(this,e,Et,Mt,F,{})}}new Tt({target:document.getElementById("app")});
