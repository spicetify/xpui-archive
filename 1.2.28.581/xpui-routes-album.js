"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[2342],{69082:(e,a,i)=>{i.d(a,{g:()=>s});var n=i(87190),l=i(64103),t=i(11527);const s=({children:e})=>(0,t.jsx)(n.D,{variant:"mesto",className:l.Z.pretitle,children:e})},67781:(e,a,i)=>{i.d(a,{x:()=>m});var n=i(50959),l=i(87296),t=i(84726),s=i(61153),r=i(36545),o=i(24889),c=i(71716),d=i(11527);const m=({children:e,action:a,uri:i})=>{const m=(0,t.g)(),u=(0,r.j)();let g;const h=()=>{const e={triggerId:c.K,triggerAction:{type:a}};o.y.set((a=>({...a,...e}))),u.storeAction(s.wH,{operation:l.pT.ADD,uris:[i]})};try{g=n.Children.only(e)}catch(a){return(0,d.jsx)(d.Fragment,{children:e})}return m?n.cloneElement(g,{onClick:h}):(0,d.jsx)(d.Fragment,{children:e})}},35483:(e,a,i)=>{i.r(a),i.d(a,{default:()=>ia});i(55330);var n=i(50959),l=i(84875),t=i.n(l),s=i(75390),r=i(92389),o=i(76917),c=i(87190),d=i(28808),m=i(88179),u=i(29611),g=i(40362),h=i(5701),b=i(49204),k=i(74069),x=i(8968),p=i(22866),v=i(17703),j=i(61925),y=i(77864),f=i(79258),N=i(1620);const S={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"queryAlbumMerch"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"albumUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"merch"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"20"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumMerchItem"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumMerchItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Merch"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"price"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]};var w=i(84268);const I="iEG0moJ3mt1_j9Lho7MA";var C=i(11527);const A=({albumName:e,albumURI:a})=>{const{data:i}=(n={uri:a},l={cacheTime:5*N.y},(0,N.a)(S,n,l));var n,l;const t=i?.albumUnion&&"merch"in i.albumUnion?i?.albumUnion?.merch?.items:[];return t&&t?.length>0?(0,C.jsx)("div",{className:"contentSpacing",children:(0,C.jsx)("div",{className:I,children:(0,C.jsx)(w.s,{id:e,uri:a,merchItems:t,merchVariant:"Album page merch items"})})}):null};var U=i(43095),F=i(65348),L=i(6473),M=i(19320),P=i(76371),T=i(45503),D=i(22038),B=i(1186),E=i(59242),R=i(91733),V=i(52523),z=i(49597),O=i(83524),_=i(16254),q=i(6962),Q=i(84816),Y=i(96688),Z=i(76999),H=i(95018),W=i(67781),K=i(38776),X=i(28528),$=i(29729),J=i(43113),G=i(9441),ee=i(54472),ae=i(36208);const ie="n8Bz0c0v17whD3KfMdOk",ne="zddjxV2lX9ukNM5QXloA",le="lVqlPjQLuQhK2flsxB78",te="O_EguRjsZ4uI1hHamkOA",se="jcaQQxoVnuuhtVwDJU1R",re="fLS8v3_EfBadEerbGVoR",oe="in4OjUTflcsoj9RUpf05",ce="xaPiqLlyzjAbzAaXfU1y",de="BqrUxFd9resDqUUdS4zQ",me="vveb4Rn0dK_r8YUM7L_n",ue=n.memo((function({uri:e,togglePlay:a,isPlaying:i,isActive:l,spec:t,logger:s,backgroundColor:r,name:o,artists:c,isPlayable:d,sharingInfo:m}){const u=(0,X.o)(),g=(0,$.k)(),b=(0,_.y)(),x=(0,n.useMemo)((()=>t.actionBarFactory()),[t]),[p,v]=(0,_.Z)(e),j=(0,n.useCallback)((()=>{const n=(0,J.aK)({isPlaying:i,isActive:l,spec:x.playButtonFactory(),logger:s,uri:e});a({loggingParams:n})}),[i,l,a,x,s,e]),y=(0,n.useCallback)((async()=>{let a;const i=x.saveButtonFactory();a=p?i.hitDislike({itemToBeDisliked:e}):i.hitLike({itemToBeLiked:e}),s.logInteraction(a),u({targetUri:e,intent:p?"unsave":"save",type:"click"});try{await v(!p)}catch{}}),[u,e,p,v,x,s]),N=(0,ae.Q)(),S=(0,K.j)();return(0,C.jsx)(Q.o,{backgroundColor:r,children:(0,C.jsxs)(Q.F,{children:[(0,C.jsx)(f.$,{onClick:j,disabled:!d,isPlaying:i,size:S,uri:e}),N&&(0,C.jsx)(E.Nh,{spec:x,children:(0,C.jsx)(ee.K,{entityName:o,contextUri:e,activationPlacement:"bottomEnd",size:S})}),(0,C.jsx)(W.x,{uri:e,action:G.sr.SAVE_ALBUM,children:(0,C.jsx)(Y.H,{isAdded:!!p,onClick:y,disabled:!g&&!b?.getCapabilities().canModifyOffline,size:S})}),(0,C.jsx)(Z.o,{uri:e,isFollowing:!!p,onClick:(a,i)=>(0,J.l7)(i,x.downloadButtonFactory(),s,e),onFollow:y,size:S}),(0,C.jsx)(M.yj,{onShow:()=>(0,J.qq)(x,s),menu:(0,C.jsx)(k.Y,{uri:e,artistUri:c?.[0]?.uri,sharingInfo:m}),children:(0,C.jsx)(H.z,{label:h.ag.get("more.label.context",o),size:S})}),(0,C.jsx)("div",{className:me,children:(0,C.jsx)(z.F,{property:q.FM,renderNewExperience:()=>(0,C.jsx)(O.A,{options:[],onSelect:()=>{},selected:null,enableViewModeMenu:!0})})})]})})}));var ge=i(8899);const he=864e5,be=365.25*he;var ke=i(69082),xe=i(54663),pe=i(15880),ve=i(19916),je=i(57409),ye=i(4704),fe=i(90343);var Ne=i(18561),Se=i(21355),we=i(90880),Ie=i(90763),Ce=i(84726),Ae=i(43206),Ue=i(28307),Fe=i(65939),Le=i(47001);var Me=i(42955),Pe=i(42744),Te=i(70173),De=i(44436),Be=i(13452),Ee=i(99993);const Re="TCmZzqInstJMZjkHgnw3",Ve="PeNI572tTpqsN23o3QhJ",ze="oUsSfFiifMPXqW0kHjR6",Oe="XKvEMQZlPfPncTqiitM5",_e="GdbPVlmUCW0Q6ZZ0z0wh",qe="Hu7O5y7x5c7wUYFbnIoS",Qe=n.memo((function(e){const{images:a,title:i,isOpen:l,onClose:t}=e,s=(0,n.useMemo)((()=>(0,Ee.X)(a,{desiredSize:1e4})),[a]);return s?(0,C.jsx)(De.Z,{className:Re,isOpen:l,onRequestClose:t,animation:{modal:{base:Oe,afterOpen:_e,beforeClose:qe}},animated:!0,children:(0,C.jsxs)("div",{style:{"--image-width":`${s.width}px`,"--image-height":`${s.height}px`},className:Ve,children:[(0,C.jsx)(Be.E,{loading:"eager",alt:i,src:s.url,className:ze}),(0,C.jsx)(Te.o,{onClick:t,semanticColor:"textBase",children:h.ag.get("web-player.cover-art-modal.close")})]})}):null}));var Ye=i(59543),Ze=i(74753),He=i(67495),We=i(34188);const Ke=({releases:e})=>(0,C.jsx)(He.v,{children:e.map((e=>(0,C.jsx)(We.s,{role:"menuitem",to:(0,we.EC)(e.uri).toURLPath(!0),children:e.name},e.uri)))});var Xe=i(61308),$e=i(95736),Je=i(18621);const Ge=n.lazy((()=>i.e(5601).then(i.bind(i,95601))));function ea(e){switch(e){case $e.V.Single:return h.ag.get("single");case $e.V.Ep:return h.ag.get("ep");case $e.V.Compilation:return h.ag.get("compilation");case $e.V.Audiobook:return h.ag.get("card.tag.audiobook");case $e.V.Album:default:return h.ag.get("album")}}const aa=({uri:e,album:a})=>{const i=(0,o.TH)(),{spec:l,logger:y,UBIFragment:N}=(0,E.fU)(g.w,{data:{uri:e}}),S=(0,n.useMemo)((()=>l.trackListFactory()),[l]),w=(0,n.useMemo)((()=>l.moreByArtistShelfFactory()),[l]),I=a.moreAlbumsByArtist,T=parseInt(new URLSearchParams((0,o.TH)().search).get("index")||"0",10),z=(0,F.Y)(e),{usePlayContextItem:O,togglePlay:_,isPlaying:q,isActive:Q}=(0,D.n)({uri:z},{featureIdentifier:"album"}),Y=(0,n.useCallback)(((e,a)=>{if(l){const e=l.headerFactory().artistNameFactory().hitUiNavigate({destination:a.creator.uri});y.logInteraction(e)}}),[y,l]),{isOpen:Z,openModal:H,closeModal:W}=(()=>{const[e,a]=(0,n.useState)(!1);return{isOpen:e,openModal:(0,n.useCallback)((()=>a(!0)),[]),closeModal:(0,n.useCallback)((()=>a(!1)),[])}})(),K=(0,u.W6)(fe.DUY,{loadingValue:!1})?{onClick:H,ariaLabel:h.ag.get("web-player.album.open_coverart_modal")}:{},X=(0,n.useCallback)((()=>new URLSearchParams(i.search.slice(1)).get("highlight")||""),[i.search]),$=a.uri,J=a.name,G=a.albumType,ee=a.release?.date,ae=a.release?.precision,me=a.nrTracks,Te=a.images,De=a.extractedColors?.colorRaw.hex,Be=a.artists,Ee=a.isPlayable,Re=a.isCatalogueRestricted,Ve=a.copyright.items,ze=a.courtesyLine,Oe=a.duration.durationMs,_e=a.duration.isEstimate,qe=X(),He=(0,r.v9)(Le.Gg),We=He.overrides?.locale??h.ag.getLocaleForTranslation(),Xe=(0,Pe.k)({uri:e,type:"locale"}),$e=(0,B.OT)({albumName:J,albumType:G,albumArtists:Be.map((e=>e.name)).join(h.ag.getSeparator()),shouldLocalize:Xe,i18n:h.ag});(0,L.Y5)(De||null);const{albumId:aa=""}=(0,o.UO)(),ia=(0,Ze.I)(aa,"album");(0,Me.W)(e);const{albumILRAboveEnabled:na,albumILRBelowEnabled:la}=(()=>{const e=(0,ye.E)(),a=(0,o.TH)(),i=(0,u.W6)(fe.t2x),n=(0,ve.vI)(je.k.ILRAlbumAbove,a),l=(0,ve.vI)(je.k.ILRAlbumBelow,a);return e?{albumILRAboveEnabled:!l&&(n||i===fe.wPk.ABOVE),albumILRBelowEnabled:!n&&(l||i===fe.wPk.BELOW)}:{albumILRAboveEnabled:!1,albumILRBelowEnabled:!1}})(),ta=function(e){return(0,n.useMemo)((()=>{if(!e?.date)return null;if("day"===e.precision){const a=new Date(e.date),i=(new Date).getTime()-a.getTime(),n=i%be;return n<3.5*he||n>312552e5?Math.round(i/be):null}return null}),[e])}(a.release),{isCompactMode:sa}=(0,U.mJ)(),ra=(e=>{const a=(0,Ce.g)(),i=(0,Ae.s4)(),l=(0,u.W6)(fe.t2x),t=(0,r.v9)(Le.n5),s=(0,r.v9)(Fe.rZ);return(0,n.useCallback)((async()=>{if(!(0,we.YF)(e))return;const n={category:"album_ilr_component_visible",action:"viewed",variant:l,label:"dwp",os:(0,Ue.y)(),context:e,country:t?s:"",sp_t:(0,Ie.vQ)("sp_t")};a?i.send((0,Se.k)(n)):i.send((0,Ne.x)(n))}),[e,s,i,a,t,l])})(e),{ref:oa,inView:ca}=(0,s.YD)({threshold:0});return(0,n.useEffect)((()=>{ca&&ra()}),[ca,ra]),(0,C.jsxs)("section",{className:ie,"data-testid":"album-page",children:[(0,C.jsx)(x.$,{children:$e}),null!==ta?(0,C.jsx)(n.Suspense,{fallback:null,children:(0,C.jsx)(Ge,{colorLight:a?.extractedColors?.colorLight.hex,colorDark:a?.extractedColors?.colorDark.hex,name:J,years:ta})}):null,(0,C.jsxs)(p.gF,{backgroundColor:De,children:[(0,C.jsxs)(v.W,{children:[(0,C.jsx)(f.$,{size:"medium",onClick:()=>_(),disabled:!Ee,isPlaying:q,uri:e}),(0,C.jsx)(j.i,{text:J,dragUri:e,dragLabel:J})]}),(0,C.jsx)(M._P,{menu:(0,C.jsx)(k.Y,{uri:a.uri,artistUri:Be?.[0]?.uri,sharingInfo:a.sharingInfo}),children:(0,C.jsx)(p.Oz,{dragUri:$,images:Te,name:J,placeholderType:"album",...K})}),(0,C.jsxs)(p.sP,{children:[(0,C.jsx)(ke.g,{children:ea(G)}),(0,C.jsx)(M._P,{menu:(0,C.jsx)(k.Y,{uri:a.uri,artistUri:Be?.[0]?.uri,sharingInfo:a.sharingInfo}),children:(0,C.jsx)(p.xd,{dragUri:a.uri,dragLabel:a.name,scaleAtMinWidth:p.vz,children:J})}),(0,C.jsx)(p.QS,{creators:Be,onCreatorClick:Y,releaseDate:ee,releaseDatePrecision:ae,totalItems:me,durationMilliseconds:Oe,isEstimatedDuration:_e,hasTracks:!0})]})]}),(0,C.jsx)(ue,{backgroundColor:De,uri:e,togglePlay:_,isPlaying:q,isActive:Q,spec:l,logger:y,sharingInfo:a.sharingInfo,name:a.name,artists:a.artists,isPlayable:a.isPlayable}),Re?(0,C.jsxs)("div",{className:ne,children:[(0,C.jsx)(c.D,{as:"h2",variant:"cello",className:le,children:h.ag.get("windowed.product-album-header")}),(0,C.jsx)("div",{className:te,children:h.ag.get("windowed.product-album-description")})]}):null,(0,C.jsxs)("div",{className:"contentSpacing",children:[(0,C.jsx)(N,{spec:S,children:(0,C.jsx)(ge.L,{ariaLabel:J,nrTracks:(0,Je.y)(a.discs)?a.discs.totalCount+me:me,discs:a.discs,albumUri:$,highlightUri:qe,scrollToIndex:T,usePlayContextItem:O,initalTracks:a.items,isCompactMode:sa})}),(0,C.jsxs)("div",{className:oe,children:[(0,C.jsxs)("div",{children:[ee&&(0,C.jsx)(c.D,{as:"p",variant:"mesto",children:(0,V.BI)((0,V.RX)(ee),We,{year:"numeric",month:"long",day:"numeric"},ae)}),(0,C.jsx)(P.k,{copyrights:Ve,courtesyLine:ze})]}),a.releases.items.length>0&&(0,C.jsx)(M.xV,{menu:(0,C.jsx)(Ke,{releases:a.releases.items}),children:(e,i,n)=>(0,C.jsxs)("button",{ref:n,className:re,type:"button",onClick:i,children:[(0,C.jsx)(c.D,{variant:"mesto",children:h.ag.get("album-page.more-releases",a.releases.items.length)}),e?(0,C.jsx)(d.U,{size:"small"}):(0,C.jsx)(m.i,{size:"small"})]})})]})]}),na&&(0,C.jsx)("div",{className:t()("contentSpacing",ce),"data-testid":"placeholder-album-ilr-above",children:(0,C.jsx)(xe.y,{subtitle:h.ag.get("internal-link-recommender.based-on-this-album"),uri:a.uri,inViewRef:oa,entityType:R.p.ALBUM})}),(0,C.jsx)(A,{albumName:J,albumURI:$}),(0,C.jsxs)(C.Fragment,{children:[I?.length>0&&(0,C.jsx)("div",{className:"contentSpacing",children:(0,C.jsx)(N,{spec:w,children:(0,C.jsx)(pe.q,{index:0,id:"more-albums",className:se,title:h.ag.get("album-page.more-by-artist",Be?.[0]?.name),total:I.length,seeAllUri:`${Be?.[0]?.uri.replace("artist","app:artist")}:discography`,seeAllLabel:h.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,children:I.map(((e,a)=>(0,C.jsx)(b.i,{index:a,artists:Be,images:e.images||[],name:e.name,uri:e.uri,year:e.year,type:e.albumType,sharingInfo:e.sharingInfo},e.uri)))})})}),la&&(0,C.jsx)("div",{className:t()("contentSpacing",ce),"data-testid":"placeholder-album-ilr-below",children:(0,C.jsx)(xe.y,{subtitle:h.ag.get("internal-link-recommender.based-on-this-album"),uri:a.uri,inViewRef:oa,entityType:R.p.ALBUM})})]}),ia&&(0,C.jsx)("div",{className:t()("contentSpacing",de),children:(0,C.jsx)(Ye.J,{title:h.ag.get("lfc.album.title"),uri:e})}),(0,C.jsx)(Qe,{title:$e,isOpen:Z,onClose:W,images:Te})]})},ia=n.memo((function(){const{albumId:e}=(0,o.UO)(),a=`spotify:album:${e}`,{loading:i,error:n,data:l,canLoadOffline:t}=(0,Xe.j)(a);return i||!l?(0,C.jsx)(y.h,{hasError:null!==n,loadOffline:t,errorMessage:h.ag.get("error.not_found.title.album")}):(0,C.jsx)(T.fd,{surface:T.Tg.ALBUM,uris:[a],children:(0,C.jsx)(aa,{uri:a,album:l})})}))}}]);
//# sourceMappingURL=xpui-routes-album.js.map