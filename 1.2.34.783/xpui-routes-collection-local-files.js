"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[4389],{66551:(e,t,r)=>{r.d(t,{d:()=>A});r(62355),r(48117),r(1137);var l=r(79474),s=r(37298),i=r(70451),a=r(87349),n=r(48593);const o={"custom-order":a.RB,"title-and-artist-title":{column:n.$.TITLE_AND_ARTIST,order:n.H.ASC},"title-and-artist-artist":{column:n.$.TITLE_AND_ARTIST,order:n.H.SECONDARY_ASC},title:{column:n.$.TITLE,order:n.H.ASC},artist:{column:n.$.ARTIST,order:n.H.ASC},"added-by":{column:n.$.ADDED_BY,order:n.H.ASC},"added-at":{column:n.$.ADDED_AT,order:n.H.ASC},duration:{column:n.$.DURATION,order:n.H.ASC},album:{column:n.$.ALBUM,order:n.H.ASC},"album-or-podcast":{column:n.$.ALBUM_OR_PODCAST,order:n.H.ASC},"album-or-show":{column:n.$.ALBUM_OR_SHOW,order:n.H.ASC}},c={"title-and-artist-title":n.$.TITLE_AND_ARTIST,"title-and-artist-artist":n.$.TITLE_AND_ARTIST,title:n.$.TITLE,artist:n.$.ARTIST,"added-by":n.$.ADDED_BY,"added-at":n.$.ADDED_AT,duration:n.$.DURATION,album:n.$.ALBUM,"album-or-podcast":n.$.ALBUM_OR_PODCAST,"album-or-show":n.$.ALBUM_OR_SHOW},u={[n.H.NONE]:n.H.NONE,[n.H.ASC]:n.H.DESC,[n.H.DESC]:n.H.ASC,[n.H.SECONDARY_ASC]:n.H.SECONDARY_DESC,[n.H.SECONDARY_DESC]:n.H.SECONDARY_ASC},d=(n.$.INDEX,{[n.$.INDEX]:{key:"custom-order",get value(){return s.R.get("sort.custom-order")}},[n.$.TITLE_AND_ARTIST]:{key:"title",get value(){return s.R.get("sort.title")}},[n.$.TITLE]:{key:"title",get value(){return s.R.get("sort.title")}},[n.$.ARTIST]:{key:"artist",get value(){return s.R.get("sort.artist")}},[n.$.ADDED_BY]:{key:"added-by",get value(){return s.R.get("sort.added-by")}},[n.$.ADDED_AT]:{key:"added-at",get value(){return s.R.get("sort.date-added")}},[n.$.DURATION]:{key:"duration",get value(){return s.R.get("sort.duration")}},[n.$.EVENT_DATE]:null,[n.$.EVENT_INFO]:null,[n.$.ALBUM]:{key:"album",get value(){return s.R.get("sort.album")}},[n.$.ALBUM_OR_PODCAST]:{key:"album-or-podcast",get value(){return s.R.get("sort.album-or-podcast")}},[n.$.ALBUM_OR_SHOW]:{key:"album-or-show",get value(){return s.R.get("sort.album-or-show")}},[n.$.PLAYS]:null,[n.$.RELEASE_DATE]:null,[n.$.ADD]:null,[n.$.ACTIONS]:null,[n.$.CONCERT_VENUE]:null,[n.$.CONCERT_DATE]:null,[n.$.TITLE_AND_AUTHOR]:{key:"title",get value(){return s.R.get("sort.title")}},[n.$.AUTHOR]:null});var m=r(51773),x=r(72861),g=r(13274);function T(e){return!!e}const A=({columns:e,disabled:t,onSort:r})=>{const A=[...e],C=A.indexOf(m.$C.TITLE_AND_ARTIST),p=A.indexOf(m.$C.TITLE_AND_AUTHOR);-1!==C&&A.splice(C,1,m.$C.TITLE,m.$C.ARTIST),-1!==p&&A.splice(p,1);const{sortState:R,setSortState:S}=(0,l.useContext)(a.cL),y=function(e){return null===e.column?d[m.$C.INDEX]:(0,x.kj)(e.column,e)?d[m.$C.ARTIST]:d[e.column]}(R),h=(0,l.useCallback)((e=>{r?.(),S(((e,t,r)=>e?t!==c[e]||"artist"===e&&[n.H.ASC,n.H.DESC].includes(r)||"title"===e&&[n.H.SECONDARY_ASC,n.H.SECONDARY_DESC].includes(r)?o[e]:{column:c[e],order:u[r]}:a.RB)(e,R.column,R.order))}),[r,S,R.column,R.order]),j=(0,l.useCallback)((()=>null!==R.column),[R.column]),D=A.map((e=>d[e])).filter(T);return(0,g.jsx)(i.g,{options:D,onSelect:h,selected:y,isSelectionChanged:j,sortOrder:R.order,heading:s.R.get("drop_down.sort_by"),disabled:t,enableViewModeMenu:!0})}},83095:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ue});r(62355),r(48117),r(1137);var l=r(79474),s=r(49036),i=r(39807),a=r(4118),n=r(78232),o=r(53648),c=r(37298),u=r(15123),d=r(34015),m=r(94315),x=r(86597),g=r(12441),T=r(4405),A=r(72861),C=r(57443),p=r(51773),R=r(87349),S=r(20115),y=r(35599),h=r(79730),j=r(83789),D=r(37970),E=r(72438),I=r(13031),b=r(49882),$=r(39974),f=r(15486),_=r(15339),k=r(72890),N=r(81879),O=r(66551);const v="uCHqQ74vvHOnctGg0X0B",P="feuNq1FTxMbdeOTuFgpA";var H=r(13274);const L=l.memo((({tracklistDomRef:e})=>{const{spec:t,logger:r}=(0,f.r)(_.createDesktopSearchBarEventFactory,{}),s=(0,l.useCallback)((()=>{r.logInteraction(t.filterFieldFactory().keyStrokeFilter())}),[r,t]),i=(0,l.useCallback)((()=>{r.logInteraction(t.filterFieldFactory().hitClearFilter())}),[r,t]),a=(0,k.w)().filter((e=>R.ws.includes(e)));return(0,H.jsxs)("div",{className:P,children:[(0,H.jsx)(l.Suspense,{fallback:null,children:(0,H.jsx)(N.S,{placeholder:c.R.get("playlist.search_in_playlist"),clearOnEscapeInElementRef:e,onFilter:s,onClear:i})}),(0,H.jsx)(O.d,{columns:a})]})}));var M=r(20533),U=r(63441),B=r(43608),w=r(49245),F=r(42958),Y=r(64541);const X=l.memo((function({tracklistDomRef:e,togglePlay:t,isPlaying:r,isActive:s,backgroundColor:i,spec:a,logger:n}){const o=(0,Y.X)(),u=(0,l.useMemo)((()=>a.shuffleButtonContainerFactory()),[a]),d=(0,B.j)(),m=(0,l.useCallback)((()=>{const e=(0,w.$I)({isPlaying:r,isActive:s,spec:a.playButtonFactory(),logger:n,uri:j.b});t({loggingParams:e})}),[s,r,n,a,t]);return(0,H.jsx)(M.E,{backgroundColor:i,children:(0,H.jsxs)(U.S,{children:[(0,H.jsx)(T.D,{size:d,onClick:m,isPlaying:r,uri:j.b}),o&&(0,H.jsx)(b.r,{spec:u,children:(0,H.jsx)(F.Y,{entityName:c.R.get("local-files"),contextUri:j.b,activationPlacement:"bottomEnd",size:d})}),(0,H.jsx)(b.r,{spec:a,children:(0,H.jsx)(L,{tracklistDomRef:e})})]})})}));r(1342),r(87992),r(20081),r(49480),r(24055),r(19292),r(15702);var z=r(58588),q=r(41627),W=r(48593),V=r(80537),Z=r(62907),J=r(75206),K=r(39431),Q=r(36476),G=r(38101),ee=r(40588),te=r(86342),re=r(7517),le=r(85989);const se=l.memo((function({uri:e,uid:t,name:r,duration_ms:s,artists:i,album:a,is19PlusOnly:n,isExplicit:o,isPlayable:u,index:d,contextUri:m,imgUrl:x,usePlayContextItem:g,isCompactMode:T=!1}){const{spec:A}=(0,f.r)(z.i,{data:{position:d,reason:"",uri:e}}),{filter:p}=(0,l.useContext)(C.gM),{isActive:R,isPlaying:S,triggerPlay:y,togglePlay:h}=g({uid:t,uri:e,index:d}),{badges:j,hasBadges:D}=(0,Q.b)({isExplicit:o}),E=i?.map((e=>e.name)).join(c.R.getSeparator())||"",I=(0,k.w)();return(0,H.jsx)(K.pZ,{value:"row",index:d,children:(0,H.jsx)(q.h,{menu:(0,H.jsx)(G.A,{uri:e,uid:t,contextUri:m}),children:(0,H.jsx)(le.w,{uri:e,contextUri:m,isActive:R,index:d,onTriggerPlay:(e,t)=>{y({loggingParams:t})},ariaRowIndex:d+1,isPlayable:u,ageRestricted:n,dragMetadata:{name:r,createdBy:E},spec:A,isCompactMode:T,children:I.map(((l,n)=>{const o=(0,V.y)(n,l,I);switch(l){case W.$.INDEX:return(0,H.jsx)(o,{ariaColIndex:n,children:(0,H.jsx)(te.$H,{uri:e,playAriaLabel:c.R.get("tracklist.a11y.play",r,E),isPlaying:S,isActive:R,onClick:(e,t)=>{h({loggingParams:t})},spec:A,children:(0,H.jsx)(te.aJ,{children:d+1})})},n);case W.$.TITLE_AND_ARTIST:return(0,H.jsxs)(o,{ariaColIndex:n,children:[(0,H.jsx)(te.eY,{src:x}),(0,H.jsxs)(te.l1,{children:[(0,H.jsx)(te.pJ,{titleText:r,children:(0,H.jsx)(ee.M,{searchWords:[p],textToHighlight:r})}),D&&(0,H.jsx)(te.Pe,{children:j.explicit?(0,H.jsx)(J.g,{}):null}),(0,H.jsx)(te.pj,{children:i&&(0,H.jsx)(re.E,{nonInteractive:!0,artists:i,filter:p})})]})]},n);case W.$.TITLE:return(0,H.jsx)(o,{ariaColIndex:n,children:(0,H.jsxs)(te.qU,{children:[(0,H.jsx)(te.pJ,{titleText:r,children:(0,H.jsx)(ee.M,{searchWords:[p],textToHighlight:r})}),D&&(0,H.jsx)(te.Pe,{children:j.explicit?(0,H.jsx)(J.g,{}):null})]})},n);case W.$.ARTIST:return(0,H.jsx)(o,{ariaColIndex:n,children:(0,H.jsx)(te.Yt,{children:i&&(0,H.jsx)(re.E,{nonInteractive:!0,artists:i,filter:p})})},n);case W.$.ALBUM:return(0,H.jsx)(o,{ariaColIndex:n,children:a?.name&&(0,H.jsx)(te.gy,{nonInteractive:!0,uri:a?.uri,name:a?.name,children:(0,H.jsx)(ee.M,{searchWords:[p],textToHighlight:a?.name})})},n);case W.$.DURATION:return(0,H.jsxs)(o,{ariaColIndex:n,children:[(0,H.jsx)(Z.d,{uri:e}),(0,H.jsx)(te.Po,{duration:s}),(0,H.jsx)(te.Y8,{menu:(0,H.jsx)(G.A,{uri:e,uid:t,contextUri:m}),label:c.R.get("more.label.track",r,E),spec:A})]},n);default:return null}}))})})})}),((e,t)=>e.uri===t.uri&&e.index===t.index&&e.isCompactMode===t.isCompactMode));var ie=r(466);const ae=new Set(R.ws),ne=l.memo((function({uri:e,tracks:t,sortState:r,handleSort:s,usePlayContextItem:i,tracklistDomRef:a,isCompactMode:n=!1}){const o=(0,k.w)(),u=(0,l.useRef)(null),d=(0,l.useCallback)(((t,r)=>{const l=(0,ie.g)(t.album?.images,{desiredSize:40,desiredLabel:"small"});return(0,H.jsx)(se,{index:r,contextUri:e,uri:t.uri,uid:t.uid,isPlayable:t.isPlayable,duration_ms:t.duration.milliseconds,name:t.name,artists:t.artists,album:t.album||void 0,isExplicit:t.isExplicit,is19PlusOnly:t.is19PlusOnly,type:t.type,imgUrl:l?.url||"",usePlayContextItem:i,isCompactMode:n},t.uid)}),[e,i,n]),m=(0,l.useCallback)((e=>({uri:e.uri,uid:e.uid})),[]);return(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(K.pZ,{value:"playlist-tracklist",children:(0,H.jsx)(p.S4,{ariaLabel:c.R.get("local-files"),hasHeaderRow:!0,columns:o,sortableColumns:ae,sortState:r,onSort:s,renderRow:d,resolveItem:m,tracks:t,nrTracks:t.length,limit:100,outerRef:u,outerDomRef:a,isCompactMode:n,columnPersistenceKey:"playlist-tracklist"},e)})})})),oe=[p.$C.INDEX,p.$C.TITLE_AND_ARTIST,p.$C.ALBUM,p.$C.DURATION],ce=()=>{const{filter:e}=(0,l.useContext)(C.gM),{sortState:t,setSortState:r}=(0,l.useContext)(R.cL),_=(0,l.useContext)(D._),k=(0,E.P)(),N=(0,h.z)(a.Qmy),O=(0,l.useRef)(null),{spec:P}=(0,f.r)(o.Z,{data:{uri:j.b}}),L=(0,l.useMemo)((()=>P.actionBarFactory()),[P]),M=(0,l.useMemo)((()=>P.tracklistFactory()),[P]),U=(0,$.s)(),{isCompactMode:B}=(0,y.an)(),w=(({isCompactMode:e=!1})=>{const t=[...oe];return e&&t.splice(t.indexOf(p.$C.TITLE_AND_ARTIST),1,p.$C.TITLE,p.$C.ARTIST),t})({isCompactMode:B}),F=(0,l.useCallback)(((e,l)=>{r((0,A.So)(e,t)),U.logInteraction(P.tracklistFactory().columnHeaderFactory({identifier:e,position:l||0}).hitSort())}),[r,t,U,P]),{data:Y}=(0,s.I)({queryKey:["local-files",t,e],queryFn:()=>_.getTracks((0,A.Xt)(t),e),staleTime:0,gcTime:3e5,placeholderData:i.rX,enabled:k}),{isActive:z,isPlaying:q,togglePlay:W,usePlayContextItem:V}=(0,I.P)({uri:j.b,pages:[{items:(Y??[]).map((e=>({...e,provider:null})))}]},{featureIdentifier:"local_files"});return Y?e||Y.length&&k?(0,H.jsx)(S.a,{columns:w,children:(0,H.jsxs)("div",{role:"presentation",className:v,children:[(0,H.jsxs)(d.z4,{backgroundColor:N,children:[(0,H.jsxs)(m.h,{children:[(0,H.jsx)(T.D,{size:"medium",onClick:()=>W(),isPlaying:q,uri:j.b}),(0,H.jsx)(x.X,{text:c.R.get("local-files")})]}),(0,H.jsxs)(d.Y$,{children:[(0,H.jsx)(d.mm,{children:c.R.get("local-files")}),(0,H.jsx)(d.Zx,{children:c.R.get("local-files.description")})]})]}),(0,H.jsx)(X,{togglePlay:W,isPlaying:q,isActive:z,backgroundColor:N,tracklistDomRef:O,spec:L,logger:U}),(0,H.jsx)("div",{className:"contentSpacing",children:(0,H.jsx)(b.r,{spec:M,children:(0,H.jsx)(ne,{tracks:Y,uri:j.b,handleSort:F,sortState:t,usePlayContextItem:V,tracklistDomRef:O,isCompactMode:B})})})]})}):(0,H.jsx)(u.p,{linkTo:"/preferences",linkTitle:c.R.get("local-files.empty-button"),message:c.R.get("local-files.empty-description"),title:c.R.get("local-files.empty-header"),children:(0,H.jsx)(n.s,{size:"xxlarge","aria-hidden":"true"})}):(0,H.jsx)(g.A,{hasError:!1,errorMessage:c.R.get("error.request-artist-failure"),loadOffline:!0})},ue=()=>(0,H.jsx)(R.sn,{uri:"spotify:internal:local-files",children:(0,H.jsx)(C.si,{uri:"spotify:internal:local-files",children:(0,H.jsx)(ce,{})})})}}]);
//# sourceMappingURL=xpui-routes-collection-local-files.js.map