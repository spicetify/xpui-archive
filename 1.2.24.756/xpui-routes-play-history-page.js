"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[708],{97284:(e,i,t)=>{t.d(i,{n:()=>T});var s=t(59496),r=t(84875),n=t.n(r),a=t(52529),l=t(89518),c=t(71817),d=t(2157),o=t(50834),u=t(85830),m=t(17956),x=t(3099);var h=t(44858),j=t(11945),p=t(68725);const g="BkpKedcdaMGbvgXMlmcg",v="muYk5XIwKmqR9iNibk_f",y="OEFWODerafYHGp09iLlA",f="m20ShRDiGGDpJ5LSABTi",k="Hvv0e7WKQ4kyftgSQJhg",b="yxf_6IsQEmHjijEBUMTP",N="oaNVBli46GtVjaQKB15g",w="JdlKTdpMquftpMwwegZo",C="Nts_ArOCGeROTDZND3M6",I="FvDsfgxSvLvL3q8d7nQv";var E=t(4637);const R=({items:e,activeItemId:i})=>(0,E.jsx)(j.v,{children:e.map((e=>e.disabled?(0,E.jsx)(p.s,{disabled:!0,role:"menuitemradio",className:b,onClick:e.handleClick,children:e.title},e.uri):(0,E.jsx)(p.s,{role:"menuitemradio",to:e.to,end:!0,"aria-checked":e.itemId===i,className:({isActive:e})=>n()(b,{[N]:e}),onClick:e.handleClick,children:e.title},e.uri)))});var A=t(93971);const T=(0,s.memo)((function({isCentered:e,links:i,landmarkLabel:t,className:r}){const j=(0,s.useRef)(null),[p,b]=(0,s.useState)([]),[T,U]=(0,s.useState)(0),[D,O]=(0,s.useState)([]),S=function(){const[e,i]=(0,s.useState)(window.innerWidth),{scrollNodeChildRef:t}=(0,s.useContext)(m.VX),r=(0,u.y1)((e=>{e?.width&&i(e.width)}),250);return(0,x.y)({refOrElement:t,observeOnly:"width",onResize:r}),e}()??1/0,{pathname:B}=(0,a.TH)(),_=i.find((e=>e.to===B));return(0,s.useEffect)((()=>{j.current&&U(j.current.clientWidth)}),[S]),(0,s.useEffect)((()=>{if(!j.current)return;const e=Array.from(j.current.children).map((e=>e.clientWidth));b(e)}),[i]),(0,s.useEffect)((()=>{if(!j.current)return;if(p.slice(0,-1).reduce(((e,i)=>e+i),0)<=T)return void O([]);const e=p.reduce(((e,i)=>e>i?e:i),0),i=[];let t=e;p.forEach(((e,s)=>{T>=t+e?t+=e:i.push(s)})),O(i)}),[T,p]),(0,E.jsx)("nav",{className:n()(r,g),"aria-label":t,children:(0,E.jsxs)("ul",{className:e?v:C,ref:j,children:[i.filter(((e,i)=>!D.includes(i))).map((e=>{const i=e?.render??(e=>e);return(0,E.jsx)(s.Fragment,{children:i((0,E.jsx)("li",{className:y,children:e.disabled?(0,E.jsx)("div",{className:w,children:(0,E.jsx)(l.D,{variant:"mestoBold",children:e.title})}):(0,E.jsx)(A.O,{end:!0,className:({isActive:e})=>n()(w,{[N]:e}),to:e.to,onClick:e.handleClick,children:(0,E.jsx)(l.D,{variant:"mestoBold",children:e.title})})}))},e.to)})),D.length||0===p.length?(0,E.jsx)("li",{className:y,children:(0,E.jsx)(h.xV,{renderInline:!0,menu:(0,E.jsx)(R,{items:i.filter(((e,i)=>D.includes(i))),activeItemId:_?.itemId}),children:(e,i,t)=>(0,E.jsxs)("button",{className:n()(f,{[k]:_}),type:"button",onClick:i,ref:t,children:[(0,E.jsx)(l.D,{variant:"mestoBold",children:_?_.title:o.ag.get("more")}),e?(0,E.jsx)(c.U,{iconSize:16,className:I,"aria-hidden":"true"}):(0,E.jsx)(d.i,{iconSize:16,className:I,"aria-hidden":"true"})]})})}):null]})})}))},58086:(e,i,t)=>{t.d(i,{I:()=>x});var s=t(72373),r=t(59496),n=t(50834),a=t(97284),l=t(92263),c=t(24823),d=t(29104);const o="vhW0kRN8JJD5UwW4TdXi";var u=t(4637);const m=()=>{const e=(0,d.Y)(),i=(0,r.useCallback)((e=>(0,u.jsx)(c.v,{placement:"bottomEnd",arrow:"topStart",title:n.ag.get("pick-and-shuffle.upsell.title.queue"),children:e})),[]),t=(0,r.useMemo)((()=>[{title:n.ag.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue",render:i,disabled:e},{title:n.ag.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]),[e,i]);return(0,u.jsx)(l.w,{children:(0,u.jsx)(a.n,{className:o,links:t})})},x=({children:e})=>{const i=(0,s.nF)();return(0,u.jsxs)("section",{className:"contentSpacing",children:[e,i&&(0,u.jsx)(m,{})]})}},15592:(e,i,t)=>{t.r(i),t.d(i,{default:()=>K});var s=t(72373),r=t(89518),n=t(50834),a=t(22510),l=t(82788),c=t(4637);const d=()=>(0,c.jsxs)("div",{className:l.Z.emptyContainer,children:[(0,c.jsx)(a.Y,{iconSize:64,"aria-hidden":"true"}),(0,c.jsx)(r.D,{as:"h1",variant:"alto",semanticColor:"textBase",className:l.Z.emptyContainerTitle,children:n.ag.get("history.empty-title")}),(0,c.jsx)("p",{children:n.ag.get("history.empty-description")})]});var o=t(59496),u=t(70613),m=t(33836),x=t(35992),h=t(79445),j=t(7431),p=t(9154),g=t(27147),v=t(36820),y=t(10530),f=t(48359),k=t(11565),b=t(82344),N=t(58681),w=t(2182),C=t(16263),I=t(32597),E=t(4477),R=t(45434),A=t(6227),T=t(71308),U=t(45032),D=t(684),O=t(90426),S=t(39019);const B=o.memo((function({uri:e,name:i,duration_ms:t,index:s,imgUrl:r,artists:a,album:l,isExplicit:d,isMOGEFRestricted:o,contextItem:u,type:m}){const{isActive:h,isPlaying:p,triggerPlay:g,togglePlay:B}=(0,T.n)({uri:e,pages:[{items:[{...u}]}]},{featureIdentifier:"history"}),_=m===j.p.TRACK,M=m===j.p.EPISODE,G=m===j.p.CHAPTER,L=(0,A._)(e),P=(0,O.k)(e),{badges:F,hasBadges:K}=(0,U.r)({downloadAvailability:L,isExplicit:d,isMOGEFRestricted:o}),Q=a?.map((e=>e.name)).join(n.ag.getSeparator())||"";let W;return M?W=(0,c.jsx)(y.k,{uri:e,contextUri:e,showUri:l.uri}):G?W=(0,c.jsx)(D.r,{uri:e}):_&&(0,v.dB)(e)?W=(0,c.jsx)(f.N,{uri:e,contextUri:e}):_&&(W=(0,c.jsx)(k.$,{uri:e,contextUri:e,albumUri:l.uri,artists:a})),(0,c.jsx)(x.JL,{value:"row",index:s,children:(0,c.jsx)(C._,{menu:W,children:(0,c.jsxs)(w.c,{uri:e,contextUri:e,index:s,ariaRowIndex:s,onTriggerPlay:()=>{g()},isActive:h,isPlayable:P,ageRestricted:o,dragMetadata:{name:i,createdBy:Q},children:[(0,c.jsxs)(b.vZ,{ariaColIndex:0,children:[(0,c.jsx)(b.VG,{uri:e,src:r,isPlaying:p,isActive:h,isLocked:!1,onClick:()=>{B()},isEpisode:(0,v.hn)(e),playAriaLabel:n.ag.get("tracklist.a11y.play",i,Q)}),(0,c.jsxs)(b.vm,{children:[(0,c.jsx)(b.Wh,{titleText:i,children:i}),K&&(0,c.jsxs)(b.g3,{children:[F.download&&(0,c.jsx)(I.G,{}),F.explicit&&(0,c.jsx)(E.N,{}),F.nineteen&&(0,c.jsx)(R.X,{className:N.Z.nineteen,size:16})]}),(0,c.jsx)(b.K9,{children:(0,v.wj)(e)?(0,c.jsx)(b.T6,{artists:a}):a[0]?.name??""})]})]}),(0,c.jsx)(b.UA,{ariaColIndex:2,children:(0,c.jsx)(b.BM,{nonInteractive:(0,v.dB)(e),uri:l.uri,name:l.name,creatorUri:a?.[0]?.uri,children:l.name})}),(0,c.jsxs)(b.mU,{ariaColIndex:1,children:[!(0,v.dB)(e)&&!G&&(0,c.jsx)(S.f,{uri:e,type:m}),(0,c.jsx)(b.A$,{duration:t}),(0,c.jsx)(b.Zv,{menu:W,label:n.ag.get("more.label.track",i,Q)})]})]})})})}),((e,i)=>e.uri===i.uri)),_=o.memo((function({items:e}){const i=(0,o.useCallback)(((e,i)=>{const t=(0,g.X)(e.images??[],{desiredSize:40});return(0,h.G_)(e)?(0,c.jsx)(B,{index:i,uri:e.isLocal?e.uri:(0,m.$)(e),name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.album,artists:e.artists,isExplicit:e.isExplicit??!1,isMOGEFRestricted:e.is19PlusOnly??!1,contextItem:e,type:j.p.TRACK},i+e.uri):(0,h.iw)(e)?(0,c.jsx)(B,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.show,artists:[],isExplicit:!1,isMOGEFRestricted:!1,contextItem:e,type:j.p.EPISODE},i+e.uri):(0,h.G7)(e)?(0,c.jsx)(B,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.book,artists:[],isExplicit:!1,isMOGEFRestricted:!1,contextItem:e,type:j.p.CHAPTER},i+e.uri):((0,h.k6)(e)||(0,h.RB)(e)||(0,p._)(e),(0,c.jsx)(u.hU,{height:`${u.dN}px`}))}),[]),t=(0,o.useMemo)((()=>[u.QD.TITLE_AND_ARTIST,u.QD.ALBUM_OR_PODCAST,u.QD.DURATION]),[]),s=(0,o.useCallback)((e=>e.uri),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(x.JL,{value:"play-history-tracklist",children:(0,c.jsx)(u.Pv,{ariaLabel:"play-history",hasHeaderRow:!0,columns:t,renderRow:i,resolveUri:s,tracks:e,nrTracks:e.length,rowPlaceholder:u.hU,limit:50})})})})),M="dt3fysZYdQ6hhWfpmjAu",G="n6LsTkKvpO88xeRyRTdw",L=()=>{const{isLoading:e,data:i}=(0,s.U5)();return e?null:i?.items.length?(0,c.jsxs)("div",{className:M,children:[(0,c.jsx)(r.D,{as:"h1",variant:"canon",semanticColor:"textBase",className:G,children:n.ag.get("view.recently-played")}),(0,c.jsx)(_,{items:i.items})]}):(0,c.jsx)(d,{})};var P=t(58086),F=t(13511);const K=()=>(0,s.nF)()?(0,c.jsx)(P.I,{children:(0,c.jsx)(L,{})}):(0,c.jsx)(F.InstrumentedRedirect,{to:"/"})}}]);
//# sourceMappingURL=xpui-routes-play-history-page.js.map