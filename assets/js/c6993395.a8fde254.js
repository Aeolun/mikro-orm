(window.webpackJsonp=window.webpackJsonp||[]).push([[904],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return d}));var b=a(0),n=a.n(b);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},r=Object.keys(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),m=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},O=function(e){var t=m(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},o=n.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,r=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),O=m(a),o=b,d=O["".concat(c,".").concat(o)]||O[o]||j[o]||r;return a?n.a.createElement(d,p(p({ref:t},i),{},{components:a})):n.a.createElement(d,p({ref:t},i))}));function d(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=a.length,c=new Array(r);c[0]=o;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:b,c[1]=p;for(var i=2;i<r;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},974:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return m}));var b=a(3),n=a(7),r=(a(0),a(1256)),c={id:"core.entityvalidator",title:"Class: EntityValidator",sidebar_label:"EntityValidator",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/classes/core.entityvalidator",id:"api/classes/core.entityvalidator",isDocsHomePage:!1,title:"Class: EntityValidator",description:"Class: EntityValidator",source:"@site/docs/api/classes/core.entityvalidator.md",slug:"/api/classes/core.entityvalidator",permalink:"/docs/next/api/classes/core.entityvalidator",editUrl:null,version:"current",sidebar_label:"EntityValidator",sidebar:"API",previous:{title:"Class: EntityTransformer",permalink:"/docs/next/api/classes/core.entitytransformer"},next:{title:"Class: EnumArrayType<T>",permalink:"/docs/next/api/classes/core.enumarraytype"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"fixBooleanType",id:"fixbooleantype",children:[]},{value:"fixDateType",id:"fixdatetype",children:[]},{value:"fixNumberType",id:"fixnumbertype",children:[]},{value:"fixTypes",id:"fixtypes",children:[]},{value:"getValue",id:"getvalue",children:[]},{value:"setValue",id:"setvalue",children:[]},{value:"validate",id:"validate",children:[]},{value:"validateCollection",id:"validatecollection",children:[]},{value:"validateEmptyWhere",id:"validateemptywhere",children:[]},{value:"validateParams",id:"validateparams",children:[]},{value:"validatePrimaryKey",id:"validateprimarykey",children:[]},{value:"validateProperty",id:"validateproperty",children:[]}]}],i={toc:l};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(b.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"class-entityvalidator"},"Class: EntityValidator"),Object(r.b)("p",null,Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".EntityValidator"),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"EntityValidator"))),Object(r.b)("h2",{id:"constructors"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new EntityValidator"),"(",Object(r.b)("inlineCode",{parentName:"p"},"strict"),": ",Object(r.b)("em",{parentName:"p"},"boolean"),"): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entityvalidator"}),Object(r.b)("em",{parentName:"a"},"EntityValidator"))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"strict")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"boolean"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entityvalidator"}),Object(r.b)("em",{parentName:"a"},"EntityValidator"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/core/src/entity/EntityValidator.ts#L6"}),"packages/core/src/entity/EntityValidator.ts:6")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"fixbooleantype"},"fixBooleanType"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"fixBooleanType"),"(",Object(r.b)("inlineCode",{parentName:"p"},"givenValue"),": ",Object(r.b)("em",{parentName:"p"},"number"),"): ",Object(r.b)("em",{parentName:"p"},"number")," ","|"," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"givenValue")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"number"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"number")," ","|"," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/core/src/entity/EntityValidator.ts#L147"}),"packages/core/src/entity/EntityValidator.ts:147")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"fixdatetype"},"fixDateType"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"fixDateType"),"(",Object(r.b)("inlineCode",{parentName:"p"},"givenValue"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("em",{parentName:"p"},"string")," ","|"," Date"),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"givenValue")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"string")," ","|"," Date"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/core/src/entity/EntityValidator.ts#L130"}),"packages/core/src/entity/EntityValidator.ts:130")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"fixnumbertype"},"fixNumberType"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"fixNumberType"),"(",Object(r.b)("inlineCode",{parentName:"p"},"givenValue"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("em",{parentName:"p"},"string")," ","|"," ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"givenValue")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"string")," ","|"," ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/core/src/entity/EntityValidator.ts#L142"}),"packages/core/src/entity/EntityValidator.ts:142")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"fixtypes"},"fixTypes"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"fixTypes"),"(",Object(r.b)("inlineCode",{parentName:"p"},"expectedType"),": ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"givenType"),": ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"givenValue"),": ",Object(r.b)("em",{parentName:"p"},"any"),"): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"expectedType")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"givenType")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"givenValue")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/core/src/entity/EntityValidator.ts#L114"}),"packages/core/src/entity/EntityValidator.ts:114")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getvalue"},"getValue"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"getValue"),"(",Object(r.b)("inlineCode",{parentName:"p"},"o"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("em",{parentName:"p"},"any"),">",", ",Object(r.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"p"},"any"),">","): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"o")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("em",{parentName:"td"},"any"),">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prop")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"td"},"any"),">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/core/src/entity/EntityValidator.ts#L91"}),"packages/core/src/entity/EntityValidator.ts:91")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setvalue"},"setValue"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"setValue"),"(",Object(r.b)("inlineCode",{parentName:"p"},"o"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("em",{parentName:"p"},"any"),">",", ",Object(r.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"p"},"any"),">",", ",Object(r.b)("inlineCode",{parentName:"p"},"v"),": ",Object(r.b)("em",{parentName:"p"},"any"),"): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("h4",{id:"parameters-6"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"o")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("em",{parentName:"td"},"any"),">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prop")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"td"},"any"),">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"v")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/core/src/entity/EntityValidator.ts#L99"}),"packages/core/src/entity/EntityValidator.ts:99")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"validate"},"validate"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"validate"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(r.b)("inlineCode",{parentName:"p"},"payload"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(r.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(r.b)("em",{parentName:"p"},"any"),">","): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(r.b)("h4",{id:"parameters-7"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"T")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"payload")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"meta")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(r.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(r.b)("em",{parentName:"td"},"any"),">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/core/src/entity/EntityValidator.ts#L10"}),"packages/core/src/entity/EntityValidator.ts:10")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"validatecollection"},"validateCollection"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"validateCollection"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(r.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"p"},"any"),">","): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(r.b)("h4",{id:"parameters-8"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"T")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prop")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"td"},"any"),">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/core/src/entity/EntityValidator.ts#L108"}),"packages/core/src/entity/EntityValidator.ts:108")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"validateemptywhere"},"validateEmptyWhere"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"validateEmptyWhere"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"where"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/modules/core#filterquery"}),Object(r.b)("em",{parentName:"a"},"FilterQuery")),"<T",">","): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(r.b)("h4",{id:"parameters-9"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"where")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/modules/core#filterquery"}),Object(r.b)("em",{parentName:"a"},"FilterQuery")),"<T",">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/core/src/entity/EntityValidator.ts#L85"}),"packages/core/src/entity/EntityValidator.ts:85")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"validateparams"},"validateParams"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"validateParams"),"(",Object(r.b)("inlineCode",{parentName:"p"},"params"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"type?"),": ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"field?"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("h4",{id:"parameters-10"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"params")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"type")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"'search condition'")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"field?")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/core/src/entity/EntityValidator.ts#L61"}),"packages/core/src/entity/EntityValidator.ts:61")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"validateprimarykey"},"validatePrimaryKey"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"validatePrimaryKey"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(r.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(r.b)("em",{parentName:"p"},"any"),">","): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(r.b)("h4",{id:"parameters-11"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"meta")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(r.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(r.b)("em",{parentName:"td"},"any"),">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/core/src/entity/EntityValidator.ts#L77"}),"packages/core/src/entity/EntityValidator.ts:77")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"validateproperty"},"validateProperty"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"validateProperty"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"p"},"any"),">",", ",Object(r.b)("inlineCode",{parentName:"p"},"givenValue"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": T): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(r.b)("h4",{id:"parameters-12"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prop")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"td"},"any"),">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"givenValue")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"T")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/core/src/entity/EntityValidator.ts#L40"}),"packages/core/src/entity/EntityValidator.ts:40")))}m.isMDXComponent=!0}}]);