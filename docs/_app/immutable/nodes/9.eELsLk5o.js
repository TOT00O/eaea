import{s as E,n as d}from"../chunks/scheduler.Bi7YqDBU.js";import{S as j,i as N,e as m,s as k,c as f,f as I,a as v,d as o,k as h,u as _,g as u,r as P,t as S,b as $,h as p}from"../chunks/index.XRzOYs84.js";import{e as b}from"../chunks/each.D6YF6ztN.js";function x(c,t,n){const i=c.slice();return i[1]=t[n],i}function y(c){let t,n,i=c[1]+"",r,a;return{c(){t=m("div"),n=m("li"),r=S(i),a=k(),this.h()},l(e){t=f(e,"DIV",{class:!0});var s=v(t);n=f(s,"LI",{});var l=v(n);r=$(l,i),l.forEach(o),a=I(s),s.forEach(o),this.h()},h(){h(t,"class","lala svelte-1btajub")},m(e,s){u(e,t,s),p(t,n),p(n,r),p(t,a)},p:d,d(e){e&&o(t)}}}function q(c){let t,n,i,r=b(c[0]),a=[];for(let e=0;e<r.length;e+=1)a[e]=y(x(c,r,e));return{c(){t=m("input"),n=k(),i=m("main");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=f(e,"INPUT",{type:!0,max:!0,min:!0,style:!0}),n=I(e),i=f(e,"MAIN",{class:!0});var s=v(i);for(let l=0;l<a.length;l+=1)a[l].l(s);s.forEach(o),this.h()},h(){h(t,"type","number"),h(t,"max","7"),h(t,"min","0"),_(t,"width","50px"),_(t,"height","30px"),_(t,"color","black"),h(i,"class","svelte-1btajub")},m(e,s){u(e,t,s),u(e,n,s),u(e,i,s);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(i,null)},p(e,[s]){if(s&1){r=b(e[0]);let l;for(l=0;l<r.length;l+=1){const g=x(e,r,l);a[l]?a[l].p(g,s):(a[l]=y(g),a[l].c(),a[l].m(i,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=r.length}},i:d,o:d,d(e){e&&(o(t),o(n),o(i)),P(a,e)}}}function w(c){return[[0,1,2,3,4,5,6]]}class L extends j{constructor(t){super(),N(this,t,w,q,E,{})}}export{L as component};
