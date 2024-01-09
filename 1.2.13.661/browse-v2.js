"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3817],{42792:(e,n,i)=>{i.d(n,{Z:()=>o});i(30246),i(61235),i(69724);var t=i(23498),r=i(72030),a=i(4637),o=function(e){var n=e.name,i=e.uri,o=e.images,l=e.isHero,s=e.testId,d=e.description,u=e.index,c=e.requestId,m=e.color;return(0,a.jsx)(t.C,{index:u,featureIdentifier:"artist_concerts",headerText:n,uri:i,isPlayable:!1,renderCardImage:function(){return(0,a.jsx)(r.x,{isHero:l,images:o,color:m})},renderSubHeaderContent:function(){return(0,a.jsx)("span",{children:d||""})},testId:s,requestId:c})}},72:(e,n,i)=>{i.d(n,{B:()=>B});var t=i(45389),r=(i(61235),i(69724),i(30246),i(40265),i(80108),i(95675),i(62780),i(22369),i(7845),i(29543),i(70969),i(66715),i(30479),i(75341),i(17249)),a=i(54691),o=i(6336),l=i(90902),s=i(75897),d=i(56203),u=i(32572),c=i(12033),m=i(23498),f=i(72030),p=i(8850),v=i(39130),k=i(980),g=i(10995),b=i.n(g),x=(i(69109),i(59496)),h=i(10506),y=i(71440),S=i(35103);const j="z4popIk32AsyDKlV1o1v",N="_xxuonqkZEQ7pCffxlUD";var w=i(4637),I=["src","description"];function O(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function C(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?O(Object(i),!0).forEach((function(n){(0,t.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):O(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var P=(0,x.memo)((function(e){var n=e.src,i=e.description,t=(0,k.Z)(e,I),r=(0,x.useState)("inherit"),a=(0,v.Z)(r,2),o=a[0],l=a[1];return(0,x.useEffect)((function(){function e(){return(e=(0,p.Z)(b().mark((function e(n){var i,t,r,a,o,s,d;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,S.extractColors)(n);case 2:i=e.sent,t=i.colorRaw,r=t.hsl,a=r.h,o=r.s,s=r.l,d="hsl(".concat(360*a,", ").concat(100*o,"%, ").concat(Math.min(100*s,30),"%)"),l(d);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n&&function(n){e.apply(this,arguments)}(n)}),[n]),n?(0,w.jsx)("div",{className:j,style:{backgroundColor:o},"data-testid":"episode-fallback-image-container",children:(0,w.jsx)("div",{className:N,children:(0,w.jsx)(h.D,{as:"p",variant:"canon",children:i})})}):(0,w.jsx)(y.J,C(C({},t),{},{iconSize:64}))})),F=i(91978),_=i(3005),Z=i(22355);const D="x1FErCk9Xh9VumpOLyfm",T="heeHk6hz8sAXLIU6P6an",E="Hhfi1xnYwoHoMP2rcltS";function R(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function A(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?R(Object(i),!0).forEach((function(n){(0,t.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):R(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var B=function(e){var n,i=e.description,t=e.isExplicit,p=e.images,v=e.name,k=e.uri,g=e.durationMilliseconds,b=e.releaseDate,x=e.resume_point,h=e.showImages,y=e.sharingInfo,S=e.is19PlusOnly,j=e.isHero,N=e.onClick,I=e.testId,O=e.index,C=e.requestId,R=e.color,B=b?new Date(b):void 0,L=B&&!isNaN(B.getTime())&&!isNaN(g),V=(0,c.X)(h,{desiredSize:48}),H=(0,d.G3)(k,null==B?void 0:B.toISOString(),null==x?void 0:x.resume_position_ms,null==x?void 0:x.fully_played);return n=j?(0,w.jsx)(F.Z,{index:O,onClick:N,headerText:v,featureIdentifier:"episode",uri:k,isPlayable:!1,isDownloadable:!0,hasNewEpisodeIndicator:H,renderCardImage:function(){return(0,w.jsx)(f.x,{isHero:!0,images:p,color:R,FallbackComponent:function(e){return(0,w.jsx)(P,A(A({},e),{},{description:i,src:V&&V.url}))},children:V&&(0,w.jsx)(s.E,{loading:"lazy",src:V.url,className:D,radius:4})})},renderSubHeaderContent:function(){return(0,w.jsxs)(w.Fragment,{children:[t&&!S&&(0,w.jsx)(o.N,{className:T}),S&&(0,w.jsx)(l.X,{size:16,className:T}),L&&(0,w.jsxs)("span",{className:E,children:[B&&(0,u.rL)(B)," ·"," ",r.ag.get("episode.length",Math.ceil(g/6e4))]}),(0,w.jsx)(_.k,{children:r.ag.get("card.tag.episode")})]})},testId:I,requestId:C}):(0,w.jsx)(m.C,{index:O,onClick:N,headerText:v,featureIdentifier:"episode",uri:k,isPlayable:!1,isDownloadable:!0,hasNewEpisodeIndicator:H,renderCardImage:function(){return(0,w.jsx)(f.x,{images:p,color:R,FallbackComponent:function(e){return(0,w.jsx)(P,A(A({},e),{},{description:i,src:V&&V.url}))},children:V&&(0,w.jsx)(s.E,{loading:"lazy",src:V.url,className:D,radius:4,testid:"episode-card-show-image"})})},renderSubHeaderContent:function(){return(0,w.jsxs)(w.Fragment,{children:[t&&!S&&(0,w.jsx)(o.N,{className:T}),S&&(0,w.jsx)(l.X,{size:16,className:T}),L&&(0,w.jsxs)("span",{className:E,children:[B&&(0,u.rL)(B)," ·"," ",r.ag.get("episode.length",Math.ceil(g/6e4))]})]})},testId:I,requestId:C}),(0,w.jsx)(a._,{menu:(0,w.jsx)(Z.k,{uri:k,sharingInfo:y}),children:n})}},11993:(e,n,i)=>{i.d(n,{T:()=>o});i(30246),i(61235),i(69724);var t=i(23498),r=i(72030),a=i(4637),o=function(e){var n=e.name,i=e.uri,o=e.href,l=e.images,s=e.isHero,d=e.testId,u=e.description,c=e.index,m=e.requestId,f=e.color;return(0,a.jsx)(t.C,{index:c,featureIdentifier:"merch",onClick:function(){window.open(o,"_blank")},headerText:n,uri:i,isPlayable:!1,renderCardImage:function(){return(0,a.jsx)(r.x,{isHero:s,images:l,color:f})},renderSubHeaderContent:function(){return(0,a.jsx)("span",{children:u||""})},testId:d,requestId:m,delegateNavigation:!0})}},85829:(e,n,i)=>{i.d(n,{P:()=>v});var t=i(45389),r=(i(30246),i(95675),i(61235),i(62780),i(22369),i(7845),i(29543),i(70969),i(66715),i(30479),i(75341),i(59496)),a=i(52008),o=i(17249),l=i(54691),s=i(23498),d=i(72030),u=i(91978),c=i(3005),m=i(89418),f=i(4637);function p(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}var v=r.memo((function(e){var n,i=e.images,v=e.name,k=e.uri,g=e.onClick,b=e.isHero,x=e.testId,h=e.index,y=e.requestId,S=e.color,j=(0,r.useCallback)((function(){return(0,f.jsx)(d.x,{isCircular:!0,isHero:b,images:i,color:S,FallbackComponent:function(e){return(0,f.jsx)(a.a,function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?p(Object(i),!0).forEach((function(n){(0,t.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}({iconSize:64},e))}})}),[S,i,b]),N=(0,r.useCallback)((function(){return b?(0,f.jsx)(c.k,{children:o.ag.get("card.tag.profile")}):o.ag.get("card.tag.profile")}),[b]);return n=b?(0,f.jsx)(u.Z,{index:h,onClick:g,headerText:v,featureIdentifier:"profile",uri:k,isPlayable:!1,renderCardImage:j,renderSubHeaderContent:N,testId:x,requestId:y}):(0,f.jsx)(s.C,{index:h,onClick:g,headerText:v,featureIdentifier:"profile",uri:k,isPlayable:!1,renderCardImage:j,renderSubHeaderContent:N,testId:x,requestId:y}),(0,f.jsx)(l._,{menu:(0,f.jsx)(m.I,{uri:k}),children:n})}))},53203:(e,n,i)=>{i.r(n),i.d(n,{BrowsePage:()=>Y});i(162);var t=i(59496),r=i(84875),a=i.n(r),o=i(76050),l=i(17249),s=i(67262),d=i(20188),u=i(38185),c=i(8161),m=i(23006),f=i(35833),p=i(61996),v=i(4637),k=function(e){var n=e.images,i=e.color,t=void 0===i?u.k77:i,r=e.title,a=0===n.length?m.fR.SMALL:m.fR.DEFAULT;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(m.gF,{backgroundImages:n,backgroundColor:t,size:a,children:[(0,v.jsx)(f.W,{children:r?(0,v.jsx)(p.i,{text:r}):null}),(0,v.jsx)(m.sP,{children:r?(0,v.jsx)(m.xd,{children:r}):null})]}),(0,v.jsx)(c.H,{color:t})]})},g=(i(62780),i(22369),i(98328)),b=i(55590),x=i(70420),h=i(75938),y=i(12116),S=i(91683);const j={chips:"T8Vmv6htAP7bht774xG5",chip:"BX1DapBHMyHxwyF1aFRv"};function N(e){var n=e.section;return(0,v.jsx)("div",{className:j.chips,children:n.sectionItems.items.map((function(e){return function(e){var n,i,t;return"BrowseSectionContainerWrapper"===e.content.__typename&&"BrowseSectionContainer"===e.content.data.__typename&&null!==(n=e.content.data.data)&&void 0!==n&&null!==(i=n.cardRepresentation)&&void 0!==i&&null!==(t=i.title)&&void 0!==t&&t.transformedLabel?(0,v.jsxs)(x.A,{as:y.Z,href:(0,S.t1)(e.uri),className:j.chip,children:[e.content.data.data.cardRepresentation.title.transformedLabel,(0,v.jsx)(h.V,{iconSize:12})]},e.uri):null}(e)}))})}var w=i(77542),I=i(3594),O=function(e){var n,i,r,a,o,l,s,d,u,c,m,f,p,k=e.section,x=e.position,h=e.showAll,y=(0,t.useMemo)((function(){return k.sectionItems.items.map((function(e,n){return(0,w.O)(e,n)})).filter(g.K)}),[k.sectionItems.items]);switch(null===(n=k.data)||void 0===n?void 0:n.__typename){case"BrowseGenericSectionData":return(0,v.jsx)(I.q,{title:null!==(i=null===(r=k.data)||void 0===r||null===(a=r.title)||void 0===a?void 0:a.transformedLabel)&&void 0!==i?i:"",tagline:null!==(o=null===(l=k.data)||void 0===l||null===(s=l.subtitle)||void 0===s?void 0:s.transformedLabel)&&void 0!==o?o:"",total:k.sectionItems.totalCount,seeAllUri:(0,S.px)(k.uri),index:x,id:k.uri,showAll:h,children:y});case"BrowseGridSectionData":return(0,v.jsx)(I.q,{title:null!==(d=null===(u=k.data)||void 0===u||null===(c=u.title)||void 0===c?void 0:c.transformedLabel)&&void 0!==d?d:"",tagline:null!==(m=null===(f=k.data)||void 0===f||null===(p=f.subtitle)||void 0===p?void 0:p.transformedLabel)&&void 0!==m?m:"",total:k.sectionItems.totalCount,index:x,id:k.uri,showAll:!0,children:y});case"BrowseRelatedSectionData":return(0,v.jsx)(N,{section:k});case"BrowseSingleItemSectionData":case"BrowseUnsupportedSectionData":case void 0:return null;default:return(0,b._)(k.data),null}},C=i(33173),P=function(e){var n,i,t,r,a,o=e.uri,l=e.fallback,d=(0,C.X)(o),u=d.section,c=d.error,m=d.fetchNextItems,f=null==u||null===(n=u.data)||void 0===n||null===(i=n.title)||void 0===i?void 0:i.transformedLabel,p=null==u||null===(t=u.data)||void 0===t||null===(r=t.subtitle)||void 0===r?void 0:r.transformedLabel,k=null!==(a=null==u?void 0:u.sectionItems.items)&&void 0!==a?a:[];return 0===k.length||null!==c?l():(0,v.jsx)(s.C,{onReachBottom:m,children:(0,v.jsx)(I.q,{title:null!=f?f:"",tagline:null!=p?p:"",index:0,id:o,showAll:!0,children:k.map((function(e,n){return(0,w.O)(e,n)}))})})},F=i(17386),_=i(60817),Z=i(68833),D=i(6034),T=(i(82088),i(30246),i(43125),i(27639),i(16366),i(96669),i(61235),i(69724),i(39965),i(83001),i(71756),i(39975),i(59538),i(79611),i(83014)),E=i(8850),R=(i(81289),i(69109),i(10995)),A=i.n(R),B=i(9102),L=i(26352),V=i(31636),H=i(32831),U=i(17068),q=(i(9294),i(19246)),M={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"browsePage"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pagePagination"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PaginationInput"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sectionPagination"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PaginationInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"browse"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"pagePagination"},value:{kind:"Variable",name:{kind:"Name",value:"pagePagination"}}},{kind:"ObjectField",name:{kind:"Name",value:"sectionPagination"},value:{kind:"Variable",name:{kind:"Name",value:"sectionPagination"}}},{kind:"ObjectField",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"BrowseSectionContainer"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"header"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"backgroundImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"browseImageSources"}}]}},{kind:"Field",name:{kind:"Name",value:"color"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hex"}}]}},{kind:"Field",name:{kind:"Name",value:"title"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"transformedLabel"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"sections"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"pagingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nextOffset"}}]}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"browseSectionItem"}}]}}]}}]}}]}}]}}].concat((0,T.Z)(q.N9.definitions),(0,T.Z)(q.K1.definitions),(0,T.Z)([{kind:"FragmentDefinition",name:{kind:"Name",value:"browseSectionItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"BrowseSection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"title"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"transformedLabel"}}]}},{kind:"Field",name:{kind:"Name",value:"subtitle"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"transformedLabel"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sectionItems"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"browseItem"}}]}}]}}]}}]),(0,T.Z)(q.H5.definitions),(0,T.Z)(q.RL.definitions),(0,T.Z)(q.X6.definitions),(0,T.Z)(q.nE.definitions),(0,T.Z)(q._C.definitions),(0,T.Z)(q.Tf.definitions),(0,T.Z)(q.tl.definitions),(0,T.Z)(q.dV.definitions),(0,T.Z)(q.qJ.definitions),(0,T.Z)(q.YJ.definitions),(0,T.Z)(q.zZ.definitions),(0,T.Z)(q.Fk.definitions),(0,T.Z)(q.Go.definitions),(0,T.Z)(q.dK.definitions),(0,T.Z)(q.$z.definitions))};function W(e,n){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,n){if(!e)return;if("string"==typeof e)return z(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return z(e,n)}(e))||n&&e&&"number"==typeof e.length){i&&(e=i);var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,l=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return o=e.done,e},e:function(e){l=!0,a=e},f:function(){try{o||null==i.return||i.return()}finally{if(l)throw a}}}}function z(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}function X(e,n,i,t){return{pagePagination:{offset:n,limit:i},sectionPagination:{offset:0,limit:t},uri:e}}const G="lXcKpCtaEeFf1HifX139",J="KZy9ufUbVUdmV7qnCE2e",K="xcTrtCsYOPtSElbX9inq";var Y=function(e){var n,i=e.uri,r=e.id,u=function(e){var n=(0,t.useContext)(L.Ax).request,i=(0,B.useInfiniteQuery)(["browse","page",e,{numberOfSections:10,numberOfItems:10}],function(){var i=(0,E.Z)(A().mark((function i(t){var r,a;return A().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return r=t.pageParam,a=void 0===r?0:r,i.abrupt("return",(0,V.J)(n,M,X(e,a,10,10)));case 2:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}(),{cacheTime:H.ws,staleTime:H._p,getNextPageParam:function(e){var n,i,t,r;if("BrowseSectionContainer"===(null==e||null===(n=e.data)||void 0===n||null===(i=n.browse)||void 0===i?void 0:i.__typename))return null!==(t=null===(r=e.data.browse.sections)||void 0===r?void 0:r.pagingInfo.nextOffset)&&void 0!==t?t:void 0}}),r=i.data,a=i.isLoading,o=i.error,l=i.fetchNextPage,s=(0,t.useCallback)((0,E.Z)(A().mark((function e(){return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:case"end":return e.stop()}}),e)}))),[l]),d=(0,t.useMemo)((function(){return null!=r&&r.pages?r.pages.reduce((function(e,n){var i,t,r;return"BrowseSectionContainer"===(null==n||null===(i=n.data)||void 0===i||null===(t=i.browse)||void 0===t?void 0:t.__typename)&&null!==(r=n.data.browse.sections)&&void 0!==r&&r.items?[].concat((0,T.Z)(e),(0,T.Z)(n.data.browse.sections.items)):e}),[]):[]}),[null==r?void 0:r.pages]);return{header:(0,t.useMemo)((function(){if(null!=r&&r.pages){var e,n=W(r.pages);try{for(n.s();!(e=n.n()).done;){var i,t,a,o,l,s,d,u,c,m,f,p=e.value;if("BrowseSectionContainer"===(null==p||null===(i=p.data)||void 0===i||null===(t=i.browse)||void 0===t?void 0:t.__typename))return{title:null!==(a=null===(o=p.data.browse.header)||void 0===o||null===(l=o.title)||void 0===l?void 0:l.transformedLabel)&&void 0!==a?a:void 0,color:null!==(s=null===(d=p.data.browse.header)||void 0===d||null===(u=d.color)||void 0===u?void 0:u.hex)&&void 0!==s?s:void 0,images:null!==(c=null===(m=p.data.browse.header)||void 0===m||null===(f=m.backgroundImage)||void 0===f?void 0:f.sources.map(U.Np))&&void 0!==c?c:[]}}}catch(e){n.e(e)}finally{n.f()}}}),[null==r?void 0:r.pages]),sections:d,error:o,loading:a,fetchNextSections:s}}(i),c=u.header,f=u.sections,p=u.error,g=u.fetchNextSections,b=(0,d.fU)(o.createDesktopGenreEventFactory,{data:{identifier:i,uri:i}}),x=b.spec,h=b.UBIFragment,y=(0,t.useMemo)((function(){return x.shelvesFactory()}),[x]),S=(0,D.g)(),j=(0,m.oX)(r);if(0===f.length||null!==p)return(0,v.jsx)(Z.h,{hasError:null!==p,errorMessage:l.ag.get("error.generic")});var N=null==c?void 0:c.title;return(0,v.jsxs)(h,{spec:x,children:[(0,v.jsx)(_.$,{children:null!==(n=null==c?void 0:c.title)&&void 0!==n?n:l.ag.get("browse")}),N?(0,v.jsx)("div",{className:G,children:j?(0,v.jsx)(m.YD,{isAnonymous:S}):(0,v.jsx)(k,{title:c.title,color:c.color,images:c.images})}):null,(0,v.jsx)(h,{spec:y,children:(0,v.jsxs)("div",{className:K,children:[N&&(0,v.jsx)(F.I,{backgroundColor:c.color}),(0,v.jsx)("div",{className:a()("contentSpacing",J),children:1===f.length?(0,v.jsx)(P,{uri:f[0].uri,fallback:function(){return(0,v.jsx)(O,{section:f[0],position:0,showAll:!0})}}):(0,v.jsx)(s.C,{onReachBottom:g,children:f.map((function(e,n){return(0,v.jsx)(O,{section:e,position:n,showAll:!1},e.uri)}))})})]})})]})}},96760:(e,n,i)=>{i.r(n),i.d(n,{BrowseSection:()=>g});i(162);var t=i(59496),r=i(84875),a=i.n(r),o=i(76050),l=i(17249),s=i(67262),d=i(20188),u=i(77542),c=i(60817),m=i(68833),f=i(3594),p=i(33173);const v="Z3ISr2E5M6kLGdC7dCDQ";var k=i(4637),g=function(e){var n,i,r,g,b,x=e.uri,h=(0,p.X)(x),y=h.section,S=h.error,j=h.fetchNextItems,N=(0,d.fU)(o.createDesktopGenreEventFactory,{data:{identifier:x,uri:x}}),w=N.spec,I=N.UBIFragment,O=(0,t.useMemo)((function(){return w.shelvesFactory()}),[w]),C=null==y||null===(n=y.data)||void 0===n||null===(i=n.title)||void 0===i?void 0:i.transformedLabel,P=null==y||null===(r=y.data)||void 0===r||null===(g=r.subtitle)||void 0===g?void 0:g.transformedLabel,F=null!==(b=null==y?void 0:y.sectionItems.items)&&void 0!==b?b:[];return 0===F.length||null!==S?(0,k.jsx)(m.h,{hasError:null!==S,errorMessage:l.ag.get("error.generic")}):(0,k.jsxs)(I,{spec:w,children:[(0,k.jsx)(c.$,{children:null!=C?C:l.ag.get("browse")}),(0,k.jsx)(I,{spec:O,children:(0,k.jsx)("div",{className:a()("contentSpacing",v),children:(0,k.jsx)(s.C,{onReachBottom:j,children:(0,k.jsx)(f.q,{title:null!=C?C:"",tagline:null!=P?P:"",index:0,id:x,showAll:!0,children:F.map((function(e,n){return(0,u.O)(e,n)}))})})})})]})}},77542:(e,n,i)=>{i.d(n,{O:()=>D});var t=i(55590),r=(i(30246),i(90511),i(162),i(61235),i(69724),i(59272)),a=i(17249),o=i(36299),l=i(60334),s=i(42792),d=i(5979),u=(i(95675),i(62780),i(22369),i(7845),i(29543),i(70969),i(66715),i(30479),i(75341),i(45389)),c=i(59496),m=i(43711),f=i(29245),p=i(20188),v=i(23498),k=i(72030),g=i(88843);const b="NyZJZ8IWZ7Pxvy3yA81D";var x=i(4637);function h(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}var y=function(e){var n=e.title,i=e.uri,t=e.images,a=e.href,o=e.index,l=e.ubiId,s=(0,p.fU)(f.createDesktopCategoryCardEventFactory,{data:{position:o,identifier:l}}),d=s.spec,y=s.logger,S=(0,c.useCallback)((function(){var e,n=null===(e=(0,r.EC)(a))||void 0===e?void 0:e.toURI();n&&y.logInteraction(d.hitUiNavigate({destination:n}))}),[y,d,a]),j=(0,p.Wi)(d);return(0,x.jsx)(g.Link,{to:a,onClick:S,ref:j,children:(0,x.jsx)(v.C,{index:o,onClick:S,headerText:n,featureIdentifier:"unknown",isPlayable:!1,delegateNavigation:!0,uri:i,className:b,renderCardImage:function(){return(0,x.jsx)(k.x,{images:t,FallbackComponent:function(e){return(0,x.jsx)(m.U,function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?h(Object(i),!0).forEach((function(n){(0,u.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}({iconSize:64},e))}})}})})},S=i(72),j=i(11993),N=i(15632),w=i(85829),I=i(29332),O=i(35882),C=i(84996),P=i(24511),F=i(41084),_=i(17068),Z=i(91683);function D(e,n){switch(e.content.__typename){case"AlbumResponseWrapper":case"ArtistResponseWrapper":case"EpisodeOrChapterResponseWrapper":case"PlaylistResponseWrapper":case"PodcastOrAudiobookResponseWrapper":case"TrackResponseWrapper":case"UserResponseWrapper":case"BrowseXlinkResponseWrapper":case"BrowseSectionContainerWrapper":case"MerchResponseWrapper":case"ArtistConcertsResponseWrapper":return function(e,n,i){var u,c,m,f,p,v,k,g,b,h,D,T,E,R,A,B,L,V,H,U,q,M;if("GenericError"===e.__typename||"NotFound"===e.__typename||"RestrictedContent"===e.__typename)return null;var W=(0,_._k)(e);switch(e.__typename){case"Album":return(0,x.jsx)(o.r,{uri:e.uri,name:e.name,images:W,sharingInfo:null,artists:(0,F.BH)(e.artists),index:n},e.uri);case"Artist":return(0,x.jsx)(l.I,{uri:e.uri,name:e.profile.name,images:W,index:n},e.uri);case"Audiobook":return(0,x.jsx)(d.c,{uri:e.uri,name:e.name,images:W,authorName:null!==(u=null===(c=e.authors)||void 0===c?void 0:c.map((function(e){return null==e?void 0:e.name})).join(a.ag.getSeparator()))&&void 0!==u?u:"",index:n},e.uri);case"Chapter":return(0,x.jsx)(S.B,{uri:e.uri,name:e.name,images:W,showImages:W,description:"",durationMilliseconds:e.duration.totalMilliseconds,releaseDate:(0,F.Bq)(e.releaseDate),resume_point:{resume_position_ms:e.playedState.playPositionMilliseconds,fully_played:e.playedState.state===P.sY.Completed},isExplicit:(0,F.sW)(e.contentRating),is19PlusOnly:(0,F.R7)(e.contentRating),sharingInfo:null,index:n},e.uri);case"Episode":return(0,x.jsx)(S.B,{uri:e.uri,name:e.name,images:W,showImages:(0,_.Cn)(e),description:null!==(m=e.description)&&void 0!==m?m:"",durationMilliseconds:e.duration.totalMilliseconds,releaseDate:(0,F.Bq)(e.releaseDate),resume_point:{resume_position_ms:e.playedState.playPositionMilliseconds,fully_played:e.playedState.state===P.sY.Completed},isExplicit:(0,F.sW)(e.contentRating),is19PlusOnly:(0,F.R7)(e.contentRating),sharingInfo:null,index:n},e.uri);case"Playlist":var z="";return"User"===e.ownerV2.data.__typename&&(z=e.ownerV2.data.name),(0,x.jsx)(N.Z,{uri:e.uri,name:e.name,images:W,description:e.description,authorName:z,index:n},e.uri);case"Podcast":return(0,x.jsx)(I._,{uri:e.uri,name:e.name,images:W,publisher:null!==(f=null===(p=e.publisher)||void 0===p?void 0:p.name)&&void 0!==f?f:"",sharingInfo:null,mediaType:(0,F.x7)(e.mediaType),index:n},e.uri);case"Track":return(0,x.jsx)(O.G,{uri:e.uri,name:e.name,images:W,artists:(0,F.mQ)(e.artists),album:e.albumOfTrack?{uri:e.albumOfTrack.uri,name:e.albumOfTrack.name}:null,isExplicit:(0,F.sW)(e.contentRating),is19PlusOnly:(0,F.R7)(e.contentRating),sharingInfo:null,index:n},e.uri);case"User":return(0,x.jsx)(w.P,{uri:e.uri,name:e.name,images:W,index:n},e.uri);case"BrowseSectionContainer":return(0,x.jsx)(C.p,{title:null!==(v=null===(k=e.data)||void 0===k||null===(g=k.cardRepresentation)||void 0===g||null===(b=g.title)||void 0===b?void 0:b.transformedLabel)&&void 0!==v?v:"",pageId:"search",href:(0,Z.t1)(i),color:null===(h=e.data)||void 0===h||null===(D=h.cardRepresentation)||void 0===D||null===(T=D.backgroundColor)||void 0===T?void 0:T.hex,imageUrl:null===(E=W[0])||void 0===E?void 0:E.url,ubiId:i,index:n},i);case"BrowseSpacesHub":return(0,x.jsx)(C.p,{title:null!==(R=null===(A=e.title)||void 0===A?void 0:A.transformedLabel)&&void 0!==R?R:"",pageId:"search",href:(0,Z.wJ)(e.spaceId),color:null===(B=e.backgroundColor)||void 0===B?void 0:B.hex,imageUrl:null===(L=W[0])||void 0===L?void 0:L.url,ubiId:i,index:n},i);case"BrowseClientFeature":return(0,x.jsx)(y,{uri:i,title:null!==(V=null===(H=e.title)||void 0===H?void 0:H.transformedLabel)&&void 0!==V?V:"",href:"/".concat(null===(U=(0,r.EC)(null==e?void 0:e.featureUri,{parseUnknown:!0}))||void 0===U?void 0:U.toURLPath()),images:null!==(q=null===(M=e.iconOverlay)||void 0===M?void 0:M.sources)&&void 0!==q?q:[],ubiId:i,index:n},i);case"Merch":var X,G,J="";return null!==e.price&&"profile"in e.artists.items[0].data&&(J=a.ag.get("merch.subtitle.format",e.price,e.artists.items[0].data.profile.name)),(0,x.jsx)(j.T,{name:e.name,uri:e.uri,href:e.url||e.uri,images:[{url:(null===(X=e.image)||void 0===X||null===(G=X.sources[0])||void 0===G?void 0:G.url)||""}],description:J,index:n},i);case"ArtistConcerts":var K=e.mainArtist.data;return"Artist"!==K.__typename?null:(0,x.jsx)(s.Z,{uri:i,name:K.profile.name,images:W,description:a.ag.get("concerts.count",e.concerts.totalCount),index:n},i);case"BrowseExternalHref":return null;default:return(0,t._)(e),null}}(e.content.data,n,e.uri);case"UnknownType":case"NoContent":case"ConcertResponseWrapper":break;default:(0,t._)(e.content)}return null}},33173:(e,n,i)=>{i.d(n,{X:()=>k});var t=i(96268),r=i(83014),a=i(8850),o=(i(81289),i(22369),i(69109),i(79611),i(83001),i(42617),i(95675),i(82),i(65130),i(86554),i(57137),i(80775),i(89620),i(10995)),l=i.n(o),s=i(59496),d=i(9102),u=i(26352),c=i(31636),m=i(55590),f=i(32831),p=(i(9294),i(19246)),v={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"browseSection"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pagination"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PaginationInput"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"browseSection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"sectionPagination"},value:{kind:"Variable",name:{kind:"Name",value:"pagination"}}},{kind:"ObjectField",name:{kind:"Name",value:"sectionUri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"BrowseSection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"title"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"transformedLabel"}}]}},{kind:"Field",name:{kind:"Name",value:"subtitle"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"transformedLabel"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sectionItems"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"pagingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nextOffset"}}]}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"browseItem"}}]}}]}}]}}]}}]}}].concat((0,r.Z)(p.H5.definitions),(0,r.Z)(p.RL.definitions),(0,r.Z)(p.X6.definitions),(0,r.Z)(p.N9.definitions),(0,r.Z)(p.K1.definitions),(0,r.Z)(p.nE.definitions),(0,r.Z)(p._C.definitions),(0,r.Z)(p.Tf.definitions),(0,r.Z)(p.tl.definitions),(0,r.Z)(p.dV.definitions),(0,r.Z)(p.qJ.definitions),(0,r.Z)(p.YJ.definitions),(0,r.Z)(p.zZ.definitions),(0,r.Z)(p.Fk.definitions),(0,r.Z)(p.Go.definitions),(0,r.Z)(p.dK.definitions),(0,r.Z)(p.$z.definitions))},k=function(e){var n=(0,s.useContext)(u.Ax).request,i=(0,d.useInfiniteQuery)(["browse","section",e,{numberOfItems:20}],function(){var i=(0,a.Z)(l().mark((function i(t){var r,a;return l().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return r=t.pageParam,a=void 0===r?0:r,i.abrupt("return",(0,c.J)(n,v,g(e,a,20)));case 2:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}(),{cacheTime:f.ws,staleTime:f._p,getNextPageParam:function(e){var n,i;if("BrowseSection"===(null==e||null===(n=e.data)||void 0===n||null===(i=n.browseSection)||void 0===i?void 0:i.__typename))return e.data.browseSection.sectionItems.pagingInfo.nextOffset&&e.data.browseSection.sectionItems.pagingInfo.nextOffset>0?e.data.browseSection.sectionItems.pagingInfo.nextOffset:void 0}}),o=i.data,p=i.isLoading,k=i.error,b=i.fetchNextPage,x=(0,s.useCallback)((0,a.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:case"end":return e.stop()}}),e)}))),[b]);return{section:(0,s.useMemo)((function(){return null!=o&&o.pages?o.pages.reduce((function(e,n){var i;if(null==n||null===(i=n.data)||void 0===i||!i.browseSection)return e;switch(n.data.browseSection.__typename){case"BrowseSection":return null===e?function(e){if("object"!==(0,t.Z)(e)||null===e)return e;if(window.structuredClone)return window.structuredClone(e);return JSON.parse(JSON.stringify(e))}(n.data.browseSection):(e.sectionItems.items=[].concat((0,r.Z)(e.sectionItems.items),(0,r.Z)(n.data.browseSection.sectionItems.items)),e);case"GenericError":case"NotFound":return e;default:return(0,m._)(n.data.browseSection),e}}),null):null}),[null==o?void 0:o.pages]),error:k,loading:p,fetchNextItems:x}};function g(e,n,i){return{pagination:{offset:n,limit:i},uri:e}}}}]);
//# sourceMappingURL=browse-v2.js.map