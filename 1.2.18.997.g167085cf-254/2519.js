"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[2519],{72519:(e,t,n)=>{n.r(t),n.d(t,{default:()=>we});var a=n(59496),i=n(83792),s=n(97601),r=n(4075),l=n(70356),o=n(14887),c=n(30099),d=n(88566),u=n(64188),m=n(70304),g=n(29405),h=n(90784),x=n(18112),y=n(4229),p=n(13138),f=n(34046),b=n(46927),I=n(40006),j=n(62168),R=n(68224),v=n(44711),k=n(68985),C=n(45980),P=n(99548),E=n(58745),w=n(6285),U=n(22051),T=n(98484),S=n(33053),A=n(42365);const B="z9JdxJgW3OxYysR2dkal";var F=n(4637);function _(e){return"function"==typeof e}const M=function({contextUri:e,title:t,message:n,children:i}){const s=(0,a.useRef)(null),[r,l]=(0,a.useState)(!1),[o,d]=(0,a.useState)("topStart"),u=(0,a.useCallback)((()=>{l(!1),s.current?.focus()}),[]),m=(0,a.useCallback)((()=>{l(!0)}),[]),{setIsEnhanced:g}=(0,A.U)(e),h=(0,a.useRef)(null);return(0,a.useEffect)((()=>{if(h.current){if(!h.current)return;const{top:e,bottom:t}=h.current.getBoundingClientRect(),n=16;e<n?d("bottomStart"):t>window.innerHeight-n&&d("topStart")}}),[r]),(0,F.jsx)(P.x,{onShow:m,onHide:u,placement:o,withPortal:!0,overlay:r&&(0,F.jsx)(S.i,{children:(0,F.jsx)("div",{className:"encore-dark-theme",ref:h,children:(0,F.jsxs)(E.J,{role:"alertdialog",popoverTitle:t,arrow:"topStart"===o?"bottomEnd":"topEnd",colorSet:"announcement",children:[n,(0,F.jsxs)("div",{className:B,children:[(0,F.jsx)(w.o,{buttonSize:U.z.sm,onClick:u,children:c.ag.get("web-player.enhance.missing-functionality-callout.dismiss")}),(0,F.jsx)(T.D,{buttonSize:U.z.sm,onClick:()=>{u(),g(!1)},colorSet:"invertedLight",children:c.ag.get("web-player.enhance.missing-functionality-callout.turn-off-enhance")})]})]})})}),children:_(i)?(0,F.jsx)(F.Fragment,{children:i(m)}):i})};var N=n(5684),D=n(26473);const L="A4dupilHPIEDfhXDE0m0",O="JYAfUd8XXrVwcPbq9QaC",z=a.memo((function({uri:e,onClickTogglePlay:t,isPlaying:n,backgroundColor:i,canPlay:s,canFilter:r,canSort:l,isPlaylist:o,isEnhanced:d}){const u=(0,D.j)();return(0,F.jsx)(b.o,{backgroundColor:i,children:(0,F.jsxs)(b.F,{children:[s?(0,F.jsx)(R.$,{onClick:t,isPlaying:n,size:u,uri:e}):null,(0,F.jsx)(C.v,{uri:e}),o&&(0,F.jsx)(k.y,{menu:(0,F.jsx)(j.X,{uri:e,isEnhanced:d}),children:(0,F.jsx)(I.MoreButton,{size:u})}),(r||l)&&(0,F.jsxs)("div",{className:O,children:[r&&(0,F.jsx)(a.Suspense,{fallback:null,children:(0,F.jsx)(M,{contextUri:e,title:c.ag.get("web-player.enhance.missing-functionality-callout.filtering-playlist-disabled-title"),message:c.ag.get("web-player.enhance.missing-functionality-callout.filtering-playlist-disabled-message"),children:e=>(0,F.jsx)(N.K,{placeholder:c.ag.get("playlist.search_in_playlist"),onActivate:()=>(e(),!1)})})}),l&&(0,F.jsx)(M,{contextUri:e,title:c.ag.get("web-player.enhance.missing-functionality-callout.sorting-playlist-disabled-title"),message:c.ag.get("web-player.enhance.missing-functionality-callout.sorting-playlist-disabled-message"),children:(0,F.jsx)(v.l,{columns:[],disabled:!0})})]})]})})}));var $=n(11291),K=n(39987),J=n(73195),X=n(36342),Z=n(87283),Q=n(7442),H=n(15644),G=n(25639),V=n(34997),W=n(91753),Y=n(28544),q=n(39067),ee=n(51431),te=n(84351),ne=n(90216),ae=n(42808),ie=n(19341),se=n(40981),re=n(46447),le=n(4085),oe=n(29553),ce=n(54110),de=n(57161),ue=n(76264),me=n(84875),ge=n.n(me),he=n(54781);const xe="TRDgmejiOzKjissuLFSx",ye=({onClick:e=(()=>{}),className:t,label:n,ariaLabel:a=n,Icon:i})=>(0,F.jsx)(he.ws,{label:n,children:(0,F.jsx)("button",{type:"button","aria-label":a,className:ge()(xe,t),onClick:e,children:(0,F.jsx)(i,{iconSize:16})})});var pe=n(17106);const fe=a.memo((function({uri:e,uid:t,name:n,durationMs:a,artists:i,album:s,isMOGEFRestricted:r,isExplicit:l,isPlayable:d,index:u,playIndex:m=null,imgUrl:g,contextUri:h,usePlayContextItem:x,isEnhanced:y,playContextPageIndex:p,isFirstRecommendation:b,add:I,remove:j,canBeRemovedFromPlaylist:R,addedBy:v,addedAt:k}){const C=(0,ce._)(e),P=(0,pe.k)(e,d),{badges:E,hasBadges:w}=(0,de.r)({downloadAvailability:C,isExplicit:l,isMOGEFRestricted:r,isEnhanced:y}),U=u+1,T=i.items.map((e=>({uri:e.uri,name:e.profile.name}))),S=(0,F.jsx)(ee.$,{uri:e,uid:t,albumUri:s?.uri,artists:T,contextUri:h,isRecommendation:y,removePlaylistItems:()=>j([t]),removeRecommendation:()=>j([t]),addRecommendation:()=>I(t),canBeRemovedFromPlaylist:R}),A=T?.map((e=>e.name)).join(c.ag.getSeparator())||"",{isActive:B,isPlaying:_,triggerPlay:M,togglePlay:N}=x({uid:t,uri:e,index:m??u,pageIndex:p}),{spec:D,logger:L}=(0,f.fU)(K.r,{data:{position:u,reason:"",uri:e}}),O=(0,F.jsx)(ye,{onClick:()=>{I(t),L.logInteraction(D.addRecommendationButtonFactory().hitAddToPlaylist({playlist:h,itemToBeAdded:e}))},label:c.ag.get("web-player.enhance.button_label_keep_in_playlist"),Icon:W.G});return(0,F.jsx)(H.ZP,{value:"row",index:u,children:(0,F.jsx)(se._,{menu:S,children:(0,F.jsxs)(ie.c,{uri:e,contextUri:h,index:u,onTriggerPlay:(e,t)=>{M({loggingParams:t})},isActive:B,ariaRowIndex:u+1,isPlayable:P,ageRestricted:r,dragMetadata:{name:n,createdBy:A},spec:D,removePlaylistItems:e=>j(e.map((e=>e.uid))),children:[(0,F.jsx)(ne.Dd,{ariaColIndex:0,children:(0,F.jsx)(ne.Du,{uri:e,playAriaLabel:c.ag.get("tracklist.a11y.play",n,A),onClick:(e,t)=>{N({loggingParams:t})},isPlaying:_,isActive:B,spec:D,children:(0,F.jsx)(ne.km,{children:U})})}),(0,F.jsxs)(ne.vZ,{ariaColIndex:1,children:[(0,F.jsx)(ne.lD,{src:g}),(0,F.jsxs)(ne.vm,{children:[(0,F.jsx)(ne.Wh,{titleText:n,children:n}),w&&(0,F.jsxs)(ne.g3,{children:[E.enhanced&&(0,F.jsx)(Y._,{iconSize:16,className:ae.Z.enhanced,title:c.ag.get("web-player.enhance.button_text_enhanced"),"aria-label":c.ag.get("web-player.enhance.button_text_enhanced")}),E.download&&(0,F.jsx)(re.G,{size:16}),E.explicit&&(0,F.jsx)(le.N,{}),E.paid&&(0,F.jsx)(te.g,{}),E.nineteen&&(0,F.jsx)(oe.X,{className:ae.Z.nineteen,size:16})]}),(0,F.jsx)(ne.K9,{children:(0,F.jsx)(ne.T6,{artists:T,spec:D})})]})]}),(0,F.jsx)(ne.UA,{ariaColIndex:2,children:s&&(0,F.jsx)(ne.BM,{uri:s.uri,name:s.name,creatorUri:T?.[0]?.uri,spec:D,children:s.name})}),(0,F.jsx)(ne.UA,{ariaColIndex:3,children:(0,F.jsx)(ne.p_,{name:v?.name||v?.id||"",uri:v?.id&&(0,o.QK)(v.id).toURI()||"",imageUrl:v?.avatar?.sources&&(0,V.X)(v?.avatar?.sources,{desiredWidth:24,desiredLabel:"small"})?.url||"",showAvatar:!0})}),(0,F.jsx)(ne.UA,{ariaColIndex:4,children:k?(0,F.jsx)(ne.Op,{dateAdded:k}):null}),(0,F.jsxs)(ne.mU,{ariaColIndex:5,children:[y?(0,F.jsxs)(F.Fragment,{children:[b?(0,F.jsx)(ue.T,{id:"enhance-add-recommendation",bodyText:c.ag.get("web-player.enhance.onboarding.add-recommendation-to-playlist"),shouldScrollIntoView:!0,children:O}):O,(0,F.jsx)(ye,{onClick:()=>{j([t]),L.logInteraction(D.removeRecommendationButtonFactory().hitRemoveRecommendation({recommendedItemUri:e,contextUri:h}))},label:c.ag.get("web-player.enhance.button_label_remove_from_playlist"),Icon:q.H})]}):(0,F.jsx)(ne.qS,{uri:e,type:"track",spec:D}),(0,F.jsx)(ne.A$,{duration:a}),(0,F.jsx)(ne.Zv,{menu:S,label:c.ag.get("more.label.track",n,A),spec:D})]})]})})})})),be=[Z.Q.INDEX,Z.Q.TITLE,Z.Q.ALBUM,Z.Q.ADDED_BY,Z.Q.ADDED_AT,Z.Q.DURATION],Ie=a.memo((function({ariaLabel:e,uri:t,name:n,usePlayContextItem:i,tracklistRef:s,fetchTracks:r,addRecommendation:l,removeItems:o,nrTracks:d,canBeRemovedFromPlaylist:u}){const m=(0,a.useRef)(!1),g=(0,Q.k)();(0,a.useEffect)((()=>{m.current&&g&&s?.current?.update(),m.current=!0}),[g,s]);const h=50,x=(0,a.useRef)((()=>{})),[y,p]=(0,a.useState)([]),{logger:b,spec:I,UBIFragment:j}=(0,f.fU)($.createDesktopTrackListEventFactory,{data:{uri:t,identifier:"enhanced-tracklist"}}),R=(0,a.useCallback)((()=>{if(s&&s.current){const{firstIndex:e,lastIndex:t}=s.current.getVisibleTrackWindow(),n=t-e;return Math.max(0,e-Math.round((h-n)/2))}return 0}),[s]),v=(0,a.useCallback)((e=>{x.current(),o({itemIds:e.map((({uid:e})=>e)),offset:R(),limit:h});const n=new Set(e.map((({uid:e})=>e))),a=s?.current?.getRows()||[],i=[];if(a.forEach(((e,t)=>{if(e&&n.has(e.uid)){const n={index:t,item:e};e.isEnhanced&&i.push(n)}})),i.length){let e;e=1===i.length?(0,K.r)({data:{uri:i[0].item.uri,position:i[0].index,reason:""}}).removeRecommendationButtonFactory().hitRemoveRecommendation({contextUri:t,recommendedItemUri:i[0].item.uri}):I.removeItemsButtonFactory().hitRemoveRecommendations({contextUri:t,numberOfRecommendationsToRemove:i.length}),e&&b.logInteraction(e)}}),[o,R,b,s,t,I]),k=(0,a.useCallback)((async(e,t)=>({items:await r(e,t),totalLength:d})),[r,d]),C=(0,a.useCallback)(((e,t)=>{x.current=t,e.length>1?p(e):v(e)}),[v]),P=(0,a.useCallback)((e=>{l({itemIds:[e],offset:R(),limit:h})}),[l,R]),E=(0,a.useCallback)((e=>{o({itemIds:e,offset:R(),limit:h})}),[o,R]),w=(0,a.useCallback)((function(e,n){const a=(0,V.X)(e.albumOfTrack?.coverArt?.sources,{desiredSize:40,desiredLabel:"small"});return(0,F.jsx)(fe,{index:n,playIndex:n,contextUri:t,uri:e.uri,uid:e.uid,isPlayable:e.playability.playable,durationMs:e.duration.totalMilliseconds,name:e.name,artists:e.artists,album:e.albumOfTrack,isExplicit:e.contentRating?.label===G.KS.Explicit,isMOGEFRestricted:e.contentRating?.label===G.KS.NineteenPlus,imgUrl:a?.url||"",usePlayContextItem:i,isEnhanced:e.isEnhanced,playContextPageIndex:e.playContextPageIndex,isFirstRecommendation:e.isFirstRecommendationOfPage&&n<h,add:P,remove:E,canBeRemovedFromPlaylist:u,addedBy:e.addedBy,addedAt:e.addedAt},e.uid)}),[i,t,P,E,u]),U=(0,a.useCallback)((e=>e.uri),[]),T=(0,a.useCallback)((e=>e.uid),[]);return(0,F.jsxs)(j,{spec:I,children:[(0,F.jsx)(H.ZP,{value:"playlist-tracklist",children:(0,F.jsx)(X.Pv,{testID:"playlist-tracklist",ariaLabel:e,hasHeaderRow:!0,columns:be,onRemove:C,renderRow:w,resolveUri:U,resolveUid:T,nrTracks:d,fetchTracks:k,limit:h,outerRef:s},t)}),(0,F.jsx)(J.h,{title:c.ag.get("playlist.remove_from_playlist",n),isOpen:y.length>0,tracks:y,onClose:e=>{e.stopPropagation(),p([])},onRemove:v})]})}));var je=n(7018),Re=n(72062),ve=n(19613),ke=n(97397);var Ce=n(10896),Pe=n(70326),Ee=n(95195);const we=a.memo((function({metadata:e,capabilities:t,featureIdentifier:n}){const{uri:b,name:I,images:j,totalLength:R}=e,[v]=j,k=(0,y.Z)(v?.url||null),C=(0,s.TH)(),P=(0,s.ur)(),E=(0,i.I0)(),w=(0,x.o)(),U=(0,a.useRef)(null),T=(0,o.nK)(b),{isEnhanced:S,playContext:B,numTotalItems:_,numTotalRecs:M,addRecommendation:N,removeItems:D,fetchTracks:O,enhancedInvalidationKey:$,shouldUnderlyingContextChangeRefreshView:K,UBIReason:J,clearCache:X,fetchIndexOfItemId:Z}=function(e){const t=(0,ke._)(),{isEnhanced:n,iteration:i,setIsEnhanced:s,toggleIsEnhanced:r}=(0,A.U)(e),[l,o]=(0,a.useState)(null),c=(0,a.useRef)(Date.now()),d=(0,a.useCallback)((()=>Date.now()-c.current>3e3),[]),u=(0,a.useRef)({}),m=(0,a.useRef)(null),g=(0,a.useCallback)((async(e,n,a,i,s,r,l)=>{r&&(c.current=Date.now());const d=m.current?.enhancedRevision;let g;try{g=await l}catch(r){409===r?.status&&(g=await t.getPage(e,n,a,i,s))}const h=g?.enhancePage;if(!h)return[];const{pageItems:x,...y}=h,p=await t.decoratePageItems(x);return d!==m.current?.enhancedRevision?[]:(m.current?.enhancedRevision!==y.enhancedRevision&&(r=!0),u.current=function(e,t,n,a){const i=a?{}:{...e};return t.forEach(((e,t)=>{i[n+t]=e})),i}(u.current,p,i,r),o(y),m.current=y,p)}),[t]),h=(0,a.useCallback)((async({itemIds:n,offset:a=0,limit:s=1})=>{m.current&&i&&g(e,i,m.current.sessionId,a,s,!0,t.addRecommendation(e,m.current.sessionId,n,a,s))}),[g,e,t,i]),x=(0,a.useCallback)((async({itemIds:n,offset:a=0,limit:s=1})=>{if(!m.current||!i)return;const r=u.current,l=new Set(n);let o=!1;for(const e in r)if(l.has(r[e].uid)&&r[e].isEnhanced){o=!0;break}g(e,i,m.current.sessionId,a,s,!0,t.removeItems(e,m.current.sessionId,n,a,s,o))}),[g,e,t,i]),y=(0,a.useMemo)((()=>new ve.tL),[]),p=(0,a.useCallback)((async(n,a)=>{if(!i)return[];const s=Math.min(a,(m.current?.numTotalItems||1/0)-n),r=Array.from({length:s},((e,t)=>u.current[t+n]));return r.every((e=>!!e))&&0!==s?r:g(e,i,m.current?.sessionId,n,a,!1,y.create(`${e}:${i}:${m.current?.sessionId}:${n}:${a}`,(()=>t.getPage(e,i,m.current?.sessionId,n,a))))}),[y,g,e,t,i]),f=(0,a.useMemo)((()=>({uri:e,url:l?.dspContextUri})),[e,l?.dspContextUri]),b=(0,a.useCallback)((()=>{u.current={}}),[]),I=(0,a.useCallback)((async n=>{if(!i)return-1;const{enhancePage:a}=await t.getPage(e,i,m.current?.sessionId,0,t.MAX_PAGE_SIZE);return a?.pageItems.findIndex((e=>e.itemId===n))??-1}),[t,i,e]);return{isEnhanced:n,setIsEnhanced:s,toggleIsEnhanced:r,addRecommendation:h,removeItems:x,playContext:f,numTotalItems:isNaN(Number(l?.numTotalItems))?void 0:Number(l?.numTotalItems),numTotalRecs:isNaN(Number(l?.numTotalRecs))?void 0:Number(l?.numTotalRecs),fetchTracks:p,clearCache:b,enhancedInvalidationKey:`${l?.enhancedRevision??""}${i??""}`,shouldUnderlyingContextChangeRefreshView:d,UBIReason:l?`enhanced|${l?.sessionId}#${l?.logging?.correlationId}`:"enhanced|",fetchIndexOfItemId:I}}(b),Q=(_??R)>0,H=t?.canFilter&&R>0,G=t?.canSort&&R>0;(0,a.useEffect)((()=>{if(S&&"POP"!==P){const e=new URLSearchParams(C.search).get("uid");if(!e)return;Z(e).then((e=>{-1!==e&&U.current?.scrollToIndex(e)}))}}),[Z,S,P,C.search]),(0,a.useEffect)((()=>{$&&U.current?.update()}),[$]),(0,a.useEffect)((()=>{K()&&(X(),U.current?.update())}),[R,X,K]);const{spec:V,logger:W,UBIFragment:Y}=(0,f.fU)(r.createDesktopEnhancedEventFactory,{data:{uri:b,identifier:"enhanced-session",reason:J}}),q=(0,a.useMemo)((()=>({header:V.headerFactory()})),[V]),{isPlaying:ee,isActive:te,togglePlay:ne,usePlayContextItem:ae}=(0,p.n)(B,{featureIdentifier:n}),ie=(0,a.useCallback)((()=>{let e;ne(),e=te?ee?V.playButtonFactory().hitPause({itemToBePaused:b}):V.playButtonFactory().hitResume({itemToBeResumed:b}):V.playButtonFactory().hitPlay({itemToBePlayed:b}),W.logInteraction(e)}),[ne,ee,te,W,V,b]),se=function(e=0){const{data:t}=(0,Ce.J)(Pe.n5.getUser,["spotify"]);return(0,a.useMemo)((()=>t?.body?{isOwner:!1,tracksAdded:e,user:{uri:t.body.uri,type:Ee.p.USER,username:t.body.id,displayName:t.body.display_name,images:t.body.images}}:null),[t,e])}(M),re=e.collaborators?.items?.concat()??[];se&&re.splice(je.ms-1,0,se);const le={count:re.length,items:re},oe=(0,a.useCallback)(((e,t)=>{const n=[...t[h.a[o.JM.ALBUM]]||[],...t[h.a[o.JM.TRACK]]||[]];n.length>0&&(E((0,d.jV)(b,n)),w({targetUri:b,intent:"add",type:"drop"}))}),[E,w,b]);return(0,F.jsx)(a.Suspense,{fallback:null,children:(0,F.jsx)(Re.e,{pageId:l.Wg.ENHANCED_SESSION,children:(0,F.jsxs)(Y,{spec:V,children:[(0,F.jsx)(m.$,{children:c.ag.get("playlist.page-title",I)}),(0,F.jsx)(u.Z,{types:[h.a[o.JM.ALBUM],h.a[o.JM.TRACK]],onDrop:oe,children:(0,F.jsxs)("section",{role:"presentation",className:L,"data-testid":"enhanced-page",children:[(0,F.jsxs)(Y,{spec:q.header,children:[(0,F.jsx)(g.s,{metadata:{...e,collaborators:le,duration:void 0,totalLength:_??R},isPlaying:ee,togglePlay:ie,backgroundColor:k}),(0,F.jsx)("div",{children:(0,F.jsx)(z,{uri:b,isPlaying:ee,backgroundColor:k,canPlay:Q,canFilter:H,canSort:G,isPlaylist:T,isEnhanced:S,onClickTogglePlay:ie})})]}),(0,F.jsx)("div",{className:"contentSpacing",children:(0,F.jsx)(a.Suspense,{fallback:null,children:(0,F.jsx)(Ie,{ariaLabel:I,nrTracks:_??Math.max(15,R),uri:b,name:I,usePlayContextItem:ae,tracklistRef:U,fetchTracks:O,addRecommendation:N,removeItems:D,canBeRemovedFromPlaylist:T},b)})})]})})]})})})}))}}]);
//# sourceMappingURL=2519.js.map