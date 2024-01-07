"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9540],{87278:(e,n,i)=>{i.d(n,{g:()=>r});var a=i(89518),t=i(55954),l=i(4637);const r=({children:e})=>(0,l.jsx)(a.D,{variant:"mesto",className:t.Z.pretitle,children:e})},60944:(e,n,i)=>{i.d(n,{x:()=>u});var a=i(59496),t=i(55513),l=i(21218),r=i(25022),s=i(75376),d=i(28364),o=i(87829),m=i(4637);const u=({children:e,action:n,uri:i})=>{const u=(0,l.g)(),c=(0,s.j)();let k;const v=()=>{const e={triggerId:o.K,triggerAction:{type:n}};d.y.set((n=>({...n,...e}))),c.storeAction(r.wH,{operation:t.pT.ADD,uris:[i]})};try{k=a.Children.only(e)}catch(n){return(0,m.jsx)(m.Fragment,{children:e})}return u?a.cloneElement(k,{onClick:v}):(0,m.jsx)(m.Fragment,{children:e})}},90308:(e,n,i)=>{i.r(n),i.d(n,{AlbumPrerelease:()=>Oe});var a=i(84875),t=i.n(a),l=i(52529),r=i(89518),s=i(36820),d=i(50834),o=i(99334),m=i(71308),u=i(7431),c=i(59496),k=i(94937),v=i(44858),p=i(85730);function S(e){const n=new Date;return(e instanceof Date?e:new Date(e)).getTime()-n.getTime()}var N=i(51418),y=i(27415),g=i(4637);const b=({uri:e})=>{const n=(0,y.D)(e),{spec:i,logger:a}=(0,p.fU)(k.j,{data:{uri:e||""}}),t=(0,c.useCallback)((()=>{e&&(a.logInteraction(i.actionBarFactory().preSaveButtonFactory().hitUiNavigate({destination:e})),n())}),[n,i,e,a]);return e?(0,g.jsx)(N.D,{onClick:t,children:d.ag.get("web-player.album-prerelease.listen_now")}):null};var F=i(64641),f=i(60944),h=i(56728);const x=3e5,P=36e5;var R=i(47973);const D={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"preReleaseMutationPayload"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreReleasePayload"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"preRelease"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreRelease"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"preSaved"}}]}}]}}]}}]},T={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"AlbumPrereleasePreSavedState"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lookup"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uris"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"uri"}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreReleaseResponseWrapper"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreRelease"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"preSaved"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}}]}}]}}]}}]}}]}}]},j={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"PreSaveAlbumPrerelease"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"preSavePreReleaseToLibrary"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"preReleaseMutationPayload"}}]}}]}},...D.definitions]},C={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"RemovePreSaveAlbumPrerelease"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"removePreReleaseFromLibrary"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"preReleaseMutationPayload"}}]}}]}},...D.definitions]},_=e=>{const{data:n,invalidate:i,loading:a}=(t={uri:e},l={staleTime:x,cacheTime:P},(0,R.a)(T,t,l));var t,l;return{isPreSaved:(0,c.useMemo)((()=>{if(!n)return!1;for(const i of n.lookup)if("PreReleaseResponseWrapper"===i.__typename&&"PreRelease"===i.data.__typename&&i.data.uri===e)return i.data.preSaved;return!1}),[n,e]),isLoading:a,invalidate:i}};var I=i(9102),A=i(30093),L=i(69282),w=i(9154),U=i(27588);const V=(e,n)=>{const{request:i}=(0,c.useContext)(A.Ax),{enqueueSnackbar:a}=(0,U.D)();return(0,I.useMutation)((async n=>{const a=n?j:C,t=await(0,L.J)(i,a,{uri:e}),l=t?.data;if(l)return function(e){let n;if("preSavePreReleaseToLibrary"in e&&"PreReleasePayload"===e.preSavePreReleaseToLibrary.__typename)n=e.preSavePreReleaseToLibrary.preRelease;else{if(!("removePreReleaseFromLibrary"in e)||"PreReleasePayload"!==e.removePreReleaseFromLibrary.__typename)return;n=e.removePreReleaseFromLibrary.preRelease}switch(n.__typename){case"PreRelease":return n.preSaved;case"NotFound":return!1;case"GenericError":return;default:return void(0,w._)(n)}}(l)}),{onSuccess:e=>{"boolean"==typeof e&&(e&&a(d.ag.get("web-player.album-prerelease.feedback_presaved")),n(e))}})};const M=({uri:e})=>{const{isPreSaved:n,isLoading:i,addPresave:a,removePresave:t}=(e=>{const{isPreSaved:n,invalidate:i,isLoading:a}=_(e),{mutate:t,isLoading:l}=V(e,i);return{isPreSaved:n,isLoading:a||l,addPresave:(0,c.useCallback)((()=>t(!0)),[t]),removePresave:(0,c.useCallback)((()=>t(!1)),[t])}})(e),{spec:l,logger:r}=(0,p.fU)(k.j,{data:{uri:e}}),s=()=>{r.logInteraction(l.actionBarFactory().preSaveButtonFactory().hitRemovePresave({prereleaseId:e,itemToBeRemovedFromPresaved:e,contextUri:e})),t()};return n?(0,g.jsx)(F.P,{disabled:i,onClick:s,children:d.ag.get("web-player.album-prerelease.presaved")}):(0,g.jsx)(f.x,{uri:e,action:h.sr.SAVE_PRERELEASE,children:(0,g.jsx)(N.D,{disabled:i,onClick:()=>{r.logInteraction(l.actionBarFactory().preSaveButtonFactory().hitPresave({prereleaseId:e,itemToBePresaved:e,contextUri:e})),a()},children:d.ag.get("web-player.album-prerelease.presave")})})};var E=i(26804),B=i(22817),O=i(11945),W=i(35992),H=i(25825),Q=i(38548);const q=c.memo((function({uri:e,artistUri:n}){const{spec:i}=(0,H.T)(e);return(0,g.jsx)(W.JL,{value:"album",children:(0,g.jsxs)(O.v,{children:[n&&(0,g.jsx)(Q.Jh,{spec:i,divider:"after",uri:n,displayText:d.ag.get("contextmenu.go-to-artist-radio")}),(0,g.jsx)(Q.Jx,{uri:e,spec:i,displayText:d.ag.get("context-menu.copy-album-link")}),(0,g.jsx)(Q.h$,{spec:i,divider:"before",uri:e})]})})}));var z=i(60536);const Z=({prerelease:e,backgroundColor:n})=>{const i=function(e){const[n,i]=(0,c.useState)((()=>!!e&&S(e)<=0));return(0,c.useEffect)((()=>{if(!e)return;const n=S(e);if(n<=0)return void i(!0);if(n>=36e5)return void i(!1);const a=setTimeout((()=>{i(!0)}),n);return()=>{clearTimeout(a)}}),[e]),n}(e.releaseDate),{spec:a,UBIFragment:t}=(0,p.fU)(k.j,{data:{uri:e.uri}}),l=(0,z.j)();return(0,g.jsx)(E.o,{backgroundColor:n,children:(0,g.jsxs)(E.F,{children:[i?(0,g.jsx)(b,{uri:e.content?.uri}):(0,g.jsx)(M,{uri:e.uri}),(0,g.jsx)(t,{spec:a,children:(0,g.jsx)(v.yj,{menu:(0,g.jsx)(q,{uri:e.uri,artistUri:e.content?.artists[0].uri}),children:(0,g.jsx)(B.z,{label:d.ag.get("more.label.context",e.content?.name),size:l})})})]})})};var G=i(35476),J=i(48068),K=i(80041);const Y="J9GZWbcqWAQBbj0mGgBp",$="MnacN8FHHYBeSU8hx4U8",X="HBgE42egR1M0MoBZt7MA",ee="l5yLFFUEplqPqkpdgn2z",ne="g0_tYvLXcZhPQLQuecrg",ie="gjeF0mGZlmvlsLy5SvfQ",ae=({value:e,label:n,hasDivider:i=!1})=>(0,g.jsxs)("div",{className:X,"aria-hidden":"true",children:[(0,g.jsx)(r.D,{variant:"canon",className:t()({[ne]:i}),children:e}),(0,g.jsx)(r.D,{variant:"finale",semanticColor:"textSubdued",children:n})]});var te=i(21002);const le=1e3,re=60*le,se=60*re,de=24*se;const oe={days:0,hours:0,minutes:0,seconds:0};function me(e){return e>0?function(e){const n=Math.abs(e);return{days:Math.floor(n/de),hours:Math.floor(n%de/se),minutes:Math.floor(n%se/re),seconds:Math.floor(n%re/le)}}(e):oe}const ue=({targetDate:e,className:n,onComplete:i,images:a,imageTitle:l})=>{const{days:r,hours:s,minutes:o,seconds:m}=((e,n)=>{const i=(0,c.useRef)(n);i.current=n;const[a,t]=(0,c.useState)((()=>me(S(e))));return(0,te.Y)((n=>{const a=S(e),l=me(a);t(l),a<=0&&(n(),i.current?.())}),1e3),a})(e,i),k=void 0!==a&&a.length>0&&l,v=d.ag.get("web-player.album-prerelease.countdown_label",{days:r,hours:s,minutes:o,seconds:m});return(0,g.jsxs)("div",{className:t()(Y,n,{[$]:k}),role:"timer",children:[(0,g.jsx)("span",{className:ie,children:v}),k&&(0,g.jsx)(K.O,{images:a,type:u.p.ALBUM,shape:K.K.ROUNDED_CORNERS,className:ee,title:l}),(0,g.jsx)(ae,{value:r,label:d.ag.get("web-player.album-prerelease.days",r),hasDivider:!0}),(0,g.jsx)(ae,{value:s,label:d.ag.get("web-player.album-prerelease.hours",s),hasDivider:!0}),(0,g.jsx)(ae,{value:o,label:d.ag.get("web-player.album-prerelease.minutes",o),hasDivider:!0}),(0,g.jsx)(ae,{value:m,label:d.ag.get("web-player.album-prerelease.seconds",m)})]})};var ce=i(78642),ke=i(93268),ve=i(79728),pe=i(87278);const Se="xjbmV4vvBCu7c5U6nAgL",Ne=({prerelease:e,children:n})=>(0,g.jsx)(v._P,{menu:(0,g.jsx)(q,{uri:e.uri,artistUri:e.content?.artists[0].uri}),children:n}),ye=({prerelease:e,backgroundColor:n})=>{const{content:i,releaseDate:a}=e,t=(0,G.jh)(),l=t===G.Uo.SMALL||t===G.Uo.XSMALL,{spec:r,logger:s}=(0,p.fU)(k.j,{data:{uri:e.uri}}),d=(0,c.useCallback)(((e,n)=>{if(r){const e=r.headerFactory().artistNameFactory().hitUiNavigate({destination:n.creator.uri});s.logInteraction(e)}}),[s,r]),o=i,m=(0,c.useMemo)((()=>a?new Date(a):void 0),[a]);return(0,g.jsxs)(ce.gF,{backgroundColor:n,size:ce.fR.LARGE,children:[(0,g.jsx)(ke.W,{children:o.name?(0,g.jsx)(ve.i,{text:o.name}):null}),!l&&(0,g.jsx)(Ne,{prerelease:e,children:(0,g.jsx)(ce.Oz,{images:o.coverArt.sources,name:o.name??"",placeholderType:"album"})}),(0,g.jsxs)(ce.sP,{children:[(0,g.jsx)(pe.g,{children:(0,J.R)(o.type)}),(0,g.jsx)(Ne,{prerelease:e,children:(0,g.jsx)(ce.xd,{scaleAtMinWidth:ce.Fi,children:o.name})}),(0,g.jsx)(ce.QS,{creators:o.artists,onCreatorClick:d,releaseDate:a,timeZone:e.timezone}),m&&o.name?(0,g.jsx)(ue,{images:l?o.coverArt.sources:[],className:Se,imageTitle:o.name,targetDate:m}):null]})]})};var ge=i(70613),be=i(89874),Fe=i(10113);const fe={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"albumPreReleaseTrackArtistItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ArtistResponseWrapper"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Artist"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]}}]},he={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"albumPreReleaseTracks"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lookup"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uris"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"uri"}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreReleaseResponseWrapper"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"albumPreReleaseTracksData"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumPreReleaseTracksData"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreRelease"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"preReleaseContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tracks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumPreReleaseTrack"}}]}},{kind:"Field",name:{kind:"Name",value:"totalCount"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumPreReleaseTrack"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreReleaseAlbumTrack"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"artists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"20"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumPreReleaseTrackArtistItem"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}}]}},...fe.definitions]},xe={totalLength:0,items:[]};function Pe(e){const n=e.preReleaseContent,i=[];if(n?.tracks)for(const e of n.tracks.items)i.push({uri:e.uri,name:e.name?e.name:"",isPlayable:e.playability.playable,durationMs:e.duration?.totalMilliseconds??0,artists:Re(e.artists.items),isExplicit:e.contentRating?.label===Fe.KS.Explicit,is19PlusOnly:e.contentRating?.label===Fe.KS.NineteenPlus});return{totalLength:n?.tracks.totalCount??0,items:i}}function Re(e){const n=[];for(const i of e)"Artist"===i.data.__typename&&n.push({name:i.data.profile.name,uri:i.data.uri});return n}const De=[ge.QD.INDEX,ge.QD.TITLE_AND_ARTIST,ge.QD.DURATION],Te=c.memo((function({ariaLabel:e,nrTracks:n,prereleaseUri:i,highlightUri:a,scrollToIndex:t,usePlayContextItem:l,hasHeaderRow:r=!0,initalTracks:s}){const{spec:d,UBIFragment:o}=(0,p.fU)(k.j,{data:{uri:i}}),m=(e=>{const{request:n}=(0,c.useContext)(A.Ax);return(0,c.useCallback)((async(i,a)=>{const t=await n(he,{uri:e,offset:i,limit:a});for(const n of t?.data?.lookup||[])if("PreReleaseResponseWrapper"===n.__typename&&"PreRelease"===n.data.__typename&&n.data.uri===e)return Pe(n.data);return xe}),[n,e])})(i),u=(0,c.useRef)(!1),v=(0,c.useRef)(null),[S,N]=(0,c.useState)(null),y=(0,c.useCallback)((e=>e.uri),[]);(0,c.useEffect)((()=>{v.current&&(S?v.current.scrollToIndex(S):t&&v.current.scrollToIndex(t))}),[S,t]);const b=(0,c.useCallback)((async(e,n)=>{const i=await m(e,n);if(a&&!S){const e=i.items.findIndex((e=>e?.uri===a));N(e||-1)}return i}),[m,a,S]),F=(0,c.useCallback)(((e,n)=>{const t=!u.current&&!!a&&a===e.uri;return t&&(u.current=!0),(0,g.jsx)(ge.Ym,{uri:e.uri,isPlayable:e.isPlayable,name:e.name,trackNumber:n+1,index:n,artists:e.artists,playcount:0,contextUri:i,duration_ms:e.durationMs,usePlayContextItem:l,isMOGEFRestricted:e.is19PlusOnly,isExplicit:e.isExplicit,shouldHighLight:t,isReleased:e.isPlayable},n+e.uri)}),[a,i,l]);return(0,g.jsx)(o,{spec:d,children:(0,g.jsx)(be.a,{columns:De,children:(0,g.jsx)(ge.Pv,{ariaLabel:e,columns:De,hasHeaderRow:r,rowPlaceholder:ge.uD,renderRow:F,resolveUri:y,nrTracks:n,fetchTracks:b,limit:300,tracks:s,outerRef:v},i)})})}));var je=i(41040),Ce=i(708),_e=i(13511);const Ie={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"albumPreRelease"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lookup"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uris"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"uri"}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreReleaseResponseWrapper"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"albumPreReleaseData"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumPreReleaseData"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreRelease"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"preReleaseContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumPreReleaseArtistItem"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"extractedColors"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorRaw"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hex"}},{kind:"Field",name:{kind:"Name",value:"isFallback"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"tracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumPreReleaseTrack"}}]}},{kind:"Field",name:{kind:"Name",value:"totalCount"}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"copyright"}}]}},{kind:"Field",name:{kind:"Name",value:"releaseDate"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isoString"}}]}},{kind:"Field",name:{kind:"Name",value:"timezone"}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumPreReleaseArtistItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ArtistResponseWrapper"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Artist"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"visuals"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"width"}}]}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumPreReleaseTrack"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreReleaseAlbumTrack"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"artists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"20"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumPreReleaseTrackArtistItem"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}}]}},...fe.definitions]},Ae=(e,n)=>(0,R.a)(Ie,e,n),Le=(e,n=Ae)=>{const{data:i,loading:a,error:t}=n({uri:e},{staleTime:x,cacheTime:P});return{loading:a,error:!!t,prerelease:(0,c.useMemo)((()=>{if(!i)return null;for(const n of i.lookup)if("PreReleaseResponseWrapper"===n.__typename&&"PreRelease"===n.data.__typename&&n.data.uri===e)return Ue(n.data);return null}),[i,e])}};function we(e){return e.includes("℗")?{type:"P",text:e}:{type:"C",text:e}}function Ue(e){const n=e.preReleaseContent;let i;if(n){const a=Pe(e);i={artists:Ve(n.artists.items),name:n.name??void 0,uri:n.uri,coverArt:{extractedColors:n.coverArt?.extractedColors?.colorRaw,sources:n.coverArt?.sources??[]},type:n.type,tracks:a,copyrights:n.copyright?.split("\n").map(we)??[]}}return{uri:e.uri,releaseDate:e.releaseDate?.isoString,timezone:e.timezone??void 0,content:i}}function Ve(e){const n=[];for(const i of e)"Artist"===i.data.__typename&&n.push({name:i.data.profile.name,id:i.data.id,uri:i.data.uri,images:i.data.visuals.avatarImage?.sources??[]});return n}var Me=i(69326);const Ee="H2kQJCtEGTjIDaPPniwb",Be="ZSU92ZH1fIuGwPp1cuDi",Oe=e=>{const{uri:n}=e,{prerelease:i,loading:a,error:c}=Le(n),k=(e=>{const n=e?.content?.coverArt.extractedColors?.hex;return(0,Me.Y)(n),n})(i),v=parseInt(new URLSearchParams((0,l.TH)().search).get("index")||"0",10),{usePlayContextItem:p}=(0,m.n)({uri:n,pages:[{items:(N=i?.content?.tracks.items||[],N.filter((e=>e.isPlayable)).map((e=>({uri:e.uri,uid:null,type:u.p.TRACK,provider:null}))))}]},{featureIdentifier:"album_prerelease"});var N;if(a||c||!i)return(0,g.jsx)(Ce.h,{hasError:!!c,errorMessage:d.ag.get("error.not_found.title.album")});if(i?.content?.uri&&function(e,n){if(!e.content?.uri||!e.releaseDate)return!1;const i=S(e.releaseDate);if(i>0)return!1;return i<=-1*n}(i,1728e5)){const e=(0,s._b)(i?.content?.uri);if(e)return(0,g.jsx)(_e.InstrumentedRedirect,{to:e.toURLPath(!0)})}return(0,g.jsxs)("section",{className:Ee,children:[(0,g.jsx)(je.$,{children:d.ag.get("album.page-title",i.content?.name??"")}),(0,g.jsx)(ye,{prerelease:i,backgroundColor:k}),(0,g.jsx)(Z,{prerelease:i,backgroundColor:k}),i.content?.tracks.totalLength?(0,g.jsxs)("div",{className:"contentSpacing",children:[(0,g.jsx)(r.D,{as:"h2",variant:"canon",semanticColor:"textBase",children:d.ag.get("web-player.album-prerelease.tracklist_preview")}),(0,g.jsx)(Te,{prereleaseUri:n,ariaLabel:i.content?.name??d.ag.get("error.not_found.title.album"),nrTracks:i.content?.tracks.totalLength??0,scrollToIndex:v,usePlayContextItem:p,initalTracks:i.content?.tracks.items,albumUri:i.content?.uri})]}):null,(0,g.jsx)("div",{className:t()(Be,"contentSpacing"),children:(0,g.jsx)(o.k,{copyrights:i.content?.copyrights??[]})})]})}},99334:(e,n,i)=>{i.d(n,{k:()=>r});var a=i(89518);const t="rTMkDBDp47Eo12ZEQv4U";var l=i(4637);const r=({copyrights:e,courtesyLine:n})=>{const i=(e||[]).map(((e,n)=>{const i=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let t;return t="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,(0,l.jsx)(a.D,{as:"p",variant:"finale",dir:"auto",children:`${t} ${i}`},n)}));return n&&i.unshift((0,l.jsx)(a.D,{as:"p",variant:"finale",dir:"auto",children:n},i.length)),(0,l.jsx)("div",{className:t,children:i})}}}]);
//# sourceMappingURL=xpui-routes-album-prerelease.js.map