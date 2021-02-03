(window.webpackJsonp=window.webpackJsonp||[]).push([[734],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return d}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var l=b.a.createContext({}),o=function(e){var t=b.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},O=function(e){var t=o(e.components);return b.a.createElement(l.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),O=o(a),m=n,d=O["".concat(c,".").concat(m)]||O[m]||j[m]||r;return a?b.a.createElement(d,p(p({ref:t},l),{},{components:a})):b.a.createElement(d,p({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<r;l++)c[l]=a[l];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},804:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),b=a(7),r=(a(0),a(1256)),c={id:"iwrappedentity",title:"Interface: IWrappedEntity<T, PK, P>",sidebar_label:"IWrappedEntity"},p={unversionedId:"api/interfaces/iwrappedentity",id:"version-4.3/api/interfaces/iwrappedentity",isDocsHomePage:!1,title:"Interface: IWrappedEntity<T, PK, P>",description:"Type parameters",source:"@site/versioned_docs/version-4.3/api/interfaces/iwrappedentity.md",slug:"/api/interfaces/iwrappedentity",permalink:"/docs/4.3/api/interfaces/iwrappedentity",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/interfaces/iwrappedentity.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612369190,sidebar_label:"IWrappedEntity",sidebar:"version-4.3/API",previous:{title:"Interface: ISchemaGenerator",permalink:"/docs/4.3/api/interfaces/ischemagenerator"},next:{title:"Interface: IWrappedEntityInternal<T, PK, P>",permalink:"/docs/4.3/api/interfaces/iwrappedentityinternal"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implemented by",id:"implemented-by",children:[]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]},{value:"init",id:"init",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"populated",id:"populated",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"toObject",id:"toobject",children:[]},{value:"toReference",id:"toreference",children:[]}]}],l={toc:i};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"type-parameters"},"Type parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#anyentity"}),"AnyEntity"),"<","T>"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"PK")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"keyof T"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"P")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#populate"}),"Populate"),"<","T> ","|"," unknown"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"unknown")))),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"IWrappedEntity")),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/iwrappedentityinternal"}),"IWrappedEntityInternal")))),Object(r.b)("h2",{id:"implemented-by"},"Implemented by"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/4.3/api/classes/baseentity"}),"BaseEntity"))),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"assign"},"assign"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"assign"),"(",Object(r.b)("inlineCode",{parentName:"p"},"data"),": any, ",Object(r.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/assignoptions"}),"AssignOptions")," ","|"," boolean): T"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/typings.ts#L86"}),"packages/core/src/typings.ts:86"))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/assignoptions"}),"AssignOptions")," ","|"," boolean")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," T"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"init"},"init"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"init"),"<","P>(",Object(r.b)("inlineCode",{parentName:"p"},"populated?"),": boolean, ",Object(r.b)("inlineCode",{parentName:"p"},"populate?"),": P, ",Object(r.b)("inlineCode",{parentName:"p"},"lockMode?"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/enums/lockmode"}),"LockMode"),"): Promise","<","T>"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/typings.ts#L82"}),"packages/core/src/typings.ts:82"))),Object(r.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"P")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#populate"}),"Populate"),"<","T>"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Populate\\","<","T>")))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"populated?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"populate?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"P")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"lockMode?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/enums/lockmode"}),"LockMode"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," Promise","<","T>"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isinitialized"},"isInitialized"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"isInitialized"),"(): boolean"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/typings.ts#L80"}),"packages/core/src/typings.ts:80"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"populated"},"populated"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"populated"),"(",Object(r.b)("inlineCode",{parentName:"p"},"populated?"),": boolean): void"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/typings.ts#L81"}),"packages/core/src/typings.ts:81"))),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"populated?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," void"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"tojson"},"toJSON"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"toJSON"),"(...",Object(r.b)("inlineCode",{parentName:"p"},"args"),": any[]): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#dictionary"}),"Dictionary")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/typings.ts#L85"}),"packages/core/src/typings.ts:85"))),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"...args")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#dictionary"}),"Dictionary")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"toobject"},"toObject"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"toObject"),"(",Object(r.b)("inlineCode",{parentName:"p"},"ignoreFields?"),": string[]): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#dictionary"}),"Dictionary")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/typings.ts#L84"}),"packages/core/src/typings.ts:84"))),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ignoreFields?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#dictionary"}),"Dictionary")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"toreference"},"toReference"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"toReference"),"<","PK2, P2>(): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#identifiedreference"}),"IdentifiedReference"),"<","T, PK2> & ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/loadedreference"}),"LoadedReference"),"<","T, P2>"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/typings.ts#L83"}),"packages/core/src/typings.ts:83"))),Object(r.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"PK2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PK ","|"," unknown"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"unknown")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"P2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"P ","|"," unknown"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"unknown")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#identifiedreference"}),"IdentifiedReference"),"<","T, PK2> & ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/loadedreference"}),"LoadedReference"),"<","T, P2>"))}o.isMDXComponent=!0}}]);