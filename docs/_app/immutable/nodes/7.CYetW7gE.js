import{s as z,b as A,n as E}from"../chunks/scheduler.CbmElaDS.js";import{S as B,i as D,e as d,s as k,c as _,a as I,d as v,f as w,n as M,k as x,g as N,h as c,m as q,r as G,u as y}from"../chunks/index.BC-fsmuB.js";import{e as P}from"../chunks/each.D6YF6ztN.js";import{g as O}from"../chunks/entry.DTq_-uUi.js";import{b as S}from"../chunks/paths.1CyGYOKY.js";function T(f,e,o){const n=f.slice();return n[4]=e[o].left,n[5]=e[o].top,n}function $(f){let e,o,n="Are you sure you want to proceed?",m,h,r,g,b,i,C="Yes",p,l,s;return{c(){e=d("div"),o=d("h1"),o.textContent=n,m=k(),h=d("p"),r=d("img"),b=k(),i=d("button"),i.textContent=C,p=k(),this.h()},l(a){e=_(a,"DIV",{class:!0,style:!0});var t=I(e);o=_(t,"H1",{"data-svelte-h":!0}),M(o)!=="svelte-1ddop9t"&&(o.textContent=n),m=w(t),h=_(t,"P",{});var u=I(h);r=_(u,"IMG",{src:!0}),u.forEach(v),b=w(t),i=_(t,"BUTTON",{class:!0,"data-svelte-h":!0}),M(i)!=="svelte-32bmz3"&&(i.textContent=C),p=w(t),t.forEach(v),this.h()},h(){A(r.src,g=Y)||x(r,"src",g),x(i,"class","svelte-cbhwmf"),x(e,"class","popup svelte-cbhwmf"),y(e,"left",f[4]+"%"),y(e,"top",f[5]+"%")},m(a,t){N(a,e,t),c(e,o),c(e,m),c(e,h),c(h,r),c(e,b),c(e,i),c(e,p),l||(s=q(i,"click",f[1]),l=!0)},p(a,t){t&1&&y(e,"left",a[4]+"%"),t&1&&y(e,"top",a[5]+"%")},d(a){a&&v(e),l=!1,s()}}}function U(f){let e,o,n,m,h,r,g="Click here for free robux!",b,i,C,p=P(f[0]),l=[];for(let s=0;s<p.length;s+=1)l[s]=$(T(f,p,s));return{c(){e=d("main"),o=d("p"),n=d("img"),h=k(),r=d("button"),r.textContent=g,b=k();for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=_(s,"MAIN",{class:!0});var a=I(e);o=_(a,"P",{});var t=I(o);n=_(t,"IMG",{src:!0}),t.forEach(v),h=w(a),r=_(a,"BUTTON",{class:!0,"data-svelte-h":!0}),M(r)!=="svelte-z3wvfa"&&(r.textContent=g),b=w(a);for(let u=0;u<l.length;u+=1)l[u].l(a);a.forEach(v),this.h()},h(){A(n.src,m=j)||x(n,"src",m),x(r,"class","svelte-cbhwmf"),x(e,"class","svelte-cbhwmf")},m(s,a){N(s,e,a),c(e,o),c(o,n),c(e,h),c(e,r),c(e,b);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,null);i||(C=q(r,"click",f[1]),i=!0)},p(s,[a]){if(a&3){p=P(s[0]);let t;for(t=0;t<p.length;t+=1){const u=T(s,p,t);l[t]?l[t].p(u,a):(l[t]=$(u),l[t].c(),l[t].m(e,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=p.length}},i:E,o:E,d(s){s&&v(e),G(l,s),i=!1,C()}}}let Y="https://i.pinimg.com/736x/43/20/3f/43203f05e45f4182417c7303da2e1964.jpg",j="https://tr.rbxcdn.com/180DAY-c76194bbfb4c7e2ebe4fd315ebb14a4a/768/432/Image/Webp/noFilter";function F(f,e,o){let n=[],m=0;function h(){m++;let r=Math.random()*90,g=Math.random()*90;n.push({left:r,top:g}),o(0,n),m==10&&O(S+"/email")}return[n,h]}class L extends B{constructor(e){super(),D(this,e,F,U,z,{})}}export{L as component};
