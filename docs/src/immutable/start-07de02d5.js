import{S as Ye,i as Xe,s as Ze,a as Qe,e as B,c as xe,b as M,g as pe,t as F,d as de,f as J,h as G,j as et,o as Se,k as tt,l as nt,m as rt,n as ve,p as q,q as at,r as st,u as ot,v as Y,w as X,x as Ie,y as Z,z as Q,A as Be}from"./chunks/index-cc23cab2.js";import{g as Fe,f as Je,s as z,a as Re,b as it,i as lt}from"./chunks/singletons-f8785c23.js";function ct(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ft(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ut=["href","pathname","search","searchParams","toString","toJSON"];function pt(r,e){const t=new URL(r);for(const s of ut){let o=t[s];Object.defineProperty(t,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return dt(t),t}function dt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ht="/__data.json";function mt(r){return r.replace(/\/$/,"")+ht}function gt(r){let e=5381;if(typeof r=="string"){let t=r.length;for(;t;)e=e*33^r.charCodeAt(--t)}else if(ArrayBuffer.isView(r)){const t=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=t.length;for(;s;)e=e*33^t[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ue.delete(s)}return he(r,e)};const ue=new Map;function _t(r,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(o+=`[data-hash="${gt(t.body)}"]`);const c=document.querySelector(o);if(c!=null&&c.textContent){const{body:n,...f}=JSON.parse(c.textContent),m=c.getAttribute("data-ttl");return m&&ue.set(e,{body:n,init:f,ttl:1e3*Number(m)}),Promise.resolve(new Response(n,f))}return he(r,t)}function yt(r,e){const t=ue.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);ue.delete(r)}return he(r,e)}const wt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function bt(r){const e=[],t=[],s=[];let o=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${Et(r).map((n,f,m)=>{const d=decodeURIComponent(n),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(_)return e.push(_[1]),t.push(_[2]),s.push(!1),"(?:/(.*))?";const w=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(d);if(w)return e.push(w[1]),t.push(w[2]),s.push(!0),"(?:/([^/]+))?";const R=f===m.length-1;return d?"/"+d.split(/\[(.+?)\](?!\])/).map((T,D)=>{if(D%2){const C=wt.exec(T);if(!C)throw new Error(`Invalid param: ${T}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,K,ae,x,se]=C;return e.push(x),t.push(se),s.push(!!K),ae?"(.*?)":K?"([^/]*)?":"([^/]+?)"}return R&&T.includes(".")&&(o=!1),T.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${o?"/?":""}$`),names:e,types:t,optional:s}}function vt(r){return!/^\([^)]+\)$/.test(r)}function Et(r){return r.slice(1).split("/").filter(vt)}function kt(r,{names:e,types:t,optional:s},o){const c={};for(let n=0;n<e.length;n+=1){const f=e[n],m=t[n];let d=r[n+1];if(d||!s[n]){if(m){const _=o[m];if(!_)throw new Error(`Missing "${m}" param matcher`);if(!_(d))return}c[f]=d!=null?d:""}}return c}function St(r,e,t,s){const o=new Set(e);return Object.entries(t).map(([f,[m,d,_]])=>{const{pattern:w,names:R,types:U,optional:H}=bt(f),T={id:f,exec:D=>{const C=w.exec(D);if(C)return kt(C,{names:R,types:U,optional:H},s)},errors:[1,..._||[]].map(D=>r[D]),layouts:[0,...d||[]].map(n),leaf:c(m)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function c(f){const m=f<0;return m&&(f=~f),[m,r[f]]}function n(f){return f===void 0?f:[o.has(f),r[f]]}}function Rt(r){let e,t,s;var o=r[0][0];function c(n){return{props:{data:n[2],form:n[1]}}}return o&&(e=Y(o,c(r))),{c(){e&&X(e.$$.fragment),t=B()},l(n){e&&Ie(e.$$.fragment,n),t=B()},m(n,f){e&&Z(e,n,f),M(n,t,f),s=!0},p(n,f){const m={};if(f&4&&(m.data=n[2]),f&2&&(m.form=n[1]),o!==(o=n[0][0])){if(e){pe();const d=e;F(d.$$.fragment,1,0,()=>{Q(d,1)}),de()}o?(e=Y(o,c(n)),X(e.$$.fragment),J(e.$$.fragment,1),Z(e,t.parentNode,t)):e=null}else o&&e.$set(m)},i(n){s||(e&&J(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&G(t),e&&Q(e,n)}}}function Ot(r){let e,t,s;var o=r[0][0];function c(n){return{props:{data:n[2],$$slots:{default:[$t]},$$scope:{ctx:n}}}}return o&&(e=Y(o,c(r))),{c(){e&&X(e.$$.fragment),t=B()},l(n){e&&Ie(e.$$.fragment,n),t=B()},m(n,f){e&&Z(e,n,f),M(n,t,f),s=!0},p(n,f){const m={};if(f&4&&(m.data=n[2]),f&523&&(m.$$scope={dirty:f,ctx:n}),o!==(o=n[0][0])){if(e){pe();const d=e;F(d.$$.fragment,1,0,()=>{Q(d,1)}),de()}o?(e=Y(o,c(n)),X(e.$$.fragment),J(e.$$.fragment,1),Z(e,t.parentNode,t)):e=null}else o&&e.$set(m)},i(n){s||(e&&J(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&G(t),e&&Q(e,n)}}}function $t(r){let e,t,s;var o=r[0][1];function c(n){return{props:{data:n[3],form:n[1]}}}return o&&(e=Y(o,c(r))),{c(){e&&X(e.$$.fragment),t=B()},l(n){e&&Ie(e.$$.fragment,n),t=B()},m(n,f){e&&Z(e,n,f),M(n,t,f),s=!0},p(n,f){const m={};if(f&8&&(m.data=n[3]),f&2&&(m.form=n[1]),o!==(o=n[0][1])){if(e){pe();const d=e;F(d.$$.fragment,1,0,()=>{Q(d,1)}),de()}o?(e=Y(o,c(n)),X(e.$$.fragment),J(e.$$.fragment,1),Z(e,t.parentNode,t)):e=null}else o&&e.$set(m)},i(n){s||(e&&J(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&G(t),e&&Q(e,n)}}}function Ge(r){let e,t=r[5]&&Ke(r);return{c(){e=tt("div"),t&&t.c(),this.h()},l(s){e=nt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=rt(e);t&&t.l(o),o.forEach(G),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(s,o){M(s,e,o),t&&t.m(e,null)},p(s,o){s[5]?t?t.p(s,o):(t=Ke(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&G(e),t&&t.d()}}}function Ke(r){let e;return{c(){e=at(r[6])},l(t){e=st(t,r[6])},m(t,s){M(t,e,s)},p(t,s){s&64&&ot(e,t[6])},d(t){t&&G(e)}}}function Lt(r){let e,t,s,o,c;const n=[Ot,Rt],f=[];function m(_,w){return _[0][1]?0:1}e=m(r),t=f[e]=n[e](r);let d=r[4]&&Ge(r);return{c(){t.c(),s=Qe(),d&&d.c(),o=B()},l(_){t.l(_),s=xe(_),d&&d.l(_),o=B()},m(_,w){f[e].m(_,w),M(_,s,w),d&&d.m(_,w),M(_,o,w),c=!0},p(_,[w]){let R=e;e=m(_),e===R?f[e].p(_,w):(pe(),F(f[R],1,1,()=>{f[R]=null}),de(),t=f[e],t?t.p(_,w):(t=f[e]=n[e](_),t.c()),J(t,1),t.m(s.parentNode,s)),_[4]?d?d.p(_,w):(d=Ge(_),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null)},i(_){c||(J(t),c=!0)},o(_){F(t),c=!1},d(_){f[e].d(_),_&&G(s),d&&d.d(_),_&&G(o)}}}function It(r,e,t){let{stores:s}=e,{page:o}=e,{components:c}=e,{form:n}=e,{data_0:f=null}=e,{data_1:m=null}=e;et(s.page.notify);let d=!1,_=!1,w=null;return Se(()=>{const R=s.page.subscribe(()=>{d&&(t(5,_=!0),t(6,w=document.title||"untitled page"))});return t(4,d=!0),R}),r.$$set=R=>{"stores"in R&&t(7,s=R.stores),"page"in R&&t(8,o=R.page),"components"in R&&t(0,c=R.components),"form"in R&&t(1,n=R.form),"data_0"in R&&t(2,f=R.data_0),"data_1"in R&&t(3,m=R.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[c,n,f,m,d,_,w,s,o]}class jt extends Ye{constructor(e){super(),Xe(this,e,It,Lt,Ze,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const At=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Nt=function(r,e){return new URL(r,e).href},ze={},Ee=function(e,t,s){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=Nt(o,s),o in ze)return;ze[o]=!0;const c=o.endsWith(".css"),n=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":At,c||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),c)return new Promise((m,d)=>{f.addEventListener("load",m),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())},Pt={},me=[()=>Ee(()=>import("./chunks/0-55c0821c.js"),["chunks/0-55c0821c.js","components/pages/_layout.svelte-ec590ddd.js","assets/_layout-62679618.css","chunks/index-cc23cab2.js","chunks/Icon-97d30d00.js"],import.meta.url),()=>Ee(()=>import("./chunks/1-fcc0b63a.js"),["chunks/1-fcc0b63a.js","components/error.svelte-d25ee11d.js","chunks/index-cc23cab2.js","chunks/singletons-f8785c23.js"],import.meta.url),()=>Ee(()=>import("./chunks/2-bc8ae3d4.js"),["chunks/2-bc8ae3d4.js","components/pages/_page.svelte-d03ed85d.js","assets/_page-56ab2293.css","chunks/index-cc23cab2.js","chunks/Icon-97d30d00.js"],import.meta.url)],Ut=[],Tt={"/":[2]},Dt={handleError:({error:r})=>{console.error(r)}};class Oe{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(e,t){this.status=e,this.location=t}}async function qt(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Ct=-1,Vt=-2,Bt=-3,Ft=-4,Jt=-5,Gt=-6;function Kt(r){const e=JSON.parse(r);if(typeof e=="number")return o(e);const t=e,s=Array(t.length);function o(c){if(c===Ct)return;if(c===Bt)return NaN;if(c===Ft)return 1/0;if(c===Jt)return-1/0;if(c===Gt)return-0;if(c in s)return s[c];const n=t[c];if(!n||typeof n!="object")s[c]=n;else if(Array.isArray(n))if(typeof n[0]=="string")switch(n[0]){case"Date":s[c]=new Date(n[1]);break;case"Set":const m=new Set;s[c]=m;for(let w=1;w<n.length;w+=1)m.add(o(n[w]));break;case"Map":const d=new Map;s[c]=d;for(let w=1;w<n.length;w+=2)d.set(o(n[w]),o(n[w+1]));break;case"RegExp":s[c]=new RegExp(n[1],n[2]);break;case"Object":s[c]=Object(n[1]);break;case"BigInt":s[c]=BigInt(n[1]);break;case"null":const _=Object.create(null);s[c]=_;for(let w=1;w<n.length;w+=2)_[n[w]]=o(n[w+1]);break}else{const f=new Array(n.length);s[c]=f;for(let m=0;m<n.length;m+=1){const d=n[m];d!==Vt&&(f[m]=o(d))}}else{const f={};s[c]=f;for(const m in n){const d=n[m];f[m]=o(d)}}return s[c]}return o(0)}const We="sveltekit:scroll",V="sveltekit:index",le=St(me,Ut,Tt,Pt),$e=me[0],Le=me[1];$e();Le();let re={};try{re=JSON.parse(sessionStorage[We])}catch{}function ke(r){re[r]=Re()}function zt({target:r,base:e,trailing_slash:t}){var qe;const s=[];let o=null;const c={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},f=!1,m=!1,d=!0,_=!1,w=!1,R,U=(qe=history.state)==null?void 0:qe[V];U||(U=Date.now(),history.replaceState({...history.state,[V]:U},"",location.href));const H=re[U];H&&(history.scrollRestoration="manual",scrollTo(H.x,H.y));let T=!1,D,C,K;async function ae(){K=K||Promise.resolve(),await K,K=null;const a=new URL(location.href),u=ye(a,!0);o=null,await je(u,a,[])}async function x(a,{noscroll:u=!1,replaceState:p=!1,keepfocus:i=!1,state:l={},invalidateAll:h=!1},g,E){return typeof a=="string"&&(a=new URL(a,Fe(document))),we({url:a,scroll:u?Re():null,keepfocus:i,redirect_chain:g,details:{state:l,replaceState:p},nav_token:E,accepted:()=>{h&&(w=!0)},blocked:()=>{},type:"goto"})}async function se(a){const u=ye(a,!1);if(!u)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:u.id,promise:Pe(u)},o.promise}async function je(a,u,p,i,l={},h){var E,k;C=l;let g=a&&await Pe(a);if(g||(g=await De(u,null,ne(new Error(`Not found: ${u.pathname}`),{url:u,params:{},routeId:null}),404)),u=(a==null?void 0:a.url)||u,C!==l)return!1;if(g.type==="redirect")if(p.length>10||p.includes(u.pathname))g=await oe({status:500,error:ne(new Error("Redirect loop"),{url:u,params:{},routeId:null}),url:u,routeId:null});else return x(new URL(g.location,u).href,{},[...p,u.pathname],l),!1;else((k=(E=g.props)==null?void 0:E.page)==null?void 0:k.status)>=400&&await z.updated.check()&&await ie(u);if(s.length=0,w=!1,_=!0,i&&i.details){const{details:b}=i,v=b.replaceState?0:1;b.state[V]=U+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",u)}if(o=null,m){n=g.state,g.props.page&&(g.props.page.url=u);const b=fe();R.$set(g.props),b()}else Ae(g);if(i){const{scroll:b,keepfocus:v}=i;if(!v){const O=document.body,L=O.getAttribute("tabindex");O.tabIndex=-1,O.focus({preventScroll:!0}),setTimeout(()=>{var I;(I=getSelection())==null||I.removeAllRanges()}),L!==null?O.setAttribute("tabindex",L):O.removeAttribute("tabindex")}if(await Be(),d){const O=u.hash&&document.getElementById(u.hash.slice(1));b?scrollTo(b.x,b.y):O?O.scrollIntoView():scrollTo(0,0)}}else await Be();d=!0,g.props.page&&(D=g.props.page),h&&h(),_=!1}function Ae(a){var l,h;n=a.state;const u=document.querySelector("style[data-sveltekit]");u&&u.remove(),D=a.props.page;const p=fe();R=new jt({target:r,props:{...a.props,stores:z},hydrate:!0}),p();const i={from:null,to:ce("to",{params:n.params,routeId:(h=(l=n.route)==null?void 0:l.id)!=null?h:null,url:new URL(location.href)}),type:"load"};c.after_navigate.forEach(g=>g(i)),m=!0}async function ee({url:a,params:u,branch:p,status:i,error:l,route:h,form:g}){var L;const E=p.filter(Boolean),k={type:"loaded",state:{url:a,params:u,branch:p,error:l,route:h},props:{components:E.map(I=>I.node.component)}};g!==void 0&&(k.props.form=g);let b={},v=!D;for(let I=0;I<E.length;I+=1){const N=E[I];b={...b,...N.data},(v||!n.branch.some(P=>P===N))&&(k.props[`data_${I}`]=b,v=v||Object.keys((L=N.data)!=null?L:{}).length>0)}if(v||(v=Object.keys(D.data).length!==Object.keys(b).length),!n.url||a.href!==n.url.href||n.error!==l||g!==void 0||v){k.props.page={error:l,params:u,routeId:h&&h.id,status:i,url:a,form:g,data:v?b:D.data};const I=(N,P)=>{Object.defineProperty(k.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${P}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return k}async function ge({loader:a,parent:u,url:p,params:i,routeId:l,server_data_node:h}){var b,v,O,L,I;let g=null;const E={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await a();if((b=k.shared)!=null&&b.load){let N=function(...$){for(const y of $){const{href:S}=new URL(y,p);E.dependencies.add(S)}};const P={routeId:l,params:new Proxy(i,{get:($,y)=>(E.params.add(y),$[y])}),data:(v=h==null?void 0:h.data)!=null?v:null,url:pt(p,()=>{E.url=!0}),async fetch($,y){let S;$ instanceof Request?(S=$.url,y={body:$.method==="GET"||$.method==="HEAD"?void 0:await $.blob(),cache:$.cache,credentials:$.credentials,headers:$.headers,integrity:$.integrity,keepalive:$.keepalive,method:$.method,mode:$.mode,redirect:$.redirect,referrer:$.referrer,referrerPolicy:$.referrerPolicy,signal:$.signal,...y}):S=$;const A=new URL(S,p).href;return N(A),m?yt(A,y):_t(S,A,y)},setHeaders:()=>{},depends:N,parent(){return E.parent=!0,u()}};Object.defineProperties(P,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),g=(O=await k.shared.load.call(null,P))!=null?O:null,g=g?await qt(g):null}return{node:k,loader:a,server:h,shared:(L=k.shared)!=null&&L.load?{type:"data",data:g,uses:E}:null,data:(I=g!=null?g:h==null?void 0:h.data)!=null?I:null}}function Ne(a,u,p,i){if(w)return!0;if(!p)return!1;if(p.parent&&u||p.url&&a)return!0;for(const l of p.params)if(i[l]!==n.params[l])return!0;for(const l of p.dependencies)if(s.some(h=>h(new URL(l))))return!0;return!1}function _e(a,u){var p,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&u!=null?u:null}async function Pe({id:a,invalidating:u,url:p,params:i,route:l}){var $;if((o==null?void 0:o.id)===a)return o.promise;const{errors:h,layouts:g,leaf:E}=l,k=[...g,E];h.forEach(y=>y==null?void 0:y().catch(()=>{})),k.forEach(y=>y==null?void 0:y[1]().catch(()=>{}));let b=null;const v=n.url?a!==n.url.pathname+n.url.search:!1,O=k.reduce((y,S,A)=>{var te;const j=n.branch[A],W=!!(S!=null&&S[0])&&((j==null?void 0:j.loader)!==S[1]||Ne(v,y.some(Boolean),(te=j.server)==null?void 0:te.uses,i));return y.push(W),y},[]);if(O.some(Boolean)){try{b=await He(p,O)}catch(y){return oe({status:500,error:ne(y,{url:p,params:i,routeId:l.id}),url:p,routeId:l.id})}if(b.type==="redirect")return b}const L=b==null?void 0:b.nodes;let I=!1;const N=k.map(async(y,S)=>{var te;if(!y)return;const A=n.branch[S],j=L==null?void 0:L[S];if((!j||j.type==="skip")&&y[1]===(A==null?void 0:A.loader)&&!Ne(v,I,(te=A.shared)==null?void 0:te.uses,i))return A;if(I=!0,(j==null?void 0:j.type)==="error")throw j;return ge({loader:y[1],url:p,params:i,routeId:l.id,parent:async()=>{var Ve;const Ce={};for(let be=0;be<S;be+=1)Object.assign(Ce,(Ve=await N[be])==null?void 0:Ve.data);return Ce},server_data_node:_e(j===void 0&&y[0]?{type:"skip"}:j!=null?j:null,A==null?void 0:A.server)})});for(const y of N)y.catch(()=>{});const P=[];for(let y=0;y<k.length;y+=1)if(k[y])try{P.push(await N[y])}catch(S){if(S instanceof Me)return{type:"redirect",location:S.location};let A=500,j;L!=null&&L.includes(S)?(A=($=S.status)!=null?$:A,j=S.error):S instanceof Oe?(A=S.status,j=S.body):j=ne(S,{params:i,url:p,routeId:l.id});const W=await Ue(y,P,h);return W?await ee({url:p,params:i,branch:P.slice(0,W.idx).concat(W.node),status:A,error:j,route:l}):await De(p,l.id,j,A)}else P.push(void 0);return await ee({url:p,params:i,branch:P,status:200,error:null,route:l,form:u?void 0:null})}async function Ue(a,u,p){for(;a--;)if(p[a]){let i=a;for(;!u[i];)i-=1;try{return{idx:i+1,node:{node:await p[a](),loader:p[a],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:a,error:u,url:p,routeId:i}){var b;const l={},h=await $e();let g=null;if(h.server)try{const v=await He(p,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;g=(b=v.nodes[0])!=null?b:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||f)&&await ie(p)}const E=await ge({loader:$e,url:p,params:l,routeId:i,parent:()=>Promise.resolve({}),server_data_node:_e(g)}),k={node:await Le(),loader:Le,shared:null,server:null,data:null};return await ee({url:p,params:l,branch:[E,k],status:a,error:u,route:null})}function ye(a,u){if(Te(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const i of le){const l=i.exec(p);if(l){const h=new URL(a.origin+ct(a.pathname,t)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:u,route:i,params:ft(l),url:h}}}}function Te(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function we({url:a,scroll:u,keepfocus:p,redirect_chain:i,details:l,type:h,delta:g,nav_token:E,accepted:k,blocked:b}){var N,P,$,y;let v=!1;const O=ye(a,!1),L={from:ce("from",{params:n.params,routeId:(P=(N=n.route)==null?void 0:N.id)!=null?P:null,url:n.url}),to:ce("to",{params:($=O==null?void 0:O.params)!=null?$:null,routeId:(y=O==null?void 0:O.route.id)!=null?y:null,url:a}),type:h};g!==void 0&&(L.delta=g);const I={...L,cancel:()=>{v=!0}};if(c.before_navigate.forEach(S=>S(I)),v){b();return}ke(U),k(),m&&z.navigating.set(L),await je(O,a,i,{scroll:u,keepfocus:p,details:l},E,()=>{c.after_navigate.forEach(S=>S(L)),z.navigating.set(null)})}async function De(a,u,p,i){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await oe({status:i,error:p,url:a,routeId:u}):await ie(a)}function ie(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Se(()=>(c.after_navigate.push(a),()=>{const u=c.after_navigate.indexOf(a);c.after_navigate.splice(u,1)}))},before_navigate:a=>{Se(()=>(c.before_navigate.push(a),()=>{const u=c.before_navigate.indexOf(a);c.before_navigate.splice(u,1)}))},disable_scroll_handling:()=>{(_||!m)&&(d=!1)},goto:(a,u={})=>x(a,u,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:u}=new URL(a,location.href);s.push(p=>p.href===u)}return ae()},invalidateAll:()=>(w=!0,ae()),prefetch:async a=>{const u=new URL(a,Fe(document));await se(u)},prefetch_routes:async a=>{const p=(a?le.filter(i=>a.some(l=>i.exec(l))):le).map(i=>Promise.all([...i.layouts,i.leaf].map(l=>l==null?void 0:l[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const u=new URL(location.href),{branch:p,route:i}=n;if(!i)return;const l=await Ue(n.branch.length,p,i.errors);if(l){const h=await ee({url:u,params:n.params,branch:p.slice(0,l.idx).concat(l.node),status:500,error:a.error,route:i});n=h.state;const g=fe();R.$set(h.props),g()}}else if(a.type==="redirect")x(a.location,{invalidateAll:!0},[]);else{const u={form:a.data,page:{...D,form:a.data,status:a.status}},p=fe();R.$set(u),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var g,E;let l=!1;const h={from:ce("from",{params:n.params,routeId:(E=(g=n.route)==null?void 0:g.id)!=null?E:null,url:n.url}),to:null,type:"unload",cancel:()=>l=!0};c.before_navigate.forEach(k=>k(h)),l?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ke(U);try{sessionStorage[We]=JSON.stringify(re)}catch{}}});const a=i=>{const{url:l,options:h}=Je(i);if(l&&h.prefetch){if(Te(l))return;se(l)}};let u;const p=i=>{clearTimeout(u),u=setTimeout(()=>{var l;(l=i.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:l,url:h,options:g}=Je(i);if(!l||!h)return;const E=l instanceof SVGAElement;if(!E&&h.protocol!==location.protocol&&!(h.protocol==="https:"||h.protocol==="http:"))return;const k=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||k.includes("external")||g.reload||(E?l.target.baseVal:l.target))return;const[b,v]=h.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){T=!0,ke(U),n.url=h,z.page.set({...D,url:h}),z.page.notify();return}we({url:h,scroll:g.noscroll?Re():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[V]===U)return;const l=i.state[V]-U;we({url:new URL(location.href),scroll:re[i.state[V]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=i.state[V]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{T&&(T=!1,history.replaceState({...history.state,[V]:++U},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&z.navigating.set(null)})},_hydrate:async({status:a,error:u,node_ids:p,params:i,routeId:l,data:h,form:g})=>{var b;f=!0;const E=new URL(location.href);let k;try{const v=p.map(async(O,L)=>{const I=h[L];return ge({loader:me[O],url:E,params:i,routeId:l,parent:async()=>{const N={};for(let P=0;P<L;P+=1)Object.assign(N,(await v[P]).data);return N},server_data_node:_e(I)})});k=await ee({url:E,params:i,branch:await Promise.all(v),status:a,error:u,form:g,route:(b=le.find(O=>O.id===l))!=null?b:null})}catch(v){if(v instanceof Me){await ie(new URL(v.location,location.href));return}k=await oe({status:v instanceof Oe?v.status:500,error:ne(v,{url:E,params:i,routeId:l}),url:E,routeId:l})}Ae(k)}}}async function He(r,e){const t=new URL(r);t.pathname=mt(r.pathname);const s=await he(t.href,{headers:{"x-sveltekit-invalidated":e.map(c=>c?"1":"").join(",")}}),o=await s.text();if(!s.ok)throw new Error(JSON.parse(o));return Kt(o)}function ne(r,e){var t;return r instanceof Oe?r.body:(t=Dt.handleError({error:r,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Mt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ce(r,e){for(const t of Mt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return e}function fe(){return()=>{}}async function Yt({env:r,hydrate:e,paths:t,target:s,trailing_slash:o}){it(t);const c=zt({target:s,base:t.base,trailing_slash:o});lt({client:c}),e?await c._hydrate(e):c.goto(location.href,{replaceState:!0}),c._start_router()}export{Yt as start};
