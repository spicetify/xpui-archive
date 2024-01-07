"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1997],{8078:(e,a,n)=>{n.d(a,{z:()=>d});var i=n(96103),t=n(22678),r=n(77660),s=n(16439),l=n(32878),u=n(19252),c=n(14102),o=n(4637);function d(e,a){switch(e.type){case u.p.ALBUM:return(0,o.jsx)(i.r,{uri:e.uri,name:e.name,images:e.images,sharingInfo:null,artists:e.artists,index:a},e.uri);case u.p.ARTIST:return(0,o.jsx)(t.I,{uri:e.uri,name:e.name,images:e.images,index:a},e.uri);case u.p.SHOW:return(0,o.jsx)(l._,{uri:e.uri,name:e.name,images:e.images,publisher:e.publisher,sharingInfo:null,mediaType:c.E.UNKNOWN,index:a},e.uri);case u.p.AUDIOBOOK:return(0,o.jsx)(r.c,{uri:e.uri,name:e.name,images:e.images,authorName:e.authorName,index:a},e.uri);case u.p.PLAYLIST:return(0,o.jsx)(s.Z,{uri:e.uri,name:e.name,images:e.images,description:"",authorName:e.creatorName,index:a},e.uri);default:return null}}},16955:(e,a,n)=>{n.d(a,{P:()=>b});var i=n(59496),t=n(17657),r=n(60378),s=n(60806),l=n(56094),u=n(20870),c=n(28314),o=n(68164),d=n(6783),g=n(69092),m=n(59913),f=n(67551),x=n(19412),h=n(55106),p=n(4637);const y=function({uri:e,name:a,images:n,index:u}){const y=(0,d.u)(),b=(0,i.useRef)(null),j=(0,i.useRef)(!0),w=(0,i.useContext)(g.t),{isPlaying:S}=(0,x.cR)(o.b),{togglePlay:v}=(0,f.n)({uri:o.b,pages:[{items:b.current?.map((e=>({...e,provider:null})))||[]}]},{featureIdentifier:"local_files"});(0,i.useEffect)((()=>(j.current=!0,()=>{j.current=!1})),[]);const I=(0,m.I)(),N=(0,t.y1)((async(e,a)=>{if(!b.current){const e=await w.getTracks();b.current=e}j&&v({loggingParams:a},{uri:o.b,pages:[{items:b.current?.map((e=>({...e,provider:null})))||[]}]})}),c.s_,{leading:!0,trailing:!1});return y.canFetchAllTracks&&I?(0,p.jsx)(s.Z,{index:u,delegatePlayback:!0,delegateLogging:!0,isPlaying:S,onPlay:N,headerText:a,featureIdentifier:"local_files",uri:e,renderCardImage:()=>(0,p.jsx)(l.x,{images:n,FallbackComponent:h.S}),renderSubHeaderContent:()=>(0,p.jsx)("span",{children:r.ag.get("local-files.description")})}):null},b=({index:e})=>{const a=(0,u.gB)();return(0,p.jsx)(i.Suspense,{fallback:null,children:(0,p.jsx)(y,{index:e,name:a.name,uri:a.uri,images:a.images})})}},89371:(e,a,n)=>{n.r(a),n.d(a,{default:()=>y});var i=n(84875),t=n.n(i),r=n(60378),s=n(8078),l=n(10196),u=n(16955),c=n(51199),o=n(65748);const d={offline:"ctcxxigybw6qGQde916g",emptyStateContainer:"QGlY4v4eRdOcBHgHljcF",icon:"LFYYI0yKpFvSeNhBWRw4"};var g=n(4637);const m=()=>(0,g.jsxs)("div",{className:d.emptyStateContainer,children:[(0,g.jsx)(c.D,{iconSize:64,className:d.icon}),(0,g.jsx)(o.D,{as:"h1",variant:"brio",semanticColor:"textBase",dir:"auto",children:r.ag.get("web-player.offline.empty-state.title")}),(0,g.jsx)(o.D,{as:"h2",variant:"ballad",semanticColor:"textSubdued",dir:"auto",children:r.ag.get("web-player.offline.empty-state.subtitle")})]});var f=n(78061),x=n(59913),h=n(84383);function p(){const{hasError:e,items:a}=(0,h.G)(),n=(0,x.I)();return e?null:(0,g.jsx)("div",{className:t()(d.offline,"contentSpacing"),children:a.length>0||n?(0,g.jsxs)(f.JL,{value:"headered-grid",children:[(0,g.jsx)(l.P,{title:r.ag.get("music_downloads"),total:a.length,seeAllUri:"/collection/music-downloads",alwaysShowSeeAll:!0,children:a.map(((e,a)=>(0,g.jsx)(f.JL,{value:"card",index:a,children:(0,s.z)(e,a)},e.uri)))}),n&&(0,g.jsx)(l.P,{title:r.ag.get("local-files"),total:1,showAll:!0,children:(0,g.jsx)(u.P,{index:0})})]}):(0,g.jsx)(m,{})})}const y=p},84383:(e,a,n)=>{n.d(a,{G:()=>r});var i=n(59496),t=n(34068);function r(){const e=(0,t.c)(),[a,n]=(0,i.useState)(!0),[r,s]=(0,i.useState)(!1),[l,u]=(0,i.useState)([]);return(0,i.useEffect)((()=>{(async()=>{try{const a=await e.getDownloads();u(a)}catch(e){s(!0)}finally{n(!1)}})()}),[e]),{isLoading:a,hasError:r,items:l}}}}]);
//# sourceMappingURL=xpui-routes-offline-browse.js.map