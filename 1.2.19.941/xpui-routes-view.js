"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6450],{86099:(e,n,s)=>{s.d(n,{Z:()=>a});var r=s(14090),i=s(85259),t=s(4637);const a=({name:e,uri:n,images:s,isHero:a,testId:o,description:c,index:l,requestId:d,color:u})=>(0,t.jsx)(r.C,{index:l,featureIdentifier:"artist_concerts",headerText:e,uri:n,isPlayable:!1,renderCardImage:()=>(0,t.jsx)(i.x,{isHero:a,images:s,color:u}),renderSubHeaderContent:()=>(0,t.jsx)("span",{children:c||""}),testId:o,requestId:d})},18018:(e,n,s)=>{s.d(n,{q:()=>k});var r=s(14887),i=s(56813),t=s(14090),a=s(85259),o=s(25462),c=s(31101),l=s(4637);const d=({name:e="",uri:n="",images:s=[],isHero:r,onClick:i,testId:d,index:u})=>r?(0,l.jsx)(o.Z,{featureIdentifier:"unknown",index:u,onClick:i,headerText:e,uri:n,isPlayable:!1,renderCardImage:()=>(0,l.jsx)(a.x,{isHero:r,images:s}),renderSubHeaderContent:()=>(0,l.jsx)(c.k,{}),testId:d}):(0,l.jsx)(t.C,{index:u,featureIdentifier:"unknown",onClick:i,headerText:e,uri:n,isPlayable:!1,renderCardImage:()=>(0,l.jsx)(a.x,{isHero:r,images:s}),renderSubHeaderContent:()=>(0,l.jsx)("span",{}),testId:d});var u=s(9739),m=s(43228),g=s(34211),x=s(53778),h=s(86099),p=s(91274),f=s(14964),j=s(78384),I=s(75e3),b=s(90967),v=s(13977),y=s(79053),C=s(65059);const k=({entity:e,index:n,testId:s,isHero:t=!1})=>{const a=((0,r.EC)(e.uri)||{}).type,o={testId:s,isHero:t,index:n,sharingInfo:e.sharingInfo};if(("string"==typeof e.uri||e.uri instanceof String)&&e.uri.startsWith("spotify:merch:"))return(0,l.jsx)(f.T,{...o,name:e.name,uri:e.uri,href:e.href,images:e.images,price:e.price});if(("string"==typeof e.uri||e.uri instanceof String)&&e.uri.startsWith("spotify:artist:")&&e.uri.endsWith(":concerts"))return(0,l.jsx)(h.Z,{...o,name:e.name,uri:e.uri,images:e.images,description:e.description});switch(a){case r.JM.ALBUM:case r.JM.COLLECTION_ALBUM:{const n=e;return(0,l.jsx)(g.r,{...o,name:n.name,uri:n.uri,images:n.images,artists:n.artists})}case r.JM.ARTIST:{const n=e;return(0,l.jsx)(x.I,{...o,name:n.name,uri:n.uri,images:n.images})}case r.JM.EPISODE:{const n=e;return(0,l.jsx)(p.B,{...o,name:n.name,uri:n.uri,images:n.images,showImages:n.show?.images||[],durationMilliseconds:n.duration_ms,releaseDate:n.release_date,resume_point:n.resume_point,description:n.description,isExplicit:n.explicit,is19PlusOnly:!!n.tags?.includes("MOGEF-19+")})}case r.JM.PLAYLIST:case r.JM.PLAYLIST_V2:{const n=e,s=n.owner?.display_name||e.owner?.displayName||"";return(0,l.jsx)(j.Z,{...o,name:n.name,uri:n.uri,images:n.images,description:n.description,authorName:s})}case r.JM.PROFILE:return(0,l.jsx)(I.P,{...o,name:e.name,uri:e.uri,images:e.images});case r.JM.SHOW:{const n=e;return(0,l.jsx)(v._,{...o,name:n.name,uri:n.uri,images:n.images,publisher:n.publisher,mediaType:{audio:m.E.AUDIO,video:m.E.VIDEO,mixed:m.E.MIXED}[n.media_type]??m.E.AUDIO})}case r.JM.APPLICATION:return(0,l.jsx)(i.s,{...o,name:e.name,uri:e.uri,images:e.images,description:e.description});case r.JM.RADIO:return(0,l.jsx)(b.I,{testId:s,index:n,name:e.name,uri:e.uri,images:e.images});case r.JM.TRACK:{const n=e;return(0,l.jsx)(y.G,{...o,name:n.name,uri:n.uri,images:n.album?.images||[],artists:n.artists,album:n.album,isExplicit:n.explicit,is19PlusOnly:n.tags?.includes("MOGEF-19+")})}case r.JM.COLLECTION:return e.uri.endsWith("your-episodes")?(0,l.jsx)(C.T,{index:n}):(0,l.jsx)(u.p,{index:n});default:return console.warn("Rendering a generic Card for unknown type:",a),(0,l.jsx)(d,{...o,name:e.name,uri:e.uri,images:e.images})}}},56813:(e,n,s)=>{s.d(n,{s:()=>l});var r=s(30099),i=s(14090),t=s(85259),a=s(25462),o=s(31101),c=s(4637);const l=({name:e,uri:n,images:s,isHero:l,onClick:d,testId:u,description:m,index:g,requestId:x,color:h})=>l?(0,c.jsx)(a.Z,{featureIdentifier:"genre",index:g,onClick:d,headerText:e,uri:n,isPlayable:!1,renderCardImage:()=>(0,c.jsx)(t.x,{isHero:l,images:s,color:h}),renderSubHeaderContent:()=>(0,c.jsx)(o.k,{children:m||r.ag.get("card.tag.genre")}),testId:u,requestId:x}):(0,c.jsx)(i.C,{index:g,featureIdentifier:"genre",onClick:d,headerText:e,uri:n,isPlayable:!1,renderCardImage:()=>(0,c.jsx)(t.x,{isHero:l,images:s,color:h}),renderSubHeaderContent:()=>(0,c.jsx)("span",{children:m||""}),testId:u,requestId:x})},14964:(e,n,s)=>{s.d(n,{T:()=>c});var r=s(52309),i=s(9492),t=s(34046),a=s(85259),o=s(4637);const c=({name:e,uri:n,href:s,images:c,index:l,isHero:d,price:u,testId:m,color:g})=>{const{spec:x,logger:h}=(0,t.fU)(i.I,{data:{position:l,uri:n,reason:""}});return(0,o.jsx)(r.Z,{id:n,"data-testid":m,title:e,media:(0,o.jsx)(a.x,{isHero:d,images:c,color:g}),onClick:()=>{h.logInteraction(x.cardLinkFactory({position:0}).hitNavigateToExternalUri({destination:s})),window.open(s,"_blank")},size:"sm",subtitle:u},n)}},75e3:(e,n,s)=>{s.d(n,{P:()=>g});var r=s(59496),i=s(72481),t=s(30099),a=s(70231),o=s(14090),c=s(85259),l=s(25462),d=s(31101),u=s(18858),m=s(4637);const g=r.memo((function(e){const{images:n,name:s,uri:g,onClick:x,isHero:h,testId:p,index:f,requestId:j,color:I}=e;let b;const v=(0,r.useCallback)((()=>(0,m.jsx)(c.x,{isCircular:!0,isHero:h,images:n,color:I,FallbackComponent:e=>(0,m.jsx)(i.a,{iconSize:64,...e})})),[I,n,h]),y=(0,r.useCallback)((()=>h?(0,m.jsx)(d.k,{children:t.ag.get("card.tag.profile")}):t.ag.get("card.tag.profile")),[h]);return b=h?(0,m.jsx)(l.Z,{index:f,onClick:x,headerText:s,featureIdentifier:"profile",uri:g,isPlayable:!1,renderCardImage:v,renderSubHeaderContent:y,testId:p,requestId:j}):(0,m.jsx)(o.C,{index:f,onClick:x,headerText:s,featureIdentifier:"profile",uri:g,isPlayable:!1,renderCardImage:v,renderSubHeaderContent:y,testId:p,requestId:j}),(0,m.jsx)(a._,{menu:(0,m.jsx)(u.I,{uri:g}),children:b})}))},17737:(e,n,s)=>{s.r(n),s.d(n,{DISALLOWED_VIEWS:()=>V,View:()=>Q,default:()=>B});var r=s(59496),i=s(84875),t=s.n(i),a=s(83792),o=s(25584),c=s(30099),l=s(47068),d=s(65671),u=s(17144),m=s(75170),g=s(24966),x=s(34046),h=s(87954),p=s(70304),f=s(7018),j=s(20456),I=s(29915),b=s(75132),v=s(18018),y=s(12463),C=s(15644),k=s(51697),w=s(9990),P=s(47948),E=s(67490);const A="EPMDgp7znILo0hvyirzv",M="noUm6pjQ6KWq7mVxYDor",H="PqnKjxzJ1Zvr9qKRlRbO",N="uuBQS9Ym_VPmAQrLhPQb";var L=s(4637);const T=e=>(0,w.W6)(P.sEQ)?(0,L.jsxs)(E.default,{to:e.uri,target:"_blank",className:A,children:[(0,L.jsx)("div",{className:M}),(0,L.jsx)(k.D,{className:H,as:"h2",variant:"alto",children:e.label}),(0,L.jsx)(k.D,{className:N,as:"p",variant:"mesto",children:e.tagline})]}):null,D=e=>(0,L.jsx)(r.Suspense,{fallback:null,children:(0,L.jsx)(T,{...e})}),S=e=>e.id?.startsWith("scc-corona"),_=({spaces:e,viewName:n,viewId:s,isAnonymous:i})=>{const t=(0,r.useCallback)(((e,n)=>{const r=((e,n)=>{let{uri:s}=e;return e.href.includes("https://api.spotify.com/v1/views/")&&(s=e.href.replace("https://api.spotify.com/v1/views/","spotify:genre:"),"hub-browse-grid"===n&&(s=s.replace(":view:",":genre:"))),s})(e,s);return(0,L.jsx)(v.q,{index:n,entity:{...e,uri:r}},e.href)}),[s]),a=(0,r.useCallback)(((e,n)=>(0,L.jsx)(C.JL,{value:"card",index:n,children:(0,L.jsx)(v.q,{index:n,entity:e})},e.uri||n)),[]),o=(0,r.useCallback)(((e,n)=>"link"===e.type?t(e,n):a(e,n)),[a,t]),c=(0,r.useCallback)((e=>!!S(e)||!((e=>"HEADER"===e.rendering)(e)||0===e.content.total||i&&"uniquely-yours-shelf"===e.id)),[i]);return e&&0!==e.length?e[0].content?(0,L.jsx)(L.Fragment,{children:e.filter(c).map(((e,n)=>{const r=e.content&&(0,h.p)((0,h.S)(e.href));if(S(e)){const n=e.content.items[0];return n&&n.name&&n.description&&n.href?(0,L.jsx)(D,{label:n.name,tagline:n.description,uri:n.href},"corona-banner"):null}return(0,L.jsx)(C.JL,{value:"headered-grid",index:n,children:(0,L.jsx)(y.q,{total:e.content.total,seeAllUri:r,pageId:s,title:e.name,tagline:e.tag_line||void 0,index:n,id:e.id,children:e.content.items.map(o)})},e.id)}))}):(0,L.jsx)(C.JL,{value:"headered-grid",children:(0,L.jsx)(y.q,{showAll:!0,title:n,total:e?.length||0,index:0,id:s??"spaces-see-all-grid",children:e?.map(o)})}):null};var q=s(7554);const O="XD65NhAD6ebYxMaW9cZZ",F="AJqEY1gblQDvIgjU0jAH",J="Ft1cMGlqDsCbqmXQyeKN",W="zlBEnsMyvUhuHSEtst4Q",R="INYpiFRlwWIZ0vH30xW2",U=e=>"HEADER"===e.rendering,Z=(e,n=[],s)=>{if(!e)return(0,L.jsx)("div",{className:R});const r=n.filter((e=>"background"===e.name));return(0,L.jsxs)(f.gF,{backgroundImages:r,backgroundColor:s,size:0===r.length?f.fR.SMALL:f.fR.DEFAULT,children:[(0,L.jsx)(j.W,{children:(0,L.jsx)(I.i,{text:e})}),(0,L.jsx)(f.sP,{children:(0,L.jsx)(f.xd,{children:e})})]})},G=e=>{const{title:n,images:s,backgroundColor:r}=e;return(0,L.jsx)(L.Fragment,{children:Z(n,s,r)})},V=["ginger-genre-affinity"],Q=r.memo((function({viewData:e,viewId:n,backgroundColor:s,isFullyLoaded:i,isGenre:a,isAnonymous:u,getNextPage:h}){const j=e?.name,{spec:I,UBIFragment:v}=(0,x.fU)(o.createDesktopGenreEventFactory,{data:{identifier:n,uri:`spotify:genre:${n}`}}),y=(0,r.useCallback)((()=>V.some((n=>e?.href?.includes(n)))),[e]),C=(0,r.useCallback)((()=>{if(!e)return;const n=y();i||n||h()}),[e,y,i,h]),k=(0,r.useMemo)((()=>{const{content:{items:n=[]}={}}=e||{},s=n.filter(U);return s.length>0?s[0]:null}),[e]),w=(0,r.useMemo)((()=>{const{name:n}=e||{};return k?k.name:s&&n}),[s,k,e]),P=(0,r.useMemo)((()=>a||Boolean(w)),[a,w]),E=(0,r.useMemo)((()=>!(!e||!Array.isArray(e.content.items))&&P),[P,e]),A=(0,f.oX)(n)?(0,L.jsx)(f.YD,{isAnonymous:u}):(0,L.jsx)(G,{title:k?.name||w,images:k?.images||[],backgroundColor:s}),M=e?.content.items,H=(0,r.useMemo)((()=>I.shelvesFactory()),[I]);return e?(0,L.jsxs)(L.Fragment,{children:[j?(0,L.jsx)(p.$,{children:(0,g.cT)({genreName:j})}):null,(0,L.jsx)(m.C,{onReachBottom:C,children:(0,L.jsxs)("section",{className:O,children:[E&&(0,L.jsx)(d.H,{color:s||null}),P?A:(0,L.jsx)("div",{className:R}),(0,L.jsxs)("div",{className:J,children:[P&&A&&(0,L.jsx)(l.I,{backgroundColor:s}),(0,L.jsx)("div",{className:t()(F,"contentSpacing",{[W]:a}),children:(0,L.jsx)(v,{spec:H,children:(0,L.jsx)(_,{spaces:M,viewName:e.name,viewId:n,isAnonymous:u})})})]})]})})]}):(0,L.jsx)(b.h,{hasError:!1,errorMessage:c.ag.get("error.not_found.title.page")})})),B=r.memo((function({viewId:e}){const{isAnonymous:n}=(0,a.v9)(q.Gg),{view:s,getNextPage:r}=(0,u.P)(e),i=!s||null===s.content.next,t=e.endsWith("-page")?e:`${e}-page`,o=(0,a.v9)((e=>e.browse.allItemsStyle?.[t]?.color||"")),c=n=>n.viewId===e||"href"in n&&n.href===(0,h.p)(e),l=(0,a.v9)((e=>e?.browse?.browseAll?.items.some(c)||e?.browse?.topGenres?.items.some(c)||!!o));return(0,L.jsx)(Q,{viewData:s,isFullyLoaded:i,viewId:e,backgroundColor:o,isGenre:l,isAnonymous:n,getNextPage:r})}))},17144:(e,n,s)=>{s.d(n,{P:()=>g});var r=s(59496),i=s(9102),t=s(90326),a=s(70326),o=s(83792),c=s(9990),l=s(30099),d=s(60168),u=s(7554),m=s(46441);const g=(e,n)=>{const s=(()=>{const e=(0,c.W6)(m.Xf),n=(0,o.v9)(d.rZ),{overrides:s}=(0,o.v9)(u.Gg),i=l.ag.getLocale(),t=s?.country||n,a=s?.locale||i;return(0,r.useMemo)((()=>{const n=["album","playlist","artist","show","station","episode","merch","artist_concerts"];return e&&n.push("uri_link"),{country:t,locale:a,types:n.join(",")}}),[t,e,a])})(),{data:g,fetchNextPage:x}=(0,i.useInfiniteQuery)(["useView",e,s],(async({pageParam:n})=>void 0===n?async function(e,n){const{body:s}=await a.kO.getView(t.b.getInstance(),e,n);return s}(e,s):async function(e){const n=new URL(e),s=n.origin,r=n.pathname,i=Object.fromEntries(n.searchParams.entries()),{body:o}=await a.TV.getGeneric(t.b.getInstance(),s,r,i,"/useView/fetchNext/{next}");return o}(n)),{cacheTime:n?.cacheTime??18e5,staleTime:n?.staleTime??3e5,getNextPageParam:e=>e.content.next??void 0,getPreviousPageParam:e=>e.content.previous??void 0});return{view:(0,r.useMemo)((()=>g?.pages.reduce(((e,n)=>({...e,content:{...e.content,href:n.content.href,next:n.content.next,offset:n.content.offset,previous:n.content.previous,total:n.content.total,items:e.content.items.concat(n.content.items)}})))),[g?.pages]),getNextPage:x}}}}]);
//# sourceMappingURL=xpui-routes-view.js.map