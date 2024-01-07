"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6923],{50680:(e,t,r)=>{r.d(t,{F:()=>f,m:()=>l});var n=r(88769),o=r(14942),s=r(26533),c=r.n(s),a=(r(43316),r(73630),r(15970),r(93019),r(84196),r(27586),r(56110),r(59496)),u=r(17657),i=r(48192),f=420;function l(e){var t=e.episodeBase62Id,s=e.getEpisodeSponsors,l=e.fetchedEpisodeSponsorsData,p=void 0===l?[]:l,d=e.version,b=(0,a.useState)(p),v=(0,o.Z)(b,2),h=v[0],w=v[1],O=(0,a.useCallback)((0,n.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}throw new Error("episodeBase62Id is required to fetch episode sponsors");case 3:if(null==s){e.next=7;break}e.t0=s,e.next=10;break;case 7:return e.next=9,Promise.resolve().then(r.bind(r,73642));case 9:e.t0=e.sent.getEpisodeSponsors;case 10:return n=e.t0,e.t1=w,e.next=14,n(t,{version:d});case 14:e.t2=e.sent,(0,e.t1)(e.t2),e.next=21;break;case 18:e.prev=18,e.t3=e.catch(0),w([]);case 21:case"end":return e.stop()}}),e,null,[[0,18]])}))),[t,s,d]),y=(0,u.y1)(O,f);(0,a.useEffect)((function(){p.length||y()}),[y,p.length]);var g=(0,a.useCallback)((function(){return{effectCallback:y}}),[y]);return(0,i.H)(g),{fetchedEpisodeSponsorsData:h}}},64378:(e,t,r)=>{r.r(t),r.d(t,{AllShowSponsors:()=>b,default:()=>v});var n=r(24255),o=(r(15970),r(93019),r(84196),r(27586),r(56110),r(79075),r(26870),r(33208),r(86978),r(98618),r(40905),r(79410),r(21105),r(72753),r(59496)),s=r(92053),c=r(47018),a=r(57651),u=r(41343),i=r(27894),f=r(71692),l=r(4637);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var d=(0,o.lazy)((function(){return Promise.all([r.e(1814),r.e(90)]).then(r.bind(r,40090))}));function b(e){var t=(0,s.UO)().showId,r=void 0===t?"":t,b=(0,o.useMemo)((function(){return(0,c.xt)(r).toURI()}),[r]),v=(0,i.P)().location.state,h=(v=void 0===v?{}:v).showSponsorsData,w=(0,f.O)({showId:r,showSponsorsData:h}).showSponsorsData;return null!=w&&w.length?(0,l.jsx)(d,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({uri:b,showId:r,showSponsorsData:w},e)):(0,l.jsx)(a.InstrumentedRedirect,{to:(0,u.mH)(r)})}const v=b},71692:(e,t,r)=>{r.d(t,{O:()=>l});var n=r(88769),o=r(14942),s=r(26533),c=r.n(s),a=(r(43316),r(73630),r(15970),r(93019),r(84196),r(27586),r(56110),r(59496)),u=r(17657),i=r(50680),f=r(48192);function l(e){var t=e.showId,s=e.showSponsorsData,l=void 0===s?[]:s,p=e.getShowSponsors,d=(0,a.useState)(l),b=(0,o.Z)(d,2),v=b[0],h=b[1],w=(0,a.useCallback)(function(){var e=(0,n.Z)(c().mark((function e(n){var o,s,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=function(){n.mounted&&h.apply(void 0,arguments)},e.prev=1,t){e.next=4;break}throw new Error("showId is required to fetch show sponsors");case 4:if(null==p){e.next=8;break}e.t0=p,e.next=11;break;case 8:return e.next=10,Promise.resolve().then(r.bind(r,15840));case 10:e.t0=e.sent.getShowSponsors;case 11:return s=e.t0,e.next=14,s(t);case 14:a=e.sent,o(a),e.next=21;break;case 18:e.prev=18,e.t1=e.catch(1),o([]);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),[t,p]),O=(0,u.y1)(w,i.F);(0,a.useEffect)((function(){var e={mounted:!0};return l.length||O(e),function(){e.mounted=!1}}),[O,l.length]);var y=(0,a.useCallback)((function(){var e={mounted:!0};return{effectCallback:function(){O(e)},destructor:function(){e.mounted=!1}}}),[O]);return(0,f.H)(y),{showSponsorsData:v}}},48192:(e,t,r)=>{r.d(t,{H:()=>i});r(89004);var n=r(59496),o=r(60647),s=r(85388),c=r(75693),a=r(64384),u=r(72104);function i(e){var t=(0,o.W6)(s.oF),r=(0,a.Y)((function(e){var t,r,n=null!==(t=null==e?void 0:e.item)&&void 0!==t?t:void 0;return(0,u.k6)(n)&&n.isPodcastAd&&null!==(r=n.id)&&void 0!==r?r:void 0})),i=(0,c.D)(r);(0,n.useEffect)((function(){var n=e(),o=n.effectCallback,s=n.destructor;return r!==i&&Boolean(r)&&setTimeout(o,t),s}),[e,r,i,t])}},27894:(e,t,r)=>{r.d(t,{P:()=>u});r(79075),r(26870),r(33208),r(93019),r(86978),r(98618),r(40905),r(79410),r(21105),r(72753);var n=r(24255),o=r(59496),s=r(25010);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(){var e=(0,s.D)(),t=e.listen,r=e.location;return(0,o.useEffect)((function(){return t((function(e,t){"POP"===t&&(e.state=a(a(a({},void 0),r.state),e.state))}))})),e}}}]);
//# sourceMappingURL=xpui-routes-all-show-sponsors.js.map