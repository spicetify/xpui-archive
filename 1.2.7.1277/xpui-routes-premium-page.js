"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[4868],{83245:(e,n,t)=>{t.r(n),t.d(n,{default:()=>z});var i=t(59496),a=t(84875),s=t.n(a),o=t(91929),d=t(37073),r=t(71176);const l="POL2MEn4kYvvhOfLsg0r",c="tGegSRxI7iLscjOezFfw",u="cVkF9UmUxF_89Q1pcUFS",f="RUQ0KeNlKc47sIZUr2ED",m="dLo0jrUD6hWn4kzbBOFm",p="oNgy3yKSOHI7KTpQJ1xJ",h="vTyWYlhrqCiKKKiGcTo8",_="WNzIvGMAnUhnZVlXsJJW",b="FGbrgB0DUj2wsUM9ACxp",y="ShjUoZcnXBRAwzptB42a",E="NRAlsO_QA8qpg_K2hswA",w="eCiEDXVKutfSeGT8XqGT",T="ZH4_Li3IiGysnYCQtQdW",x="wUrmLCaGCvSO51jcjHhe",I="u7oKAIw5c11Ss7QxopQx";var R=t(4637);const g="PREMIUM_TIER",v=({tiers:e,benefitLabel:n})=>(0,R.jsx)("thead",{className:h,children:(0,R.jsxs)("tr",{children:[(0,R.jsx)("th",{className:s()(y,E),children:n}),e.map(((e,n)=>(0,R.jsx)("th",{className:y,children:(0,R.jsx)("div",{className:s()(f,e.id===g?p:m),dangerouslySetInnerHTML:{__html:e.name}})},n)))]})}),j=({benefit:e,index:n,comparisonItemList:t})=>{const[a,o]=(0,i.useState)(!1);return(0,R.jsxs)("tr",{className:_,style:{"--animationDelay":100*n+"ms"},onMouseOver:()=>o(!0),onMouseLeave:()=>o(!1),onFocus:()=>o(!0),onBlur:()=>o(!1),children:[(0,R.jsxs)("td",{className:s()(w),children:[(0,R.jsx)("span",{children:e.name}),(0,R.jsx)("div",{className:s()(I,{[c]:a}),children:a&&(0,R.jsx)(d.u,{colorSet:"invertedLight",children:e.description})})]}),t.map((e=>(0,R.jsx)("td",{className:T,children:(0,R.jsx)("div",{className:s()(x,{[b]:e.id===g}),children:e.is_benefit_present?(0,R.jsx)(r.K,{className:u,iconSize:32}):"-"})},e.id)))]})},M=({tableData:e})=>{const{ref:n,inView:t}=(0,o.YD)(),a=(0,i.useCallback)((n=>e.comparison.find((e=>e.benefit_id===n))),[e.comparison]);return(0,R.jsx)("div",{className:s()(l,{[c]:t}),ref:n,children:(0,R.jsxs)("table",{children:[(0,R.jsx)(v,{tiers:e.tier,benefitLabel:e.benefit_label_text}),(0,R.jsx)("tbody",{children:e.benefit.map(((e,n)=>{const t=a(e.benefit_id);return t?(0,R.jsx)(j,{index:n,benefit:e,comparisonItemList:t.tier_benefit},e.name):null}))})]})})},S={headline:"Affordable plans for any situation",text:"Choose a Premium plan and listen to ad-free music without limits on your phone, speaker, and other devices. Pay in various ways. Cancel anytime."},D={headline:"Experience the difference",text:"Choose a plan and listen to music without ad breaks without limits on your phone, speaker, and other devices. Pay in various ways. Cancel anytime. "},N={benefit:[{benefit_id:"TEST1",name:"Music & podcasts",description:"Get over 80 million songs and playlists. tooltip test",explanation:"Download your music and podcasts, and take them anywhere your internet can't go. On Premium, you can download albums, playlists, and podcasts. You can download as many as 10,000 songs on each of up to 5 different devices."},{benefit_id:"AD_FREE",name:"Ad-free music listening",description:"Ad-free music listening",explanation:"Listen to music without ad breaks."},{benefit_id:"OFFLINE_LISTENING",name:"Download songs",description:"Get over 80 million songs and playlists made just for you. Discover new music and exclusive podcasts.",explanation:"Download your music and podcasts, and take them anywhere your internet can't go. On Premium, you can download albums, playlists, and podcasts. You can download as many as 10,000 songs on each of up to 5 different devices."},{benefit_id:"TEST4",name:"Turn off shuffle",description:"Download to listen offline",explanation:"Download your music and podcasts, and take them anywhere your internet can't go. On Premium, you can download albums, playlists, and podcasts. You can download as many as 10,000 songs on each of up to 5 different devices."},{benefit_id:"TEST5",name:"High audio quality",description:"Download to listen offline",explanation:"Download your music and podcasts, and take them anywhere your internet can't go. On Premium, you can download albums, playlists, and podcasts. You can download as many as 10,000 songs on each of up to 5 different devices."},{benefit_id:"TEST6",name:"Listen with friends in real time",description:"Download to listen offline",explanation:"Download your music and podcasts, and take them anywhere your internet can't go. On Premium, you can download albums, playlists, and podcasts. You can download as many as 10,000 songs on each of up to 5 different devices."},{benefit_id:"TEST7",name:"Personalized recommendations for playlists",description:"Download to listen offline",explanation:"Download your music and podcasts, and take them anywhere your internet can't go. On Premium, you can download albums, playlists, and podcasts. You can download as many as 10,000 songs on each of up to 5 different devices."},{benefit_id:"TEST8",name:"Organize listening queue",description:"Download to listen offline",explanation:"Download your music and podcasts, and take them anywhere your internet can't go. On Premium, you can download albums, playlists, and podcasts. You can download as many as 10,000 songs on each of up to 5 different devices."}],benefit_label_text:"What you get",tier:[{id:"FREE_TIER",name:"Spotify’s<br />Free<br />plan"},{id:"PREMIUM_TIER",name:"Spotify<br />Premium<br />plans"}],comparison:[{benefit_id:"TEST1",tier_benefit:[{id:"FREE_TIER",is_benefit_present:!0},{id:"PREMIUM_TIER",is_benefit_present:!0}]},{benefit_id:"OFFLINE_LISTENING",tier_benefit:[{id:"FREE_TIER",is_benefit_present:!1},{id:"PREMIUM_TIER",is_benefit_present:!0}]},{benefit_id:"AD_FREE",tier_benefit:[{id:"FREE_TIER",is_benefit_present:!1},{id:"PREMIUM_TIER",is_benefit_present:!0}]},{benefit_id:"TEST4",tier_benefit:[{id:"FREE_TIER",is_benefit_present:!1},{id:"PREMIUM_TIER",is_benefit_present:!0}]},{benefit_id:"TEST5",tier_benefit:[{id:"FREE_TIER",is_benefit_present:!1},{id:"PREMIUM_TIER",is_benefit_present:!0}]},{benefit_id:"TEST6",tier_benefit:[{id:"FREE_TIER",is_benefit_present:!1},{id:"PREMIUM_TIER",is_benefit_present:!0}]},{benefit_id:"TEST7",tier_benefit:[{id:"FREE_TIER",is_benefit_present:!1},{id:"PREMIUM_TIER",is_benefit_present:!0}]},{benefit_id:"TEST8",tier_benefit:[{id:"FREE_TIER",is_benefit_present:!1},{id:"PREMIUM_TIER",is_benefit_present:!0}]}]};var P=t(68045);const k="kvWzzEutUy3QUwNkLAWw",F="vubSV9N3n3DEITzpjM5o",U=({data:e})=>(0,R.jsx)("div",{className:k,children:(0,R.jsxs)("div",{className:F,children:[(0,R.jsx)(P.D,{as:"h1",variant:"alto",color:"white",semanticColor:"textBase",children:e.headline}),(0,R.jsx)(P.D,{as:"p",variant:"finale",color:"white",size:16,semanticColor:"textBase",style:{fontSize:"16px"},children:e.text})]})});var L=t(75387),C=t(21182);const O=`${t(7137).pd}/premium-marketing`,G=()=>{const{data:e,isLoading:n,isError:t}=(0,L.useQuery)(["hero"],(async()=>await(async()=>{const e=C.b.getInstance();return(await e.build().withHost(O).withMethod("GET").withPath("/hero").withoutMarket().withJsonContentType().withEndpointIdentifier("/hero").send()).body})()),{cacheTime:18e5,staleTime:6e5});return{data:e??null,loading:n,error:t}},A=()=>{const{data:e,isLoading:n,isError:t}=(0,L.useQuery)(["storefront"],(async()=>await(async()=>{const e=C.b.getInstance();return(await e.build().withHost(O).withMethod("GET").withPath("/storefront").withoutMarket().withJsonContentType().withEndpointIdentifier("/storefront").send()).body})()),{cacheTime:18e5,staleTime:6e5});return{data:e??null,loading:n,error:t}},z=()=>{const[e,n]=(0,i.useState)(null),[t,a]=(0,i.useState)(null),s=G().data,o=A().data;return(0,i.useEffect)((()=>{s&&n(s.hero),o&&a(o.storefront)}),[s,o]),(0,R.jsxs)("div",{children:[e&&(0,R.jsx)(U,{data:{headline:e.header,text:e.legalDisclaimer}}),t&&t.planCard&&(0,R.jsx)(U,{data:{headline:t.planCard[0].planName,text:t.planCard[0].description}}),(0,R.jsx)(U,{data:S}),(0,R.jsx)(U,{data:D}),(0,R.jsx)(M,{tableData:N})]})}}}]);
//# sourceMappingURL=xpui-routes-premium-page.js.map