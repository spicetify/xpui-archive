"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[708],{66376:(e,i,t)=>{t.d(i,{n:()=>A});var s=t(59496),r=t(84875),n=t.n(r),a=t(46439),l=t(31959),c=t(26293),d=t(31294),o=t(1740),u=t(27002),m=t(25597),x=t(46217);var h=t(20156),p=t(97373),j=t(71280),g=t(22946);const y="BkpKedcdaMGbvgXMlmcg",f="muYk5XIwKmqR9iNibk_f",v="OEFWODerafYHGp09iLlA",k="m20ShRDiGGDpJ5LSABTi",b="Hvv0e7WKQ4kyftgSQJhg",E="yxf_6IsQEmHjijEBUMTP",C="oaNVBli46GtVjaQKB15g",w="JdlKTdpMquftpMwwegZo",N="Nts_ArOCGeROTDZND3M6",R="FvDsfgxSvLvL3q8d7nQv";var T=t(4637);const U=({items:e,activeItemId:i})=>(0,T.jsx)(j.v,{children:e.map((e=>e.disabled?(0,T.jsx)(g.s,{disabled:!0,role:"menuitemradio",className:E,onClick:e.handleClick,children:e.title},e.uri):(0,T.jsx)(g.s,{role:"menuitemradio",to:e.to,end:!0,"aria-checked":e.itemId===i,className:({isActive:e})=>n()(E,{[C]:e}),onClick:e.handleClick,children:e.title},e.uri)))}),A=(0,s.memo)((function({isCentered:e,links:i,landmarkLabel:t,className:r}){const j=(0,s.useRef)(null),[g,E]=(0,s.useState)([]),[A,I]=(0,s.useState)(0),[S,O]=(0,s.useState)([]),D=function(){const[e,i]=(0,s.useState)(window.innerWidth),{scrollNodeChildRef:t}=(0,s.useContext)(m.VX),r=(0,u.y1)((e=>{e?.width&&i(e.width)}),250);return(0,x.y)({refOrElement:t,observeOnly:"width",onResize:r}),e}()??1/0,{pathname:M}=(0,a.TH)(),P=i.find((e=>e.to===M));return(0,s.useEffect)((()=>{j.current&&I(j.current.clientWidth)}),[D]),(0,s.useEffect)((()=>{if(!j.current)return;const e=Array.from(j.current.children).map((e=>e.clientWidth));E(e)}),[i]),(0,s.useEffect)((()=>{if(!j.current)return;if(g.slice(0,-1).reduce(((e,i)=>e+i),0)<=A)return void O([]);const e=g.reduce(((e,i)=>e>i?e:i),0),i=[];let t=e;g.forEach(((e,s)=>{A>=t+e?t+=e:i.push(s)})),O(i)}),[A,g]),(0,T.jsx)("nav",{className:n()(r,y),"aria-label":t,children:(0,T.jsxs)("ul",{className:e?f:N,ref:j,children:[i.filter(((e,i)=>!S.includes(i))).map((e=>{const i=e?.render??(e=>e);return(0,T.jsx)(s.Fragment,{children:i((0,T.jsx)("li",{className:v,children:e.disabled?(0,T.jsx)("div",{className:w,children:(0,T.jsx)(l.D,{variant:"mestoBold",children:e.title})}):(0,T.jsx)(p.O,{end:!0,className:({isActive:e})=>n()(w,{[C]:e}),to:e.to,onClick:e.handleClick,children:(0,T.jsx)(l.D,{variant:"mestoBold",children:e.title})})}))},e.to)})),S.length||0===g.length?(0,T.jsx)("li",{className:v,children:(0,T.jsx)(h.xV,{renderInline:!0,menu:(0,T.jsx)(U,{items:i.filter(((e,i)=>S.includes(i))),activeItemId:P?.itemId}),children:(e,i,t)=>(0,T.jsxs)("button",{className:n()(k,{[b]:P}),type:"button",onClick:i,ref:t,children:[(0,T.jsx)(l.D,{variant:"mestoBold",children:P?P.title:o.ag.get("more")}),e?(0,T.jsx)(c.U,{iconSize:16,className:R,"aria-hidden":"true"}):(0,T.jsx)(d.i,{iconSize:16,className:R,"aria-hidden":"true"})]})})}):null]})})}))},83888:(e,i,t)=>{t.d(i,{I:()=>x});var s=t(307),r=t(59496),n=t(1740),a=t(66376),l=t(23348),c=t(26532),d=t(44113);const o="vhW0kRN8JJD5UwW4TdXi";var u=t(4637);const m=()=>{const e=(0,d.Y)(),i=(0,r.useCallback)((e=>(0,u.jsx)(c.v,{placement:"bottomEnd",arrow:"topStart",title:n.ag.get("pick-and-shuffle.upsell.title.queue"),children:e})),[]),t=(0,r.useMemo)((()=>[{title:n.ag.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue",render:i,disabled:e},{title:n.ag.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]),[e,i]);return(0,u.jsx)(l.w,{children:(0,u.jsx)(a.n,{className:o,links:t})})},x=({children:e})=>{const i=(0,s.nF)();return(0,u.jsxs)("section",{className:"contentSpacing",children:[e,i&&(0,u.jsx)(m,{})]})}},47107:(e,i,t)=>{t.r(i),t.d(i,{default:()=>Z});var s=t(307),r=t(37835),n=t(31959),a=t(1740),l=t(62311),c=t(27273),d=t(4637);const o=()=>(0,d.jsxs)("div",{className:c.Z.emptyContainer,children:[(0,d.jsx)(l.Y,{iconSize:64,"aria-hidden":"true"}),(0,d.jsx)(n.D,{as:"h1",variant:"alto",semanticColor:"textBase",className:c.Z.emptyContainerTitle,children:a.ag.get("history.empty-title")}),(0,d.jsx)("p",{children:a.ag.get("history.empty-description")})]});var u=t(59496),m=t(67779),x=t(9586),h=t(46997),p=t(29272),j=t(40239),g=t(8527),y=t(16976),f=t(88585),v=t.n(f),k=t(84848),b=t(96383),E=t(2220),C=t(62652),w=t(99975),N=t(25431),R=t(98340),T=t(12883),U=t(24771),A=t(7678),I=t(97068),S=t(73305),O=t(6090),D=t(32791),M=t(34309);const P=u.memo((function({uri:e,name:i,duration_ms:t,index:s,imgUrl:r,artists:n,album:l,isExplicit:c,isMOGEFRestricted:o,type:u}){const{isActive:m,isPlaying:x,triggerPlay:p,togglePlay:g}=(0,S.n)({uri:e},{featureIdentifier:"history"}),y=u===j.p.TRACK,f=u===j.p.EPISODE,P=u===j.p.CHAPTER,_=(0,I._)(e),B=(0,M.k)(e),{badges:G,hasBadges:L}=(0,O.r)({downloadAvailability:_,isExplicit:c,isMOGEFRestricted:o}),F=n?.map((e=>e.name)).join(a.ag.getSeparator())||"";let Z;return f?Z=(0,d.jsx)(k.k,{uri:e,contextUri:e,showUri:l.uri}):P?Z=(0,d.jsx)(D.r,{uri:e,contextUri:e,showUri:l.uri}):y&&v().isLocalTrack(e)?Z=(0,d.jsx)(b.N,{uri:e,contextUri:e}):y&&(Z=(0,d.jsx)(E.$,{uri:e,contextUri:e,albumUri:l.uri,artists:n})),(0,d.jsx)(h.ZP,{value:"row",index:s,children:(0,d.jsx)(R._,{menu:Z,children:(0,d.jsxs)(N.c,{uri:e,contextUri:e,index:s,ariaRowIndex:s,onTriggerPlay:()=>{p()},isActive:m,isPlayable:B,ageRestricted:o,dragMetadata:{name:i,createdBy:F},children:[(0,d.jsxs)(C.vZ,{ariaColIndex:0,children:[(0,d.jsx)(C.VG,{uri:e,src:r,isPlaying:x,isActive:m,isLocked:!1,onClick:()=>{g()},isEpisode:v().isEpisode(e),playAriaLabel:a.ag.get("tracklist.a11y.play",i,F)}),(0,d.jsxs)(C.vm,{children:[(0,d.jsx)(C.Wh,{titleText:i,children:i}),L&&(0,d.jsxs)(C.g3,{children:[G.download&&(0,d.jsx)(T.G,{size:16}),G.explicit&&(0,d.jsx)(U.N,{}),G.nineteen&&(0,d.jsx)(A.X,{className:w.Z.nineteen,size:16})]}),(0,d.jsx)(C.K9,{children:v().isTrack(e)?(0,d.jsx)(C.T6,{artists:n}):n[0]?.name??""})]})]}),(0,d.jsx)(C.UA,{ariaColIndex:2,children:(0,d.jsx)(C.BM,{nonInteractive:v().isLocalTrack(e),uri:l.uri,name:l.name,creatorUri:n?.[0]?.uri,children:l.name})}),(0,d.jsxs)(C.mU,{ariaColIndex:1,children:[!v().isLocalTrack(e)&&!P&&(0,d.jsx)(C.qS,{uri:e,type:u}),(0,d.jsx)(C.A$,{duration:t}),(0,d.jsx)(C.Zv,{menu:Z,label:a.ag.get("more.label.track",i,F)})]})]})})})}),((e,i)=>e.uri===i.uri)),_=u.memo((function({items:e}){const i=(0,u.useCallback)(((e,i)=>{const t=(0,y.X)(e.images??[],{desiredSize:40});return(0,p.G_)(e)?e.isLocal?(0,d.jsx)(P,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.album,artists:e.artists,isExplicit:e.isExplicit??!1,isMOGEFRestricted:e.is19PlusOnly??!1,type:j.p.TRACK},i+e.uri):(0,d.jsx)(P,{index:i,uri:(0,x.$)(e),name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.album,artists:e.artists,isExplicit:e.isExplicit??!1,isMOGEFRestricted:e.is19PlusOnly??!1,type:j.p.TRACK},i+e.uri):(0,p.iw)(e)?(0,d.jsx)(P,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.show,artists:[],isExplicit:!1,isMOGEFRestricted:!1,type:j.p.EPISODE},i+e.uri):(0,p.G7)(e)?(0,d.jsx)(P,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.book,artists:[],isExplicit:!1,isMOGEFRestricted:!1,type:j.p.CHAPTER},i+e.uri):((0,p.k6)(e)||(0,p.RB)(e)||(0,g._)(e),(0,d.jsx)(m.hU,{height:`${m.dN}px`}))}),[]),t=(0,u.useMemo)((()=>[m.QD.TITLE,m.QD.ALBUM_OR_PODCAST,m.QD.DURATION]),[]),s=(0,u.useCallback)((e=>e.uri),[]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(h.ZP,{value:"play-history-tracklist",children:(0,d.jsx)(m.Pv,{ariaLabel:"play-history",hasHeaderRow:!0,columns:t,renderRow:i,resolveUri:s,tracks:e,nrTracks:e.length,rowPlaceholder:m.hU,limit:50})})})})),B="dt3fysZYdQ6hhWfpmjAu",G="n6LsTkKvpO88xeRyRTdw",L=()=>{const e=(0,s.U5)();return e&&e.items.length>0?(0,d.jsxs)("div",{className:B,children:[(0,d.jsx)(n.D,{as:"h1",variant:"canon",semanticColor:"textBase",className:G,children:a.ag.get("view.recently-played")}),(0,d.jsx)(_,{items:e.items})]}):(0,d.jsx)(o,{})};var F=t(83888);const Z=()=>(0,s.nF)()?(0,d.jsx)(F.I,{children:(0,d.jsx)(L,{})}):(0,d.jsx)(r.InstrumentedRedirect,{to:"/"})},9586:(e,i,t)=>{t.d(i,{$:()=>s});const s=e=>e?.linked_from?.uri||e.uri},27273:(e,i,t)=>{t.d(i,{Z:()=>s});const s={emptyContainer:"gTvMl6pwfRD9PobMSB5x",emptyContainerTitle:"hNAQG0TAe2WFYyf_iZEB",findSomething:"Zhzrb2k9nQRActS2lp4U"}}}]);
//# sourceMappingURL=xpui-routes-play-history-page.js.map