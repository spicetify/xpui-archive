"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9421],{1828:(e,t,n)=>{n.d(t,{T:()=>u});var a=n(6142),i=n(68415),r=n(66721),l=n(78297),o=n(41226);const s="Ws8Ec3GREpT5PAUesr9b",c="kHu_FTRgoBLSLeAJtyKY";var d=n(4637);const u=function({onClick:e,name:t,images:n,canEdit:u,placeholderType:m,shape:h=o.Kc.SQUARE,dragUri:g=""}){const[p,C]=(0,i.R)(n),b=(0,r.VO)(p,C)===r.KO.loaded,x=(0,a.O)([g],t);return(0,d.jsxs)("div",{className:s,"data-testid":`${m}-image`,draggable:!!g,onDragStart:x,children:[(0,d.jsx)(o.Oe,{loading:"eager",name:t,images:n,placeholderType:m,shape:h}),u&&(0,d.jsx)("div",{className:c,children:(0,d.jsx)(l.F,{overlay:b,onClick:e,rounded:h===o.Kc.CIRCLE})})]})}},70925:(e,t,n)=>{n.d(t,{w:()=>m});var a=n(59496),i=n(4417),r=n.n(i),l=n(56162),o=n(66432);const s=/(\((?:[0-9]{1,3}:){1,2}[0-9]{2}\))/g;var c=n(63120);const d={Heading:"QD13ZfPiO5otS0PU89wG",HTMLDescription:"xgmjVLxjqfcXK5BV_XyN",List:"ZbLneLRe2x_OBOYZMX3M",ListItem:"rjdQaIDkSgcGmxkdI2vU",Paragraph:"umouqjSkMUbvF4I_Xz6r"};var u=n(4637);const m=a.memo((function({html:e,onTimeStampClick:t,enableTimestamps:n=!1,semanticColor:i="textSubdued"}){const l=(0,a.useMemo)((()=>{const a=n?e.split(s).map((e=>e.match(s)?`(<time>${e.replace("(","").replace(")","")}</time>)`:e)).join(""):e;let l;try{l=r()(a,{transform:h(t,i),dangerouslySetChildren:[]})}catch{l=e}return l}),[n,e,t,i]);return(0,u.jsx)("div",{className:d.HTMLDescription,children:l})}));function h(e,t){let n=0;return{p:e=>(0,u.jsx)(l.D,{as:"p",variant:"ballad",semanticColor:t,className:d.Paragraph,children:e.children}),a:t=>t.href?.startsWith("#t=")?(0,u.jsx)(o.E,{onClick:e,children:t.children}):t.href?(0,u.jsx)(c.Link,{to:t.href,children:t.children}):(0,u.jsx)(u.Fragment,{children:t.children}),ul:e=>(0,u.jsx)("ul",{className:d.List,children:e.children}),ol:e=>(0,u.jsx)("ol",{className:d.List,children:e.children}),li:e=>(0,u.jsx)(l.D,{as:"li",variant:"ballad",semanticColor:t,className:d.ListItem,children:e.children}),br:()=>(0,u.jsx)("br",{}),h1:e=>(0,u.jsx)(l.D,{as:"h1",variant:"balladBold",semanticColor:t,className:d.Heading,children:e.children}),h2:e=>(0,u.jsx)(l.D,{as:"h2",variant:"balladBold",semanticColor:t,className:d.Heading,children:e.children}),h3:e=>(0,u.jsx)(l.D,{as:"h3",variant:"balladBold",semanticColor:t,className:d.Heading,children:e.children}),h4:e=>(0,u.jsx)(l.D,{as:"h4",variant:"balladBold",semanticColor:t,className:d.Heading,children:e.children}),h5:e=>(0,u.jsx)(l.D,{as:"h5",variant:"balladBold",semanticColor:t,className:d.Heading,children:e.children}),h6:e=>(0,u.jsx)(l.D,{as:"h6",variant:"balladBold",semanticColor:t,className:d.Heading,children:e.children}),time:t=>(0,u.jsx)(o.E,{onClick:e,children:t.children}),_:(e,t,i)=>{const r=void 0===t?e:i;return(0,u.jsx)(a.Fragment,{children:r},"fragment"+n++)}}}},38440:(e,t,n)=>{n.d(t,{l:()=>C});var a=n(59496),i=n(3802),r=n(55477),l=n(29939),o=n(72502);const s={"custom-order":l.HI,title:{column:o.Q.TITLE,order:o.k.ASC},artist:{column:o.Q.TITLE,order:o.k.SECONDARY_ASC},"added-by":{column:o.Q.ADDED_BY,order:o.k.ASC},"added-at":{column:o.Q.ADDED_AT,order:o.k.ASC},duration:{column:o.Q.DURATION,order:o.k.ASC},album:{column:o.Q.ALBUM,order:o.k.ASC},"album-or-podcast":{column:o.Q.ALBUM_OR_PODCAST,order:o.k.ASC},"album-or-show":{column:o.Q.ALBUM_OR_SHOW,order:o.k.ASC}},c={title:o.Q.TITLE,artist:o.Q.TITLE,"added-by":o.Q.ADDED_BY,"added-at":o.Q.ADDED_AT,duration:o.Q.DURATION,album:o.Q.ALBUM,"album-or-podcast":o.Q.ALBUM_OR_PODCAST,"album-or-show":o.Q.ALBUM_OR_SHOW},d={[o.k.NONE]:o.k.NONE,[o.k.ASC]:o.k.DESC,[o.k.DESC]:o.k.ASC,[o.k.SECONDARY_ASC]:o.k.SECONDARY_DESC,[o.k.SECONDARY_DESC]:o.k.SECONDARY_ASC},u={[o.Q.INDEX]:{key:"custom-order",get value(){return i.ag.get("sort.custom-order")}},[o.Q.TITLE]:{key:"title",get value(){return i.ag.get("sort.title")}},[o.Q.ARTIST]:{key:"artist",get value(){return i.ag.get("sort.artist")}},[o.Q.ADDED_BY]:{key:"added-by",get value(){return i.ag.get("sort.added-by")}},[o.Q.ADDED_AT]:{key:"added-at",get value(){return i.ag.get("sort.date-added")}},[o.Q.DURATION]:{key:"duration",get value(){return i.ag.get("sort.duration")}},[o.Q.EVENT_DATE]:null,[o.Q.ALBUM]:{key:"album",get value(){return i.ag.get("sort.album")}},[o.Q.ALBUM_OR_PODCAST]:{key:"album-or-podcast",get value(){return i.ag.get("sort.album-or-podcast")}},[o.Q.ALBUM_OR_SHOW]:{key:"album-or-show",get value(){return i.ag.get("sort.album-or-show")}},[o.Q.PLAYS]:null,[o.Q.RELEASE_DATE]:null,[o.Q.ADD]:null,[o.Q.ACTIONS]:null};var m=n(53417),h=n(19281),g=n(4637);function p(e){return!!e}const C=({columns:e,disabled:t,onSort:n})=>{const C=[...e];C.splice(2,0,m.QD.ARTIST);const{sortState:b,setSortState:x}=(0,a.useContext)(l.Gb),k=function(e){return null===e.column?u[m.QD.INDEX]:(0,h.cB)(e.column,e.order)?u[m.QD.ARTIST]:u[e.column]}(b),y=(0,a.useCallback)((e=>{n?.(),x(((e,t,n)=>e?t!==c[e]||"artist"===e&&[o.k.ASC,o.k.DESC].includes(n)||"title"===e&&[o.k.SECONDARY_ASC,o.k.SECONDARY_DESC].includes(n)?s[e]:{column:c[e],order:d[n]}:l.HI)(e,b.column,b.order))}),[n,x,b.column,b.order]),S=(0,a.useCallback)((()=>null!==b.column),[b.column]),v=C.map((e=>u[e])).filter(p);return(0,g.jsx)(r.A,{options:v,onSelect:y,selected:k,isSelectionChanged:S,sortOrder:b.order,heading:i.ag.get("drop_down.sort_by"),disabled:t})}},91044:(e,t,n)=>{n.d(t,{v:()=>b});var a=n(84875),i=n.n(a),r=n(23046),l=n(63082),o=n(30074),s=n(3802),c=n(3289),d=n(96170),u=n(57016),m=n(922);const h="I3oc8sxg8Duq4kYUGnMo",g="LEZf9K5hG4hfCKfgr5Xo";var p=n(4637);const C=e=>(0,p.jsx)(r.e,{semanticColor:"textPositive",...e}),b=({uri:e,...t})=>{const{isEnhanced:n,toggleIsEnhanced:a}=(0,m.U)(e),{spec:r,logger:b}=(0,d.fU)(o.createDesktopEnhanceButtonEventFactory,{data:{uri:e}}),x=(0,p.jsx)(c._,{label:n?s.ag.get("web-player.enhance.button_aria_label_enhanced"):s.ag.get("web-player.enhance.button_aria_label_not_enhanced"),children:(0,p.jsx)(l.P,{buttonSize:"sm",className:i()(h,{[g]:n}),...t,iconLeading:n?C:void 0,onClick:()=>{b.logInteraction(n?r.hitUnenhanceContext({contextToBeUnenhanced:e}):r.hitEnhanceContext({contextToBeEnhanced:e})),a()},children:n?s.ag.get("web-player.enhance.button_text_enhanced"):s.ag.get("web-player.enhance.button_text_not_enhanced")})});return n?x:(0,p.jsx)(u.T,{id:"enhance-button",bodyText:s.ag.get("web-player.enhance.onboarding.enhance-playlist"),children:x})}},57016:(e,t,n)=>{n.d(t,{T:()=>g});var a=n(59496),i=n(87995),r=n(92616),l=n(56162),o=n(58706),s=n(79475),c=n(21524),d=n(9407);const u="iW5kFTiudWn9ItsTvZmz",m="OfNgl_iK7pi63fAi8USM";var h=n(4637);const g=function({id:e,title:t,bodyText:n,buttonText:g,shouldScrollIntoView:p,children:C}){const[b,x]=(0,d.z)(`onboarding-dismissed:${e}`,!1),{scrollNodeRef:k}=(0,a.useContext)(c.VX),[y,S]=(0,a.useState)(null),[v,D]=(0,a.useState)(null),T=(0,a.useRef)(!1);(0,a.useEffect)((()=>{p&&v&&!T.current&&(T.current=!0,v.scrollIntoView({behavior:"smooth",block:"center"}))}),[p,v]);const w=(0,a.useCallback)((()=>x(!0)),[x]);(0,a.useEffect)((()=>{if(b)return()=>{};const e=e=>{"Escape"===e.key&&w()},t=e=>{e.target instanceof Node&&!v?.contains(e.target)&&w()};return window.addEventListener("keydown",e,!0),window.addEventListener("click",t,!0),()=>{window.removeEventListener("keydown",e,!0),window.removeEventListener("click",t,!0)}}),[b,w,v]);const _=k.current?.getBoundingClientRect(),E=y?.getBoundingClientRect();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("span",{ref:S,children:C}),!b&&E&&(0,i.createPortal)((0,h.jsx)("div",{className:u,style:{top:(E?.top??0)-((_?.top??0)-(k.current?.scrollTop??0)),left:(E?.left??0)-((_?.left??0)-(k.current?.scrollLeft??0)),width:E?.width,height:E?.height},ref:D,children:(0,h.jsxs)(r.J,{popoverTitle:t,arrow:r.J.bottom,colorSet:"announcement",className:m,children:[(0,h.jsx)(l.D,{as:"p",paddingBottom:g&&o.g4V,children:n}),g&&(0,h.jsx)(s.D,{buttonSize:"sm",colorSet:"invertedLight",onClick:w,children:g})]})}),k.current||document.body)]})}},9877:(e,t,n)=>{n.d(t,{v:()=>a.v});var a=n(91044)},28853:(e,t,n)=>{n.d(t,{v:()=>a.v});var a=n(99372)},41987:(e,t,n)=>{n.d(t,{s:()=>T});var a=n(59496),i=n(56162),r=n(36844),l=n(3802),o=n(73444),s=n(1828),c=n(41226),d=n(16743),u=n(73997),m=n(70925),h=n(77312),g=n(18840),p=n(73495),C=n(41836),b=n(54299),x=n(96170),k=n(78777);function y(e){return e.user||null}function S(e){return!!e}function v(e,t=!1){return{id:e.username,uri:e.uri,name:e.username,displayName:e.displayName||void 0,images:e.images,isMadeFor:t}}var D=n(4637);const T=function({metadata:e,isPlaying:t,isPublished:n,togglePlay:T,backgroundColor:w,spec:_,specLikedSongs:E}){const{uri:f,name:A,description:j="",images:L,totalLength:N,totalLikes:I,duration:O,owner:R,isOwnedBySelf:B=!1,isCollaborative:Q=!1,formatListData:U,madeFor:P=null,collaborators:M}=e,F=U?.attributes||{},X=F.header_image_url_desktop||F.image_url||null,Y=null!==X?[{url:X,width:null,height:null}]:[],H=(0,r.W6)(C.bM),K=(0,x.$P)(),W=(0,a.useMemo)((()=>function(e,t,n=[],a){return e?[v(e,!0)]:n.length>1&&a?n.map(y).filter(S).map((e=>v(e))):[v(t)]}(P,R,M?.items,H)),[P,R,M?.items,H]),G=(0,a.useContext)(p.zy),V=(0,a.useContext)(k.S7),Z=(0,a.useCallback)((()=>{if(_){const e=_.ownerFactory().hitUiReveal();K.logInteraction(e)}V({type:"open",uri:f})}),[V,f,_,K]),z=(0,a.useCallback)((e=>{if(_){const e=_?.descriptionTextFactory().hitUiReveal();K.logInteraction(e)}G({type:"open",playlistDetails:{name:A,description:j,image:L[0],uri:f},focusedElement:e})}),[_,G,A,j,L,f,K]),J=(0,a.useCallback)((()=>{if(_){const e=_.coverArtFactory().hitUiReveal();K.logInteraction(e)}G({type:"openWithImagePicker",playlistDetails:{name:A,description:j,image:L[0],uri:f}})}),[G,A,j,L,f,K,_]),q=(0,a.useCallback)(((e,t)=>{if(_){const e=_.ownerFactory().hitUiNavigate({destination:t.creator.uri});K.logInteraction(e)}if(E){const e=E.ownerFactory().hitUiNavigate({destination:t.creator.uri});K.logInteraction(e)}}),[K,_,E]),$=H&&e.permissions?e.permissions?.isPrivate?l.ag.get("private_playlist"):l.ag.get("public_playlist"):Q?l.ag.get("sidebar.collaborative_playlist"):l.ag.get("playlist");return(0,D.jsxs)(c.gF,{backgroundColor:w,backgroundImages:Y,children:[(0,D.jsxs)(d.W,{children:[(0,D.jsx)(h.$,{size:"md",onClick:T,isPlaying:t,uri:f}),(0,D.jsx)(u.i,{text:A,dragUri:f,dragLabel:A})]}),X?null:(0,D.jsx)(b._,{menu:(0,D.jsx)(o.X,{uri:f,isPublished:n}),children:(0,D.jsx)("div",{className:g.Z.playlistImageContainer,children:(0,D.jsx)(s.T,{canEdit:B,name:A,images:L,onClick:J,placeholderType:"playlist",dragUri:f})})}),(0,D.jsxs)(c.sP,{children:[(0,D.jsx)(i.D,{variant:"mestoBold",children:$}),(0,D.jsx)(b._,{menu:(0,D.jsx)(o.X,{uri:f,isPublished:n}),children:(0,D.jsx)(c.xd,{canEdit:B,onClick:()=>{if(_){const e=_.titleFactory().hitUiReveal();K.logInteraction(e)}z(p.w.TITLE)},dragUri:f,dragLabel:A,ariaLabel:l.ag.get("playlist.edit-details.button",A),children:A})}),j&&(0,D.jsx)(i.D,{variant:"mesto",className:g.Z.whiteOpacity,onClick:e=>{B&&(e=>{"href"in e.target||z(p.w.DESCRIPTION)})(e)},children:(0,D.jsx)(m.w,{html:j,onTimeStampClick:()=>{}})}),(0,D.jsx)(c.QS,{creators:W,onPiledCreatorsClick:Z,onCreatorClick:q,totalTracks:N,totalLikes:I??0,durationMilliseconds:O?.milliseconds,isEstimatedDuration:O?.isEstimate,newEntries:parseInt(F.new_entries_count||"0",10)})]})]})}},18840:(e,t,n)=>{n.d(t,{Z:()=>a});const a={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",playlist:"dZ3U5sTGUTdanNamXe1z",searchBoxContainer:"KodyK77Gzjb8NqPGpcgw",recommendedTrackList:"kwe0I8sSNMv3gYBjkRYP",playlistContent:"rezqw3Q4OEPB1m4rmwfw",playlistDescription:"fUYMR7LuRXv0KJWFvRZA",top:"PZkwbwJD1afoCmJkGt8w",header:"yP3JLuwUNDIQHxRFilK3",subtitle:"NCKSUYdZaTMrobq8ilkc",refreshButton:"QmGi2oa43BTcEZ5MCr9T",playlistImageContainer:"oq1ci28WPaRsWkvRiB_J",playlistInlineCurationSection:"Ykd_JWqkR9gSLHISDBwP",playlistInlineCurationTitle:"SMJIXlalPk_TESlyt2pC",playlistInlineCurationWrapper:"g9xHCCSXDR8S5NvTbfwL",playlistInlineCurationCloseButton:"FC40AOSbVM9LXjVi7bjO",playlistInlineCurationBackButton:"hVcUafGrnsA6nD1dJzc5",artistResultListTitle:"rARdlCShKVQsvuXamFOX",seeMore:"STDuzt77yRCueC4Ohenl",emptyStateContainer:"Bl_kg24BjWgcXPokgEKy",searchResultListContainer:"sAPXlA_oxu_8x1Cn0NTC",emptySearchTermContainer:"_Z2TnFjt8GB5ryOtvyti",whiteOpacity:"jpVuvMOCbpaRr_6FLf3W",noBooklistSupportContainer:"u9KYiVXeDRQDGlTDH6rM",icon:"tzeKawjOOKFw1KfQ34mG"}}}]);
//# sourceMappingURL=9421.js.map