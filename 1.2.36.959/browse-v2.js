"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6266],{24098:(e,t,a)=>{a.d(t,{j:()=>o});var s=a(36575),r=a(66956),n=a(93207),i=a(13274);const o=({name:e,uri:t,images:a,isHero:o,testId:c,description:l,index:d,requestId:u,color:m,variant:p})=>(0,i.jsx)(s.Z,{variant:p,index:d,featureIdentifier:"artist_concerts",headerText:e,uri:t,isPlayable:!1,renderCardImage:()=>(0,i.jsx)(r.M,{isHero:o,images:a,color:m}),renderSubHeaderContent:()=>(0,i.jsx)(n.c,{isHero:o,children:(0,i.jsx)("span",{children:l||""})}),testId:c,requestId:u})},39717:(e,t,a)=>{a.d(t,{I:()=>N});var s=a(79474),r=a(98764),n=a(85786),i=a(58831),o=a(74752),c=a(833),l=a(54844),d=a(25473),u=a(38979),m=a(14056),p=a(67302),g=a(24577);const h="qFPnB4YPwJKBtmDadHJw",x="L1GB_UgpHH55rJC7bJSu",f="lwTOVx_hzbLLqRQNjpWq",b="fBzAZ8QqBJZ7jOCE9rR0",j="Cy4PWlzIF5qb7_LdHssZ";var w=a(13274);const _=({content:e})=>(0,w.jsxs)(r.E,{as:"p",semanticColor:"textBrightAccent",className:j,children:[(0,w.jsx)(n.D,{size:"small"}),e]}),y=({content:e})=>(0,w.jsxs)(r.E,{as:"p",semanticColor:"textBrightAccent",className:j,children:[(0,w.jsx)(i.M,{size:"small"}),e]}),v=({content:e})=>(0,w.jsx)(r.E,{as:"p",className:j,children:e}),I=e=>{switch(e.type){case"SPOTIFY_EXCLUSIVE":return(0,w.jsx)(_,{...e});case"TOP_FANS_EXCLUSIVE":case"TOP_FANS_DISCOUNT":case"LIMITED_EDITION":return(0,w.jsx)(y,{...e});default:return(0,w.jsx)(v,{...e})}},k=({price:e,salePrice:t})=>t?(0,w.jsxs)("div",{children:[(0,w.jsxs)(r.E,{variant:"bodySmall",semanticColor:"textBrightAccent",children:[t," "]}),(0,w.jsx)(r.E,{variant:"bodySmall",style:{textDecoration:"line-through"},children:e})]}):(0,w.jsx)(r.E,{variant:"bodySmall",children:e}),N=({name:e,uri:t,href:a,images:r,index:n,price:i,testId:j,salePrice:_,label:y,artists:v})=>{const N=(0,s.useMemo)((()=>v.items.map((e=>"profile"in e.data?e.data.profile.name:"")).join(m.Ru.getSeparator())),[v.items]),{spec:A,logger:C}=(0,p.r)(u.y,{data:{position:n,uri:t,reason:y?.type||""}}),S=(0,g.g)(r,{desiredSize:300}),R=(0,s.useCallback)((()=>{C.logInteraction(A.cardLinkFactory({position:0}).hitNavigateToExternalUri({destination:a})),window.open(a,"_blank")}),[a,C,A]);return(0,w.jsx)(o.Z,{id:t,"data-testid":j,title:(0,w.jsx)(c.Z,{className:b,children:e}),pretitle:y&&(0,w.jsx)(I,{type:y.type,content:y.content}),media:(0,w.jsx)("div",{className:h,children:S?(0,w.jsx)(l.M,{size:"sm",src:S?.url,alt:e}):(0,w.jsx)("div",{className:x,children:(0,w.jsx)("div",{className:f,children:(0,w.jsx)(d.E,{size:"xxlarge","aria-hidden":!0,"data-testid":"card-image-fallback"})})})}),onClick:R,size:"md",subtitle:(0,w.jsx)(k,{price:i,salePrice:_}),body:N},t)}},27967:(e,t,a)=>{a.r(t),a.d(t,{BrowsePage:()=>Ce});var s=a(79474),r=a(97500),n=a.n(r),i=a(29710),o=a(14056),c=a(19277),l=a(67302),d=a(38417),u=a(64647),m=a(151),p=a(74662),g=a(22215),h=a(87939),x=a(15945),f=a(56813),b=a(88724);var j=a(47131),w=a(82548),_=a(27699),y=a(39517),v=a(94710),I=a(16754),k=a(32371),N=a(52503);const A="VeW1uY4VBMOicrBiaZg0",C="XkaqHstcRovRFsrux1ac",S="EIeLyF5kZi61KstXcsiW",R="jwA8Axf63p61s9L8ouKX",P="pShBHEJpyqHapxGoa1dO",L="X448TFrTgJhLvjGJL8xZ",B="oE6z561GCOowoF4xd9YK",E="I7Ifs1u3PsGytdeBiOxi",O="OAupwE_S9CKJQqHZlykD",T="ppy0oeDpOgQ0VLPmesPi",D="qOq3C2XGuRp_5iY9qN2_";var M=a(13274);let U=function(e){return e[e.DEFAULT=0]="DEFAULT",e[e.SMALL=1]="SMALL",e}({});var F=function(e){return e.ANDROID="https://play.google.com/store/apps/details?id=com.spotify.music",e.IOS="https://apps.apple.com/app/spotify-music/id324684580",e}(F||{});const H=[x.h.de,x.h.fi,x.h.frCA,x.h.hu,x.h.it,x.h.ms,x.h.pl],q=s.memo((function(e){return(0,M.jsx)("span",{children:(0,M.jsx)("h3",{className:B,children:e.children})})})),z=e=>e.split("<br />").map(((e,t)=>(0,M.jsxs)(s.Fragment,{children:[e," ",(0,M.jsx)("br",{})]},t))),W=({locale:e,isAnonymous:t,isEligible:a})=>{let s;!t&&a?s=z(o.Ru.get("wrapped.logged_in_and_eligible.description.2022")):t||a?s=z(o.Ru.get("wrapped.logged_out_or_eligible.description.2022")):t||a||(s=z(o.Ru.get("wrapped.ineligible.description.2022")));const r=(0,v.vh)();function i(e,a){const s={category:"wrapped_hub_2021",action:"click",label:`app_store_${a}`,destination_url:e,os:(0,f.f)()},n=t?(0,p.Z)(s):(0,m.Q)(s);r.send(n)}return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(q,{children:s}),(0,M.jsxs)("div",{className:n()(D),"data-testid":"app-store-icons",children:[(0,M.jsx)(k.default,{to:F.IOS,target:"_blank",onClick:()=>i(F.IOS,"apple"),children:(0,M.jsx)("img",{src:(0,h.b)((0,I.f)(e)),alt:"Apple app store icon",className:P})}),(0,M.jsx)(k.default,{to:F.ANDROID,target:"_blank",onClick:()=>i(F.ANDROID,"android"),children:(0,M.jsx)("img",{src:(0,h.b)((0,I.A)(e)),alt:"Google play store icon",className:n()(P,L)})})]})]})},V=({isAnonymous:e,locale:t})=>{const[a,r]=(0,s.useState)(),n=(0,j.A9)();return(0,s.useEffect)((()=>{var t;e?r(!1):(t=n,t.build().withHost(b.mm).withMethod("GET").withPath("/campaigns/wrapped/consumer/eligible").withEndpointIdentifier("/campaigns/wrapped/").withoutMarket().send()).then((e=>{r(e.body.isEligible)})).catch((()=>r(!1)))}),[e,n,r]),void 0===a?null:(0,M.jsx)(W,{isEligible:a,isAnonymous:e,locale:t})},Z=({title:e=o.Ru.get("wrapped.title.2022"),size:t=U.DEFAULT,isAnonymous:a=!0})=>{const r=(0,s.useRef)(null),i=o.Ru.getLocaleForTranslation(),c=H.includes(i)?T:"";return(0,M.jsxs)("div",{ref:r,className:n()(N.A.container,{[N.A.smallHeader]:t===U.SMALL},A),children:[(0,M.jsx)("div",{"data-testid":"background-color",className:n()(N.A.background,N.A.gradient)}),(0,M.jsx)("div",{className:n()(N.A.background,C)}),(0,M.jsx)("div",{className:N.A.background}),(0,M.jsx)(_.h,{children:(0,M.jsx)(y.X,{text:e})}),(0,M.jsxs)("div",{className:n()(S),children:[(0,M.jsxs)("div",{className:n()(N.A.headerText,R),children:[(0,M.jsx)("h1",{className:n()(O,c),children:z(e)}),(0,M.jsx)(V,{locale:i,isAnonymous:a})]}),(0,M.jsx)("div",{className:n()(E)})]})]})};var J=a(82089),K=a(7125),G=a(16579),Y=a(15891),Q=a(26360),X=a(97177),$=a(83861),ee=a(3775);a(16990);const te=new ee.l("browsePage","query","177a4ae12a90e35d335f060216ce5df7864a228c6ca262bd5ed90b37c2419dd9",null);var ae=a(59841),se=a(98764),re=a(79130),ne=a(29117),ie=a(6950),oe=a(46545);const ce="Liif5fNYkY903HPAQd1N",le="OjUWe9nnXRVfiwFlk0WM",de="N_8iI7NKHP0iG2jp3g0R",ue="xkCWPUwdmCt8oQvZqtyL",me=({images:e,color:t=ae.gray7,title:a,subtitle:s})=>{const r=0===e.length?ne.K.SMALL:ne.K.DEFAULT;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(ne.z,{backgroundImages:e,backgroundColor:t,size:r,children:[(0,M.jsx)(_.h,{children:a?(0,M.jsx)(y.X,{text:a}):null}),(0,M.jsxs)(ie.Y,{children:[a?(0,M.jsx)(oe.mm,{children:a}):null,s&&(0,M.jsx)(se.E,{variant:"bodySmall",className:ue,children:s})]})]}),(0,M.jsx)(re.f,{color:t})]})};var pe=a(87240),ge=a(45640),he=a(67447),xe=a(74739),fe=a(83856);function be(e){const t=(0,fe.o_)(e,{parseUnknown:!0}),[a,s]=t?.args??[];if(s&&"section"===a)return`/genre/section${s}`}var je=a(3498),we=a(19448),_e=a(27500);const ye={chips:"FvuGb_9dchkiN5fJY0SI",chip:"KxlMRH95uJIcfJiNcZgg"};function ve({section:e}){return(0,M.jsx)("div",{className:ye.chips,children:e.sectionItems.items.map((e=>function(e){return"BrowseSectionContainerWrapper"===e.content.__typename&&"BrowseSectionContainer"===e.content.data.__typename&&e.content.data.data?.cardRepresentation?.title?.transformedLabel?(0,M.jsx)(k.default,{to:(0,xe.K)(e.uri)||"",children:(0,M.jsxs)(je.v,{className:ye.chip,children:[(0,M.jsx)(we.Z,{variant:"mestoBold",children:e.content.data.data.cardRepresentation.title.transformedLabel}),(0,M.jsx)(_e.V,{size:"xsmall"})]},e.uri)}):null}(e)))})}var Ie=a(14026);const ke=({section:e,position:t,showAll:a})=>{const r=(0,s.useMemo)((()=>e.sectionItems.items.map(((e,t)=>(0,Ie.W)(e,t))).filter(pe.P)),[e.sectionItems.items]);switch(e.data?.__typename){case"BrowseGenericSectionData":return(0,M.jsx)(he.p,{title:e.data?.title?.transformedLabel??"",tagline:e.data?.subtitle?.transformedLabel??"",total:e.sectionItems.totalCount,seeAllUri:be(e.uri),index:t,id:e.uri,showAll:a,children:r});case"BrowseGridSectionData":return(0,M.jsx)(he.p,{title:e.data?.title?.transformedLabel??"",tagline:e.data?.subtitle?.transformedLabel??"",total:e.sectionItems.totalCount,index:t,id:e.uri,seeAllUri:e.targetLocation?(0,xe.K)(e.targetLocation):void 0,forceTitleClickNavigation:Boolean(e.targetLocation),showAll:!0,children:r});case"BrowseRelatedSectionData":return(0,M.jsx)(ve,{section:e});case"BrowseSingleItemSectionData":case"BrowseUnsupportedSectionData":case void 0:return null;default:return(0,ge.k)(e.data),null}};var Ne=a(92043);const Ae=({uri:e,fallback:t})=>{const{section:a,error:s,fetchNextItems:r}=(0,Ne.D)(e),n=a?.data?.title?.transformedLabel,i=a?.data?.subtitle?.transformedLabel,o=a?.sectionItems.items??[];return 0===o.length||null!==s?t():(0,M.jsx)(c._,{onReachBottom:r,children:(0,M.jsx)(he.p,{title:n??"",tagline:i??"",index:0,id:e,showAll:!0,children:o.map(((e,t)=>(0,Ie.W)(e,t)))})})},Ce=({uri:e,id:t})=>{const{header:a,sections:r,error:m,fetchNextSections:p}=(e=>{const{request:t}=(0,s.useContext)(Y.j),{data:a,isLoading:r,error:n,fetchNextPage:i}=(0,G.q)({queryKey:["browse","page",e,{numberOfSections:10,numberOfItems:10}],queryFn:({pageParam:a})=>(0,Q.c)(t,te,function(e,t,a,s){return{pagePagination:{offset:t,limit:10},sectionPagination:{offset:0,limit:10},uri:e}}(e,a)),initialPageParam:0,gcTime:X.s8,staleTime:X.f8,getNextPageParam:e=>{if("BrowseSectionContainer"===e?.data?.browse?.__typename)return e.data.browse.sections?.pagingInfo.nextOffset??void 0}}),o=(0,s.useCallback)((async()=>{await i()}),[i]),c=(0,s.useMemo)((()=>a?.pages?a.pages.reduce(((e,t)=>"BrowseSectionContainer"===t?.data?.browse?.__typename&&t.data.browse.sections?.items?[...e,...t.data.browse.sections.items]:e),[]):[]),[a?.pages]);return{header:(0,s.useMemo)((()=>{if(a?.pages)for(const e of a.pages)if("BrowseSectionContainer"===e?.data?.browse?.__typename)return{title:e.data.browse.header?.title?.transformedLabel??void 0,color:e.data.browse.header?.color?.hex??void 0,images:e.data.browse.header?.backgroundImage?.sources.map($.RS)??[],subtitle:e.data.browse.header?.subtitle?.transformedLabel??void 0}}),[a?.pages]),sections:c,error:n,loading:r,fetchNextSections:o}})(e),{spec:h,UBIFragment:x}=(0,l.r)(i.M,{data:{identifier:e,uri:e}}),f=(0,s.useMemo)((()=>h.shelvesFactory()),[h]),b=(0,K.V)(),j=(_=t,(0,g.NC)(w.t1)&&"0JQ5DAwD41iRZZRVB8exON"===_);var _;if(0===r.length||null!==m)return(0,M.jsx)(J.A,{hasError:null!==m,errorMessage:o.Ru.get("error.generic")});const y=a?.title;return(0,M.jsxs)(x,{spec:h,children:[(0,M.jsx)(u.Q,{children:a?.title??o.Ru.get("browse")}),y?(0,M.jsx)("div",{className:ce,children:j?(0,M.jsx)(Z,{isAnonymous:b}):(0,M.jsx)(me,{title:a.title,subtitle:a.subtitle,color:a.color,images:a.images})}):null,(0,M.jsx)(x,{spec:f,children:(0,M.jsxs)("div",{className:de,children:[y&&(0,M.jsx)(d.K,{backgroundColor:a.color}),(0,M.jsx)("div",{className:n()("contentSpacing",le),children:1===r.length?(0,M.jsx)(Ae,{uri:r[0].uri,fallback:()=>(0,M.jsx)(ke,{section:r[0],position:0,showAll:!0})}):(0,M.jsx)(c._,{onReachBottom:p,children:r.map(((e,t)=>(0,M.jsx)(ke,{section:e,position:t,showAll:!1},e.uri)))})})]})})]})}},93254:(e,t,a)=>{a.r(t),a.d(t,{BrowseSection:()=>b});var s=a(79474),r=a(97500),n=a.n(r),i=a(98196),o=a(29710),c=a(14056),l=a(19277),d=a(67302),u=a(64647),m=a(82089),p=a(67447),g=a(92043),h=a(14026);const x="aPpfDTG5LqJdHqdwKljP";var f=a(13274);const b=({uri:e})=>{const{section:t,error:a,fetchNextItems:r}=(0,g.D)(e),{spec:b,UBIFragment:j}=(0,d.r)(o.M,{data:{identifier:e,uri:e}}),w=(0,s.useMemo)((()=>b.shelvesFactory()),[b]),_=t?.data?.title?.transformedLabel,y=t?.data?.subtitle?.transformedLabel,v=t?.sectionItems.items??[];return 0===v.length||null!==a?(0,f.jsx)(m.A,{hasError:null!==a,errorMessage:c.Ru.get("error.generic")}):(0,f.jsxs)(j,{spec:b,children:[(0,f.jsx)(u.Q,{children:_??c.Ru.get("browse")}),(0,f.jsx)(j,{spec:w,children:(0,f.jsx)("div",{className:n()("contentSpacing",x),children:(0,f.jsx)(l._,{onReachBottom:r,children:(0,f.jsx)(p.p,{title:_??"",tagline:y??"",index:0,id:e,rowGap:i.lT,showAll:!0,fullPage:!0,children:v.map(((e,t)=>(0,h.W)(e,t)))})})})})]})}},72998:(e,t,a)=>{a.d(t,{r:()=>f});var s=a(79474),r=a(59841),n=a(98764),i=a(32796),o=a(83856),c=a(72423),l=a(67302),d=a(32371);const u="CqCtb3wr4SK8AiZwxeH0",m="Vn9yz8P5MjIvDT8c0U6w",p="MtV402NmdUF5mceSD0Dy",g="WDC2Yzs811n7JCYtYQzc";var h=a(13274);const x=r.gray30,f=({title:e,imageUrl:t,viewId:a,pageId:r,color:f=x,href:b,index:j,ubiId:w})=>{const _=a&&`/genre/${a}`||b||"#",{spec:y,logger:v}=(0,l.r)(i.b,{data:{position:j,identifier:w}}),I=(0,s.useCallback)((()=>{const e=(0,o.o_)(_)?.toURI();e&&v.logInteraction(y.hitUiNavigate({destination:e}))}),[v,y,_]);return(0,h.jsx)(d.Link,{to:_,pageId:r,className:u,onClick:I,children:(0,h.jsxs)("div",{className:m,style:{backgroundColor:f},children:[t?(0,h.jsx)(c._,{loading:"lazy",src:t,className:g}):null,(0,h.jsx)(n.E,{variant:"titleSmall",className:p,children:e})]})})}},14026:(e,t,a)=>{a.d(t,{W:()=>D});var s=a(45640),r=a(83856),n=a(14056),i=a(88080),o=a(47376),c=a(24098),l=a(11620),d=a(79474),u=a(95231),m=a(32796),p=a(52792),g=a(67302),h=a(32371),x=a(36575),f=a(66956);const b="wuuw429FZl5mL_INxPTs";var j=a(13274);const w=({title:e,uri:t,images:a,href:s,index:n,ubiId:i,variant:o})=>{const{spec:c,logger:l}=(0,g.r)(m.b,{data:{position:n,identifier:i}}),w=(0,d.useCallback)((()=>{const e=(0,r.o_)(s)?.toURI();e&&l.logInteraction(c.hitUiNavigate({destination:e}))}),[l,c,s]),_=(0,p.t)(c);return(0,j.jsx)(h.Link,{to:s,onClick:w,ref:_,children:(0,j.jsx)(x.Z,{variant:o,index:n,onClick:w,headerText:e,featureIdentifier:"unknown",isPlayable:!1,delegateNavigation:!0,uri:t,className:b,renderCardImage:()=>(0,j.jsx)(f.M,{images:a,FallbackComponent:e=>(0,j.jsx)(u.e,{size:"xxlarge",...e})})})})};var _=a(12871),y=a(39717),v=a(99426),I=a(30428),k=a(72412),N=a(84610),A=a(86357),C=a(35828),S=a(80734),R=a(26472),P=a(70968),L=a(81660),B=a(49990),E=a(83861),O=a(74739),T=a(72998);function D(e,t){switch(e.content.__typename){case"AlbumResponseWrapper":case"ArtistResponseWrapper":case"EpisodeOrChapterResponseWrapper":case"PlaylistResponseWrapper":case"PodcastOrAudiobookResponseWrapper":case"TrackResponseWrapper":case"UserResponseWrapper":case"BrowseXlinkResponseWrapper":case"BrowseSectionContainerWrapper":case"MerchResponseWrapper":case"ArtistConcertsResponseWrapper":return function(e,t,a){if("GenericError"===e.__typename||"NotFound"===e.__typename||"RestrictedContent"===e.__typename)return null;const d=(0,E.f0)(e);switch(e.__typename){case"Album":return(0,j.jsx)(i.a,{uri:e.uri,name:e.name,images:d,sharingInfo:null,artists:(0,S.K)(e.artists),index:t},e.uri);case"Artist":return(0,j.jsx)(o.a,{uri:e.uri,name:e.profile.name,images:d,index:t},e.uri);case"Audiobook":return(0,j.jsx)(l.M,{uri:e.uri,signifierText:e.accessInfo?.signifier?.text??void 0,name:e.name,images:d,authorName:e.authors?.map((e=>e?.name)).join(n.Ru.getSeparator())??"",index:t},e.uri);case"Chapter":return(0,j.jsx)(_.U,{uri:e.uri,name:e.name,images:d,showImages:d,description:"",durationMilliseconds:e.duration.totalMilliseconds,releaseDate:"Audiobook"===e.audiobookV2.data.__typename?(0,P.JO)(e.audiobookV2.data.publishDate):null,resume_point:{resume_position_ms:e.playedState.playPositionMilliseconds,fully_played:e.playedState.state===C._w.Completed},isExplicit:(0,R.V)(e.contentRating),is19PlusOnly:(0,R.r)(e.contentRating),sharingInfo:null,index:t},e.uri);case"Episode":return(0,j.jsx)(_.U,{uri:e.uri,name:e.name,images:d,showImages:(0,E.o8)(e),description:e.description??"",durationMilliseconds:e.duration.totalMilliseconds,releaseDate:(0,P.JO)(e.releaseDate),resume_point:{resume_position_ms:e.playedState.playPositionMilliseconds,fully_played:e.playedState.state===C._w.Completed},isExplicit:(0,R.V)(e.contentRating),is19PlusOnly:(0,R.r)(e.contentRating),sharingInfo:null,index:t},e.uri);case"Playlist":{let a="";return"User"===e.ownerV2.data.__typename&&(a=e.ownerV2.data.name),(0,j.jsx)(v.B,{uri:e.uri,name:e.name,images:d,description:e.description,authorName:a,index:t,isPlayable:!(0,A.p)(e?.attributes)},e.uri)}case"Podcast":return(0,j.jsx)(k.o,{uri:e.uri,name:e.name,images:d,publisher:e.publisher?.name??"",sharingInfo:null,mediaType:(0,L.w)(e.mediaType),index:t},e.uri);case"Track":return(0,j.jsx)(N.w,{uri:e.uri,name:e.name,images:d,artists:(0,B.S)(e.artists),album:e.albumOfTrack?{uri:e.albumOfTrack.uri,name:e.albumOfTrack.name}:null,isExplicit:(0,R.V)(e.contentRating),is19PlusOnly:(0,R.r)(e.contentRating),sharingInfo:null,index:t},e.uri);case"User":return(0,j.jsx)(I.a,{uri:e.uri,name:e.name,images:d,index:t},e.uri);case"BrowseSectionContainer":return(0,j.jsx)(T.r,{title:e.data?.cardRepresentation?.title?.transformedLabel??"",pageId:"search",href:(0,O.K)(a),color:e.data?.cardRepresentation?.backgroundColor?.hex,imageUrl:d[0]?.url,ubiId:a,index:t},a);case"BrowseClientFeature":return(0,j.jsx)(w,{uri:a,title:e.title?.transformedLabel??"",href:`/${(0,r.o_)(e?.featureUri,{parseUnknown:!0})?.toURLPath()}`,images:e.iconOverlay?.sources??[],ubiId:a,index:t},a);case"Merch":return(0,j.jsx)(y.I,{name:e.name,uri:e.uri,href:e.url||e.uri,index:t,images:d,price:e.price||"",artists:e.artists,salePrice:e.salePrice,label:e.label},a);case"ArtistConcerts":{const s=e.mainArtist.data;return"Artist"!==s.__typename?null:(0,j.jsx)(c.j,{uri:a,name:s.profile.name,images:d,description:n.Ru.get("concerts.count",e.concerts.totalCount),index:t},a)}case"BrowseSpacesHub":case"BrowseExternalHref":return null;default:return(0,s.k)(e),null}}(e.content.data,t,e.uri);case"UnknownType":case"NoContent":case"ConcertResponseWrapper":break;default:(0,s.k)(e.content)}return null}},74739:(e,t,a)=>{a.d(t,{K:()=>r});var s=a(83856);function r(e){const t=(0,s.o_)(e,{parseUnknown:!0}),[a,r]=t?.args??[];if(r&&"page"===a)return`/genre/${r}`}},97177:(e,t,a)=>{a.d(t,{PG:()=>r,f8:()=>i,oC:()=>s,s8:()=>n});const s=o(120),r=o(30),n=o(60),i=o(15);function o(e){return 60*e*1e3}},83861:(e,t,a)=>{a.d(t,{RS:()=>r,f0:()=>i,o8:()=>n});var s=a(45640);function r(e){return{url:e.url,width:e.width,height:e.height}}function n(e){if("Episode"===e.__typename){const t=e.podcastV2.data;return"Podcast"!==t.__typename?[]:t.coverArt?.sources.map(r)??[]}return[]}function i(e){switch(e.__typename){case"Artist":return e.visuals.avatarImage?.sources.map(r)??[];case"Album":case"Audiobook":case"Podcast":case"Episode":case"Chapter":return e.coverArt?.sources.map(r)??[];case"Track":return e.albumOfTrack?.coverArt?.sources.map(r)??[];case"Playlist":return e.images.items[0]?.sources.map(r)??[];case"User":return e.avatar?.sources.map(r)??[];case"Merch":return e.image?.sources.map(r)??[];case"ArtistConcerts":{const t=e.mainArtist.data;return"Artist"!==t.__typename?[]:t.visuals.avatarImage?.sources.map(r)??[]}case"BrowseSectionContainer":return e.data?.cardRepresentation?.artwork?.sources.map(r)??[];case"BrowseClientFeature":return e.artwork?.sources.map(r)??e.iconOverlay?.sources.map(r)??[];case"GenericError":case"NotFound":case"RestrictedContent":case"BrowseSpacesHub":case"BrowseExternalHref":return[];default:return(0,s.k)(e),[]}}},92043:(e,t,a)=>{a.d(t,{D:()=>u});a(14269),a(90184);var s=a(79474),r=a(16579),n=a(15891),i=a(26360),o=a(45640),c=a(97177),l=a(3775);a(16990);const d=new l.l("browseSection","query","8cb45a0fea4341b810e6f16ed2832c7ef9d3099aaf0034ee2a0ce49afbe42748",null),u=e=>{const{request:t}=(0,s.useContext)(n.j),{data:a,isLoading:l,error:u,fetchNextPage:m}=(0,r.q)({queryKey:["browse","section",e,{numberOfItems:20}],queryFn:({pageParam:a})=>(0,i.c)(t,d,function(e,t,a){return{pagination:{offset:t,limit:a},uri:e}}(e,a,20)),gcTime:c.s8,staleTime:c.f8,initialPageParam:0,getNextPageParam:e=>{if("BrowseSection"===e?.data?.browseSection?.__typename){return e.data.browseSection.sectionItems.pagingInfo.nextOffset&&e.data.browseSection.sectionItems.pagingInfo.nextOffset>0?e.data.browseSection.sectionItems.pagingInfo.nextOffset:void 0}}}),p=(0,s.useCallback)((async()=>{await m()}),[m]);return{section:(0,s.useMemo)((()=>a?.pages?a.pages.reduce(((e,t)=>{if(!t?.data?.browseSection)return e;switch(t.data.browseSection.__typename){case"BrowseSection":return null===e?function(e){if("object"!=typeof e||null===e)return e;if(window.structuredClone)return window.structuredClone(e);return JSON.parse(JSON.stringify(e))}(t.data.browseSection):(e.sectionItems.items=[...e.sectionItems.items,...t.data.browseSection.sectionItems.items],e);case"GenericError":case"NotFound":return e;default:return(0,o.k)(t.data.browseSection),e}}),null):null),[a?.pages]),error:u,loading:l,fetchNextItems:p}}},16754:(e,t,a)=>{a.d(t,{A:()=>i,f:()=>n});const s=["ar","az","bg","cs_CZ","da","de","ee","el","en","es","es_mx","fi","fp","fr","fr_ca","he","hu","id","it","ja","ko","lt","lv","ms","mt","nb","nl","pl","pt","pt_br","ro","ru","sk","sl","sv","th_TH","tr","vi_VN","zh_HANS","zh_HANT"],r=["af","ar","am","az","be","bg","bn","bs","ca","cr","cs_CZ","da","de","el","en","es","es_419","et","eu","fa","fi","fp","fr","fr_ca","gl","gu","he","hi","hr","hu","hy","id","is","it","ja","ka","kk","km","kn","ko","ky","lo","lt","lv","mk","ml","mn","mr","ms","my","nb","ne","nl","pa","pl","pt","pt_br","ro","ru","si","sk","sl","sq","sr","sv","sw","ta","te","th_TH","tr","ua","ur","uz","vi_VN","zh_HANS","zh_HANT","zh_hk","zu"],n=e=>`images/download-badges/apple/${s.includes(e)?e:"int"}.svg`,i=e=>`images/download-badges/google/${r.includes(e)?e:"int"}.svg`}}]);
//# sourceMappingURL=browse-v2.js.map