"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3472],{70369:(e,t,i)=>{i.d(t,{o:()=>n});var a=i(98355),s=i(25875);function n(){return{version:(0,a.W6)(s.GE)?2:1}}},81515:(e,t,i)=>{i.d(t,{p:()=>u,q:()=>l.q});var a=i(59496),s=i(77646),n=i(46980),r=i(54233),o=i(87452),l=i(68822),c=i(4637);const d=a.memo((function({uri:e,size:t=l.q.md,className:i,onClick:d,showUpsell:u}){const[p,m]=(0,n.Z)(e),g=(0,s.I0)(),x=(0,o.o)(),h=(0,a.useCallback)((()=>{x({targetUri:e,intent:p?"remove-from-library":"add-to-library",type:"click"}),m(!p),g(p?(0,r.SS)():(0,r.kK)())}),[x,e,p,m,g]);return(0,c.jsx)(l.o,{className:i,isFollowing:p,onFollow:h,onClick:d,uri:e,size:t,showUpsell:u})})),u=a.memo((function(e){return(0,c.jsx)(d,{...e})}))},94555:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Zt});var a=i(59496),s=i(46439),n=i(98355),r=i(66281),o=i(75930),l=i(10154),c=i(1740),d=i(58754),u=i(36253),p=i(19435),m=i(76374),g=i(70369),x=i(66548),h=i(4637);const y=(0,a.lazy)((()=>i.e(9402).then(i.bind(i,79402))));function b(e){const t=(0,x.m)(),i=(0,g.o)();return t?(0,h.jsx)(a.Suspense,{fallback:!0,children:(0,h.jsx)(y,{reason:"Episode page",...i,...e})}):null}const k="dpN5ViPOceUWNB5EQPHN",f="vBcxPq3E2okwgXOkVPEM",C="HCCBXwdFvq6omWW2hR0N",j="bJOPO5Zo7dpjSVDwEpSw",P="TXdDDpokVTyJzDEDWHHf",v="HaSbtEVJnxBsaJ5SRi0M",T="YldGldlfaI9myEGXQf9g",N="qJHVIpJn1vLPWsAKfTEZ",S="wSIzjkVlr0Zdy7di2vRm",I="hYS_K1NATGyWt6tCSRqQ",U="hVVaM4pF9arpQ8Nvn2a1",E="zf0Eac1LugsHUacz74Zf",M="TnNaqxbaI0hzhBQZ7wE0",A="zSw1lG1TNe_xm6KTqtCv",D="MlEQDkXnjdKKJueJ9kkB",L="jg0xlyD1yjh0DPNG6eOg",w="QiHXpFb4dLZNOFe5gpp3";var R=i(2592),B=i(82325),F=i(34604),O=i(4285),_=i(25875),W=i(22592);const K=({cardHeaderText:e,cardBodyText:t,buttonText:i,buttonTarget:a})=>(0,n.W6)(_.vp)?(0,h.jsxs)("div",{className:T,children:[(0,h.jsxs)("div",{className:N,children:[(0,h.jsx)(R.D,{variant:"balladBold",semanticColor:"textBase",children:e}),(0,h.jsx)(R.D,{semanticColor:"textBase",children:t})]}),(0,h.jsx)(O.D,{buttonSize:"sm",colorSet:"invertedLight",href:(0,l.EC)(a).toURLPath(!0),component:W.Z,children:i})]}):null,z=({areHTMLDescriptionsEnabled:e,contentInformation:t,description:i,hasDescription:s,htmlDescription:n,onExpanded:r,onTimeStampClick:o,playability:l,showHeader:d=!0,spec:u})=>{const p=(0,F.$P)(),m=(s||t)&&d,g=(0,a.useCallback)((e=>{const t=u.readMoreButtonFactory();p.logInteraction(e?t.hitUiReveal():t.hitUiHide()),r?.()}),[u,p,r]);return(0,h.jsxs)(h.Fragment,{children:[m&&(0,h.jsx)(R.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:C,children:c.ag.get("episode.description-title")}),t&&(0,h.jsx)(K,{cardHeaderText:t.cardHeaderText,cardBodyText:t.cardBodyText,buttonText:t.buttonText,buttonTarget:t.buttonTarget}),s&&(0,h.jsx)(B.o,{className:f,onTimeStampClick:o,maxLines:4,onExpanded:g,content:(i||"").trim(),htmlContent:e&&n?n:void 0,enableTimestamps:l.playable})]})};var H,J=i(84875),Z=i.n(J),$=i(34745),q=i(29759),X=i(22135),Y=i(12220),V=i(1901),G=i(25597);!function(e){e.DESCRIPTION="description",e.TRANSCRIPT="transcript"}(H||(H={}));const Q=a.memo((function({transcriptSections:e,descriptionContent:t,transcriptContent:i,spec:s}){const n=(0,F.$P)(),[r,o]=(0,a.useState)(H.DESCRIPTION),{scrollNodeRef:l}=a.useContext(G.VX),{ref:d,inView:u}=(0,$.YD)({threshold:[1],root:l.current,rootMargin:`-${V.K1+1}px 100000px 0px 100000px`}),p=(0,a.useRef)(null),m=(0,a.useCallback)((e=>{p.current=e,d(e)}),[d]);return(0,a.useEffect)((()=>{const e=p.current?.parentElement?.offsetTop,t=l?.current;if(!e||!t)return;const i=e-V.K1;t.scrollTop>i&&t.scrollTo({top:i})}),[l,r]),(0,h.jsx)(q.l,{list:(0,h.jsxs)(X.F,{className:Z()(D,{[L]:!u}),ref:m,children:[(0,h.jsx)(Y.c,{label:c.ag.get("web-player.episode.description"),sentenceCase:!0,active:r===H.DESCRIPTION,onClick:()=>{const e=s.tabsFactory().descriptionTabButtonFactory().hitUiReveal();n.logInteraction(e),o(H.DESCRIPTION)},className:Z()(w,{[S]:r===H.DESCRIPTION})}),(0,h.jsx)(Y.c,{label:c.ag.get("web-player.episode.transcript"),sentenceCase:!0,disabled:null===e,active:r===H.TRANSCRIPT,onClick:()=>{const e=s.tabsFactory().transcriptTabButtonFactory().hitUiReveal();n.logInteraction(e),o(H.TRANSCRIPT)},className:Z()(w,{[S]:r===H.TRANSCRIPT})})]}),children:null===e||r===H.DESCRIPTION?t:i})}));var ee=i(88585),te=i.n(ee),ie=i(70586),ae=i(47789);const se=(0,a.memo)((function({transcriptSections:e,onTimeStampClick:t,episodeUri:i}){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:U,children:(0,h.jsx)(R.D,{variant:"viola",semanticColor:"textBase",children:c.ag.get("web-player.episode.transcript.disclaimer")})}),e.map(((e,a)=>{const s=`transcript-section-${a}`;return(0,h.jsxs)("div",{className:I,children:[(0,h.jsx)("button",{className:E,onClick:()=>{t(e.startMs,s)},children:(0,h.jsx)(ie.D,{id:s,targetURI:te().from(i),fadeOut:!0,children:(0,h.jsx)(R.D,{variant:"finaleBold",semanticColor:"textSubdued",className:M,children:(0,ae.m)(e.startMs)})})}),e.content.map(((e,t)=>(0,h.jsx)(R.D,{variant:"viola",semanticColor:"textBase",className:A,dir:"auto",children:e},`transcript-text-${t}`)))]},s)}))]})}));var ne=i(76778),re=i(67779),oe=i(43039),le=i(8527),ce=i(1686),de=i(2220),ue=i(62652),pe=i(25431),me=i(66910),ge=i(20156),xe=i(46997);const he="OYehkMWcGJRKPkByp46K",ye="uc1bXkrZqrCz0CMK4lBb",be="qZeibBbA3SVClzEueYND",ke=({episodeUri:e,index:t,duration:i,start:s,stop:n,name:r,uri:o,artists:l,album:d,playable:u})=>{const{isActive:p,isPlaying:m,onClick:g}=(0,me.k)({episodeUri:e,start:s,stop:n}),x=(0,a.useCallback)(((e,t)=>{g(t)}),[g]),{spec:y}=(0,F.fU)(ce.createDesktopTrackListRowEventFactory,{data:{position:t,reason:"",uri:o}});return(0,h.jsx)(xe.ZP,{value:"row",index:t,children:(0,h.jsx)(ge.xV,{trigger:"right-click",action:"open",menu:(0,h.jsx)(de.$,{uri:o}),children:(0,h.jsxs)(pe.c,{uri:o,index:t,ariaRowIndex:t+1,dragMetadata:{name:r,createdBy:l?.[0].name??""},onTriggerPlay:x,isActive:p,isPlayable:u,spec:y,children:[(0,h.jsxs)(ue.vZ,{ariaColIndex:0,children:[(0,h.jsx)(ue.Du,{uri:o,playAriaLabel:c.ag.get("tracklist.a11y.play",r,l?.[0].name),onClick:x,isPlaying:m,isActive:p,spec:y,children:(0,h.jsx)(ue.km,{children:(0,h.jsx)("img",{className:ye,src:d.image,alt:d.name})})}),(0,h.jsxs)(ue.vm,{children:[(0,h.jsx)(ue.Wh,{titleText:r,children:r}),(0,h.jsx)(ue.K9,{children:(0,h.jsx)(ue.T6,{artists:l,spec:y})})]})]}),(0,h.jsx)(ue.UA,{ariaColIndex:1,children:(0,h.jsx)(ue.BM,{uri:d.uri,name:d.name,spec:y,children:d.name})}),(0,h.jsxs)(ue.mU,{ariaColIndex:2,children:[(0,h.jsx)(ue.qS,{uri:o,spec:y}),(0,h.jsx)(ue.A$,{duration:i}),(0,h.jsx)(ue.Zv,{spec:y,menu:(0,h.jsx)(de.$,{uri:o,artists:l}),label:c.ag.get("more.label.track",r,l?.[0].name)})]})]})})})};function fe(e,t,i){return e.reduce(((e,a,s)=>((s>0||t>0)&&e.push({type:"SPACER",id:`spacer-${e.length}`}),"MUSIC"===a.type?e.push(function(e,t,i){return{type:"MUSIC",index:t,uri:i.uri,episodeUri:e,start:i.start,stop:i.stop,duration:i.duration,name:i.track.name,artists:i.track.artists,album:i.track.album,playable:i.track.playable}}(i,s,a)):"TALK"===a.type&&e.push(function(e,t,i){return{type:"TALK",index:t,uri:e,title:i.title,subtitle:i.subtitle,start:i.start,stop:i.stop,duration:i.duration,showUri:i.show.uri,showName:i.show.name}}(i,s,a)),e)),[])}const Ce=({uri:e,segmentCount:t})=>{const i=(0,oe.G)(),s=(0,a.useCallback)((async(a,s)=>{const n=Math.ceil(a/2);try{return{items:fe(await i.getSegments(e,n,s),n,e),totalLength:2*t-1}}catch(e){return{items:[],totalLength:0}}}),[t,i,e]),n=(0,a.useCallback)((t=>{switch(t.type){case"SPACER":return(0,h.jsx)("div",{className:be},t.id);case"MUSIC":return(0,h.jsx)(ke,{...t},`${e}-${t.index}`);case"TALK":return(0,h.jsx)(ne.t,{...t},`${e}-${t.index}`);default:return(0,le.U)(t)}}),[e]),r=c.ag.get("music_and_talk.in_this_episode");return(0,h.jsxs)("div",{children:[(0,h.jsx)(R.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:he,children:r}),(0,h.jsx)(re.Pv,{ariaLabel:r,hasHeaderRow:!0,rowPlaceholder:re.hU,columns:[re.QD.TITLE,re.QD.ALBUM_OR_SHOW,re.QD.DURATION],renderRow:n,fetchTracks:s,resolveUri:e=>"MUSIC"===e.type?e.uri:"",limit:50,nrTracks:2*t-1,testID:"music-and-talk-tracklist"})]})};i(5630),i(59699),i(91564);var je=i(29168),Pe=i.n(je),ve=i(92228),Te=i.n(ve);let Ne;function Se(e){switch(e){case 0:case"UNKNOWN":return Ne.UNKNOWN;case 1:case"PLAINTEXT_CONTENT":return Ne.PLAINTEXT_CONTENT;case 2:case"MUSIC_TRACK":return Ne.MUSIC_TRACK;default:return Ne.UNRECOGNIZED}}!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.PLAINTEXT_CONTENT=1]="PLAINTEXT_CONTENT",e[e.MUSIC_TRACK=2]="MUSIC_TRACK",e[e.UNRECOGNIZED=-1]="UNRECOGNIZED"}(Ne||(Ne={}));const Ie={encode(e,t=Te().Writer.create()){""!==e.version&&t.uint32(10).string(e.version),""!==e.episodeUri&&t.uint32(18).string(e.episodeUri),""!==e.publishedAt&&t.uint32(26).string(e.publishedAt);for(const i of e.sections)Ue.encode(i,t.uint32(34).fork()).ldelim();return""!==e.language&&t.uint32(42).string(e.language),!0===e.curated&&t.uint32(48).bool(e.curated),t},decode(e,t){const i=e instanceof Te().Reader?e:new(Te().Reader)(e);let a=void 0===t?i.len:i.pos+t;const s={version:"",episodeUri:"",publishedAt:"",sections:[],language:"",curated:!1};for(;i.pos<a;){const e=i.uint32();switch(e>>>3){case 1:s.version=i.string();break;case 2:s.episodeUri=i.string();break;case 3:s.publishedAt=i.string();break;case 4:s.sections.push(Ue.decode(i,i.uint32()));break;case 5:s.language=i.string();break;case 6:s.curated=i.bool();break;default:i.skipType(7&e)}}return s},fromJSON:e=>({version:Ae(e.version)?String(e.version):"",episodeUri:Ae(e.episodeUri)?String(e.episodeUri):"",publishedAt:Ae(e.publishedAt)?String(e.publishedAt):"",sections:Array.isArray(e?.sections)?e.sections.map((e=>Ue.fromJSON(e))):[],language:Ae(e.language)?String(e.language):"",curated:!!Ae(e.curated)&&Boolean(e.curated)}),toJSON(e){const t={};return void 0!==e.version&&(t.version=e.version),void 0!==e.episodeUri&&(t.episodeUri=e.episodeUri),void 0!==e.publishedAt&&(t.publishedAt=e.publishedAt),e.sections?t.sections=e.sections.map((e=>e?Ue.toJSON(e):void 0)):t.sections=[],void 0!==e.language&&(t.language=e.language),void 0!==e.curated&&(t.curated=e.curated),t},fromPartial(e){const t={version:"",episodeUri:"",publishedAt:"",sections:[],language:"",curated:!1};return t.version=e.version??"",t.episodeUri=e.episodeUri??"",t.publishedAt=e.publishedAt??"",t.sections=e.sections?.map((e=>Ue.fromPartial(e)))||[],t.language=e.language??"",t.curated=e.curated??!1,t}};const Ue={encode:(e,t=Te().Writer.create())=>(0!==e.type&&t.uint32(8).int32(e.type),0!==e.startMs&&t.uint32(16).int32(e.startMs),void 0!==e.plaintextContent&&Ee.encode(e.plaintextContent,t.uint32(26).fork()).ldelim(),void 0!==e.musicTrack&&Me.encode(e.musicTrack,t.uint32(50).fork()).ldelim(),""!==e.title&&t.uint32(34).string(e.title),void 0!==e.fallback&&Ee.encode(e.fallback,t.uint32(42).fork()).ldelim(),t),decode(e,t){const i=e instanceof Te().Reader?e:new(Te().Reader)(e);let a=void 0===t?i.len:i.pos+t;const s={type:0,startMs:0,plaintextContent:void 0,musicTrack:void 0,title:"",fallback:void 0};for(;i.pos<a;){const e=i.uint32();switch(e>>>3){case 1:s.type=i.int32();break;case 2:s.startMs=i.int32();break;case 3:s.plaintextContent=Ee.decode(i,i.uint32());break;case 6:s.musicTrack=Me.decode(i,i.uint32());break;case 4:s.title=i.string();break;case 5:s.fallback=Ee.decode(i,i.uint32());break;default:i.skipType(7&e)}}return s},fromJSON:e=>({type:Ae(e.type)?Se(e.type):0,startMs:Ae(e.startMs)?Number(e.startMs):0,plaintextContent:Ae(e.plaintextContent)?Ee.fromJSON(e.plaintextContent):void 0,musicTrack:Ae(e.musicTrack)?Me.fromJSON(e.musicTrack):void 0,title:Ae(e.title)?String(e.title):"",fallback:Ae(e.fallback)?Ee.fromJSON(e.fallback):void 0}),toJSON(e){const t={};return void 0!==e.type&&(t.type=function(e){switch(e){case Ne.UNKNOWN:return"UNKNOWN";case Ne.PLAINTEXT_CONTENT:return"PLAINTEXT_CONTENT";case Ne.MUSIC_TRACK:return"MUSIC_TRACK";default:return"UNKNOWN"}}(e.type)),void 0!==e.startMs&&(t.startMs=Math.round(e.startMs)),void 0!==e.plaintextContent&&(t.plaintextContent=e.plaintextContent?Ee.toJSON(e.plaintextContent):void 0),void 0!==e.musicTrack&&(t.musicTrack=e.musicTrack?Me.toJSON(e.musicTrack):void 0),void 0!==e.title&&(t.title=e.title),void 0!==e.fallback&&(t.fallback=e.fallback?Ee.toJSON(e.fallback):void 0),t},fromPartial(e){const t={type:0,startMs:0,plaintextContent:void 0,musicTrack:void 0,title:"",fallback:void 0};return t.type=e.type??0,t.startMs=e.startMs??0,t.plaintextContent=void 0!==e.plaintextContent&&null!==e.plaintextContent?Ee.fromPartial(e.plaintextContent):void 0,t.musicTrack=void 0!==e.musicTrack&&null!==e.musicTrack?Me.fromPartial(e.musicTrack):void 0,t.title=e.title??"",t.fallback=void 0!==e.fallback&&null!==e.fallback?Ee.fromPartial(e.fallback):void 0,t}};const Ee={encode(e,t=Te().Writer.create()){for(const i of e.plaintext)t.uint32(10).string(i);return t},decode(e,t){const i=e instanceof Te().Reader?e:new(Te().Reader)(e);let a=void 0===t?i.len:i.pos+t;const s={plaintext:[]};for(;i.pos<a;){const e=i.uint32();if(e>>>3==1)s.plaintext.push(i.string());else i.skipType(7&e)}return s},fromJSON:e=>({plaintext:Array.isArray(e?.plaintext)?e.plaintext.map((e=>String(e))):[]}),toJSON(e){const t={};return e.plaintext?t.plaintext=e.plaintext.map((e=>e)):t.plaintext=[],t},fromPartial(e){const t={plaintext:[]};return t.plaintext=e.plaintext?.map((e=>e))||[],t}};const Me={encode:(e,t=Te().Writer.create())=>(""!==e.uri&&t.uint32(10).string(e.uri),t),decode(e,t){const i=e instanceof Te().Reader?e:new(Te().Reader)(e);let a=void 0===t?i.len:i.pos+t;const s={uri:""};for(;i.pos<a;){const e=i.uint32();if(e>>>3==1)s.uri=i.string();else i.skipType(7&e)}return s},fromJSON:e=>({uri:Ae(e.uri)?String(e.uri):""}),toJSON(e){const t={};return void 0!==e.uri&&(t.uri=e.uri),t},fromPartial(e){const t={uri:""};return t.uri=e.uri??"",t}};function Ae(e){return null!=e}function De(e){return e.type===Ne.MUSIC_TRACK?{type:"track",startMs:e.startMs,content:e.fallback?.plaintext||[],trackUri:e.musicTrack?.uri}:{type:"text",startMs:e.startMs,content:e.plaintextContent?.plaintext||[]}}Te().util.Long!==Pe()&&(Te().util.Long=Pe(),Te().configure());const Le=({areHTMLDescriptionsEnabled:e,contentInformation:t,description:i,hasDescription:s,hasMusicAndTalkSegements:n,htmlDescription:r,onExpanded:o,onDescriptionTimestampClick:l,onTranscriptTimestampClick:d,playability:u,segmentCount:p,showUrl:g,transcript:x,transcriptEnabled:y,uri:k,spec:f})=>{const C=(0,F.$P)(),P=(0,a.useMemo)((()=>f.descriptionSectionFactory()),[f]),v=(0,a.useMemo)((()=>P.trackListFactory()),[P]),[T,N]=(0,a.useState)(null),S=(0,a.useCallback)((async e=>{const t=await async function(e){try{const t=await fetch(e,{});if(t.ok&&t.body){const e=await t.arrayBuffer();return Ie.decode(new Uint8Array(e)).sections.map(De)}return null}catch(e){return null}}(e);N(t)}),[]);(0,a.useEffect)((()=>{x&&x.length>0&&S(x[0].cdnUrl)}),[S,x]);const I=a=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(z,{hasDescription:s,contentInformation:t,onTimeStampClick:l,onExpanded:o,description:i,areHTMLDescriptionsEnabled:e,htmlDescription:r,playability:u,showHeader:a,spec:P}),n&&(0,h.jsx)(F.Nh,{spec:v,children:(0,h.jsx)(Ce,{segmentCount:p,uri:k})}),g&&(0,h.jsx)(m.P,{buttonSize:"sm",className:j,href:g,component:W.Z,onClick:()=>{C.logInteraction(P.allEpisodesLinkFactory().hitUiNavigate({destination:g}))},children:c.ag.get("episode.see_all_episodes")}),(0,h.jsx)(b,{uri:k})]});return(0,h.jsx)(h.Fragment,{children:y&&x&&x?.length>0?(0,h.jsx)(Q,{transcriptSections:T,descriptionContent:I(!1),transcriptContent:(0,h.jsx)(se,{transcriptSections:T||[],onTimeStampClick:d,episodeUri:k}),spec:f}):I(!0)})};var we=i(90874),Re=i(72800),Be=i(93327),Fe=i(44792);const Oe="activation-trigger-mme",_e=({episodeUri:e,showUri:t,isLocked:i,isPlaying:a,isPlayDisabled:s,playButtonPlayLabel:n,playButtonPauseLabel:r,onClick:o})=>{const l=(0,Fe.E)();if((0,Re.g)())return(0,h.jsx)(Be.JM,{size:Be.qE.lg,onClick:o,isPlaying:a,disabled:s,locked:i,ariaPlayLabel:n,ariaPauseLabel:r});const c=(0,h.jsx)(we.l,{showUri:t,enabled:i,renderInline:!1,children:(0,h.jsx)(Be.JM,{size:Be.qE.lg,onClick:o,isPlaying:a,disabled:s,locked:i,ariaPlayLabel:n,ariaPauseLabel:r})});return l?(0,h.jsx)(ie.D,{id:Oe,targetURI:te().from(e),fadeOut:!0,children:c}):c};var We=i(58747);const Ke="o6AdXY67I_0xmTg8LBCI",ze="MMZAjWZzcPpNIE06SNuf",He="Ccgbgvk9PwclKl5rA6Zj",Je="NHVXJRN6IZANogQjMWei",Ze="orBUEK6aY0SZVOnrDerw",$e="ym1d5PDeTaJLIK0SspBF",qe="Hko6tpIRefr4NKiTEemO",Xe="ptUwXq9IK8IQAOE2UiDA",Ye="mpyCCCudeQ3uBmgrSAcA",Ve=({cardHeaderText:e,cardBodyText:t,buttonText:i,buttonTarget:a})=>(0,n.W6)(_.vp)?(0,h.jsxs)("div",{className:qe,children:[(0,h.jsxs)("div",{className:Xe,children:[(0,h.jsx)(R.D,{variant:"balladBold",semanticColor:"textBase",children:e}),(0,h.jsx)(R.D,{semanticColor:"textBase",children:t})]}),(0,h.jsx)(O.D,{buttonSize:"sm",colorSet:"invertedLight",href:te().from(a).toURLPath(!0),component:W.Z,children:i})]}):null,Ge=({areHTMLDescriptionsEnabled:e,contentInformation:t,description:i,hasDescription:a,htmlDescription:s,onExpanded:n,onTimeStampClick:r,playability:o,showHeader:l=!0})=>{const d=(a||t)&&l;return(0,h.jsxs)(h.Fragment,{children:[d&&(0,h.jsx)(R.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:He,children:c.ag.get("episode.description-title")}),t&&(0,h.jsx)(Ve,{cardHeaderText:t.cardHeaderText,cardBodyText:t.cardBodyText,buttonText:t.buttonText,buttonTarget:t.buttonTarget}),a&&(0,h.jsx)(B.o,{className:ze,onTimeStampClick:r,maxLines:4,onExpanded:n,content:(i||"").trim(),htmlContent:e&&s?s:void 0,enableTimestamps:o.playable})]})},Qe=({areHTMLDescriptionsEnabled:e,contentInformation:t,description:i,hasDescription:a,htmlDescription:s,onExpanded:n,onTimeStampClick:r,playability:o,showUrl:l,uri:d,seeAllButtonClick:u})=>{return p=!0,(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(Ge,{hasDescription:a,contentInformation:t,onTimeStampClick:r,onExpanded:n,description:i,areHTMLDescriptionsEnabled:e,htmlDescription:s,playability:o,showHeader:p}),l&&(0,h.jsx)(m.P,{onClick:u,buttonSize:"sm",className:Je,href:l,component:W.Z,children:c.ag.get("episode.see_all_episodes")}),(0,h.jsx)(b,{uri:d})]});var p};var et=i(22919);const tt="activation-trigger-mme",it=({episodeUri:e,showUri:t,isLocked:i,isPlaying:a,isPlayDisabled:s,playButtonPlayLabel:n,playButtonPauseLabel:r,onClick:o})=>{const l=(0,Fe.E)(),c=(0,h.jsx)(we.l,{showUri:t,enabled:i,renderInline:!1,children:(0,h.jsx)(et.f,{size:"lg",onClick:o,isPlaying:a,disabled:s,locked:i,ariaPlayLabel:n,ariaPauseLabel:r})});return l?(0,h.jsx)(ie.D,{id:tt,targetURI:te().from(e),fadeOut:!0,children:c}):c};var at=i(87452),st=i(79166),nt=i(62991),rt=i(39249),ot=i(45462),lt=i(73305),ct=i(86255),dt=i(39189),ut=i(93324),pt=i(77646),mt=i(16262),gt=i(89349),xt=i(81515),ht=i(92656),yt=i(26720),bt=i(91006),kt=i(56973),ft=i(24771),Ct=i(7678),jt=i(71723),Pt=i(60599),vt=i(6090);const Tt=({podcastShort:e,onPlayEpisode:t,isPlaying:i,isActive:s,isFullyPlayed:n,setIsFullyPlayed:r,backgroundColor:o,isLocked:l,onDownloadClick:d,onContextMenuClick:u})=>{const{uri:p,playedState:m,contentRating:g,playability:x}=e,y=(0,pt.I0)(),[b]=(0,jt.z)(1e4,(e=>e?.item?.uri===p)),k=(0,dt.Y)((e=>e?.duration)),{badges:f,hasBadges:C}=(0,vt.r)({contentRating:g?.label}),j=(0,a.useCallback)((e=>{!x.playable&&f.nineteen&&(e.stopPropagation(),y((0,mt.RM)(p||"")))}),[p,x.playable,f.nineteen,y]),P=!l&&!e.playability.playable,v=c.ag.get("tracklist.a11y.play",e.name,e.podcast?.name),T=c.ag.get("tracklist.a11y.pause",e.name,e.podcast?.name),N=e.podcast?.uri;return(0,h.jsxs)(gt.o,{backgroundColor:o,children:[(0,h.jsxs)("div",{className:Ye,children:[C&&(0,h.jsxs)(bt.g,{children:[f.nineteen&&(0,h.jsx)(Ct.X,{className:Ze,size:16}),f.explicit?(0,h.jsx)(ft.N,{}):null]}),(0,h.jsx)(gt.F,{children:(0,h.jsx)(Pt.E,{size:Pt.$.LARGE,fullyPlayed:n,durationMs:s&&k?k:e.duration.milliseconds,releaseDate:Lt(e.releaseDate?.isoString),resumePositionMs:m.playPositionMilliseconds,isPlaying:i,position:s&&b||void 0})})]}),(0,h.jsxs)(gt.F,{children:[(0,h.jsx)("div",{onClick:j,children:(0,h.jsx)(it,{episodeUri:e.uri,showUri:N,isLocked:l,onClick:()=>{t(m.playPositionMilliseconds,!1)},isPlaying:i,isPlayDisabled:P,playButtonPlayLabel:v,playButtonPauseLabel:T})}),!l&&(0,h.jsx)(xt.p,{onClick:d,uri:e.uri}),(0,h.jsx)(kt.y,{onShow:u,menu:(0,h.jsx)(yt.v,{uri:e.uri,sharingInfo:e.sharingInfo,showUri:N,contextUri:e.uri,isPlayed:n,onMarkAsPlayed:r,userCreated:e.userCreated}),children:(0,h.jsx)(ht.z,{label:c.ag.get("more.label.context",e.name)})})]})]})};var Nt=i(99162),St=i(97036),It=i(73459),Ut=i(45937),Et=i(98340),Mt=i(53518);const At=({podcastShort:e,isFullyPlayed:t,setIsFullyPlayed:i,backgroundColor:a,spec:s})=>{const{uri:n,name:r,sharingInfo:o,playedState:l,episodeType:d,releaseDate:u,userCreated:p}=e,m=(0,F.$P)(),g=function(e,t,i,a,s){const n=t===ut.Wf.Episode;return(0,Mt.G3)(e,a,i,s)?(0,h.jsx)(Mt.Fg,{isMusicAndTalk:n}):n?c.ag.get("type.showEpisode"):c.ag.get("type.podcastEpisode")}(n,d||ut.Wf.Unknown,l.playPositionMilliseconds,Lt(u?.isoString),l.state===ut.sY.Completed),x=e.podcast?.uri;return(0,h.jsxs)(Nt.gF,{backgroundColor:a,children:[(0,h.jsx)(St.W,{children:(0,h.jsx)(It.i,{text:e.name,dragUri:n,dragLabel:e.name})}),(0,h.jsx)("div",{className:$e,children:p?.userUri&&(0,h.jsx)(Et._,{menu:(0,h.jsx)(yt.v,{uri:e.uri,sharingInfo:e.sharingInfo,showUri:x,contextUri:e.uri,isPlayed:t,onMarkAsPlayed:i,userCreated:p}),children:(0,h.jsx)(Nt.Oe,{loading:"eager",name:e.name,images:e.coverArt,placeholderType:"episode",shape:Nt.Kc.ROUNDED_CORNERS})})}),(0,h.jsxs)(Nt.sP,{children:[(0,h.jsx)(Nt.dy,{small:!0,uppercase:!0,children:g}),p?.userUri&&(0,h.jsx)(Et._,{menu:(0,h.jsx)(yt.v,{uri:n,sharingInfo:o,showUri:x,contextUri:n,isPlayed:t,onMarkAsPlayed:i,userCreated:p}),children:(0,h.jsx)(Nt.xd,{dragUri:n,dragLabel:r,children:r})}),p?.userUri&&(0,h.jsx)(Et._,{menu:(0,h.jsx)(yt.v,{uri:e.uri,sharingInfo:e.sharingInfo,showUri:x,contextUri:e.uri,isPlayed:t,onMarkAsPlayed:i,userCreated:p}),children:(0,h.jsx)(Ut.default,{onClick:()=>{const e=s.hitUiNavigate({destination:p?.userUri??""});m.logInteraction(e)},to:p.userUri,children:(0,h.jsx)(Nt.dy,{large:!0,bold:!0,children:(0,h.jsx)("span",{"data-testid":"showTitle",children:p?.displayName})})})})]})]})},Dt=({podcastShort:e})=>{const{uri:t,episodeType:i,description:s,htmlDescription:r,podcastSubscription:o,segmentsCount:l,podcast:p,contentInformation:m,playedState:g,coverArt:x,userCreated:y}=e,{spec:b}=(0,F.fU)(We.createDesktopPodcastShortEventFactory,{data:{uri:t}}),k=a.useMemo((()=>b.userProfileLinkFactory({uri:t})),[b,t]),f=a.useMemo((()=>b.actionBarFactory()),[b]),[C,j]=(0,a.useState)(g.state===ut.sY.Completed),P=(0,ot.g)(),v=(0,at.o)(),T=(0,n.W6)(_.Cz),N=void 0!==l&&l>0,S=(0,Re.g)(),{triggerPlay:I,togglePlay:U,isActive:E}=(0,lt.n)({uri:t},{featureIdentifier:"episode"}),{isPlaying:M,isActive:A}=(0,ct.$o)(t),D=x[0].url,L=(0,nt.Zj)(D||null),w=(0,dt.Y)((e=>e?.isPaused??void 0)),R=(0,Fe.E)(),B=o?.isPaywalled&&!o.isUserSubscribed,O=(0,st.s)(e,p),W=(0,F.$P)(),K=(0,a.useCallback)(((e,a=!0,s)=>{const n=()=>{w?P.resume():P.pause()};if(B)return;let r="play";if(!M||0!==e&&a||(r="pause"),v({intent:r,targetUri:t,type:"click",itemIdSuffix:e>0?"podcast-description-timestamp":"button"}),i===ut.Wf.Episode&&R)u.y.set((()=>({triggerId:s||tt,triggerAction:null})));else if(E&&!a)if(S)n();else{const e=(0,rt.aK)({isPlaying:M,isActive:A,spec:b.actionBarFactory().playButtonFactory(),logger:W,uri:t});U({loggingParams:e})}else A?n():S?O({seekTo:e}):I({seekTo:e})}),[B,M,v,t,A,b,W,U,i,R,E,w,P,S,O,I]),z=(0,a.useCallback)((()=>{(0,rt.qq)(f,W)}),[f,W]),H=(0,a.useCallback)(((e,i)=>{(0,rt.l7)(i,f.downloadButtonFactory(),W,t)}),[W,t,f]),J=(0,a.useCallback)((()=>{v({intent:"expand-description",type:"click"})}),[v]),Z=(0,a.useCallback)((()=>{const e=y?.userUri??"",t=b.seeAllEpisodesButtonFactory({uri:e}).hitUiNavigate({destination:e});W.logInteraction(t)}),[y,W,b]);(0,a.useEffect)((()=>{const t=new URLSearchParams(location.search);if(t.has("t")){const i=t.get("t")||"0",a=1e3*parseInt(i,10);a<=e.duration.milliseconds&&K(a)}}),[K,e.duration.milliseconds]);const $=!!s||T&&!!r,q=e.podcast?.uri,X=te().from(q)?.toURLPath(!0);return(0,h.jsxs)("section",{"data-testid":"episode",className:Ke,children:[(0,h.jsx)(d.$,{children:c.ag.get("podcasts.episode.seo.title",{name:e.name,show:e.podcast?.name??""})}),(0,h.jsx)(At,{podcastShort:e,isFullyPlayed:C,setIsFullyPlayed:j,backgroundColor:L,spec:k}),(0,h.jsx)(Tt,{podcastShort:e,onPlayEpisode:K,isPlaying:M,isActive:A||E,isFullyPlayed:C,setIsFullyPlayed:j,backgroundColor:L,isLocked:!!B,onContextMenuClick:z,onDownloadClick:H}),(0,h.jsx)("div",{className:"contentSpacing",children:(0,h.jsx)(Qe,{seeAllButtonClick:Z,hasDescription:$,contentInformation:m,onTimeStampClick:K,onExpanded:J,description:e.description,areHTMLDescriptionsEnabled:T,htmlDescription:e.htmlDescription,playability:e.playability,hasMusicAndTalkSegements:N,segmentCount:l,uri:e.uri,showUrl:X})})]})};function Lt(e){return e?.replace(/T.*/,"")||""}var wt=i(37082),Rt=i(12101),Bt=i(448),Ft=i(37835),Ot=i(43236),_t=i(14927),Wt=i(84848),Kt=i(5113);const zt=({episode:e,onPlayEpisode:t,isPlaying:i,isActive:s,isFullyPlayed:n,setIsFullyPlayed:r,backgroundColor:o,isLocked:l,spec:d})=>{const{uri:u,playedState:p,contentRating:m,playability:g}=e,x=(0,F.$P)(),y=(0,pt.I0)(),[b]=(0,jt.z)(1e4,(e=>e?.item?.uri===u)),k=(0,dt.Y)((e=>e?.duration)),{badges:f}=(0,vt.r)({contentRating:m?.label}),C=(0,a.useCallback)((e=>{!g.playable&&f.nineteen&&(e.stopPropagation(),y((0,mt.RM)(u||"")))}),[u,g.playable,f.nineteen,y]),j=(0,a.useCallback)((()=>{const e=d.contextMenuButtonFactory().hitUiReveal();x.logInteraction(e)}),[x,d]),v=(0,a.useCallback)(((e,t)=>{(0,rt.l7)(t,d.downloadButtonFactory(),x,u)}),[x,d,u]),T=(0,a.useCallback)((e=>{const t=d.saveButtonFactory();x.logInteraction(e?t.hitLike({itemToBeLiked:u}):t.hitRemoveLike({itemNoLongerLiked:u}))}),[x,d,u]),N=!l&&!e.playability.playable,S=c.ag.get("tracklist.a11y.play",e.name,e.podcast?.name),I=c.ag.get("tracklist.a11y.pause",e.name,e.podcast?.name),U=e.podcast?.uri;return(0,h.jsxs)(gt.o,{backgroundColor:o,children:[(0,h.jsxs)(gt.F,{children:[f.nineteen&&(0,h.jsx)(Ct.X,{className:P,size:16}),(0,h.jsx)(Pt.E,{size:Pt.$.LARGE,fullyPlayed:n,durationMs:s&&k?k:e.duration.milliseconds,releaseDate:$t(e.releaseDate?.isoString),resumePositionMs:p.playPositionMilliseconds,isPlaying:i,position:s&&b||void 0})]}),(0,h.jsxs)(gt.F,{children:[(0,h.jsx)("div",{onClick:C,children:(0,h.jsx)(_e,{episodeUri:e.uri,showUri:U,isLocked:l,onClick:()=>{t(p.playPositionMilliseconds)},isPlaying:i,isPlayDisabled:N,playButtonPlayLabel:S,playButtonPauseLabel:I})}),!l&&(0,h.jsx)(xt.p,{uri:e.uri,onClick:v}),(0,h.jsx)(_t.w,{uri:e.uri,size:Kt.qE.md,onClick:T}),(0,h.jsx)(kt.y,{onShow:j,menu:(0,h.jsx)(Wt.k,{uri:e.uri,sharingInfo:e.sharingInfo,showUri:U,contextUri:e.uri,isPlayed:n,onMarkAsPlayed:r}),children:(0,h.jsx)(ht.z,{label:c.ag.get("more.label.context",e.name)})})]})]})};const Ht=({episode:e,isFullyPlayed:t,setIsFullyPlayed:i,backgroundColor:s,spec:n})=>{const{uri:r,name:o,sharingInfo:d,playedState:u,episodeType:p,releaseDate:m}=e,g=(0,F.$P)(),x=function(e,t,i,a,s){const n=t===ut.Wf.Episode;return(0,Mt.G3)(e,a,i,s)?(0,h.jsx)(Mt.Fg,{isMusicAndTalk:n}):n?c.ag.get("type.showEpisode"):c.ag.get("type.podcastEpisode")}(r,p||ut.Wf.Unknown,u.playPositionMilliseconds,$t(m?.isoString),u.state===ut.sY.Completed),y=e.podcast?.uri,b=function(e){const t=(0,l.EC)(e);return`/show/${(0,l.HB)(t?.id||"")}`}(y),k=(0,a.useCallback)((()=>{g.logInteraction(n.podcastLinkFactory().hitUiNavigate({destination:b}))}),[g,b,n]);return(0,h.jsxs)(Nt.gF,{backgroundColor:s,children:[(0,h.jsx)(St.W,{children:(0,h.jsx)(It.i,{text:e.name,dragUri:r,dragLabel:e.name})}),(0,h.jsx)("div",{className:v,children:(0,h.jsx)(Et._,{menu:(0,h.jsx)(Wt.k,{uri:e.uri,sharingInfo:e.sharingInfo,showUri:y,contextUri:e.uri,isPlayed:t,onMarkAsPlayed:i}),children:(0,h.jsx)(Nt.Oe,{loading:"eager",name:e.name,images:e.coverArt,placeholderType:"episode",shape:Nt.Kc.ROUNDED_CORNERS})})}),(0,h.jsxs)(Nt.sP,{children:[(0,h.jsx)(Nt.dy,{small:!0,uppercase:!0,children:x}),(0,h.jsx)(Et._,{menu:(0,h.jsx)(Wt.k,{uri:r,sharingInfo:d,showUri:y,contextUri:r,isPlayed:t,onMarkAsPlayed:i}),children:(0,h.jsx)(Nt.xd,{dragUri:r,dragLabel:o,children:(0,h.jsx)("span",{"data-testid":"episodeTitle",children:o})})}),(0,h.jsx)(Et._,{menu:(0,h.jsx)(Wt.k,{uri:e.uri,sharingInfo:e.sharingInfo,showUri:y,contextUri:e.uri,isPlayed:t,onMarkAsPlayed:i}),children:(0,h.jsx)(Nt.dy,{large:!0,bold:!0,children:(0,h.jsx)(Ut.default,{to:b,onClick:k,children:(0,h.jsx)("span",{"data-testid":"showTitle",children:e.podcast?.name})})})})]})]})},Jt=({episode:e})=>{const{uri:t,episodeType:i,description:s,htmlDescription:o,podcastSubscription:p,segmentsCount:m,podcast:g,contentInformation:x,playedState:y,coverArt:b}=e,{spec:f,logger:C}=(0,F.fU)(r.createDesktopEpisodeEventFactory,{data:{uri:t}}),j=(0,a.useMemo)((()=>f.headerFactory()),[f]),P=(0,a.useMemo)((()=>f.actionBarFactory()),[f]),[v,T]=(0,a.useState)(y.state===ut.sY.Completed),N=(0,ot.g)(),S=(0,at.o)(),I=(0,n.W6)(_.Cz),U=void 0!==m&&m>0,E=(0,n.W6)(_.WE,{loadingValue:!1}),M=(0,Re.g)(),{triggerPlay:A,togglePlay:D,isActive:L}=(0,lt.n)({uri:t},{featureIdentifier:"episode"}),{isPlaying:w,isActive:R}=(0,ct.$o)(t),B=b[0].url,O=(0,nt.Zj)(B||null),W=(0,dt.Y)((e=>e?.isPaused??void 0)),K=(0,Fe.E)(),z=p.isPaywalled&&!p.isUserSubscribed,H=R||L,J=(0,st.s)(e,g),Z=(0,a.useCallback)(((e,a,s,n)=>{const r=()=>{W?(n?.("resume"),N.resume()):(n?.("pause"),N.pause())};if(z)return;let o="play";if(!w||0!==e&&a||(o="pause"),S({intent:o,targetUri:t,type:"click",itemIdSuffix:e>0?"podcast-description-timestamp":"button"}),i===ut.Wf.Episode&&K)u.y.set((()=>({triggerId:s||Oe,triggerAction:null})));else if(L&&!a)M?r():D({loggingParams:n?.()});else if(R&&!a)r();else{const t=n?.("play");M?J({seekTo:e,loggingParams:t}):A({seekTo:e,loggingParams:t})}}),[z,w,S,t,i,K,R,L,M,W,N,D,J,A]),$=(0,a.useCallback)((e=>{Z(e,!1,void 0,(e=>{const i=f.actionBarFactory().playButtonFactory();let a;return a="pause"===e||w?i.hitPause({itemToBePaused:t}):"resume"===e||H?i.hitResume({itemToBeResumed:t}):i.hitPlay({itemToBePlayed:t}),C.logInteraction(a)}))}),[Z,H,w,C,f,t]),q=(0,a.useCallback)((e=>{Z(e,!0,void 0,(()=>C.logInteraction(f.descriptionSectionFactory().timestampLinkFactory().hitPlay({itemToBePlayed:t}))))}),[Z,C,f,t]),X=(0,a.useCallback)(((e,i)=>{Z(e,!0,i,(()=>C.logInteraction(f.transcriptSectionFactory().timestampLinkFactory().hitPlay({itemToBePlayed:t}))))}),[Z,C,f,t]),Y=(0,a.useCallback)((()=>{S({intent:"expand-description",type:"click"})}),[S]);(0,a.useEffect)((()=>{if(e&&!H){const t=new URLSearchParams(location.search);if(t.has("t")){const i=t.get("t")||"0",a=1e3*parseInt(i,10);a<=e.duration.milliseconds&&Z(a,!0)}}}),[e,H]);const V=!!s||I&&!!o,G=e.podcast?.uri,Q=(0,l.EC)(G)?.toURLPath(!0);return(0,h.jsxs)("section",{"data-testid":"episode",className:k,children:[(0,h.jsx)(d.$,{children:c.ag.get("podcasts.episode.seo.title",{name:e.name,show:e.podcast?.name??""})}),(0,h.jsx)(Ht,{episode:e,isFullyPlayed:v,setIsFullyPlayed:T,backgroundColor:O,spec:j}),(0,h.jsx)(zt,{episode:e,onPlayEpisode:$,isPlaying:w,isActive:H,isFullyPlayed:v,setIsFullyPlayed:T,backgroundColor:O,isLocked:z,spec:P}),(0,h.jsx)("div",{className:"contentSpacing",children:(0,h.jsx)(Le,{transcriptEnabled:E,transcript:e.transcript,hasDescription:V,contentInformation:x,onDescriptionTimestampClick:q,onTranscriptTimestampClick:X,onExpanded:Y,description:e.description,areHTMLDescriptionsEnabled:I,htmlDescription:e.htmlDescription,playability:e.playability,hasMusicAndTalkSegements:U,segmentCount:m,uri:e.uri,showUrl:Q,spec:f})})]})},Zt=a.memo((function(){const{episodeId:e=""}=(0,s.UO)(),t=(0,l.YD)(e).toURI(),i=(0,n.W6)(_.Nf),r=(0,Rt.I)(t),d=(0,wt.V)("episode",r);return d?(0,h.jsx)(Ft.InstrumentedRedirect,{to:d}):r?(0,Bt.Ey)(r)?(0,h.jsx)(Ft.InstrumentedRedirect,{to:(0,l.EC)(r.book?.uri).toURLPath(!0)}):(0,Bt.Qj)(r)?i?(0,h.jsx)(a.Suspense,{fallback:null,children:(0,h.jsx)(Ot.C,{pageId:o.Wg.PODCAST_EPISODE,uri:t,children:(0,h.jsx)(Dt,{podcastShort:r})})}):(0,h.jsx)(p.h,{hasError:!0,errorMessage:c.ag.get("error.not_found.title.podcast")}):(0,h.jsx)(a.Suspense,{fallback:null,children:(0,h.jsx)(Ot.C,{pageId:o.Wg.PODCAST_EPISODE,uri:t,children:(0,h.jsx)(Jt,{episode:r})})}):(0,h.jsx)(p.h,{hasError:!1,errorMessage:c.ag.get("error.not_found.title.podcast")})}));function $t(e){return e?.replace(/T.*/,"")||""}},60599:(e,t,i)=>{i.d(t,{E:()=>N,$:()=>T});var a=i(69084),s=i(59496);const n="wIA_5Ypq0rltNPeZQpM4",r="Swi6YtNEFCCVz8l4y75v",o="pklLPOhfigdytL9bPoth",l="sb24Y8kdMZInJ8aI8dXT";i(19036);var c=i(4637);class d extends s.PureComponent{static defaultProps={current:0,max:1};render(){const{ariaValueText:e,max:t,current:i}=this.props,a=t&&i?100*Math.min(1,i/t):0,s={transform:`translateX(-${100-a}%)`},d=e||`${Math.round(a)}%`;return(0,c.jsxs)("div",{className:n,role:"progressbar",tabIndex:0,"aria-valuenow":i,"aria-valuemin":0,"aria-valuemax":t,"aria-valuetext":d,children:[(0,c.jsx)("div",{className:r}),(0,c.jsx)("div",{className:o,children:(0,c.jsx)("div",{"data-testid":"progressBarFg",className:l,style:s})})]})}}const u=d,p="qfYkuLpETFW3axnfMntO",m="jOd7lbjiyc_kvRJaAbeL",g="_q93agegdE655O5zPz6l",x="z7Yl7CIT1AB0y91f_moh",h="iLIlkUcfIq56KncGtX7u",y="nV50yZ6BR_TIuWP3l7b1",b="qLjIx_SzBEpDRA_q7kxQ";var k=i(2592),f=i(53771),C=i(1740),j=i(84875),P=i.n(j),v=i(56195);let T;!function(e){e[e.LARGE=0]="LARGE",e[e.SMALL=1]="SMALL"}(T||(T={}));const N=e=>{const{resumePositionMs:t=0,releaseDate:i,isPlaying:s,fullyPlayed:n,durationMs:r,size:o=T.SMALL,position:l=t}=e;return(0,c.jsxs)("div",{className:P()(p,{[m]:o===T.LARGE}),children:[i?(0,c.jsx)(k.D,{as:"p",variant:"mesto",className:g,children:(0,a.rL)((0,a.RX)(i))}):null,(()=>{if(n&&!s)return(0,c.jsxs)("div",{className:h,children:[(0,c.jsx)(k.D,{as:"p",variant:"mesto",className:x,children:C.ag.get("episode.played")}),(0,c.jsx)(f.N,{iconSize:16,className:b,"aria-hidden":"true"})]});if(l>0||s){const e=Math.ceil(Math.max(r-l,0));return(0,c.jsx)("div",{className:h,children:(0,c.jsx)(k.D,{as:"p",variant:"mesto",className:x,children:(0,c.jsx)(v.ng,{durationMs:e})})})}return(0,c.jsx)(k.D,{as:"p",variant:"mesto",className:g,children:(0,c.jsx)(v.nL,{durationMs:r})})})(),!n&&l>0||s?(0,c.jsx)("div",{className:y,children:(0,c.jsx)(u,{current:l,max:r,isEnabled:!1})}):null]})}}}]);
//# sourceMappingURL=xpui-routes-episode.js.map