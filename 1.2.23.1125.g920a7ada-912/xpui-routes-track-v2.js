"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[4179],{78085:(e,a,i)=>{i.d(a,{qj:()=>$,GA:()=>m});var t=i(24106),s=i(31752),n=i(36032),r=i(89664),l=i(42114),c=i(86261),o=i(49520),d=i(44387);const m=(e,a)=>{const i=(0,s.TH)(),m=(0,n.W6)(o.d_6),u=(0,r.vI)(l.k.GenerativeAIContent,i),g="track"===a?d.aj:d.M4,k=(0,t.v9)(g);return(0,c.$S)(k||{},e)||m===o.U0E.VARIANT||u};var u=i(59496),g=i(44971),k=i(40940),p=i(48801),y=i(43971);function h(e,a,i){try{(0,k.sQ)({metric_type:g.MetricTypes.COUNTER,what:"request-rate",value:1,tags:{endpoint:e,statusCode:a,isFatal:i}}).catch((()=>({})))}catch(e){}}class x extends y.c{build(){const e=super.build();return e.onAfterSend=a=>{let i="unknown",t=!1;if(null!==e.endpointIdentifier&&(t=!0,i=`${e.method} ${e.hostIdentifier||"unknown-host"}::${e.endpointIdentifier}`),a)throw t&&h(i,JSON.stringify(a.status||0),JSON.stringify(0===(e.endpointIdentifier||"").indexOf("/me"))),p.m.fromResponse(a,e.method);if(t){h(i,"200","false");const a=Date.now()-(e.startTimestamp||0);!function(e,a,i){try{(0,k.sQ)({metric_type:g.MetricTypes.TIMER,what:"request-duration",value:i,tags:{endpoint:e,statusCode:a}}).catch((()=>({})))}catch(e){}}(i,"200",g.Time.fromMillis(a).asNanos())}},e}}var v=i(19454);let N=null;class j{static setSession(e){if(!e)return;const{accessToken:a}=e,i=this.getInstance();i.accessToken=a,a||i.resetPendingRequests()}static setLocale(e){this.getInstance().locale=e}static setMarket(e){this.getInstance().market=e}static resetInstance(){N=null}static getInstance(){return N||(N=this.createNew()),N}static createNew(){return new x(v.e)}}var b=i(73208);const I=e=>(0,u.useCallback)((async()=>b.Wy.getGeneratedContent(j.getInstance(),e).then((e=>e.body.content))),[e]);var L=i(75758),C=i(66258),f=i(86961);const A="expandable-description-for-seo";var R=i(84875),T=i.n(R);const S="kJFJjpbeZmhT7WG2KjAM",P="gPrYeH86UvcjOx_NQYwp",F="Zf6ONkng2h6eGJg9d4l_",O="G2RRgu_U4ZPugC9x8Vuh",D="BmLmBhY6zS0mTzoMTvQA",U="dvKxmtfViMbQHGD2OUYz",E="LzDWAa70LpBOSMc_ATzA",w="Z5EIr8RoSgmXMt0y9VsS";var _=i(4637);const M=({open:e,content:a})=>{const i=a.slice(0,3),t=a.slice(3);return(0,_.jsxs)(C.D,{as:"ul",className:O,children:[i.map((e=>(0,_.jsxs)(C.D,{as:"li",className:D,variant:"ballad",children:[e,"‎"]},e))),t.map((a=>(0,_.jsxs)(C.D,{as:"li",variant:"ballad",className:T()(D,U,{[E]:e}),"aria-hidden":!e,children:[a,"‎"]},a)))]})},B=({open:e,handleClick:a})=>(0,_.jsx)("button",{className:F,onClick:a,"aria-controls":A,"aria-owns":A,children:(0,_.jsx)(C.D,{variant:"balladBold",className:w,children:e?f.ag.get("show_less"):`…${f.ag.get("show_more")}`})}),G=u.memo((function({content:e}){const[a,i]=(0,u.useState)(!1),t=JSON.parse(e);return t.length<=3?(0,_.jsx)("div",{className:S,children:(0,_.jsx)("ul",{className:P,children:t.map((e=>(0,_.jsx)("li",{children:(0,_.jsx)(C.D,{as:"p",semanticColor:"textSubdued",variant:"ballad",children:e})},e)))})}):(0,_.jsxs)("div",{className:S,"aria-expanded":a,id:A,children:[(0,_.jsx)(M,{open:a,content:t}),(0,_.jsx)(B,{open:a,handleClick:()=>{i(!a)}})]})})),K="QoqWMT7XTnQGGR9Dz8yQ",V="oRVB2r5OyoFGZLnRfzo2",Y="Ceua68dPWnYGAQKpHApG",$=({title:e,uri:a})=>{const[i,t]=(0,u.useState)(""),s=I(a);return(0,u.useEffect)((()=>{!async function(){try{const e=await s();t(e)}catch(e){}}()}),[s]),i&&0!==i.length?(0,_.jsxs)("div",{className:K,children:[(0,_.jsxs)("div",{className:V,children:[(0,_.jsx)(L.W,{size:"small",semanticColor:"textSubdued",className:Y}),(0,_.jsx)(C.D,{variant:"mesto",as:"p",children:f.ag.get("generative-ai.disclaimer")})]}),(0,_.jsx)(C.D,{variant:"canon",as:"h1",semanticColor:"textBase",children:e}),(0,_.jsx)(G,{content:i})]}):null}},27706:(e,a,i)=>{i.r(a),i.d(a,{default:()=>hi});var t=i(59496),s=i(84875),n=i.n(s),r=i(31752),l=i(66258),c=i(97218),o=i(69052),d=i(17499),m=i(86961),u=i(72084),g=i(24475),k=i(61870),p=i(17761),y=i(14043),h=i(91224),x=i(73388),v=i(59134),N=i(48001),j=i(71664);const b="o2TlnuNKxRO5RnB9BpHB",I="q0Ke_aAvTcc4dO4wCHQt",L="UlKUfS_GcROZmofuafOW",C="I5LORTI1u3A6VoUvRCBf",f="TS85Qkpioa31wR0p4kzT",A="yL1DLXBc05CR_ACv_NhA",R="k5kRkUyoz9znqg_SGOVQ";var T=i(7682),S=i(97293),P=i(5860),F=i(63617),O=i(14129),D=i(4637);let U=function(e){return e.SMALL="small",e.LARGE="large",e}({});const E=({art:e,disabled:a=!1,LinkComponent:i,name:t,size:s=U.SMALL,type:c,uri:o})=>{const u=e?[e]:[],g=s===U.SMALL?(0,S.R)(c):function(e){switch(e){case T.albumType.SINGLE:return m.ag.get("track-page.from-the-single");case T.albumType.EP:return m.ag.get("track-page.from-the-ep");case T.albumType.COMPILATION:return m.ag.get("track-page.from-the-compilation");case T.albumType.ALBUM:default:return m.ag.get("track-page.from-the-album")}}(c),k=(0,r.s0)();return(0,D.jsxs)("div",{className:n()(b,{[L]:s===U.SMALL,[I]:a}),children:[(0,D.jsx)("div",{className:C,children:(0,D.jsx)(P.O,{images:u,size:O.m$.SIZE_80,title:t,type:F.p.ALBUM})}),(0,D.jsxs)("div",{className:f,children:[(0,D.jsx)(l.D,{variant:s===U.SMALL?"mestoBold":"finale",children:g}),(0,D.jsx)(i,{to:o,children:(0,D.jsx)(l.D,{as:"div",className:A,variant:"balladBold",dir:"auto",children:t})})]}),(0,D.jsx)("div",{onClick:()=>{k((0,d.EC)(o).toURLPath(!0))},className:R})]})};var w=i(25034),_=i(95755),M=i(15322),B=i(64461);let G=function(e){return e.LOADING="LOADING",e.LOADED="LOADED",e.UNAVAILABLE="UNAVAILABLE",e}({});const K=(0,B.Uy)(((e,a)=>{switch(a.type){case"LYRICS_LOADING":e[a.uri]={status:G.LOADING};break;case"LYRICS_LOADED":e[a.uri]={status:G.LOADED,data:a.response};break;case"LYRICS_ERROR":e[a.uri]={status:G.UNAVAILABLE};break;default:throw new Error(`Unhandled lyrics action with type: ${a.type}`)}}));var V=i(95787),Y=i(73208),$=i(48801);const z={status:G.LOADING},Z={status:G.UNAVAILABLE},q=t.createContext(void 0),Q=({children:e,initialState:a={}})=>{const i=t.useReducer(K,a);return(0,D.jsx)(q.Provider,{value:i,children:e})},W=({uri:e,isAnonymous:a,imageForLyricsRequest:i})=>{const s=t.useContext(q);if(void 0===s)throw new Error("useTrackEntityLyrics must be used within a TrackEntityLyricsProvider");if(!e||!(0,d.wj)(e)||a)return Z;const[n,r]=s,l=n[e];return l||(r({type:"LYRICS_LOADING",uri:e}),(async({trackUri:e,api:a,imageForLyricsRequest:i})=>{const t=(0,d.EC)(e);try{const e=await Y.Zz.getTrackEntityLyrics(a||V.b.getInstance(),t.id,i||"");return{hasLyrics:!0,syncType:e.lyrics.syncType,lyrics:e.lyrics.lines,provider:e.lyrics.provider,providerDisplayName:e.lyrics.providerDisplayName,providerLyricsId:e.lyrics.providerLyricsId,isRtlLanguage:e.lyrics.isRtlLanguage}}catch(e){if(e instanceof $.m&&404===e.status)return{hasLyrics:!1};throw e}})({trackUri:e,imageForLyricsRequest:i}).then((a=>{r({type:"LYRICS_LOADED",uri:e,response:a})})).catch((()=>{r({type:"LYRICS_ERROR",uri:e})})),z)};var H=i(90266),J=i(74446),X=i(91792),ee=i(81907),ae=i(78330),ie=i(29233),te=i(37117);const se="oTRKhYD0MZlNPm66W3Tw",ne="sc95MwPalcHwYGZ7j3xN",re="zrCZCfYv4zZiB1HYv9i8",le="RnlxIDmWcYTbbwNSJNjA",ce="SHkxfN1vy0wpRMP1hK7I",oe="COXBS6zLyyxKNYuEAzjZ",de="sR5IpdOUvoUGYKlC9Dk1",me="FHMr3WxshoYjZ7jd3YwI",ue="Evcwc4KM2tf9xrLbfB8B",ge="x4_dsi31Cx2SO1L0uYIj",ke="euPDqfFEBILj9KHDNLC1",pe="x6FPRUKK40oDCPP7g6Ls",ye="k3SPcfaKewjfdYumDcGw",he="t9C7vRiN1OSC9uWfJEr0",xe="Onv6dO4lntCzKUqYa8PE",ve="vHNIIDpwcSLuHumlKDbY",Ne=({richTrack:e})=>{const{search:a}=(0,r.TH)(),i=(0,t.useCallback)((()=>new URLSearchParams(a.slice(1)).get("highlight")||""),[a])(),{tracklistRef:s}=(0,te.W)(),n=e.albumOfTrack,l=(0,ie.Y)(n?.uri||""),{usePlayContextItem:c}=(0,_.n)({uri:l},{featureIdentifier:"album"}),o=(0,t.useMemo)((()=>({items:[],totalCount:0})),[]);return n?(0,D.jsx)("div",{ref:s,className:de,children:(0,D.jsx)(ae.L,{ariaLabel:n.name,nrTracks:n.tracks.totalCount,albumUri:n.uri,highlightUri:i,discs:o,usePlayContextItem:c,hasHeaderRow:!1})}):null};var je=i(67997),be=i(3151),Ie=i(75345),Le=i(35350),Ce=i(98923),fe=i(25474),Ae=i(52693),Re=i(60579);const Te=t.memo((function({uri:e,togglePlay:a,isPlaying:i,isActive:s,spec:n,logger:r,backgroundColor:l,name:c,isPlayable:o,albumUri:d,artists:k}){const p=(0,Ae.o)(),y=(0,Re.k)(),[N,j]=(0,Ce.Z)(e),b=(0,t.useCallback)((async()=>{p({targetUri:e,intent:N?"unsave":"save",type:"click"});const a=n.saveButtonFactory();r.logInteraction(N?a.hitRemoveLike({itemNoLongerLiked:e}):a.hitLike({itemToBeLiked:e}));try{await j(!N)}catch{}}),[p,e,N,n,r,j]),I=(0,t.useCallback)((()=>{const t=(0,x.aK)({isPlaying:i,isActive:s,spec:n.playButtonFactory(),logger:r,uri:e});a({loggingParams:t})}),[s,i,r,n,a,e]),L=(0,t.useCallback)((()=>{r.logInteraction(n.contextButtonFactory().hitUiReveal())}),[r,n]),C=(0,fe.j)();return(0,D.jsx)(je.o,{backgroundColor:l,children:(0,D.jsxs)(je.F,{children:[(0,D.jsx)(g.rn,{children:(0,D.jsx)(h.$,{onClick:I,isPlaying:i,disabled:!o,size:C,uri:e})}),(0,D.jsx)(g.rn,{children:(0,D.jsx)(be.H,{isAdded:!!N,onClick:b,disabled:!y,size:C})}),(0,D.jsx)(Ie.o,{uri:e,isFollowing:!!N,onFollow:b,size:C}),(0,D.jsx)(v.ClickToggleContextMenu,{menu:(0,D.jsx)(u.$,{uri:e,albumUri:d,artists:k}),onShow:L,children:(0,D.jsx)(Le.MoreButton,{label:m.ag.get("more.label.context",c),size:C})})]})})})),Se="OH5mnpJIVCJozYM3raMt",Pe="etw0slM6uVrCi5RR3iDi",Fe=({padded:e,providerDisplayName:a})=>a?(0,D.jsx)(l.D,{as:"p",dir:"auto",variant:"finale",className:`${Se} ${e?Pe:""}`,children:m.ag.get("web-player.lyrics.providedBy",a)}):null,Oe=({uri:e,imageForLyricsRequest:a})=>{const{data:i}=W({uri:e,imageForLyricsRequest:a});return i?.hasLyrics?(0,D.jsx)(Fe,{providerDisplayName:i.providerDisplayName}):null};var De=i(24106),Ue=i(59819);const Ee="QhDsXG1Gmo7XmQWLggAO",we="bZgWQj7UxvK8GYKWDA7N",_e="AW61P3tnW5cKJCWtbhFh",Me=({buttonText:e,onSecondaryButtonClick:a,onPrimaryButtonClick:i,secondaryButtonText:t,text:s})=>(0,D.jsxs)("div",{className:Ee,"data-testid":"static-activation-trigger",children:[(0,D.jsx)(l.D,{className:we,variant:"cello",children:s}),(0,D.jsxs)("div",{className:_e,children:[(0,D.jsx)(c.o,{onClick:a,semanticColor:"textBase",children:t}),(0,D.jsx)(Ue.D,{onClick:i,colorSet:"invertedLight",children:e})]})]});var Be=i(95161);const Ge="T1nqQ4HEh3heHy4RCCKa",Ke="L8zjshPVgUMXyZR4FtOk",Ve="YMn1FWcFmOz9osBrNvhF",Ye="Inbyq3TnvKDOJtcKFTDQ",$e="lWk5se4WETUOJwaEb8D6",ze="i8DyQbWCmDV_8N5XGJQT",Ze="t5WPFlGTY6GCd9UOFfLu",qe="AGQ3wRyMVK1odq860qnT",Qe="ZX_r7uZgPgssaUplfpxT",We="qrqctaPu2XBpxsw23nPX",He="XnWidTagai3nQwMPxIMF";var Je=i(19678),Xe=i(72864);let ea=function(e){return e.SMALL="small",e.LARGE="large",e}({});const aa=e=>{const{disabled:a,images:i,LinkComponent:t,name:s,size:c,uri:o,enableI18nRoutes:u,enableI18nAdditionalPages:g}=e,k=c===ea.SMALL,p=(0,r.s0)(),y=(0,d.EC)(o),h=y?.type,x=m.ag.getUrlLocale(),v=(0,Je.S9)({localeFeatureFlag:u,entityFeatureFlag:g,urlLocale:x,entity:h,type:"link"});return(0,D.jsxs)("div",{className:n()(Ke,{[Ve]:a}),"data-testid":"track-artist-link-card",children:[(0,D.jsx)(P.O,{shape:P.K.CIRCLE,images:i,size:O.m$.SIZE_80,title:s,type:F.p.ARTIST}),(0,D.jsxs)("div",{className:n()($e,{[ze]:k}),children:[(0,D.jsx)(l.D,{variant:"mestoBold",className:Ye,children:m.ag.get("card.tag.artist")}),(0,D.jsx)(t,{to:o,children:(0,D.jsx)(l.D,{as:"div",dir:"ltr",className:Ze,variant:"balladBold",children:s})})]}),(0,D.jsx)("div",{onClick:()=>{const e=y?.toURL(`/${Xe.F0}${x}/`);if(y){const a=v?e:y.toURLPath(!0);p(a)}},className:qe})]})},ia=({size:e=ea.LARGE,disabled:a=!1,enableI18nRoutes:i,enableI18nAdditionalPages:s,...r})=>{const[o,d]=(0,t.useState)(!1),u=(0,t.useCallback)((()=>{d(!o)}),[o]),g=r.artists;return(0,D.jsxs)("div",{"data-testid":"track-artist-link-card-container",children:[(0,D.jsx)("div",{className:Ge,children:g.map(((t,l)=>(0,D.jsx)("div",{className:n()({[We]:o&&l>5,[Qe]:l>5}),children:(0,D.jsx)(aa,{name:t.name,uri:t.uri,images:t.images,size:e,LinkComponent:r.LinkComponent,disabled:a,enableI18nRoutes:i,enableI18nAdditionalPages:s},t.id)},`${t.uri}-${l}`)))}),g.length>6&&(0,D.jsx)(c.o,{onClick:u,className:He,children:(0,D.jsx)(l.D,{as:"p",variant:"violaBold",children:o?m.ag.get("show_less"):m.ag.get("mwp.search.artists.all")})})]})};var ta=i(30306);const sa="EaTxqhHk6J4ecKHwpY5m",na="dUQl9yd5x_1oWk4L0Ntm",ra="xt5C47eHPYNiriMJxGnC",la=({words:e})=>(0,D.jsx)(l.D,{as:"p",dir:"auto",variant:"ballad",className:ra,children:e});var ca=i(40748);const oa=({data:e,eventSender:a,isPlaying:i,playbackId:s,uri:n})=>{const{lyrics:r=[],provider:c,providerLyricsId:o,syncType:d}=e,u=function(e){const{uri:a,provider:i,providerLyricsId:s,syncType:n,eventSender:r,isPlaying:l,playbackId:c}=e,[o,d]=(0,t.useState)(!1),m=(0,t.useMemo)((()=>(0,ca.N)({lyrics_format:"track-page",track_uri:a,provider:i,provider_lyrics_id:s,sync_type:n,playback_id:l?c:void 0})),[a,i,s,n,l,c]);return(0,t.useCallback)((()=>{o||(r?.send(m),d(!0))}),[m,r,o])}({uri:n,provider:c,providerLyricsId:o,syncType:d,eventSender:a,isPlaying:i,playbackId:s});return(0,t.useEffect)((()=>{u()}),[u]),(0,D.jsxs)("div",{className:sa,children:[(0,D.jsx)(l.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:na,children:m.ag.get("web-player.lyrics.title")}),r.map((({words:e},a)=>(0,D.jsx)(la,{words:e},`lyrics-seo-line-${a}`)))]})};var da=i(5746),ma=i(53770),ua=i(63820);const ga=({uri:e,imageForLyricsRequest:a})=>{const{data:i}=W({uri:e,imageForLyricsRequest:a}),t=(0,ua.s4)(),{isPaused:s,currentTrackUri:n,playbackId:r}=(0,da.Y)((e=>({isPaused:e?.isPaused,currentTrackUri:e?.item?.uri,playbackId:e?.playbackId})),ma.V),l=!s&&n===e;return i&&i?.hasLyrics?(0,D.jsx)(oa,{data:i,uri:e,eventSender:t,isPlaying:l,playbackId:r}):null};var ka=i(11125),pa=i(3439);const ya=e=>{const{albumArtists:a,columnCount:i,imageForLyricsRequest:s,uri:r}=e,l=i-2,c={"--column-count":i,"--left-column-end":l-2,"--right-column-start":l},{isAnonymous:o}=(0,De.v9)(pa.Gg),d=(0,Re.k)(),{data:u,status:g}=W({uri:r,isAnonymous:o,imageForLyricsRequest:s}),k=!!u&&u.hasLyrics&&g!==G.UNAVAILABLE||o,p=(0,De.v9)(ka.br),y=(0,De.v9)(ka.yE);return(0,D.jsxs)(t.Suspense,{fallback:null,children:[k&&(0,D.jsx)("div",{className:n()(re,{[le]:i>5}),style:{...c},"data-testid":"lyrics-container",children:o?(0,D.jsx)(Me,{buttonText:m.ag.get("sign_up"),secondaryButtonText:m.ag.get("login"),text:m.ag.get("track-page.sign-in-to-view-lyrics"),onPrimaryButtonClick:ta.L6,onSecondaryButtonClick:ta.h$}):(0,D.jsx)(ga,{uri:r,imageForLyricsRequest:s})}),(0,D.jsx)("div",{className:n()(se,{[ne]:i>5&&k}),style:{...c},children:(0,D.jsx)(ia,{artists:a,LinkComponent:Be.default,disabled:!d,enableI18nRoutes:p,enableI18nAdditionalPages:y})})]})};var ha=i(84265),xa=i(2456),va=i(87536),Na=i(54947),ja=i(87989),ba=i(67921),Ia=i(69841),La=i(30808),Ca=i(83637),fa=i(55099),Aa=i(79036),Ra=i(4008),Ta=i(8505),Sa=i(11040),Pa=i(34279),Fa=i(21847),Oa=i(20808);const Da="Z9Dr8PkXFtlO8KnnDcxp",Ua="Bm0LUMlhVIcF5qusgdUP",Ea="GIyB7JDkRwjtVL6PSBbg",wa="whTIka0YYAkqhqrs26Wa",_a=t.memo((function({uri:e,name:a,imgUrl:i,artists:t,isExplicit:s,index:n,albumUri:r,contextUri:l,isPlayable:c,usePlayContextItem:o,isMOGEFRestricted:d,totalMilliseconds:g,playcount:k}){const{isActive:p,isPlaying:y,triggerPlay:h,togglePlay:x}=o({uri:e,index:n}),v=(0,Ca._)(e),N=(0,Ta.k)(e,c),j=t.map((e=>e.name)).join(m.ag.getSeparator()),{badges:b,hasBadges:I}=(0,fa.r)({isMOGEFRestricted:d,downloadAvailability:v,isExplicit:s}),L=t.map((e=>e.name)).join(m.ag.getSeparator()),C=(0,Ra.E)();return(0,D.jsx)(La.ZP,{value:"row",index:n,children:(0,D.jsx)(Na._,{menu:(0,D.jsx)(u.$,{uri:e,albumUri:r,artists:t,contextUri:l}),children:(0,D.jsxs)(Oa.c,{uri:e,contextUri:l,isPlayable:N,onTriggerPlay:(e,a)=>{h({loggingParams:a})},isActive:p,index:n,ariaRowIndex:n,dragMetadata:{name:a,createdBy:j},children:[(0,D.jsxs)(Pa.vZ,{ariaColIndex:0,children:[(0,D.jsx)(Pa.VG,{uri:e,src:i,onClick:(e,a)=>{x({loggingParams:a})},isLocked:!1,isPlaying:y,isActive:p,playAriaLabel:m.ag.get("tracklist.a11y.play",a,j)}),(0,D.jsxs)(Pa.vm,{children:[(0,D.jsx)(Sa.G,{uri:e,enabled:C,className:Ea,children:(0,D.jsx)(Pa.Wh,{titleText:a,children:a})}),I&&(0,D.jsxs)(Pa.g3,{children:[b.download&&(0,D.jsx)(ja.G,{}),b.explicit&&(0,D.jsx)(ba.N,{}),b.nineteen&&(0,D.jsx)(Ia.X,{className:wa,size:16})]}),(0,D.jsx)(Pa.K9,{children:(0,D.jsx)(Pa.T6,{artists:t})})]})]}),(0,D.jsx)(Pa.UA,{ariaColIndex:1,children:(0,D.jsx)(Fa.B,{playcount:k})}),(0,D.jsxs)(Pa.mU,{ariaColIndex:2,children:[(0,D.jsx)(Aa.f,{uri:e}),(0,D.jsx)(Pa.A$,{duration:g}),(0,D.jsx)(Pa.Zv,{menu:(0,D.jsx)(u.$,{uri:e,albumUri:r,contextUri:l,artists:t}),label:m.ag.get("more.label.track",a,L)})]})]})})})}),((e,a)=>e.uri===a.uri&&e.index===a.index));var Ma=i(91311),Ba=i(53185),Ga=i(8441),Ka=i(34122),Va=i(18677),Ya=i(81490),$a=i(44387);var za=i(78549);const Za={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"internalLinkRecommenderTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"strategy"}},type:{kind:"NamedType",name:{kind:"Name",value:"SEORankingStrategy"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"seoTestContext"}},type:{kind:"NamedType",name:{kind:"Name",value:"SEOTestContext"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"seoRecommended"},arguments:[{kind:"Argument",name:{kind:"Name",value:"seoRecommendedInput"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"strategy"},value:{kind:"Variable",name:{kind:"Name",value:"strategy"}}},{kind:"ObjectField",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}},{kind:"ObjectField",name:{kind:"Name",value:"seoTestContext"},value:{kind:"Variable",name:{kind:"Name",value:"seoTestContext"}}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"GenericError"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"message"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"message"}},{kind:"Field",name:{kind:"Name",value:"uri"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"ilrTrackData"}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"ilrTrackData"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"albumOfTrack"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}}]}}]}}]}}]};var qa=i(36952);const Qa=e=>{return a=e,"NotFound"!==a?.__typename&&"GenericError"!==a?.__typename&&"Track"===e.__typename;var a},Wa=t.memo((function({strategy:e,uri:a}){const i={pageUri:a,experimentId:va.Ym.TRACK_INTERNAL_LINK_RECOMMENDER},{data:s}=(n={uri:a,strategy:e,seoTestContext:i},(0,za.a)(Za,n,c));var n,c;const o=s?.seoRecommended.items,d=(0,t.useMemo)((()=>o?.slice(0,Math.min(o.length,5))),[o]),u=(0,t.useCallback)((e=>e.uri),[]),g=(0,t.useMemo)((()=>[qa.QD.TITLE,qa.QD.ALBUM,qa.QD.DURATION]),[]),k=`${a}|${(e=>e?e.filter((e=>Qa(e.data))).map((e=>e.data.uri)):[])(o)}`,{trackId:p=""}=(0,r.UO)();((e,a)=>{const i=(0,Ka.g)(),s=(0,De.v9)(pa.n5),n=(0,De.v9)(Ya.rZ),r=(0,ua.s4)(),l=(0,De.v9)($a.aj),c=l?l[a].find((e=>e.experimentId===va.Ym.TRACK_INTERNAL_LINK_RECOMMENDER))?.treatment:va.tO.CONTROL;(0,t.useEffect)((()=>{const a={category:"track_ilr_exposures",action:"track_page_visit",variant:c,label:"dwp",os:(0,Va.y)(),context:e,country:s?n:"",sp_t:(0,Ga.vQ)("sp_t")};i?r.send((0,Ba.k)(a)):r.send((0,Ma.x)(a))}),[e,n,r,i,s,c])})(k,p);const y=(o||[])?.map((e=>Qa(e.data)?{...e.data,provider:null,type:F.p.TRACK,uid:null}:{type:F.p.TRACK,uri:"",uid:null,provider:null})),h=(0,ie.Y)(a),{usePlayContextItem:x}=(0,_.n)({uri:h,pages:[{items:y}]},{featureIdentifier:"track"}),v=(0,t.useCallback)(((e,i)=>{if(!Qa(e.data))return(0,D.jsx)(t.Fragment,{});const s=e.data;return(0,D.jsx)(_a,{index:i,contextUri:a,uri:s.uri,name:s.name,totalMilliseconds:s.duration.totalMilliseconds,imgUrl:s.albumOfTrack?.coverArt?.sources[0].url,isPlayable:s.playability.playable,artists:s.artists.items.map((e=>({uri:e.uri,id:e.id,name:e.profile.name}))),albumUri:s?.albumOfTrack?.uri,isExplicit:s.contentRating?.label===X.KS.Explicit,isMOGEFRestricted:s.contentRating?.label===X.KS.NineteenPlus,usePlayContextItem:x,playcount:parseInt(s.playcount||"0",10)},`${i}-${s.uri}`)}),[a,x]);return o?.length?(0,D.jsxs)("div",{className:Da,children:[(0,D.jsxs)("div",{className:Ua,children:[(0,D.jsx)(l.D,{variant:"canon",semanticColor:"textBase",children:m.ag.get("playlist.extender.recommended.title")}),(0,D.jsx)(l.D,{variant:"mesto",paddingBottom:xa.o7,children:m.ag.get("internal-link-recommender.based-on-this-song")})]}),(0,D.jsx)(qa.Pv,{ariaLabel:m.ag.get("playlist.extender.recommended.title"),nrTracks:Math.min(o.length,5),rowPlaceholder:qa.hU,tracks:d,renderRow:v,resolveUri:u,columns:g},"internal-link-recommender-track-list")]}):null}));var Ha=i(25126),Ja=i(34404);const Xa=({album:e,index:a,artistURI:i})=>(0,D.jsx)(La.ZP,{value:"card",index:a,children:(0,D.jsx)(Ja.i,{index:a,latest:!1,showType:!0,...(0,Ha.B$)(e,i,e.name)})});var ei=i(55802);const ai=({albums:e,artistName:a,artistId:i,artistUri:t,className:s})=>e?(0,D.jsx)(La.ZP,{value:"shelf/albums",children:(0,D.jsx)(ei.P,{total:e.totalCount,title:m.ag.get("rich-page.popular-albums-by-artist",{artist:a}),seeAllUri:`${(0,Ha.GJ)(i)}:discography:${X.VZ.Album.toLowerCase()}`,seeAllLabel:m.ag.get("shelf.see-all"),alwaysShowSeeAll:!0,className:s,children:(0,Ha.Hr)(e.items).map(((e,a)=>(0,D.jsx)(Xa,{album:e,index:a,artistURI:t},e.uri)))})}):null;var ii=i(70650);const ti=({artistId:e,className:a,fansAlsoLike:i,title:t})=>(0,D.jsx)(La.ZP,{value:"shelf/fans-also-like",children:(0,D.jsx)(ei.P,{total:i.length,title:t??m.ag.get("rich-page.fans-also-like"),seeAllUri:`${(0,Ha.GJ)(e)}:related`,className:a,children:i.map(((e,a)=>(0,D.jsx)(La.ZP,{value:"card",index:a,children:(0,D.jsx)(ii.I,{index:a,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources||[]})},e.uri)))})});var si=i(14207);const ni="ERm7dIKbVoqGwPb_lXPH",ri=({artistName:e,artistUri:a,headerClassName:i,rowClassName:s,topTracks:n,topTracksTransformer:r,uri:c})=>{const o=(0,t.useMemo)((()=>n?.items.map((e=>r(e,c)))),[n?.items,r,c]),{usePlayContextItem:d}=(0,_.n)({uri:a},{featureIdentifier:"artist"});return o&&o.length>0?(0,D.jsxs)("div",{className:s,children:[(0,D.jsxs)("div",{children:[(0,D.jsx)(l.D,{variant:"mesto",className:ni,children:m.ag.get("rich-page.popular-tracks")}),(0,D.jsx)(l.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:i,children:e})]}),(0,D.jsx)(si.k,{nrTracks:o.length,initialTracks:o,usePlayContextItem:d})]}):null},li=({artistName:e,artistId:a,artistUri:i,className:t,releases:s,artistImages:n})=>s?(0,D.jsx)(La.ZP,{value:"shelf/releases",children:(0,D.jsx)(ei.P,{total:10,title:m.ag.get("rich-page.popular-releases-by-artist",{artist:e}),seeAllUri:`${(0,Ha.GJ)(a)}:discography:${X.VZ.Album.toLowerCase()}`,seeAllLabel:m.ag.get("shelf.see-all"),alwaysShowSeeAll:!0,className:t,listRowHeaderProps:n?{title:e,pretitle:m.ag.get("artist-page.popular"),media:(0,J.o)(n,{desiredSize:48})||""}:null,children:s.items.map(((e,a)=>(0,D.jsx)(Xa,{album:e,index:a,artistURI:i},e.uri)))})}):null,ci=({artistId:e,artistName:a,artistUri:i,className:t,singles:s})=>s?(0,D.jsx)(La.ZP,{value:"shelf/singles-and-eps",children:(0,D.jsx)(ei.P,{total:s.totalCount,title:m.ag.get("rich-page.popular-singles-and-eps-by-artist",{artist:a}),seeAllUri:`${(0,Ha.GJ)(e)}:discography:${X.VZ.Single.toLowerCase()}`,seeAllLabel:m.ag.get("shelf.see-all"),alwaysShowSeeAll:!0,className:t,children:(0,Ha.Hr)(s.items).map(((e,a)=>(0,D.jsx)(Xa,{album:e,index:a,artistURI:i},e.uri)))})}):null;var oi=i(10615),di=i(18463),mi=i(78085),ui=i(86261);var gi=i(9470);const ki=e=>(e.items||[]).map((e=>({name:e.profile.name,images:(e.visuals.avatarImage?.sources||[]).map((e=>({url:e.url,width:e.width,height:e.height}))),uri:e.uri,id:e.id}))),pi=e=>(e||[]).map((e=>e.profile.name)),yi=({uri:e,track:a})=>{const i=(0,Re.k)(),s=(0,Ka.g)(),d=(0,oi.k)({type:"locale",uri:e}),y=m.ag.getLocale(),b=parseInt(a.playcount||"0",10),{firstArtist:I,otherArtists:L,albumOfTrack:C,duration:f,name:A}=a,R=C?.coverArt,T=C?.copyright.items,S=C?.courtesyLine,P=C?.date?.isoString,F=R?.extractedColors?.colorRaw.hex,O=(R?.sources||[]).map((e=>({url:e.url,width:e.width||void 0,height:e.height||void 0}))),w={uri:C?.uri||"",name:C?.name||""},{trackId:B=""}=(0,r.UO)(),G=(0,mi.GA)(B,"track"),{isCanonicalPoolForTrackILR:K,isOrganicPoolForTrackILR:V}=(e=>{const a=(0,De.v9)($a.aj);return(0,Ra.E)()?{isCanonicalPoolForTrackILR:(0,ui.F4)(a||{},e),isOrganicPoolForTrackILR:(0,ui.MP)(a||{},e)}:{isCanonicalPoolForTrackILR:!1,isOrganicPoolForTrackILR:!1}})(B),Y=pi(I.items),$=pi(L.items),z=ki(I),Z=ki(L),q=[...z,...Z],W=I.items[0],ae=a.albumOfTrack,te=ae?.playability?.playable,se={artistId:W?.id,artistName:W?.profile?.name,artistUri:W?.uri},ne=a.albumOfTrack?.coverArt?.sources,re=(0,J.o)(ne||void 0,{desiredLabel:"large",desiredSize:600})??ne?.[0]?.url??"",[le,de]=(0,t.useState)(!1),je=(0,t.useCallback)((()=>{de(!le)}),[le]),be=L&&L.items.length>5,{spec:Ie,logger:Le}=(0,H.fU)(o.createDesktopTrackEventFactory,{data:{uri:e}}),Ce=a.playability.playable,fe=(0,ie.Y)(e),{togglePlay:Ae,isPlaying:Se,isActive:Pe}=(0,_.n)({uri:fe},{featureIdentifier:"track"}),Fe=(0,t.useCallback)((()=>(0,M.Zs)({i18n:m.ag,trackArtistsList:[...Y,...$].join(m.ag.getSeparator()),trackName:a.name,shouldLocalize:d})),[Y,$,d,a.name]),Ue=(0,t.useCallback)(((e,a)=>{Le.logInteraction(Ie.headerFactory().artistLinkFactory({position:a.position,uri:a.creator.uri}).hitUiNavigate({destination:a.creator.uri}))}),[Le,Ie]),Ee=(0,t.useCallback)((()=>{const a=(0,x.aK)({isPlaying:Se,isActive:Pe,spec:Ie.actionBarFactory().playButtonFactory(),logger:Le,uri:e});Ae({loggingParams:a})}),[Pe,Se,Le,Ie,Ae,e]),we=ae?.uri,_e=(0,t.useMemo)((()=>[...I.items,...L.items].map((e=>({uri:e.uri,name:e.profile.name})))),[I.items,L.items]),Me=(0,D.jsx)(u.$,{uri:e,albumUri:we,artists:_e});return(0,D.jsxs)("section",{"data-testid":"track-page",children:[(0,D.jsx)(ha.$,{children:Fe()}),(0,D.jsxs)(g.gF,{backgroundColor:F,children:[(0,D.jsxs)(k.W,{children:[(0,D.jsx)(h.$,{size:"medium",onClick:Ee,disabled:!Ce,isPlaying:Se,uri:e}),(0,D.jsx)(p.i,{text:A,dragUri:e,dragLabel:A})]}),(0,D.jsx)(v._P,{menu:Me,children:(0,D.jsx)(g.Oz,{dragUri:e,images:O,name:A,placeholderType:"album"})}),(0,D.jsxs)(g.sP,{children:[(0,D.jsx)(l.D,{variant:"mestoBold",children:m.ag.get("song")}),(0,D.jsx)(v._P,{menu:Me,children:(0,D.jsx)(g.xd,{dragUri:e,dragLabel:A,children:A})}),(0,D.jsx)(g.QS,{creators:z,releaseDate:P,durationMilliseconds:f.totalMilliseconds,onCreatorClick:Ue,isTrack:!0,album:w,playcount:b})]})]}),(0,D.jsx)(Te,{uri:e,togglePlay:Ae,isPlaying:Se,isActive:Pe,spec:(0,t.useMemo)((()=>Ie.actionBarFactory()),[Ie]),logger:Le,backgroundColor:F,name:A,isPlayable:Ce,albumUri:we,artists:_e}),(0,D.jsxs)(Q,{children:[(0,D.jsxs)("div",{className:"contentSpacing",children:[(0,D.jsx)("div",{className:ce,children:(0,D.jsx)(j.T,{render:({columnCount:a})=>(0,D.jsx)(ya,{imageForLyricsRequest:re,albumArtists:q,columnCount:a,uri:e})})}),K&&(0,D.jsx)("div",{"data-testid":"canonical-pool-top",children:(0,D.jsx)(Wa,{strategy:X.JI.ContentOnly,uri:a.uri})}),V&&(0,D.jsx)("div",{"data-testid":"organic-pool-top",children:(0,D.jsx)(Wa,{strategy:X.JI.OrganicTraffic,uri:a.uri})}),(0,D.jsx)(ri,{artistName:W.profile.name,artistUri:W.uri,headerClassName:ue,rowClassName:ce,topTracks:W.discography.topTracks,topTracksTransformer:di.X7,uri:a.uri}),(0,D.jsx)(li,{className:me,releases:W?.discography?.popularReleasesAlbums,...se}),(0,D.jsx)(ai,{albums:W?.discography?.albums,className:me,...se}),(0,D.jsx)(ci,{className:me,singles:W?.discography?.singles,...se}),L&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("div",{className:ke,children:L.items.map(((e,a)=>(0,D.jsx)(li,{className:n()(ge,{[ye]:a>4,[he]:le&&a>4}),releases:e.discography.popularReleasesAlbums,artistName:e.profile.name,artistId:e.id,artistUri:e.uri,artistImages:e.visuals.avatarImage?.sources},e.id)))}),be&&(0,D.jsx)(c.o,{onClick:je,className:xe,children:(0,D.jsx)(l.D,{as:"h2",variant:"violaBold",children:le?m.ag.get("show_less"):m.ag.get("mwp.search.artists.all")})}),(0,D.jsx)(ti,{artistId:W.id,className:n()(me,{[pe]:L.items.length>0}),fansAlsoLike:W.relatedContent.relatedArtists.items,title:m.ag.get("artist-page.fansalsolike")})]}),ae&&(0,D.jsx)(E,{art:ae.coverArt?.sources[0],disabled:!te||!i,LinkComponent:Be.default,name:ae.name,type:ae.type,size:U.LARGE,uri:ae.uri}),(0,D.jsx)(Ne,{richTrack:a})]}),(0,D.jsxs)("div",{className:"contentSpacing",children:[(0,D.jsxs)("div",{className:oe,children:[P&&(0,D.jsx)(l.D,{as:"p",variant:"mesto",className:ve,children:(0,ee.BI)((0,ee.RX)(P),y,{year:"numeric",month:"long",day:"numeric"})}),(0,D.jsx)(N.k,{copyrights:T||[],courtesyLine:S}),!s&&(0,D.jsx)(Oe,{uri:e,imageForLyricsRequest:re})]}),G&&(0,D.jsx)(mi.qj,{uri:e,title:m.ag.get("generative-ai.track.title")})]})]})]})},hi=(0,t.memo)((function(){const{trackId:e=""}=(0,r.UO)(),a=(0,d.tn)(e).toURI(),i=(0,gi.QN)({uri:a});return i.loading||"Track"!==i.data?.trackUnion?.__typename?(0,D.jsx)(y.h,{hasError:null!==i.error,errorMessage:m.ag.get("track-page.error")}):(0,D.jsx)(w.fd,{surface:w.Tg.TRACK,uris:[a,i.data.trackUnion.albumOfTrack?.uri??null],children:(0,D.jsx)(yi,{uri:a,track:i.data.trackUnion})})}))},44387:(e,a,i)=>{i.d(a,{M4:()=>l,aj:()=>r});var t=i(23055),s=i(63617);const n=e=>e.seoExperiment,r=((0,t.P1)(n,(e=>e?.uri)),(0,t.P1)(n,(e=>e?.[s.p.TRACK]))),l=(0,t.P1)(n,(e=>e?.[s.p.ALBUM]))},48001:(e,a,i)=>{i.d(a,{k:()=>r});var t=i(66258);const s="rTMkDBDp47Eo12ZEQv4U";var n=i(4637);const r=({copyrights:e,courtesyLine:a})=>{const i=(e||[]).map(((e,a)=>{const i=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let s;return s="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,(0,n.jsx)(t.D,{as:"p",variant:"finale",dir:"auto",children:`${s} ${i}`},a)}));return a&&i.unshift((0,n.jsx)(t.D,{as:"p",variant:"finale",dir:"auto",children:a},i.length)),(0,n.jsx)("div",{className:s,children:i})}},89664:(e,a,i)=>{i.d(a,{vI:()=>t});const t=(e,a)=>{const i=a?new URLSearchParams(a.search):void 0;return"1"===i?.get(e)}},42114:(e,a,i)=>{i.d(a,{k:()=>t});let t=function(e){return e.I18nSEO="i18nSEO",e.RTPTrackCredits="rtpv2p2",e.I18nAdditionalPages="i18nap",e.RichPlaylistPages="rpp",e.GenerativeAIContent="genai",e}({})},86261:(e,a,i)=>{i.d(a,{$S:()=>n,F4:()=>r,MP:()=>l});var t=i(87536);const s=({treatment:e,entityId:a,experimentId:i,treatmentVariation:t})=>{if(e&&e[a]){const s=e[a].find((e=>e.experimentId===i));return s?.treatment===t}return!1},n=(e,a)=>s({treatment:e,entityId:a,experimentId:t.Ym.GENERATIVE_AI,treatmentVariation:t.mx.VARIANT}),r=(e,a)=>s({treatment:e,entityId:a,experimentId:t.Ym.TRACK_INTERNAL_LINK_RECOMMENDER,treatmentVariation:t.tO.CANONICAL}),l=(e,a)=>s({treatment:e,entityId:a,experimentId:t.Ym.TRACK_INTERNAL_LINK_RECOMMENDER,treatmentVariation:t.tO.ORGANIC})},87536:(e,a,i)=>{i.d(a,{Ym:()=>t,mx:()=>s,tO:()=>n});let t=function(e){return e.GENERATIVE_AI="generative-ai",e.TRACK_INTERNAL_LINK_RECOMMENDER="track-ilr",e}({}),s=function(e){return e.CONTROL="0",e.VARIANT="1",e}({}),n=function(e){return e.CONTROL="0",e.CANONICAL="1",e.ORGANIC="2",e}({})}}]);
//# sourceMappingURL=xpui-routes-track-v2.js.map