"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6450],{76656:(e,n,t)=>{t.r(n),t.d(n,{DISALLOWED_VIEWS:()=>Y,View:()=>z,default:()=>B});var s=t(59496),r=t(84875),a=t.n(r),i=t(90641),o=t(91351),l=t(80326),c=t(63061),u=t(69698),d=t(27874),m=t(89860),g=t(13034),h=t(15469),x=t(86417),v=t(18805),f=t(53965),p=t(99567),j=t(27293),b=t(31810),y=t(47807),w=t(23351),k=t(53083),N=t(33366),A=t(85388),I=t(3777);const P="EPMDgp7znILo0hvyirzv",D="noUm6pjQ6KWq7mVxYDor",C="PqnKjxzJ1Zvr9qKRlRbO",E="uuBQS9Ym_VPmAQrLhPQb";var L=t(4637);const M=e=>(0,N.W6)(A.sE)?(0,L.jsxs)(I.default,{to:e.uri,target:"_blank",className:P,children:[(0,L.jsx)("div",{className:D}),(0,L.jsx)(k.D,{className:C,as:"h2",variant:"alto",children:e.label}),(0,L.jsx)(k.D,{className:E,as:"p",variant:"mesto",children:e.tagline})]}):null,F=e=>(0,L.jsx)(s.Suspense,{fallback:null,children:(0,L.jsx)(M,{...e})}),q=e=>e.id?.startsWith("scc-corona"),W=({spaces:e,viewName:n,viewId:t,isAnonymous:r})=>{const a=(0,s.useCallback)(((e,n)=>{const s=((e,n)=>{let{uri:t}=e;return e.href.includes("https://api.spotify.com/v1/views/")&&(t=e.href.replace("https://api.spotify.com/v1/views/","spotify:genre:"),"hub-browse-grid"===n&&(t=t.replace(":view:",":genre:"))),t})(e,t);return(0,L.jsx)(b.q,{index:n,entity:{...e,uri:s}},e.href)}),[t]),i=(0,s.useCallback)(((e,n)=>(0,L.jsx)(w.JL,{value:"card",index:n,children:(0,L.jsx)(b.q,{index:n,entity:e})},e.uri||n)),[]),o=(0,s.useCallback)(((e,n)=>"link"===e.type?a(e,n):i(e,n)),[i,a]),l=(0,s.useCallback)((e=>!!q(e)||!((e=>"HEADER"===e.rendering)(e)||0===e.content.total||r&&"uniquely-yours-shelf"===e.id)),[r]);return e&&0!==e.length?e[0].content?(0,L.jsx)(L.Fragment,{children:e.filter(l).map(((e,n)=>{const s=e.content&&(0,h.p)((0,h.S)(e.href));if(q(e)){const n=e.content.items[0];return n&&n.name&&n.description&&n.href?(0,L.jsx)(F,{label:n.name,tagline:n.description,uri:n.href},"corona-banner"):null}return(0,L.jsx)(w.JL,{value:"headered-grid",index:n,children:(0,L.jsx)(y.q,{total:e.content.total,seeAllUri:s,pageId:t,title:e.name,tagline:e.tag_line||void 0,index:n,id:e.id,children:e.content.items.map(o)})},e.id)}))}):(0,L.jsx)(w.JL,{value:"headered-grid",children:(0,L.jsx)(y.q,{showAll:!0,title:n,total:e?.length||0,index:0,id:t??"spaces-see-all-grid",children:e?.map(o)})}):null};var S=t(15310);const _="XD65NhAD6ebYxMaW9cZZ",G="AJqEY1gblQDvIgjU0jAH",Q="Ft1cMGlqDsCbqmXQyeKN",R="zlBEnsMyvUhuHSEtst4Q",V="INYpiFRlwWIZ0vH30xW2",U=e=>"HEADER"===e.rendering,H=(e,n=[],t)=>{if(!e)return(0,L.jsx)("div",{className:V});const s=n.filter((e=>"background"===e.name));return(0,L.jsxs)(v.gF,{backgroundImages:s,backgroundColor:t,size:0===s.length?v.fR.SMALL:v.fR.DEFAULT,children:[(0,L.jsx)(f.W,{children:(0,L.jsx)(p.i,{text:e})}),(0,L.jsx)(v.sP,{children:(0,L.jsx)(v.xd,{children:e})})]})},T=e=>{const{title:n,images:t,backgroundColor:s}=e;return(0,L.jsx)(L.Fragment,{children:H(n,t,s)})},Y=["ginger-genre-affinity"],z=s.memo((function({viewData:e,viewId:n,backgroundColor:t,isFullyLoaded:r,isGenre:i,isAnonymous:d,getNextPage:h}){const f=e?.name,{spec:p,UBIFragment:b}=(0,g.fU)(o.createDesktopGenreEventFactory,{data:{identifier:n,uri:`spotify:genre:${n}`}}),y=(0,s.useCallback)((()=>Y.some((n=>e?.href?.includes(n)))),[e]),w=(0,s.useCallback)((()=>{if(!e)return;const n=y();r||n||h()}),[e,y,r,h]),k=(0,s.useMemo)((()=>{const{content:{items:n=[]}={}}=e||{},t=n.filter(U);return t.length>0?t[0]:null}),[e]),N=(0,s.useMemo)((()=>{const{name:n}=e||{};return k?k.name:t&&n}),[t,k,e]),A=(0,s.useMemo)((()=>i||Boolean(N)),[i,N]),I=(0,s.useMemo)((()=>!(!e||!Array.isArray(e.content.items))&&A),[A,e]),P=(0,v.oX)(n)?(0,L.jsx)(v.YD,{isAnonymous:d}):(0,L.jsx)(T,{title:k?.name||N,images:k?.images||[],backgroundColor:t}),D=e?.content.items,C=(0,s.useMemo)((()=>p.shelvesFactory()),[p]);return e?(0,L.jsxs)(L.Fragment,{children:[f?(0,L.jsx)(x.$,{children:f}):null,(0,L.jsx)(m.C,{onReachBottom:w,children:(0,L.jsxs)("section",{className:_,children:[I&&(0,L.jsx)(u.H,{color:t||null}),A?P:(0,L.jsx)("div",{className:V}),(0,L.jsxs)("div",{className:Q,children:[A&&P&&(0,L.jsx)(c.I,{backgroundColor:t}),(0,L.jsx)("div",{className:a()(G,"contentSpacing",{[R]:i}),children:(0,L.jsx)(b,{spec:C,children:(0,L.jsx)(W,{spaces:D,viewName:e.name,viewId:n,isAnonymous:d})})})]})]})})]}):(0,L.jsx)(j.h,{hasError:!1,errorMessage:l.ag.get("error.not_found.title.page")})})),B=s.memo((function({viewId:e}){const{isAnonymous:n}=(0,i.v9)(S.Gg),{view:t,getNextPage:s}=(0,d.P)(e),r=!t||null===t.content.next,a=e.endsWith("-page")?e:`${e}-page`,o=(0,i.v9)((e=>e.browse.allItemsStyle?.[a]?.color||"")),l=n=>n.viewId===e||"href"in n&&n.href===(0,h.p)(e),c=(0,i.v9)((e=>e?.browse?.browseAll?.items.some(l)||e?.browse?.topGenres?.items.some(l)||!!o));return(0,L.jsx)(z,{viewData:t,isFullyLoaded:r,viewId:e,backgroundColor:o,isGenre:c,isAnonymous:n,getNextPage:s})}))},27874:(e,n,t)=>{t.d(n,{P:()=>g});var s=t(59496),r=t(75387),a=t(39359),i=t(13870),o=t(90641),l=t(33366),c=t(80326),u=t(29977),d=t(15310),m=t(21654);const g=(e,n)=>{const t=(()=>{const e=(0,l.W6)(m.Xf),n=(0,o.v9)(u.rZ),{overrides:t}=(0,o.v9)(d.Gg),r=c.ag.getLocale(),a=t?.country||n,i=t?.locale||r;return(0,s.useMemo)((()=>{const n=["album","playlist","artist","show","station","episode","merch","artist_concerts"];return e&&n.push("uri_link"),{country:a,locale:i,types:n.join(",")}}),[a,e,i])})(),{data:g,fetchNextPage:h}=(0,r.useInfiniteQuery)(["useView",e,t],(async({pageParam:n})=>void 0===n?async function(e,n){const{body:t}=await i.kO.getView(a.b.getInstance(),e,n);return t}(e,t):async function(e){const{body:n}=await i.TV.getGeneric(a.b.getInstance(),e,"/useView/fetchNext/{next}");return n}(n)),{cacheTime:n?.cacheTime??18e5,staleTime:n?.staleTime??3e5,getNextPageParam:e=>e.content.next??void 0,getPreviousPageParam:e=>e.content.previous??void 0});return{view:(0,s.useMemo)((()=>g?.pages.reduce(((e,n)=>({...e,content:{...e.content,href:n.content.href,next:n.content.next,offset:n.content.offset,previous:n.content.previous,total:n.content.total,items:e.content.items.concat(n.content.items)}})))),[g?.pages]),getNextPage:h}}}}]);
//# sourceMappingURL=xpui-routes-view.js.map