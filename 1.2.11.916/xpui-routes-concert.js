"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7288],{48532:(e,t,s)=>{s.d(t,{Z:()=>v});var a=s(59496),r=s(56162),n=s(3802),i=s(63120),o=s(23521),c=s(75252),l=s(97009),d=s(27532);const h="MUiWCNTfb6FcSwVPvQ1V",m="UAk3bMhekwJTV_wIyfsT",g="X9w6LPfKsZHMCs38sVIQ",u="NXn5KjeUOjLGlAfS1Gao",p="N0wgFMDDvCiby4QB5kLJ",x="nloNe2BLRHjz9dxlwfLU",j="JzXND83mXvcEuntCNR34",y="GR08E4L_rOGljyQQX30R";var f=s(4637);const v=(0,a.memo)((e=>{const{concert:t,isVirtual:s,onClick:a}=e,{venue:v,location:w}=t,N=t.artists[0],k=(0,l.CH)(t.startDate.localDate);return(0,f.jsxs)(i.Link,{to:`/concert/${t.id}`,className:h,onClick:a,children:[N.imageUri&&(0,f.jsx)(o.Z,{children:(0,f.jsx)("div",{role:"img",className:y,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(6, 6, 6, 0.6) 60%, rgba(0, 0, 0, 0.7) 100%), url(${N.imageUri})`}})}),(0,f.jsx)("time",{className:m,dateTime:t.startDate.localDate,children:(0,f.jsx)(r.D,{as:"h5",variant:"mestoBold",children:(0,l.jx)(k)})}),(0,f.jsxs)("div",{className:g,dir:"auto",children:[(0,f.jsxs)(r.D,{as:"h2",className:j,variant:"mesto",children:[(0,c.FO)(k)," • ",(0,l.hK)(k)]}),(0,f.jsx)(r.D,{as:"h2",variant:"cello",weight:"bold",className:u,children:(0,d.ij)(t)}),(0,f.jsx)("div",{className:p,children:(0,f.jsx)(r.D,{as:"h2",className:x,variant:"mesto","data-testid":"location-name",children:s?v:[v,w].join(n.ag.getSeparator())})})]})]})}))},64554:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Re});var a=s(9102),r=s(61740),n=s(89605),i=s(3802),o=s(23627),c=s(25899),l=s(82710);const d=e=>{const[t,{username:s,concertUri:a}]=e.queryKey;return(async(e,t)=>{const s=await(0,l.checkConcertInCollection)(c.b.getInstance(),e,t);return s.body?.found[0]})(s,a)};var h=s(82108),m=s(59496),g=s(56162),u=s(67526),p=s(10198),x=s(22521),j=s(91703),y=s(41226),f=s(16743),v=s(73997),w=s(35725),N=s(96170),k=s(84875),b=s.n(k),C=s(63082),_=s(37433),D=s(8138),I=s(36844),S=s(35394),P=s(1996),U=s(98340),A=s(45118),L=s(91834),T=s(40778),K=s(4637);const F=m.memo((function({uri:e}){const{spec:t}=(0,A.T)(e);return(0,K.jsx)(U.ZP,{value:"concert",children:(0,K.jsxs)(P.v,{children:[(0,K.jsxs)(L.q,{children:[(0,K.jsx)(T.Jx,{spec:t,uri:e,displayText:i.ag.get("context-menu.copy-concert-link")}),(0,K.jsx)(T.W2,{spec:t,uri:e})]}),(0,K.jsx)(T.h$,{spec:t,uri:e})]})})}));var M=s(63120),E=s(31354),$=s(12243),V=s(46651);const H="Qy5TW6J4tm8_aomy4Shi",z=(0,m.memo)((e=>{const t=(0,V.F)(e.followers),{spec:s,logger:a}=(0,N.fU)(E.w,{});return(0,K.jsxs)("div",{className:H,onClick:()=>{a.logInteraction(s.hitNoAction())},children:[(0,K.jsx)($.D,{followers:e.followers,spec:s}),(0,K.jsx)(g.D,{as:"p",variant:"mesto",children:t})]})}));var W=s(41836),O=s(3289),Q=s(59200),R=s(52210),Y=s(95663),Z=s(51783),q=s(66721);const J="rvw6x7R5AiAT48dSkFl9",X="JRuVlk6wpKk6ok7zuW6l",G="YpfopxY2udneDY34uzRN",B="KI_0F1jtTR5tWgl7gZ1E",ee="gKtc3TdowDTXBaVESi1D",te="V8TIr8yJq4tYZfPEzm12",se="VvL91cIRcCi1hJh0K845",ae="vKcnOO1GNYoLKHg4T4lK",re="LdW0YNvo_Y77hgqhL4zY",ne="cTkykhjfHxkEGKbxSxXw",ie="XgeTnLs82tTjczDR6oKn",oe="P3fE7wn6Tqnibn3gljKV",ce="A8LG_5Dvp7IiXDtdR571",le="OVY7plwgy_AKAzhgoCAF",de="O0PSSw8ttrMn9lzq_L16",he="D_ffrfn62aOgZKOFfZVr",me="OH4mOZCual2ejIodzIkL",ge="se_ixDV6hBf7lve861oU",ue="YDAJHPP5lDmg71SdvJZC",pe="lKQxSRsi8KcoYx5D7mjh",xe="LUMel_X4gQK0J1i6X0sC",je="s1jEHgfOLzeY3WugmaoT",ye=(0,m.memo)((e=>{const{concertUri:t,position:s,ticketer:a,spec:r}=e,n=(0,N.$P)(),i=(0,Y.o)(),o=(0,m.useMemo)((()=>r.ticketProviderCellFactory({identifier:a.partnerDisplayName,position:s,uri:a.url})),[r,a.partnerDisplayName,s,a.url]),c=(0,N.Wi)(o);return(0,K.jsxs)(M.default,{to:a.url,className:ie,onClick:()=>{const e=o.hitNavigateToExternalUri({destination:a.url});n.logInteraction(e),i({targetUri:t,intent:"find-concert",type:"click"})},ref:c,children:[(0,K.jsx)("div",{className:oe,children:(0,K.jsx)(q.Ee,{loading:"eager",srcSet:a.imageURL,src:a.imageURL,height:"100%",width:"100%",children:(0,K.jsx)(R.i,{className:ce,iconSize:24})})}),(0,K.jsxs)("div",{className:de,children:[(0,K.jsx)(g.D.span,{children:a.partnerDisplayName}),(0,K.jsx)(Z.h,{className:le,iconSize:24})]})]},a.url)}));var fe=s(97009);const ve=(0,m.memo)((e=>{const{concert:t,onClick:s}=e,{category:a,venue:r,location:n,lat:i,lon:o}=t;if("ONLINE"===a)return(0,K.jsx)(g.D,{as:"h3",variant:"canon",children:r});const c=new URL("https://maps.google.com/");return c.searchParams.set("q",`${r},${n}`),c.searchParams.set("ll",`${i},${o}`),(0,K.jsx)(M.default,{to:c.href,target:"_blank",onClick:()=>s(c.href),children:(0,K.jsxs)(g.D,{as:"h3",variant:"canon",children:[r,", ",n]})})})),we=(0,m.memo)((e=>{const{concert:t,ticketAvailabilityTranslated:s,entitySpec:a,isConcertSaved:r,isAnonymous:n,onInterestedClick:o,followers:d}=e,h=(0,m.useMemo)((()=>a.ticketProviderListFactory()),[a]),u=(0,N.$P)(),p=(0,N.Wi)(h),x=(0,m.useMemo)((()=>a.interestedButtonFactory()),[a]),j=(0,N.Wi)(x),y=(0,fe.CH)(t.date),f=`spotify:concert:${t.id}`,[v,w]=(0,m.useState)(r),k=(0,I.W6)(W.tp);if(0===t.ticketers.length)return null;if((0,fe.OF)(t.date))return(0,K.jsxs)("div",{className:re,children:[(0,K.jsx)(g.D,{as:"h3",variant:"canon",children:i.ag.get("concert_event_ended")}),(0,K.jsx)(g.D,{variant:"ballad",children:(0,K.jsx)(M.default,{to:"spotify:concerts",children:i.ag.get("concert_past_message")})})]});return(0,K.jsxs)("div",{className:re,ref:p,children:[(0,K.jsx)(g.D,{as:"h3",variant:"canon",children:(0,K.jsx)(ve,{concert:t,onClick:e=>{const t=a.venueMapLinkFactory().hitNavigateToExternalUri({destination:e});u.logInteraction(t)}})}),(0,K.jsxs)(g.D,{as:"h3",variant:"mesto",className:ue,children:[(0,fe.xE)(y)," • ",(0,fe.hK)(y)]}),(0,K.jsx)(g.D,{as:"h3",className:ae,variant:"mesto",children:(P=t.ticketers,0===P.length?null:1===P.length?i.ag.get("concert.header.tickets_from_1",P[0].partnerDisplayName):2===P.length?i.ag.get("concert.header.tickets_from_2",P[0].partnerDisplayName,P[1].partnerDisplayName):3===P.length?i.ag.get("concert.header.tickets_from_3",P[0].partnerDisplayName,P[1].partnerDisplayName,P[2].partnerDisplayName):i.ag.get("concert.header.tickets_from_4",P[0].partnerDisplayName,P[1].partnerDisplayName,P[2].partnerDisplayName,P.length-3))}),d&&d.length>0&&(0,K.jsx)(N.Nh,{spec:a,children:(0,K.jsx)(z,{followers:d})}),s&&(0,K.jsx)(g.D,{as:"h3",className:ae,variant:"mesto",children:s}),(0,K.jsxs)("div",{className:X,children:[!n&&k&&(0,K.jsx)(O._,{label:i.ag.get("concerts_interested_tooltip"),placement:"top-end",children:(0,K.jsx)(C.P,{buttonSize:"sm",iconLeading:v?_.N:D.S,className:b()(xe,{[J]:v}),onClick:()=>{const e=x.hitUiElementToggle();u.logInteraction(e),v?((0,l.unsaveConcert)(c.b.getInstance(),t.id),o(!0,i.ag.get("concerts_removed-from-your-saved-events")),u.logInteraction(x.hitRemoveInterest())):((0,l.saveConcert)(c.b.getInstance(),t.id),o(!0,i.ag.get("concerts_added-to-your-saved-events")),u.logInteraction(x.hitAddInterest())),w(!v)},ref:j,children:i.ag.get("concerts_interested")})}),(0,K.jsx)(Q.yj,{menu:(0,K.jsx)(F,{uri:f}),onShow:()=>{const e=a.contextMenuButtonFactory().hitUiReveal();u.logInteraction(e)},children:(0,K.jsx)(S.z,{size:32})})]}),(0,K.jsx)(g.D.h3,{variant:"canon",children:i.ag.get("concert.header.available_tickets_from")}),(0,K.jsx)("div",{className:ne,children:t.ticketers.map(((e,t)=>(0,K.jsx)(ye,{concertUri:f,ticketer:e,position:t,spec:h},t)))})]});var P}));var Ne=s(28604),ke=s(5488),be=s(43438),Ce=s(23521);const _e="bnxKFmECExdcmyBXx9f_",De="UrPgHWUndGwAWPfONuwd",Ie="pF2W693VDIpPdVTVCsDg",Se="YGVuy3Qzaam0CJPc_s4K",Pe="r5Kj2xQVLHK0hf_J00US",Ue="qCN2f5PHVrzAPLvQ0lNc",Ae=(0,m.memo)((e=>{const{entity:t,headliner:s,onClick:a}=e,{imageUri:r,name:n,uri:o}=t;return(0,K.jsxs)(M.Link,{to:o,className:_e,onClick:a,children:[r?(0,K.jsx)(Ce.Z,{children:(0,K.jsx)("div",{"data-testid":"image-container",className:Ue,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50.52%, rgba(18, 18, 18, 0.7) 100%), url(${r})`}})}):null,(0,K.jsxs)("div",{className:De,children:[s&&(0,K.jsx)("div",{className:Se,children:(0,K.jsx)(g.D,{as:"h4",variant:"mestoBold",className:Pe,weight:"bold",children:i.ag.get("concert.label.headliner")})}),(0,K.jsx)(g.D,{as:"h2",variant:"alto",className:Ie,children:n})]})]})})),Le=Ae,Te=(0,m.memo)((e=>{const{artist:t,albums:s,position:a,lineupArtistsSpec:r}=e,n=(0,m.useMemo)((()=>r.artistRowFactory({position:a,uri:t.uri})),[r,a,t.uri]),o=(0,N.$P)(),c=0===a,l=`${(0,be.GJ)(t.id)}:discography`;return(0,K.jsx)(U.ZP,{value:"headered-grid",index:a,children:(0,K.jsx)(N.Nh,{spec:n||null,children:(0,K.jsx)(ke.P,{title:c?i.ag.get("concert_lineup"):"",total:s.length+2,seeAllUri:l,seeAllLabel:i.ag.get("artist-page.show-discography"),onClickShelfSeeAll:()=>{const e=n.seeDiscographyLinkFactory().hitUiNavigate({destination:l});o.logInteraction(e)},children:[(0,K.jsx)(Le,{entity:t,headliner:c,onClick:()=>{const e=n.artistCardFactory().hitUiNavigate({destination:t.uri});o.logInteraction(e)}},`ConcertArtistCard-${t.id}`),null,...s.map(((e,s)=>(0,K.jsx)(Ne.r,{index:s,artists:[{uri:t.uri,name:t.name}],images:[{url:e.imageUri,width:100,height:100}],name:e.name,uri:e.uri,sharingInfo:null},e.uri)))]})})},t.uri)})),Ke=(0,m.memo)((e=>{const{albums:t,artists:s,entitySpec:a}=e,r=(0,m.useMemo)((()=>a.lineupArtistsFactory()),[a]),n=(0,N.Wi)(r),i=(0,m.useMemo)((()=>{const e={};return t.forEach((t=>{const s=t.artistName;e[s]?e[s].push(t):e[s]=[t]})),e}),[t]);return(0,K.jsx)("div",{className:he,ref:n,"data-testid":"concert-lineup",children:s.map(((e,t)=>(0,K.jsx)(Te,{artist:e,albums:i[e.name]||[],position:t,lineupArtistsSpec:r},e.uri)))})})),Fe="y4xsX4QR_wfM40vOhsQ4",Me="TPdGbM0PhSqxmhkxP9n2",Ee="y33j8HV43EGq3BPkZrLA",$e=(0,m.memo)((e=>(0,K.jsxs)(M.Link,{to:"spotify:concerts",className:Fe,onClick:e.onClick,children:[(0,K.jsx)(Ce.Z,{children:(0,K.jsx)("div",{className:Ee,style:{backgroundImage:"linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50.52%, rgba(18, 18, 18, 0.7) 100%), url(https://concerts.spotifycdn.com/ConcertHubCard.png)"}})}),(0,K.jsx)("div",{className:Me,children:(0,K.jsx)(g.D,{as:"h2",variant:"canon",children:i.ag.get("concerts_browse_more")})})]})));var Ve=s(48532);const He=(0,m.memo)((e=>{const t=(0,m.useMemo)((()=>e.entitySpec.recommendedConcertsFactory()),[e.entitySpec]),s=(0,N.$P)(),a=(0,N.Wi)(t),r=e.upcomingConcerts;if(!r||r.length<1)return null;const n=r.map(((e,a)=>{const r=`spotify:concert:${e.concert.id}`;return(0,K.jsx)(Ve.Z,{concert:e.concert,onClick:()=>{const e=t.concertCardFactory({position:a,uri:r}).hitUiNavigate({destination:r});s.logInteraction(e)}},e.concert.id)}));return(0,K.jsx)("div",{className:ge,ref:a,"data-testid":"concert-recommendations",children:(0,K.jsx)(U.ZP,{value:"headered-grid",children:(0,K.jsxs)(ke.P,{title:i.ag.get("concerts_more_events"),total:r.length+1,className:pe,showSeeAll:!0,seeAllUri:"spotify:concerts",seeAllLabel:i.ag.get("view.see-all"),children:[(0,K.jsx)($e,{onClick:()=>{const e=t.browseCardFactory().hitUiNavigate({destination:"spotify:concerts"});s.logInteraction(e)}}),n]})})})}));var ze=s(27532);const We=(0,m.memo)((e=>{const{data:t,isAnonymous:s,isConcertSaved:a,followers:r}=e,{artists:n,albums:i,upcomingConcerts:o}=t,c=t.concert.concert,[l,d]=(0,m.useState)(!1),[h,k]=(0,m.useState)(""),{spec:b}=(0,N.fU)(p.q,{data:{identifier:c.id,uri:`spotify:concert:${c.id}`}});return(0,w.Y)(t.color),(0,K.jsxs)("section",{className:te,children:[(0,K.jsx)(j.$,{children:(0,ze.Yl)(c)}),(0,K.jsxs)(y.gF,{backgroundImages:[{url:t.headerImageUri,width:100,height:100}],backgroundColor:t.color,children:[(0,K.jsxs)(y.sP,{children:[(0,K.jsx)(y.T0,{children:(0,K.jsx)("div",{className:G,children:(0,K.jsx)(g.D,{as:"h3",variant:"canon",className:B,children:(0,fe.jx)((0,fe.CH)(c.date))})})}),(0,K.jsx)(y.xd,{children:(0,ze.Yl)(c)})]}),(0,K.jsx)(f.W,{children:(0,K.jsx)("div",{className:me,children:(0,K.jsx)(v.i,{text:(0,ze.Yl)(c)})})})]}),(0,K.jsxs)("div",{className:ee,children:[(0,K.jsx)(x.I,{backgroundColor:t.color}),(0,K.jsxs)("div",{className:se,children:[(0,K.jsx)(we,{onInterestedClick:(e,t)=>{d(e),k(t),setTimeout((()=>d(!1)),1e4)},concert:c,ticketAvailabilityTranslated:t.ticketAvailabilityTranslated,entitySpec:b,isAnonymous:s,isConcertSaved:a,followers:r}),(0,K.jsx)(Ke,{artists:n,albums:i,entitySpec:b}),(0,K.jsx)(He,{upcomingConcerts:o,entitySpec:b})]})]}),l&&(0,K.jsx)(u.A9,{colorSet:"invertedLight",className:je,children:h})]})}));var Oe=s(66734);const Qe=async e=>{const[t,s]=e.queryKey;return(await(0,l.getConcert)(c.b.getInstance(),s)).body},Re=()=>{const{concertId:e=""}=(0,n.UO)(),{data:t,isLoading:s}=(0,a.useQuery)(["concert",e],Qe,{staleTime:6e5}),c=(e=>{const t=["concertInCollection",e];return(0,a.useQuery)(t,d,{keepPreviousData:!1,retry:!1})})({username:(0,r.v9)(h.n5),concertUri:`spotify:concert:${e}`}),l=c?.data||!1,{isAnonymous:m}=(0,r.v9)(h.Gg),g=t?.artists.map((e=>e.uri));var u;u={artists:g},(0,a.useQuery)(["family-duo-concert-followers-aa-test",u],Oe.g,{enabled:(0,I.W6)(W.hj)});const{data:p,isLoading:x}=(e=>(0,a.useQuery)(["family-duo-concert-followers",e],Oe.g,{enabled:(0,I.W6)(W.YC),retry:!1}))({artists:g});return s||x?(0,K.jsx)(o.h,{hasError:!1,errorMessage:""}):t?(0,K.jsx)(We,{data:t,isAnonymous:m,isConcertSaved:l,followers:p?.followers}):(0,K.jsx)(o.h,{hasError:!0,errorMessage:i.ag.get("concert.error.concert_not_found_title")})}},66734:(e,t,s)=>{s.d(t,{g:()=>i,P:()=>n});var a=s(25899),r=s(27555);const n=async e=>{const[t,{geonameId:s}]=e.queryKey,n=await((e,t)=>e.build().withMethod("GET").withHost(r.gH).withPath("/concerts/").withEndpointIdentifier("/cooper/concerts").withQueryParameters({...t&&{geonameId:t}}).withoutMarket().send())(a.b.getInstance(),s);return n.body},i=async e=>{const[t,{artists:s}]=e.queryKey,n=await((e,t)=>e.build().withMethod("POST").withHost(r.gH).withPath("/followers/").withEndpointIdentifier("/cooper/followers").withHeaders([{key:"content-type",value:"application/json"},{key:"accept",value:"application/json"}]).withBody(JSON.stringify({artists:t})).withoutMarket().send())(a.b.getInstance(),s);return n.body}},12243:(e,t,s)=>{s.d(t,{D:()=>d});var a=s(59496),r=s(96170);const n="g4AhdK8faqTe7v8VqC3x";var i=s(4637);const o=(0,a.memo)((({alt:e})=>(0,i.jsxs)("svg",{height:8,width:8,"aria-hidden":"true",viewBox:"-8 -8 32 32",className:n,children:[(0,i.jsx)("title",{children:e}),(0,i.jsx)("path",{d:"M6.233.371a4.388 4.388 0 0 1 5.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 0 0 .201 1.13l2.209 1.275a4.75 4.75 0 0 1 2.375 4.114V16H.382v-1.143a4.75 4.75 0 0 1 2.375-4.113l2.209-1.275a.75.75 0 0 0 .201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 0 1 .904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 0 0-2.13.937 2.85 2.85 0 0 0-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 0 1-.603 3.39l-2.209 1.275A3.25 3.25 0 0 0 1.902 14.5h12.196a3.25 3.25 0 0 0-1.605-2.457l-2.209-1.275a2.25 2.25 0 0 1-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 0 0-.588-1.022A2.888 2.888 0 0 0 8 1.5z"})]}))),c="WCQhjx2ZwtN1mwka_4wj",l=e=>{const t=(0,r.$P)(),s=`spotify:user:${e.follower.username}`;return(0,a.useEffect)((()=>{t.logImpression(e.spec.planMemberFactory({identifier:e.follower.memberId,uri:s}).impression())})),e.follower.profileImageUrl?(0,i.jsx)("img",{src:e.follower.profileImageUrl,alt:e.follower.displayName??e.follower.username},`follower-${e.follower.displayName??e.follower.username}`):(0,i.jsx)(o,{alt:e.follower.displayName},`follower-${e.follower.displayName}`)},d=(0,a.memo)((e=>(0,i.jsx)("div",{className:c,children:e.followers.map(((t,s)=>(0,i.jsx)(l,{follower:t,spec:e.spec},`follower-${s}`)))})))},46651:(e,t,s)=>{s.d(t,{F:()=>n,i:()=>r});var a=s(3802);const r=e=>{if((e=>!!e.title&&(e.festival||!e.artists.length))(e))return e.title;const t=(e=>e.artists.map((e=>e.name)))(e);return 1===t.length?a.ag.get("concert.header.upcoming_concert_title_1",...t):2===t.length?a.ag.get("concert.header.upcoming_concert_title_2",...t):3===t.length?a.ag.get("concert.header.upcoming_concert_title_3",...t):4===t.length?a.ag.get("concert.header.upcoming_concert_title_4",...t):t.length>4?a.ag.get("concert.header.upcoming_concert_title_more",...t):""},n=e=>1===e.length?a.ag.get("web-player.family-duo-concerts-shelf.X-follows",e[0].displayName??e[0].username):a.ag.get("web-player.family-duo-concerts-shelf.X-of-your-family-follow",e.length)}}]);
//# sourceMappingURL=xpui-routes-concert.js.map