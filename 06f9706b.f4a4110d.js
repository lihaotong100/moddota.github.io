(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{181:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(185),i=n(183),c=n(90),l=n.n(c);const u=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:p,groupId:d}=e,{tabGroupChoices:f,setTabGroupChoices:m}=Object(a.a)(),[b,y]=Object(r.useState)(c);if(null!=d){const e=f[d];null!=e&&e!==b&&p.some(t=>t.value===e)&&y(e)}const g=e=>{y(e),null!=d&&m(d,e)},v=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":b===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===b)[0]))}},182:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}},183:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},184:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=o},185:function(e,t,n){"use strict";var r=n(0),o=n(184);t.a=function(){return Object(r.useContext)(o.a)}},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o=n.n(r);function a({id:e,aspectRatio:t=4/3}){return o.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},o.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o=n.n(r);function a({id:e,playlistId:t,aspectRatio:n=16/9}){const r=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return o.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},o.a.createElement("iframe",{src:r,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(3),o=n(182),a=n(181),i=n(0),c=n.n(i);const l={ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function u({children:e,group:t}){Object(r.a)("string"==typeof t||null===t);const n=c.a.Children.toArray(e).map(e=>{const t=e.props.children.props.className.replace(/language-/,"");return Object(r.a)(t in l),{language:t,element:e}});return c.a.createElement(a.a,{groupId:null!==t?"multi-code-block-"+t:void 0,defaultValue:n[0].language,values:n.map(({language:e})=>({value:e,label:l[e]}))},n.map(({language:e,element:t})=>c.a.createElement(o.a,{key:e,value:e},t)))}},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=(n(0),n(186)),a=(n(181),n(182),n(187),n(188));n(189);const i={title:"Introduction"},c={id:"_index",isDocsHomePage:!0,title:"Introduction",description:"ModDota is an English-speaking community for Dota 2 Custom Game developers. This website collects tutorials made by it's community, that would help you to make your own custom game.",source:"@site/_articles/_index.md",permalink:"/",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/_index.md",sidebar:"tutorials",next:{title:"Getting Started",permalink:"/getting-started"}},l=[],u={rightToc:l};function s({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ModDota is an English-speaking community for Dota 2 Custom Game developers. This website collects tutorials made by it's community, that would help you to make your own custom game."),Object(o.b)("div",{style:{fontSize:"28px"}},Object(o.b)("p",null,"New to modding? Check out our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"getting-started"}),"Getting Started")," guide."),Object(o.b)("p",null,"Or follow a video tutorial series:")),Object(o.b)(a.a,{playlistId:"PL7yysLaMSd3uY4iJKJdRrTkN1gYePkMz2",mdxType:"YouTube"}),Object(o.b)(a.a,{playlistId:"PLyIBVOr2Rw7H5e8JkEF9C9GCf3RsODsuD",mdxType:"YouTube"}))}s.isMDXComponent=!0}}]);