"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1869],{20703:(t,e,l)=>{l.d(e,{Q:()=>u});var i=l(59496),n=l(63527),r=l(51005),a=l(93017),s=l(91608),o=l(61372),c=l(4637);const u=({uri:t,title:e,clickUrl:l,onClick:u,variant:d,semanticColor:f})=>{const k=(0,i.useMemo)((()=>(0,a.EC)(l)?.toURLPath(!0)),[l]);let v;return k?v=(0,c.jsx)(s.default,{to:k,dir:"auto","data-testid":"context-ad-uri-link",children:e}):l&&(v=(0,c.jsx)(n.h,{href:l,"data-testid":"context-ad-link",onClick:u,semanticColor:f,standalone:!0,dir:"auto",children:e})),(0,c.jsx)(o.R,{title:e,children:(0,c.jsx)(r.D,{as:"p",variant:d,semanticColor:f,dir:"auto",children:v||e})},t)}},31869:(t,e,l)=>{l.r(e),l.d(e,{ContextAdTitle:()=>o,default:()=>c});var i=l(55411),n=l(20703),r=l(46961),a=l(89778),s=l(4637);const o=({item:t,surface:e,variant:l="canon",semanticColor:o="textBase"})=>{const c=(0,i.I0)(),{title:u,url:d}=(0,r.B)(t);return u?(0,s.jsx)(n.Q,{title:u,variant:l,semanticColor:o,uri:t.uri,clickUrl:d,onClick:()=>{c((0,a.nX)(`advertiser_title_${e}`))}}):null},c=o},46961:(t,e,l)=>{l.d(e,{B:()=>a});var i=l(55411),n=l(99302),r=l(52767);function a(t){const e=(0,i.v9)((t=>t.ads?.vto?.info??null)),l=(0,i.v9)((t=>t.ads?.audio?.info??null)),{advertiser:a,url:s,title:o}=t,c=a||null,u=n.ag.get("ad-formats.advertisement");if((0,r.jg)(t)){const t=u;return{title:(0,r.OE)(o,e?.advertiser,l?.buttonMessage)??c,subtitle:t,url:(0,r.gn)(e?.clickUrl,l?.clickUrl,s)}}return(0,r.Hk)(t)?{title:e?.advertiser??c,subtitle:u,url:(0,r.gn)(e?.clickUrl,s)}:{title:c,subtitle:u,url:(0,r.gn)(l?.clickUrl,s)}}}}]);
//# sourceMappingURL=1869.js.map