import{n as u,s as h}from"./scheduler.D-KrruXr.js";const n=[];function m(t,o){return{subscribe:p(t,o).subscribe}}function p(t,o=u){let i;const r=new Set;function b(e){if(h(t,e)&&(t=e,i)){const c=!n.length;for(const s of r)s[1](),n.push(s,t);if(c){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function a(e){b(e(t))}function _(e,c=u){const s=[e,c];return r.add(s),r.size===1&&(i=o(b,a)||u),e(t),()=>{r.delete(s),r.size===0&&i&&(i(),i=null)}}return{set:b,update:a,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_1mw2ty0)==null?void 0:f.base)??"";var l;const w=((l=globalThis.__sveltekit_1mw2ty0)==null?void 0:l.assets)??d;export{w as a,d as b,m as r,p as w};
