"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[5786],{59326:(e,a,t)=>{t.d(a,{w:()=>x});var r=t(59496),l=t(4417),s=t.n(l),n=t(88778),i=t(45452),c=t(91800);const o=/(\((?:[0-9]{1,3}:){1,2}[0-9]{2}\))/g;const d="xgmjVLxjqfcXK5BV_XyN",u="QD13ZfPiO5otS0PU89wG",m="ZbLneLRe2x_OBOYZMX3M",h="rjdQaIDkSgcGmxkdI2vU",p="umouqjSkMUbvF4I_Xz6r";var j=t(4637);const x=r.memo((function({html:e,onTimeStampClick:a,enableTimestamps:t=!1,semanticColor:l="textSubdued"}){const n=(0,r.useMemo)((()=>{const r=t?e.split(o).map((e=>e.match(o)?`(<time>${e.replace("(","").replace(")","")}</time>)`:e)).join(""):e;let n;try{n=s()(r,{transform:g(a,l),dangerouslySetChildren:[]})}catch{n=e}return n}),[t,e,a,l]);return(0,j.jsx)("div",{className:d,children:n})}));function g(e,a){let t=0;return{p:e=>(0,j.jsx)(n.D,{as:"p",variant:"ballad",semanticColor:a,className:p,children:e.children}),a:a=>a.href?.startsWith("#t=")?(0,j.jsx)(i.E,{onClick:e,children:a.children}):a.href?(0,j.jsx)(c.r,{to:a.href,children:a.children}):(0,j.jsx)(j.Fragment,{children:a.children}),ul:e=>(0,j.jsx)("ul",{className:m,children:e.children}),ol:e=>(0,j.jsx)("ol",{className:m,children:e.children}),li:e=>(0,j.jsx)(n.D,{as:"li",variant:"ballad",semanticColor:a,className:h,children:e.children}),br:()=>(0,j.jsx)("br",{}),h1:e=>(0,j.jsx)(n.D,{as:"h1",variant:"balladBold",semanticColor:a,className:u,children:e.children}),h2:e=>(0,j.jsx)(n.D,{as:"h2",variant:"balladBold",semanticColor:a,className:u,children:e.children}),h3:e=>(0,j.jsx)(n.D,{as:"h3",variant:"balladBold",semanticColor:a,className:u,children:e.children}),h4:e=>(0,j.jsx)(n.D,{as:"h4",variant:"balladBold",semanticColor:a,className:u,children:e.children}),h5:e=>(0,j.jsx)(n.D,{as:"h5",variant:"balladBold",semanticColor:a,className:u,children:e.children}),h6:e=>(0,j.jsx)(n.D,{as:"h6",variant:"balladBold",semanticColor:a,className:u,children:e.children}),time:a=>(0,j.jsx)(i.E,{onClick:e,children:a.children}),_:(e,a,l)=>{const s=void 0===a?e:l;return(0,j.jsx)(r.Fragment,{children:s},"fragment"+t++)}}}},68985:(e,a,t)=>{t.r(a),t.d(a,{default:()=>v});t(10817);var r=t(59496),l=t(25007),s=t(4763),n=t(77646),i=t(88585),c=t.n(i),o=t(88778),d=t(59326);const u="nV_0UjulnuGnBYzXiFRd",m="F2fw42rcgQCHUh82jc3U";var h=t(4637);const p=()=>{const e=(0,n.v9)((e=>e.session.user?.uri)),a=c().from(e).toURLPath(!0);return(0,h.jsxs)("div",{className:u,children:[(0,h.jsx)(o.D,{variant:"forte",semanticColor:"textBase",dir:"auto",children:l.ag.get("web-player.soundtrap.title")}),(0,h.jsx)(o.D,{variant:"ballad",semanticColor:"textBase",dir:"auto",children:l.ag.get("web-player.soundtrap.subtitle.text")}),(0,h.jsx)(o.D,{variant:"ballad",semanticColor:"textBase",dir:"auto",children:l.ag.get("web-player.soundtrap.confidential")}),(0,h.jsx)(d.w,{html:l.ag.get("web-player.soundtrap.subtitle.link",a),semanticColor:"textBase",onTimeStampClick:()=>{}})]})};var j=t(59636),x=t(87518),g=t(99059);var f=t(76562);var b=t(77899),C=t(97939);const k=({templates:e,title:a,onClick:t})=>(0,h.jsx)(b.P,{title:a,className:m,children:e.map(((e,a)=>(0,h.jsx)(C.t,{project:e,index:a,onClick:t},`template-${e.key}`)))}),v=(0,r.memo)((()=>{const{templates:e}=function(){const[e,a]=(0,r.useState)(null),t=(0,g.z)(),l=(0,r.useCallback)((async()=>{const e=await t.getTemplates({query:"",page_number:0,result_per_page:6,sort_by:""});a(e.projects)}),[t]);return(0,r.useEffect)((()=>{l()}),[l]),{templates:e}}(),{playlists:a}=(0,f.u)(),{forkAndNavigate:t,error:n,loading:i}=function(){const e=(0,x.s0)(),[a,t]=(0,r.useState)(null),[l,s]=(0,r.useState)(!1),n=(0,g.z)();return{forkAndNavigate:(0,r.useCallback)((async a=>{s(!0);try{const{project:t}=await n.forkProject({projectKey:a});e(`/make-music/studio/${t.originalTrackUri}/${t.soundtrapProjectId}`)}catch(e){t("Could not navigate to project, forking failed")}s(!1)}),[e,t,n]),error:a,loading:l}}();if(!e||n||i||!a)return(0,h.jsx)(s.h,{hasError:!!n,errorMessage:n??l.ag.get("web-player.soundtrap.error.request-templates-failure")});const c=e.reduce(((e,a)=>(e[a.genre]??=[],e[a.genre].push(a),e)),{});return(0,h.jsxs)("div",{className:"contentSpacing",id:"makeMusicPage",children:[(0,h.jsx)(p,{}),Object.entries(c).map((([e,a])=>(0,h.jsx)(k,{templates:a,title:e,onClick:t},`template-shelf-${e}`))),(0,h.jsx)(j.W,{playlists:a,title:"Hear what others are creating"})]})}))},59636:(e,a,t)=>{t.d(a,{W:()=>n});var r=t(73327),l=t(77899),s=t(4637);const n=({playlists:e,title:a,showAll:t=!1})=>(0,s.jsx)(l.P,{total:e.length,title:a,seeAllUri:"/make-music/playlists",showSeeAll:!0,showAll:t,children:e.map(((e,a)=>(0,s.jsx)(r.Z,{uri:e.playlistUri,name:e.title,images:[{url:e.imageUri}],description:e.description,authorName:e.author,index:a},e.playlistUri)))})},97939:(e,a,t)=>{t.d(a,{t:()=>i});var r=t(7586),l=t(14643),s=t(75262),n=t(4637);const i=({project:e,index:a,onClick:t})=>(0,n.jsx)(r.C,{index:a,onClick:()=>t(e.key),headerText:e.title,featureIdentifier:"make_music",uri:e.originalTrackUri,delegateNavigation:!0,renderCardImage:()=>(0,n.jsx)(l.x,{images:[{url:e.imageUri}]}),renderSubHeaderContent:()=>(0,n.jsx)(s.NB,{source:e.templateDescription})})},76562:(e,a,t)=>{t.d(a,{u:()=>s});var r=t(59496),l=t(99059);const s=()=>{const[e,a]=(0,r.useState)(null),t=(0,r.useRef)(!1),s=(0,l.z)(),n=(0,r.useCallback)((async()=>{const e=await s.getPlaylists({query:"",page_number:0,result_per_page:6,sort_by:""});t.current&&a(e.playlists)}),[s]);return(0,r.useEffect)((()=>(t.current=!0,n(),()=>{t.current=!1})),[n]),{playlists:e,fetchPlaylists:n}}}}]);
//# sourceMappingURL=xpui-routes-make-music.js.map