"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7790],{47284:(e,i,t)=>{t.d(i,{U:()=>F});var s=t(59239),n=t(79474),a=t(22466),r=t(97500),l=t.n(r),u=t(83648),o=t(98891),c=t(12185),d=t(71662),m=t(57689),x=t(98678),h=t(66324),p=t(81465);var g=t(6174),y=t(89199);const j="BkpKedcdaMGbvgXMlmcg",b="muYk5XIwKmqR9iNibk_f",f="OEFWODerafYHGp09iLlA",v="m20ShRDiGGDpJ5LSABTi",C="Hvv0e7WKQ4kyftgSQJhg",k="yxf_6IsQEmHjijEBUMTP",N="oaNVBli46GtVjaQKB15g",P="JdlKTdpMquftpMwwegZo",I="Nts_ArOCGeROTDZND3M6",E="FvDsfgxSvLvL3q8d7nQv";var R=t(13274);const w=({items:e,activeItemId:i})=>(0,R.jsx)(g.W,{children:e.map((e=>e.disabled?(0,R.jsx)(y.D,{disabled:!0,role:"menuitemradio",className:k,onClick:e.handleClick,children:e.title},e.uri):(0,R.jsx)(y.D,{role:"menuitemradio",to:e.to,end:!0,"aria-checked":e.itemId===i,className:({isActive:e})=>l()(k,{[N]:e}),onClick:e.handleClick,children:e.title},e.uri)))});var U=t(70955);const A=(0,n.memo)((function({isCentered:e,links:i,landmarkLabel:t,className:s}){const r=(0,n.useRef)(null),[g,y]=(0,n.useState)([]),[k,A]=(0,n.useState)(0),[S,O]=(0,n.useState)([]),T=function(){const[e,i]=(0,n.useState)(window.innerWidth),{scrollNodeChildRef:t}=(0,n.useContext)(h.bi),s=(0,x.YQ)((e=>{e?.width&&i(e.width)}),250);return(0,p.w)({refOrElement:t,observeOnly:"width",onResize:s}),e}()??1/0,{pathname:Q}=(0,u.zy)(),q=i.find((e=>e.to===Q));return(0,n.useEffect)((()=>{r.current&&A(r.current.clientWidth)}),[T]),(0,n.useEffect)((()=>{if(!r.current)return;const e=Array.from(r.current.children).map((e=>e.clientWidth));y(e)}),[i]),(0,n.useEffect)((()=>{if(!r.current)return;if(g.slice(0,-1).reduce(((e,i)=>e+i),0)<=k)return void O([]);const e=g.reduce(((e,i)=>e>i?e:i),0),i=[];let t=e;g.forEach(((e,s)=>{k>=t+e?t+=e:i.push(s)})),O(i)}),[k,g]),(0,R.jsx)("nav",{className:l()(s,j),"aria-label":t,children:(0,R.jsxs)("ul",{className:e?b:I,ref:r,children:[i.filter(((e,i)=>!S.includes(i))).map((e=>{const i=e?.render??(e=>e);return(0,R.jsx)(n.Fragment,{children:i((0,R.jsx)("li",{className:f,children:e.disabled?(0,R.jsx)("div",{className:P,children:(0,R.jsx)(o.E,{variant:"bodySmallBold",children:e.title})}):(0,R.jsx)(U.k,{end:!0,className:({isActive:e})=>l()(P,{[N]:e}),to:e.to,onClick:e.handleClick,children:(0,R.jsx)(o.E,{variant:"bodySmallBold",children:e.title})})}))},e.to)})),S.length||0===g.length?(0,R.jsx)("li",{className:f,children:(0,R.jsx)(m.t,{renderInline:!0,menu:(0,R.jsx)(w,{items:i.filter(((e,i)=>S.includes(i))),activeItemId:q?.itemId}),children:(e,i,t)=>(0,R.jsxs)("button",{className:l()(v,{[C]:q}),type:"button",onClick:i,ref:t,children:[(0,R.jsx)(o.E,{variant:"bodySmallBold",children:q?q.title:a.Ru.get("more")}),e?(0,R.jsx)(c.J,{size:"small",className:E,"aria-hidden":"true"}):(0,R.jsx)(d.y,{size:"small",className:E,"aria-hidden":"true"})]})})}):null]})})}));var S=t(63963),O=t(38186),T=t(75004);const Q="vhW0kRN8JJD5UwW4TdXi",q=()=>{const e=(0,T.U)(),i=(0,n.useCallback)((e=>(0,R.jsx)(O.u,{placement:"bottomEnd",arrow:"topStart",title:a.Ru.get("pick-and-shuffle.upsell.title.queue"),children:e})),[]),t=(0,n.useMemo)((()=>[{title:a.Ru.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue",render:i,disabled:e},{title:a.Ru.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]),[e,i]);return(0,R.jsx)(S.g,{children:(0,R.jsx)(A,{className:Q,links:t})})},F=({children:e})=>{const i=(0,s.yM)();return(0,R.jsxs)("section",{className:"contentSpacing",children:[e,i&&(0,R.jsx)(q,{})]})}},40329:(e,i,t)=>{t.r(i),t.d(i,{default:()=>Qe});var s=t(79474),n=t(97500),a=t.n(n),r=t(98891),l=t(48822),u=t(49326),o=t(22466),c=t(33783),d=t(40006),m=t(88588),x=t(30620),h=t(53346),p=t(40088),g=t(22929),y=t(26683),j=t(13274);const b=({onClick:e})=>(0,j.jsx)(y.n,{onClick:e,size:"small",children:o.Ru.get("queue.clear-queue")});var f=t(76863),v=t(3001),C=t(18722),k=t(2884),N=t(24297),P=t(3561),I=t(78776),E=t(66758),R=t(28506),w=t(5486),U=t(35232),A=t(49066),S=t(42311),O=t(70431),T=t(91655),Q=t(65903),q=t(61444),F=t(20370),$=t(28123),L=t(64647),D=t(42524),M=t(48521),B=t(97249),_=t(61988),K=t(7535),G=t(94726),z=t(36943),H=t(1879),W=t(72078),Y=t(61691),Z=t(67683),J=t(9869),V=t(50859),X=t(28304),ee=t(6165),ie=t(12157),te=t(63378),se=t(98046),ne=t(31853),ae=t(12010),re=t(23556),le=t(32345),ue=t(40393),oe=t(30994),ce=t(13709),de=t(45129),me=t(75773),xe=t(25046),he=t(1250),pe=t(56404),ge=t(85438),ye=t(78784),je=t(60508),be=t(7001);let fe=function(e){return e.TRACK="track",e.EPISODE="episode",e.CHAPTER="chapter",e.LOCAL="local",e.AD="ad",e}({});const ve=s.memo((function({uri:e,uid:i,contextUri:t,name:n,duration_ms:a,artists:r,index:l,rowNumberOffset:u,imgUrl:c,isExplicit:d,isPlayable:m,isMOGEFRestricted:p,album:y,type:b,section:f,usePlayContextItem:v,isAutoPlay:k=!1,isEnhanced:N,queueSpec:P,trackContextUri:I}){const E=(0,J.s)(),R=(0,h.K)(),{triggerPlay:w,togglePlay:U}=v({uid:i,uri:e,index:l}),{spec:A}=(0,g.r)(Q.i,{data:{position:l,reason:"",uri:e}}),{isActive:S,isPlaying:O}=(0,Y.te)(e),ve=(0,s.useCallback)(((t,s)=>{i?w({loggingParams:s},(()=>R.skipToNext({uri:e,uid:i}))):w({loggingParams:s})}),[R,w,e,i]),Ce=(0,s.useCallback)((t=>{i?U({loggingParams:t},(()=>S?O?R.pause():R.resume():R.skipToNext({uri:e,uid:i}))):U({loggingParams:t})}),[R,U,e,i,S,O]),ke=b===fe.TRACK,Ne=b===fe.EPISODE,Pe=b===fe.CHAPTER,Ie=Ne&&"video"===y?.mediaType,Ee=b===fe.LOCAL,Re=b===fe.AD,we=r?.map((e=>e.name)).join(o.Ru.getSeparator())||"",Ue=(0,W.T)(e),Ae=(0,pe.g)(e,m,(0,q.Pk)(e)),{badges:Se,hasBadges:Oe}=(0,V.b)({downloadAvailability:Ue,isExplicit:d,isMOGEFRestricted:p,isEnhanced:N}),Te=(0,je.X)();let Qe;Qe=Ne?(0,j.jsx)(L.b,{uri:e,uid:k?void 0:i,showUri:y.uri,contextUri:t}):Pe?(0,j.jsx)($.r,{uri:e,removeFromQueueData:{uid:k?void 0:i,contextUri:t}}):Ee?(0,j.jsx)(D.A,{uri:e,uid:k?void 0:i,contextUri:t}):Re?null:(0,j.jsx)(M.P,{uri:e,uid:k?void 0:i,albumUri:y.uri,artists:r,contextUri:t,entityContextUri:I,isSmartRecommendation:N});const qe=(0,s.useCallback)(((t,s)=>{const{meta:n,uris:a}=t,r=a.map((e=>({uri:e,uid:null})));let l;l=s===_.Y.Before?{before:{uri:e,uid:i??null}}:{after:{uri:e,uid:i??null}},n.section===C.$.NowPlaying?R.addToQueue(r):n.origin===C.$.NowPlaying?R.insertIntoQueue(r,l):R.reorderQueue(r,l)}),[R,i,e]),Fe=(0,s.useCallback)(((t,s)=>{const{items:n}=t;let a;a=s===_.Y.Before?{before:{uri:e,uid:i??null}}:{after:{uri:e,uid:i??null}},R.reorderQueue(n,a)}),[R,i,e]),$e=k?[]:[K.O[q.NQ.TRACK],K.O[q.NQ.EPISODE]],{trackPageEnhancedEnabled:Le,trackPageLinksNoLyricsEnabled:De}=(0,be.Zo)(),Me=ke&&(Le||De);return(0,j.jsx)(x.pZ,{value:"row",index:l,children:(0,j.jsx)(F.h,{menu:Qe,children:(0,j.jsxs)(_.w,{uri:e,contextUri:t,index:l,onTriggerPlay:ve,isActive:f===C.$.NowPlaying&&S,ariaRowIndex:l,isPlayable:Ae,ageRestricted:p,spec:A,dragMetadata:{name:n,createdBy:we,sectionId:f},onInsert:(i,t,s,n,a)=>{qe({uris:i,dropIndex:t,meta:a},s),P&&E.logInteraction(P.dragAddItemToQueue({itemToAddToQueue:e}))},onMove:(e,i,t,s)=>{Fe({items:e,dropIndex:i,meta:s},t),P&&E.logInteraction(P.dragSort())},allowedDropTypes:$e,children:[(0,j.jsx)(ce.y,{ariaColIndex:0,children:(0,j.jsx)(re.$,{uri:e,playAriaLabel:o.Ru.get("tracklist.a11y.play",n,we),isPlaying:f===C.$.NowPlaying&&O,isActive:f===C.$.NowPlaying&&S,spec:A,onClick:(e,i)=>{Ce(i)},children:(0,j.jsx)(ue.a,{children:l+u+1})})}),(0,j.jsxs)(de.U,{ariaColIndex:1,children:[(0,j.jsx)(ne.e,{src:c,isVideo:Ie,isEpisode:Ne||Pe}),(0,j.jsxs)(ae.l,{children:[(0,j.jsx)(X.R,{enabled:Me,uri:e,children:(0,j.jsx)(he.p,{titleText:n,children:n})}),Oe&&(0,j.jsxs)(te.P,{children:[Se.enhanced&&(0,j.jsx)(T.R,{size:"small",className:B.A.enhanced,title:o.Ru.get("web-player.smart-shuffle.icon-hover-label"),"aria-label":o.Ru.get("web-player.smart-shuffle.icon-hover-label")}),Se.download&&(0,j.jsx)(G._,{}),Se.explicit&&(0,j.jsx)(z.g,{}),Se.nineteen&&(0,j.jsx)(H.q,{className:B.A.nineteen,size:16})]}),(0,j.jsxs)(xe.p,{children:[ke&&(0,j.jsx)(ie.l,{artists:r,spec:A}),(Ne||Ee)&&!Ie&&we]})]})]}),(0,j.jsx)(me.o,{ariaColIndex:2,children:(0,j.jsx)(ee.g,{nonInteractive:Ee,uri:y.uri,name:y.name,creatorUri:r?.[0]?.uri,spec:A,children:y.name})}),(0,j.jsxs)(oe.l,{ariaColIndex:3,children:[N&&Te&&(0,j.jsx)(Z.r,{spec:A,children:(0,j.jsx)(ye.o,{className:B.A.rowFeedback,contextUri:I,id:i??void 0,uri:e,isActive:f===C.$.NowPlaying&&S})}),!Pe&&!N&&(0,j.jsx)(ge.d,{uri:e,type:b}),(0,j.jsx)(se.P,{duration:a}),(0,j.jsx)(le.Y,{menu:Qe,label:o.Ru.get("more.label.track",n,we),spec:A})]})]})})})}),((e,i)=>e.uri===i.uri&&e.index===i.index&&e.name===i.name&&e.isEnhanced===i.isEnhanced));var Ce=t(55559),ke=t(52198);const Ne=s.memo((function({tracks:e,ariaLabel:i,contextUri:t,currentlyPlayingContextUri:n=t,rowNumberOffset:a=0,section:r,usePlayContextItem:l}){const u=(0,P.W)(),c=(0,h.K)(),d=(0,s.useCallback)(((e,i)=>{u({intent:"remove-from-queue",type:"click"}),c.removeFromQueue(e).then(i)}),[c,u]),m=(0,s.useCallback)(((e,i)=>{if((0,w.p)(e)){const s=(0,O.g)(e.show?.images,{desiredSize:40});return(0,j.jsx)(ve,{index:i,rowNumberOffset:a,imgUrl:s?.url||"",uri:(0,I.a)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.show.name,uri:e.show.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:fe.EPISODE,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider},`${i}${a}${e.uid}`)}if((0,R.d)(e)){const s=(0,O.g)(e.images||void 0,{desiredSize:40});return(0,j.jsx)(ve,{index:i,rowNumberOffset:a,imgUrl:s?.url||"",uri:(0,I.a)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.book.name,uri:e.book.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:fe.CHAPTER,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider},`${i}${a}${e.uid}`)}if((0,E.N)(e)){const s=(0,O.g)(e.images||void 0,{desiredSize:40});return(0,j.jsx)(ve,{index:i,rowNumberOffset:a,imgUrl:s?.url||"",uri:e.uri,uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.advertiser??e.title??o.Ru.get("ad-formats.advertisement"),artists:[],album:{name:"",uri:""},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:fe.AD,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider,isEnhanced:!1},`${i}${a}${e.uid}`)}if((0,U.v)(e)||(0,A.v)(e)){const s=(0,O.g)(e?.album?.images,{desiredSize:40}),u=e.type===S.c.TRACK?e:null;return(0,j.jsx)(ve,{index:i,rowNumberOffset:a,imgUrl:s?.url||"",uri:(0,I.a)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,album:e.album,isExplicit:u?.isExplicit??!1,isPlayable:!0,isMOGEFRestricted:u?.is19PlusOnly??!1,type:u?.isLocal?fe.LOCAL:fe.TRACK,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider,isEnhanced:(0,N.N)(e),trackContextUri:e.metadata?.context_uri??n},`${i}${a}${e.uid}`)}return(0,j.jsx)(Ce.nd,{height:`${ke.FL}px`})}),[a,t,n,r,l]),x=(0,s.useMemo)((()=>[k.$.INDEX,k.$.TITLE_AND_ARTIST,k.$.ALBUM,k.$.DURATION]),[]),p=(0,s.useCallback)((e=>({uri:e.uri,uid:e.uid??e.uri})),[]);return(0,j.jsx)(ke.S4,{ariaLabel:i,tracks:e,nrTracks:e.length,onRemove:d,renderRow:m,resolveItem:p,columns:x})}));var Pe=t(48666);const Ie="rHpv7osDRvs3SUPMpQ_g",Ee="DG9CsoFIptJhAneKoo_F",Re="jf2HafzDEI9jn7Yo05eM",we="H3Puuvc2nV0GoZRrfpRS",Ue="HckHyQocDDePWQL2baOY",Ae=()=>{const{uri:e,description:i,current:t,nextUp:n,queued:y,isEmpty:k,hasQueuedTracks:N,hasNextTracks:P}=(0,Pe.H)(),{spec:I,logger:E,UBIFragment:R}=(0,g.r)(l.i,{data:{identifier:u.$h.NOWPLAYING_QUEUE,uri:e??""}}),w=(0,s.useMemo)((()=>I.nowPlayingSectionFactory()),[I]),U=(0,s.useMemo)((()=>I.nextInQueueSectionFactory()),[I]),A=(0,s.useMemo)((()=>I.nextFromSectionFactory()),[I]),S=(0,h.K)(),[O,T]=(0,s.useState)(!1),Q=(0,s.useCallback)((()=>{T(!1)}),[T]),q=(0,s.useCallback)((()=>{S.clearQueue(),T(!1)}),[S]),F=(0,s.useCallback)((()=>{let e;const i=U.clearQueueButtonFactory();y.length>0&&(e=i.hitRemoveItemsFromQueue({numberOfItemsToRemoveFromQueue:y.length}),E.logInteraction(e))}),[E,U,y.length]),$=(0,s.useCallback)((async()=>{F(),T(!0)}),[F]),{usePlayContextItem:L}=(0,p.P)({uri:e??""},{featureIdentifier:"queue"}),D=(0,s.useCallback)((async()=>{if(!P)return;const i=I.nextFromSectionFactory().queueContextLinkFactory().hitUiNavigate({destination:e??""});E.logInteraction(i)}),[P,E,I,e]);return(0,be.oQ)(be.VW.QueuePage),k?(0,j.jsx)(v.K,{}):(0,j.jsxs)("div",{className:Ie,children:[(0,j.jsx)(c.Q,{children:o.Ru.get("queue.page-title")}),(0,j.jsx)(R,{spec:I,children:(0,j.jsx)(m.Z,{className:Ee,emptyStateComponent:(0,j.jsx)(r.E,{as:"h1",variant:"titleSmall",semanticColor:"textBase",className:Ee,children:o.Ru.get("playback-control.queue")})})}),t&&e&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.E,{as:"h2",variant:"bodyMediumBold",semanticColor:"textSubdued",className:Re,children:o.Ru.get("queue.now-playing")}),(0,j.jsx)(R,{spec:w,children:(0,j.jsx)(x.pZ,{value:"now-playing",children:(0,j.jsx)(Ne,{ariaLabel:o.Ru.get("queue.now-playing"),tracks:[t],contextUri:e,section:C.$.NowPlaying,usePlayContextItem:L})})})]}),N&&e&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:a()(Ue,Re),children:[(0,j.jsx)(r.E,{as:"h2",variant:"bodyMediumBold",semanticColor:"textSubdued",children:o.Ru.get("queue.next-in-queue")}),N&&(0,j.jsx)(b,{onClick:$})]}),(0,j.jsx)(R,{spec:U,children:(0,j.jsx)(x.pZ,{value:"next-in-queue",children:(0,j.jsx)(Ne,{ariaLabel:o.Ru.get("queue.next-in-queue"),tracks:y,rowNumberOffset:1,contextUri:"spotify:app:queue:NextInQueue",currentlyPlayingContextUri:e,section:C.$.NextInQueue,usePlayContextItem:L})})})]}),P&&e&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.E,{as:"h2",variant:"bodyMediumBold",semanticColor:"textSubdued",className:Re,children:i&&!(0,Pe.K)(t)?(0,j.jsxs)("span",{className:"standalone-ellipsis-one-line",children:[o.Ru.get("queue.next-from")," ",(0,j.jsx)(d.Link,{className:we,to:e,onClick:D,children:i})]}):o.Ru.get("queue.next-up")}),(0,j.jsx)(R,{spec:A,children:(0,j.jsx)(x.pZ,{value:"next-up",children:(0,j.jsx)(Ne,{ariaLabel:o.Ru.get("queue.next-up"),tracks:n,rowNumberOffset:1+(y?.length||0),contextUri:"spotify:app:queue:NextUp",currentlyPlayingContextUri:e,section:C.$.NextUp,usePlayContextItem:L})})})]}),(0,j.jsx)(f.p,{itemCount:y?.length||0,isOpen:O,onClose:Q,onConfirm:q})]})};var Se=t(47284),Oe=t(75004),Te=t(30719);const Qe=()=>(0,Oe.U)()?(0,j.jsx)(Te.InstrumentedRedirect,{to:"/history"}):(0,j.jsx)(Se.U,{children:(0,j.jsx)(s.Suspense,{fallback:null,children:(0,j.jsx)(Ae,{})})})},78776:(e,i,t)=>{t.d(i,{a:()=>s});const s=e=>e?.linked_from?.uri||e.uri}}]);
//# sourceMappingURL=xpui-routes-queue-page.js.map