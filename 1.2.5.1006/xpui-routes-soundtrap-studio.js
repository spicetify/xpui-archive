"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3780],{83504:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var r=n(24255),o=n(88769),c=n(14942),u=n(26533),s=n.n(u),a=(n(78390),n(47408),n(3726),n(59496)),i=n(84875),l=n.n(i),f=n(77646),p=n(92053),d=n(47018),w=n(22056),h=n(54009),v=n(27293),m=n(20225),I=n(44050),k=n(35708),g=n(40192),b=n(58964),j=n(64384),x=n(81186);const E="_8NXEiIW8UUvsBVNhHdc",S="pZytOOt4d5hSOwPD8A_V";var y=n(4637);const U=(0,a.memo)((function(){var e=(0,m.n)(),t=(0,p.UO)(),n=t.projectId,u=t.songId,i=(0,a.useRef)(null),U=(0,f.I0)(),Z=(0,k.z)(),P=(0,p.s0)(),C=(0,a.useMemo)((function(){return[["showtippopups",0],["workflow","cover"],["workflowSongId",u]].map((function(e){var t=(0,c.Z)(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(r)})).join("&")}),[u]),O=(0,f.v9)((function(e){var t;return null===(t=e.session.user)||void 0===t?void 0:t.uri})),L=(0,d.EC)(O).toURLPath(!0),_=(0,a.useState)(null),M=(0,c.Z)(_,2),V=M[0],z=M[1],N=function(e){var t=e.redirectUri,n=(0,k.z)(),r=(0,a.useState)(""),u=(0,c.Z)(r,2),i=u[0],l=u[1],f=(0,a.useState)(null),p=(0,c.Z)(f,2),d=p[0],w=p[1];return(0,a.useEffect)((function(){(0,o.Z)(s().mark((function e(){var r,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.requestAccountLinkToken();case 3:r=e.sent,o=r.token,l("".concat("https://www.soundtrap.com/spotify/accountlink","/?redirect=").concat(encodeURIComponent(t),"&token=").concat(o)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w("Something went wrong while trying link your account");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[n,t]),{route:i,error:d}}({redirectUri:"https://www.soundtrap.com/studio/".concat(n,"/?").concat(C)}),R=N.route,A=N.error,B=(0,I.i)(),H=B.resetMainView,T=B.collapseMainView,X=(0,b.g)(),q=(0,j.Y)((function(e){return(null==e?void 0:e.hasContext)&&!(null!=e&&e.isPaused)}));(0,a.useEffect)((function(){var e=i.current;return Z.setIframe(e),function(){Z.setIframe(null)}}),[i,Z,U]),(0,x.I)(g.O.EXIT,(function(){P(-1)})),(0,x.I)(g.O.PUBLISH,function(){var e=(0,o.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.data,r=!n.title||!n.projectId,z(null),!r){e.next=6;break}return z("Cannot publish project, title or projectId are missing."),e.abrupt("return");case 6:return e.prev=6,e.next=9,Z.publish({projectId:n.projectId,title:n.title,isPrivate:!0===n.isPrivate});case 9:P(L,{replace:!0,state:{referrer:"soundtrap_publish",newProjectId:n.projectId}}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),z("Something went wrong while trying to publish the project.");case 15:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(t){return e.apply(this,arguments)}}()),(0,a.useEffect)((function(){q&&(null==X||X.pause())}),[q,X]),(0,a.useEffect)((function(){return T(),H}),[]);var D=null!=A?A:V;return D?(0,y.jsx)(v.h,{hasError:!0,errorMessage:D}):(0,y.jsxs)(a.Suspense,{fallback:null,children:[(0,y.jsx)(h.$,{children:w.ag.get("playlist.page-title")}),(0,y.jsx)("iframe",{ref:i,src:R,className:l()(E,(0,r.Z)({},S,e)),allow:"microphone https://www.soundtrap.com/studio;",title:"Soundtrap"})]})}))},81186:(e,t,n)=>{n.d(t,{I:()=>c});var r=n(59496),o=n(35708);function c(e,t){var n=(0,o.z)();(0,r.useEffect)((function(){var r=n.getEvents(),o=function(e){return t(e)};return r.addListener(e,o),function(){r.removeListener(e,o)}}),[e,n,t])}}}]);
//# sourceMappingURL=xpui-routes-soundtrap-studio.js.map