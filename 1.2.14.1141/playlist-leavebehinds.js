"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[5457],{34628:(e,s,l)=>{l.r(s),l.d(s,{default:()=>I});var t=l(59496),a=l(99766),i=l(8103),n=l(76163),r=l(21729),d=l(74591),c=l(73630),u=l(55740),o=l(19809),p=l(4637);const v=({leavebehinds:e,surface:s,playlistUri:l,playlistId:t})=>{const a=(0,r.s4)(),n=`${u.ag.get("view.see-all")} (${e.length<=o.fz?e.length:`${o.fz}`})`;return(0,p.jsx)(d.rU,{to:`/playlist/${t}/see-all-ads`,state:{playlistUri:l},children:(0,p.jsx)(c.o,{"data-testid":"leavebehinds-see-all",buttonSize:"sm",onClick:()=>{a.send((0,i.a)({leavebehind_request_id:e[0].requestId,event:"event_clicked",event_reason:"cta_see_all",surface:s,uri:l}))},children:n})})};var h=l(55095),f=l(35278),y=l(68061);var b=l(11366),g=l(70044),_=l(71142);const I=({playlistUri:e,playlistName:s})=>{const l=(0,n.EC)(e)?.id,d=(0,a.v9)(b.N),c=d?.some((e=>e.playlistId===l)),u=(0,f.OO)(f.Tg.PLAYLIST),I=(0,a.I0)(),m=(0,r.s4)(),w=(0,a.v9)((e=>e.ads?.musicLeavebehinds?.playlistId)),U=(0,a.v9)((e=>e.ads.musicLeavebehinds.fetchingState)),k=(0,a.v9)(b.v);(0,t.useEffect)((()=>{const t=async()=>{if(l&&!c){I((0,g.ZN)(l));try{const l=await(({uri:e,playlistName:s})=>y.adsCosmos.post("https://spclient.wg.spotify.com/podcast-ap4p/leavebehinds/ads",{surface:(0,f.OO)(f.Tg.PLAYLIST),uri:e,playlistTitle:s}))({uri:e,playlistName:s});I((0,g.Gr)((0,o.D7)({requestId:l.requestId,leavebehindAds:l.leavebehindAds},e)))}catch(s){I((0,g.tD)()),m.send((0,i.a)({event:"event_error",event_reason:"error_fetching_leavebehinds",surface:u,uri:e}))}}};w!==l&&t()}),[I,m,c,w,U,l,s,e,u]);const C=(0,t.useMemo)((()=>k.slice(0,o.aV)),[k]);return U===h.I.FETCHED&&k.length>0&&l&&e===k[0].playlistUri?(0,p.jsx)(_.Z,{surface:u,playlistUri:e,leavebehinds:C,seeAllButton:k.length>o.aV?(0,p.jsx)(v,{leavebehinds:k,surface:u,playlistId:l,playlistUri:e}):null}):null}}}]);
//# sourceMappingURL=playlist-leavebehinds.js.map