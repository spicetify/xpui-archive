"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7776],{53720:(e,a,s)=>{s.r(a),s.d(a,{default:()=>K});s(41260);var i=s(10124),n=s.n(i),t=s(12100),r=s(3088),l=s(43168),u=s(25800),c=s(73108),o=s(48028),d=s(43619),g=s(88168),m=s(2488);function x(e,a){switch(e.type){case d.s.ALBUM:return(0,m.jsx)(r.Q,{uri:e.uri,name:e.name,images:e.images,sharingInfo:null,artists:e.artists,index:a},e.uri);case d.s.ARTIST:return(0,m.jsx)(l.M,{uri:e.uri,name:e.name,images:e.images,index:a},e.uri);case d.s.SHOW:return(0,m.jsx)(o.E,{uri:e.uri,name:e.name,images:e.images,publisher:e.publisher,sharingInfo:null,mediaType:g.v.UNKNOWN,index:a},e.uri);case d.s.AUDIOBOOK:return(0,m.jsx)(u.M,{uri:e.uri,name:e.name,images:e.images,authorName:e.authorName,index:a},e.uri);case d.s.PLAYLIST:return(0,m.jsx)(c.I,{uri:e.uri,name:e.name,images:e.images,description:"",authorName:e.creatorName,index:a},e.uri);default:return null}}var f=s(29384),h=s(96651),p=s(18648),y=s(72312),j=s(92236),b=s(31396),w=s(60016),v=s(33876),S=s(99096),C=s(48348),I=s(35132),N=s(52588),k=s(94192),_=s(36332),A=s(38484);const L=function({uri:e,name:a,images:s,index:i}){const n=(0,S.A)(),r=(0,h.useRef)(null),l=(0,h.useRef)(!0),u=(0,h.useContext)(C.E),{isPlaying:c}=(0,k.kP)(v.d),{togglePlay:o}=(0,N.I)({uri:v.d,pages:[{items:r.current?.map((e=>({...e,provider:null})))||[]}]},{featureIdentifier:"local_files"});(0,h.useEffect)((()=>(l.current=!0,()=>{l.current=!1})),[]);const d=(0,I.C)(),g=(0,p.yK)((async(e,a)=>{if(!r.current){const e=await u.getTracks();r.current=e}l&&o({loggingParams:a},{uri:v.d,pages:[{items:r.current?.map((e=>({...e,provider:null})))||[]}]})}),w.cT,{leading:!0,trailing:!1});return n.canFetchAllTracks&&d?(0,m.jsx)(y.M,{index:i,delegatePlayback:!0,delegateLogging:!0,isPlaying:c,onPlay:g,headerText:a,featureIdentifier:"local_files",uri:e,renderCardImage:()=>(0,m.jsx)(j.y,{images:s,FallbackComponent:_.u}),renderSubHeaderContent:()=>(0,m.jsx)(A.C,{children:t._s.get("local-files.description")})}):null},P=({index:e})=>{const a=(0,b.qw)();return(0,m.jsx)(h.Suspense,{fallback:null,children:(0,m.jsx)(L,{index:e,name:a.name,uri:a.uri,images:a.images})})};var T=s(88600),E=s(8004);const O="ctcxxigybw6qGQde916g",B="QGlY4v4eRdOcBHgHljcF",F="LFYYI0yKpFvSeNhBWRw4",M=()=>(0,m.jsxs)("div",{className:B,children:[(0,m.jsx)(T.s,{size:"xxlarge",className:F}),(0,m.jsx)(E.a,{as:"h1",variant:"titleLarge",semanticColor:"textBase",dir:"auto",children:t._s.get("web-player.offline.empty-state.title")}),(0,m.jsx)(E.a,{as:"h2",variant:"bodyMedium",semanticColor:"textSubdued",dir:"auto",children:t._s.get("web-player.offline.empty-state.subtitle")})]});var R=s(81604),H=s(808);const K=function(){const{hasError:e,items:a}=function(){const e=(0,H.o)(),[a,s]=(0,h.useState)(!0),[i,n]=(0,h.useState)(!1),[t,r]=(0,h.useState)([]);return(0,h.useEffect)((()=>{(async()=>{try{const a=await e.getDownloads();r(a)}catch(e){n(!0)}finally{s(!1)}})()}),[e]),{isLoading:a,hasError:i,items:t}}(),s=(0,I.C)();return e?null:(0,m.jsx)("div",{className:n()(O,"contentSpacing"),children:a.length>0||s?(0,m.jsxs)(R.oL,{value:"headered-grid",children:[(0,m.jsx)(f.y,{title:t._s.get("music_downloads"),total:a.length,seeAllUri:"/collection/music-downloads",alwaysShowSeeAll:!0,children:a.map(((e,a)=>(0,m.jsx)(R.oL,{value:"card",index:a,children:x(e,a)},e.uri)))}),s&&(0,m.jsx)(f.y,{title:t._s.get("local-files"),total:1,showAll:!0,children:(0,m.jsx)(P,{index:0})})]}):(0,m.jsx)(M,{})})}}}]);
//# sourceMappingURL=xpui-routes-offline-browse.js.map