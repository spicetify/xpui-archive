"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6450],{97932:(e,n,s)=>{s.d(n,{Z:()=>a});var r=s(55816),i=s(94427),t=s(4637);const a=({name:e,uri:n,images:s,isHero:a,testId:o,description:c,index:d,requestId:l,color:u})=>(0,t.jsx)(r.C,{index:d,featureIdentifier:"artist_concerts",headerText:e,uri:n,isPlayable:!1,renderCardImage:()=>(0,t.jsx)(i.x,{isHero:a,images:s,color:u}),renderSubHeaderContent:()=>(0,t.jsx)("span",{children:c||""}),testId:o,requestId:l})},99876:(e,n,s)=>{s.d(n,{q:()=>w});var r=s(63459),i=s(20861),t=s(55816),a=s(94427),o=s(1880),c=s(28650),d=s(4637);const l=({name:e="",uri:n="",images:s=[],isHero:r,onClick:i,testId:l,index:u})=>r?(0,d.jsx)(o.Z,{featureIdentifier:"unknown",index:u,onClick:i,headerText:e,uri:n,isPlayable:!1,renderCardImage:()=>(0,d.jsx)(a.x,{isHero:r,images:s}),renderSubHeaderContent:()=>(0,d.jsx)(c.k,{}),testId:l}):(0,d.jsx)(t.C,{index:u,featureIdentifier:"unknown",onClick:i,headerText:e,uri:n,isPlayable:!1,renderCardImage:()=>(0,d.jsx)(a.x,{isHero:r,images:s}),renderSubHeaderContent:()=>(0,d.jsx)("span",{}),testId:l});var u=s(71869),m=s(42597),g=s(45778),x=s(7812),h=s(97932),p=s(50714),f=s(17730),j=s(25078),I=s(17752),b=s(18360),v=s(24987),y=s(19856),C=s(40153);const w=({entity:e,index:n,testId:s,isHero:t=!1})=>{const a=((0,r.EC)(e.uri)||{}).type,o={testId:s,isHero:t,index:n,sharingInfo:e.sharingInfo};if(("string"==typeof e.uri||e.uri instanceof String)&&e.uri.startsWith("spotify:merch:"))return(0,d.jsx)(f.T,{...o,name:e.name,uri:e.uri,href:e.href,images:e.images,description:e.description});if(("string"==typeof e.uri||e.uri instanceof String)&&e.uri.startsWith("spotify:artist:")&&e.uri.endsWith(":concerts"))return(0,d.jsx)(h.Z,{...o,name:e.name,uri:e.uri,images:e.images,description:e.description});switch(a){case r.JM.ALBUM:case r.JM.COLLECTION_ALBUM:{const n=e;return(0,d.jsx)(g.r,{...o,name:n.name,uri:n.uri,images:n.images,artists:n.artists})}case r.JM.ARTIST:{const n=e;return(0,d.jsx)(x.I,{...o,name:n.name,uri:n.uri,images:n.images})}case r.JM.EPISODE:{const n=e;return(0,d.jsx)(p.B,{...o,name:n.name,uri:n.uri,images:n.images,showImages:n.show?.images||[],durationMilliseconds:n.duration_ms,releaseDate:n.release_date,resume_point:n.resume_point,description:n.description,isExplicit:n.explicit,is19PlusOnly:!!n.tags?.includes("MOGEF-19+")})}case r.JM.PLAYLIST:case r.JM.PLAYLIST_V2:{const n=e,s=n.owner?.display_name||e.owner?.displayName||"";return(0,d.jsx)(j.Z,{...o,name:n.name,uri:n.uri,images:n.images,description:n.description,authorName:s})}case r.JM.PROFILE:return(0,d.jsx)(I.P,{...o,name:e.name,uri:e.uri,images:e.images});case r.JM.SHOW:{const n=e;return(0,d.jsx)(v._,{...o,name:n.name,uri:n.uri,images:n.images,publisher:n.publisher,mediaType:{audio:m.E.AUDIO,video:m.E.VIDEO,mixed:m.E.MIXED}[n.media_type]??m.E.AUDIO})}case r.JM.APPLICATION:return(0,d.jsx)(i.s,{...o,name:e.name,uri:e.uri,images:e.images,description:e.description});case r.JM.RADIO:return(0,d.jsx)(b.I,{testId:s,index:n,name:e.name,uri:e.uri,images:e.images});case r.JM.TRACK:{const n=e;return(0,d.jsx)(y.G,{...o,name:n.name,uri:n.uri,images:n.album?.images||[],artists:n.artists,album:n.album,isExplicit:n.explicit,is19PlusOnly:n.tags?.includes("MOGEF-19+")})}case r.JM.COLLECTION:return e.uri.endsWith("your-episodes")?(0,d.jsx)(C.T,{index:n}):(0,d.jsx)(u.p,{index:n});default:return console.warn("Rendering a generic Card for unknown type:",a),(0,d.jsx)(l,{...o,name:e.name,uri:e.uri,images:e.images})}}},20861:(e,n,s)=>{s.d(n,{s:()=>d});var r=s(14950),i=s(55816),t=s(94427),a=s(1880),o=s(28650),c=s(4637);const d=({name:e,uri:n,images:s,isHero:d,onClick:l,testId:u,description:m,index:g,requestId:x,color:h})=>d?(0,c.jsx)(a.Z,{featureIdentifier:"genre",index:g,onClick:l,headerText:e,uri:n,isPlayable:!1,renderCardImage:()=>(0,c.jsx)(t.x,{isHero:d,images:s,color:h}),renderSubHeaderContent:()=>(0,c.jsx)(o.k,{children:m||r.ag.get("card.tag.genre")}),testId:u,requestId:x}):(0,c.jsx)(i.C,{index:g,featureIdentifier:"genre",onClick:l,headerText:e,uri:n,isPlayable:!1,renderCardImage:()=>(0,c.jsx)(t.x,{isHero:d,images:s,color:h}),renderSubHeaderContent:()=>(0,c.jsx)("span",{children:m||""}),testId:u,requestId:x})},17730:(e,n,s)=>{s.d(n,{T:()=>a});var r=s(55816),i=s(94427),t=s(4637);const a=({name:e,uri:n,href:s,images:a,isHero:o,testId:c,description:d,index:l,requestId:u,color:m})=>(0,t.jsx)(r.C,{index:l,featureIdentifier:"merch",onClick:()=>{window.open(s,"_blank")},headerText:e,uri:n,isPlayable:!1,renderCardImage:()=>(0,t.jsx)(i.x,{isHero:o,images:a,color:m}),renderSubHeaderContent:()=>(0,t.jsx)("span",{children:d||""}),testId:c,requestId:u,delegateNavigation:!0})},17752:(e,n,s)=>{s.d(n,{P:()=>g});var r=s(59496),i=s(14319),t=s(14950),a=s(16014),o=s(55816),c=s(94427),d=s(1880),l=s(28650),u=s(66495),m=s(4637);const g=r.memo((function(e){const{images:n,name:s,uri:g,onClick:x,isHero:h,testId:p,index:f,requestId:j,color:I}=e;let b;const v=(0,r.useCallback)((()=>(0,m.jsx)(c.x,{isCircular:!0,isHero:h,images:n,color:I,FallbackComponent:e=>(0,m.jsx)(i.a,{iconSize:64,...e})})),[I,n,h]),y=(0,r.useCallback)((()=>h?(0,m.jsx)(l.k,{children:t.ag.get("card.tag.profile")}):t.ag.get("card.tag.profile")),[h]);return b=h?(0,m.jsx)(d.Z,{index:f,onClick:x,headerText:s,featureIdentifier:"profile",uri:g,isPlayable:!1,renderCardImage:v,renderSubHeaderContent:y,testId:p,requestId:j}):(0,m.jsx)(o.C,{index:f,onClick:x,headerText:s,featureIdentifier:"profile",uri:g,isPlayable:!1,renderCardImage:v,renderSubHeaderContent:y,testId:p,requestId:j}),(0,m.jsx)(a._,{menu:(0,m.jsx)(u.I,{uri:g}),children:b})}))},3934:(e,n,s)=>{s.r(n),s.d(n,{DISALLOWED_VIEWS:()=>V,View:()=>B,default:()=>Q});var r=s(59496),i=s(84875),t=s.n(i),a=s(61740),o=s(93993),c=s(14950),d=s(97126),l=s(36607),u=s(22034),m=s(70782),g=s(882),x=s(69544),h=s(22915),p=s(54353),f=s(81555),j=s(80206),I=s(30283),b=s(58309),v=s(99876),y=s(95495),C=s(74599),w=s(46810),k=s(6948),P=s(73471),A=s(89396);const E="EPMDgp7znILo0hvyirzv",M="noUm6pjQ6KWq7mVxYDor",H="PqnKjxzJ1Zvr9qKRlRbO",N="uuBQS9Ym_VPmAQrLhPQb";var T=s(4637);const L=e=>(0,k.W6)(P.sE)?(0,T.jsxs)(A.default,{to:e.uri,target:"_blank",className:E,children:[(0,T.jsx)("div",{className:M}),(0,T.jsx)(w.D,{className:H,as:"h2",variant:"alto",children:e.label}),(0,T.jsx)(w.D,{className:N,as:"p",variant:"mesto",children:e.tagline})]}):null,S=e=>(0,T.jsx)(r.Suspense,{fallback:null,children:(0,T.jsx)(L,{...e})}),D=e=>e.id?.startsWith("scc-corona"),q=({spaces:e,viewName:n,viewId:s,isAnonymous:i})=>{const t=(0,r.useCallback)(((e,n)=>{const r=((e,n)=>{let{uri:s}=e;return e.href.includes("https://api.spotify.com/v1/views/")&&(s=e.href.replace("https://api.spotify.com/v1/views/","spotify:genre:"),"hub-browse-grid"===n&&(s=s.replace(":view:",":genre:"))),s})(e,s);return(0,T.jsx)(v.q,{index:n,entity:{...e,uri:r}},e.href)}),[s]),a=(0,r.useCallback)(((e,n)=>(0,T.jsx)(C.JL,{value:"card",index:n,children:(0,T.jsx)(v.q,{index:n,entity:e})},e.uri||n)),[]),o=(0,r.useCallback)(((e,n)=>"link"===e.type?t(e,n):a(e,n)),[a,t]),c=(0,r.useCallback)((e=>!!D(e)||!((e=>"HEADER"===e.rendering)(e)||0===e.content.total||i&&"uniquely-yours-shelf"===e.id)),[i]);return e&&0!==e.length?e[0].content?(0,T.jsx)(T.Fragment,{children:e.filter(c).map(((e,n)=>{const r=e.content&&(0,h.p)((0,h.S)(e.href));if(D(e)){const n=e.content.items[0];return n&&n.name&&n.description&&n.href?(0,T.jsx)(S,{label:n.name,tagline:n.description,uri:n.href},"corona-banner"):null}return(0,T.jsx)(C.JL,{value:"headered-grid",index:n,children:(0,T.jsx)(y.q,{total:e.content.total,seeAllUri:r,pageId:s,title:e.name,tagline:e.tag_line||void 0,index:n,id:e.id,children:e.content.items.map(o)})},e.id)}))}):(0,T.jsx)(C.JL,{value:"headered-grid",children:(0,T.jsx)(y.q,{showAll:!0,title:n,total:e?.length||0,index:0,id:s??"spaces-see-all-grid",children:e?.map(o)})}):null};var _=s(470);const O="XD65NhAD6ebYxMaW9cZZ",J="AJqEY1gblQDvIgjU0jAH",F="Ft1cMGlqDsCbqmXQyeKN",W="zlBEnsMyvUhuHSEtst4Q",R="INYpiFRlwWIZ0vH30xW2",U=e=>"HEADER"===e.rendering,G=(e,n=[],s)=>{if(!e)return(0,T.jsx)("div",{className:R});const r=n.filter((e=>"background"===e.name));return(0,T.jsxs)(f.gF,{backgroundImages:r,backgroundColor:s,size:0===r.length?f.fR.SMALL:f.fR.DEFAULT,children:[(0,T.jsx)(j.W,{children:(0,T.jsx)(I.i,{text:e})}),(0,T.jsx)(f.sP,{children:(0,T.jsx)(f.xd,{children:e})})]})},Z=e=>{const{title:n,images:s,backgroundColor:r}=e;return(0,T.jsx)(T.Fragment,{children:G(n,s,r)})},V=["ginger-genre-affinity"],B=r.memo((function({viewData:e,viewId:n,backgroundColor:s,isFullyLoaded:i,isGenre:a,isAnonymous:u,getNextPage:h}){const j=e?.name,{spec:I,UBIFragment:v}=(0,x.fU)(o.createDesktopGenreEventFactory,{data:{identifier:n,uri:`spotify:genre:${n}`}}),y=(0,r.useCallback)((()=>V.some((n=>e?.href?.includes(n)))),[e]),C=(0,r.useCallback)((()=>{if(!e)return;const n=y();i||n||h()}),[e,y,i,h]),w=(0,r.useMemo)((()=>{const{content:{items:n=[]}={}}=e||{},s=n.filter(U);return s.length>0?s[0]:null}),[e]),k=(0,r.useMemo)((()=>{const{name:n}=e||{};return w?w.name:s&&n}),[s,w,e]),P=(0,r.useMemo)((()=>a||Boolean(k)),[a,k]),A=(0,r.useMemo)((()=>!(!e||!Array.isArray(e.content.items))&&P),[P,e]),E=(0,f.oX)(n)?(0,T.jsx)(f.YD,{isAnonymous:u}):(0,T.jsx)(Z,{title:w?.name||k,images:w?.images||[],backgroundColor:s}),M=e?.content.items,H=(0,r.useMemo)((()=>I.shelvesFactory()),[I]);return e?(0,T.jsxs)(T.Fragment,{children:[j?(0,T.jsx)(p.$,{children:(0,g.cT)({genreName:j})}):null,(0,T.jsx)(m.C,{onReachBottom:C,children:(0,T.jsxs)("section",{className:O,children:[A&&(0,T.jsx)(l.H,{color:s||null}),P?E:(0,T.jsx)("div",{className:R}),(0,T.jsxs)("div",{className:F,children:[P&&E&&(0,T.jsx)(d.I,{backgroundColor:s}),(0,T.jsx)("div",{className:t()(J,"contentSpacing",{[W]:a}),children:(0,T.jsx)(v,{spec:H,children:(0,T.jsx)(q,{spaces:M,viewName:e.name,viewId:n,isAnonymous:u})})})]})]})})]}):(0,T.jsx)(b.h,{hasError:!1,errorMessage:c.ag.get("error.not_found.title.page")})})),Q=r.memo((function({viewId:e}){const{isAnonymous:n}=(0,a.v9)(_.Gg),{view:s,getNextPage:r}=(0,u.P)(e),i=!s||null===s.content.next,t=e.endsWith("-page")?e:`${e}-page`,o=(0,a.v9)((e=>e.browse.allItemsStyle?.[t]?.color||"")),c=n=>n.viewId===e||"href"in n&&n.href===(0,h.p)(e),d=(0,a.v9)((e=>e?.browse?.browseAll?.items.some(c)||e?.browse?.topGenres?.items.some(c)||!!o));return(0,T.jsx)(B,{viewData:s,isFullyLoaded:i,viewId:e,backgroundColor:o,isGenre:d,isAnonymous:n,getNextPage:r})}))},22034:(e,n,s)=>{s.d(n,{P:()=>g});var r=s(59496),i=s(9102),t=s(81607),a=s(37077),o=s(61740),c=s(6948),d=s(14950),l=s(77803),u=s(470),m=s(81091);const g=(e,n)=>{const s=(()=>{const e=(0,c.W6)(m.Xf),n=(0,o.v9)(l.rZ),{overrides:s}=(0,o.v9)(u.Gg),i=d.ag.getLocale(),t=s?.country||n,a=s?.locale||i;return(0,r.useMemo)((()=>{const n=["album","playlist","artist","show","station","episode","merch","artist_concerts"];return e&&n.push("uri_link"),{country:t,locale:a,types:n.join(",")}}),[t,e,a])})(),{data:g,fetchNextPage:x}=(0,i.useInfiniteQuery)(["useView",e,s],(async({pageParam:n})=>void 0===n?async function(e,n){const{body:s}=await a.kO.getView(t.b.getInstance(),e,n);return s}(e,s):async function(e){const n=new URL(e),s=n.origin,r=n.pathname,i=Object.fromEntries(n.searchParams.entries()),{body:o}=await a.TV.getGeneric(t.b.getInstance(),s,r,i,"/useView/fetchNext/{next}");return o}(n)),{cacheTime:n?.cacheTime??18e5,staleTime:n?.staleTime??3e5,getNextPageParam:e=>e.content.next??void 0,getPreviousPageParam:e=>e.content.previous??void 0});return{view:(0,r.useMemo)((()=>g?.pages.reduce(((e,n)=>({...e,content:{...e.content,href:n.content.href,next:n.content.next,offset:n.content.offset,previous:n.content.previous,total:n.content.total,items:e.content.items.concat(n.content.items)}})))),[g?.pages]),getNextPage:x}}}}]);
//# sourceMappingURL=xpui-routes-view.js.map