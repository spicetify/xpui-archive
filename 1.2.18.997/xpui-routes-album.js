"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[2342],{54985:(e,a,i)=>{i.d(a,{g:()=>l});var n=i(51697),t=i(17237),s=i(4637);const l=({children:e})=>(0,s.jsx)(n.D,{variant:"mesto",className:t.Z.pretitle,children:e})},22456:(e,a,i)=>{i.d(a,{x:()=>m});var n=i(59496),t=i(33960),s=i(35960),l=i(7991),r=i(57678),o=i(39667),c=i(8591),d=i(4637);const m=({children:e,action:a,uri:i})=>{const m=(0,s.g)(),u=(0,r.j)();let g;const h=()=>{const e={triggerId:c.K,triggerAction:{type:a}};o.y.set((a=>({...a,...e}))),u.storeAction(l.wH,{operation:t.pT.ADD,uris:[i]})};try{g=n.Children.only(e)}catch(a){return(0,d.jsx)(d.Fragment,{children:e})}return m?n.cloneElement(g,{onClick:h}):(0,d.jsx)(d.Fragment,{children:e})}},31885:(e,a,i)=>{i.r(a),i.d(a,{default:()=>Me});var n=i(59496),t=i(83792),s=i(97601),l=i(51697),r=i(88559),o=i(21054),c=i(9990),d=i(87508),m=i(30099),u=i(28489),g=i(26156),h=i(70304),k=i(7018),p=i(20456),x=i(29915),b=i(75132),j=i(68224),y=i(89723);const v={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"queryAlbumMerch"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"albumUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"merch"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"20"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumMerchItem"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumMerchItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Merch"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"price"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]};var f=i(72009);const N="iEG0moJ3mt1_j9Lho7MA";var C=i(4637);const S=({albumName:e,albumURI:a})=>{const{data:i}=(n={uri:a},t={cacheTime:5*y.y},(0,y.a)(v,n,t));var n,t;const s=i?.albumUnion&&"merch"in i.albumUnion?i?.albumUnion?.merch?.items:[];return s&&s?.length>0?(0,C.jsx)("div",{className:"contentSpacing",children:(0,C.jsx)("div",{className:N,children:(0,C.jsx)(f.s,{id:e,uri:a,merchItems:s,merchVariant:"Album page merch items"})})}):null};var I=i(23419),U=i(53851),F=i(40981),w=i(62768),M=i(4635),A=i(13138),P=i(24966),T=i(34046),D=i(62510),L=i(64689),V=i(46927),B=i(98440),O=i(99750),z=i(40006),E=i(22456),R=i(26473),q=i(18112),_=i(7442),Q=i(34198),Z=i(93019),$=i(47948),H=i(99550);const K=n.memo((function({uri:e,togglePlay:a,isPlaying:i,isActive:t,spec:s,logger:l,backgroundColor:r,name:o,artists:d,isPlayable:u,sharingInfo:h}){const k=(0,q.o)(),p=(0,_.k)(),x=(0,L.y)(),b=(0,n.useMemo)((()=>s.actionBarFactory()),[s]),[y,v]=(0,L.Z)(e),f=(0,n.useCallback)((()=>{const n=(0,Q.aK)({isPlaying:i,isActive:t,spec:b.playButtonFactory(),logger:l,uri:e});a({loggingParams:n})}),[i,t,a,b,l,e]),N=(0,n.useCallback)((async()=>{let a;const i=b.saveButtonFactory();a=y?i.hitDislike({itemToBeDisliked:e}):i.hitLike({itemToBeLiked:e}),l.logInteraction(a),k({targetUri:e,intent:y?"unsave":"save",type:"click"});try{await v(!y)}catch{}}),[k,e,y,v,b,l]),S=(0,c.W6)($.eKc,{loadingValue:!1}),I=(0,R.j)();return(0,C.jsx)(V.o,{backgroundColor:r,children:(0,C.jsxs)(V.F,{children:[(0,C.jsx)(j.$,{onClick:f,disabled:!u,isPlaying:i,size:I,uri:e}),S&&(0,C.jsx)(T.Nh,{spec:b,children:(0,C.jsx)(H.K,{entityName:o,contextUri:e,activationPlacement:"bottomEnd",size:I})}),(0,C.jsx)(E.x,{uri:e,action:Z.sr.SAVE_ALBUM,children:(0,C.jsx)(B.H,{isAdded:!!y,onClick:N,disabled:!p&&!x?.getCapabilities().canModifyOffline,size:I})}),(0,C.jsx)(O.o,{uri:e,isFollowing:!!y,onClick:(a,i)=>(0,Q.l7)(i,b.downloadButtonFactory(),l,e),onFollow:N,size:I}),(0,C.jsx)(F.ClickToggleContextMenu,{onShow:()=>(0,Q.qq)(b,l),menu:(0,C.jsx)(g.Y,{uri:e,artistUri:d?.[0]?.uri,sharingInfo:h}),children:(0,C.jsx)(z.MoreButton,{label:m.ag.get("more.label.context",o),size:I})})]})})}));var Y=i(56946);const W=864e5,X=365.25*W;var G=i(54985),J=i(12463),ee=i(72951),ae=i(7554),ie=i(6285),ne=i(1541),te=i(20549),se=i(34997);const le="TCmZzqInstJMZjkHgnw3",re="PeNI572tTpqsN23o3QhJ",oe="oUsSfFiifMPXqW0kHjR6",ce="XKvEMQZlPfPncTqiitM5",de="GdbPVlmUCW0Q6ZZ0z0wh",me="Hu7O5y7x5c7wUYFbnIoS",ue=n.memo((function(e){const{images:a,title:i,isOpen:t,onClose:s}=e,l=(0,n.useMemo)((()=>(0,se.X)(a,{desiredSize:1e4})),[a]);return l?(0,C.jsx)(ne.Z,{className:le,isOpen:t,onRequestClose:s,animation:{modal:{base:ce,afterOpen:de,beforeClose:me}},animated:!0,children:(0,C.jsxs)("div",{style:{"--image-width":`${l.width}px`,"--image-height":`${l.height}px`},className:re,children:[(0,C.jsx)(te.E,{loading:"eager",alt:i,src:l.url,className:oe}),(0,C.jsx)(ie.o,{onClick:s,semanticColor:"textBase",children:m.ag.get("web-player.cover-art-modal.close")})]})}):null}));var ge=i(14887),he=i(74433),ke=i(30477);const pe=({releases:e})=>(0,C.jsx)(he.v,{children:e.map((e=>(0,C.jsx)(ke.s,{role:"menuitem",to:(0,ge.EC)(e.uri).toURLPath(!0),children:e.name},e.uri)))});var xe=i(47419),be=i(11879),je=i(915);const ye="n8Bz0c0v17whD3KfMdOk",ve="zddjxV2lX9ukNM5QXloA",fe="lVqlPjQLuQhK2flsxB78",Ne="O_EguRjsZ4uI1hHamkOA",Ce="jcaQQxoVnuuhtVwDJU1R",Se="fLS8v3_EfBadEerbGVoR",Ie="in4OjUTflcsoj9RUpf05",Ue=n.lazy((()=>i.e(4316).then(i.bind(i,54316))));function Fe(e){switch(e){case be.V.Single:return m.ag.get("single");case be.V.Ep:return m.ag.get("ep");case be.V.Compilation:return m.ag.get("compilation");case be.V.Album:default:return m.ag.get("album")}}const we=({uri:e,album:a})=>{const i=(0,s.TH)(),{spec:b,logger:y,UBIFragment:v}=(0,T.fU)(d.w,{data:{uri:e}}),f=(0,n.useMemo)((()=>b.trackListFactory()),[b]),N=(0,n.useMemo)((()=>b.moreByArtistShelfFactory()),[b]),M=a.moreAlbumsByArtist,L=parseInt(new URLSearchParams((0,s.TH)().search).get("index")||"0",10),V=(0,I.Y)(e),{usePlayContextItem:B,togglePlay:O,isPlaying:z,isActive:E}=(0,A.n)({uri:V},{featureIdentifier:"album"}),R=(0,n.useCallback)(((e,a)=>{if(b){const e=b.headerFactory().artistNameFactory().hitUiNavigate({destination:a.creator.uri});y.logInteraction(e)}}),[y,b]),{isOpen:q,openModal:_,closeModal:Q}=(()=>{const[e,a]=(0,n.useState)(!1);return{isOpen:e,openModal:(0,n.useCallback)((()=>a(!0)),[]),closeModal:(0,n.useCallback)((()=>a(!1)),[])}})(),Z=(0,c.W6)($.DUY,{loadingValue:!1})?{onClick:_,ariaLabel:m.ag.get("web-player.album.open_coverart_modal")}:{},H=(0,n.useCallback)((()=>new URLSearchParams(i.search.slice(1)).get("highlight")||""),[i.search]),ie=a.uri,ne=a.name,te=a.albumType,se=a.release?.date,le=a.nrTracks,re=a.images,oe=a.extractedColors?.colorRaw.hex,ce=a.artists,de=a.isPlayable,me=a.isCatalogueRestricted,ge=a.copyright.items,he=a.courtesyLine,ke=a.duration.durationMs,xe=a.duration.isEstimate,be=H(),we=(0,t.v9)(ae.Gg),Me=we.overrides?.locale??m.ag.getLocale(),Ae=(0,ee.k)({uri:e,type:"locale"}),Pe=(0,P.OT)({albumName:ne,albumType:te,albumArtists:ce.map((e=>e.name)).join(m.ag.getSeparator()),shouldLocalize:Ae,i18n:m.ag});(0,U.Y5)(oe||null);const Te=function(e){return(0,n.useMemo)((()=>{if(!e?.date)return null;if("day"===e.precision){const a=new Date(e.date),i=(new Date).getTime()-a.getTime(),n=i%X;return n<3.5*W||n>312552e5?Math.round(i/X):null}return null}),[e])}(a.release);return(0,C.jsxs)("section",{className:ye,"data-testid":"album-page",children:[(0,C.jsx)(h.$,{children:Pe}),null!==Te?(0,C.jsx)(n.Suspense,{fallback:null,children:(0,C.jsx)(Ue,{colorLight:a?.extractedColors?.colorLight.hex,colorDark:a?.extractedColors?.colorDark.hex,name:ne,years:Te})}):null,(0,C.jsxs)(k.gF,{backgroundColor:oe,children:[(0,C.jsxs)(p.W,{children:[(0,C.jsx)(j.$,{size:"medium",onClick:()=>O(),disabled:!de,isPlaying:z,uri:e}),(0,C.jsx)(x.i,{text:ne,dragUri:e,dragLabel:ne})]}),(0,C.jsx)(F._,{menu:(0,C.jsx)(g.Y,{uri:a.uri,artistUri:ce?.[0]?.uri,sharingInfo:a.sharingInfo}),children:(0,C.jsx)(k.Oz,{dragUri:ie,images:re,name:ne,placeholderType:"album",...Z})}),(0,C.jsxs)(k.sP,{children:[(0,C.jsx)(G.g,{children:Fe(te)}),(0,C.jsx)(F._,{menu:(0,C.jsx)(g.Y,{uri:a.uri,artistUri:ce?.[0]?.uri,sharingInfo:a.sharingInfo}),children:(0,C.jsx)(k.xd,{dragUri:a.uri,dragLabel:a.name,scaleAtMinWidth:k.vz,children:ne})}),(0,C.jsx)(k.QS,{creators:ce,onCreatorClick:R,releaseDate:se,totalItems:le,durationMilliseconds:ke,isEstimatedDuration:xe,hasTracks:!0})]})]}),(0,C.jsx)(K,{backgroundColor:oe,uri:e,togglePlay:O,isPlaying:z,isActive:E,spec:b,logger:y,sharingInfo:a.sharingInfo,name:a.name,artists:a.artists,isPlayable:a.isPlayable}),me?(0,C.jsxs)("div",{className:ve,children:[(0,C.jsx)(l.D,{as:"h2",variant:"cello",className:fe,children:m.ag.get("windowed.product-album-header")}),(0,C.jsx)("div",{className:Ne,children:m.ag.get("windowed.product-album-description")})]}):null,(0,C.jsxs)("div",{className:"contentSpacing",children:[(0,C.jsx)(v,{spec:f,children:(0,C.jsx)(Y.L,{ariaLabel:ne,nrTracks:(0,je.y)(a.discs)?a.discs.totalCount+le:le,discs:a.discs,albumUri:ie,highlightUri:be,scrollToIndex:L,usePlayContextItem:B,initalTracks:a.items})}),(0,C.jsxs)("div",{className:Ie,children:[(0,C.jsxs)("div",{children:[se&&(0,C.jsx)(l.D,{as:"p",variant:"mesto",children:(0,D.BI)((0,D.RX)(se),Me,{year:"numeric",month:"long",day:"numeric"})}),(0,C.jsx)(w.k,{copyrights:ge,courtesyLine:he})]}),a.releases.items.length>0&&(0,C.jsx)(F.x,{menu:(0,C.jsx)(pe,{releases:a.releases.items}),children:(e,i,n)=>(0,C.jsxs)("button",{ref:n,className:Se,type:"button",onClick:i,children:[(0,C.jsx)(l.D,{variant:"mesto",children:m.ag.get("album-page.more-releases",a.releases.items.length)}),e?(0,C.jsx)(r.U,{iconSize:16}):(0,C.jsx)(o.i,{iconSize:16})]})})]})]}),(0,C.jsx)(S,{albumName:ne,albumURI:ie}),(0,C.jsx)(C.Fragment,{children:M?.length>0&&(0,C.jsx)("div",{className:"contentSpacing",children:(0,C.jsx)(v,{spec:N,children:(0,C.jsx)(J.q,{index:0,id:"more-albums",className:Ce,title:m.ag.get("album-page.more-by-artist",ce?.[0]?.name),total:M.length,seeAllUri:`${ce?.[0]?.uri.replace("artist","app:artist")}:discography`,seeAllLabel:m.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,children:M.map(((e,a)=>(0,C.jsx)(u.i,{index:a,artists:ce,images:e.images||[],name:e.name,uri:e.uri,year:e.year,type:e.albumType,sharingInfo:e.sharingInfo},e.uri)))})})})}),(0,C.jsx)(ue,{title:Pe,isOpen:q,onClose:Q,images:re})]})},Me=n.memo((function(){const{albumId:e}=(0,s.UO)(),a=`spotify:album:${e}`,{loading:i,error:n,data:t,canLoadOffline:l}=(0,xe.j)(a);return i||!t?(0,C.jsx)(b.h,{hasError:null!==n,loadOffline:l,errorMessage:m.ag.get("error.not_found.title.album")}):(0,C.jsx)(M.fd,{surface:M.Tg.ALBUM,uris:[a],children:(0,C.jsx)(we,{uri:a,album:t})})}))},62768:(e,a,i)=>{i.d(a,{k:()=>l});var n=i(51697);const t="rTMkDBDp47Eo12ZEQv4U";var s=i(4637);const l=({copyrights:e,courtesyLine:a})=>{const i=(e||[]).map(((e,a)=>{const i=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let t;return t="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,(0,s.jsx)(n.D,{as:"p",variant:"finale",dir:"auto",children:`${t} ${i}`},a)}));return a&&i.unshift((0,s.jsx)(n.D,{as:"p",variant:"finale",dir:"auto",children:a},i.length)),(0,s.jsx)("div",{className:t,children:i})}}}]);
//# sourceMappingURL=xpui-routes-album.js.map