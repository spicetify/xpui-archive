"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[32],{30032:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var s=a(79474),d=a(97903),i=(a(1137),a(43029)),n=a(88644),l=a(78570),r=a(58258),o=a(99624),c=a(48762),h=a(37298),u=a(35195),v=a(17737),b=a(30556),m=a(77235),_=a(68951);const x="hfqIVj1Uq2_MEUCyMms_",g="eZiwIWjLcgezw4G4FF4U";var f=a(13274);const w="40px",p=({leavebehinds:e})=>{let t;return 1===e.length&&(t=(0,f.jsx)(i.E,{variant:"bodySmallBold",semanticColor:"textBase",children:e[0].advertiser})),2===e.length&&(t=h.R.get("podcast-ads.recent_ads_just_two",(0,f.jsx)(i.E,{variant:"bodySmallBold",semanticColor:"textBase",children:e[0].advertiser}),(0,f.jsx)(i.E,{variant:"bodySmallBold",semanticColor:"textBase",children:e[1].advertiser}))),e.length>2&&(t=h.R.get("podcast-ads.recent_ads_more_than_two",(0,f.jsx)(i.E,{variant:"bodySmallBold",semanticColor:"textBase",children:e[0].advertiser}),(0,f.jsx)(i.E,{variant:"bodySmallBold",semanticColor:"textBase",children:e[1].advertiser}))),(0,f.jsxs)(i.E,{variant:"bodySmall",semanticColor:"textSubdued","data-testid":"show-leavebehinds-text",children:[h.R.get("podcast-ads.recent_ads_from"),t]})},y=({leavebehinds:e,uri:t,surface:a})=>{const d=(0,v.vh)();if((0,s.useEffect)((()=>{t&&e.length>0&&d.send((0,o.x)({leavebehind_request_id:e[0].requestId,event:"event_viewed",event_reason:`viewed_on_${(0,b.Fh)(a).toLowerCase()}`,surface:(0,b.Fh)(a),uri:t}))}),[d,e,t,a]),0===e.length)return null;const r=(0,c.o_)(t)?.id,y=1===e.length?e[0].clickthroughUrl:(0,m.V)(r),C=_.Qd,B=e.length>C,E=e.length-(C-1),k=e.slice(0,B?C-1:C);return(0,f.jsx)(u.default,{to:y,pathname:e.length>1?y:void 0,state:{uri:t},className:g,onClick:()=>d.send((0,o.x)({leavebehind_request_id:e[0].requestId,event:"event_clicked",event_reason:"cta_see_all",surface:(0,b.Fh)(a),uri:t})),"data-testid":"show-leavebehinds-container",children:(0,f.jsx)(n.v,{layout:"wide",variant:"tinted",size:"xl",id:"show-leavebehinds",title:(0,f.jsxs)("div",{className:x,"data-testid":"show-leavebehinds-logos-container",children:[k.map((e=>(0,f.jsx)(l.C,{"data-testid":"show-leavebehind-image",src:e.displayImage.src,alt:e.displayImage.alt,imageHeight:w,imageWidth:w},e.adId))),B?(0,f.jsx)(j,{"data-testid":"show-leavebehinds-more-count-indicator",variant:"tinted",minBlockSize:w,borderRadius:"4px",padding:"6px",children:(0,f.jsx)(i.E,{variant:"bodyMedium","data-testid":"show-leavebehinds-more-count-indicator-text",children:h.R.get("podcast-ads.show_more_indicator",E)})}):null]}),body:(0,f.jsx)(p,{leavebehinds:e})})})};var j=(0,d.Ay)(r.a).withConfig({displayName:"LeavebehindsPreview___StyledBox",componentId:"sc-f5rbik-0"})({backgroundColor:"#121212",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"}),C=a(88918);const B=b.ui.SHOW_PAGE;function E({uri:e}){const{data:t,error:a,getLeavebehinds:d}=(0,C.A)({surface:B,uri:e});(0,s.useEffect)((()=>{d()}),[d]);const i=(0,s.useMemo)((()=>t?(0,_.iT)(t,e):[]),[t?.requestId]);return a||t?.leavebehindAds&&t?.leavebehindAds?.length<1?null:(0,f.jsx)(y,{leavebehinds:i,uri:e,surface:B})}}}]);
//# sourceMappingURL=32.js.map