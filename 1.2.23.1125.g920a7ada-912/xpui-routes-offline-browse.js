"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1997],{67027:(e,a,i)=>{i.d(a,{z:()=>d});var n=i(73313),r=i(70650),s=i(89491),t=i(74847),l=i(55954),u=i(63617),c=i(15994),o=i(4637);function d(e,a){switch(e.type){case u.p.ALBUM:return(0,o.jsx)(n.r,{uri:e.uri,name:e.name,images:e.images,sharingInfo:null,artists:e.artists,index:a},e.uri);case u.p.ARTIST:return(0,o.jsx)(r.I,{uri:e.uri,name:e.name,images:e.images,index:a},e.uri);case u.p.SHOW:return(0,o.jsx)(l._,{uri:e.uri,name:e.name,images:e.images,publisher:e.publisher,sharingInfo:null,mediaType:c.E.UNKNOWN,index:a},e.uri);case u.p.AUDIOBOOK:return(0,o.jsx)(s.c,{uri:e.uri,name:e.name,images:e.images,authorName:e.authorName,index:a},e.uri);case u.p.PLAYLIST:return(0,o.jsx)(t.Z,{uri:e.uri,name:e.name,images:e.images,description:"",authorName:e.creatorName,index:a},e.uri);default:return null}}},19023:(e,a,i)=>{i.d(a,{P:()=>y});var n=i(59496),r=i(85830),s=i(86961),t=i(58327),l=i(90507),u=i(90519),c=i(72864),o=i(86822),d=i(95949),g=i(78991),m=i(98824),x=i(95755),f=i(45864),h=i(59091),p=i(55269),b=i(4637);const j=function({uri:e,name:a,images:i,index:u}){const j=(0,d.u)(),y=(0,n.useRef)(null),w=(0,n.useRef)(!0),v=(0,n.useContext)(g.t),{isPlaying:S}=(0,f.cR)(o.b),{togglePlay:I}=(0,x.n)({uri:o.b,pages:[{items:y.current?.map((e=>({...e,provider:null})))||[]}]},{featureIdentifier:"local_files"});(0,n.useEffect)((()=>(w.current=!0,()=>{w.current=!1})),[]);const N=(0,m.I)(),P=(0,r.y1)((async(e,a)=>{if(!y.current){const e=await v.getTracks();y.current=e}w&&I({loggingParams:a},{uri:o.b,pages:[{items:y.current?.map((e=>({...e,provider:null})))||[]}]})}),c.s_,{leading:!0,trailing:!1});return j.canFetchAllTracks&&N?(0,b.jsx)(t.Z,{index:u,delegatePlayback:!0,delegateLogging:!0,isPlaying:S,onPlay:P,headerText:a,featureIdentifier:"local_files",uri:e,renderCardImage:()=>(0,b.jsx)(l.x,{images:i,FallbackComponent:h.S}),renderSubHeaderContent:()=>(0,b.jsx)(p.i,{children:s.ag.get("local-files.description")})}):null},y=({index:e})=>{const a=(0,u.gB)();return(0,b.jsx)(n.Suspense,{fallback:null,children:(0,b.jsx)(j,{index:e,name:a.name,uri:a.uri,images:a.images})})}},49378:(e,a,i)=>{i.r(a),i.d(a,{default:()=>j});var n=i(84875),r=i.n(n),s=i(86961),t=i(67027),l=i(55802),u=i(19023),c=i(9672),o=i(66258);const d="ctcxxigybw6qGQde916g",g="QGlY4v4eRdOcBHgHljcF",m="LFYYI0yKpFvSeNhBWRw4";var x=i(4637);const f=()=>(0,x.jsxs)("div",{className:g,children:[(0,x.jsx)(c.D,{iconSize:64,className:m}),(0,x.jsx)(o.D,{as:"h1",variant:"brio",semanticColor:"textBase",dir:"auto",children:s.ag.get("web-player.offline.empty-state.title")}),(0,x.jsx)(o.D,{as:"h2",variant:"ballad",semanticColor:"textSubdued",dir:"auto",children:s.ag.get("web-player.offline.empty-state.subtitle")})]});var h=i(30808),p=i(98824),b=i(30621);const j=function(){const{hasError:e,items:a}=(0,b.G)(),i=(0,p.I)();return e?null:(0,x.jsx)("div",{className:r()(d,"contentSpacing"),children:a.length>0||i?(0,x.jsxs)(h.JL,{value:"headered-grid",children:[(0,x.jsx)(l.P,{title:s.ag.get("music_downloads"),total:a.length,seeAllUri:"/collection/music-downloads",alwaysShowSeeAll:!0,children:a.map(((e,a)=>(0,x.jsx)(h.JL,{value:"card",index:a,children:(0,t.z)(e,a)},e.uri)))}),i&&(0,x.jsx)(l.P,{title:s.ag.get("local-files"),total:1,showAll:!0,children:(0,x.jsx)(u.P,{index:0})})]}):(0,x.jsx)(f,{})})}},30621:(e,a,i)=>{i.d(a,{G:()=>s});var n=i(59496),r=i(2376);function s(){const e=(0,r.c)(),[a,i]=(0,n.useState)(!0),[s,t]=(0,n.useState)(!1),[l,u]=(0,n.useState)([]);return(0,n.useEffect)((()=>{(async()=>{try{const a=await e.getDownloads();u(a)}catch(e){t(!0)}finally{i(!1)}})()}),[e]),{isLoading:a,hasError:s,items:l}}}}]);
//# sourceMappingURL=xpui-routes-offline-browse.js.map