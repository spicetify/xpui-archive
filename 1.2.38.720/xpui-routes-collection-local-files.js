"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[4389],{64299:(e,t,r)=>{r.d(t,{d:()=>p});var n,l=r(93209),i=(r(94238),r(6990),r(84008),r(5280),r(69645),r(93902),r(7410),r(50252),r(30758)),a=r(59081),s=r(77700),o=r(81226),u=r(60120),c=r(96792),d={"custom-order":u.RB,"title-and-artist-title":{column:c.$.TITLE_AND_ARTIST,order:c.H.ASC},"title-and-artist-artist":{column:c.$.TITLE_AND_ARTIST,order:c.H.SECONDARY_ASC},title:{column:c.$.TITLE,order:c.H.ASC},artist:{column:c.$.ARTIST,order:c.H.ASC},"added-by":{column:c.$.ADDED_BY,order:c.H.ASC},"added-at":{column:c.$.ADDED_AT,order:c.H.ASC},duration:{column:c.$.DURATION,order:c.H.ASC},album:{column:c.$.ALBUM,order:c.H.ASC},"album-or-podcast":{column:c.$.ALBUM_OR_PODCAST,order:c.H.ASC},"album-or-show":{column:c.$.ALBUM_OR_SHOW,order:c.H.ASC}},m={"title-and-artist-title":c.$.TITLE_AND_ARTIST,"title-and-artist-artist":c.$.TITLE_AND_ARTIST,title:c.$.TITLE,artist:c.$.ARTIST,"added-by":c.$.ADDED_BY,"added-at":c.$.ADDED_AT,duration:c.$.DURATION,album:c.$.ALBUM,"album-or-podcast":c.$.ALBUM_OR_PODCAST,"album-or-show":c.$.ALBUM_OR_SHOW},g=(0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)({},c.H.NONE,c.H.NONE),c.H.ASC,c.H.DESC),c.H.DESC,c.H.ASC),c.H.SECONDARY_ASC,c.H.SECONDARY_DESC),c.H.SECONDARY_DESC,c.H.SECONDARY_ASC),A=((0,o.A)({},c.$.INDEX,{key:"custom-order",get value(){return a.Ru.get("sort.custom-order")}}),n={},(0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)(n,c.$.INDEX,{key:"custom-order",get value(){return a.Ru.get("sort.custom-order")}}),c.$.TITLE_AND_ARTIST,{key:"title",get value(){return a.Ru.get("sort.title")}}),c.$.TITLE,{key:"title",get value(){return a.Ru.get("sort.title")}}),c.$.ARTIST,{key:"artist",get value(){return a.Ru.get("sort.artist")}}),c.$.ADDED_BY,{key:"added-by",get value(){return a.Ru.get("sort.added-by")}}),c.$.ADDED_AT,{key:"added-at",get value(){return a.Ru.get("sort.date-added")}}),c.$.DURATION,{key:"duration",get value(){return a.Ru.get("sort.duration")}}),c.$.EVENT_DATE,null),c.$.EVENT_INFO,null),c.$.ALBUM,{key:"album",get value(){return a.Ru.get("sort.album")}}),(0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)(n,c.$.ALBUM_OR_PODCAST,{key:"album-or-podcast",get value(){return a.Ru.get("sort.album-or-podcast")}}),c.$.ALBUM_OR_SHOW,{key:"album-or-show",get value(){return a.Ru.get("sort.album-or-show")}}),c.$.PLAYS,null),c.$.RELEASE_DATE,null),c.$.ADD,null),c.$.ACTIONS,null),c.$.CONCERT_VENUE,null),c.$.CONCERT_DATE,null),c.$.TITLE_AND_AUTHOR,{key:"title",get value(){return a.Ru.get("sort.title")}}),c.$.AUTHOR,null)),x=r(79260),f=r(86070);function T(e){return!!e}var p=function(e){var t=e.columns,r=e.disabled,n=e.onSort,o=(0,l.A)(t),p=o.indexOf(c.$.TITLE_AND_ARTIST),y=o.indexOf(c.$.TITLE_AND_AUTHOR);-1!==p&&o.splice(p,1,c.$.TITLE,c.$.ARTIST),-1!==y&&o.splice(y,1);var b=(0,i.useContext)(u.cL),j=b.sortState,C=b.setSortState,R=function(e){return null===e.column?A[c.$.INDEX]:(0,x.kj)(e.column,e)?A[c.$.ARTIST]:A[e.column]}(j),h=(0,i.useCallback)((function(e){null==n||n(),C(function(e,t,r){return e?t!==m[e]?d[e]:{column:m[e],order:g[r]}:u.RB}(e,j.column,j.order))}),[n,C,j.column,j.order]),S=(0,i.useCallback)((function(){return null!==j.column}),[j.column]),I=o.map((function(e){return A[e]})).filter(T);return(0,f.jsx)(s.g,{options:I,onSelect:h,selected:R,isSelectionChanged:S,sortOrder:j.order,heading:a.Ru.get("drop_down.sort_by"),disabled:r,enableViewModeMenu:!0})}},95610:(e,t,r)=>{r.r(t),r.d(t,{default:()=>De});var n=r(81226),l=(r(60905),r(98168),r(94238),r(63619),r(6990),r(84008),r(5280),r(41679),r(81443),r(74457),r(6844),r(77458),r(69645),r(93902),r(7410),r(50247),r(50252),r(88190),r(30758)),i=r(98111),a=r(71174),s=r(2097),o=r(96263),u=r(18148),c=r(59081),d=r(27890),m=r(54212),g=r(19968),A=r(46317),x=r(73690),f=r(79260),T=r(30405),p=r(60120),y=r(88212),b=r(96792),j=r(89077),C=r(92373),R=r(5264),h=r(77159),S=r(55730),I=r(97150),D=r(90997),E=r(43407),v=r(82035),$=r(47872),_=r(82930),k=r(98849),O=r(11182),P=r(87238),N=r(27672),L=r(530),M=r(59767),H=r(51995),w=r(48575),U=(r(51945),r(39921),r(78028)),B=r(1619),F=r(19008),Y=r(64299);const V="ijkY1leciNts_lZ000bI",X="nyi5paBf0kJsz7Py0DaI";var z=r(86070),W=l.memo((function(e){var t=e.tracklistDomRef,r=(0,v.r)(U.E,{}),n=r.spec,i=r.logger,a=(0,l.useCallback)((function(){i.logInteraction(n.filterFieldFactory().keyStrokeFilter())}),[i,n]),s=(0,l.useCallback)((function(){i.logInteraction(n.filterFieldFactory().hitClearFilter())}),[i,n]),o=(0,B.w)().filter((function(e){return p.ws.includes(e)}));return(0,z.jsxs)("div",{className:X,children:[(0,z.jsx)(l.Suspense,{fallback:null,children:(0,z.jsx)(F.S,{placeholder:c.Ru.get("playlist.search_in_playlist"),clearOnEscapeInElementRef:t,onFilter:a,onClear:s})}),(0,z.jsx)(Y.d,{columns:o})]})})),Z=l.memo((function(e){var t=e.tracklistDomRef,r=e.togglePlay,n=e.isPlaying,i=e.isActive,a=e.backgroundColor,s=e.spec,o=e.logger,u=(0,w.X)(),d=(0,l.useMemo)((function(){return s.shuffleButtonContainerFactory()}),[s]),m=(0,L.j)(),g=(0,l.useCallback)((function(){var e=(0,M.$I)({isPlaying:n,isActive:i,spec:s.playButtonFactory(),logger:o,uri:R.bV});r({loggingParams:e})}),[i,n,o,s,r]);return(0,z.jsx)(P.E,{backgroundColor:a,children:(0,z.jsxs)(N.S,{children:[(0,z.jsx)(x.D,{size:m,onClick:g,isPlaying:n,uri:R.bV}),u&&(0,z.jsx)(D.r,{spec:d,children:(0,z.jsx)(H.Y,{entityName:c.Ru.get("local-files"),contextUri:R.bV,activationPlacement:"bottomEnd",size:m})}),(0,z.jsx)(D.r,{spec:s,children:(0,z.jsx)(W,{tracklistDomRef:t})})]})})})),q=(r(60850),r(83892),r(61689),r(36490),r(22081),r(13903),r(3794),r(92063),r(32440),r(52767),r(41859),r(4207),r(67560),r(54839)),K=r(36092),J=r(44090),G=r(30710),Q=r(34293),ee=r(34478),te=r(93928),re=r(2174),ne=r(76157),le=r(24003),ie=r(29833),ae=r(95597),se=r(18001),oe=r(15514),ue=r(70403),ce=r(86637),de=r(46241),me=r(35509),ge=r(17649),Ae=r(59133),xe=r(35805),fe=r(7183),Te=r(91080),pe=l.memo((function(e){var t=e.uri,r=e.uid,n=e.name,i=e.duration_ms,a=e.artists,s=e.album,o=e.is19PlusOnly,u=e.isExplicit,d=e.isPlayable,m=e.index,g=e.contextUri,A=e.imgUrl,x=e.usePlayContextItem,f=e.isCompactMode,p=void 0!==f&&f,y=(0,v.r)(q.i,{data:{position:m,reason:"",uri:t}}).spec,j=(0,l.useContext)(T.g).filter,C=x({uid:r,uri:t,index:m}),R=C.isActive,h=C.isPlaying,S=C.triggerPlay,I=C.togglePlay,D=(0,te.b)({isExplicit:u}),E=D.badges,$=D.hasBadges,_=(null==a?void 0:a.map((function(e){return e.name})).join(c.Ru.getSeparator()))||"",k=(0,B.w)();return(0,z.jsx)(ee.pZ,{value:"row",index:m,children:(0,z.jsx)(K.h,{menu:(0,z.jsx)(re.A,{uri:t,uid:r,contextUri:g}),children:(0,z.jsx)(Te.w,{uri:t,contextUri:g,isActive:R,index:m,onTriggerPlay:function(e,t){S({loggingParams:t})},ariaRowIndex:m+1,isPlayable:d,ageRestricted:o,dragMetadata:{name:n,createdBy:_},spec:y,isCompactMode:p,children:k.map((function(e,l){var o=(0,J.y)(l,e,k);switch(e){case b.$.INDEX:return(0,z.jsx)(o,{ariaColIndex:l,children:(0,z.jsx)(de.$,{uri:t,playAriaLabel:c.Ru.get("tracklist.a11y.play",n,_),isPlaying:h,isActive:R,onClick:function(e,t){I({loggingParams:t})},spec:y,children:(0,z.jsx)(ge.a,{children:m+1})})},l);case b.$.TITLE_AND_ARTIST:return(0,z.jsxs)(o,{ariaColIndex:l,children:[(0,z.jsx)(oe.e,{src:A}),(0,z.jsxs)(ue.l,{children:[(0,z.jsx)(fe.p,{titleText:n,children:(0,z.jsx)(ne.M,{searchWords:[j],textToHighlight:n})}),$&&(0,z.jsx)(ae.P,{children:E.explicit?(0,z.jsx)(Q.g,{}):null}),(0,z.jsx)(Ae.p,{children:a&&(0,z.jsx)(le.E,{nonInteractive:!0,artists:a,filter:j})})]})]},l);case b.$.TITLE:return(0,z.jsx)(o,{ariaColIndex:l,children:(0,z.jsxs)(ce.q,{children:[(0,z.jsx)(fe.p,{titleText:n,children:(0,z.jsx)(ne.M,{searchWords:[j],textToHighlight:n})}),$&&(0,z.jsx)(ae.P,{children:E.explicit?(0,z.jsx)(Q.g,{}):null})]})},l);case b.$.ARTIST:return(0,z.jsx)(o,{ariaColIndex:l,children:(0,z.jsx)(xe.Y,{children:a&&(0,z.jsx)(le.E,{nonInteractive:!0,artists:a,filter:j})})},l);case b.$.ALBUM:return(0,z.jsx)(o,{ariaColIndex:l,children:(null==s?void 0:s.name)&&(0,z.jsx)(ie.g,{nonInteractive:!0,uri:null==s?void 0:s.uri,name:null==s?void 0:s.name,children:(0,z.jsx)(ne.M,{searchWords:[j],textToHighlight:null==s?void 0:s.name})})},l);case b.$.DURATION:return(0,z.jsxs)(o,{ariaColIndex:l,children:[(0,z.jsx)(G.d,{uri:t}),(0,z.jsx)(se.P,{duration:i}),(0,z.jsx)(me.Y,{menu:(0,z.jsx)(re.A,{uri:t,uid:r,contextUri:g}),label:c.Ru.get("more.label.track",n,_),spec:y})]},l);default:return null}}))})})})}),(function(e,t){return e.uri===t.uri&&e.index===t.index&&e.isCompactMode===t.isCompactMode})),ye=r(39437),be=r(99517),je=new Set(p.ws),Ce=l.memo((function(e){var t=e.uri,r=e.tracks,n=e.sortState,i=e.handleSort,a=e.usePlayContextItem,s=e.tracklistDomRef,o=e.isCompactMode,u=void 0!==o&&o,d=(0,B.w)(),m=(0,l.useRef)(null),g=(0,l.useCallback)((function(e,r){var n,l=(0,ye.g)(null===(n=e.album)||void 0===n?void 0:n.images,{desiredSize:40,desiredLabel:"small"});return(0,z.jsx)(pe,{index:r,contextUri:t,uri:e.uri,uid:e.uid,isPlayable:e.isPlayable,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,album:e.album||void 0,isExplicit:e.isExplicit,is19PlusOnly:e.is19PlusOnly,type:e.type,imgUrl:(null==l?void 0:l.url)||"",usePlayContextItem:a,isCompactMode:u},e.uid)}),[t,a,u]),A=(0,l.useCallback)((function(e){return{uri:e.uri,uid:e.uid}}),[]);return(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(ee.pZ,{value:"playlist-tracklist",children:(0,z.jsx)(be.S4,{ariaLabel:c.Ru.get("local-files"),hasHeaderRow:!0,columns:d,sortableColumns:je,sortState:n,onSort:i,renderRow:g,resolveItem:A,tracks:r,nrTracks:r.length,limit:100,outerRef:m,outerDomRef:s,isCompactMode:u,columnPersistenceKey:"playlist-tracklist"},t)})})}));function Re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function he(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Se=[b.$.INDEX,b.$.TITLE_AND_ARTIST,b.$.ALBUM,b.$.DURATION],Ie=function(){var e=(0,l.useContext)(T.g).filter,t=(0,l.useContext)(p.cL),r=t.sortState,n=t.setSortState,P=(0,l.useContext)(h._),N=(0,S.P)(),L=(0,C.z)(s.kleinBlue),M=(0,l.useRef)(null),H=(0,v.r)(u.Z,{data:{uri:R.bV}}).spec,w=(0,l.useMemo)((function(){return H.actionBarFactory()}),[H]),U=(0,l.useMemo)((function(){return H.tracklistFactory()}),[H]),B=(0,E.s)(),F=(0,j.a)().isCompactMode,Y=function(e){var t=e.isCompactMode,r=void 0!==t&&t,n=[].concat(Se);return r&&n.splice(n.indexOf(b.$.TITLE_AND_ARTIST),1,b.$.TITLE,b.$.ARTIST),n}({isCompactMode:F}),X=(0,l.useCallback)((function(e,t){n((0,f.So)(e,r)),B.logInteraction(H.tracklistFactory().columnHeaderFactory({identifier:e,position:t||0}).hitSort())}),[n,r,B,H]),W=(0,i.I)({queryKey:["local-files",r,e],queryFn:function(){return P.getTracks((0,f.Xt)(r),e)},staleTime:0,gcTime:3e5,placeholderData:a.rX,enabled:N}).data,q=(0,I.P)({uri:R.bV,pages:[{items:(null!=W?W:[]).map((function(e){return he(he({},e),{},{provider:null})}))}]},{featureIdentifier:"local_files"}),K=q.isActive,J=q.isPlaying,G=q.togglePlay,Q=q.usePlayContextItem;return W?e||W.length&&N?(0,z.jsx)(y.a,{columns:Y,children:(0,z.jsxs)("div",{role:"presentation",className:V,children:[(0,z.jsxs)(_.z,{backgroundColor:L,children:[(0,z.jsxs)(m.h,{children:[(0,z.jsx)(x.D,{size:"medium",onClick:function(){return G()},isPlaying:J,uri:R.bV}),(0,z.jsx)(g.X,{text:c.Ru.get("local-files")})]}),(0,z.jsxs)(k.Y,{children:[(0,z.jsx)(O.mm,{children:c.Ru.get("local-files")}),(0,z.jsx)($.Z,{children:c.Ru.get("local-files.description")})]})]}),(0,z.jsx)(Z,{togglePlay:G,isPlaying:J,isActive:K,backgroundColor:L,tracklistDomRef:M,spec:w,logger:B}),(0,z.jsx)("div",{className:"contentSpacing",children:(0,z.jsx)(D.r,{spec:U,children:(0,z.jsx)(Ce,{tracks:W,uri:R.bV,handleSort:X,sortState:r,usePlayContextItem:Q,tracklistDomRef:M,isCompactMode:F})})})]})}):(0,z.jsx)(d.p,{linkTo:"/preferences",linkTitle:c.Ru.get("local-files.empty-button"),message:c.Ru.get("local-files.empty-description"),title:c.Ru.get("local-files.empty-header"),children:(0,z.jsx)(o.s,{size:"xxlarge","aria-hidden":"true"})}):(0,z.jsx)(A.A,{hasError:!1,errorMessage:c.Ru.get("error.request-artist-failure"),loadOffline:!0})};const De=function(){return(0,z.jsx)(p.sn,{uri:"spotify:internal:local-files",children:(0,z.jsx)(T.s,{uri:"spotify:internal:local-files",children:(0,z.jsx)(Ie,{})})})}},55730:(e,t,r)=>{r.d(t,{P:()=>l});var n=r(49805);function l(){return(0,n.y)()[0]}},49805:(e,t,r)=>{r.d(t,{y:()=>a});var n=r(26017),l=r(30758),i=r(77159);function a(){var e=(0,l.useContext)(i._),t=(0,l.useState)(e.getIsEnabled()),r=(0,n.A)(t,2),a=r[0],s=r[1];return(0,l.useEffect)((function(){var t=e.subscribeIsEnabled(s);return function(){return t()}}),[e]),[a,(0,l.useCallback)((function(t){return e.setIsEnabled(t)}),[e])]}}}]);
//# sourceMappingURL=xpui-routes-collection-local-files.js.map