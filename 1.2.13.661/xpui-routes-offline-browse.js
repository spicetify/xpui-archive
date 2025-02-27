"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1997],{67933:(e,r,n)=>{n.d(r,{z:()=>d});n(30246);var t=n(36299),a=n(60334),i=n(5979),s=n(15632),u=n(29332),c=n(83474),l=n(79262),o=n(4637);function d(e,r){switch(e.type){case c.p.ALBUM:return(0,o.jsx)(t.r,{uri:e.uri,name:e.name,images:e.images,sharingInfo:null,artists:e.artists,index:r},e.uri);case c.p.ARTIST:return(0,o.jsx)(a.I,{uri:e.uri,name:e.name,images:e.images,index:r},e.uri);case c.p.SHOW:return(0,o.jsx)(u._,{uri:e.uri,name:e.name,images:e.images,publisher:e.publisher,sharingInfo:null,mediaType:l.E.UNKNOWN,index:r},e.uri);case c.p.AUDIOBOOK:return(0,o.jsx)(i.c,{uri:e.uri,name:e.name,images:e.images,authorName:e.authorName,index:r},e.uri);case c.p.PLAYLIST:return(0,o.jsx)(s.Z,{uri:e.uri,name:e.name,images:e.images,description:"",authorName:e.creatorName,index:r},e.uri);default:return null}}},71724:(e,r,n)=>{n.d(r,{P:()=>S});var t=n(8850),a=n(45389),i=n(10995),s=n.n(i),u=(n(30246),n(162),n(95675),n(61235),n(62780),n(22369),n(7845),n(29543),n(70969),n(66715),n(30479),n(75341),n(59496)),c=n(85830),l=n(17249),o=n(23498),d=n(72030),f=n(59672),g=n(76022),p=n(81164),m=n(2120),x=n(32376),h=n(59791),v=n(1003),b=n(40787),j=n(79883),y=n(4637);function w(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function O(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?w(Object(n),!0).forEach((function(r){(0,a.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var P=function(e){var r,n=e.uri,a=e.name,i=e.images,f=e.index,w=(0,m.u)(),P=(0,u.useRef)(null),S=(0,u.useRef)(!0),k=(0,u.useContext)(x.t),I=(0,b.cR)(p.b).isPlaying,N=(0,v.n)({uri:p.b,pages:[{items:(null===(r=P.current)||void 0===r?void 0:r.map((function(e){return O(O({},e),{},{provider:null})})))||[]}]},{featureIdentifier:"local_files"}).togglePlay;(0,u.useEffect)((function(){return S.current=!0,function(){S.current=!1}}),[]);var D=(0,h.I)(),A=(0,c.y1)(function(){var e=(0,t.Z)(s().mark((function e(r,n){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P.current){e.next=5;break}return e.next=3,k.getTracks();case 3:t=e.sent,P.current=t;case 5:S&&N({loggingParams:n},{uri:p.b,pages:[{items:(null===(a=P.current)||void 0===a?void 0:a.map((function(e){return O(O({},e),{},{provider:null})})))||[]}]});case 6:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),g.s_,{leading:!0,trailing:!1});return w.canFetchAllTracks&&D?(0,y.jsx)(o.Z,{index:f,delegatePlayback:!0,delegateLogging:!0,isPlaying:I,onPlay:A,headerText:a,featureIdentifier:"local_files",uri:n,renderCardImage:function(){return(0,y.jsx)(d.x,{images:i,FallbackComponent:j.S})},renderSubHeaderContent:function(){return(0,y.jsx)("span",{children:l.ag.get("local-files.description")})}}):null},S=function(e){var r=e.index,n=(0,f.gB)();return(0,y.jsx)(u.Suspense,{fallback:null,children:(0,y.jsx)(P,{index:r,name:n.name,uri:n.uri,images:n.images})})}},74393:(e,r,n)=>{n.r(r),n.d(r,{default:()=>b});n(162);var t=n(84875),a=n.n(t),i=n(17249),s=n(67933),u=n(54658),c=n(71724),l=n(29617),o=n(10506);const d="ctcxxigybw6qGQde916g",f="QGlY4v4eRdOcBHgHljcF",g="LFYYI0yKpFvSeNhBWRw4";var p=n(4637),m=function(){return(0,p.jsxs)("div",{className:f,children:[(0,p.jsx)(l.D,{iconSize:64,className:g}),(0,p.jsx)(o.D,{as:"h1",variant:"brio",semanticColor:"textBase",dir:"auto",children:i.ag.get("web-player.offline.empty-state.title")}),(0,p.jsx)(o.D,{as:"h2",variant:"ballad",semanticColor:"textSubdued",dir:"auto",children:i.ag.get("web-player.offline.empty-state.subtitle")})]})},x=n(78142),h=n(59791),v=n(34663);const b=function(){var e=(0,v.G)(),r=e.hasError,n=e.items,t=(0,h.I)();return r?null:(0,p.jsx)("div",{className:a()(d,"contentSpacing"),children:n.length>0||t?(0,p.jsxs)(x.JL,{value:"headered-grid",children:[(0,p.jsx)(u.P,{title:i.ag.get("music_downloads"),total:n.length,seeAllUri:"/collection/music-downloads",alwaysShowSeeAll:!0,children:n.map((function(e,r){return(0,p.jsx)(x.JL,{value:"card",index:r,children:(0,s.z)(e,r)},e.uri)}))}),t&&(0,p.jsx)(u.P,{title:i.ag.get("local-files"),total:1,showAll:!0,children:(0,p.jsx)(c.P,{index:0})})]}):(0,p.jsx)(m,{})})}},34663:(e,r,n)=>{n.d(r,{G:()=>l});var t=n(8850),a=n(39130),i=n(10995),s=n.n(i),u=n(59496),c=n(59430);function l(){var e=(0,c.c)(),r=(0,u.useState)(!0),n=(0,a.Z)(r,2),i=n[0],l=n[1],o=(0,u.useState)(!1),d=(0,a.Z)(o,2),f=d[0],g=d[1],p=(0,u.useState)([]),m=(0,a.Z)(p,2),x=m[0],h=m[1];return(0,u.useEffect)((function(){var r=function(){var r=(0,t.Z)(s().mark((function r(){var n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.getDownloads();case 3:n=r.sent,h(n),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),g(!0);case 10:return r.prev=10,l(!1),r.finish(10);case 13:case"end":return r.stop()}}),r,null,[[0,7,10,13]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),{isLoading:i,hasError:f,items:x}}}}]);
//# sourceMappingURL=xpui-routes-offline-browse.js.map