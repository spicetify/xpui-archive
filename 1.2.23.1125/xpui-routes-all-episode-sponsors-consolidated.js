"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[5145],{62774:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var r=s(59496),a=s(31752),n=s(38273),u=s(76354),c=s(32998),i=s(52855),d=s(4637);function o(){const e=(0,a.TH)().state,t=u.Tg.PODCAST_SEE_ALL,{data:s,error:o,getLeavebehinds:f}=(0,c.Z)({surface:t,uri:e.uri});if((0,r.useEffect)((()=>{f()}),[]),!s?.leavebehindAds||o)return null;const l=(0,i.D7)(s,e.uri);return(0,d.jsx)("div",{className:"contentSpacing",children:(0,d.jsx)(n.w,{entityType:"podcast",leavebehinds:l,surface:t,uri:e.uri})})}},32998:(e,t,s)=>{s.d(t,{Z:()=>o});var r=s(59496),a=s(5133),n=s(63820),u=s(95787),c=s(73208),i=s(76354),d=s(52855);const o=function(e){const[t,s]=(0,r.useState)(),[o,f]=(0,r.useState)(!1),l=(0,n.s4)();return{data:t,error:o,getLeavebehinds:(0,r.useCallback)((async()=>{try{const t=await c.fi.getLeavebehindsData(u.b.getInstance(),(0,i.OO)(e.surface),e.uri);if(!t.ok)throw new Error(`Request failed with status: ${t.status}`);s(t.body)}catch(t){const s=t;l.send((0,a.v)({error_type:"fetchAdsFailure",error_message:s.name,http_error_code:s.status,surface:(0,i.OO)(e.surface),request_url:(0,d.eh)(),request_type:"leavebehindAds",ad_content_origin:"podcast"})),f(!0)}}),[l,e.surface,e.uri])}}}}]);
//# sourceMappingURL=xpui-routes-all-episode-sponsors-consolidated.js.map