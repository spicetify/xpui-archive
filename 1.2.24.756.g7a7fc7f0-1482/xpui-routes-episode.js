"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3472],{32259:(e,t,s)=>{s.d(t,{o:()=>n});var i=s(54431),a=s(90797);function n(){return{version:(0,i.W6)(a.GEN)?2:1}}},99098:(e,t,s)=>{s.d(t,{p:()=>c,q:()=>n.q});var i=s(59496),a=s(72953),n=s(47603),r=s(94638),o=s(4637);const l=i.memo((function({uri:e,size:t=n.q.md,className:s,onClick:l,showUpsell:c}){const[d,u]=(0,a.Z)(e),p=(0,r.o)(),m=(0,i.useCallback)((()=>{p({targetUri:e,intent:d?"remove-from-library":"add-to-library",type:"click"}),u(!d)}),[p,e,d,u]);return(0,o.jsx)(n.o,{className:s,isFollowing:d,onFollow:m,onClick:l,uri:e,size:t,showUpsell:c})})),c=i.memo((function(e){return(0,o.jsx)(l,{...e})}))},36616:(e,t,s)=>{s.r(t),s.d(t,{default:()=>It});var i=s(59496),a=s(52529),n=s(54431),r=s(4068),o=s(73438),l=s(36820),c=s(50834),d=s(67497),u=s(28364),p=s(708),m=s(64641),h=s(90797),g=s(32259),x=s(53352),y=s(4637);const b=(0,i.lazy)((()=>s.e(4481).then(s.bind(s,34481)))),j=(0,i.lazy)((()=>s.e(7393).then(s.bind(s,97393))));function k(e){const t=(0,x.m)(),s=(0,n.W6)(h.XKk,{loadingValue:!1}),a=(0,g.o)();return t?s?e.uri?(0,y.jsx)(i.Suspense,{fallback:!0,children:(0,y.jsx)(j,{uri:e.uri})}):null:(0,y.jsx)(i.Suspense,{fallback:!0,children:(0,y.jsx)(b,{reason:"Episode page",...a,...e})}):null}const C="dpN5ViPOceUWNB5EQPHN",P="fBEA27lLw_sc60Zjd_qw",T="vBcxPq3E2okwgXOkVPEM",f="CxoSYuAjlcCDSOWnnbJe",v="HCCBXwdFvq6omWW2hR0N",I="bJOPO5Zo7dpjSVDwEpSw",S="TXdDDpokVTyJzDEDWHHf",E="tvj001zNcrC5VUZmTt9c",U="PC5kR03GYecc7syeoC0q",D="YldGldlfaI9myEGXQf9g",N="qJHVIpJn1vLPWsAKfTEZ",w="wSIzjkVlr0Zdy7di2vRm",L="hYS_K1NATGyWt6tCSRqQ",R="hVVaM4pF9arpQ8Nvn2a1",A="zf0Eac1LugsHUacz74Zf",M="TnNaqxbaI0hzhBQZ7wE0",B="zSw1lG1TNe_xm6KTqtCv",F="MlEQDkXnjdKKJueJ9kkB",O="jg0xlyD1yjh0DPNG6eOg",z="QiHXpFb4dLZNOFe5gpp3";var _=s(89518),W=s(46122),$=s(85730),H=s(51418),K=s(25894);const Z=({cardHeaderText:e,cardBodyText:t,buttonText:s,buttonTarget:i})=>(0,n.W6)(h.XdP)?(0,y.jsxs)("div",{className:D,children:[(0,y.jsxs)("div",{className:N,children:[(0,y.jsx)(_.D,{variant:"balladBold",semanticColor:"textBase",children:e}),(0,y.jsx)(_.D,{semanticColor:"textBase",children:t})]}),(0,y.jsx)(H.D,{buttonSize:"sm",colorSet:"invertedLight",href:(0,l.EC)(i).toURLPath(!0),component:K.Z,children:s})]}):null,V=({areHTMLDescriptionsEnabled:e,contentInformation:t,description:s,hasDescription:a,htmlDescription:r,onExpanded:o,onTimeStampClick:l,playability:d,showHeader:u=!0,spec:p})=>{const m=(0,$.$P)(),g=(a||t)&&u,x=(0,i.useCallback)((e=>{const t=p.readMoreButtonFactory();m.logInteraction(e?t.hitUiReveal():t.hitUiHide()),o?.()}),[p,m,o]),b=(0,n.W6)(h._nP,{loadingValue:!1});return(0,y.jsxs)(y.Fragment,{children:[g&&(0,y.jsx)(_.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:v,children:c.ag.get("episode.description-title")}),t&&(0,y.jsx)(Z,{cardHeaderText:t.cardHeaderText,cardBodyText:t.cardBodyText,buttonText:t.buttonText,buttonTarget:t.buttonTarget}),a&&(0,y.jsx)(W.o,{className:T,onTimeStampClick:l,maxLines:4,onExpanded:x,content:(s||"").trim(),htmlContent:e&&r?r:void 0,enableTimestamps:d.playable,enableAutomaticLinkification:b&&e&&!!r})]})};var q=s(84875),X=s.n(q),Y=s(78795),G=s(62323),Q=s(45340),J=s(85228),ee=s(77355),te=s(17956),se=function(e){return e.DESCRIPTION="description",e.TRANSCRIPT="transcript",e}(se||{});const ie=i.memo((function({transcriptSections:e,descriptionContent:t,transcriptContent:s,spec:a}){const n=(0,$.$P)(),[r,o]=(0,i.useState)(se.DESCRIPTION),l=(0,te.Mi)(),{ref:d,inView:u}=(0,Y.YD)({threshold:[1],root:l.current,rootMargin:`-${ee.K1+1}px 100000px 0px 100000px`}),p=(0,i.useRef)(null),m=(0,i.useCallback)((e=>{p.current=e,d(e)}),[d]);return(0,i.useEffect)((()=>{const e=p.current?.parentElement?.offsetTop,t=l?.current;if(!e||!t)return;const s=e-ee.K1;t.scrollTop>s&&t.scrollTo({top:s})}),[l,r]),(0,y.jsx)(G.l,{list:(0,y.jsxs)(Q.F,{className:X()(F,{[O]:!u}),ref:m,children:[(0,y.jsx)(J.c,{label:c.ag.get("web-player.episode.description"),sentenceCase:!0,active:r===se.DESCRIPTION,onClick:()=>{const e=a.tabsFactory().descriptionTabButtonFactory().hitUiReveal();n.logInteraction(e),o(se.DESCRIPTION)},className:X()(z,{[w]:r===se.DESCRIPTION})}),(0,y.jsx)(J.c,{label:c.ag.get("web-player.episode.transcript"),sentenceCase:!0,disabled:null===e,active:r===se.TRANSCRIPT,onClick:()=>{const e=a.tabsFactory().transcriptTabButtonFactory().hitUiReveal();n.logInteraction(e),o(se.TRANSCRIPT)},className:X()(z,{[w]:r===se.TRANSCRIPT})})]}),children:null===e||r===se.DESCRIPTION?t:s})}));var ae=s(11785),ne=s(79268),re=s(71308),oe=s(9144);const le=(0,i.memo)((function({transcriptSections:e,onTimeStampClick:t,episodeUri:s}){const{spec:i,logger:a}=(0,$.fU)(ae.m,{data:{uri:s}}),{isPlaying:n}=(0,re.n)({uri:s},{featureIdentifier:"episode"}),r=i.timestampLinkFactory();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:R,children:(0,y.jsx)(_.D,{variant:"viola",semanticColor:"textBase",children:c.ag.get("web-player.episode.transcript.disclaimer")})}),e.map(((e,i)=>{const o=`transcript-section-${i}`;return(0,y.jsxs)("div",{className:L,children:[(0,y.jsx)("button",{className:A,onClick:()=>{t(e.startMs,o),a.logInteraction(n?r.hitSeekToTime({msToSeekTo:e.startMs}):r.hitPlay({itemToBePlayed:s}))},children:(0,y.jsx)(ne.D,{id:o,targetURI:(0,l.EC)(s),fadeOut:!0,children:(0,y.jsx)(_.D,{variant:"finaleBold",semanticColor:"textSubdued",className:M,children:(0,oe.m)(e.startMs)})})}),e.content.map(((e,t)=>(0,y.jsx)(_.D,{variant:"viola",semanticColor:"textBase",className:B,dir:"auto",children:e},`transcript-text-${t}`)))]},o)}))]})}));var ce=s(72866),de=s(70613),ue=s(29550),pe=s(9154),me=s(99385),he=s(11565),ge=s(82344),xe=s(2182),ye=s(41798),be=s(44858),je=s(35992),ke=s(39019);const Ce="OYehkMWcGJRKPkByp46K",Pe="uc1bXkrZqrCz0CMK4lBb",Te="qZeibBbA3SVClzEueYND",fe=({episodeUri:e,index:t,duration:s,start:a,stop:n,name:r,uri:o,artists:l,album:d,playable:u})=>{const{isActive:p,isPlaying:m,onClick:h}=(0,ye.k)({episodeUri:e,start:a,stop:n}),g=(0,i.useCallback)(((e,t)=>{h(t)}),[h]),{spec:x}=(0,$.fU)(me.r,{data:{position:t,reason:"",uri:o}});return(0,y.jsx)(je.JL,{value:"row",index:t,children:(0,y.jsx)(be.xV,{trigger:"right-click",action:"open",menu:(0,y.jsx)(he.$,{uri:o}),children:(0,y.jsxs)(xe.c,{uri:o,index:t,ariaRowIndex:t+1,dragMetadata:{name:r,createdBy:l?.[0].name??""},onTriggerPlay:g,isActive:p,isPlayable:u,spec:x,children:[(0,y.jsxs)(ge.vZ,{ariaColIndex:0,children:[(0,y.jsx)(ge.Du,{uri:o,playAriaLabel:c.ag.get("tracklist.a11y.play",r,l?.[0].name),onClick:g,isPlaying:m,isActive:p,spec:x,children:(0,y.jsx)(ge.km,{children:(0,y.jsx)("img",{className:Pe,src:d.image,alt:d.name})})}),(0,y.jsxs)(ge.vm,{children:[(0,y.jsx)(ge.Wh,{titleText:r,children:r}),(0,y.jsx)(ge.K9,{children:(0,y.jsx)(ge.T6,{artists:l,spec:x})})]})]}),(0,y.jsx)(ge.UA,{ariaColIndex:1,children:(0,y.jsx)(ge.BM,{uri:d.uri,name:d.name,spec:x,children:d.name})}),(0,y.jsxs)(ge.mU,{ariaColIndex:2,children:[(0,y.jsx)(ke.f,{uri:o,spec:x}),(0,y.jsx)(ge.A$,{duration:s}),(0,y.jsx)(ge.Zv,{spec:x,menu:(0,y.jsx)(he.$,{uri:o,artists:l}),label:c.ag.get("more.label.track",r,l?.[0].name)})]})]})})})};function ve(e,t,s){return e.reduce(((e,i,a)=>((a>0||t>0)&&e.push({type:"SPACER",id:`spacer-${e.length}`}),"MUSIC"===i.type?e.push(function(e,t,s){return{type:"MUSIC",index:t,uri:s.uri,episodeUri:e,start:s.start,stop:s.stop,duration:s.duration,name:s.track.name,artists:s.track.artists,album:s.track.album,playable:s.track.playable}}(s,a,i)):"TALK"===i.type&&e.push(function(e,t,s){return{type:"TALK",index:t,uri:e,title:s.title,subtitle:s.subtitle,start:s.start,stop:s.stop,duration:s.duration,showUri:s.show.uri,showName:s.show.name}}(s,a,i)),e)),[])}const Ie=({uri:e,segmentCount:t})=>{const s=(0,ue.G)(),a=(0,i.useCallback)((async(i,a)=>{const n=Math.ceil(i/2);try{return{items:ve(await s.getSegments(e,n,a),n,e),totalLength:2*t-1}}catch(e){return{items:[],totalLength:0}}}),[t,s,e]),n=(0,i.useCallback)((t=>{switch(t.type){case"SPACER":return(0,y.jsx)("div",{className:Te},t.id);case"MUSIC":return(0,y.jsx)(fe,{...t},`${e}-${t.index}`);case"TALK":return(0,y.jsx)(ce.t,{...t},`${e}-${t.index}`);default:return(0,pe.U)(t)}}),[e]),r=c.ag.get("music_and_talk.in_this_episode");return(0,y.jsxs)("div",{children:[(0,y.jsx)(_.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:Ce,children:r}),(0,y.jsx)(de.Pv,{ariaLabel:r,hasHeaderRow:!0,rowPlaceholder:de.hU,columns:[de.QD.TITLE_AND_ARTIST,de.QD.ALBUM_OR_SHOW,de.QD.DURATION],renderRow:n,fetchTracks:a,resolveUri:e=>"MUSIC"===e.type?e.uri:"",limit:50,nrTracks:2*t-1,testID:"music-and-talk-tracklist"})]})};var Se=s(37513);const Ee=({areHTMLDescriptionsEnabled:e,contentInformation:t,description:s,hasDescription:a,hasMusicAndTalkSegements:n,htmlDescription:r,onExpanded:o,onDescriptionTimestampClick:l,onTranscriptTimestampClick:d,playability:u,segmentCount:p,showUrl:h,transcript:g,transcriptEnabled:x,uri:b,spec:j})=>{const C=(0,$.$P)(),P=(0,i.useMemo)((()=>j.descriptionSectionFactory()),[j]),T=(0,i.useMemo)((()=>P.trackListFactory()),[P]),[f,v]=(0,i.useState)(null),S=(0,i.useCallback)((async e=>{const t=await(0,Se.l)(e);v(t)}),[]);(0,i.useEffect)((()=>{g&&g.length>0&&S(g[0].cdnUrl)}),[S,g]);const E=i=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(V,{hasDescription:a,contentInformation:t,onTimeStampClick:l,onExpanded:o,description:s,areHTMLDescriptionsEnabled:e,htmlDescription:r,playability:u,showHeader:i,spec:P}),n&&(0,y.jsx)($.Nh,{spec:T,children:(0,y.jsx)(Ie,{segmentCount:p,uri:b})}),h&&(0,y.jsx)(m.P,{buttonSize:"sm",className:I,href:h,component:K.Z,onClick:()=>{C.logInteraction(P.allEpisodesLinkFactory().hitUiNavigate({destination:h}))},children:c.ag.get("episode.see_all_episodes")}),(0,y.jsx)(k,{uri:b})]});return(0,y.jsx)(y.Fragment,{children:x&&g&&g?.length>0?(0,y.jsx)(ie,{transcriptSections:f,descriptionContent:E(!1),transcriptContent:(0,y.jsx)(le,{transcriptSections:f||[],onTimeStampClick:d,episodeUri:b}),spec:j}):E(!0)})};var Ue=s(34211),De=s(21218),Ne=s(84294),we=s(53030);const Le="activation-trigger-mme",Re=({episodeUri:e,showUri:t,isLocked:s,isPlaying:i,isPlayDisabled:a,playButtonPlayLabel:n,playButtonPauseLabel:r,onClick:o,size:c="large"})=>{const d=(0,we.E)();if((0,De.g)())return(0,y.jsx)(Ne.f,{size:c,onClick:o,isPlaying:i,disabled:a,locked:s,ariaPlayLabel:n,ariaPauseLabel:r});const u=(0,y.jsx)(Ue.l,{showUri:t,enabled:s,renderInline:!1,children:(0,y.jsx)(Ne.f,{size:c,onClick:o,isPlaying:i,disabled:a,locked:s,ariaPlayLabel:n,ariaPauseLabel:r})});return d?(0,y.jsx)(ne.D,{id:Le,targetURI:(0,l.EC)(e),fadeOut:!0,children:u}):u};var Ae=s(94638),Me=s(41327),Be=s(88127),Fe=s(3701),Oe=s(80320),ze=s(69205),_e=s(92416),We=s(43667),$e=s(51458),He=s(10113),Ke=s(7431),Ze=s(24106),Ve=s(65457),qe=s(26804),Xe=s(99098),Ye=s(22817),Ge=s(84512),Qe=s(10530),Je=s(45836),et=s(54925),tt=s(45434),st=s(45748),it=s(62683),at=s(45032),nt=s(60536),rt=s(21733);const ot=({episode:e,onPlayEpisode:t,isPlaying:s,isActive:a,isFullyPlayed:r,setIsFullyPlayed:o,backgroundColor:l,isLocked:d,spec:u})=>{const{uri:p,playedState:m,contentRating:g,playability:x}=e,b=(0,$.$P)(),j=(0,Ze.I0)(),[k]=(0,st.z)(1e4,(e=>e?.item?.uri===p)),C=(0,ze.Y)((e=>e?.duration)),{badges:P}=(0,at.r)({contentRating:g?.label}),T=(0,i.useCallback)((e=>{!x.playable&&P.nineteen&&(e.stopPropagation(),j((0,Ve.RM)(p||"")))}),[p,x.playable,P.nineteen,j]),f=(0,i.useCallback)((()=>{const e=u.contextMenuButtonFactory().hitUiReveal();b.logInteraction(e)}),[b,u]),v=(0,i.useCallback)(((e,t)=>{(0,Je.l7)(t,u.downloadButtonFactory(),b,p)}),[b,u,p]),I=(0,i.useCallback)((e=>{const t=u.saveButtonFactory();b.logInteraction(e?t.hitLike({itemToBeLiked:p}):t.hitRemoveLike({itemNoLongerLiked:p}))}),[b,u,p]),E=!d&&!e.playability.playable,U=c.ag.get("tracklist.a11y.play",e.name,e.podcast?.name),D=c.ag.get("tracklist.a11y.pause",e.name,e.podcast?.name),N=e.podcast?.uri,w=(0,nt.j)(),L=(0,n.W6)(h.CEI,{loadingValue:!1});return(0,y.jsxs)(qe.o,{backgroundColor:l,children:[(0,y.jsxs)(qe.F,{children:[P.nineteen&&(0,y.jsx)(tt.X,{className:S,size:16}),(0,y.jsx)(it.E,{size:it.$.LARGE,fullyPlayed:r,durationMs:a&&C?C:e.duration.milliseconds,releaseDate:St(e.releaseDate?.isoString),resumePositionMs:m.playPositionMilliseconds,isPlaying:s,position:a&&k||void 0})]}),(0,y.jsxs)(qe.F,{children:[(0,y.jsx)("div",{onClick:T,children:(0,y.jsx)(Re,{episodeUri:e.uri,showUri:N,isLocked:d,onClick:()=>{t(m.playPositionMilliseconds)},isPlaying:s,isPlayDisabled:E,playButtonPlayLabel:U,playButtonPauseLabel:D,size:w})}),!d&&(0,y.jsx)(Xe.p,{uri:e.uri,onClick:v,size:w}),L?(0,y.jsx)(rt.T,{uri:e.uri,size:w}):(0,y.jsx)(Ge.w,{uri:e.uri,size:w,onClick:I}),(0,y.jsx)(et.y,{onShow:f,menu:(0,y.jsx)(Qe.k,{uri:e.uri,sharingInfo:e.sharingInfo,showUri:N,contextUri:e.uri,isPlayed:r,onMarkAsPlayed:o}),children:(0,y.jsx)(Ye.z,{label:c.ag.get("more.label.context",e.name),size:w})})]})]})};var lt=s(78642),ct=s(50341),dt=s(93268),ut=s(79728),pt=s(87278),mt=s(95493),ht=s(47517),gt=s(16263),xt=s(25192),yt=s(35476),bt=s(80041),jt=s(12623);const kt=({coverArt:e,name:t})=>{const s=(0,yt.jh)(),i=s===yt.Uo.SMALL||s===yt.Uo.XSMALL;return(0,y.jsx)(bt.O,{images:e,type:Ke.p.EPISODE,shape:bt.K.ROUNDED_CORNERS,title:t,size:i?jt.m$.SIZE_20:jt.m$.SIZE_24,className:E})};const Ct=({episode:e,isFullyPlayed:t,setIsFullyPlayed:s,backgroundColor:a,spec:r})=>{const{uri:o,name:d,sharingInfo:u,playedState:p,episodeType:m,releaseDate:g,coverArt:x}=e,b=(0,$.$P)(),j=function(e,t,s,i,a){const n=t===He.Wf.Episode;return(0,xt.G3)(e,i,s,a)?(0,y.jsx)(xt.Fg,{isMusicAndTalk:n}):n?c.ag.get("type.showEpisode"):c.ag.get("type.podcastEpisode")}(o,m||He.Wf.Unknown,p.playPositionMilliseconds,St(g?.isoString),p.state===He.sY.Completed),k=e.podcast?.uri,C=function(e){const t=(0,l.EC)(e);return`/show/${(0,l.HB)(t?.id||"")}`}(k),T=(0,i.useCallback)((()=>{b.logInteraction(r.podcastLinkFactory().hitUiNavigate({destination:C}))}),[b,C,r]),v=(0,n.W6)(h.vyX,{loadingValue:!1}),I=e.podcast?.coverArt,S=!(I&&I.length===x.length&&x.every(((e,t)=>e.url===I[t].url))),E=v&&!S,D=(0,yt.jh)();return(0,y.jsxs)(lt.gF,{backgroundColor:a,children:[(0,y.jsx)(dt.W,{children:(0,y.jsx)(ut.i,{text:d,dragUri:o,dragLabel:d})}),!E&&(0,y.jsx)(ct.k,{children:(0,y.jsx)(gt._,{menu:(0,y.jsx)(Qe.k,{uri:o,sharingInfo:u,showUri:k,contextUri:o,isPlayed:t,onMarkAsPlayed:s}),children:(0,y.jsx)(lt.Oe,{loading:"eager",name:d,images:x,placeholderType:"episode",shape:v?lt.Kc.SQUARE:lt.Kc.ROUNDED_CORNERS})})}),(0,y.jsxs)(lt.sP,{children:[(0,y.jsx)(pt.g,{children:j}),(0,y.jsx)(gt._,{menu:(0,y.jsx)(Qe.k,{uri:o,sharingInfo:u,showUri:k,contextUri:o,isPlayed:t,onMarkAsPlayed:s}),children:(0,y.jsx)(lt.xd,{dragUri:o,dragLabel:d,scaleAtMinWidth:lt.vz,className:X()({[P]:v}),children:(0,y.jsx)("span",{"data-testid":"episodeTitle",children:d})})}),(0,y.jsx)(gt._,{menu:(0,y.jsx)(Qe.k,{uri:o,sharingInfo:u,showUri:k,contextUri:o,isPlayed:t,onMarkAsPlayed:s}),children:(0,y.jsxs)(ht.default,{to:C,onClick:T,className:U,children:[E&&(0,y.jsx)(kt,{name:d,coverArt:x}),(0,y.jsx)(mt.m,{className:D===yt.Uo.SMALL&&E?"":f,children:(0,y.jsx)("span",{"data-testid":"showTitle",children:e.podcast?.name})})]})})]})]})};var Pt=s(14013),Tt=s(13511),ft=s(38717);const vt=({episode:e})=>{const{uri:t,episodeType:s,description:a,htmlDescription:o,podcastSubscription:c,segmentsCount:p,podcast:m,contentInformation:g,playedState:x,coverArt:b}=e,{spec:j,logger:k}=(0,$.fU)(r.J,{data:{uri:t}}),P=(0,Pt.k)(),T=(0,i.useMemo)((()=>j.headerFactory()),[j]),f=(0,i.useMemo)((()=>j.actionBarFactory()),[j]),[v,I]=(0,i.useState)(x.state===He.sY.Completed),S=(0,Fe.g)(),E=(0,Ae.o)(),U=void 0!==p&&p>0,D=(0,n.W6)(h.WE4,{loadingValue:!1}),N=(0,De.g)(),{triggerPlay:w,togglePlay:L,isPlaying:R,isActive:A}=(0,re.n)({uri:t,...P?{}:{pages:[{items:[{type:Ke.p.EPISODE,uri:t,uid:null,provider:null}]}]}},{featureIdentifier:"episode"}),{isActive:M}=(0,Oe.$o)(t),B=b[0].url,F=(0,Be.Zj)(B||null),O=(0,ze.Y)((e=>e?.isPaused??void 0)),z=(0,we.E)(),_=c.isPaywalled&&!c.isUserSubscribed,W=M||A,H=e?{name:e.name,uri:e.uri,audio:{items:e.audio.items.map((e=>({url:e.url})))}}:null,K=m?{name:m.name,uri:m.uri,trailer:m.trailer,showTypes:m.showTypes}:null,Z=(0,Me.s)(H,K),V=(0,i.useCallback)(((e,i,a,n)=>{const r=()=>{O?(n?.("resume"),S.resume()):(n?.("pause"),S.pause())};if(_)return;let o="play";if(!R||0!==e&&i||(o="pause"),E({intent:o,targetUri:t,type:"click",itemIdSuffix:e>0?"podcast-description-timestamp":"button"}),s===He.Wf.Episode&&z)u.y.set((()=>({triggerId:a||Le,triggerAction:null})));else if(A&&!i)N?r():L({loggingParams:n?.()});else if(M&&!i)r();else{const t=n?.("play");N?Z({seekTo:e,loggingParams:t}):w({seekTo:e,loggingParams:t})}}),[_,R,E,t,s,z,M,A,N,O,S,L,Z,w]),q=(0,i.useCallback)((e=>{V(e,!1,void 0,(e=>{const s=j.actionBarFactory().playButtonFactory();let i;return i="pause"===e||R?s.hitPause({itemToBePaused:t}):"resume"===e||W?s.hitResume({itemToBeResumed:t}):s.hitPlay({itemToBePlayed:t}),k.logInteraction(i)}))}),[V,W,R,k,j,t]),X=(0,i.useCallback)((e=>{V(e,!0,void 0,(()=>k.logInteraction(j.descriptionSectionFactory().timestampLinkFactory().hitPlay({itemToBePlayed:t}))))}),[V,k,j,t]),Y=(0,i.useCallback)(((e,t)=>{V(e,!0,t)}),[V]),G=(0,i.useCallback)((()=>{E({intent:"expand-description",type:"click"})}),[E]);(0,i.useEffect)((()=>{if(e&&!W){const t=new URLSearchParams(location.search);if(t.has("t")){const s=t.get("t")||"0",i=1e3*parseInt(s,10);i<=e.duration.milliseconds&&V(i,!0)}}}),[e,W]);const Q=!!a||!!o,J=e.podcast?.uri,ee=(0,l.EC)(J)?.toURLPath(!0);return(0,y.jsxs)("section",{"data-testid":"episode",className:C,children:[(0,y.jsx)(d.$,{children:(0,$e.mK)({episodeOrChapterName:e.name,showOrAudiobookName:e.podcast?.name??"",type:"Podcast"})}),(0,y.jsx)(Ct,{episode:e,isFullyPlayed:v,setIsFullyPlayed:I,backgroundColor:F,spec:T}),(0,y.jsx)(ot,{episode:e,onPlayEpisode:q,isPlaying:R,isActive:W,isFullyPlayed:v,setIsFullyPlayed:I,backgroundColor:F,isLocked:_,spec:f}),(0,y.jsx)("div",{className:"contentSpacing",children:(0,y.jsx)(Ee,{transcriptEnabled:D,transcript:e.transcript,hasDescription:Q,contentInformation:g,onDescriptionTimestampClick:X,onTranscriptTimestampClick:Y,onExpanded:G,description:e.description,areHTMLDescriptionsEnabled:!0,htmlDescription:e.htmlDescription,playability:e.playability,hasMusicAndTalkSegements:U,segmentCount:p,uri:e.uri,showUrl:ee,spec:j})})]})},It=i.memo((function(){const{episodeId:e=""}=(0,a.UO)(),t=(0,l.YD)(e).toURI(),s=(0,_e.I)(t);return s?.isError||!s?.episodeOrChapter?(0,y.jsx)(p.h,{hasError:s?.isError||!1,errorMessage:c.ag.get("error.not_found.title.podcast")}):(0,We.Ey)(s.episodeOrChapter)?(0,y.jsx)(Tt.InstrumentedRedirect,{to:(0,l.EC)(s.episodeOrChapter.book?.uri).toURLPath(!0)}):(0,y.jsx)(i.Suspense,{fallback:null,children:(0,y.jsx)(ft.C,{pageId:o.Wg.PODCAST_EPISODE,uri:t,children:(0,y.jsx)(vt,{episode:s.episodeOrChapter})})})}));function St(e){return e?.replace(/T.*/,"")||""}}}]);
//# sourceMappingURL=xpui-routes-episode.js.map