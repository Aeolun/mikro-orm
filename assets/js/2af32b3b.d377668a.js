(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{1256:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=p(r),O=a,d=l["".concat(i,".").concat(O)]||l[O]||m[O]||c;return r?n.a.createElement(d,o(o({ref:t},b),{},{components:r})):n.a.createElement(d,o({ref:t},b))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=O;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<c;b++)i[b]=r[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},248:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),c=(r(0),r(1256)),i={id:"constraintviolationexception",title:"Class: ConstraintViolationException",sidebar_label:"ConstraintViolationException"},o={unversionedId:"api/classes/constraintviolationexception",id:"version-4.3/api/classes/constraintviolationexception",isDocsHomePage:!1,title:"Class: ConstraintViolationException",description:"Base class for all constraint violation related errors detected in the driver.",source:"@site/versioned_docs/version-4.3/api/classes/constraintviolationexception.md",slug:"/api/classes/constraintviolationexception",permalink:"/docs/4.3/api/classes/constraintviolationexception",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/constraintviolationexception.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612554413,sidebar_label:"ConstraintViolationException",sidebar:"version-4.3/API",previous:{title:"Class: ConnectionException",permalink:"/docs/4.3/api/classes/connectionexception"},next:{title:"Class: CriteriaNode",permalink:"/docs/4.3/api/classes/criterianode"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]}]}],b={toc:s};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Base class for all constraint violation related errors detected in the driver."),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/classes/serverexception"}),"ServerException")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"ConstraintViolationException")),Object(c.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/classes/foreignkeyconstraintviolationexception"}),"ForeignKeyConstraintViolationException")),Object(c.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/classes/notnullconstraintviolationexception"}),"NotNullConstraintViolationException")),Object(c.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/classes/uniqueconstraintviolationexception"}),"UniqueConstraintViolationException")))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new ConstraintViolationException"),"(",Object(c.b)("inlineCode",{parentName:"p"},"previous"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/classes/driverexception#error"}),"Error"),"): ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/classes/constraintviolationexception"}),"ConstraintViolationException")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.3/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.3/api/classes/driverexception#constructor"}),"constructor"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"previous")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/4.3/api/classes/driverexception#error"}),"Error"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/classes/constraintviolationexception"}),"ConstraintViolationException")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"code"},"code"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"code"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.3/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.3/api/classes/driverexception#code"}),"code"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L6"}),"packages/core/src/exceptions.ts:6"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"errmsg"},"errmsg"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"errmsg"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.3/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.3/api/classes/driverexception#errmsg"}),"errmsg"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"errno"},"errno"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"errno"),": number"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.3/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.3/api/classes/driverexception#errno"}),"errno"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L7"}),"packages/core/src/exceptions.ts:7"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"message"},"message"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"message"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.3/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.3/api/classes/driverexception#message"}),"message"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in docs/node_modules/typescript/lib/lib.es5.d.ts:974")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"name"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.3/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.3/api/classes/driverexception#name"}),"name"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in docs/node_modules/typescript/lib/lib.es5.d.ts:973")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sqlmessage"},"sqlMessage"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"sqlMessage"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.3/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.3/api/classes/driverexception#sqlmessage"}),"sqlMessage"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L9"}),"packages/core/src/exceptions.ts:9"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sqlstate"},"sqlState"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"sqlState"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.3/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.3/api/classes/driverexception#sqlstate"}),"sqlState"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L8"}),"packages/core/src/exceptions.ts:8"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"stack"},"stack"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"stack"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.3/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/4.3/api/classes/driverexception#stack"}),"stack"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in docs/node_modules/typescript/lib/lib.es5.d.ts:975")))}p.isMDXComponent=!0}}]);