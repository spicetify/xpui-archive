"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[2342],{87278:(e,a,n)=>{n.d(a,{g:()=>r});var t=n(89518),i=n(55954),s=n(4637);const r=({children:e})=>(0,s.jsx)(t.D,{variant:"mesto",className:i.Z.pretitle,children:e})},60944:(e,a,n)=>{n.d(a,{x:()=>m});var t=n(59496),i=n(55513),s=n(21218),r=n(25022),l=n(75376),o=n(28364),c=n(87829),d=n(4637);const m=({children:e,action:a,uri:n})=>{const m=(0,s.g)(),u=(0,l.j)();let g;const h=()=>{const e={triggerId:c.K,triggerAction:{type:a}};o.y.set((a=>({...a,...e}))),u.storeAction(r.wH,{operation:i.pT.ADD,uris:[n]})};try{g=t.Children.only(e)}catch(a){return(0,d.jsx)(d.Fragment,{children:e})}return m?t.cloneElement(g,{onClick:h}):(0,d.jsx)(d.Fragment,{children:e})}},88374:(e,a,n)=>{n.r(a),n.d(a,{default:()=>_e});var t=n(59496),i=n(84875),s=n.n(i),r=n(24106),l=n(52529),o=n(89518),c=n(71817),d=n(2157),m=n(54431),u=n(96025),g=n(50834),h=n(68939),p=n(4546),x=n(67497),k=n(78642),v=n(93268),j=n(79728),b=n(708),y=n(2050),N=n(47973);const f={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"queryAlbumMerch"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"albumUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"merch"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"20"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumMerchItem"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumMerchItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Merch"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"price"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]};var I=n(43841);const C="iEG0moJ3mt1_j9Lho7MA";var A=n(4637);const S=({albumName:e,albumURI:a})=>{const{data:n}=(t={uri:a},i={cacheTime:5*N.y},(0,N.a)(f,t,i));var t,i;const s=n?.albumUnion&&"merch"in n.albumUnion?n?.albumUnion?.merch?.items:[];return s&&s?.length>0?(0,A.jsx)("div",{className:"contentSpacing",children:(0,A.jsx)("div",{className:C,children:(0,A.jsx)(I.s,{id:e,uri:a,merchItems:s,merchVariant:"Album page merch items"})})}):null};var T=n(57578),M=n(62249),R=n(88127),w=n(44858),O=n(99334),L=n(60033),P=n(71308),U=n(51458),E=n(85730),D=n(90130),F=n(94172),V=n(26053),_=n(72953),z=n(68351),B=n(26804),G=n(26769),Q=n(47603),K=n(22817),q=n(60944),Y=n(60536),$=n(94638),Z=n(14013),H=n(45836),W=n(56728),J=n(25193),X=n(73054);const ee="n8Bz0c0v17whD3KfMdOk",ae="zddjxV2lX9ukNM5QXloA",ne="lVqlPjQLuQhK2flsxB78",te="O_EguRjsZ4uI1hHamkOA",ie="jcaQQxoVnuuhtVwDJU1R",se="fLS8v3_EfBadEerbGVoR",re="in4OjUTflcsoj9RUpf05",le="_9KFlmOOpGkGHvRTBz2LX",oe="vveb4Rn0dK_r8YUM7L_n",ce=t.memo((function({uri:e,togglePlay:a,isPlaying:n,isActive:i,spec:s,logger:r,backgroundColor:l,name:o,artists:c,isPlayable:d,sharingInfo:m}){const u=(0,$.o)(),h=(0,Z.k)(),x=(0,_.y)(),k=(0,t.useMemo)((()=>s.actionBarFactory()),[s]),[v,j]=(0,_.Z)(e),b=(0,t.useCallback)((()=>{const t=(0,H.aK)({isPlaying:n,isActive:i,spec:k.playButtonFactory(),logger:r,uri:e});a({loggingParams:t})}),[n,i,a,k,r,e]),N=(0,t.useCallback)((async()=>{let a;const n=k.saveButtonFactory();a=v?n.hitDislike({itemToBeDisliked:e}):n.hitLike({itemToBeLiked:e}),r.logInteraction(a),u({targetUri:e,intent:v?"unsave":"save",type:"click"});try{await j(!v)}catch{}}),[u,e,v,j,k,r]),f=(0,X.Q)(),I=(0,Y.j)();return(0,A.jsx)(B.o,{backgroundColor:l,children:(0,A.jsxs)(B.F,{children:[(0,A.jsx)(y.$,{onClick:b,disabled:!d,isPlaying:n,size:I,uri:e}),f&&(0,A.jsx)(E.Nh,{spec:k,children:(0,A.jsx)(J.K,{entityName:o,contextUri:e,activationPlacement:"bottomEnd",size:I})}),(0,A.jsx)(q.x,{uri:e,action:W.sr.SAVE_ALBUM,children:(0,A.jsx)(G.H,{isAdded:!!v,onClick:N,disabled:!h&&!x?.getCapabilities().canModifyOffline,size:I})}),(0,A.jsx)(Q.o,{uri:e,isFollowing:!!v,onClick:(a,n)=>(0,H.l7)(n,k.downloadButtonFactory(),r,e),onFollow:N,size:I}),(0,A.jsx)(w.yj,{onShow:()=>(0,H.qq)(k,r),menu:(0,A.jsx)(p.Y,{uri:e,artistUri:c?.[0]?.uri,sharingInfo:m}),children:(0,A.jsx)(K.z,{label:g.ag.get("more.label.context",o),size:I})}),(0,A.jsx)("div",{className:oe,children:(0,A.jsx)(F.F,{property:z.FM,renderNewExperience:()=>(0,A.jsx)(V.A,{options:[],onSelect:()=>{},selected:null,enableViewModeMenu:!0})})})]})})}));var de=n(80913);const me=864e5,ue=365.25*me;var ge=n(87278),he=n(96135),pe=n(58386),xe=n(90797),ke=n(7715),ve=n(66863),je=n(71126),be=n(52029),ye=n(27147);const Ne="TCmZzqInstJMZjkHgnw3",fe="PeNI572tTpqsN23o3QhJ",Ie="oUsSfFiifMPXqW0kHjR6",Ce="XKvEMQZlPfPncTqiitM5",Ae="GdbPVlmUCW0Q6ZZ0z0wh",Se="Hu7O5y7x5c7wUYFbnIoS",Te=t.memo((function(e){const{images:a,title:n,isOpen:i,onClose:s}=e,r=(0,t.useMemo)((()=>(0,ye.X)(a,{desiredSize:1e4})),[a]);return r?(0,A.jsx)(je.Z,{className:Ne,isOpen:i,onRequestClose:s,animation:{modal:{base:Ce,afterOpen:Ae,beforeClose:Se}},animated:!0,children:(0,A.jsxs)("div",{style:{"--image-width":`${r.width}px`,"--image-height":`${r.height}px`},className:fe,children:[(0,A.jsx)(be.E,{loading:"eager",alt:n,src:r.url,className:Ie}),(0,A.jsx)(ve.o,{onClick:s,semanticColor:"textBase",children:g.ag.get("web-player.cover-art-modal.close")})]})}):null}));var Me=n(79226),Re=n(36820),we=n(11945),Oe=n(68725);const Le=({releases:e})=>(0,A.jsx)(we.v,{children:e.map((e=>(0,A.jsx)(Oe.s,{role:"menuitem",to:(0,Re.EC)(e.uri).toURLPath(!0),children:e.name},e.uri)))});var Pe=n(72146),Ue=n(52561),Ee=n(74687);const De=t.lazy((()=>n.e(466).then(n.bind(n,60466))));function Fe(e){switch(e){case Ue.V.Single:return g.ag.get("single");case Ue.V.Ep:return g.ag.get("ep");case Ue.V.Compilation:return g.ag.get("compilation");case Ue.V.Audiobook:return g.ag.get("card.tag.audiobook");case Ue.V.Album:default:return g.ag.get("album")}}const Ve=({uri:e,album:a})=>{const n=(0,l.TH)(),{spec:i,logger:b,UBIFragment:N}=(0,E.fU)(u.w,{data:{uri:e}}),f=(0,t.useMemo)((()=>i.trackListFactory()),[i]),I=(0,t.useMemo)((()=>i.moreByArtistShelfFactory()),[i]),C=a.moreAlbumsByArtist,L=parseInt(new URLSearchParams((0,l.TH)().search).get("index")||"0",10),F=(0,M.Y)(e),{usePlayContextItem:V,togglePlay:_,isPlaying:z,isActive:B}=(0,P.n)({uri:F},{featureIdentifier:"album"}),G=(0,t.useCallback)(((e,a)=>{if(i){const e=i.headerFactory().artistNameFactory().hitUiNavigate({destination:a.creator.uri});b.logInteraction(e)}}),[b,i]),{isOpen:Q,openModal:K,closeModal:q}=(()=>{const[e,a]=(0,t.useState)(!1);return{isOpen:e,openModal:(0,t.useCallback)((()=>a(!0)),[]),closeModal:(0,t.useCallback)((()=>a(!1)),[])}})(),Y=(0,m.W6)(xe.DUY,{loadingValue:!1})?{onClick:K,ariaLabel:g.ag.get("web-player.album.open_coverart_modal")}:{},$=(0,t.useCallback)((()=>new URLSearchParams(n.search.slice(1)).get("highlight")||""),[n.search]),Z=a.uri,H=a.name,W=a.albumType,J=a.release?.date,X=a.nrTracks,oe=a.images,ve=a.extractedColors?.colorRaw.hex,je=a.artists,be=a.isPlayable,ye=a.isCatalogueRestricted,Ne=a.copyright.items,fe=a.courtesyLine,Ie=a.duration.durationMs,Ce=a.duration.isEstimate,Ae=$(),Se=(0,r.v9)(ke.Gg),Re=Se.overrides?.locale??g.ag.getLocale(),we=(0,pe.k)({uri:e,type:"locale"}),Oe=(0,U.OT)({albumName:H,albumType:W,albumArtists:je.map((e=>e.name)).join(g.ag.getSeparator()),shouldLocalize:we,i18n:g.ag});(0,R.Y5)(ve||null);const{albumId:Pe=""}=(0,l.UO)(),Ue=(0,Me.GA)(Pe,"album"),Ve=function(e){return(0,t.useMemo)((()=>{if(!e?.date)return null;if("day"===e.precision){const a=new Date(e.date),n=(new Date).getTime()-a.getTime(),t=n%ue;return t<3.5*me||t>312552e5?Math.round(n/ue):null}return null}),[e])}(a.release),{isCompactMode:_e}=(0,T.mJ)();return(0,A.jsxs)("section",{className:ee,"data-testid":"album-page",children:[(0,A.jsx)(x.$,{children:Oe}),null!==Ve?(0,A.jsx)(t.Suspense,{fallback:null,children:(0,A.jsx)(De,{colorLight:a?.extractedColors?.colorLight.hex,colorDark:a?.extractedColors?.colorDark.hex,name:H,years:Ve})}):null,(0,A.jsxs)(k.gF,{backgroundColor:ve,children:[(0,A.jsxs)(v.W,{children:[(0,A.jsx)(y.$,{size:"medium",onClick:()=>_(),disabled:!be,isPlaying:z,uri:e}),(0,A.jsx)(j.i,{text:H,dragUri:e,dragLabel:H})]}),(0,A.jsx)(w._P,{menu:(0,A.jsx)(p.Y,{uri:a.uri,artistUri:je?.[0]?.uri,sharingInfo:a.sharingInfo}),children:(0,A.jsx)(k.Oz,{dragUri:Z,images:oe,name:H,placeholderType:"album",...Y})}),(0,A.jsxs)(k.sP,{children:[(0,A.jsx)(ge.g,{children:Fe(W)}),(0,A.jsx)(w._P,{menu:(0,A.jsx)(p.Y,{uri:a.uri,artistUri:je?.[0]?.uri,sharingInfo:a.sharingInfo}),children:(0,A.jsx)(k.xd,{dragUri:a.uri,dragLabel:a.name,scaleAtMinWidth:k.vz,children:H})}),(0,A.jsx)(k.QS,{creators:je,onCreatorClick:G,releaseDate:J,totalItems:X,durationMilliseconds:Ie,isEstimatedDuration:Ce,hasTracks:!0})]})]}),(0,A.jsx)(ce,{backgroundColor:ve,uri:e,togglePlay:_,isPlaying:z,isActive:B,spec:i,logger:b,sharingInfo:a.sharingInfo,name:a.name,artists:a.artists,isPlayable:a.isPlayable}),ye?(0,A.jsxs)("div",{className:ae,children:[(0,A.jsx)(o.D,{as:"h2",variant:"cello",className:ne,children:g.ag.get("windowed.product-album-header")}),(0,A.jsx)("div",{className:te,children:g.ag.get("windowed.product-album-description")})]}):null,(0,A.jsxs)("div",{className:"contentSpacing",children:[(0,A.jsx)(N,{spec:f,children:(0,A.jsx)(de.L,{ariaLabel:H,nrTracks:(0,Ee.y)(a.discs)?a.discs.totalCount+X:X,discs:a.discs,albumUri:Z,highlightUri:Ae,scrollToIndex:L,usePlayContextItem:V,initalTracks:a.items,isCompactMode:_e})}),(0,A.jsxs)("div",{className:re,children:[(0,A.jsxs)("div",{children:[J&&(0,A.jsx)(o.D,{as:"p",variant:"mesto",children:(0,D.BI)((0,D.RX)(J),Re,{year:"numeric",month:"long",day:"numeric"})}),(0,A.jsx)(O.k,{copyrights:Ne,courtesyLine:fe})]}),a.releases.items.length>0&&(0,A.jsx)(w.xV,{menu:(0,A.jsx)(Le,{releases:a.releases.items}),children:(e,n,t)=>(0,A.jsxs)("button",{ref:t,className:se,type:"button",onClick:n,children:[(0,A.jsx)(o.D,{variant:"mesto",children:g.ag.get("album-page.more-releases",a.releases.items.length)}),e?(0,A.jsx)(c.U,{iconSize:16}):(0,A.jsx)(d.i,{iconSize:16})]})})]})]}),(0,A.jsx)(S,{albumName:H,albumURI:Z}),(0,A.jsx)(A.Fragment,{children:C?.length>0&&(0,A.jsx)("div",{className:"contentSpacing",children:(0,A.jsx)(N,{spec:I,children:(0,A.jsx)(he.q,{index:0,id:"more-albums",className:ie,title:g.ag.get("album-page.more-by-artist",je?.[0]?.name),total:C.length,seeAllUri:`${je?.[0]?.uri.replace("artist","app:artist")}:discography`,seeAllLabel:g.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,children:C.map(((e,a)=>(0,A.jsx)(h.i,{index:a,artists:je,images:e.images||[],name:e.name,uri:e.uri,year:e.year,type:e.albumType,sharingInfo:e.sharingInfo},e.uri)))})})})}),Ue&&(0,A.jsx)("div",{className:s()("contentSpacing",le),children:(0,A.jsx)(Me.qj,{title:g.ag.get("generative-ai.album.title"),uri:e})}),(0,A.jsx)(Te,{title:Oe,isOpen:Q,onClose:q,images:oe})]})},_e=t.memo((function(){const{albumId:e}=(0,l.UO)(),a=`spotify:album:${e}`,{loading:n,error:t,data:i,canLoadOffline:s}=(0,Pe.j)(a);return n||!i?(0,A.jsx)(b.h,{hasError:null!==t,loadOffline:s,errorMessage:g.ag.get("error.not_found.title.album")}):(0,A.jsx)(L.fd,{surface:L.Tg.ALBUM,uris:[a],children:(0,A.jsx)(Ve,{uri:a,album:i})})}))},79226:(e,a,n)=>{n.d(a,{qj:()=>K,GA:()=>m});var t=n(24106),i=n(52529),s=n(54431),r=n(12160),l=n(95706),o=n(67515),c=n(90797),d=n(57612);const m=(e,a)=>{const n=(0,i.TH)(),m=(0,s.W6)(c.d_6),u=(0,r.vI)(l.k.GenerativeAIContent,n),g="track"===a?d.aj:d.M4,h=(0,t.v9)(g);return(0,o.$S)(h||{},e)||m===c.U0E.VARIANT||u};var u=n(59496),g=n(29378),h=n(90512),p=n(33856),x=n(40315);function k(e,a,n){try{(0,h.sQ)({metric_type:g.MetricTypes.COUNTER,what:"request-rate",value:1,tags:{endpoint:e,statusCode:a,isFatal:n}}).catch((()=>({})))}catch(e){}}class v extends x.c{build(){const e=super.build();return e.onAfterSend=a=>{let n="unknown",t=!1;if(null!==e.endpointIdentifier&&(t=!0,n=`${e.method} ${e.hostIdentifier||"unknown-host"}::${e.endpointIdentifier}`),a)throw t&&k(n,JSON.stringify(a.status||0),JSON.stringify(0===(e.endpointIdentifier||"").indexOf("/me"))),p.m.fromResponse(a,e.method);if(t){k(n,"200","false");const a=Date.now()-(e.startTimestamp||0);!function(e,a,n){try{(0,h.sQ)({metric_type:g.MetricTypes.TIMER,what:"request-duration",value:n,tags:{endpoint:e,statusCode:a}}).catch((()=>({})))}catch(e){}}(n,"200",g.Time.fromMillis(a).asNanos())}},e}}var j=n(48706);let b=null;class y{static setSession(e){if(!e)return;const{accessToken:a}=e,n=this.getInstance();n.accessToken=a,a||n.resetPendingRequests()}static setLocale(e){this.getInstance().locale=e}static setMarket(e){this.getInstance().market=e}static resetInstance(){b=null}static getInstance(){return b||(b=this.createNew()),b}static createNew(){return new v(j.e)}}var N=n(14918);const f=e=>(0,u.useCallback)((async()=>N.Wy.getGeneratedContent(y.getInstance(),e).then((e=>e.body.content))),[e]);var I=n(58531),C=n(89518),A=n(50834);const S="expandable-description-for-seo";var T=n(84875),M=n.n(T);const R="kJFJjpbeZmhT7WG2KjAM",w="gPrYeH86UvcjOx_NQYwp",O="Zf6ONkng2h6eGJg9d4l_",L="G2RRgu_U4ZPugC9x8Vuh",P="BmLmBhY6zS0mTzoMTvQA",U="dvKxmtfViMbQHGD2OUYz",E="LzDWAa70LpBOSMc_ATzA",D="Z5EIr8RoSgmXMt0y9VsS";var F=n(4637);const V=({open:e,content:a})=>{const n=a.slice(0,3),t=a.slice(3);return(0,F.jsxs)(C.D,{as:"ul",className:L,children:[n.map((e=>(0,F.jsxs)(C.D,{as:"li",className:P,variant:"ballad",children:[e,"‎"]},e))),t.map((a=>(0,F.jsxs)(C.D,{as:"li",variant:"ballad",className:M()(P,U,{[E]:e}),"aria-hidden":!e,children:[a,"‎"]},a)))]})},_=({open:e,handleClick:a})=>(0,F.jsx)("button",{className:O,onClick:a,"aria-controls":S,"aria-owns":S,children:(0,F.jsx)(C.D,{variant:"balladBold",className:D,children:e?A.ag.get("show_less"):`…${A.ag.get("show_more")}`})}),z=u.memo((function({content:e}){const[a,n]=(0,u.useState)(!1),t=JSON.parse(e);return t.length<=3?(0,F.jsx)("div",{className:R,children:(0,F.jsx)("ul",{className:w,children:t.map((e=>(0,F.jsx)("li",{children:(0,F.jsx)(C.D,{as:"p",semanticColor:"textSubdued",variant:"ballad",children:e})},e)))})}):(0,F.jsxs)("div",{className:R,"aria-expanded":a,id:S,children:[(0,F.jsx)(V,{open:a,content:t}),(0,F.jsx)(_,{open:a,handleClick:()=>{n(!a)}})]})})),B="QoqWMT7XTnQGGR9Dz8yQ",G="oRVB2r5OyoFGZLnRfzo2",Q="Ceua68dPWnYGAQKpHApG",K=({title:e,uri:a})=>{const[n,t]=(0,u.useState)(""),i=f(a);return(0,u.useEffect)((()=>{!async function(){try{const e=await i();t(e)}catch(e){}}()}),[i]),n&&0!==n.length?(0,F.jsxs)("div",{className:B,children:[(0,F.jsxs)("div",{className:G,children:[(0,F.jsx)(I.W,{size:"small",semanticColor:"textSubdued",className:Q}),(0,F.jsx)(C.D,{variant:"mesto",as:"p",children:A.ag.get("generative-ai.disclaimer")})]}),(0,F.jsx)(C.D,{variant:"canon",as:"h1",semanticColor:"textBase",children:e}),(0,F.jsx)(z,{content:n})]}):null}},57612:(e,a,n)=>{n.d(a,{M4:()=>l,aj:()=>r});var t=n(23055),i=n(7431);const s=e=>e.seoExperiment,r=((0,t.P1)(s,(e=>e?.uri)),(0,t.P1)(s,(e=>e?.[i.p.TRACK]))),l=(0,t.P1)(s,(e=>e?.[i.p.ALBUM]))},99334:(e,a,n)=>{n.d(a,{k:()=>r});var t=n(89518);const i="rTMkDBDp47Eo12ZEQv4U";var s=n(4637);const r=({copyrights:e,courtesyLine:a})=>{const n=(e||[]).map(((e,a)=>{const n=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let i;return i="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,(0,s.jsx)(t.D,{as:"p",variant:"finale",dir:"auto",children:`${i} ${n}`},a)}));return a&&n.unshift((0,s.jsx)(t.D,{as:"p",variant:"finale",dir:"auto",children:a},n.length)),(0,s.jsx)("div",{className:i,children:n})}},12160:(e,a,n)=>{n.d(a,{vI:()=>t});const t=(e,a)=>{const n=a?new URLSearchParams(a.search):void 0;return"1"===n?.get(e)}},95706:(e,a,n)=>{n.d(a,{k:()=>t});let t=function(e){return e.I18nSEO="i18nSEO",e.RTPTrackCredits="rtpv2p2",e.I18nAdditionalPages="i18nap",e.RichPlaylistPages="rpp",e.GenerativeAIContent="genai",e}({})},67515:(e,a,n)=>{n.d(a,{$S:()=>s,F4:()=>r,MP:()=>l});var t=n(86560);const i=({treatment:e,entityId:a,experimentId:n,treatmentVariation:t})=>{if(e&&e[a]){const i=e[a].find((e=>e.experimentId===n));return i?.treatment===t}return!1},s=(e,a)=>i({treatment:e,entityId:a,experimentId:t.Ym.GENERATIVE_AI,treatmentVariation:t.mx.VARIANT}),r=(e,a)=>i({treatment:e,entityId:a,experimentId:t.Ym.TRACK_INTERNAL_LINK_RECOMMENDER,treatmentVariation:t.tO.CANONICAL}),l=(e,a)=>i({treatment:e,entityId:a,experimentId:t.Ym.TRACK_INTERNAL_LINK_RECOMMENDER,treatmentVariation:t.tO.ORGANIC})},86560:(e,a,n)=>{n.d(a,{Ym:()=>t,mx:()=>i,tO:()=>s});let t=function(e){return e.GENERATIVE_AI="generative-ai",e.TRACK_INTERNAL_LINK_RECOMMENDER="track-ilr",e}({}),i=function(e){return e.CONTROL="0",e.VARIANT="1",e}({}),s=function(e){return e.CONTROL="0",e.CANONICAL="1",e.ORGANIC="2",e}({})}}]);
//# sourceMappingURL=xpui-routes-album.js.map