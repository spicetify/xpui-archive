"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7704],{59946:(e,t,s)=>{s.r(t),s.d(t,{SKELETON_CARDS_COUNT:()=>bt,SKELETON_SHELVES_COUNT:()=>Nt,SKELETON_SHORTCUTS_COUNT:()=>kt,default:()=>Tt});var n=s(59496),a=s(84875),r=s.n(a),o=s(36844),i=s(22385),c=s(3802),l=s(91703),u=s(40576),d=s(21718),m=s(23329),h=s(9374),g=s(82279),p=s(56876),x=s(7142),f=s(74991),j=s(34058),y=s(50346),v=s(56595),C=s(54299),S=s(75257),k=s(20287),N=s(82538),b=s(43064),_=s(91048),E=s(30301);const T="rPV8BmHZXaGIGT2HwvBB",I="nlOU1unbFAd7ZHyeSMTH",P="jb9xD5ECTqKFK02qe3HZ",M="Z35BWOA10YGn5uc9YgAp",L="g3f_cI5usQX7ZOQyDtA9",w="jvWzgRWM_y_9FFTYRCcB",B="zXwER4Lsqq_e7fVVaPkZ",O="WWDxafTPs4AgThdcX5jN",U="Tzzq1pG_inwo_oSOdyjb",D="TbrIq3NG2VYFoAUMSmp9",A="JFDEiqT_8B5zeG_CDSdK",H="EzRmGRncgnv1zFgF4dqE",R="bPmmKmSPLKMhtJSaUJRX",F="vpQWUBWS_lXRLZMRJT7w",W="GSv7K805J9Jw7LB9tn2A",J="Kcb74zm1aMqGfPxTwO5s",q="s9c9x_mJq197U2hBzGtV";var z=s(4637);const Y=(0,n.memo)((function({item:e}){const t=(0,b._)(e.uri),s=e.duration_ms??0,{isPlaying:n,isActive:a}=(0,E.$o)(e.uri),[r]=(0,_.z)(1e4,(t=>t.item?.uri===e.uri)),o=e.resume_point?.resume_position_ms??0,i=n||a?r:o,c=Math.round(100/(s/i)),l=t===N.Om.YES,u=s&&i>0;return l||u?(0,z.jsxs)("div",{className:F,children:[l?(0,z.jsx)(S.E,{iconSize:16,semanticColor:"textSubdued"}):null,u?(0,z.jsx)(k.k,{className:W,value:c,semanticColor:"essentialBase"}):null]}):null}));var $=s(89605),G=s(56162),K=s(94722),X=s(27898),Z=s(38538),V=s(48607),Q=s(96170),ee=s(7072),te=s(5372),se=s(75207);const ne=(0,n.memo)((function({images:e=[],fallbackIcon:t=p.U}){const s=(0,se.X)(e);return(0,z.jsx)("div",{className:w,children:(0,z.jsx)("div",{className:B,children:(0,z.jsx)(te.E,{className:O,src:s?.url,loading:"lazy",testid:"shortcut-image",children:(0,z.jsx)(t,{"aria-hidden":!0})})})})}));var ae=s(26065),re=s(59180),oe=s(95663),ie=s(63120);const ce=n.memo((function({index:e,item:t,fallbackIcon:s,showPlayButton:a,extraContent:o,playInsteadOfNavigating:i=!1,onContextMenu:l=(()=>{}),onTouchStart:u=(()=>{}),onTouchEnd:d=(()=>{})}){const m=(0,$.s0)(),h=(0,oe.o)(),{setColorFromUri:p,resetColor:x,clearColor:f}=(0,g.WQ)(),j=(0,Z.G3)(t.uri,t.release_date,t.resume_point?.resume_position_ms,t.resume_point?.fully_played),{spec:v,logger:C}=(0,Q.fU)(K.createDesktopShortcutsPlayNavCardEventFactory,{data:{position:e,uri:t.uri}}),{isPlaying:S,isActive:k,togglePlay:N}=(0,V.n)({uri:t.uri},{featureIdentifier:"home",referrerIdentifier:"home"}),b=(0,y.EC)(t.uri),_=c.ag.getUrlLocale(),E=(0,re.k)({type:"link",uri:t.uri}),T=(0,n.useCallback)((()=>{h({targetUri:t.uri,intent:S?"pause":"play",type:"click"});const e=v.playButtonFactory();let s;s=S?e.hitPause({itemToBePaused:t.uri}):k?e.hitResume({itemToBeResumed:t.uri}):e.hitPlay({itemToBePlayed:t.uri});const n=C.logInteraction(s);N({loggingParams:n})}),[k,S,t.uri,C,h,v,N]),I=(0,n.useCallback)((()=>{if(i)return void T();h({targetUri:t.uri,intent:"navigate",type:"click"});const e=v.hitUiNavigate({destination:t.uri});let s;C.logInteraction(e),b&&(s=b.toURLPath(!0));const n=E?(0,ee.is)(s||"",_):s;n&&m(n)}),[t.uri,C,m,h,v,b,E,_,i,T]),w=(0,n.useCallback)((()=>{p(t.uri)}),[t.uri,p]);(0,n.useEffect)((()=>()=>{f()}),[f]);const B=(0,Q.Wi)(v),O=(0,ae.O)([t.uri],t.name);return(0,z.jsx)("div",{ref:B,className:M,onContextMenu:l,onTouchStart:u,onTouchEnd:d,onMouseEnter:w,onMouseLeave:x,children:(0,z.jsxs)("div",{className:L,onDragStart:O,children:[(0,z.jsx)(ne,{images:t.images,fallbackIcon:s}),(0,z.jsxs)("div",{className:U,children:[(0,z.jsxs)("div",{className:D,children:[(0,z.jsxs)("div",{className:A,children:[j&&(0,z.jsx)(Z.Rd,{className:R}),(0,z.jsx)(ie.Link,{to:t.uri,onClick:I,title:t.name,children:(0,z.jsx)(G.D,{as:"p",variant:"balladBold",className:H,children:t.name})})]}),o||null]}),a&&(0,z.jsx)("div",{className:r()(J,{[q]:S}),children:(0,z.jsx)(X.f,{isPlaying:S,onClick:T})})]}),(0,z.jsx)("div",{onClick:I,className:P})]})})}));var le=s(88513),ue=s(14280),de=s(73769),me=s(73444),he=s(762);const ge=n.memo((function(e){return(0,y.zO)(e.item.uri)?(0,z.jsx)(ce,{...e,fallbackIcon:p.U}):(0,v.MW)(e.item.uri)?(0,z.jsx)(C._,{menu:(0,z.jsx)(v.XL,{}),children:(0,z.jsx)(ce,{...e,fallbackIcon:p.U,playInsteadOfNavigating:!0})}):(0,z.jsx)(C._,{menu:(0,z.jsx)(me.X,{uri:e.item.uri}),children:(0,z.jsx)(ce,{...e,fallbackIcon:p.U})})})),pe=n.memo((function(e){return(0,z.jsx)(C._,{menu:(0,z.jsx)(le.Y,{uri:e.item.uri}),children:(0,z.jsx)(ce,{...e,fallbackIcon:x.c})})})),xe=n.memo((function(e){return(0,z.jsx)(C._,{menu:(0,z.jsx)(ue.m,{uri:e.item.uri}),children:(0,z.jsx)(ce,{...e,fallbackIcon:f.a})})})),fe=n.memo((function(e){return(0,z.jsx)(C._,{menu:(0,z.jsx)(he.M,{uri:e.item.uri}),children:(0,z.jsx)(ce,{...e,fallbackIcon:j.J,showPlayButton:!1})})})),je=n.memo((function(e){return e.item.podcast?(0,z.jsx)(fe,{index:e.index,shouldSetBackgroundColor:e.shouldSetBackgroundColor,item:e.item.podcast,showPlayButton:e.showPlayButton}):(0,z.jsx)(C._,{menu:(0,z.jsx)(de.k,{uri:e.item.uri}),children:(0,z.jsx)(ce,{...e,fallbackIcon:j.J,extraContent:(0,z.jsx)(Y,{...e})})})}));var ye=s(98042),ve=s(13973);const Ce="J6UEDIqMSJhYlwGoeUZB",Se="ZjFf4lVC48DSryAjP9qB",ke=n.memo((function(e){const t=(0,ve.x)(),s={...e.item,...t};return(0,z.jsx)(ce,{...e,item:s,fallbackIcon:()=>(0,z.jsx)("div",{className:Ce,children:(0,z.jsx)(ye.P,{iconSize:32,className:Se})})})}));var Ne=s(32812),be=s(59359);const _e=24,Ee=270,Te=200,Ie=600,Pe=3*Ee+2*_e,Me=80,Le=64,we=16,Be=12;function Oe(e){if(null===e)return{cssProperties:{"--min-column-width":`${Ee}px`,"--item-height":`${Me}px`,"--column-gap":`${_e}px`,"--row-gap":`${we}px`},showPlayButton:!0};const t=e.offsetWidth,s=t<Ie?Te:Ee;const n=Math.min(Math.floor((t+_e)/(s+_e)),3),a=t>=Pe?Me:Le;return{cssProperties:{"--min-column-width":`${s}px`,"--item-height":`${a}px`,"--column-gap":`${_e}px`,"--row-gap":`${a===Le?Be:we}px`},showPlayButton:(t-(n-1)*_e)/n>=Ee}}function Ue(){const e=(0,n.useRef)(null),[t,s]=(0,n.useState)(Oe(null)),a=(0,n.useCallback)((()=>{null!==e.current&&s(Oe(e.current))}),[]),r=(0,n.useCallback)((t=>{e.current=t,a()}),[a]);return(0,d.a)((()=>a())),[t,r]}const De=e=>{if(null!==e&&"object"==typeof e){const{type:t,name:s}=e;return t===h.p.YOUR_EPISODES&&"string"==typeof s}return!1},Ae=n.memo((function({title:e,tagline:t,items:s}){const{fetchMultipleColors:a}=(0,g.WQ)(),r=!(0,Ne.k)(),o=e??(()=>{const e=(new Date).getHours();let t=c.ag.get("home.evening");return e>=5&&e<12?t=c.ag.get("home.morning"):e>=12&&e<18&&(t=c.ag.get("home.afternoon")),t})(),[i,l]=Ue();return(0,n.useEffect)((()=>{const e=s?.map(g.lh)||[];a(e)}),[s,a]),r||!s?.length?null:(0,z.jsxs)("section",{className:T,"aria-label":o,ref:l,children:[(0,z.jsx)(be.r,{title:o,titleVariant:"alto",tagline:t}),(0,z.jsx)("div",{className:I,style:i.cssProperties,children:s.filter(((e,t)=>De(e)||!e.error)).filter(((e,t)=>t<6)).map(((e,t)=>{if(De(e))return(0,z.jsx)(ke,{index:t,item:e,showPlayButton:i.showPlayButton,shouldSetBackgroundColor:0===t},`${t}-${e.uri}`);const s=function(e){const t=((0,y.EC)(e)||{}).type;switch(t){case y.JM.ARTIST:return xe;case y.JM.ALBUM:case y.JM.COLLECTION_ALBUM:return pe;case y.JM.PLAYLIST:case y.JM.PLAYLIST_V2:return ge;case y.JM.SHOW:return fe;case y.JM.EPISODE:return je;case y.JM.COLLECTION:return ge;default:return console.warn(`Unable to resolve entity shortcut from ${e} of type "${t||"unknown"}"`),fe}}(e.uri);return(0,z.jsx)(s,{index:t,item:e,showPlayButton:i.showPlayButton,shouldSetBackgroundColor:0===t},`${t}-${e.uri}`)}))})]})})),He=e=>(0,z.jsx)(u.L,{onError:e=>{(0,m.vK)(e,"HomeShortcutsGrid")},children:(0,z.jsx)(Ae,{...e})});var Re=s(28291),Fe=s(60941);const We="zUf7jtv9GPOKC1jYO5TO",Je="T8QLel3PoQTgJUpGYj7Q",qe=(0,n.memo)((({isLoading:e})=>{const t=(0,Re.h)("shimmer");return(0,z.jsx)("div",{className:w,children:(0,z.jsx)("div",{ref:t,className:r()(B,{[Je]:e})})})})),ze=(0,n.memo)((({isLoading:e})=>(0,z.jsx)("div",{className:r()(M,We),"data-testid":"skeleton-shortcut",children:(0,z.jsxs)("div",{className:L,children:[(0,z.jsx)(qe,{isLoading:e}),(0,z.jsx)("div",{className:U,children:(0,z.jsx)(Fe.C,{as:"p",variant:"balladBold",className:H,isLoading:e})})]})}))),Ye="v7dc5ekmeBiAYnLzV8oT",$e=(0,n.memo)((({shortcutCount:e})=>{const[t,s]=Ue();return(0,z.jsxs)("section",{className:T,ref:s,children:[(0,z.jsx)(Fe.C,{as:"h2",variant:"alto",className:Ye,charCount:25,isLoading:!0}),(0,z.jsx)("div",{className:I,style:t.cssProperties,children:[...new Array(e).keys()].slice(0,6).map(((e,t)=>(0,z.jsx)(ze,{isLoading:!0},t)))})]})}));var Ge=s(33209),Ke=s(28133),Xe=s(92348),Ze=s(33482),Ve=s(6444),Qe=s(46617),et=s(11268),tt=s(98389),st=s(1634),nt=s(29251),at=s(5126),rt=s(69527),ot=s(41836),it=s(36087);const ct=({spec:e,section:t,index:s})=>{const a=(0,o.W6)(ot.ty,{loadingValue:!1})?at.N:rt.q;return(0,n.useMemo)((()=>t.sectionItems.items.some((e=>(0,it.d)(e.content)))),[t.sectionItems])?(0,z.jsx)(Q.Nh,{spec:e.shelvesFactory(),children:(0,z.jsx)(a,{total:t.sectionItems.totalCount,seeAllUri:t.uri,pageId:t.uri,title:t.data.title?.text??"",index:s,id:t.uri,children:t.sectionItems.items.map(it.x).filter((e=>!!e))})}):null};var lt=s(74729);const ut=({spec:e,section:t,index:s})=>(0,z.jsx)(Q.Nh,{spec:e.shelvesFactory(),children:(0,z.jsx)(lt.default,{title:t.data.title?.text??void 0,showAll:!1,index:s})});var dt=s(77282);const mt=({spec:e,greeting:t,section:s})=>(0,z.jsx)(Q.Nh,{spec:e.shortcutsFactory(),children:(0,z.jsx)(He,{items:s.sectionItems.items.map(dt.lh),title:t??void 0})});var ht=s(85013);const gt=({spec:e,greeting:t,section:s,index:n})=>{const a=(0,v._n)();switch(s.data?.__typename){case"HomeGenericSectionData":return(0,z.jsx)(ct,{spec:e,section:(0,ht.f)(s,s.data),index:n});case"HomeShortsSectionData":return(0,z.jsx)(mt,{spec:e,greeting:t,section:(0,ht.f)(s,s.data)});case"HomeRecentlyPlayedSectionData":return(0,z.jsx)(ut,{spec:e,section:(0,ht.f)(s,s.data),index:n});case"HomeFeedBaselineSectionData":case"HomeNativeAdsSectionData":case"HomeOnboardingSectionData":case"HomeOnboardingSectionDataV2":return null;case"HomeYourDJSectionData":{if(!a)return null;const t=(0,ht.f)(s,s.data),{data:n,sectionItems:r}=t,o=r.items[0];if("PlaylistResponseWrapper"===o.content.__typename&&"Playlist"===o.content.data.__typename){const{data:t}=o.content;return(0,z.jsx)(v.KE,{spec:e,shelfTitle:n.title?.text??"",title:t.name,description:t.description??""})}return null}case"HomeFeatureActivationSectionData":case null:case void 0:return null;default:return(0,nt._)(s.data),null}},pt=({spec:e,greeting:t,container:s})=>{const{spec:a,logger:r}=(0,Q.fU)(tt.createDesktopHomeFeatureActivationShelfEventFactory,{});return(0,n.useEffect)((()=>{(0,st.wW)()&&r.logImpression(a.impressionElementFactory().impression())}),[a,r]),(0,z.jsx)(z.Fragment,{children:s.sections.items.map(((s,n)=>(0,z.jsx)(gt,{spec:e,greeting:t,section:s,index:n},`${n}-${s.uri}`)))})};var xt=s(90642),ft=s(5945);const jt=(0,n.memo)((({cardCount:e})=>(0,z.jsx)(ft.X,{isLoading:!0,children:[...new Array(e).keys()].map(((e,t)=>(0,z.jsx)(xt.A,{isLoading:!0},t)))})));var yt=s(28739),vt=s(91577);const Ct=()=>(0,o.W6)(ot.Jw)===ot.pF.ONHOME?(0,z.jsx)(vt.w,{children:(0,z.jsx)(yt.M,{onSearch:!1})}):null;var St=s(5796);const kt=6,Nt=6,bt=6,_t=(0,n.memo)((({shortcutCount:e,shelfCount:t,cardCount:s})=>(0,z.jsx)("section",{"data-testid":"home-page",children:(0,z.jsx)("div",{className:St.Z.home,children:(0,z.jsxs)("div",{className:r()(St.Z.content,"contentSpacing"),children:[(0,z.jsx)($e,{shortcutCount:e}),[...new Array(t).keys()].map(((e,t)=>(0,z.jsx)(jt,{cardCount:s},t)))]})})}))),Et=({spec:e})=>{(0,Ke.z)("home");const{data:t,error:s,loading:n}=(0,Qe.b3)({timeZone:(0,et.L7)()},{cacheTime:et.us,staleTime:et.fS});if(n)return(0,z.jsx)(_t,{shortcutCount:kt,shelfCount:Nt,cardCount:bt});if(null!==s)return(0,z.jsx)(Ge.h,{hasError:!0,errorMessage:c.ag.get("error.generic")});const a=t?.home;return"HomeResponsePayload"!==a?.__typename||0===a.sectionContainer.sections.totalCount||0===a.sectionContainer.sections.items.length?(0,z.jsx)(Ge.h,{hasError:!0,errorMessage:c.ag.get("error.generic")}):(0,z.jsx)("section",{"data-testid":"home-page",children:(0,z.jsx)("div",{className:St.Z.home,children:(0,z.jsx)("div",{className:r()(St.Z.content,"contentSpacing"),children:(0,z.jsx)(pt,{spec:e,greeting:a.greeting?.text??null,container:a.sectionContainer})})})})},Tt=()=>{const{spec:e}=(0,Q.fU)(i.createDesktopHomeEventFactory,{data:{identifier:"home",uri:"spotify:home"}}),t=(0,o.W6)(ot.yg),s=(0,Ze.S)(t),a=(0,re.k)({type:"locale",uri:"home"});return(0,z.jsx)(Q.Nh,{spec:e,children:(0,z.jsxs)(Xe.q,{config:s,children:[(0,z.jsx)(l.$,{children:(0,Ve.nW)({i18n:c.ag,shouldLocalize:a})}),(0,z.jsx)(n.Suspense,{fallback:null,children:(0,z.jsx)(Ct,{})}),(0,z.jsx)(Et,{spec:e})]})})}},39084:(e,t,s)=>{s.d(t,{Pd:()=>o,Wm:()=>r,i9:()=>a});var n=s(3802);const a=["artists","albums","episodes","genres","playlists","podcasts","audiobooks","tracks","users","topResults","podcastAndEpisodes"],r={artists:()=>n.ag.get("search.title.artists"),albums:()=>n.ag.get("search.title.albums"),playlists:()=>n.ag.get("search.title.playlists"),podcasts:()=>n.ag.get("search.title.shows"),episodes:()=>n.ag.get("search.title.episodes"),audiobooks:()=>n.ag.get("search.title.audiobooks"),users:()=>n.ag.get("search.title.profiles"),genres:()=>n.ag.get("search.title.genres-and-moods"),tracks:()=>n.ag.get("search.title.tracks"),podcastAndEpisodes:()=>n.ag.get("search.title.podcast-and-shows"),topResults:()=>n.ag.get("search.row.top-results")},o=["artists","albums","playlists","podcasts","episodes","audiobooks","users","genres"]},28739:(e,t,s)=>{s.d(t,{M:()=>M});var n=s(59496),a=s(84875),r=s.n(a),o=s(61740),i=s(89605),c=s(85830),l=s(94041),u=s(56162),d=s(48710),m=s(83680),h=s(36844),g=s(7681),p=s(50346),x=s(3802),f=s(46997),j=s(21524),y=s(96170),v=s(2831),C=s(41836),S=s(46179);const k="g3Xinb8x23n81ejvS9Uj",N="H6jh9Xd7DNOq3NsLDmCB",b="QO9loc33XC50mMRUCIvf",_="XD3TMuMHmKsfbqieC6q_",E="ZtY42R4YSo_W7VMeAg9m",T="t2K4_iLmAyDtH7mcT5Wy",I="mOLTJ2mxkzHJj6Y9_na_";var P=s(4637);const M=n.memo((function({isSearchChipsEnabled:e=!1,onSearch:t=!0,onClick:s}){const a=(0,i.TH)(),M=(0,i.s0)(),L=(0,n.useRef)(null),w=(0,n.useRef)(null),B=(0,o.I0)(),[{category:O,query:U},D]=(0,S.l)(),[A,H]=(0,n.useState)(U),R=!!O,{scrollNodeRef:F}=n.useContext(j.VX),W=a.pathname.startsWith("/recent-searches"),J=R||W,{spec:q,logger:z}=(0,y.fU)(g.createDesktopSearchInputEventFactory,{}),Y=(0,h.W6)(C.yA),$=(0,c.y1)(((t,s,n)=>{let a;if(n){const{interactionId:e}=z.logInteraction(n);a=e}e?D(t,O,!1,a):D(t,null,s,a),F.current&&(F.current.scrollTop=0)}),200),G=(0,n.useCallback)(((e=!1)=>{L.current!==document.activeElement&&(w.current=document.activeElement,L.current&&L.current.focus()),e&&L.current?.select()}),[]);(0,f.eY)(f.O4.SHOW_SEARCH,(()=>G(!0)));const K=a.pathname.startsWith("/search");(0,n.useEffect)((()=>{!J&&t&&K&&(e&&U||G())}),[U,G,a.key,t,K,J,e]),(0,n.useEffect)((()=>{H(K?U:"")}),[K,U]);return(0,P.jsxs)("div",{className:r()(k,{[_]:!t}),children:[(0,P.jsx)("form",{onSubmit:e=>{e.preventDefault(),A&&z.logInteraction(q.keyStrokeSearch());const t=(0,p.EC)(A);if(t?.type===p.JM.AD){const e=(0,p.HB)(t.id);if(t.id===e)return;B((0,v.HI)(t.id))}else t?M(t.toURLPath(!0),{state:{preventMoveFocus:!0}}):A||M("/search",{state:{preventMoveFocus:!0}});A&&F.current?.querySelector("h1, h2, h3, h4")?.focus()},role:"search",children:(0,P.jsx)(u.D,{variant:"mesto",as:"input",style:{color:l.Snx},ref:L,className:r()(b),value:A,maxLength:800,autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,onChange:e=>{const t=e.currentTarget.value,s=q.keyStrokeChangeSearchQuery({searchQueryString:t});H(t),$(t,J,s)},onKeyDown:e=>{if("Escape"===e.key)if(A){const e=q.hitTextClear();H(""),$("",J,e)}else L.current&&L.current.blur(),w.current instanceof HTMLElement&&w.current.focus()},placeholder:t?x.ag.get("search.search-for-label"):x.ag.get("navbar.search"),onFocus:()=>{e||!J&&t||$(A,J,null)},"data-testid":"search-input",onClick:s})}),(0,P.jsxs)("div",{className:T,children:[(0,P.jsx)("span",{className:N,children:(0,P.jsx)(d.j,{className:I,"aria-hidden":!0,iconSize:Y?16:24})}),A&&(0,P.jsx)("button",{className:E,onClick:()=>{L.current&&L.current.focus();const e=q.hitTextClear();H(""),$("",J,e)},"aria-label":x.ag.get("search.a11y.clear-input"),children:(0,P.jsx)(m.k,{className:I,iconSize:Y?16:24})})]})]})}))},46179:(e,t,s)=>{s.d(t,{l:()=>i});var n=s(59496),a=s(89605),r=s(39084);const o=e=>r.i9.find((t=>t===e));function i(){const e=(0,a.s0)(),t=(0,a.bS)("/search/:query"),s=(0,a.bS)("/search/:query/:category"),r=(0,n.useCallback)((function(t,s,n,a){const r=a?{interactionId:a,preventMoveFocus:!0}:{preventMoveFocus:!0},o=["/search"];t&&(o.push(encodeURIComponent(t)),s&&o.push(s));const i=o.join("/");e(i,n?{state:r}:{state:r,replace:!0})}),[e]);return[{query:function(e){try{return decodeURIComponent(e)}catch{return e}}(t?.params.query??s?.params?.query??""),category:o(s?.params.category)},r]}}}]);
//# sourceMappingURL=home-v2.js.map