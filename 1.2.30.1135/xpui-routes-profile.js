"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[2499],{5449:(e,i,a)=>{a.d(i,{T:()=>m});var t=a(93019),n=a(46492),l=a(91845),o=a(96784),r=a(34790);const s="Ws8Ec3GREpT5PAUesr9b",d="kHu_FTRgoBLSLeAJtyKY";var u=a(11527);const m=function({onClick:e,name:i,images:a,canEdit:m,placeholderType:c,shape:g=r.Kc.SQUARE,dragUri:p=""}){const[v,k]=(0,n.R)(a),h=(0,l.VO)(v,k)===l.KO.loaded,f=(0,t.O)({itemUris:[p],dragLabelText:i});return(0,u.jsxs)("div",{className:s,"data-testid":`${c}-image`,draggable:!!p,onDragStart:f,children:[(0,u.jsx)(r.Oe,{loading:"eager",name:i,images:a,placeholderType:c,shape:g}),m&&(0,u.jsx)("div",{className:d,children:(0,u.jsx)(o.F,{overlay:h,onClick:e,rounded:g===r.Kc.CIRCLE})})]})}},71013:(e,i,a)=>{a.d(i,{k:()=>r});var t=a(82187),n=a.n(t),l=a(48603),o=a(11527);const r=({children:e})=>(0,o.jsx)("div",{className:n()(l.Z.imageContainer,l.Z.imageContainerNew),children:e})},78344:(e,i,a)=>{a.d(i,{g:()=>o});var t=a(97018),n=a(48603),l=a(11527);const o=({children:e})=>(0,l.jsx)(t.x,{variant:"bodySmall",className:n.Z.pretitle,children:e})},61185:(e,i,a)=>{a.r(i),a.d(i,{default:()=>zi});var t=a(50959),n=a(28150),l=a(15502),o=a(55147),r=a(82187),s=a.n(r),d=a(10992),u=a(39538),m=a(30760),c=a(21432),g=a(97167),p=a(68898);const v="umiKMm5NVr5UeBJCHS6U",k="jzhwZKbfx4vrC_MYd_7c",h="MWWPQQjbjRfoGdPD8D68",f="kWCnF32FrVtGHmTy8QeV",b="uJxNEI2k7x8UCDdMKELt",y="wDIZ2yYKjfGI68I4cZ98";var N=a(11527);const x=e=>{const{uri:i}=e,{data:a,loading:t,error:n}=(0,p.J)(g.n5.getFollowers,[i]),l=a?.profiles;return t?(0,N.jsx)(m.h,{hasError:null!==n,errorMessage:d.ag.get("error.not_found.title.page")}):(0,N.jsx)(c.P,{className:s()("contentSpacing",h),title:d.ag.get("followers"),total:l?.length,showAll:!0,children:l?.map(((e,i)=>(0,N.jsx)(u.P,{index:i,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))})},S=e=>{const{uri:i}=e,{data:a,loading:t,error:n}=(0,p.J)(g.n5.getFollowing,[i]),l=a?.profiles;return t?(0,N.jsx)(m.h,{hasError:null!==n,errorMessage:d.ag.get("error.not_found.title.page")}):(0,N.jsx)(c.P,{className:s()("contentSpacing",h),title:d.ag.get("following"),total:l?.length,showAll:!0,children:l?.map(((e,i)=>(0,N.jsx)(u.P,{index:i,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))})};a(38910);var I=a(14842),_=a(35869),T=a(23055),j=a(12737),w=a(25228),A=a(88339),P=a(83352),C=a(12823),F=a(39189),R=a(5449),O=a(34790),D=a(44930),U=a(52759),E=a(97018),L=a(28497),M=a(32864),W=a(95264),H=a(34221),K=a(46492),J=a(91845);const V="F8_EX1AeKxXNSeh1qiHq",B="valcBm4lLe9qFBcg0sFY",Q="tAIzXn8C9KriGwGuBfWg",G="PsrXxenHUFXYM1ub1xWw",Z="U_VWfeeLWnDPhUTxCmrQ",z=function({onClickEdit:e,onClickRemove:i,name:a,images:t,canEdit:n}){const[l,o]=(0,K.R)(t),r=(0,J.VO)(l,o)===J.KO.loaded;return(0,N.jsxs)("div",{className:V,children:[(0,N.jsx)(O.Oe,{loading:"eager",name:a,images:t,placeholderType:"user",shape:O.Kc.CIRCLE}),n&&(0,N.jsxs)("div",{className:s()(B,{[G]:r}),children:[(0,N.jsx)("button",{className:Q,"aria-haspopup":"true",onClick:e,type:"button",children:(0,N.jsx)(E.x,{variant:"bodyMedium",children:d.ag.get("user.edit-details.choose-photo")})}),(0,N.jsx)("div",{className:s()(Z,"icon"),children:(0,N.jsx)(H.y,{size:"xlarge","aria-hidden":!0})}),(0,N.jsx)("button",{className:Q,onClick:i,type:"button",children:(0,N.jsx)(E.x,{variant:"bodyMedium",children:d.ag.get("user.edit-details.remove-photo")})})]})]})};var q=a(87555),X=a(31686),Y=a(91423);const $={paths:""},ee={encode(e,i=Y.Writer.create()){for(const a of e.paths)i.uint32(10).string(a);return i},decode(e,i){const a=e instanceof Uint8Array?new Y.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...$};for(n.paths=[];a.pos<t;){const e=a.uint32();if(e>>>3==1)n.paths.push(a.string());else a.skipType(7&e)}return n},fromJSON(e){const i={...$};if(i.paths=[],void 0!==e.paths&&null!==e.paths)for(const a of e.paths)i.paths.push(String(a));return i},fromPartial(e){const i={...$};if(i.paths=[],void 0!==e.paths&&null!==e.paths)for(const a of e.paths)i.paths.push(a);return i},toJSON(e){const i={};return e.paths?i.paths=e.paths.map((e=>e)):i.paths=[],i}};a(17198);var ie=a(3959),ae=a(55872).lW;const te={value:0},ne={value:!1},le={value:""};const oe={encode:(e,i=Y.Writer.create())=>(i.uint32(8).int32(e.value),i),decode(e,i){const a=e instanceof Uint8Array?new Y.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...te};for(;a.pos<t;){const e=a.uint32();if(e>>>3==1)n.value=a.int32();else a.skipType(7&e)}return n},fromJSON(e){const i={...te};return void 0!==e.value&&null!==e.value?i.value=Number(e.value):i.value=0,i},fromPartial(e){const i={...te};return void 0!==e.value&&null!==e.value?i.value=e.value:i.value=0,i},toJSON(e){const i={};return void 0!==e.value&&(i.value=e.value),i}},re={encode:(e,i=Y.Writer.create())=>(i.uint32(8).bool(e.value),i),decode(e,i){const a=e instanceof Uint8Array?new Y.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...ne};for(;a.pos<t;){const e=a.uint32();if(e>>>3==1)n.value=a.bool();else a.skipType(7&e)}return n},fromJSON(e){const i={...ne};return void 0!==e.value&&null!==e.value?i.value=Boolean(e.value):i.value=!1,i},fromPartial(e){const i={...ne};return void 0!==e.value&&null!==e.value?i.value=e.value:i.value=!1,i},toJSON(e){const i={};return void 0!==e.value&&(i.value=e.value),i}},se={encode:(e,i=Y.Writer.create())=>(i.uint32(10).string(e.value),i),decode(e,i){const a=e instanceof Uint8Array?new Y.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...le};for(;a.pos<t;){const e=a.uint32();if(e>>>3==1)n.value=a.string();else a.skipType(7&e)}return n},fromJSON(e){const i={...le};return void 0!==e.value&&null!==e.value?i.value=String(e.value):i.value="",i},fromPartial(e){const i={...le};return void 0!==e.value&&null!==e.value?i.value=e.value:i.value="",i},toJSON(e){const i={};return void 0!==e.value&&(i.value=e.value),i}};Y.util.Long!==ie.Z&&(Y.util.Long=ie.Z,(0,Y.configure)());const de=globalThis;de.atob,de.btoa;const ue={maxWidth:0,maxHeight:0,url:""},me={},ce={},ge={encode:(e,i=Y.Writer.create())=>(i.uint32(8).int32(e.maxWidth),i.uint32(16).int32(e.maxHeight),i.uint32(26).string(e.url),i),decode(e,i){const a=e instanceof Uint8Array?new Y.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...ue};for(;a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:n.maxWidth=a.int32();break;case 2:n.maxHeight=a.int32();break;case 3:n.url=a.string();break;default:a.skipType(7&e)}}return n},fromJSON(e){const i={...ue};return void 0!==e.maxWidth&&null!==e.maxWidth?i.maxWidth=Number(e.maxWidth):i.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?i.maxHeight=Number(e.maxHeight):i.maxHeight=0,void 0!==e.url&&null!==e.url?i.url=String(e.url):i.url="",i},fromPartial(e){const i={...ue};return void 0!==e.maxWidth&&null!==e.maxWidth?i.maxWidth=e.maxWidth:i.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?i.maxHeight=e.maxHeight:i.maxHeight=0,void 0!==e.url&&null!==e.url?i.url=e.url:i.url="",i},toJSON(e){const i={};return void 0!==e.maxWidth&&(i.maxWidth=e.maxWidth),void 0!==e.maxHeight&&(i.maxHeight=e.maxHeight),void 0!==e.url&&(i.url=e.url),i}},pe={encode(e,i=Y.Writer.create()){void 0!==e.username&&void 0!==e.username&&se.encode({value:e.username},i.uint32(10).fork()).ldelim(),void 0!==e.name&&void 0!==e.name&&se.encode({value:e.name},i.uint32(18).fork()).ldelim();for(const a of e.images)ge.encode(a,i.uint32(26).fork()).ldelim();return void 0!==e.verified&&void 0!==e.verified&&re.encode({value:e.verified},i.uint32(34).fork()).ldelim(),void 0!==e.editProfileDisabled&&void 0!==e.editProfileDisabled&&re.encode({value:e.editProfileDisabled},i.uint32(42).fork()).ldelim(),void 0!==e.reportAbuseDisabled&&void 0!==e.reportAbuseDisabled&&re.encode({value:e.reportAbuseDisabled},i.uint32(50).fork()).ldelim(),void 0!==e.abuseReportedName&&void 0!==e.abuseReportedName&&re.encode({value:e.abuseReportedName},i.uint32(58).fork()).ldelim(),void 0!==e.abuseReportedImage&&void 0!==e.abuseReportedImage&&re.encode({value:e.abuseReportedImage},i.uint32(66).fork()).ldelim(),void 0!==e.hasSpotifyName&&void 0!==e.hasSpotifyName&&re.encode({value:e.hasSpotifyName},i.uint32(74).fork()).ldelim(),void 0!==e.hasSpotifyImage&&void 0!==e.hasSpotifyImage&&re.encode({value:e.hasSpotifyImage},i.uint32(82).fork()).ldelim(),void 0!==e.color&&void 0!==e.color&&oe.encode({value:e.color},i.uint32(90).fork()).ldelim(),i},decode(e,i){const a=e instanceof Uint8Array?new Y.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...me};for(n.images=[];a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:n.username=se.decode(a,a.uint32()).value;break;case 2:n.name=se.decode(a,a.uint32()).value;break;case 3:n.images.push(ge.decode(a,a.uint32()));break;case 4:n.verified=re.decode(a,a.uint32()).value;break;case 5:n.editProfileDisabled=re.decode(a,a.uint32()).value;break;case 6:n.reportAbuseDisabled=re.decode(a,a.uint32()).value;break;case 7:n.abuseReportedName=re.decode(a,a.uint32()).value;break;case 8:n.abuseReportedImage=re.decode(a,a.uint32()).value;break;case 9:n.hasSpotifyName=re.decode(a,a.uint32()).value;break;case 10:n.hasSpotifyImage=re.decode(a,a.uint32()).value;break;case 11:n.color=oe.decode(a,a.uint32()).value;break;default:a.skipType(7&e)}}return n},fromJSON(e){const i={...me};if(i.images=[],void 0!==e.username&&null!==e.username?i.username=String(e.username):i.username=void 0,void 0!==e.name&&null!==e.name?i.name=String(e.name):i.name=void 0,void 0!==e.images&&null!==e.images)for(const a of e.images)i.images.push(ge.fromJSON(a));return void 0!==e.verified&&null!==e.verified?i.verified=Boolean(e.verified):i.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?i.editProfileDisabled=Boolean(e.editProfileDisabled):i.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?i.reportAbuseDisabled=Boolean(e.reportAbuseDisabled):i.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?i.abuseReportedName=Boolean(e.abuseReportedName):i.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?i.abuseReportedImage=Boolean(e.abuseReportedImage):i.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?i.hasSpotifyName=Boolean(e.hasSpotifyName):i.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?i.hasSpotifyImage=Boolean(e.hasSpotifyImage):i.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?i.color=Number(e.color):i.color=void 0,i},fromPartial(e){const i={...me};if(i.images=[],void 0!==e.username&&null!==e.username?i.username=e.username:i.username=void 0,void 0!==e.name&&null!==e.name?i.name=e.name:i.name=void 0,void 0!==e.images&&null!==e.images)for(const a of e.images)i.images.push(ge.fromPartial(a));return void 0!==e.verified&&null!==e.verified?i.verified=e.verified:i.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?i.editProfileDisabled=e.editProfileDisabled:i.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?i.reportAbuseDisabled=e.reportAbuseDisabled:i.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?i.abuseReportedName=e.abuseReportedName:i.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?i.abuseReportedImage=e.abuseReportedImage:i.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?i.hasSpotifyName=e.hasSpotifyName:i.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?i.hasSpotifyImage=e.hasSpotifyImage:i.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?i.color=e.color:i.color=void 0,i},toJSON(e){const i={};return void 0!==e.username&&(i.username=e.username),void 0!==e.name&&(i.name=e.name),e.images?i.images=e.images.map((e=>e?ge.toJSON(e):void 0)):i.images=[],void 0!==e.verified&&(i.verified=e.verified),void 0!==e.editProfileDisabled&&(i.editProfileDisabled=e.editProfileDisabled),void 0!==e.reportAbuseDisabled&&(i.reportAbuseDisabled=e.reportAbuseDisabled),void 0!==e.abuseReportedName&&(i.abuseReportedName=e.abuseReportedName),void 0!==e.abuseReportedImage&&(i.abuseReportedImage=e.abuseReportedImage),void 0!==e.hasSpotifyName&&(i.hasSpotifyName=e.hasSpotifyName),void 0!==e.hasSpotifyImage&&(i.hasSpotifyImage=e.hasSpotifyImage),void 0!==e.color&&(i.color=e.color),i}},ve={encode:(e,i=Y.Writer.create())=>(void 0!==e.mask&&void 0!==e.mask&&ee.encode(e.mask,i.uint32(10).fork()).ldelim(),void 0!==e.userProfile&&void 0!==e.userProfile&&pe.encode(e.userProfile,i.uint32(18).fork()).ldelim(),i),decode(e,i){const a=e instanceof Uint8Array?new Y.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...ce};for(;a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:n.mask=ee.decode(a,a.uint32());break;case 2:n.userProfile=pe.decode(a,a.uint32());break;default:a.skipType(7&e)}}return n},fromJSON(e){const i={...ce};return void 0!==e.mask&&null!==e.mask?i.mask=ee.fromJSON(e.mask):i.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?i.userProfile=pe.fromJSON(e.userProfile):i.userProfile=void 0,i},fromPartial(e){const i={...ce};return void 0!==e.mask&&null!==e.mask?i.mask=ee.fromPartial(e.mask):i.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?i.userProfile=pe.fromPartial(e.userProfile):i.userProfile=void 0,i},toJSON(e){const i={};return void 0!==e.mask&&(i.mask=e.mask?ee.toJSON(e.mask):void 0),void 0!==e.userProfile&&(i.userProfile=e.userProfile?pe.toJSON(e.userProfile):void 0),i}},ke=`${q.XA}/identity`;async function he(e,i,{name:a,imageUploadToken:t}){void 0!==a&&await async function(e,i,a){const t=ve.encode(ve.fromPartial({mask:{paths:["name"]},userProfile:null!==a?{name:a}:{}}));await e.build().withHost(ke).withMethod("POST").withPath(`/v3/user/username/${encodeURIComponent((0,X.C)(i))}`).withEndpointIdentifier("/v3/user/username/{username}").withBody(t.finish()).withoutMarket().send()}(e,i,a),void 0!==t&&(null!==t?await async function(e,i,a){await e.build().withHost(ke).withMethod("POST").withPath(`/v3/profile-image/${encodeURIComponent((0,X.C)(i))}/${a}`).withEndpointIdentifier("/v3/profile-image/{username}/{uploadToken}").withoutMarket().send()}(e,i,t):await async function(e,i){await e.build().withHost(ke).withMethod("DELETE").withPath(`/v3/profile-image/${encodeURIComponent((0,X.C)(i))}`).withEndpointIdentifier("/v3/profile-image/{username}").withoutMarket().send()}(e,i))}var fe=a(8517);const be={type:"error",get message(){return d.ag.get("user.edit-details.error.file-size-exceeded",10)}},ye={type:"error",get message(){return d.ag.get("user.edit-details.error.too-small",300,300)}},Ne={type:"error",get message(){return d.ag.get("user.edit-details.error.missing-name")}},xe={type:"error",get message(){return d.ag.get("user.edit-details.error.failed-to-save")}},Se={type:"error",get message(){return d.ag.get("user.edit-details.error.file-upload-failed")}};function Ie(e){return{type:"setLoading",loading:e}}function _e(e){return{type:"setMessage",message:e}}function Te(e,i){switch(i.type){case"setName":return{...e,name:i.name};case"setMessage":return{...e,message:i.message,loading:!1};case"setLoading":return{...e,loading:i.loading,message:null};case"setImageData":return{...e,imageData:i.data,removeImage:!1};case"setImageToken":return{...e,imageToken:i.token,removeImage:!1};case"removeImage":return{...e,imageToken:void 0,imageData:void 0,image:void 0,removeImage:!0};default:return e}}var je=a(58994),we=a(17716),Ae=a(19277);const Pe="XwNfIrI6_hCa_9_T2cQB",Ce="so0bdX3oZH6YW5_nGxIR",Fe="aM3plU4zzDqjWlvUHGYb",Re="zHeo4VUxytwm6Ptr0QyA",Oe="vAeyAmeLkDEDKdL9Hou0",De="dnmzO6yYKkxUV8jl7O1Z",Ue="oN9QVvJKEtdTH3HGfCu1",Ee="uj7hczcCH1dZpse8Kfmi",Le="wvLAEV5wF5C5ej6rvimT",Me="gAQfzAUp1FuSXODeZJfP",We="dMhJaxli87_22jb_3d9x",He="MDb7QhAtHeyM4gKj8j8t",Ke="zGbjZMZ1DTx4futEbN9l",Je=t.memo((function({uri:e,name:i,image:a,onClose:n,shouldOpenImagePicker:l,userCapabilities:o}){const[r,u]=(0,we.Hs)(),[m,c]=function({name:e,image:i}){return(0,t.useReducer)(Te,{loading:!1,message:null,name:e,image:i})}({name:i,image:a}),g=(0,t.useMemo)((()=>{const e=m.imageData||m.image;return e?[{url:e,width:300,height:300}]:[]}),[m.image,m.imageData]);(0,t.useEffect)((()=>{l&&u()}),[u,l]);const p=(0,t.useCallback)((e=>{e===we.Hy.FILE_TOO_BIG?c(_e(be)):e===we.Hy.IMAGE_TOO_SMALL&&c(_e(ye))}),[c]),v=(0,t.useCallback)((()=>{c({type:"removeImage"})}),[c]),k=(0,t.useCallback)((async i=>{i.preventDefault();if(0!==m.name.trim().length){c(Ie(!0));try{const i=m.removeImage?null:m.imageToken;await async function(e,{name:i,imageUploadToken:a}){await he(fe.b.getInstance(),e,{name:i,imageUploadToken:a})}(e,{name:m.name,imageUploadToken:i}),n({name:m.name,image:m.imageData||m.image})}catch(e){c(_e(xe))}}else c(_e(Ne))}),[c,n,m.image,m.imageData,m.imageToken,m.name,m.removeImage,e]);return(0,N.jsx)(je.Z,{isOpen:!0,contentLabel:d.ag.get("user.edit-details.title"),onRequestClose:()=>n(),children:(0,N.jsxs)("div",{className:Pe,children:[(0,N.jsxs)("div",{className:Fe,children:[(0,N.jsx)(E.x,{as:"h1",variant:"titleSmall",children:d.ag.get("user.edit-details.title")}),(0,N.jsx)("button",{className:Re,onClick:()=>n(),"aria-label":d.ag.get("close"),children:(0,N.jsx)(L.k,{size:"small"})})]}),m.message&&(0,N.jsx)(Ae.X,{isErrorMessage:"error"===m.message.type,message:m.message.message}),(0,N.jsxs)("form",{className:Ce,onSubmit:k,children:[o.edit_image&&(0,N.jsx)(we.uL,{isOpen:r,minImageWidth:300,minImageHeight:300,maxFileSizeMB:10,onChange:async function(e){if(!e)return;const{imageFile:i,imageDataUrl:a}=e;if(c(_e(null)),c({type:"setImageData",data:a}),i)try{c(Ie(!0));const e=await async function(e){const i=await fe.b.getInstance().build().withEndpointIdentifier("image-upload/v4/user-profile").withHost("https://image-upload.spotify.com/v4").withMethod("POST").withPath("/user-profile").withBody(e).withoutGlobalHeaders().withHeaders([{key:"Content-Type",value:"image/jpeg"}]).withoutMarket().send();if(!i.body)throw new Error("No upload token recieved");return i.body.uploadToken}(i);c({type:"setImageToken",token:e}),c(Ie(!1))}catch{c(_e(Se))}},onError:p}),(0,N.jsxs)("div",{className:Oe,children:[(0,N.jsx)(z,{name:i,images:g,onClickEdit:u,onClickRemove:v,canEdit:o.edit_image}),m.loading&&(0,N.jsx)("div",{className:De,children:(0,N.jsx)(M.T,{})})]}),(0,N.jsxs)("div",{className:Ee,children:[(0,N.jsx)("label",{htmlFor:"user-edit-name",className:Le,children:(0,N.jsx)(E.x,{variant:"marginalBold",className:Me,children:d.ag.get("user.edit-details.name-label")})}),(0,N.jsx)("input",{"data-testid":"user-edit-name-input",id:"user-edit-name",type:"text",dir:"auto",className:s()(Ue,We),onChange:e=>{c(function(e){return{type:"setName",name:e}}(e.target.value))},placeholder:d.ag.get("user.edit-details.name-placeholder"),maxLength:32,value:m.name,disabled:!o.edit_name})]}),(0,N.jsx)("div",{className:He,children:(0,N.jsx)(W.D,{colorSet:"invertedLight",onClick:k,disabled:m.loading,children:d.ag.get("save")})}),(0,N.jsx)(E.x,{as:"p",variant:"marginalBold",className:Ke,children:d.ag.get("image-upload.legal-disclaimer")})]})]})})}));var Ve=a(10732),Be=a(25025),Qe=a(53885),Ge=a(59402),Ze=a(22215),ze=a(77020),qe=a(68167),Xe=a(81085),Ye=a(20704),$e=a(91364),ei=a(9705),ii=a(66562),ai=a(11129),ti=a(60809),ni=a(48439),li=a(73745),oi=a(16421),ri=a(48241),si=a(71932);const di=t.memo((function({openModal:e,spec:i,logger:a,name:n,backgroundColor:l,isCurrentUser:o,uri:r}){const[s,u]=(0,oi.H)(r),m=(0,ni.o)(),c=!(0,li.k)(),g=(0,t.useCallback)((()=>{m({targetUri:r,intent:s?"unfollow":"follow",type:"click"});const e=i.actionBarFactory().followButtonFactory();s?(u(!1),a.logInteraction(e.hitUnfollow({itemToBeUnfollowed:r}))):(u(!0),a.logInteraction(e.hitFollow({itemToBeFollowed:r})))}),[s,a,m,u,i,r]),p=(0,t.useCallback)((()=>{const e=i.actionBarFactory().contextMenuButtonFactory().hitUiReveal();a.logInteraction(e)}),[a,i]),v=(0,si.j)();return(0,N.jsx)(ei.o,{backgroundColor:l,children:(0,N.jsxs)(ei.F,{children:[!o&&(0,N.jsx)(ai.r,{children:(0,N.jsx)(ti.e,{isFollowing:Boolean(s),onClick:g,disabled:c})}),(0,N.jsx)(ri.y,{menu:(0,N.jsx)(C.I,{uri:r,onEditProfileCallback:e}),children:(0,N.jsx)(ii.z,{label:d.ag.get("more.label.context",n),onClick:p,size:v})})]})})}));var ui=a(70355),mi=a(17997),ci=a(97734),gi=a(90407),pi=a(453),vi=a(79287),ki=a(99146),hi=a(92718);const fi=t.memo((function({tracks:e,hasHeaderRow:i=!1,nrTracksVisible:a,uri:n}){const l=(0,X.C)(n),r=(0,o.qC)(l,"tracks").toURI(),s=(0,t.useMemo)((()=>a?e.slice(0,a):e),[a,e]),{usePlayContextItem:u}=(0,vi.n)({uri:r,pages:[{items:e.map((e=>({type:hi.p.TRACK,uri:e.uri,uid:null,provider:null})))}]},{featureIdentifier:"profile",referrerIdentifier:"user_profile"}),m=(0,t.useCallback)(((e,i)=>{const a=(0,Ye.X)(e?.albumOfTrack?.coverArt?.sources,{desiredSize:40});return(0,N.jsx)(ci.SS,{index:i,uri:(0,gi.$)(e),duration_ms:e.duration.totalMilliseconds,name:e.name,artists:e.artists.items.map((({uri:e,profile:{name:i}})=>({uri:e,name:i}))),album:e.albumOfTrack,isPlayable:!0,isExplicit:e.contentRating?.label===ki.KS.Explicit,isMOGEFRestricted:e.contentRating?.label===ki.KS.NineteenPlus,imgUrl:a?.url||"",contextUri:r,usePlayContextItem:u},i+e.uri)}),[r,u]),c=(0,t.useMemo)((()=>[mi.QD.INDEX,mi.QD.TITLE_AND_ARTIST,mi.QD.ALBUM,mi.QD.DURATION]),[]),g=(0,t.useCallback)((e=>({uri:e.uri})),[]);return(0,N.jsx)(pi.JL,{value:"user-top-tracks-tracklist",children:(0,N.jsx)(mi.Pv,{ariaLabel:d.ag.get("top_tracks_this_month"),renderRow:m,nrTracks:s.length,tracks:s,resolveItem:g,hasHeaderRow:i,columns:c,columnPersistenceKey:"user-top-tracks-tracklist"})})}),((e,i)=>e.tracks===i.tracks)),bi=t.memo((function({tracks:e,title:i,tagline:a,seeAllUri:n,className:l,uri:o,spec:r}){const s=(0,Xe.$P)(),d=(0,t.useCallback)((()=>{const e=r.titleLinkFactory().hitUiNavigate({destination:n});s.logInteraction(e)}),[s,n,r]),u=(0,t.useCallback)((()=>{const e=r.titleLinkFactory().hitUiNavigate({destination:n});s.logInteraction(e)}),[s,n,r]);if(!e||0===e.totalCount||0===e.items.length)return null;const m=e.totalCount>4;return(0,N.jsxs)("section",{className:l,children:[(0,N.jsx)(ui.r,{title:i,tagline:a,seeAllUri:n,hasMoreElements:m,onClickTitle:d,onClickSeeAll:u}),(0,N.jsx)(Xe.Nh,{spec:r,children:(0,N.jsx)(fi,{tracks:e.items,uri:o,nrTracksVisible:4})})]})}),((e,i)=>e.tracks===i.tracks));function yi(e,i){switch(i.type){case"OPEN_MODAL":return{isModalOpen:!0,modalVariant:"editProfile",shouldOpenImagePicker:!1};case"OPEN_MODAL_WITH_IMAGEPICKER":return{isModalOpen:!0,modalVariant:"editProfile",shouldOpenImagePicker:!0};case"CLOSE_MODAL":return{isModalOpen:!1,modalVariant:null,shouldOpenImagePicker:!1};default:return e}}var Ni=a(71013),xi=a(78344),Si=a(80833),Ii=a(30485),_i=a(83236),Ti=a(545),ji=a(73196),wi=(a(63961),a(21164),a(27642));const Ai={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"userTopContent"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"includeTopArtists"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"topArtistsInput"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"AffinityInput"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"includeTopTracks"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"topTracksInput"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"AffinityInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"me"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"userTopArtists"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userTopTracks"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"userTopArtists"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"topArtists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"topArtistsInput"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"includeTopArtists"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ArtistPageV2"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Artist"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"visuals"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"userTopTracks"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"topTracks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"topTracksInput"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"includeTopTracks"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"TrackPageV2"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"saved"}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"albumOfTrack"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]};function Pi(e){return"Artist"===e.__typename}function Ci(e){if("ArtistPageV2"!==e?.topArtists?.__typename)return null;const i=e.topArtists.items.map((e=>e.data)).filter(Pi);return 0===i.length?null:{totalCount:e.topArtists.totalCount,items:i}}function Fi(e){return"Track"===e.__typename}function Ri(e){if("TrackPageV2"!==e?.topTracks?.__typename)return null;const i=e.topTracks.items.map((e=>e.data)).filter(Fi).filter((e=>null!==e.albumOfTrack));return 0===i.length?null:{totalCount:e.topTracks.totalCount,items:i}}const Oi=ki.K1.Affinity,Di=ki.eB.ShortTerm;function Ui({includeTopArtists:e,includeTopTracks:i,topArtistsLimit:a,topTracksLimit:t}){const{data:n,loading:l,error:o}=(r={includeTopArtists:e,topArtistsInput:{offset:0,limit:a,sortBy:Oi,timeRange:Di},includeTopTracks:i,topTracksInput:{offset:0,limit:t,sortBy:Oi,timeRange:Di}},s={enabled:e||i,gcTime:18e5,staleTime:3e5},(0,wi.a)(Ai,r,s));var r,s;return null!==o?{topTracks:null,topArtists:null,loading:l,error:new Error("Failed loading user top content!")}:{topTracks:Ri(n?.me?.profile??null),topArtists:Ci(n?.me?.profile??null),loading:l,error:null}}const Ei=18e5,Li=3e5,Mi=(0,T.P1)(Qe.dy,(e=>e?.images||[])),Wi=({uri:e,isCurrentUser:i})=>{const a=(0,_.v9)(Qe.dy)?.uri,n=(0,_.v9)(Qe.Gf),l=(0,_.v9)(Mi),r=(0,_.I0)(),c=(0,I.NL)(),h=(0,j.W6)(ji.J4M,{loadingValue:!0}),f=(0,t.useMemo)((()=>(0,Ye.X)(l)),[l]),[{isModalOpen:b,modalVariant:y,shouldOpenImagePicker:x},S]=function(){const[e,i]=(0,t.useReducer)(yi,{isModalOpen:!1,modalVariant:null,shouldOpenImagePicker:!1});return[e,i]}(),{data:T,loading:E,queryKey:L}=(0,p.J)(g.n5.getProfile,[{uri:e,playlists:10,artists:10,episodes:10}],{gcTime:Ei,staleTime:Li}),M=(0,Ve.g)();(0,Ti.d)(_i.rA.OPERATION_COMPLETE,(()=>{c.invalidateQueries({queryKey:L})})),(0,qe.b)(ze.EW.OPERATION_COMPLETE,(()=>{c.invalidateQueries({queryKey:L})}));const W=T?.public_playlists,H=T?.is_verified,K=T?.recently_played_artists,J=i?f?.url||"":T?.image_url||"",V=(0,X.C)(e),B=(i?n:T?.name)||"",Q=(0,Be.Z)(T?.image_url||null),{spec:G,logger:Z}=(0,Xe.fU)(w.L,{data:{uri:e}}),z=(0,t.useMemo)((()=>G.sectionTopTracksFactory()),[G]),q=!M&&(!1!==T?.show_follows||i),Y=i&&h,{data:$,loading:ee}=(0,p.J)(g.n5.getFollowing,[e],{enabled:q,gcTime:Ei,staleTime:Li}),ie=$?.profiles,{data:ae,loading:te}=(0,p.J)(g.n5.getFollowers,[e],{enabled:q,gcTime:Ei,staleTime:Li}),ne=ae?.profiles,le=ie?.some((e=>e.uri===a)),{topArtists:oe,topTracks:re,loading:se}=Ui({includeTopArtists:Y,includeTopTracks:Y,topArtistsLimit:10,topTracksLimit:4}),de=(0,t.useCallback)((e=>{S({type:"CLOSE_MODAL"}),e&&(r((0,Ge.dL)(e.name)),r((0,Ge.GR)(e.image?[{url:e.image,height:null,width:null}]:[])))}),[S,r]),ue=(0,t.useCallback)((()=>{S({type:"OPEN_MODAL"});const e=G.headerFactory().usernameFactory().hitUiReveal();Z.logInteraction(e)}),[Z,S,G]),me=(0,t.useCallback)((()=>{S({type:"OPEN_MODAL_WITH_IMAGEPICKER"});const e=G.headerFactory().profileImageFactory().hitUiReveal();Z.logInteraction(e)}),[Z,S,G]),ce=(0,t.useMemo)((()=>[{url:J}]),[J]),ge=(0,t.useCallback)((()=>{const e=G.headerFactory().usernameFactory().hitUiReveal();Z.logInteraction(e)}),[Z,G]),pe=(0,t.useCallback)(((e,i)=>{if(!i)return;const a=G.headerFactory().followersLinkFactory().hitUiNavigate({destination:i});Z.logInteraction(a)}),[Z,G]),ve=(0,t.useCallback)(((e,i)=>{if(!i)return;const a=G.headerFactory().followersLinkFactory().hitUiNavigate({destination:i});Z.logInteraction(a)}),[Z,G]);if(!T||E||ee||te||se)return(0,N.jsx)(m.h,{hasError:!1,errorMessage:d.ag.get("error.not_found.title.page")});const ke=s()("contentSpacing",k),he=q&&!!ne?.length,fe=q&&!!ie?.length;return(0,N.jsxs)("div",{className:v,children:[(0,N.jsx)(F.$,{children:B}),(0,N.jsxs)(O.gF,{backgroundColor:Q,children:[(0,N.jsx)(D.W,{children:(0,N.jsx)(U.i,{text:B})}),(0,N.jsx)(Ze._,{menu:(0,N.jsx)(C.I,{uri:T.uri}),children:(0,N.jsx)(Ni.k,{children:(0,N.jsx)(R.T,{canEdit:i&&!T.edit_image_disabled,name:B,images:ce,onClick:me,placeholderType:"user",shape:O.Kc.CIRCLE})})}),(0,N.jsxs)(O.sP,{children:[(0,N.jsx)(xi.g,{children:H?(0,N.jsx)(Si.S,{text:d.ag.get("card.tag.profile")}):d.ag.get("card.tag.profile")}),(0,N.jsx)(Ze._,{menu:(0,N.jsx)(C.I,{uri:T.uri}),children:(0,N.jsx)(O.xd,{canEdit:i&&!T.edit_name_disabled,editTitle:d.ag.get("playlist.edit-details.title"),onClick:ue,children:B})}),(0,N.jsx)(O.QS,{totalFollowers:T.followers_count,totalFollowing:T.following_count,publicPlaylists:T.total_public_playlists_count,userUri:e,onCreatorClick:ge,onTotalFollowersClick:pe,onTotalFollowingClick:ve,theyFollowUs:le})]})]}),(0,N.jsx)(di,{openModal:ue,spec:G,logger:Z,name:B,backgroundColor:Q,isCurrentUser:i,uri:e}),(0,N.jsxs)(Xe.Nh,{spec:G,children:[i&&(0,N.jsxs)(N.Fragment,{children:[null!==oe&&(0,N.jsx)(Ii.q,{className:ke,total:oe.totalCount,title:d.ag.get("top_artists_this_month"),tagline:d.ag.get("only_visible_to_you"),seeAllUri:(0,o.QK)(V,["top","artists"]).toURI(),id:"top-artists",index:0,children:oe.items.map(((e,i)=>(0,N.jsx)(A.I,{index:i,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources??[]},e.uri)))}),(0,N.jsx)(bi,{className:ke,title:d.ag.get("top_tracks_this_month"),tagline:d.ag.get("only_visible_to_you"),seeAllUri:(0,o.QK)(V,["top","tracks"]).toURI(),uri:e,tracks:re,spec:z})]}),(0,N.jsx)(Ii.q,{className:ke,total:T.total_public_playlists_count,title:d.ag.get("public_playlists"),seeAllUri:(0,o.QK)(V,["playlists"]).toURI(),id:"playlists",index:1,children:W?.map(((e,i)=>(0,N.jsx)(P.Z,{index:i,uri:e.uri,name:e.name,images:[{url:(0,$e.p)({imageUriOrUrl:e.image_url}),width:300,height:300}],authorName:e.owner_name,description:e.followers_count?d.ag.get("user.followers",e.followers_count):""},e.uri)))}),K?.length?(0,N.jsx)(Ii.q,{className:ke,total:K?.length,title:d.ag.get("recently_played_artists"),seeAllUri:(0,o.QK)(V,["recently-played-artists"]).toURI(),id:"recently-played-artists",index:2,children:K?.map(((e,i)=>(0,N.jsx)(A.I,{index:i,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,he?(0,N.jsx)(Ii.q,{className:ke,title:d.ag.get("followers"),total:ne?.length,seeAllUri:(0,o.QK)(V,["followers"]).toURI(),id:"followers",index:3,children:ne?.map(((e,i)=>(0,N.jsx)(u.P,{index:i,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,fe?(0,N.jsx)(Ii.q,{className:ke,title:d.ag.get("following"),total:ie?.length,seeAllUri:(0,o.QK)(V,["following"]).toURI(),id:"following",index:4,children:ie?.map(((e,i)=>(0,N.jsx)(u.P,{index:i,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,i&&b&&("editProfile"===y?(0,N.jsx)(Je,{uri:e,name:B,image:J,onClose:de,shouldOpenImagePicker:x,userCapabilities:{edit_image:!T?.edit_image_disabled,edit_name:!T?.edit_name_disabled}}):null)]})]})},Hi=e=>{const{uri:i}=e,{data:a,loading:t,error:n}=(0,p.J)(g.n5.getPlaylists,[{uri:i}]),{public_playlists:l,total_public_playlists_count:o=0}=a||{};return t?(0,N.jsx)(m.h,{hasError:null!==n,errorMessage:d.ag.get("error.not_found.title.page")}):(0,N.jsx)(c.P,{className:s()("contentSpacing",h),total:o,title:d.ag.get("public_playlists"),showAll:!0,children:l?.map(((e,i)=>(0,N.jsx)(P.Z,{index:i,uri:e.uri,name:e.name,authorName:e.owner_name,description:e.followers_count?d.ag.get("user.followers",e.followers_count):"",images:[{url:(0,$e.p)({imageUriOrUrl:e.image_url}),width:300,height:300}]},e.uri)))})},Ki=e=>{const{uri:i}=e,{data:a,loading:t,error:n}=(0,p.J)(g.n5.getRecentlyPlayedArtists,[{uri:i,limit:50}]),l=a?.artists;return t?(0,N.jsx)(m.h,{hasError:null!==n,errorMessage:d.ag.get("error.not_found.title.page")}):(0,N.jsx)(c.P,{className:s()("contentSpacing",h),total:l?.length,title:d.ag.get("recently_played_artists"),showAll:!0,children:l?.map(((e,i)=>(0,N.jsx)(A.I,{index:i,name:e.name,uri:e.uri,images:[{url:e.image_url}]},e.uri)))})},Ji=()=>{const{topArtists:e,loading:i,error:a}=Ui({includeTopArtists:!0,includeTopTracks:!1,topArtistsLimit:100,topTracksLimit:0});return i?(0,N.jsx)(m.h,{hasError:null!==a,errorMessage:d.ag.get("error.not_found.title.page")}):null===e?null:(0,N.jsx)(c.P,{className:s()("contentSpacing",h),total:e.items.length,title:d.ag.get("top_artists_this_month"),tagline:d.ag.get("only_visible_to_you"),showAll:!0,children:e.items.map(((e,i)=>(0,N.jsx)(A.I,{index:i,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources??[]},e.uri)))})},Vi=({isCurrentUser:e})=>e?(0,N.jsx)(Ji,{}):(0,N.jsx)(m.h,{hasError:!0,errorMessage:d.ag.get("error.not_found.title.page")}),Bi=({uri:e})=>{const{topTracks:i,loading:a,error:t}=Ui({includeTopArtists:!1,includeTopTracks:!0,topArtistsLimit:0,topTracksLimit:100});return a?(0,N.jsx)(m.h,{hasError:null!==t,errorMessage:d.ag.get("error.not_found.title.page")}):null===i?null:(0,N.jsxs)("div",{className:s()("contentSpacing",h,f),children:[(0,N.jsxs)("div",{className:b,children:[(0,N.jsx)(E.x,{as:"h1",variant:"titleSmall",className:y,children:d.ag.get("top_tracks_this_month")}),(0,N.jsx)(E.x,{as:"p",variant:"bodySmall",children:d.ag.get("only_visible_to_you")})]}),(0,N.jsx)(fi,{tracks:i.items,uri:e,hasHeaderRow:!0})]})},Qi=({uri:e,isCurrentUser:i})=>i?(0,N.jsx)(Bi,{uri:e}):(0,N.jsx)(m.h,{hasError:!0,errorMessage:d.ag.get("error.not_found.title.page")});var Gi=a(89170);var Zi=a(80661);const zi=(0,t.memo)((function(){const{userId:e=""}=(0,n.UO)(),i=decodeURIComponent(e),a=(0,o.QK)(i).toURI(),t=(e=>{const i=(0,Ve.g)(),a=(0,Gi.r)()?.username;return!i&&a===e})(i);return(0,N.jsx)("section",{children:(0,N.jsxs)(n.Z5,{children:[(0,N.jsx)(n.AW,{path:"playlists",element:(0,N.jsx)(Zi.K,{pageId:l.Wg.PROFILE_PLAYLISTS,children:(0,N.jsx)(Hi,{uri:a})})}),(0,N.jsx)(n.AW,{path:"top/tracks",element:(0,N.jsx)(Zi.K,{pageId:l.Wg.PROFILE_TOP_TRACKS,children:(0,N.jsx)(Qi,{uri:a,isCurrentUser:t})})}),(0,N.jsx)(n.AW,{path:"top/artists",element:(0,N.jsx)(Zi.K,{pageId:l.Wg.PROFILE_TOP_ARTISTS,children:(0,N.jsx)(Vi,{isCurrentUser:t})})}),(0,N.jsx)(n.AW,{path:"recently-played-artists",element:(0,N.jsx)(Zi.K,{pageId:l.Wg.PROFILE_RECENTLY_PLAYED_ARTISTS,children:(0,N.jsx)(Ki,{uri:a})})}),(0,N.jsx)(n.AW,{path:"following",element:(0,N.jsx)(Zi.K,{pageId:l.Wg.PROFILE_FOLLOWING,children:(0,N.jsx)(S,{uri:a})})}),(0,N.jsx)(n.AW,{path:"followers",element:(0,N.jsx)(Zi.K,{pageId:l.Wg.PROFILE_FOLLOWERS,children:(0,N.jsx)(x,{uri:a})})}),(0,N.jsx)(n.AW,{path:"/",element:(0,N.jsx)(Zi.K,{pageId:l.Wg.PROFILE,children:(0,N.jsx)(Wi,{uri:a,isCurrentUser:t})})})]})})}))},89170:(e,i,a)=>{a.d(i,{r:()=>l});a(38910);var t=a(35869),n=a(92718);const l=()=>{const e=(0,t.v9)((e=>e.session?.user));return e?{type:n.p.USER,uri:e.uri,username:e.id,displayName:e.display_name??null,images:e.images.map((({url:e,width:i,height:a})=>({url:e,width:i||void 0,height:a||void 0})))}:null}}}]);
//# sourceMappingURL=xpui-routes-profile.js.map