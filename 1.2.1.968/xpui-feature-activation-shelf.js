"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[8228],{29230:(e,a,t)=>{t.r(a),t.d(a,{FeatureActivationShelf:()=>be});var n=t(59496),i=t(46439),s=t(88585),l=t.n(s),r=t(98355),o=t(79824),c=t(1740),u=t(2592),d=t(76374),h=t(18482),f=t(22006),g=t(84875),m=t.n(g),y=t(60444),p=t(97631);const v="uDOC2Oah0jn_p7N7l2Id",C="hwhquP1FOxRcCnf84P2M",S="bijDFKtWL1TJBF7X9Gp3",x="NTywvDEuW1PlcoR__9XV",b="t1SDLPBbSPbfihznNZdi",j="CvyMWBz1l8dSOsf4r_Ha",E="R32cBJPV9ccjWJYS1TLI",N="fzmowfLpLz7UlIyJThU8",w="MIBwSRJ5XZaCw1WWXXBn",k="dEuzpK3s_BmlRiVNFude",L="MVRnUhNC4ZMglLR56YMn",F="xiaMaZPt8ykPGR8gkQ53",A="mwBKJFOe7ee6V2MdmJyB",I="LziKPm9lTkWR0I7zD_rC";var P=t(4637);const _=n.memo((function({image:e}){return(0,P.jsx)("div",{className:S,children:(0,P.jsx)("div",{className:x,children:(0,P.jsx)(p.E,{className:b,src:e,loading:"lazy"})})})}));var D=t(60957),B=t(83399);const R="mKkYwwDvRoTIEnqf9Mlt",T="ES02HhKmADP_AdcKPs1e",U="IYwEYGRUJ5RTtr0EyBV1",Q="YYlv5PB5fGQthi9XzTQg",z=n.memo((({isLoading:e})=>{const a=(0,B.h)("shimmer");return(0,P.jsx)("div",{ref:a,className:m()(x,{[Q]:e})})})),M=n.memo((({cardImage:e,isLoading:a})=>(0,P.jsxs)("div",{className:m()(C,R),"aria-hidden":!0,children:[(0,P.jsx)("div",{className:S,children:e||(0,P.jsx)(z,{isLoading:a})}),(0,P.jsx)("div",{className:j,children:(0,P.jsxs)("div",{className:E,children:[(0,P.jsx)(D.C,{as:"div",variant:"balladBold",className:T,charCount:10,isLoading:a}),(0,P.jsx)(D.C,{as:"div",variant:"mesto",className:U,charCount:15,isLoading:a})]})})]}))),V=n.memo((function({children:e,image:a,isLoading:t,onClick:n,id:i}){return t?(0,P.jsx)(M,{isLoading:!0}):(0,P.jsxs)("div",{className:m()(C),onClick:n,children:[(0,P.jsx)(_,{image:a}),(0,P.jsx)("div",{className:j,children:(0,P.jsx)("div",{className:E,children:(0,P.jsxs)("div",{className:N,children:[(0,P.jsx)(y.D,{color:"#ffffff",height:"18",className:w}),e]})})}),(0,P.jsx)("div",{"data-testid":i,onClick:n,className:v})]})})),W="https://newsroom.spotify.com/2021-09-09/get-perfect-song-recommendations-in-the-playlists-you-create-with-enhance/",G=n.memo((function({isLoading:e=!1,spec:a,logger:t}){const{openURL:i}=(0,f.e)();(0,n.useEffect)((()=>{t.logImpression(a.shelfContainerFactory().enchanceCardFactory().impression())}),[a,t]);const s=(0,n.useCallback)((e=>{e.stopPropagation(),t.logInteraction(a.shelfContainerFactory().enchanceCardFactory().hitNavigateToExternalUri({destination:W})),i(W)}),[i,a,t]);return(0,P.jsxs)(V,{image:(0,h.g)("images/feature-activation-shelf-enhance-placeholder.png"),isLoading:e,onClick:s,children:[(0,P.jsx)(u.D,{as:"p",variant:"balladBold",className:k,children:c.ag.get("web-player.feature-activation-shelf.enhance-placeholder.title")}),(0,P.jsx)(u.D,{as:"p",variant:"mesto",className:L,children:c.ag.get("web-player.feature-activation-shelf.enhance.description")}),(0,P.jsx)(d.P,{className:F,buttonSize:"sm",onClick:s,children:c.ag.get("web-player.feature-activation-shelf.enhance-placeholder.cta")})]})}));var H=t(74284),J=t(88668),q=t(29769),O=t(33357);function K({items:e}){return e.filter(O.no).find((e=>e.isOwnedBySelf&&e.totalLength>0))??null}const Y={offset:0,limit:50,flatten:!0,sort:{field:O.bD.RELEVANCE,order:O.As.DESC}};var X=t(25875),Z=t(34604),$=t(97490);const ee=e=>{if(!e.firstSawShelf)return!1;const a=e.clickedEnhanceCard||e.hasEnhancedPlaylist,t=e.clickedAudioQualityCard||e.hasVeryHighQualityAudio,n=(i=e.firstSawShelf,Math.round(Math.abs((Date.now()-i)/864e5)));var i;return t&&a&&e.clickedGroupSessionsCard&&n>2||n>4};var ae=t(18217),te=t(46931);const ne=n.memo((function({isLoading:e=!1,playlist:a,toggleEnhanceState:t,navigateToPlaylist:i,spec:s,logger:l,setInteractionState:r,interactionState:o}){const{isEnhanced:h}=(0,te.U)(a.metadata.uri);(0,n.useEffect)((()=>{l.logImpression(s.shelfContainerFactory().enchanceCardFactory().impression())}),[s,l]);const f=(0,n.useCallback)((()=>{l.logInteraction(s.shelfContainerFactory().enchanceCardFactory().hitEnhancePlaylist({playlist:a.metadata.uri})),i(a.metadata.uri),h||t(),r({...o,clickedEnhanceCard:!0})}),[t,h,a.metadata.uri,i,l,s,o,r]);return(0,P.jsxs)(V,{image:a.metadata.images[0].url,isLoading:e,onClick:f,children:[(0,P.jsx)(u.D,{as:"p",variant:"balladBold",className:k,children:c.ag.get("web-player.feature-activation-shelf.enhance.title",{playlist:a.metadata.name})}),(0,P.jsx)(u.D,{as:"p",variant:"mesto",className:L,children:c.ag.get("web-player.feature-activation-shelf.enhance.description")}),(0,P.jsx)(d.P,{className:m()(F,{[A]:h}),buttonSize:"sm",iconLeading:ae.e,onClick:f,children:h?c.ag.get("web-player.feature-activation-shelf.enhance.cta-enhanced"):c.ag.get("web-player.feature-activation-shelf.enhance.cta")})]})}));var ie=t(18204);const se=n.memo((function({isLoading:e=!1,spec:a,logger:t}){const{setVisible:i}=(0,n.useContext)(ie.O);(0,n.useEffect)((()=>{t.logImpression(a.shelfContainerFactory().groupSessionsCardFactory().impression())}),[a,t]);const s=()=>{t.logInteraction(a.shelfContainerFactory().groupSessionsCardFactory().hitUiReveal()),i(!0)};return(0,P.jsxs)(V,{image:(0,h.g)("images/feature-activation-shelf-group-sessions.png"),isLoading:e,onClick:s,children:[(0,P.jsx)(u.D,{as:"p",variant:"balladBold",className:k,children:c.ag.get("web-player.feature-activation-shelf.group-sessions.title")}),(0,P.jsx)(u.D,{as:"p",variant:"mesto",className:L,children:c.ag.get("web-player.feature-activation-shelf.group-sessions.description")}),(0,P.jsx)(d.P,{className:F,buttonSize:"sm",onClick:s,children:c.ag.get("web-player.feature-activation-shelf.group-sessions.cta")})]})}));var le=t(53771),re=t(31662),oe=t(74759);const ce=n.memo((function({isLoading:e=!1,spec:a,logger:t,interactionState:s,setInteractionState:l}){const r=(0,i.s0)(),{isAvailable:o,isEnabled:f,enableVeryHighQualityAudio:g}=(()=>{const{settings:{values:e},setValue:a}=(0,oe.r)(),t=e["audio.play_bitrate_enumeration"];return{isAvailable:!!t&&(0,re.kN)(t.toString(),e)&&(0,re.gj)(e),isEnabled:t===re.PF.veryhigh.enum.toString(),enableVeryHighQualityAudio:()=>{a("audio.play_bitrate_non_metered_enumeration",re.PF.veryhigh.enum),a("audio.play_bitrate_enumeration",re.PF.veryhigh.enum)}}})();(0,n.useEffect)((()=>{o&&t.logImpression(a.shelfContainerFactory().audioQualityCardFactory().impression())}),[a,t,o]),(0,n.useEffect)((()=>{f&&l({...s,hasVeryHighQualityAudio:!0})}),[f,s,l]);const y=e=>{const n="/preferences"+(e?`?${e}`:"");t.logInteraction(a.shelfContainerFactory().audioQualityCardFactory().hitUiNavigate({destination:n})),r(n),l({...s,clickedAudioQualityCard:!0})},p=()=>{t.logInteraction(a.shelfContainerFactory().audioQualityCardFactory().hitSetSettingField()),g(),y("feature-activation")};return o?(0,P.jsxs)(V,{image:(0,h.g)("images/feature-activation-shelf-audio-quality.png"),isLoading:e,id:"audio-quality-card",onClick:f?()=>y():p,children:[(0,P.jsx)(u.D,{as:"p",variant:"balladBold",className:k,children:c.ag.get("web-player.feature-activation-shelf.audio-quality.title")}),(0,P.jsx)(u.D,{as:"p",variant:"mesto",className:L,children:c.ag.get("web-player.feature-activation-shelf.audio-quality.description")}),(0,P.jsx)(d.P,{className:m()(F,{[I]:f}),onClick:f?()=>y():p,buttonSize:"sm",iconLeading:f?le.N:void 0,children:f?c.ag.get("web-player.feature-activation-shelf.audio-quality.cta_alt"):c.ag.get("web-player.feature-activation-shelf.audio-quality.cta")})]}):null}));var ue=t(2953),de=t(27550),he=t(93224),fe=t(46217);const ge="RvSsw_CWBCtHhojt6bY_",me=n.memo(n.forwardRef((function(e,a){const{className:t,render:i}=e,s=(0,n.useRef)(null),[l,r]=(0,n.useState)({columnCount:-1,columnWidth:-1,gridGap:24});(0,n.useImperativeHandle)(a,(()=>s.current));const o=(0,n.useCallback)((()=>{const e=s.current;if(!e||!e.parentElement)return;const a=e.parentElement.offsetWidth,t=(e=>e<700?1:e<1e3?2:3)(a),n=(e=>2===e?12:3===e?18:24)(t),i=Math.floor((a-(t-1)*n)/t);r({columnCount:t,columnWidth:i,gridGap:n})}),[]);(0,fe.y)({refOrElement:s,observeOnly:"width",onResize:()=>{o()}}),(0,n.useLayoutEffect)((()=>{o()}),[o]);const c={"--column-width":`${l.columnWidth}px`,"--column-count":`${l.columnCount}`,"--grid-gap":`${l.gridGap}px`};return(0,P.jsx)("div",{ref:s,className:m()(ge,t),style:c,children:i(l)})})));me.displayName="GridContainer";const ye="QD8u8vCxcfIpJC14IBqg",pe="H4yLgZB7CQJlPH3u5Qbi",ve="jNsZ_X7AAz13oxU5Sx0G",Ce=n.memo((function({title:e,children:a,seeAllUri:t,className:i="",testId:s="component",seeAllLabel:l,onClickShelfTitle:r,onClickShelfSeeAll:o,elementRef:c}){const u=(0,n.useCallback)((({columnCount:e})=>(0,P.jsx)(P.Fragment,{children:Array.isArray(a)&&a.filter(((a,t)=>t<e))})),[a]);return Array.isArray(a)&&0===a.length?null:(0,P.jsxs)("section",{ref:c,className:m()(i,ye),"data-testid":`${s}-shelf`,"aria-label":e,children:[(0,P.jsx)("div",{className:pe,children:(0,P.jsx)(de.r,{title:e,seeAllUri:t,seeAllLabel:l,hasMoreElements:!0,onClickTitle:r,onClickSeeAll:o})}),(0,P.jsx)(me,{className:m()(ve),render:u})]})}));Ce.displayName="BaseShelf";const Se=e=>(0,P.jsx)(ue.L,{onError:e=>{(0,he.vK)(e,"Shelf")},children:(0,P.jsx)(Ce,{...e})}),xe="https://support.spotify.com/us/article/premium-plans/",be=n.memo((function(){const{loading:e,error:a,toggleEnhanceState:t,playlistWithEnhanceState:s}=function(){const e=(0,q.o)(),a=(0,H._)(),t=(0,n.useContext)(J.ZF),i=(0,n.useMemo)((()=>function(e){return async function(a){if(null===a)return null;try{const t=await e.getPlaylist(a.uri);return t.metadata.hasSpotifyTracks?t:null}catch(e){return null}}}(t)),[t]),s=(0,n.useMemo)((()=>function(e){return async function(a){if(null===a)return null;try{const{isEnhanced:t}=await e.getContextState(a.metadata.uri);return{...a,isEnhanced:t}}catch(e){return null}}}(a)),[a]),[l,r]=(0,n.useState)(null),[o,c]=(0,n.useState)(!1),[u,d]=(0,n.useState)(null);(0,n.useEffect)((()=>{c(!0),e.getContents(Y).then(K).then(i).then(s).then(r).catch(d).finally((()=>c(!1)))}),[e,i,s]);const h=(0,n.useCallback)((()=>null===l?Promise.reject("No playlist found."):a.getContextState(l.metadata.uri).then((e=>a.setIsEnhanced(l.metadata.uri,!e.isEnhanced)))),[l,a]);return{loading:o,playlistWithEnhanceState:l,toggleEnhanceState:h,error:u}}(),u=(0,i.s0)(),{spec:d,logger:h}=(0,Z.fU)(o.createDesktopFeatureActivationShelfEventFactory,{}),{interactionState:f,setInteractionState:g,hideShelf:m}=function(e){const[a,t]=(0,$.z)("feature-activation-shelf",{clickedGroupSessionsCard:!1,clickedEnhanceCard:!1,hasEnhancedPlaylist:!1,clickedAudioQualityCard:!1,hasVeryHighQualityAudio:!1,firstSawShelf:null});return(0,n.useEffect)((()=>{a.firstSawShelf||t({...a,firstSawShelf:Date.now()})}),[a,t]),(0,n.useEffect)((()=>{null!==e&&e.isEnhanced&&t({...a,hasEnhancedPlaylist:!0})}),[e,a,t]),{hideShelf:ee(a),interactionState:a,setInteractionState:t}}(s);(0,n.useEffect)((()=>{m||h.logImpression(d.shelfContainerFactory().impression())}),[d,h,m]);const y=(0,n.useCallback)((e=>{const a=l().from(e).toURLPath(!0);u(a)}),[u]),p=null!==s&&!a,v=(0,n.useCallback)((()=>{h.logInteraction(d.shelfTitleFactory().hitNavigateToExternalUri({destination:xe}))}),[d,h]),C=(0,n.useCallback)((()=>{h.logInteraction(d.seeAllFeaturesFactory().hitNavigateToExternalUri({destination:xe}))}),[d,h]),S=(0,r.W6)(X.Up,{loadingValue:!1});return m?null:(0,P.jsxs)(Se,{seeAllUri:xe,title:c.ag.get("web-player.feature-activation-shelf.title"),seeAllLabel:c.ag.get("web-player.feature-activation-shelf.see_more"),onClickShelfTitle:v,onClickShelfSeeAll:C,children:[S&&(p?(0,P.jsx)(ne,{playlist:s,isLoading:e,toggleEnhanceState:t,navigateToPlaylist:y,spec:d,logger:h,setInteractionState:g,interactionState:f}):(0,P.jsx)(G,{isLoading:e,spec:d,logger:h})),(0,P.jsx)(se,{isLoading:e,spec:d,logger:h}),(0,P.jsx)(ce,{isLoading:e,spec:d,logger:h,setInteractionState:g,interactionState:f})]})}))}}]);
//# sourceMappingURL=xpui-feature-activation-shelf.js.map