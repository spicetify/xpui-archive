"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1810],{29011:(e,s,i)=>{i.d(s,{Z:()=>t});var r=i(47262),a=i(95441),n=i(4637);const t=({name:e,uri:s,images:i,isHero:t,testId:d,description:o,index:c,requestId:l,color:u})=>(0,n.jsx)(r.C,{index:c,featureIdentifier:"artist_concerts",headerText:e,uri:s,isPlayable:!1,renderCardImage:()=>(0,n.jsx)(a.x,{isHero:t,images:i,color:u}),renderSubHeaderContent:()=>(0,n.jsx)("span",{children:o||""}),testId:d,requestId:l})},31810:(e,s,i)=>{i.d(s,{q:()=>H});var r=i(58908),a=i(21357),n=i(47262),t=i(95441),d=i(42741),o=i(56672),c=i(4637);const l=({name:e="",uri:s="",images:i=[],isHero:r,onClick:a,testId:l,index:u})=>r?(0,c.jsx)(d.Z,{featureIdentifier:"unknown",index:u,onClick:a,headerText:e,uri:s,isPlayable:!1,renderCardImage:()=>(0,c.jsx)(t.x,{isHero:r,images:i}),renderSubHeaderContent:()=>(0,c.jsx)(o.k,{}),testId:l}):(0,c.jsx)(n.C,{index:u,featureIdentifier:"unknown",onClick:a,headerText:e,uri:s,isPlayable:!1,renderCardImage:()=>(0,c.jsx)(t.x,{isHero:r,images:i}),renderSubHeaderContent:()=>(0,c.jsx)("span",{}),testId:l});var u=i(35799),m=i(10236),x=i(86440),g=i(86431),I=i(29011),p=i(38409),h=i(68132),j=i(81785),f=i(29664),C=i(64185),b=i(20148),k=i(52016),y=i(78718);const H=({entity:e,index:s,testId:i,isHero:n=!1})=>{const t=((0,r.EC)(e.uri)||{}).type,d={testId:i,isHero:n,index:s,sharingInfo:e.sharingInfo};if(("string"==typeof e.uri||e.uri instanceof String)&&e.uri.startsWith("spotify:merch:"))return(0,c.jsx)(h.T,{...d,name:e.name,uri:e.uri,href:e.href,images:e.images,description:e.description});if(("string"==typeof e.uri||e.uri instanceof String)&&e.uri.startsWith("spotify:artist:")&&e.uri.endsWith(":concerts"))return(0,c.jsx)(I.Z,{...d,name:e.name,uri:e.uri,images:e.images,description:e.description});switch(t){case r.JM.ALBUM:case r.JM.COLLECTION_ALBUM:{const s=e;return(0,c.jsx)(x.r,{...d,name:s.name,uri:s.uri,images:s.images,artists:s.artists})}case r.JM.ARTIST:{const s=e;return(0,c.jsx)(g.I,{...d,name:s.name,uri:s.uri,images:s.images})}case r.JM.EPISODE:{const s=e;return(0,c.jsx)(p.B,{...d,name:s.name,uri:s.uri,images:s.images,showImages:s.show?.images||[],durationMilliseconds:s.duration_ms,releaseDate:s.release_date,resume_point:s.resume_point,description:s.description,isExplicit:s.explicit,is19PlusOnly:!!s.tags?.includes("MOGEF-19+")})}case r.JM.PLAYLIST:case r.JM.PLAYLIST_V2:{const s=e,i=s.owner?.display_name||e.owner?.displayName||"";return(0,c.jsx)(j.Z,{...d,name:s.name,uri:s.uri,images:s.images,description:s.description,authorName:i})}case r.JM.PROFILE:return(0,c.jsx)(f.P,{...d,name:e.name,uri:e.uri,images:e.images});case r.JM.SHOW:{const s=e;return(0,c.jsx)(b._,{...d,name:s.name,uri:s.uri,images:s.images,publisher:s.publisher,mediaType:{audio:m.E.AUDIO,video:m.E.VIDEO,mixed:m.E.MIXED}[s.media_type]??m.E.AUDIO})}case r.JM.APPLICATION:return(0,c.jsx)(a.s,{...d,name:e.name,uri:e.uri,images:e.images,description:e.description});case r.JM.RADIO:return(0,c.jsx)(C.I,{testId:i,index:s,name:e.name,uri:e.uri,images:e.images});case r.JM.TRACK:{const s=e;return(0,c.jsx)(k.G,{...d,name:s.name,uri:s.uri,images:s.album?.images||[],artists:s.artists,album:s.album,isExplicit:s.explicit,is19PlusOnly:s.tags?.includes("MOGEF-19+")})}case r.JM.COLLECTION:return e.uri.endsWith("your-episodes")?(0,c.jsx)(y.T,{index:s}):(0,c.jsx)(u.p,{index:s});default:return console.warn("Rendering a generic Card for unknown type:",t),(0,c.jsx)(l,{...d,name:e.name,uri:e.uri,images:e.images})}}},38409:(e,s,i)=>{i.d(s,{B:()=>N});var r=i(80326),a=i(35407),n=i(99949),t=i(22508),d=i(71789),o=i(64094),c=i(38698),l=i(20786),u=i(47262),m=i(95441),x=i(59496),g=i(53083),I=i(95848),p=i(33514);const h="z4popIk32AsyDKlV1o1v",j="_xxuonqkZEQ7pCffxlUD";var f=i(4637);const C=(0,x.memo)((function(e){const{src:s,description:i,...r}=e,[a,n]=(0,x.useState)("inherit");return(0,x.useEffect)((()=>{s&&async function(e){const{colorRaw:s}=await(0,p.extractColors)(e),{h:i,s:r,l:a}=s.hsl,t=`hsl(${360*i}, ${100*r}%, ${Math.min(100*a,30)}%)`;n(t)}(s)}),[s]),s?(0,f.jsx)("div",{className:h,style:{backgroundColor:a},"data-testid":"episode-fallback-image-container",children:(0,f.jsx)("div",{className:j,children:(0,f.jsx)(g.D,{as:"p",variant:"canon",children:i})})}):(0,f.jsx)(I.J,{...r,iconSize:64})}));var b=i(42741),k=i(56672),y=i(79459);const H="x1FErCk9Xh9VumpOLyfm",w="heeHk6hz8sAXLIU6P6an",E="Hhfi1xnYwoHoMP2rcltS",N=({description:e,isExplicit:s,images:i,name:x,uri:g,durationMilliseconds:I,releaseDate:p,resume_point:h,showImages:j,sharingInfo:N,is19PlusOnly:S,isHero:M,onClick:P,testId:T,index:_,requestId:O,color:v})=>{let L;const q=p?new Date(p):void 0,D=q&&!isNaN(q.getTime())&&!isNaN(I),A=(0,l.X)(j,{desiredSize:48}),J=(0,o.G3)(g,q?.toISOString(),h?.resume_position_ms,h?.fully_played);return L=M?(0,f.jsx)(b.Z,{index:_,onClick:P,headerText:x,featureIdentifier:"episode",uri:g,isPlayable:!1,isDownloadable:!0,hasNewEpisodeIndicator:J,renderCardImage:()=>(0,f.jsx)(m.x,{isHero:!0,images:i,color:v,FallbackComponent:s=>(0,f.jsx)(C,{...s,description:e,src:A&&A.url}),children:A&&(0,f.jsx)(d.E,{loading:"lazy",src:A.url,className:H,radius:4})}),renderSubHeaderContent:()=>(0,f.jsxs)(f.Fragment,{children:[s&&!S&&(0,f.jsx)(n.N,{className:w}),S&&(0,f.jsx)(t.X,{size:16,className:w}),D&&(0,f.jsxs)("span",{className:E,children:[q&&(0,c.rL)(q)," ·"," ",r.ag.get("episode.length",Math.ceil(I/6e4))]}),(0,f.jsx)(k.k,{children:r.ag.get("card.tag.episode")})]}),testId:T,requestId:O}):(0,f.jsx)(u.C,{index:_,onClick:P,headerText:x,featureIdentifier:"episode",uri:g,isPlayable:!1,isDownloadable:!0,hasNewEpisodeIndicator:J,renderCardImage:()=>(0,f.jsx)(m.x,{images:i,color:v,FallbackComponent:s=>(0,f.jsx)(C,{...s,description:e,src:A&&A.url}),children:A&&(0,f.jsx)(d.E,{loading:"lazy",src:A.url,className:H,radius:4,testid:"episode-card-show-image"})}),renderSubHeaderContent:()=>(0,f.jsxs)(f.Fragment,{children:[s&&!S&&(0,f.jsx)(n.N,{className:w}),S&&(0,f.jsx)(t.X,{size:16,className:w}),D&&(0,f.jsxs)("span",{className:E,children:[q&&(0,c.rL)(q)," ·"," ",r.ag.get("episode.length",Math.ceil(I/6e4))]})]}),testId:T,requestId:O}),(0,f.jsx)(a._,{menu:(0,f.jsx)(y.k,{uri:g,sharingInfo:N}),children:L})}},21357:(e,s,i)=>{i.d(s,{s:()=>c});var r=i(80326),a=i(47262),n=i(95441),t=i(42741),d=i(56672),o=i(4637);const c=({name:e,uri:s,images:i,isHero:c,onClick:l,testId:u,description:m,index:x,requestId:g,color:I})=>c?(0,o.jsx)(t.Z,{featureIdentifier:"genre",index:x,onClick:l,headerText:e,uri:s,isPlayable:!1,renderCardImage:()=>(0,o.jsx)(n.x,{isHero:c,images:i,color:I}),renderSubHeaderContent:()=>(0,o.jsx)(d.k,{children:m||r.ag.get("card.tag.genre")}),testId:u,requestId:g}):(0,o.jsx)(a.C,{index:x,featureIdentifier:"genre",onClick:l,headerText:e,uri:s,isPlayable:!1,renderCardImage:()=>(0,o.jsx)(n.x,{isHero:c,images:i,color:I}),renderSubHeaderContent:()=>(0,o.jsx)("span",{children:m||""}),testId:u,requestId:g})},68132:(e,s,i)=>{i.d(s,{T:()=>t});var r=i(47262),a=i(95441),n=i(4637);const t=({name:e,uri:s,href:i,images:t,isHero:d,testId:o,description:c,index:l,requestId:u,color:m})=>(0,n.jsx)(r.C,{index:l,featureIdentifier:"merch",onClick:()=>{window.open(i,"_blank")},headerText:e,uri:s,isPlayable:!1,renderCardImage:()=>(0,n.jsx)(a.x,{isHero:d,images:t,color:m}),renderSubHeaderContent:()=>(0,n.jsx)("span",{children:c||""}),testId:o,requestId:u,delegateNavigation:!0})},29664:(e,s,i)=>{i.d(s,{P:()=>x});var r=i(59496),a=i(3793),n=i(80326),t=i(35407),d=i(47262),o=i(95441),c=i(42741),l=i(56672),u=i(11590),m=i(4637);const x=r.memo((function(e){const{images:s,name:i,uri:x,onClick:g,isHero:I,testId:p,index:h,requestId:j,color:f}=e;let C;const b=(0,r.useCallback)((()=>(0,m.jsx)(o.x,{isCircular:!0,isHero:I,images:s,color:f,FallbackComponent:e=>(0,m.jsx)(a.a,{iconSize:64,...e})})),[f,s,I]),k=(0,r.useCallback)((()=>I?(0,m.jsx)(l.k,{children:n.ag.get("card.tag.profile")}):n.ag.get("card.tag.profile")),[I]);return C=I?(0,m.jsx)(c.Z,{index:h,onClick:g,headerText:i,featureIdentifier:"profile",uri:x,isPlayable:!1,renderCardImage:b,renderSubHeaderContent:k,testId:p,requestId:j}):(0,m.jsx)(d.C,{index:h,onClick:g,headerText:i,featureIdentifier:"profile",uri:x,isPlayable:!1,renderCardImage:b,renderSubHeaderContent:k,testId:p,requestId:j}),(0,m.jsx)(t._,{menu:(0,m.jsx)(u.I,{uri:x}),children:C})}))}}]);
//# sourceMappingURL=1810.js.map