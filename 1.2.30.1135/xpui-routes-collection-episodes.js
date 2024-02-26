"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1289],{97133:(e,t,a)=>{a.r(t),a.d(t,{default:()=>be});a(63961),a(21164);var l=a(50959),i=a(22902),r=a(10992),s=a(18953),n=a(30760),o=a(51769),A=a(99634),c=a(42938),u=a(99907),d=a(15852);let E=function(e){return e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER",e}({});const g={"show-alphabetical":E.SHOW_ALPHABETICAL,"book-alphabetical":E.BOOK_ALPHABETICAL,"episode-alphabetical":E.EPISODE_ALPHABETICAL,"playlist-alphabetical":E.PLAYLIST_ALPHABETICAL,"album-alphabetical":E.ALBUM_ALPHABETICAL,"recently-added":E.ADDED_AT,"creator-name":E.CREATOR_NAME,"creator-name-alphabetical":E.CREATOR_NAME_ALPHABETICAL,"album-creator-name":E.ALBUM_CREATOR_NAME,"recently-played":E.RECENTLY_PLAYED,"playlist-most-relevant":E.MOST_RELEVANT,"playlist-custom-order":E.CUSTOM_ORDER},L={[E.RECENTLY_PLAYED]:{key:"recently-played",get value(){return r.ag.get("collection.sort.recently-played")}},[E.ADDED_AT]:{key:"recently-added",get value(){return r.ag.get("collection.sort.recently-added")}},[E.SHOW_ALPHABETICAL]:{key:"show-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[E.BOOK_ALPHABETICAL]:{key:"book-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[E.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[E.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[E.ALBUM_CREATOR_NAME]:{key:"album-creator-name",get value(){return r.ag.get("collection.sort.creator")}},[E.CREATOR_NAME]:{key:"creator-name",get value(){return r.ag.get("collection.sort.creator")}},[E.CREATOR_NAME_ALPHABETICAL]:{key:"creator-name-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[E.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[E.MOST_RELEVANT]:{key:"playlist-most-relevant",get value(){return r.ag.get("collection.sort.most-relevant")}},[E.CUSTOM_ORDER]:{key:"playlist-custom-order",get value(){return r.ag.get("collection.sort.custom-order")}}};E.ADDED_AT,E.ALBUM_ALPHABETICAL,E.CREATOR_NAME,E.ADDED_AT,u.lY.ADDED_AT,u.As.DESC,E.ALBUM_ALPHABETICAL,u.lY.NAME,u.As.ASC,E.CREATOR_NAME,u.lY.ARTIST_NAME,u.As.ASC;E.ADDED_AT,E.CREATOR_NAME_ALPHABETICAL,E.ADDED_AT,u.hx.ADDED_AT,u.As.DESC,E.CREATOR_NAME_ALPHABETICAL,u.hx.NAME,u.As.ASC;E.ADDED_AT,E.SHOW_ALPHABETICAL,E.ADDED_AT,u.aW.ADDED_AT,u.As.DESC,E.SHOW_ALPHABETICAL,u.aW.NAME,u.As.ASC;E.ADDED_AT,E.BOOK_ALPHABETICAL,E.ADDED_AT,u.VN.ADDED_AT,E.BOOK_ALPHABETICAL,u.VN.NAME;E.MOST_RELEVANT,E.RECENTLY_PLAYED,E.ADDED_AT,E.PLAYLIST_ALPHABETICAL,E.CUSTOM_ORDER,E.ADDED_AT,d.bD.ADDED_AT,d.As.DESC,E.RECENTLY_PLAYED,d.bD.RECENTLY_PLAYED,d.As.ASC,E.PLAYLIST_ALPHABETICAL,d.bD.NAME,d.As.ASC,E.MOST_RELEVANT,d.bD.RELEVANCE,d.As.DESC,E.CUSTOM_ORDER;E.ADDED_AT,E.ADDED_AT,E.ADDED_AT,E.MOST_RELEVANT,E.ADDED_AT;var T=a(11527);const D=(0,l.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:E.ADDED_AT}),h=l.memo((function({uri:e,children:t,defaultSortOption:a}){return(0,T.jsx)(c.r,{uri:e,defaultState:a,sortContext:D,children:t})}));var C=a(73745),y=a(90818),p=a(92808),_=a(79287),m=a(8495),P=a(9705),b=a(88724),x=a(95559),S=a(31661),f=a(81085),O=(a(38910),a(17207));const I=l.memo((function({sortOptions:e,onSort:t}){const{sortState:a,setSortState:i}=(0,l.useContext)(D),r=(0,l.useCallback)((e=>{const a=g[e];t?.(a),i(a)}),[t,i]),s=e.map((e=>L[e])),n=L[a];return(0,T.jsx)(O.A,{options:s,onSelect:r,selected:n})})),R="VuUpAVlUW_OfMfOcDEID",N=l.memo((function({canSort:e,canFilter:t,filterPlaceholder:a,sortOptions:i}){const{spec:r,logger:s}=(0,f.fU)(x.createDesktopSearchBarEventFactory,{}),n=(0,l.useCallback)((()=>{s.logInteraction(r.filterFieldFactory().keyStrokeFilter())}),[s,r]),o=(0,l.useCallback)((()=>{s.logInteraction(r.filterFieldFactory().hitClearFilter())}),[s,r]);return(0,T.jsxs)("div",{className:R,children:[t?(0,T.jsx)(l.Suspense,{fallback:null,children:(0,T.jsx)(S.K,{placeholder:a,onFilter:n,onClear:o})}):null,e?(0,T.jsx)(I,{sortOptions:i}):null]})}));var M=a(44250);const k={[u.yW.NAME]:o.hI.TITLE,[u.yW.SHOW_NAME]:o.hI.SHOW,[u.yW.ADDED_AT]:o.hI.ADDED_AT},j=[E.ADDED_AT,E.CREATOR_NAME,E.EPISODE_ALPHABETICAL],B={[E.ADDED_AT]:{field:u.yW.ADDED_AT,order:u.As.DESC},[E.CREATOR_NAME]:{field:u.yW.SHOW_NAME,order:u.As.ASC},[E.EPISODE_ALPHABETICAL]:{field:u.yW.NAME,order:u.As.ASC}};const H=e=>{if(function(e){return j.includes(e)}(e))return B[e]},v=e=>{if(!j.includes(e))return;const t=H(e);if(!t?.field)return;const a=k[t.field];if(!a)return;return o.Vd[a].map((e=>t.order?`${e} ${t.order}`:e)).join(",")};var U=a(71932);const w="m9xwK71Ieq9cySIq4FAP",W="PkEMTu8sGqJeQWJ7HvEs",Y="DbH2KkRA8yVWWpXGaNSW",F=({metadata:e,canSort:t,backgroundColor:a,isPlaying:l,isOnline:i,togglePlay:s})=>{const n=(0,M.y)(),{uri:o,name:A}=e,c=e.totalLength>0,u=(0,U.j)();return(0,T.jsx)(P.o,{backgroundColor:a,children:(0,T.jsxs)(P.F,{children:[c&&(0,T.jsx)(b.$,{onClick:()=>s(),isPlaying:l,size:u,uri:o,disabled:!i,ariaPlayLabel:r.ag.get("playlist.a11y.play",A),ariaPauseLabel:r.ag.get("playlist.a11y.pause",A)}),t&&(0,T.jsx)("div",{className:Y,children:(0,T.jsx)(N,{canSort:n.getCapabilities().canSort,canFilter:n.getCapabilities().canFilter,filterPlaceholder:r.ag.get("playlist.search_in_playlist"),sortOptions:j})})]})})};var V=a(71944),K=a(453),$=a(29037),z=a(12737),q=a(33325),G=a(90830),J=a(76210),X=a(80323),Q=a(79625);const Z="p6DKqBcwmVtxmHt8ju43",ee="_OxEpxzAgJiTENfolVUN";var te=a(93019),ae=a(48439),le=a(22215),ie=a(85427),re=a(75744),se=a(93688),ne=a(92718),oe=a(73298),Ae=a(63691),ce=a(49504),ue=a(73196);const de={small:64,standard:300,large:640,xlarge:1024},Ee=l.memo((function({index:e,contextUri:t,episode:a,onRemove:i,usePlayContextItem:r}){const s=(0,l.useRef)(a.duration.milliseconds-a.timeLeft.milliseconds),n=a.uri,[o,c]=(0,l.useState)(0===a.timeLeft.milliseconds),{filter:u}=(0,l.useContext)(A.fo),d=(0,te.O)(),E=(0,$.jh)(),g=(0,ae.o)(),[L]=(0,M.Z)(n,!0),D=(0,ce.k)(a.uri,a.isPlayable),h=(0,C.k)(),{isPlaying:y,isActive:p,togglePlay:m}=r({uri:n,index:e}),[P]=(0,se.z)(1e4,(e=>e?.item?.uri===n));(0,l.useEffect)((()=>{y&&(s.current=P)}),[y,P]);const{isPlaying:b,isActive:x,togglePlay:S}=(0,_.n)({uri:n,pages:[{items:[{type:ne.p.EPISODE,uri:n,uid:null,provider:null}]}]},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});(0,l.useEffect)((()=>{L||i()}),[L,i]),(0,l.useEffect)((()=>{y||a.duration.milliseconds<=s.current&&c(!0)}),[y,a.duration.milliseconds]);const f=(0,l.useCallback)((e=>{e||(s.current=0),c(e)}),[]),O=e=>{if(e.target!==e.currentTarget)return;let l=`${a.name}`;a.show&&(l+=` • ${a.show.name}`),d(e,{itemUris:[n],dragLabelText:l,contextUri:t})},I=(0,l.useCallback)((()=>{g({type:"click",targetUri:n,intent:"navigate"})}),[n,g]),R=(0,l.useCallback)((()=>{h?(g({type:"click",intent:y?"pause":"play"}),m()):(g({type:"click",intent:b?"pause":"play"}),S())}),[h,y,b,g,m,S]),N=(0,l.useCallback)((e=>(0,T.jsx)(Ae.o,{searchWords:[u],textToHighlight:e})),[u]),k=a.podcastSubscription?.isPaywalled??!1,j=a.podcastSubscription?.isUserSubscribed??!1,{badges:B}=(0,oe.r)({isExplicit:a.isExplicit,isMOGEFRestricted:a.is19PlusOnly,isPaywalled:k});let H=!1;(p||!h&&x)&&(H=!0);const v=(0,z.W6)(ue.eli,{loadingValue:!1});return L?(0,T.jsxs)(K.JL,{value:"row",index:e,children:[(0,T.jsx)("hr",{className:Z,"aria-hidden":!0}),(0,T.jsx)(le._,{menu:(0,T.jsx)(q.k,{uri:n,contextUri:t,showUri:a.show?.uri,isPlayed:o,onMarkAsPlayed:f}),children:v?(0,T.jsx)(J.k,{requestId:a.requestId,index:e,uri:n,uid:n,size:E,images:a.images.map((e=>({url:e.url,width:e.width||(e.label?de[e.label]:null),height:e.height||(e.label?de[e.label]:null)}))),isPaywalled:k,isUserSubscribed:j,name:a.name,highlightText:N,showName:a.show?.name,showUri:a.show?.uri,description:a.description,isPlayable:D,fullyPlayed:o,durationMs:a.duration.milliseconds,releaseDate:a.release.date||"",resumePositionMs:s.current,handleDragStart:O,handlePlaybackClick:R,handleClick:I,isCurrentlyPlaying:H,isPlaying:h?y:b,position:H?P:void 0,episodeSharingInfo:null,onMarkAsPlayed:f,badges:(0,T.jsxs)(T.Fragment,{children:[B.explicit&&(0,T.jsx)(ie.N,{}),B.paid&&(0,T.jsx)(Q.g,{}),B.nineteen&&(0,T.jsx)(re.X,{size:16})]}),playButtonWrapper:e=>(0,T.jsx)(X.l,{enabled:k&&!j,showUri:a.show?.uri||void 0,children:e})}):(0,T.jsx)(G.X,{requestId:a.requestId,index:e,uri:n,uid:n,size:E,images:a.images.map((e=>({url:e.url,width:e.width||(e.label?de[e.label]:null),height:e.height||(e.label?de[e.label]:null)}))),isPaywalled:k,isUserSubscribed:j,name:a.name,highlightText:N,showName:a.show?.name,showUri:a.show?.uri,description:a.description,isPlayable:D,fullyPlayed:o,durationMs:a.duration.milliseconds,releaseDate:a.release.date||"",resumePositionMs:s.current,handleDragStart:O,handlePlaybackClick:R,handleClick:I,isCurrentlyPlaying:H,isPlaying:h?y:b,position:H?P:void 0,episodeSharingInfo:null,onMarkAsPlayed:f,badges:(0,T.jsxs)(T.Fragment,{children:[B.explicit&&(0,T.jsx)(ie.N,{}),B.paid&&(0,T.jsx)(Q.g,{}),B.nineteen&&(0,T.jsx)(re.X,{size:16})]}),playButtonWrapper:e=>(0,T.jsx)(X.l,{enabled:k&&!j,showUri:a.show?.uri||void 0,children:e})})})]}):null})),ge=l.memo((function({contextUri:e,usePlayContextItem:t}){const a=(0,l.useContext)(p.H),{sortState:i}=(0,l.useContext)(D),[r,s]=(0,l.useState)({totalLength:0,unfilteredTotalLength:0,offset:0,items:[],limit:50}),n=(0,l.useRef)(!1),o=(0,l.useRef)(0),c=(0,l.useRef)(0),{filter:u}=(0,l.useContext)(A.fo),d=(0,l.useCallback)((()=>{c.current++}),[]),{ref:E,breakpoint:g}=(0,$.Db)({[$.Uo.MEDIUM]:0,[$.Uo.LARGE]:600}),L=(0,l.useCallback)(((e=!1)=>{const t=o.current;null!==t&&(n.current||(n.current=!0,(async e=>{const t=await a.getEpisodes({offset:e-c.current,limit:50,sort:H(i),filter:u});return c.current=0,t})(Number(t)).then((a=>{s((l=>{const i=Number(a.offset)+a.items.length,r=e?[]:[...l.items];return r.splice(Number(t),a.items.length,...a.items),o.current=i<a.totalLength?i:null,{...a,items:r}})),n.current=!1}))))}),[u,a,i]);return(0,l.useEffect)((()=>{o.current=0,L(!0)}),[L]),(0,T.jsx)($.ZU.Provider,{value:g,children:(0,T.jsx)(K.JL,{value:"track-list",children:(0,T.jsx)("div",{ref:E,children:(0,T.jsx)(V.C,{onReachBottom:L,triggerOnInitialLoad:!0,children:r.items.map(((a,l)=>(0,T.jsx)("div",{className:ee,children:(0,T.jsx)(Ee,{index:l,episode:a,contextUri:e,onRemove:d,usePlayContextItem:t},`${a.uri}/${l}`)},`${l}${a.uri}`)))})})})})}));var Le=a(97018),Te=a(34790),De=a(44930),he=a(52759),Ce=a(77401),ye=a(57671);const pe=({metadata:e,backgroundColor:t,isPlaying:a,isOnline:i,togglePlay:s})=>{const{uri:n,name:o,images:A,totalLength:c,owner:u}=e,d=(0,l.useMemo)((()=>({id:u.username,uri:u.uri,name:u.username,displayName:u.displayName||void 0,images:u.images||[]})),[u]);return(0,T.jsxs)(Te.gF,{backgroundColor:t,children:[(0,T.jsxs)(De.W,{children:[(0,T.jsx)(b.$,{size:"medium",onClick:()=>s(),isPlaying:a,uri:n,disabled:!i,ariaPlayLabel:r.ag.get("playlist.a11y.play",o),ariaPauseLabel:r.ag.get("playlist.a11y.pause",o)}),(0,T.jsx)(he.i,{text:o})]}),(0,T.jsx)(Te.Oz,{images:A,name:o,shape:Ce.K.ROUNDED_CORNERS,renderImage:()=>(0,T.jsx)(ye.$,{})}),(0,T.jsxs)(Te.sP,{children:[(0,T.jsx)(Le.x,{variant:"bodySmallBold",children:r.ag.get("playlist")}),(0,T.jsx)(Te.xd,{canEdit:!1,onClick:()=>{},children:o}),(0,T.jsx)(Te.QS,{creators:[d],totalItems:c,hasEpisodes:!0})]})]})};var _e=a(39189),me=a(80774);const Pe=({metadata:e,canSort:t})=>{const a=(0,y.Y5)("#006450"),n=(0,C.k)(),{sortState:c}=(0,l.useContext)(D),{filter:u}=(0,l.useContext)(A.fo),{isPlaying:d,togglePlay:E,usePlayContextItem:g}=(0,_.n)({uri:e.uri,metadata:{[m.sb.SORTING_CRITERIA]:v(c),[m.sb.FILTERING_PREDICATE]:(0,o.aK)(u)}},{featureIdentifier:"your_library",referrerIdentifier:"your_library"},{shuffle:!1,repeat:m.zq.REPEAT_NONE});return(0,T.jsxs)("section",{className:W,"data-testid":"your-episodes-page",children:[(0,T.jsx)(_e.$,{children:r.ag.get("sidebar.your_episodes")}),(0,T.jsx)(pe,{metadata:e,backgroundColor:a,isPlaying:d,isOnline:n,togglePlay:E}),(0,T.jsxs)("div",{className:w,children:[(0,T.jsx)(F,{metadata:e,backgroundColor:a,isPlaying:d,isOnline:n,togglePlay:E,canSort:t}),(0,T.jsx)("div",{className:"contentSpacing",children:e.totalLength>0?(0,T.jsx)(ge,{contextUri:e.uri,usePlayContextItem:g}):(0,T.jsx)(s.u,{message:r.ag.get("collection.empty-page.episodes-subtitle"),title:r.ag.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:r.ag.get("collection.empty-page.shows-cta"),renderInline:!0,children:(0,T.jsx)(i.G,{"aria-hidden":"true"})})})]})]})},be=(0,l.memo)((function(){const e=(0,l.useContext)(p.H).getCapabilities(),t=(0,me.x)();return t?(0,T.jsx)(h,{uri:t.uri,defaultSortOption:E.ADDED_AT,children:(0,T.jsx)(A.hz,{uri:t.uri,children:(0,T.jsx)(Pe,{metadata:t,canSort:e.canSortTracksAndEpisodes&&t.totalLength>0})})}):(0,T.jsx)(n.h,{hasError:!1,errorMessage:r.ag.get("error.not_found.title.page"),loadOffline:e.canModifyOffline})}))}}]);
//# sourceMappingURL=xpui-routes-collection-episodes.js.map