"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[5835],{61831:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(59496),s=n(56162),o=n(3802),r=n(63120),c=n(31899),i=n(75252),l=n(97009),d=n(27532);const m="MUiWCNTfb6FcSwVPvQ1V",g="UAk3bMhekwJTV_wIyfsT",u="X9w6LPfKsZHMCs38sVIQ",h="NXn5KjeUOjLGlAfS1Gao",p="N0wgFMDDvCiby4QB5kLJ",v="nloNe2BLRHjz9dxlwfLU",f="JzXND83mXvcEuntCNR34",j="GR08E4L_rOGljyQQX30R";var x=n(4637);const y=(0,a.memo)((e=>{const{concert:t,isVirtual:n,onClick:a}=e,{venue:y,location:N}=t,b=t.artists[0],w=(0,l.CH)(t.startDate.localDate);return(0,x.jsxs)(r.Link,{to:`/concert/${t.id}`,className:m,onClick:a,children:[b.imageUri&&(0,x.jsx)(c.Z,{children:(0,x.jsx)("div",{role:"img",className:j,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(6, 6, 6, 0.6) 60%, rgba(0, 0, 0, 0.7) 100%), url(${b.imageUri})`}})}),(0,x.jsx)("time",{className:g,dateTime:t.startDate.localDate,children:(0,x.jsx)(s.D,{as:"h5",variant:"mestoBold",children:(0,l.jx)(w)})}),(0,x.jsxs)("div",{className:u,dir:"auto",children:[(0,x.jsxs)(s.D,{as:"h2",className:f,variant:"mesto",children:[(0,i.FO)(w)," • ",(0,l.hK)(w)]}),(0,x.jsx)(s.D,{as:"h2",variant:"cello",weight:"bold",className:h,children:(0,d.ij)(t)}),(0,x.jsx)("div",{className:p,children:(0,x.jsx)(s.D,{as:"h2",className:v,variant:"mesto","data-testid":"location-name",children:n?y:[y,N].join(o.ag.getSeparator())})})]})]})}))},90864:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Kt});var a=n(59496),s=n(61740),o=n(89605),r=n(33103),c=n(94041),i=n(84588),l=n(78780),d=n(17096),m=n(56162),g=n(36844),u=n(78328),h=n(3802),p=n(2419),v=n(69383),f=n(16743),j=n(73997),x=n(82108),y=n(96170),N=n(42495),b=n(63082),w=n(91703),D=n(96652),_=n(33209),I=n(48203),C=n(64709),k=n(18845),S=n(83680),F=n(24697),E=n(30366),O=n(91321),M=n(63120),U=n(97009),L=n(27532);const $="cELOd04or4B6BbTbNWA7",G="CHJYbX33oDik9u4n4ohH",P="woQ0wEe6FL4lsGW05bsb",W="KTDREr8pDWjrmnzXzZ2z",A="UUTvdEOH2v_rejoXdl9Z",T="cBbTozR921ppaoNZP0Uh",B="SNyyQ0t_VvlWzzB9li7v",H="lwO4iko6mhCUgZN1s9AW",R="akvZI06vqHOow1pOL29J",Q="WWZp3WM0maWJzl2qWEHE",K="YdkAHxbDekz9SiAxHG6M",z="AK37djOBJ2BuJOGuG1kQ",Z="JfYURQbEA_ntMsMZV6tK",V="du0mOGaZfHg3hsHwRMIu",J="Rvzy4ltiiHIp9mvlxf0c";var X=n(4637);const q=(0,a.memo)((e=>{const{concert:t,position:n,modalSpec:s}=e,{id:o,venue:r,location:c}=t,i=t.startDate.localDate,l=(0,U.CH)(i),d="ONLINE"===t.category,g=(0,a.useMemo)((()=>s?.eventRowFactory({position:n,uri:`spotify:concert:${t.id}`})),[s,n,t]),u=(0,y.$P)();return(0,X.jsxs)(M.Link,{to:`/concert/${t.id}`,className:H,onClick:()=>{g&&u.logInteraction(g.hitUiNavigate({destination:`/concert/${o}`}))},children:[(0,X.jsxs)("div",{className:R,"aria-hidden":!0,children:[(0,X.jsx)(m.D,{as:"h5",variant:"mestoBold",className:Q,children:(0,U.jw)(l)}),(0,X.jsx)(m.D,{as:"h1",variant:"cello",className:K,children:(0,U.wf)(l)})]}),(0,X.jsxs)("div",{className:z,children:[(0,X.jsx)(m.D,{as:"div",variant:"violaBold",className:Z,"data-testid":"event-title",children:(0,L.Yl)(t)}),(0,X.jsx)(k.T,{children:(0,U.jx)(l)}),(0,X.jsxs)(m.D,{as:"div",variant:"viola",className:V,children:[(0,U.FO)(l)," • ",(0,U.hK)(l)]}),(0,X.jsx)(m.D,{as:"div",variant:"viola",className:J,"data-testid":"event-venue",children:d?r:[r,c].join(h.ag.getSeparator())})]})]},t.id)})),Y=(0,a.memo)((e=>{const{event:t,locationName:n,onClose:s,feedSpec:o}=e,r=t?.concerts[0]?.concert,c=r?.artists[0],i=(0,a.useMemo)((()=>o?.groupedEventModalFactory({uri:c?.uri||""})),[o,c]),l=(0,y.$P)(),d=(0,y.Wi)(i);if(!t||!r||!c)return null;const g=()=>{i&&l.logInteraction(i.closeButtonFactory().hitUiHide()),s()};return(0,X.jsx)(O.Z,{contentLabel:h.ag.get("live_events.label"),isOpen:!0,className:$,onRequestClose:g,children:(0,X.jsxs)("section",{className:G,ref:d,children:[(0,X.jsx)("div",{className:P,children:(0,X.jsx)(ee,{"aria-label":h.ag.get("close"),iconOnly:S.k,buttonSize:"sm",onClick:g})}),(0,X.jsxs)("div",{className:W,children:[(0,X.jsx)(F.E,{height:"48",width:"48",className:A,src:c.imageUri}),(0,X.jsxs)("div",{className:T,children:[(0,X.jsx)(m.D,{as:"h3",variant:"cello",className:B,"data-testid":"event-venue",children:c.name}),(0,X.jsx)(m.D,{as:"h3",variant:"mesto","data-testid":"event-venue",children:`${h.ag.get("concerts.count_near_location",t.concerts.length,n)}`})]})]}),t.concerts.map(((e,t)=>(0,X.jsx)(q,{concert:e.concert,position:t,modalSpec:i},e.concert.id)))]})})}));var ee=(0,C.ZP)(E.o).withConfig({displayName:"ConcertFeedGroupedModal___StyledButtonTertiary",componentId:"sc-1o845wh-0"})({color:"#FFFFFF",backgroundColor:"#000000",cursor:"pointer"}),te=n(9102),ne=n(25899),ae=n(82710);const se=async()=>(await(0,ae.getSavedConcertsHub)(ne.b.getInstance())).body,oe=e=>{const[,{geonameId:t}]=e.queryKey;return(async e=>(await(0,ae.getConcertsForUser)(ne.b.getInstance(),e)).body)(t)},re=e=>{const[,,t]=e.queryKey;return(async(e=1,t)=>{const{geonameId:n,startDate:a,endDate:s}=t;return(await(0,ae.getAllConcerts)(ne.b.getInstance(),{page:e,geonameId:n,startDate:a,endDate:s})).body})(e.pageParam,t)},ce=e=>{const[,,{geonameId:t}]=e.queryKey;return(async e=>(await(0,ae.getConcertsHub)(ne.b.getInstance(),void 0,e)).body)(t)},ie=e=>{const[,,{geonameId:t}]=e.queryKey;return(async e=>(await(0,ae.getSpotifyConcerts)(ne.b.getInstance(),e)).body)(t)},le=6e5,de=/^(\d+)/,me=e=>e.toISOString().substring(0,10),ge=e=>{const[t]=(0,r.lr)(),n=t.get("startDate")?.trim(),a=t.get("endDate")?.trim(),s=t.get("when")?.trim(),o=s&&((e,t)=>{const n=new Date(e);switch(n.setDate(e.getDate()+(6-e.getDay())),t){case"thisWeek":return{startDate:e,endDate:n};case"thisWeekend":{const e=new Date(n);return e.setDate(n.getDate()+1),{startDate:n,endDate:e}}case"nextWeek":{const t=new Date(e);t.setDate(t.getDate()+(7-t.getDay()));const n=new Date(t);return n.setDate(t.getDate()+6),{startDate:t,endDate:n}}case"nextMonth":{const t=e.getMonth()+1,n=e.getFullYear()+(t>11?1:0);return{startDate:new Date(n,t%12,1),endDate:new Date(n,t%12+1,0)}}default:return}})(e,s);return o?{startDate:me(o.startDate),endDate:me(o.endDate)}:{startDate:n,endDate:a}},ue=e=>{const t=(()=>{const{location:e}=(0,o.UO)(),[,t]=e?.match(de)||[];if(t)try{return parseInt(t,10)}catch(e){return}})(),[n]=(0,r.lr)(),a=n.get("filter")?.trim();return e.isAnonymous||"all"===a?{type:"all",geonameId:t}:e.isInterestedEnabled&&"saved"===a?{type:"saved"}:e.isSoldBySpotifyEnabled&&"spotify"===a?{type:"spotify",geonameId:t}:{type:"recommended",geonameId:t}};var he=n(81305),pe=n(95663),ve=n(50346),fe=n(61831),je=n(31899);const xe="pU4WoqT8T6PmtjPbFtK0",ye="FC5Y_KFJ9rJyTpydqtOW",Ne="AAYLcavkBdCuebn9AQxT",be="lYHCmxpdReachiOORWGo",we="JtKEdtTtcK7s6EpGecaC",De="myHDa69cI5CHC8fhIhkG",_e=(0,a.memo)((e=>{const{event:t,onClick:n}=e,s=(0,a.useCallback)((()=>n(t)),[t,n]),o=(0,U.CH)(t.openingDate),r=(0,U.CH)(t.closingDate),c=t.concerts[0].concert,i=c.artists[0];return(0,X.jsxs)(E.o,{onClick:s,className:xe,component:"div",role:"button",children:[i.imageUri&&(0,X.jsx)(je.Z,{children:(0,X.jsx)("div",{role:"img",className:De,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(6, 6, 6, 0.6) 60%, rgba(0, 0, 0, 0.7) 100%), url(${i.imageUri})`}})}),(0,X.jsx)("time",{className:ye,dateTime:o.toISOString(),children:(0,X.jsx)(m.D,{as:"h5",variant:"mestoBold",children:(0,U.Bc)(o,r)})}),(0,X.jsxs)("div",{className:Ne,dir:"auto",children:[(0,X.jsx)(m.D,{as:"h2",variant:"cello",weight:"bold",className:be,children:(0,L.ij)(c)}),(0,X.jsx)("div",{className:we,children:(0,X.jsx)(m.D,{as:"h2",variant:"mesto","data-testid":"concerts-count",children:h.ag.get("concerts.count",t.concerts.length)})})]})]})})),Ie=(0,a.memo)((e=>{const{event:t,position:n,sectionSpec:s,onOpenGroupedEvent:o}=e,r=t.concerts[0]?.concert,c=r?.id,i=r&&(0,ve.g3)(r.id).toURI(),l=(0,y.$P)(),d=(0,a.useMemo)((()=>s?.eventCardFactory({identifier:c??"",position:n,uri:i??""})),[s,c,i,n]),m=(0,y.Wi)(d),g=e=>{o(e),d&&l.logInteraction(d.hitUiReveal())};if(t.concerts.length>1)return(0,X.jsx)("div",{ref:m,children:(0,X.jsx)(_e,{event:t,onClick:g})});return(0,X.jsx)("div",{ref:m,children:(0,X.jsx)(fe.Z,{concert:r,isVirtual:"online"===t.source,onClick:()=>{d&&l.logInteraction(d.hitUiNavigate({destination:i}))}})})}));var Ce=n(98340);const ke="MVPegsivznZB6gdkcnkH",Se="MlK79hskRbFrN2OBjMkl",Fe="VxaXFH9Uq1NU0LtsVhIu",Ee="UDVDNa40iTSPS9uHCG7Q",Oe="ofURwIKv0qEXJGTraIis",Me="fN_lJHkYih9H3j9YSEzS",Ue="LOJZO2MnGW5dCIawF767",Le="tyc7QRlEJigVFIAeLGOB",$e="PoljWhTLU3MKqIx2gSPY",Ge="ajxCNAuBJSgYfKUUBWBT",Pe="WR2h2Li5XTrBn_Rdme_k",We="WNhsvOyu4doInF525pLE",Ae="qSR4imCvzdznIQ4F2kBO",Te=(0,a.memo)((e=>{const{title:t="",identifier:n,position:s,events:o,feedSpec:r,onOpenGroupedEvent:c}=e,i=(0,a.useMemo)((()=>r?.eventSectionFactory({identifier:n,position:s})),[r,n,s]),l=(0,y.Wi)(i);return 0===o.length?null:(0,X.jsx)("div",{className:ke,ref:l,children:(0,X.jsx)(Ce.ZP,{value:"headered-grid",index:s,children:(0,X.jsx)(I.P,{total:o.length,title:t,showAll:!0,children:o.map(((e,t)=>{const n=e.concerts[0]?.concert;return(0,X.jsx)(Ie,{event:e,position:t,sectionSpec:i,onOpenGroupedEvent:c},n.id)}))})})})})),Be=(e,t)=>{if(!e)return"/concerts";const n=t?.normalize().replaceAll(/\W+/g,"-");return n?`/concerts/location/${e}-${n}`:`/concerts/location/${e}`},He=10;const Re=(0,a.memo)((e=>{const{eventGroups:t,locationName:n,isLoading:s,feedSpec:o,onOpenGroupedEvent:r}=e,c=(0,a.useMemo)((()=>o?.eventSectionFactory({identifier:"all",position:0})),[o]),i=(0,y.Wi)(c);return s?(0,X.jsx)(_.h,{hasError:!1,errorMessage:""}):t?0===t.length||0===t[0].events.length?(0,X.jsx)(D.u,{title:h.ag.get("concerts.error.no_concerts_found_title"),message:h.ag.get("concerts.error.no_concerts_found_message",n),renderInline:!0}):(0,X.jsx)("div",{ref:i,children:t.map((e=>(0,X.jsx)("div",{className:We,children:(0,X.jsx)(I.P,{total:e.events.length,title:h.ag.formatDate(new Date(`${e.date}T00:00:00`),{weekday:"long",day:"numeric",month:"long",year:"numeric"}),showAll:!0,children:e.events.map(((e,t)=>{const n=e.concerts[0]?.concert;return(0,X.jsx)(Ie,{event:e,position:t,sectionSpec:c,onOpenGroupedEvent:r},n.id)}))})},e.date)))}):null})),Qe=(0,a.memo)((e=>{const{geonameId:t,spec:n}=e,{startDate:s,endDate:c}=ge(new Date),i=(0,o.s0)(),[l]=(0,r.lr)(),[d,m]=(0,a.useState)(),g=(0,pe.o)(),u=(0,a.useMemo)((()=>n?.headerFactory()),[n]),{data:p,isLoading:v,hasNextPage:f,isFetchingNextPage:j,fetchNextPage:x}=(y={geonameId:t,startDate:s,endDate:c},(0,te.useInfiniteQuery)(["concerts","all",y],re,{staleTime:le,keepPreviousData:!0,getNextPageParam:(e,t)=>{if(!(t.length>=50)&&0!==e.events.length)return t.length+1}}));var y;const N=(e=>(0,te.useQuery)(["concerts","popular",{geonameId:e}],ce,{staleTime:le,keepPreviousData:!0}))(t),D=(0,a.useMemo)((()=>function(e){if(0===e.length)return[];if(0===e[0].events.length)return[];const t=[];let n={date:e[0].events[0].openingDate.slice(0,He),events:[]};for(const a of e)for(const e of a.events){const a=e.openingDate.slice(0,He);n.date!==a&&(t.push(n),n={date:a,events:[]}),n.events.push(e)}return t.push(n),t}(p?.pages??[])),[p?.pages]),_=p?.pages[0]?.userLocation||h.ag.get("concerts.default_location"),I=e=>{m(e);const t=e.concerts[0]?.concert.artistUris[0];g({type:"click",intent:"open-grouped-live-event",targetUri:t})};return(0,X.jsxs)("div",{children:[(0,X.jsx)(w.$,{children:`${h.ag.get("concerts_shows_in")} ${_}`}),(0,X.jsx)("div",{className:ke,"data-testid":"location-selector",children:(0,X.jsx)(he.Z,{handleLocationChange:e=>{g({type:"click",intent:"change-live-events-location"}),e?.geonameId&&i({pathname:Be(e.geonameId,e.location),search:`?${l.toString()}`})},locationStr:_,headerSpec:u})}),(0,X.jsx)(Re,{isLoading:v,locationName:_,eventGroups:D,onOpenGroupedEvent:I,feedSpec:n}),f&&(0,X.jsx)("div",{className:Ae,children:(0,X.jsx)(b.P,{disabled:j,onClick:()=>{x()},children:h.ag.get("concerts.load_more")})}),!v&&N.data&&(0,X.jsx)(Te,{title:h.ag.get("concerts_popular_near_you"),identifier:"popular",position:1,events:N.data.events,onOpenGroupedEvent:I,feedSpec:n}),(0,X.jsx)(Y,{event:d,locationName:_,feedSpec:n,onClose:()=>m(void 0)})]})})),Ke=Qe;var ze=n(28638),Ze=n(31354),Ve=n(75252);const Je=e=>24===e.length?new Date(e.substring(0,19)):22===e.length?new Date(e.substring(0,16)):new Date(e),Xe=e=>h.ag.formatDate(e,{month:"short",day:"numeric"}),qe=e=>h.ag.formatDate(e,{hour:"numeric",minute:"numeric"}),Ye=(e,t)=>{if(e.toDateString()===t.toDateString())return(e=>h.ag.formatDate(e,{weekday:"short",month:"short",day:"numeric"}))(e);if(e.getMonth()===t.getMonth()){return`${h.ag.formatDate(e,{day:"numeric",month:"short"})}–${h.ag.formatDate(t,{day:"numeric"})}`}return`${h.ag.formatDate(e,{day:"numeric",month:"short"})}–${h.ag.formatDate(t,{day:"numeric",month:"short"})}`};var et=n(13554),tt=n(9312);const nt="QYX01DsOaw_MzJWWRL2R",at="wpTjIgQz7QkLGlEM2SbD",st="nfOfj83N2J77AhkT4NNC",ot="RVBcsEWqZBqE8LlyMmmT",rt="M5l3yVBFFsTeGr0FCQ53",ct="pYZtdiW_JXpCpEpUNBl3",it="smnK8C6twajPDjNeIZpu",lt="yEPFml56fHXdbEaxMRxQ",dt="VJN_K93zj5zcQWuKpudd",mt="YvO7J4oC8u1QqRMBY4pg",gt=(0,a.memo)((e=>{const{concert:t,isVirtual:n,spec:s,position:o}=e,r=t?.id,c=(0,ve.g3)(t.id).toURI(),{venue:i,location:l}=t,d=t.artists[0],g=Je(t.startDate.localDate),u=(0,y.$P)(),p=(0,a.useMemo)((()=>(0,et.FV)(e.followers)),[e.followers]),v=(0,a.useMemo)((()=>s.concertCardFactory({identifier:r,position:o,uri:c})),[s,c,r,o]),f=(0,a.useMemo)((()=>(0,Ze.w)()),[]),j=(0,y.Wi)(v);return(0,X.jsxs)(M.Link,{to:`/concert/${t.id}`,className:nt,onClick:()=>{u.logInteraction(v.hitUiNavigate({destination:c}))},ref:j,children:[d.imageUri&&(0,X.jsx)(je.Z,{children:(0,X.jsx)("div",{role:"img",className:lt,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(6, 6, 6, 0.6) 60%, rgba(0, 0, 0, 0.7) 100%), url(${d.imageUri})`}})}),(0,X.jsx)("time",{className:at,dateTime:t.startDate.localDate,children:(0,X.jsx)(m.D,{as:"h5",variant:"mestoBold",children:Xe(g)})}),(0,X.jsxs)("div",{className:st,dir:"auto",children:[(0,X.jsxs)(m.D,{as:"h2",className:it,variant:"mesto",children:[(0,Ve.FO)(g)," • ",qe(g)]}),(0,X.jsx)(m.D,{as:"h2",variant:"cello",weight:"bold",className:ot,children:(0,et.ij)(t)}),(0,X.jsx)("div",{className:rt,children:(0,X.jsx)(m.D,{as:"h2",className:ct,variant:"mesto","data-testid":"location-name",children:n?i:[i,l].join(h.ag.getSeparator())})})]}),(0,X.jsxs)("div",{className:dt,onClick:()=>{u.logInteraction(f.hitNoAction())},children:[(0,X.jsx)(tt.D,{followers:e.followers,spec:f}),(0,X.jsx)(m.D,{as:"p",variant:"mesto",className:mt,children:p})]})]})})),ut=(0,a.memo)((e=>{const{event:t,onClick:n,spec:s,position:o}=e,r=t.concerts[0].concert?.id,c=(0,ve.g3)(r).toURI(),i=(0,y.$P)(),l=(0,a.useMemo)((()=>s.concertCardFactory({identifier:r,position:o,uri:c})),[s,c,r,o]),d=(0,a.useMemo)((()=>(0,Ze.w)()),[]),g=(0,a.useCallback)((()=>{i.logInteraction(l.hitUiReveal()),n(t)}),[t,n,l,i]),u=(0,y.Wi)(l),p=Je(t.openingDate),v=Je(t.closingDate),f=t.concerts[0].concert,j=f.artists[0],x=(0,a.useMemo)((()=>(0,et.FV)(e.followers)),[e.followers]),N=(0,a.useCallback)((()=>{i.logInteraction(d.hitNoAction())}),[i,d]);return(0,X.jsxs)("div",{onClick:g,className:nt,role:"button",tabIndex:0,onKeyDown:e=>{"Enter"===e.key&&g()},ref:u,children:[j.imageUri&&(0,X.jsx)(je.Z,{children:(0,X.jsx)("div",{role:"img",className:lt,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(6, 6, 6, 0.6) 60%, rgba(0, 0, 0, 0.7) 100%), url(${j.imageUri})`}})}),(0,X.jsx)("time",{className:at,dateTime:p.toISOString(),children:(0,X.jsx)(m.D,{as:"h5",variant:"mestoBold",children:Ye(p,v)})}),(0,X.jsxs)("div",{className:st,dir:"auto",children:[(0,X.jsx)(m.D,{as:"h2",variant:"cello",weight:"bold",className:ot,children:(0,et.ij)(f)}),(0,X.jsx)("div",{className:rt,children:(0,X.jsx)(m.D,{as:"h2",variant:"mesto","data-testid":"concerts-count",children:h.ag.get("concerts.count",t.concerts.length)})})]}),(0,X.jsxs)("div",{className:dt,onClick:N,children:[(0,X.jsx)(tt.D,{followers:e.followers,spec:d}),(0,X.jsx)(m.D,{as:"p",variant:"mesto",className:mt,children:x})]})]})}));var ht=n(84875),pt=n.n(ht);const vt="LN9pdza5hvbdl1QB8dKo",ft="P6SpMz_j_hH6lfVNSO2w",jt="axY_3UzUiQCQ2Asp0mQt",xt="CVhxc8GXvAXDO7De7zal",yt="IXXvh3b5U_b8xjeKorvb",Nt=a.memo((function({headline:e,className:t,spec:n}){const a=(0,y.Wi)(n.welcomeCardFactory()),s=(0,y.$P)();return(0,X.jsx)("div",{className:pt()(vt,t),ref:a,onClick:()=>{s.logInteraction(n.welcomeCardFactory().hitNoAction())},children:(0,X.jsx)("div",{className:pt()(yt),children:(0,X.jsx)(m.D,{as:"p",variant:"cello",className:pt()(xt),children:e})})})})),bt=({spec:e})=>(0,X.jsx)(Nt,{spec:e,headline:h.ag.get("web-player.family-duo-concerts-shelf.main-card-family"),className:ft}),wt=({spec:e})=>(0,X.jsx)(Nt,{spec:e,headline:h.ag.get("web-player.family-duo-concerts-shelf.main-card-duo"),className:jt});var Dt=n(15342),_t=n(40576),It=n(59359),Ct=n(23329),kt=n(22345);const St="pSD8FAzxnwWRFeP817di",Ft=a.memo(a.forwardRef((function(e,t){const{className:n,render:s,numberOfElements:o}=e,r=(0,a.useRef)(null),[c,i]=(0,a.useState)({columnCount:-1});(0,a.useImperativeHandle)(t,(()=>r.current));const l=(0,a.useCallback)((()=>{const e=r.current;if(!e||!e.parentElement)return;const t=((e,t)=>{const n=e;return n/t<196?Math.floor((n-24)/196):t})(e.parentElement.offsetWidth,o);i({columnCount:t})}),[o]);(0,kt.y)({refOrElement:r,observeOnly:"width",onResize:()=>{l()}}),(0,a.useLayoutEffect)((()=>{l()}),[l]);const d={"--column-count":`${c.columnCount}`,"--responsive-column-count":""+(c.columnCount-1)};return(0,X.jsx)("div",{ref:r,className:pt()(St,n),style:d,children:s(c)})})));Ft.displayName="GridContainer";const Et="J16VxLN1EwiAF59N0j9C",Ot="_1F6U2s5XM0jZxxOSpm4f",Mt="Nafv5vKVkay8bxmKRw05",Ut=a.memo((function({title:e,children:t,seeAllUri:n,className:s="",testId:o="component",seeAllLabel:r,onClickShelfTitle:c,onClickShelfSeeAll:i,elementRef:l}){const d=(0,a.useCallback)((({columnCount:e})=>{if(!Array.isArray(t))return(0,X.jsx)(X.Fragment,{});const n=a.Children.toArray(t);return(0,X.jsx)(X.Fragment,{children:n.filter(((t,n)=>n<e))})}),[t]);return Array.isArray(t)&&0===t.length?null:(0,X.jsxs)("section",{ref:l,className:pt()(s,Et),"data-testid":`${o}-shelf`,"aria-label":e,children:[(0,X.jsx)("div",{className:Ot,children:(0,X.jsx)(It.r,{title:e,seeAllUri:n,seeAllLabel:r,onClickTitle:c,onClickSeeAll:i})}),(0,X.jsx)(Ft,{className:pt()(Mt),render:d,numberOfElements:a.Children.count(t)})]})}));Ut.displayName="BaseShelf";const Lt=e=>(0,X.jsx)(_t.L,{onError:e=>{(0,Ct.vK)(e,"Shelf")},children:(0,X.jsx)(Ut,{...e})});const $t=e=>{const{spec:t}=(0,Dt.f)(ze.u,{}),n=(0,a.useMemo)((()=>t.concertsShelfContainerFactory({position:e.position})),[t,e.position]),s=(0,y.Wi)(n);return(0,X.jsx)("div",{"data-testid":"family-duo-concerts-shelf",ref:s,children:(0,X.jsxs)(Lt,{title:"family"===e.shelfData.planType?h.ag.get("web-player.family-duo-concerts-shelf.shelf-title-family"):h.ag.get("web-player.family-duo-concerts-shelf.shelf-title-duo"),children:["family"===e.shelfData.planType?(0,X.jsx)(bt,{spec:n}):(0,X.jsx)(wt,{spec:n}),e.shelfData.concerts.map(((a,s)=>function(e,t,n,a,s){const{concert:o,members:r}=e;return 1===o.concerts.length?(0,X.jsx)(y.Nh,{spec:a,children:(0,X.jsx)(gt,{concert:o.concerts[0].concert,followers:r,spec:n,position:s},`concert-card-${o.concerts[0].concert.id}`)}):(0,X.jsx)(y.Nh,{spec:a,children:(0,X.jsx)(ut,{event:o,onClick:t,followers:r,spec:n,position:s},`concert-grouped-card-${o.location}-${o.artists.join()}`)})}(a,e.onOpenGroupedEvent,n,t,s)))]})})},Gt=(0,a.memo)((e=>{const{enableInterestedFeature:t=!1,isLoading:n,events:a,locationName:s,spec:o,onOpenGroupedEvent:r,familyDuoShelfData:c}=e;if(n)return(0,X.jsx)(_.h,{hasError:!1,errorMessage:""});if(0===a.length)return(0,X.jsx)(D.u,{title:h.ag.get("concerts.error.no_concerts_found_title"),message:h.ag.get("concerts.error.no_concerts_found_message",s),renderInline:!0});const i=(e=>{const t={popular:[],recommended:[],online:[]};return e.forEach((e=>{switch(e.source){case"recommendation":t.recommended.push(e);break;case"popular":t.popular.push(e);break;case"online":t.online.push(e)}})),t})(a);return(0,X.jsxs)(X.Fragment,{children:[c&&(0,X.jsx)($t,{shelfData:c,onOpenGroupedEvent:r,position:0}),(0,X.jsx)(Te,{title:h.ag.get("concerts_upcoming_virtual_events"),identifier:"online",position:c?1:0,events:i.online,onOpenGroupedEvent:r,feedSpec:o}),(0,X.jsx)(Te,{title:!t||c?h.ag.get("concerts_recommended_for_you"):"",identifier:"recommended",position:c?2:1,events:i.recommended,onOpenGroupedEvent:r,feedSpec:o}),(0,X.jsx)(Te,{title:h.ag.get("concerts_popular_near_you"),identifier:"popular",position:c?3:2,events:i.popular,onOpenGroupedEvent:r,feedSpec:o})]})}));var Pt=n(66734),Wt=n(41836);const At=(0,a.memo)((e=>{const{enableInterestedFeature:t=!1,geonameId:n,spec:s}=e,r=(0,o.s0)(),[c,i]=(0,a.useState)(),l=(0,pe.o)(),d=(0,a.useMemo)((()=>s.headerFactory()),[s]),{data:m,isLoading:u}=(e=>{const t=(0,te.useQueryClient)();return(0,te.useQuery)(["concerts",e],oe,{staleTime:le,keepPreviousData:!0,onSuccess(n){if(e.geonameId||!n.userLocationGeonameId)return;const a=parseInt(n.userLocationGeonameId,10),s=["concerts",{...e,geonameId:a}];t.setQueryData(s,(()=>n))}})})({geonameId:n}),p=m?.userLocation||h.ag.get("concerts.default_location");((e={})=>{(0,te.useQuery)(["family-duo-concert-recommendations-aa-test",e],Pt.P,{enabled:(0,g.W6)(Wt.hj)})})({geonameId:e.geonameId});const{data:v,isFetched:f,isLoading:j}=((e={})=>(0,te.useQuery)(["family-duo-concert-recommendations",e],Pt.P,{enabled:(0,g.W6)(Wt.YC),retry:!1}))({geonameId:e.geonameId}),x=v&&f,y=(v?.concerts??[]).length>0;return(0,X.jsxs)("div",{children:[(0,X.jsx)(w.$,{children:`${h.ag.get("concerts_shows_in")} ${p}`}),(0,X.jsx)("div",{className:ke,"data-testid":"location-selector",children:(0,X.jsx)(he.Z,{handleLocationChange:e=>{l({type:"click",intent:"change-live-events-location"}),e?.geonameId&&r(Be(e.geonameId,e.location))},locationStr:p,headerSpec:d})}),(0,X.jsx)(Gt,{enableInterestedFeature:t,isLoading:u||j,familyDuoShelfData:x&&y?v:void 0,events:m?.events||[],locationName:p,spec:s,onOpenGroupedEvent:e=>{i(e);const t=e.concerts[0]?.concert.artistUris[0];l({type:"click",intent:"open-grouped-live-event",targetUri:t})}}),(0,X.jsx)(Y,{event:c,locationName:p,feedSpec:s,onClose:()=>i(void 0)})]})})),Tt=(0,a.memo)((e=>{const{spec:t}=e,n=(0,te.useQuery)("savedConcerts",se,{keepPreviousData:!1});return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(w.$,{children:`${h.ag.get("live_events.label")}`}),n.data?.events.length?(0,X.jsx)(X.Fragment,{children:(0,X.jsx)(Te,{title:h.ag.get("concerts_upcoming"),identifier:"saved",position:0,events:n.data?.events,feedSpec:t,onOpenGroupedEvent:()=>{}})}):(0,X.jsxs)("div",{className:Ue,children:[(0,X.jsx)(m.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:Ge,children:h.ag.get("concerts_interested_in_live_events")}),(0,X.jsx)(m.D,{as:"p",className:Pe,children:h.ag.get("concerts_no_events_description")}),(0,X.jsx)(M.default,{to:"/concerts",className:Le,children:(0,X.jsx)(b.P,{as:"span",className:$e,children:h.ag.get("concerts_browse_more_events")})})]})]})})),Bt=(0,a.memo)((e=>{const{spec:t,isLoading:n,data:a,onOpenGroupedEvent:s}=e;if(n)return(0,X.jsx)(_.h,{hasError:!1,errorMessage:""});if(!a||0===a.events.length)return(0,X.jsxs)("div",{className:Ue,children:[(0,X.jsx)(m.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:Ge,children:h.ag.get("concerts.no_spotify_results_title")}),(0,X.jsx)(m.D,{as:"p",className:Pe,children:h.ag.get("concerts.no_spotify_results_description")})]});const o=(e=>{const t={near:[],other:[]};return e.forEach((e=>{switch(e.source){case"near_first_party":t.near.push(e);break;case"other_first_party":t.other.push(e)}})),t})(a.events);return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Te,{title:h.ag.get("concerts.header.near"),identifier:"spotify_near",position:0,events:o.near,feedSpec:t,onOpenGroupedEvent:s}),(0,X.jsx)(Te,{title:h.ag.get("concerts.header.other"),identifier:"spotify_other",position:1,events:o.other,feedSpec:t,onOpenGroupedEvent:s})]})})),Ht=(0,a.memo)((e=>{const{geonameId:t,spec:n}=e,s=(0,o.s0)(),[c]=(0,r.lr)(),i=(0,pe.o)(),{data:l,isLoading:d}=(e=>(0,te.useQuery)(["concerts","spotify",{geonameId:e}],ie,{staleTime:le,keepPreviousData:!0}))(t),[m,g]=(0,a.useState)(),u=(0,a.useMemo)((()=>n.headerFactory()),[n]),p=l?.userLocation||h.ag.get("concerts.default_location");return(0,X.jsxs)("div",{children:[(0,X.jsx)(w.$,{children:`${h.ag.get("live_events.label")}`}),(0,X.jsx)("div",{className:ke,"data-testid":"location-selector",children:(0,X.jsx)(he.Z,{handleLocationChange:e=>{i({type:"click",intent:"change-live-events-location"}),e?.geonameId&&s({pathname:Be(e.geonameId,e.location),search:`?${c}`})},locationStr:p,headerSpec:u})}),(0,X.jsx)(Bt,{spec:n,data:l,isLoading:d,onOpenGroupedEvent:e=>{g(e);const t=e.concerts[0]?.concert.artistUris[0];i({type:"click",intent:"open-grouped-live-event",targetUri:t})}}),(0,X.jsx)(Y,{event:m,locationName:p,feedSpec:n,onClose:()=>g(void 0)})]})})),Rt=c.vI0,Qt={url:"https://tickets.spotifycdn.com/partner-assets/Hub%20header%20image/Desktop%20header%20IMG.png",width:2736,height:720},Kt=()=>{const{isAnonymous:e}=(0,s.v9)(x.Gg),t=(0,o.TH)(),n=t.pathname+t.search,c=(0,y.$P)(),b=(0,g.W6)(N.tp),w=(0,g.W6)(N.J_),{spec:D}=(0,y.fU)(u.y,{}),_=ue({isAnonymous:e,isInterestedEnabled:b,isSoldBySpotifyEnabled:w}),I=(0,a.useMemo)((()=>D.headerFactory().liveEventsNavbarFactory({uri:n,reason:_.type})),[D,_,n]),C=(0,y.Wi)(I),k=(e,t)=>{const n=D.headerFactory().liveEventsNavbarFactory({uri:e,reason:t}).hitUiNavigate({destination:e});c.logInteraction(n)};return(0,X.jsxs)("section",{className:Se,children:[(0,X.jsxs)(v.gF,{size:v.fR.SMALL,backgroundColor:Rt,backgroundImages:[Qt],children:[(0,X.jsx)(v.sP,{children:(0,X.jsx)(v.xd,{children:h.ag.get("live_events.label")})}),(0,X.jsx)(f.W,{children:(0,X.jsx)(j.i,{text:h.ag.get("live_events.label")})})]}),(0,X.jsxs)("div",{className:Fe,children:[(0,X.jsx)(p.I,{backgroundColor:Rt}),!e&&(0,X.jsx)("div",{className:Oe,ref:C,children:(0,X.jsx)(i.l,{list:(0,X.jsx)("nav",{"aria-label":"live events navbar",children:(0,X.jsxs)(l.F,{children:[(0,X.jsx)(d.c,{id:"recommended_for_you_link",label:h.ag.get("live_events.for_you_tab"),active:"recommended"===_.type,className:Me,component:r.rU,onClick:()=>k("/concerts","recommended"),sentenceCase:!0,to:"/concerts"},"recommended"),(0,X.jsx)(d.c,{id:"concerts_all_link",label:h.ag.get("live_events.all_events_tab"),active:"all"===_.type,className:Me,component:r.rU,onClick:()=>k("/concerts?filter=all","all"),sentenceCase:!0,to:"/concerts?filter=all"},"all"),w&&(0,X.jsx)(d.c,{id:"concerts_spotify_link",label:h.ag.get("live_events.spotify_tab"),active:"spotify"===_.type,className:Me,component:r.rU,onClick:()=>k("/concerts?filter=spotify","spotify"),sentenceCase:!0,to:"/concerts?filter=spotify"},"spotify"),b&&(0,X.jsx)(d.c,{id:"concerts_interested_link",label:h.ag.get("concerts_interested"),active:"saved"===_.type,className:Me,component:r.rU,onClick:()=>k("/concerts?filter=saved","saved"),sentenceCase:!0,to:"/concerts?filter=saved"},"saved")]})})})}),(0,X.jsxs)("div",{className:Ee,children:["recommended"===_.type&&(0,X.jsx)(At,{geonameId:_.geonameId,spec:D,enableInterestedFeature:b}),"all"===_.type&&(0,X.jsx)(Ke,{geonameId:_.geonameId,spec:D}),"spotify"===_.type&&(0,X.jsx)(Ht,{geonameId:_.geonameId,spec:D}),"saved"===_.type&&(0,X.jsx)(Tt,{spec:D}),(0,X.jsx)(m.D,{variant:"finale",semanticColor:"textSubdued",children:h.ag.get("live_events.disclaimer")})]})]})]})}},66734:(e,t,n)=>{n.d(t,{g:()=>r,P:()=>o});var a=n(25899),s=n(27555);const o=async e=>{const[t,{geonameId:n}]=e.queryKey,o=await((e,t)=>e.build().withMethod("GET").withHost(s.gH).withPath("/concerts/").withEndpointIdentifier("/cooper/concerts").withQueryParameters({...t&&{geonameId:t}}).withoutMarket().send())(a.b.getInstance(),n);return o.body},r=async e=>{const[t,{artists:n}]=e.queryKey,o=await((e,t)=>e.build().withMethod("POST").withHost(s.gH).withPath("/followers/").withEndpointIdentifier("/cooper/followers").withHeaders([{key:"content-type",value:"application/json"},{key:"accept",value:"application/json"}]).withBody(JSON.stringify({artists:t})).withoutMarket().send())(a.b.getInstance(),n);return o.body}},9312:(e,t,n)=>{n.d(t,{D:()=>d});var a=n(59496),s=n(96170);const o="g4AhdK8faqTe7v8VqC3x";var r=n(4637);const c=(0,a.memo)((({alt:e})=>(0,r.jsxs)("svg",{height:8,width:8,"aria-hidden":"true",viewBox:"-8 -8 32 32",className:o,children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("path",{d:"M6.233.371a4.388 4.388 0 0 1 5.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 0 0 .201 1.13l2.209 1.275a4.75 4.75 0 0 1 2.375 4.114V16H.382v-1.143a4.75 4.75 0 0 1 2.375-4.113l2.209-1.275a.75.75 0 0 0 .201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 0 1 .904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 0 0-2.13.937 2.85 2.85 0 0 0-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 0 1-.603 3.39l-2.209 1.275A3.25 3.25 0 0 0 1.902 14.5h12.196a3.25 3.25 0 0 0-1.605-2.457l-2.209-1.275a2.25 2.25 0 0 1-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 0 0-.588-1.022A2.888 2.888 0 0 0 8 1.5z"})]}))),i="WCQhjx2ZwtN1mwka_4wj",l=e=>{const t=(0,s.$P)(),n=`spotify:user:${e.follower.username}`;return(0,a.useEffect)((()=>{t.logImpression(e.spec.planMemberFactory({identifier:e.follower.memberId,uri:n}).impression())})),e.follower.profileImageUrl?(0,r.jsx)("img",{src:e.follower.profileImageUrl,alt:e.follower.displayName??e.follower.username},`follower-${e.follower.displayName??e.follower.username}`):(0,r.jsx)(c,{alt:e.follower.displayName},`follower-${e.follower.displayName}`)},d=(0,a.memo)((e=>(0,r.jsx)("div",{className:i,children:e.followers.map(((t,n)=>(0,r.jsx)(l,{follower:t,spec:e.spec},`follower-${n}`)))})))},13554:(e,t,n)=>{n.d(t,{FV:()=>r,a4:()=>c,ij:()=>o});var a=n(3802),s=n(4637);const o=e=>{if((e=>!!e.title&&(e.festival||!e.artists.length))(e))return e.title;const t=(e=>e.artists.map((e=>e.name)))(e);return 1===t.length?a.ag.get("concert.header.upcoming_concert_title_1",...t):2===t.length?a.ag.get("concert.header.upcoming_concert_title_2",...t):3===t.length?a.ag.get("concert.header.upcoming_concert_title_3",...t):4===t.length?a.ag.get("concert.header.upcoming_concert_title_4",...t):t.length>4?a.ag.get("concert.header.upcoming_concert_title_more",...t):""},r=e=>1===e.length?a.ag.get("web-player.family-duo-concerts-shelf.X-follows",e[0].displayName??e[0].username):a.ag.get("web-player.family-duo-concerts-shelf.X-of-your-family-follow",e.length),c=(e,t)=>{const n=e.map(((e,n)=>{const a=`spotify:user:${e.username}`;return(0,s.jsx)("a",{onClick:()=>t(a,e.memberId),href:a,children:e.displayName??e.username},`follower-name-${n}`)}));return 1===e.length?a.ag.get("web-player.family-duo-concerts-shelf.X-follows",n[0]):2===e.length?a.ag.get("web-player.family-duo-concerts-shelf.2-follow",...n):3===e.length?a.ag.get("web-player.family-duo-concerts-shelf.3-follow",...n):4===e.length?a.ag.get("web-player.family-duo-concerts-shelf.4-follow",...n):a.ag.get("web-player.family-duo-concerts-shelf.5-follow",...n)}}}]);
//# sourceMappingURL=xpui-routes-collection-concerts.js.map