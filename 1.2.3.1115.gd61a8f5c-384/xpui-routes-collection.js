"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6309],{89915:(e,t,n)=>{n.d(t,{u:()=>A});var a=n(59496),r=n(84875),s=n.n(r),i=n(652),l=n(12075),o=n(52646),c=n(78489);const u="FvfvGU3jvHRskUU9v9_8",d="Q9AlbZn2EGzy3MTWXa8X",m="mxmxS0y8LiwSs5nueKPT",p="GXxVAveNFStY3pBI_NO4",g="eHcXC2s97InYP7rMNT0H";var h=n(4637);const A=(0,a.memo)((function(e){const{children:t,message:n,title:a,linkTitle:r,linkTo:A,onClick:f,renderInline:x=!1}=e,{isXSOnly:E,isSMOnly:C}=(0,o.e)(),b=E||C;return(0,h.jsxs)("section",{className:s()(u,{[d]:x}),children:[t,(0,h.jsx)(i.D,{as:"h1",variant:b?"cello":"alto",className:p,children:a}),(0,h.jsx)(i.D,{variant:b?"mesto":"ballad",className:g,children:n}),r&&(A||f)&&(0,h.jsx)(l.D,{colorSet:"invertedLight",className:m,href:A,onClick:f,component:c.Z,children:r})]})}))},56884:(e,t,n)=>{n.d(t,{n:()=>v});var a=n(59496),r=n(84875),s=n.n(r),i=n(92053),l=n(652),o=n(32637),c=n(15154),u=n(28669),d=n(54329),m=n(55019),p=n(8446);var g=n(7119),h=n(75225),A=n(15006),f=n(48099);const x="BkpKedcdaMGbvgXMlmcg",E="muYk5XIwKmqR9iNibk_f",C="OEFWODerafYHGp09iLlA",b="m20ShRDiGGDpJ5LSABTi",y="Hvv0e7WKQ4kyftgSQJhg",j="yxf_6IsQEmHjijEBUMTP",L="oaNVBli46GtVjaQKB15g",T="JdlKTdpMquftpMwwegZo",R="Nts_ArOCGeROTDZND3M6",S="FvDsfgxSvLvL3q8d7nQv";var I=n(4637);const D=({items:e,activeItemId:t})=>(0,I.jsx)(A.v,{children:e.map((e=>e.disabled?(0,I.jsx)(f.s,{disabled:!0,role:"menuitemradio",className:j,onClick:e.handleClick,children:e.title},e.uri):(0,I.jsx)(f.s,{role:"menuitemradio",to:e.to,end:!0,"aria-checked":e.itemId===t,className:({isActive:e})=>s()(j,{[L]:e}),onClick:e.handleClick,children:e.title},e.uri)))}),v=(0,a.memo)((function({isCentered:e,links:t,landmarkLabel:n,className:r}){const A=(0,a.useRef)(null),[f,j]=(0,a.useState)([]),[v,_]=(0,a.useState)(0),[k,O]=(0,a.useState)([]),w=function(){const[e,t]=(0,a.useState)(window.innerWidth),{scrollNodeChildRef:n}=(0,a.useContext)(m.VX),r=(0,d.y1)((e=>{e?.width&&t(e.width)}),250);return(0,p.y)({refOrElement:n,observeOnly:"width",onResize:r}),e}()??1/0,{pathname:B}=(0,i.TH)(),N=t.find((e=>e.to===B));return(0,a.useEffect)((()=>{A.current&&_(A.current.clientWidth)}),[w]),(0,a.useEffect)((()=>{if(!A.current)return;const e=Array.from(A.current.children).map((e=>e.clientWidth));j(e)}),[t]),(0,a.useEffect)((()=>{if(!A.current)return;if(f.slice(0,-1).reduce(((e,t)=>e+t),0)<=v)return void O([]);const e=f.reduce(((e,t)=>e>t?e:t),0),t=[];let n=e;f.forEach(((e,a)=>{v>=n+e?n+=e:t.push(a)})),O(t)}),[v,f]),(0,I.jsx)("nav",{className:s()(r,x),"aria-label":n,children:(0,I.jsxs)("ul",{className:e?E:R,ref:A,children:[t.filter(((e,t)=>!k.includes(t))).map((e=>{const t=e?.render??(e=>e);return(0,I.jsx)(a.Fragment,{children:t((0,I.jsx)("li",{className:C,children:e.disabled?(0,I.jsx)("div",{className:T,children:(0,I.jsx)(l.D,{variant:"mestoBold",children:e.title})}):(0,I.jsx)(h.O,{end:!0,className:({isActive:e})=>s()(T,{[L]:e}),to:e.to,onClick:e.handleClick,children:(0,I.jsx)(l.D,{variant:"mestoBold",children:e.title})})}))},e.to)})),k.length||0===f.length?(0,I.jsx)("li",{className:C,children:(0,I.jsx)(g.xV,{renderInline:!0,menu:(0,I.jsx)(D,{items:t.filter(((e,t)=>k.includes(t))),activeItemId:N?.itemId}),children:(e,t,n)=>(0,I.jsxs)("button",{className:s()(b,{[y]:N}),type:"button",onClick:t,ref:n,children:[(0,I.jsx)(l.D,{variant:"mestoBold",children:N?N.title:u.ag.get("more")}),e?(0,I.jsx)(o.U,{iconSize:16,className:S,"aria-hidden":"true"}):(0,I.jsx)(c.i,{iconSize:16,className:S,"aria-hidden":"true"})]})})}):null]})})}))},92154:(e,t,n)=>{n.d(t,{$:()=>o,Q:()=>l});var a=n(59496),r=n(34854),s=n(66037),i=n(4637);const l=(0,a.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:s.oT.ADDED_AT}),o=a.memo((function({uri:e,children:t,defaultSortOption:n}){return(0,i.jsx)(r.r,{uri:e,defaultState:n,sortContext:l,children:t})}))},66037:(e,t,n)=>{n.d(t,{Aq:()=>d,Bf:()=>S,EY:()=>f,G5:()=>C,JV:()=>I,MY:()=>o,Ru:()=>c,ZP:()=>x,a6:()=>h,aY:()=>L,e3:()=>g,ei:()=>l,o$:()=>m,oT:()=>i,pT:()=>j,rJ:()=>R,u3:()=>T,w0:()=>b});var a=n(28669),r=n(45805),s=n(56045);let i;!function(e){e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER"}(i||(i={}));const l={"show-alphabetical":i.SHOW_ALPHABETICAL,"book-alphabetical":i.BOOK_ALPHABETICAL,"episode-alphabetical":i.EPISODE_ALPHABETICAL,"playlist-alphabetical":i.PLAYLIST_ALPHABETICAL,"album-alphabetical":i.ALBUM_ALPHABETICAL,"recently-added":i.ADDED_AT,"creator-name":i.CREATOR_NAME,"creator-name-alphabetical":i.CREATOR_NAME_ALPHABETICAL,"album-creator-name":i.ALBUM_CREATOR_NAME,"recently-played":i.RECENTLY_PLAYED,"playlist-most-relevant":i.MOST_RELEVANT,"playlist-custom-order":i.CUSTOM_ORDER},o={[i.RECENTLY_PLAYED]:{key:"recently-played",get value(){return a.ag.get("collection.sort.recently-played")}},[i.ADDED_AT]:{key:"recently-added",get value(){return a.ag.get("collection.sort.recently-added")}},[i.SHOW_ALPHABETICAL]:{key:"show-alphabetical",get value(){return a.ag.get("collection.sort.alphabetical")}},[i.BOOK_ALPHABETICAL]:{key:"book-alphabetical",get value(){return a.ag.get("collection.sort.alphabetical")}},[i.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",get value(){return a.ag.get("collection.sort.alphabetical")}},[i.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",get value(){return a.ag.get("collection.sort.alphabetical")}},[i.ALBUM_CREATOR_NAME]:{key:"album-creator-name",get value(){return a.ag.get("collection.sort.creator")}},[i.CREATOR_NAME]:{key:"creator-name",get value(){return a.ag.get("collection.sort.creator")}},[i.CREATOR_NAME_ALPHABETICAL]:{key:"creator-name-alphabetical",get value(){return a.ag.get("collection.sort.alphabetical")}},[i.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",get value(){return a.ag.get("collection.sort.alphabetical")}},[i.MOST_RELEVANT]:{key:"playlist-most-relevant",get value(){return a.ag.get("collection.sort.most-relevant")}},[i.CUSTOM_ORDER]:{key:"playlist-custom-order",get value(){return a.ag.get("collection.sort.custom-order")}}},c=[i.ADDED_AT,i.ALBUM_ALPHABETICAL,i.CREATOR_NAME],u={[i.ADDED_AT]:{field:r.lY.ADDED_AT,order:r.As.DESC},[i.ALBUM_ALPHABETICAL]:{field:r.lY.NAME,order:r.As.ASC},[i.CREATOR_NAME]:{field:r.lY.ARTIST_NAME,order:r.As.ASC}};const d=e=>{if(function(e){return c.includes(e)}(e))return u[e]},m=[i.ADDED_AT,i.CREATOR_NAME_ALPHABETICAL],p={[i.ADDED_AT]:{field:r.hx.ADDED_AT,order:r.As.DESC},[i.CREATOR_NAME_ALPHABETICAL]:{field:r.hx.NAME,order:r.As.ASC}};const g=e=>{if(function(e){return m.includes(e)}(e))return p[e]},h=[i.ADDED_AT,i.SHOW_ALPHABETICAL],A={[i.ADDED_AT]:{field:r.aW.ADDED_AT,order:r.As.DESC},[i.SHOW_ALPHABETICAL]:{field:r.aW.NAME,order:r.As.ASC}};const f=e=>{if(function(e){return h.includes(e)}(e))return A[e]},x=[i.ADDED_AT,i.BOOK_ALPHABETICAL],E={[i.ADDED_AT]:r.VN.ADDED_AT,[i.BOOK_ALPHABETICAL]:r.VN.NAME};const C=e=>{if(function(e){return x.includes(e)}(e))return E[e]},b=[i.MOST_RELEVANT,i.RECENTLY_PLAYED,i.ADDED_AT,i.PLAYLIST_ALPHABETICAL,i.CUSTOM_ORDER],y={[i.ADDED_AT]:{field:s.bD.ADDED_AT,order:s.As.DESC},[i.RECENTLY_PLAYED]:{field:s.bD.RECENTLY_PLAYED,order:s.As.ASC},[i.PLAYLIST_ALPHABETICAL]:{field:s.bD.NAME,order:s.As.ASC},[i.MOST_RELEVANT]:{field:s.bD.RELEVANCE,order:s.As.DESC},[i.CUSTOM_ORDER]:void 0};const j=e=>{if(function(e){return b.includes(e)}(e))return y[e]},L=i.ADDED_AT,T=i.ADDED_AT,R=i.ADDED_AT,S=i.MOST_RELEVANT,I=i.ADDED_AT},35321:(e,t,n)=>{n.d(t,{h:()=>p});var a=n(59496),r=n(3939),s=n(46368),i=n(37796),l=n(73305),o=n(92154),c=n(66037),u=n(4637);const d=a.memo((function({sortOptions:e,onSort:t}){const{sortState:n,setSortState:r}=(0,a.useContext)(o.Q),s=(0,a.useCallback)((e=>{const n=c.ei[e];t?.(n),r(n)}),[t,r]),i=e.map((e=>c.MY[e])),d=c.MY[n];return(0,u.jsx)(l.A,{options:i,onSelect:s,selected:d})})),m="VuUpAVlUW_OfMfOcDEID",p=a.memo((function({canSort:e,canFilter:t,filterPlaceholder:n,sortOptions:l}){const{spec:o,logger:c}=(0,i.fU)(r.createDesktopSearchBarEventFactory,{}),p=(0,a.useCallback)((()=>{c.logInteraction(o.filterFieldFactory().keyStrokeFilter())}),[c,o]),g=(0,a.useCallback)((()=>{c.logInteraction(o.filterFieldFactory().hitClearFilter())}),[c,o]),h=(0,a.useCallback)((()=>{c.logInteraction(o.sortButtonFactory().hitSort())}),[c,o]);return(0,u.jsxs)("div",{className:m,children:[t?(0,u.jsx)(a.Suspense,{fallback:null,children:(0,u.jsx)(s.K,{placeholder:n,onFilter:p,onClear:g})}):null,e?(0,u.jsx)(d,{sortOptions:l,onSort:h}):null]})}))},83165:(e,t,n)=>{n.d(t,{$:()=>a.$,Q:()=>a.Q});var a=n(92154)},21387:(e,t,n)=>{n.d(t,{Aq:()=>a.Aq,Bf:()=>a.Bf,EY:()=>a.EY,G5:()=>a.G5,JV:()=>a.JV,Ru:()=>a.Ru,ZP:()=>a.ZP,a6:()=>a.a6,aY:()=>a.aY,e3:()=>a.e3,o$:()=>a.o$,oT:()=>a.oT,pT:()=>a.pT,rJ:()=>a.rJ,u3:()=>a.u3,w0:()=>a.w0});var a=n(66037)},11322:(e,t,n)=>{n.r(t),n.d(t,{default:()=>it});var a=n(59496),r=n(77646),s=n(92053),i=n(45947),l=n(30083),o=n(28669),c=n(63165),u=n(55179),d=n(85400),m=n(92907),p=n(32287),g=n(652),h=n(88949),A=n(21291),f=n(84875),x=n.n(f),E=n(91799),C=n(4637);const b=({span:e,onInView:t,marginBottom:n,marginTop:r})=>{const s=(0,a.useRef)(null);return(0,a.useEffect)((()=>{if(!window.IntersectionObserver)return()=>{};const e=new window.IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&t()}))}));return s.current&&e.observe(s.current),()=>{e.disconnect()}}),[t]),e<=0?null:(0,C.jsx)("div",{style:{gridColumn:"1/-1",gridRow:`span ${e}`,marginBottom:n,marginTop:r},ref:s,"data-type":"sentinel"},"topSentinel")},y=({renderItems:e,nrItems:t,estimatedItemMaxHeight:n,scrollNodeRef:r,nrRowsOverscan:s=5,initalNrRows:i=5})=>{const[l,o]=(0,a.useState)({firstRowToRender:0,nrRows:i+s}),c=(0,a.useRef)(0),u=(0,a.useRef)(null),d=(0,a.useRef)(n),m=(0,a.useCallback)((()=>{const e=r.current;if(!e)return;const t=u.current?.querySelector(':scope > *:not([data-type="sentinel"])');d.current=t?t.getBoundingClientRect().height+E.w:d.current;const n=Math.floor((e.scrollTop-c.current)/d.current),a=Math.max(n-s,0),i=Math.ceil(e.offsetHeight/d.current)+2*s;a===l.firstRowToRender&&i===l.nrRows||o({firstRowToRender:a,nrRows:i})}),[s,l,r]),p=(0,a.useCallback)((({columnCount:n})=>{if(n<=0)return[null];const a=Math.ceil(t/n),r=l.firstRowToRender*n,i=l.firstRowToRender+l.nrRows-1,o=Math.min(t-1,(i+1)*n-1),c=d.current*(s-2);return[(0,C.jsx)(b,{span:l.firstRowToRender,onInView:m,marginBottom:`-${c}px`},`topSentinel-${l.firstRowToRender}`),e(r,o,n),(0,C.jsx)(b,{span:a-i,onInView:m,marginTop:`-${c}px`},"bottomSentinel-"+(a-i))]}),[t,s,m,e,l.firstRowToRender,l.nrRows]);return(0,a.useEffect)((()=>{const e=u.current,t=r.current;e&&t&&(c.current=e.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop)}),[r]),(0,C.jsx)(E.T,{useUniformRowHeight:!0,ref:u,render:p})};var j=n(55019),L=n(85829),T=n(13329),R=n(75420);const S=(0,a.memo)((function({index:e}){return(0,C.jsx)(T.C,{index:e,headerText:"",uri:"",renderCardImage:()=>(0,C.jsx)(R.x,{images:[]}),featureIdentifier:"unknown"})})),I="lA3jnNwnLc3CoYKT06Vz";function D({renderCard:e,nrCards:t,fetchData:n,limit:r=50,cardGridApiRef:s}){const{scrollNodeRef:i}=(0,a.useContext)(j.VX),{getItems:l,nrValidItems:o,invalidateCache:c,hasItems:u}=(0,L.Q)({nrItems:t,fetch:n,limit:r});(0,a.useImperativeHandle)(s,(()=>({update:()=>c()})));return(0,C.jsx)("div",{className:x()({[I]:!u}),children:(0,C.jsx)(y,{renderItems:(t,n,a)=>l(t,n).map(((n,r)=>(n?e(n,t+r,a):null)??(0,C.jsx)(S,{index:r},t+r))),scrollNodeRef:i,nrItems:o,estimatedItemMaxHeight:250})})}var v=n(89915),_=n(27521),k=n(67115),O=n(51453),w=n(77634),B=n(13205),N=n(37796),P=n(35321),M=n(83165),H=n(21387),Y=n(98640),U=n(22806);const F={offset:0,limit:1},W=()=>{const e=(0,a.useContext)(B.H);return(e=>{const[t,n]=(0,a.useState)(null),r=(0,a.useCallback)((async()=>{if(!e)return;const t=await e();n(t?.totalLength||0)}),[e]);return(0,a.useEffect)((()=>{null===t&&r()}),[t,r]),{total:t}})((0,a.useCallback)((()=>e?e?.getShows(F):Promise.resolve({totalLength:0})),[e]))},V=()=>{const e=(0,a.useContext)(B.H),[t,n]=(0,a.useState)(null),r=(0,a.useCallback)((async()=>{if(!e)return;const t=await(e?.getBooks(F));n(t?.totalLength||0)}),[e]);return(0,a.useEffect)((()=>{null===t&&r()}),[t,r]),(0,U.b)(Y.EW.UPDATE,r),{total:t}};var Z=n(24044);const G=a.memo((function({nrAlbums:e}){const t=(0,a.useContext)(B.H),{filter:n}=(0,a.useContext)(k.fo),{sortState:r}=(0,a.useContext)(M.Q),s=(0,a.useRef)(null),{spec:i,UBIFragment:c}=(0,N.fU)(h.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:albums",identifier:l.Wg.YOURLIBRARY_ALBUMS}}),u=(0,a.useMemo)((()=>i.headerFactory()),[i]),d=(0,a.useCallback)((async(e,a)=>{const s=await t.getAlbums({offset:e,limit:a,filter:n,sort:(0,H.Aq)(r)});return{items:s.items,totalLength:s.totalLength}}),[t,n,r]),m=(0,a.useCallback)(((e,t)=>(0,C.jsx)(w.ZP,{value:"card",index:t,children:(0,C.jsx)(A.r,{index:t,uri:e.uri,name:e.name,images:e.images,artists:e.artists,sharingInfo:e.sharingInfo})},e.uri)),[]);return(0,C.jsxs)(c,{spec:i,children:[(0,C.jsx)(c,{spec:u,children:(0,C.jsxs)("div",{className:Z.Z.header,children:[(0,C.jsx)(g.D,{as:"h1",variant:"canon",children:o.ag.get("albums")}),(0,C.jsx)(a.Suspense,{fallback:null,children:(0,C.jsx)(P.h,{canSort:t.getCapabilities().canSort,canFilter:t.getCapabilities().canFilter,filterPlaceholder:o.ag.get("collection.filter.albums"),sortOptions:H.Ru})})]})}),(0,C.jsx)(D,{nrCards:e,renderCard:m,fetchData:d,cardGridApiRef:s})]})})),K=a.memo((function(){const{total:e}=(()=>{const e=(0,a.useContext)(B.H),[t,n]=(0,a.useState)(null),r=(0,a.useCallback)((async()=>{if(!e)return;const t=await(e?.getAlbums(F));n(t?.totalLength||0)}),[e]);return(0,a.useEffect)((()=>{null===t&&r()}),[t,r]),(0,U.b)(Y.EW.UPDATE,r),{total:t}})();return null===e?(0,C.jsx)(_.h,{hasError:!1,errorMessage:o.ag.get("error.request-collection-albums-failure")}):e?(0,C.jsx)(G,{nrAlbums:e}):(0,C.jsx)(v.u,{linkTo:"/search",linkTitle:o.ag.get("collection.empty-page.albums-cta"),message:o.ag.get("collection.empty-page.albums-subtitle"),title:o.ag.get("collection.empty-page.albums-title"),children:(0,C.jsx)(O.t,{type:"album"})})})),$=a.memo((function(){return(0,C.jsx)(M.$,{uri:"collection/albums",defaultSortOption:H.aY,children:(0,C.jsx)(k.hz,{uri:"collection/albums",children:(0,C.jsx)(K,{})})})}));var z=n(48367);const J=a.memo((function({nrArtists:e}){const t=(0,a.useContext)(B.H),{filter:n}=(0,a.useContext)(k.fo),{sortState:r}=(0,a.useContext)(M.Q),s=(0,a.useRef)(null),{spec:i,UBIFragment:c}=(0,N.fU)(h.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:artists",identifier:l.Wg.YOURLIBRARY_ARTISTS}}),u=(0,a.useMemo)((()=>i.headerFactory()),[i]),d=(0,a.useCallback)((async(e,a)=>{const s=await t.getArtists({offset:e,limit:a,filter:n,sort:(0,H.e3)(r)});return{items:s.items,totalLength:s.totalLength}}),[t,n,r]),m=(0,a.useCallback)(((e,t)=>(0,C.jsx)(w.ZP,{value:"card",index:t,children:(0,C.jsx)(z.I,{index:t,name:e.name,uri:e.uri,images:e.images})},e.uri)),[]);return(0,a.useEffect)((()=>{s.current&&s.current.update()}),[r,n,e]),(0,C.jsxs)(c,{spec:i,children:[(0,C.jsx)(c,{spec:u,children:(0,C.jsxs)("div",{className:Z.Z.header,children:[(0,C.jsx)(g.D,{as:"h1",variant:"canon",children:o.ag.get("artists")}),(0,C.jsx)(a.Suspense,{fallback:null,children:(0,C.jsx)(P.h,{canSort:t.getCapabilities().canSort,canFilter:t.getCapabilities().canFilter,filterPlaceholder:o.ag.get("collection.filter.artists"),sortOptions:H.o$})})]})}),(0,C.jsx)(D,{nrCards:e,renderCard:m,fetchData:d,cardGridApiRef:s})]})})),Q=a.memo((function(){const{total:e}=(()=>{const e=(0,a.useContext)(B.H),[t,n]=(0,a.useState)(null),r=(0,a.useCallback)((async()=>{if(!e)return;const t=await(e?.getArtists(F));n(t?.totalLength||0)}),[e]);return(0,a.useEffect)((()=>{null===t&&r()}),[t,r]),(0,U.b)(Y.EW.UPDATE,r),{total:t}})();return null===e?(0,C.jsx)(_.h,{hasError:!1,errorMessage:o.ag.get("error.request-collection-artists-failure")}):e>0?(0,C.jsx)(J,{nrArtists:e}):(0,C.jsx)(v.u,{message:o.ag.get("collection.empty-page.artists-subtitle"),title:o.ag.get("collection.empty-page.artists-title"),linkTo:"/search",linkTitle:o.ag.get("collection.empty-page.artists-cta"),children:(0,C.jsx)(O.t,{type:"artist"})})})),X=a.memo((function(){return(0,C.jsx)(M.$,{uri:"collection/artists",defaultSortOption:H.u3,children:(0,C.jsx)(k.hz,{uri:"collection/artists",children:(0,C.jsx)(Q,{})})})}));var q=n(46006);const ee=a.memo((function({nrBooks:e}){const t=(0,a.useContext)(B.H),{filter:n}=(0,a.useContext)(k.fo),{sortState:r}=(0,a.useContext)(M.Q),{spec:s,UBIFragment:i}=(0,N.fU)(h.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:audiobooks",identifier:l.Wg.YOURLIBRARY_AUDIOBOOKS}}),c=(0,a.useMemo)((()=>s.headerFactory()),[s]),u=(0,a.useRef)(null),d=(0,a.useCallback)((async(e,a)=>{const s=await t.getBooks({offset:e,limit:a,filter:n,sort:(0,H.G5)(r)});return{items:s.items.map((e=>(e=>""===e.authorName&&""===e.name)(e)?null:e)),totalLength:s.totalLength}}),[t,n,r]),m=(0,a.useCallback)(((e,t)=>(0,C.jsx)(w.ZP,{value:"card",index:t,children:(0,C.jsx)(q.c,{index:t,uri:e.uri,name:e.name,images:e.images,authorName:e.authorName,isLocked:e.isLocked})},e.uri)),[]);return(0,C.jsxs)(i,{spec:s,children:[(0,C.jsx)(i,{spec:c,children:(0,C.jsxs)("div",{className:Z.Z.header,children:[(0,C.jsx)(g.D,{as:"h1",variant:"canon",children:o.ag.get("search.title.audiobooks")}),(0,C.jsx)(P.h,{canSort:t.getCapabilities().canSort,canFilter:t.getCapabilities().canFilter,filterPlaceholder:"Search in Audiobooks",sortOptions:H.ZP})]})}),(0,C.jsx)(D,{nrCards:e,renderCard:m,fetchData:d,cardGridApiRef:u})]})})),te=a.memo((function(){const{total:e}=V();return null===e?(0,C.jsx)(_.h,{hasError:!1,errorMessage:o.ag.get("error.request-collection-albums-failure")}):e>0?(0,C.jsx)(ee,{nrBooks:e}):(0,C.jsx)(v.u,{linkTo:"/search",linkTitle:o.ag.get("collection.empty-page.books-cta"),message:o.ag.get("collection.empty-page.books-subtitle"),title:o.ag.get("collection.empty-page.books-title"),children:(0,C.jsx)(O.t,{type:"book"})})})),ne=a.memo((function(){return(0,C.jsx)(M.$,{uri:"collection/books",defaultSortOption:H.JV,children:(0,C.jsx)(k.hz,{uri:"collection/books",children:(0,C.jsx)(te,{})})})}));var ae=n(63199),re=n(64107),se=n(54329),ie=n(96927),le=n(79682),oe=n(62301),ce=n(53057),ue=n(60474),de=n(62716),me=n(4147),pe=n(10687),ge=n(37221);const he=function({uri:e,name:t,images:n,index:r}){const s=(0,ce.u)(),i=(0,a.useRef)(null),l=(0,a.useRef)(!0),c=(0,a.useContext)(ue.t),{isPlaying:u}=(0,pe.cR)(oe.b),{togglePlay:d}=(0,me.n)({uri:oe.b,pages:[{items:i.current?.map((e=>({...e,provider:null})))||[]}]},{featureIdentifier:"local_files"});(0,a.useEffect)((()=>(l.current=!0,()=>{l.current=!1})),[]);const m=(0,de.I)(),p=(0,se.y1)((async(e,t)=>{if(!i.current){const e=await c.getTracks();i.current=e}l&&d({loggingParams:t},{uri:oe.b,pages:[{items:i.current?.map((e=>({...e,provider:null})))||[]}]})}),le.s_,{leading:!0,trailing:!1});return s.canFetchAllTracks&&m?(0,C.jsx)(T.Z,{index:r,delegatePlayback:!0,delegateLogging:!0,isPlaying:u,onPlay:p,headerText:t,featureIdentifier:"local_files",uri:e,renderCardImage:()=>(0,C.jsx)(R.x,{images:n,FallbackComponent:ge.S}),renderSubHeaderContent:()=>(0,C.jsx)("span",{children:o.ag.get("local-files.description")})}):null},Ae=({index:e})=>{const t=(0,ie.gB)();return(0,C.jsx)(a.Suspense,{fallback:null,children:(0,C.jsx)(he,{index:e,name:t.name,uri:t.uri,images:t.images})})};var fe=n(37141),xe=n(90428),Ee=n(87931),Ce=n(59295),be=n(5325),ye=n(1452),je=n(7741),Le=n(7785),Te=n(12937),Re=n(46638);const Se="NGSgqDuaOH2VDApkzoxN",Ie="ZzUvBwE6uj5CAU2pjlQX",De="kST1INfbHSxzydJffBq_",ve="DY2YrJ5MH3ddIhZGORBq",_e="ZXOyJPokUIObMnvTOJvc",ke="lBs1v3T3HAPrOxfyWemr",Oe="xhPzQCyks9pfizJj_PVK",we="d8ifuAZX8mK644AwlRZK";function Be(e,t){return Array.from(new Array(e).keys()).map((e=>(0,C.jsx)(Re.C,{as:"div",className:ke,charCount:t,isLoading:!0},e)))}const Ne=({index:e,onClick:t})=>{const n=(0,Te.MY)({limit:7}),{user:a}=(0,r.v9)(Ce.Gg),s=(0,ie.I2)(a?.id);return s?(0,C.jsx)(Le.Z,{index:e,className:x()(Se,Ie),onClick:t,headerText:s.name,featureIdentifier:"your_library",uri:s.uri,ariaPlayLabel:o.ag.get("playlist.a11y.play",s.name),ariaPauseLabel:o.ag.get("playlist.a11y.pause",s.name),renderCardImage:()=>{return(0,C.jsx)("div",{className:ve,children:(0,C.jsx)("div",{className:_e,children:n?(e=n,e.items.map((({uri:e,name:t,artists:[n]},a)=>(0,C.jsxs)("span",{children:[(0,C.jsx)("span",{className:we,children:a?" • ":""}),(0,C.jsx)("span",{dir:"auto",children:n.name}),(0,C.jsx)("span",{dir:"auto",className:we,children:t})]},e)))):Be(3)})});var e},renderSubHeaderContent:()=>(0,C.jsx)("div",{className:Oe,children:n?`${n.totalLength} ${s.name}`:Be(1,s.name.length)})}):null},Pe=(e,t,n)=>(0,C.jsx)(w.ZP,{value:"card",index:t,children:n},`${e.uri}`??0),Me=(e,t,n)=>{switch(e.type){case ye.p.LIKED_SONGS:return Pe(e,t,n>1?(0,C.jsx)(Ne,{index:t},e.uri):(0,C.jsx)(re.p,{index:t},e.uri));case ye.p.YOUR_EPISODES:return Pe(e,t,(0,C.jsx)(xe.T,{index:t},e.uri));case ye.p.LOCAL_FILES:return Pe(e,t,(0,C.jsx)(Ae,{index:t},e.uri));case ye.p.PLAYLIST:return Pe(e,t,(0,C.jsx)(ae.Z,{index:t,name:e.name,uri:e.uri,images:e.images,description:e.description,authorName:e.owner?.displayName,isPlayable:e.totalLength>0},e.uri));case"placeholder":return Pe(e,t,(0,C.jsx)(ae.Z,{index:t,uri:e.uri,name:"",images:[],description:"",authorName:""},e.uri));case"empty":return(0,C.jsx)(a.Fragment,{},t);case"folder":return null;default:return(0,je._)(e),null}},He=a.memo((function({nrPlaylists:e,showYourEpisodesCard:t,showLocalFilesCard:n}){const{filter:s}=(0,a.useContext)(k.fo),{sortState:i}=(0,a.useContext)(M.Q),c=(0,a.useContext)(be.BS),u=(0,a.useRef)(null),d=(0,r.v9)(Ce.Gg).user,{spec:m,UBIFragment:p}=(0,N.fU)(h.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:playlists",identifier:l.Wg.YOURLIBRARY_PLAYLISTS}}),A=(0,a.useMemo)((()=>m.headerFactory()),[m]),f=(0,a.useMemo)((()=>{const e=[];if(s)return e;const a=(0,ie.I2)(d?.id);a&&(e.push(a),e.push({uri:"",type:"empty"}));const r=t?(0,ie.bl)(d?.id):null;r&&e.push(r);const i=n?(0,ie.gB)():null;return i&&e.push(i),e}),[s,n,t,d]),x=(0,a.useCallback)((()=>{u?.current&&u.current.update()}),[u]);(0,be.iu)(x);const E=(0,a.useCallback)((async(e,t)=>{const n=f.slice(e),a=e-(f.length-n.length),r=await c.getContents({offset:a,limit:t,filter:s,sort:(0,H.pT)(i),flatten:!0,decorateImagesAndOwner:!0}),l=r.items.map((e=>"placeholder"===e.type?null:e));return{items:[...n,...l],totalLength:r.totalItemCount+f.length}}),[f,c,s,i]);return(0,C.jsxs)(p,{spec:m,children:[(0,C.jsx)(p,{spec:A,children:(0,C.jsxs)("div",{className:Z.Z.header,children:[(0,C.jsx)(g.D,{as:"h1",variant:"canon",children:o.ag.get("playlists")}),(0,C.jsx)(a.Suspense,{fallback:null,children:(0,C.jsx)(P.h,{canSort:c.getCapabilities().canSort,canFilter:c.getCapabilities().canFilter,filterPlaceholder:o.ag.get("collection.filter.playlists"),sortOptions:H.w0})})]})}),(0,C.jsx)(D,{nrCards:e+f.length,renderCard:Me,fetchData:E,cardGridApiRef:u})]})})),Ye=a.memo((function(){const e=(0,be.Rt)(),t=(0,fe.x)(),n=(0,ce.u)(),{createPlaylist:r}=(0,Ee.K)(),s=(0,de.I)(),i=(0,a.useCallback)((()=>{r()}),[r]);return null===e||null===t?(0,C.jsx)(_.h,{hasError:!1,errorMessage:o.ag.get("error.request-collection-albums-failure")}):e?.playlistCount?(0,C.jsx)(He,{nrPlaylists:e.playlistCount,showYourEpisodesCard:t.totalLength>0,showLocalFilesCard:n.canFetchAllTracks&&s}):(0,C.jsx)(v.u,{linkTitle:o.ag.get("collection.empty-page.playlists-cta"),onClick:i,title:o.ag.get("collection.empty-page.playlists-title"),message:o.ag.get("collection.empty-page.playlists-subtitle"),children:(0,C.jsx)(O.t,{type:"playlist"})})})),Ue=a.memo((function(){return(0,C.jsx)(M.$,{uri:"collection/playlists",defaultSortOption:H.Bf,children:(0,C.jsx)(k.hz,{uri:"collection/playlists",children:(0,C.jsx)(Ye,{})})})}));var Fe=n(53549),We=n(91404),Ve=n(88877),Ze=n(26082),Ge=n(56568);const Ke=()=>{const e="ginger-audio-shows-top-20-web",{view:t}=(0,We.P)(e);if(!t)return null;const{content:n,name:a}=t,{total:r=0,items:s}=n;return(0,C.jsx)(Ge.P,{title:a,total:r,seeAllUri:(0,Ve.p)(e),children:s.filter((e=>"show"===e.type)).map(((e,t)=>(0,C.jsx)(Fe._,{name:e.name,uri:e.uri,images:e.images,publisher:e.publisher,mediaType:{audio:Ze.E.AUDIO,video:Ze.E.VIDEO,mixed:Ze.E.MIXED}[e.media_type]??Ze.E.AUDIO,sharingInfo:null,index:t},e.uri)))})};var $e=n(21350),ze=n(18038);function Je(e,t){return Array.from(new Array(e).keys()).map((e=>(0,C.jsx)(Re.C,{as:"div",className:ke,charCount:t,isLoading:!0},e)))}const Qe=({index:e})=>{const t=(0,Te.j$)({limit:7}),{user:n}=(0,r.v9)(Ce.Gg),a=(0,ie.bl)(n?.id);return a?(0,C.jsx)(Le.Z,{index:e,className:x()(Se,De),headerText:a.name,featureIdentifier:"your_library",uri:a.uri,ariaPlayLabel:o.ag.get("playlist.a11y.play",a.name),ariaPauseLabel:o.ag.get("playlist.a11y.pause",a.name),renderCardImage:()=>{return(0,C.jsx)("div",{className:ve,children:(0,C.jsx)("div",{className:_e,children:t?(e=t,e.items.map((({uri:e,name:t,show:n},a)=>(0,C.jsxs)("span",{children:[(0,C.jsx)("span",{className:we,children:a?" • ":""}),(0,C.jsx)("span",{dir:"auto",children:t}),n&&(0,C.jsx)("span",{dir:"auto",className:we,children:n.name})]},e)))):Je(3)})});var e},renderSubHeaderContent:()=>(0,C.jsx)("div",{className:Oe,children:t?o.ag.get("tracklist-header.episodes-counter",t.totalLength):Je(1,a.name.length)})}):null},Xe=a.memo((function({nrShows:e}){const t=(0,a.useContext)(B.H),{filter:n}=(0,a.useContext)(k.fo),{sortState:s}=(0,a.useContext)(M.Q),i=(0,a.useRef)(!1),c=(0,a.useRef)({entities:[],total:e}),[u,d]=(0,a.useState)(0),{user:m}=(0,r.v9)(Ce.Gg),{spec:p,UBIFragment:A}=(0,N.fU)(h.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:podcasts",identifier:l.Wg.YOURLIBRARY_SHOWS}}),f=(0,a.useMemo)((()=>p.headerFactory()),[p]),x=(0,a.useCallback)((async(e,a,r=!1)=>{if(!i.current){i.current=!r;const l=await t.getShows({offset:e,limit:a,filter:n,sort:(0,H.EY)(s)});c.current=function(e,t,n){const a={...n};return a.entities=t?e.items||[]:a.entities.concat(e.items||[]),a.total=e.totalLength,a}(l,r,c.current),i.current=!1,d((e=>e+1))}}),[t,n,s,c]),b=(0,a.useCallback)((e=>{c.current=function(e,t){const n={...t},a=t.entities.filter((t=>t.uri!==e));return n.total=(t.total||0)-(t.entities.length-a.length),n.entities=a,n}(e,c.current),d((e=>e+1))}),[]);(0,a.useEffect)((()=>{x(0,50,!!u)}),[n,s]);const y=(0,a.useCallback)((()=>{c.current.entities.length!==c.current.total&&x(c.current.entities.length,50)}),[x,c]);return(0,C.jsx)(A,{spec:p,children:(0,C.jsxs)($e.C,{onReachBottom:y,children:[(0,C.jsx)(A,{spec:f,children:(0,C.jsxs)("div",{className:Z.Z.header,children:[(0,C.jsx)(g.D,{as:"h1",variant:"canon",children:o.ag.get("podcasts")}),(0,C.jsx)(a.Suspense,{fallback:null,children:(0,C.jsx)(P.h,{canSort:t.getCapabilities().canSort,canFilter:t.getCapabilities().canFilter,filterPlaceholder:o.ag.get("collection.filter.podcasts"),sortOptions:H.a6})})]})}),(0,C.jsx)(ze.r,{onLibraryItemRemove:b,children:(0,C.jsx)(w.ZP,{value:"EntitiesGrid",children:(0,C.jsx)(E.T,{render:()=>{const e=(0,ie.bl)(m?.id),t=n||!e||0===c.current.entities.length?[]:[(0,C.jsx)(a.Suspense,{fallback:null,children:(0,C.jsx)(Qe,{index:0})},"your-episodes-card")],r=t.length>0;return t.concat(c.current.entities.map(((e,t)=>{const n=r?t+1:t;return(0,C.jsx)(w.ZP,{value:"card",index:n,children:(0,C.jsx)(Fe._,{index:n,name:e.name,uri:e.uri,images:e.images,publisher:e.publisher,sharingInfo:null})},e.uri)})))}})})})]})})})),qe=a.memo((function(){const{total:e}=W(),{productState:t}=(0,r.v9)(Ce.Gg),n=!!t&&parseInt(t.ads,10)>0;return null===e?(0,C.jsx)(_.h,{hasError:!1,errorMessage:o.ag.get("error.request-collection-shows-failure")}):e?(0,C.jsx)(Xe,{nrShows:e}):(0,C.jsxs)("div",{className:x()(Z.Z.emptyStateContainer,{[Z.Z.adBarEnabled]:n}),children:[(0,C.jsx)(v.u,{linkTo:"/genre/podcasts-web",linkTitle:o.ag.get("collection.empty-page.shows-cta"),message:o.ag.get("collection.empty-page.shows-subtitle"),title:o.ag.get("collection.empty-page.shows-title"),renderInline:!0,children:(0,C.jsx)(O.t,{type:"show"})}),(0,C.jsx)(Ke,{})]})})),et=a.memo((function(){return(0,C.jsx)(M.$,{uri:"collection/podcasts",defaultSortOption:H.rJ,children:(0,C.jsx)(k.hz,{uri:"collection/podcasts",children:(0,C.jsx)(qe,{})})})}));var tt=n(33833),nt=n(56884),at=n(73827);const rt=({isAudiobooksEnabled:e})=>{const t=(0,r.v9)(m.rH),{spec:n,logger:s}=(0,N.fU)(tt.createDesktopLibraryTopbarEventFactory,{}),i=(0,a.useMemo)((()=>[{title:o.ag.get("playlists"),itemId:"collection.tab-playlists",to:"/collection/playlists",uri:"spotify:app:collection:playlists"},...t?[{title:o.ag.get("podcasts"),itemId:"collection.tab-podcasts",to:"/collection/podcasts",uri:"spotify:app:collection:podcasts"}]:[],...e?[{title:o.ag.get("search.title.audiobooks"),itemId:"collection.tab-audiobooks",to:"/collection/audiobooks",uri:"spotify:app:collection:audiobooks"}]:[],{title:o.ag.get("artists"),itemId:"collection.tab-artists",to:"/collection/artists",uri:"spotify:app:collection:artists"},{title:o.ag.get("albums"),itemId:"collection.tab-albums",to:"/collection/albums",uri:"spotify:app:collection:albums"}].map(((e,t)=>{const a=e.uri;return{...e,handleClick:()=>{const e=n.linkFactory({position:t,uri:a}).hitUiNavigate({destination:a});s.logInteraction(e)}}}))),[t,e,s,n]);return(0,C.jsx)(at.w,{children:(0,C.jsx)(nt.n,{className:Z.Z.tabBar,links:i})})},st=a.lazy((async()=>await n.e(4246).then(n.bind(n,72401)))),it=()=>{const e=(0,r.v9)(m.rH),t=(0,i.W6)(d.uB);(0,u.z)("your_library");const{total:n}=V(),a=!!(n&&n>0);return(0,C.jsxs)("section",{className:"contentSpacing",children:[(0,C.jsx)(c.$,{children:o.ag.get("collection.page-title")}),(0,C.jsxs)(s.Z5,{children:[(0,C.jsx)(s.AW,{path:"artists",element:(0,C.jsx)(p.K,{pageId:l.Wg.YOURLIBRARY_ARTISTS,children:(0,C.jsx)(X,{})})}),(0,C.jsx)(s.AW,{path:"albums",element:(0,C.jsx)(p.K,{pageId:l.Wg.YOURLIBRARY_ALBUMS,children:(0,C.jsx)($,{})})}),(0,C.jsx)(s.AW,{path:"playlists",element:(0,C.jsx)(p.K,{pageId:l.Wg.YOURLIBRARY_PLAYLISTS,children:(0,C.jsx)(Ue,{})})}),e&&(0,C.jsx)(s.AW,{path:"podcasts",element:(0,C.jsx)(p.K,{pageId:l.Wg.YOURLIBRARY_SHOWS,children:(0,C.jsx)(et,{})})}),(t||a)&&(0,C.jsx)(s.AW,{path:"audiobooks",element:(0,C.jsx)(p.K,{pageId:l.Wg.YOURLIBRARY_AUDIOBOOKS,children:(0,C.jsx)(ne,{})})}),(0,C.jsx)(s.AW,{path:"music-downloads",element:(0,C.jsx)(p.K,{pageId:l.Wg.YOURLIBRARY_DOWNLOADS,children:(0,C.jsx)(st,{})})})]}),(0,C.jsx)(rt,{isAudiobooksEnabled:t||a})]})}},37221:(e,t,n)=>{n.d(t,{S:()=>i});var a=n(46069);const r="fRZRXRIV2YBCFLYgwDAr";var s=n(4637);const i=({iconSize:e=64,...t})=>(0,s.jsx)("div",{className:r,children:(0,s.jsx)(a._,{iconSize:e,...t,semanticColor:"textBrightAccent","aria-hidden":!0})})},52646:(e,t,n)=>{n.d(t,{e:()=>p});var a=n(99169);const r="(min-width: 0px)",s="(min-width: 0px) and (max-width: 767px)",i="(min-width: 768px)",l="(min-width: 768px) and (max-width: 1023px)",o="(min-width: 1024px)",c="(min-width: 1024px) and (max-width: 1279px)",u="(min-width: 1280px)",d="(min-width: 1280px) and (max-width: 1919px)",m="(min-width: 1920px)",p=()=>({isXS:(0,a.a)(r),isXSOnly:(0,a.a)(s),isSM:(0,a.a)(i),isSMOnly:(0,a.a)(l),isMD:(0,a.a)(o),isMDOnly:(0,a.a)(c),isLG:(0,a.a)(u),isLGOnly:(0,a.a)(d),isXL:(0,a.a)(m)})},91404:(e,t,n)=>{n.d(t,{P:()=>m});var a=n(59496),r=n(59689),s=n(32961),i=n(94136),l=n(77646),o=n(45947),c=n(96061),u=n(59295),d=n(82536);const m=(e,t)=>{const n=(()=>{const e=(0,o.W6)(d.Xf),t=(0,l.v9)(c.rZ),{locale:n,overrides:r}=(0,l.v9)(u.Gg),s=r?.country||t,i=r?.locale||n;return(0,a.useMemo)((()=>{const t=["album","playlist","artist","show","station","episode","merch","artist_concerts"];return e&&t.push("uri_link"),{country:s,locale:i,types:t.join(",")}}),[s,e,i])})(),{data:m,fetchNextPage:p}=(0,r.useInfiniteQuery)(["useView",e,n],(async({pageParam:t})=>void 0===t?async function(e,t){const{body:n}=await i.kO.getView(s.b.getInstance(),e,t);return n}(e,n):async function(e){const{body:t}=await i.TV.getGeneric(s.b.getInstance(),e);return t}(t)),{cacheTime:t?.cacheTime??18e5,staleTime:t?.staleTime??3e5,getNextPageParam:e=>e.content.next??void 0,getPreviousPageParam:e=>e.content.previous??void 0});return{view:(0,a.useMemo)((()=>m?.pages.reduce(((e,t)=>({...e,content:{...e.content,href:t.content.href,next:t.content.next,offset:t.content.offset,previous:t.content.previous,total:t.content.total,items:e.content.items.concat(t.content.items)}})))),[m?.pages]),getNextPage:p}}},62716:(e,t,n)=>{n.d(t,{I:()=>r});var a=n(45442);function r(){return(0,a.S)()[0]}},24044:(e,t,n)=>{n.d(t,{Z:()=>a});const a={header:"fLqEiE5HwKr9eFCbJgeu",tabBar:"tUg9tRrSVbtjHJ4WHnxw",AddToPlaylistIcon:"Hbwta1_s02edtdkgJ7qZ",emptyStateContainer:"nHGnfkVXCk9YYVitV6eu",adBarEnabled:"YV8aNrRwNwFaMozM_Bfo"}}}]);
//# sourceMappingURL=xpui-routes-collection.js.map