"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3623],{33623:(a,e,t)=>{t.d(e,{DsaModal:()=>$});var s=t(50959),i=t(40587),n=t(29482),l=t(54812),d=t(7769),r=t(34076),o=t(98900),c=t(62180),g=t(65742),m=t(42370),u=(t(95101),t(27396),t(99692),t(48392)),E=t(73031),h=t(42982),N=t(60933);let x=function(a){return a[a.UNKNOWN=0]="UNKNOWN",a[a.AGE=1]="AGE",a[a.GEO=2]="GEO",a[a.GENDER=3]="GENDER",a[a.INTEREST=4]="INTEREST",a[a.UNRECOGNIZED=-1]="UNRECOGNIZED",a}({});const f={fromJSON:a=>({targetingTypes:globalThis.Array.isArray(a?.targetingTypes)?a.targetingTypes.map((a=>function(a){switch(a){case 0:case"UNKNOWN":return x.UNKNOWN;case 1:case"AGE":return x.AGE;case 2:case"GEO":return x.GEO;case 3:case"GENDER":return x.GENDER;case 4:case"INTEREST":return x.INTEREST;default:return x.UNRECOGNIZED}}(a))):[],legalEntityName:T(a.legalEntityName)?globalThis.String(a.legalEntityName):"",showTailoredAdsSection:T(a.showTailoredAdsSection)?Boolean(a.showTailoredAdsSection):void 0}),toJSON(a){const e={};return a.targetingTypes?.length&&(e.targetingTypes=a.targetingTypes.map((a=>function(a){switch(a){case x.UNKNOWN:return"UNKNOWN";case x.AGE:return"AGE";case x.GEO:return"GEO";case x.GENDER:return"GENDER";case x.INTEREST:return"INTEREST";case x.UNRECOGNIZED:default:return"UNRECOGNIZED"}}(a)))),""!==a.legalEntityName&&(e.legalEntityName=a.legalEntityName),void 0!==a.showTailoredAdsSection&&(e.showTailoredAdsSection=a.showTailoredAdsSection),e},create:a=>f.fromPartial(a??{}),fromPartial(a){const e={targetingTypes:[],legalEntityName:"",showTailoredAdsSection:void 0};return e.targetingTypes=a.targetingTypes?.map((a=>a))||[],e.legalEntityName=a.legalEntityName??"",e.showTailoredAdsSection=a.showTailoredAdsSection??void 0,e}};function T(a){return null!=a}var v=t(35319),b=t(41426),j=t(23204);const y="khENZvA4G9EjpLQiINss",p="Fu87PEr0tL6oDjmw_X2H";var A=t(11527);const _=({title:a,showTitle:e,children:t})=>(0,A.jsxs)("section",{className:y,children:[e&&(0,A.jsx)(n.D,{className:p,variant:"balladBold",as:"h3","aria-label":a,children:a}),t]});var w=t(59721);const G="P9gpV_sgryfUERYOdfor",R=({text:a,icon:e})=>(0,A.jsxs)(w.n,{className:G,condensed:!0,children:[e,(0,A.jsx)(n.D,{variant:"ballad","aria-label":a,as:"h4",children:a})]}),I="FB2PxTNhkGbwFwYI2ufG",O="gZYgXNWbFSAAjLzGhOI9",S="eYxzC4s3Nw68RcbK7xzl",D="QrelMvam4WOTMVaO28Rl",k="_EaBFRLKy0nZJXkiRwlx",C="N77hKGzNc_lKQ5OG1EBN",B="JceC3xibcl3MHVULIK0b",U="Uk72m6OFBBdTZ3RJb0K_",F="IFqCps3krPbH25azco3F";const K=({activeTargetingTypes:a,item:e})=>{const t=(0,m.s4)(),{openURLWithSessionTransfer:s}=(0,j.e)();return[x.AGE,x.GENDER].some((e=>a.includes(e)))?(0,A.jsxs)(_,{title:o.ag.get("ad-formats.dsa.modal.profileInfo"),showTitle:!0,children:[(0,A.jsx)(E.d,{className:F,condensedAll:!0,style:{marginBlockEnd:h.o7},children:a.map((a=>{const e=function(a){switch(a){case x.AGE:return{icon:(0,A.jsx)(u.f,{}),text:o.ag.get("ad-formats.dsa.modal.targeting.age")};case x.GENDER:return{icon:(0,A.jsx)(u.f,{}),text:o.ag.get("ad-formats.dsa.modal.targeting.gender")};default:return null}}(a);return e?(0,A.jsx)(R,{icon:e.icon,text:e.text},a):null}))}),(0,A.jsx)(n.D,{variant:"ballad",semanticColor:"textSubdued","aria-label":o.ag.get("ad-formats.dsa.modal.adRelevancyAction"),children:o.ag.get("ad-formats.dsa.modal.adRelevancyAction")}),(0,A.jsxs)(N.h,{component:"button","aria-label":"Edit your Spotify profile, link",className:C,semanticColor:"textBrightAccent",onClick:()=>{s(b.VF),t.send((0,r.u)({ad_id:e.adId,lineitem_id:e.metadata?.lineitem_id,creative_id:e.metadata?.creative_id,slot:e.slot,event:"event_clicked",reason:"edit_profile",surface:"ad_dsa_view"}))},standalone:!0,children:[(0,A.jsx)(n.D,{variant:"balladBold",as:"h2",children:o.ag.get("ad-formats.dsa.modal.editProfile")}),(0,A.jsx)(v.h,{semanticColor:"textBrightAccent"})]})]}):null};var W=t(88805),Z=t(30836);const z=({activeTargetingTypes:a})=>{const e=[x.GEO,x.INTEREST].some((e=>a.includes(e)));if(!e)return null;const t=e&&a.some((a=>a===x.AGE||a===x.GENDER));return(0,A.jsx)(_,{title:o.ag.get("ad-formats.dsa.modal.otherInfo"),showTitle:t,children:(0,A.jsx)(E.d,{className:F,condensedAll:!0,children:a.map((a=>{const e=function(a){switch(a){case x.GEO:return{icon:(0,A.jsx)(W.n,{}),text:o.ag.get("ad-formats.dsa.modal.targeting.location")};case x.INTEREST:return{icon:(0,A.jsx)(Z.a,{}),text:o.ag.get("ad-formats.dsa.modal.targeting.interests")};default:return null}}(a);return e?(0,A.jsx)(R,{icon:e.icon,text:e.text},a):null}))})})},L=({item:a})=>{const e=(0,m.s4)(),{openURLWithSessionTransfer:t}=(0,j.e)();return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("hr",{className:B}),(0,A.jsx)(n.D,{className:U,variant:"canon","aria-label":o.ag.get("ad-formats.dsa.modal.aboutTailoredAds"),as:"h2",children:o.ag.get("ad-formats.dsa.modal.aboutTailoredAds")}),(0,A.jsx)(n.D,{variant:"ballad",semanticColor:"textSubdued","aria-label":o.ag.get("ad-formats.dsa.modal.tailoredAds"),children:o.ag.get("ad-formats.dsa.modal.tailoredAds")}),(0,A.jsxs)(N.h,{component:"button","aria-label":"Visit your privacy settings, link",className:C,semanticColor:"textBrightAccent",onClick:()=>{t(`${b.Vx}/#tailored-ads`),e.send((0,r.u)({ad_id:a.adId,creative_id:a.metadata?.creative_id,event:"event_clicked",lineitem_id:a.metadata?.lineitem_id,reason:"change_preferences",request_id:a.requestId,slot:a.slot,surface:"ad_dsa_view"}))},standalone:!0,children:[(0,A.jsx)(n.D,{variant:"balladBold",as:"h2",children:o.ag.get("ad-formats.dsa.modal.privacySetting")}),(0,A.jsx)(v.h,{semanticColor:"textBrightAccent"})]})]})};var J=t(61441),P=t(74658),M=t(6215),V=t(97432);const q="vkMQw77rXE4cp8xsAdzl",Q="emw6kR941D2wReukhCAJ",X=({advertiser:a,legalEntityName:e})=>{const{item:t}=(0,J.x)()||{item:null},s=t&&(0,M.k6)(t)?t?.images:void 0,i=(0,V.o)(s);return(0,A.jsxs)("div",{className:q,children:[i&&(0,A.jsx)(P.Ee,{className:Q,src:i,loading:"lazy"}),(0,A.jsx)(n.D,{variant:"balladBold","aria-label":a,children:a}),e&&(0,A.jsx)(n.D,{variant:"mesto",semanticColor:"textSubdued","aria-label":e,children:e})]})};var Y=t(57983);const H=a=>{const[e,t]=(0,s.useState)(null),[i,n]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{a?.metadata?.lineitem_id&&a.adId&&(async a=>{try{n(!0);const e=await Y.fi.getDsaAdMetadata(a);t(f.fromJSON(e)),n(!1)}catch(a){n(!1)}})({lineitemId:a.metadata.lineitem_id,adId:a.adId})}),[a]),{data:e,loading:i}},$=({item:a})=>{const e=(0,m.s4)(),t=(0,i.I0)(),{isOpen:u}=(0,i.v9)((a=>a.ui.dsaDialog)),{data:E,loading:h}=H(a);return(0,s.useEffect)((()=>{e.send((0,r.u)({ad_id:a.adId,creative_id:a.metadata?.creative_id,event:"event_viewed",lineitem_id:a.metadata?.lineitem_id,reason:"ad_dsa_view",request_id:a.requestId,slot:a.slot,surface:"ad_dsa_view"}))}),[]),(0,A.jsxs)(g.Z,{className:I,isOpen:u,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,contentLabel:o.ag.get("ad-formats.dsa.aboutThisAd"),children:[(0,A.jsx)("div",{className:S,children:(0,A.jsx)(n.D,{"aria-label":o.ag.get("ad-formats.dsa.aboutThisAd"),variant:"alto",as:"h1",children:o.ag.get("ad-formats.dsa.aboutThisAd")})}),(0,A.jsx)("hr",{className:B}),(0,A.jsx)("div",{className:O,children:h?(0,A.jsx)("div",{className:D,"data-testid":"loading-indicator",children:(0,A.jsx)(l.T,{size:"large"})}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(X,{advertiser:a.metadata.advertiser,legalEntityName:E?.legalEntityName}),E?.targetingTypes.length?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(n.D,{className:U,variant:"canon",as:"h2","aria-label":o.ag.get("ad-formats.dsa.modal.adBasedInfoExplanation"),children:o.ag.get("ad-formats.dsa.modal.adBasedInfoExplanation")}),(0,A.jsx)(K,{item:a,activeTargetingTypes:E?.targetingTypes}),(0,A.jsx)(z,{item:a,activeTargetingTypes:E?.targetingTypes})]}):(0,A.jsx)(n.D,{className:U,as:"h2","aria-label":o.ag.get("ad-formats.dsa.modal.targeting.unknown"),tabIndex:0,children:o.ag.get("ad-formats.dsa.modal.targeting.unknown")}),E?.showTailoredAdsSection&&(0,A.jsx)(L,{item:a})]})}),(0,A.jsx)("button",{"aria-label":o.ag.get("close_button_action"),className:k,onClick:()=>{t((0,c.ni)())},children:(0,A.jsx)(d.k,{size:"medium",semanticColor:"textBase"})})]})}}}]);
//# sourceMappingURL=3623.js.map