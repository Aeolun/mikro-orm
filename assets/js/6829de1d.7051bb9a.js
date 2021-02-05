(window.webpackJsonp=window.webpackJsonp||[]).push([[466],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(a),O=r,j=m["".concat(b,".").concat(O)]||m[O]||s[O]||i;return a?n.a.createElement(j,c(c({ref:t},p),{},{components:a})):n.a.createElement(j,c({ref:t},p))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,b=new Array(i);b[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var p=2;p<i;p++)b[p]=a[p];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},535:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),i=(a(0),a(1256)),b={id:"imigrator",title:"Interface: IMigrator",sidebar_label:"IMigrator"},c={unversionedId:"api/interfaces/imigrator",id:"version-4.3/api/interfaces/imigrator",isDocsHomePage:!1,title:"Interface: IMigrator",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/interfaces/imigrator.md",slug:"/api/interfaces/imigrator",permalink:"/docs/4.3/api/interfaces/imigrator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/interfaces/imigrator.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612554413,sidebar_label:"IMigrator",sidebar:"version-4.3/API",previous:{title:"Interface: IMetadataStorage",permalink:"/docs/4.3/api/interfaces/imetadatastorage"},next:{title:"Interface: IQueryBuilder<T>",permalink:"/docs/4.3/api/interfaces/iquerybuilder"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"createInitialMigration",id:"createinitialmigration",children:[]},{value:"createMigration",id:"createmigration",children:[]},{value:"down",id:"down",children:[]},{value:"getExecutedMigrations",id:"getexecutedmigrations",children:[]},{value:"getPendingMigrations",id:"getpendingmigrations",children:[]},{value:"up",id:"up",children:[]}]}],p={toc:o};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"IMigrator"))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"createinitialmigration"},"createInitialMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"createInitialMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"path?"),": string): Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#migrationresult"}),"MigrationResult"),">"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/typings.ts#L339"}),"packages/core/src/typings.ts:339"))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"path?")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#migrationresult"}),"MigrationResult"),">"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"createmigration"},"createMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"createMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"path?"),": string, ",Object(i.b)("inlineCode",{parentName:"p"},"blank?"),": boolean, ",Object(i.b)("inlineCode",{parentName:"p"},"initial?"),": boolean): Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#migrationresult"}),"MigrationResult"),">"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/typings.ts#L338"}),"packages/core/src/typings.ts:338"))),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"path?")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"blank?")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"initial?")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#migrationresult"}),"MigrationResult"),">"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"down"},"down"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"down"),"(",Object(i.b)("inlineCode",{parentName:"p"},"options?"),": string ","|"," string[] ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#migrateoptions"}),"MigrateOptions"),"): Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#umzugmigration"}),"UmzugMigration"),"[]>"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/typings.ts#L343"}),"packages/core/src/typings.ts:343"))),Object(i.b)("h4",{id:"parameters-2"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"options?")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string ","|"," string[] ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api#migrateoptions"}),"MigrateOptions"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#umzugmigration"}),"UmzugMigration"),"[]>"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getexecutedmigrations"},"getExecutedMigrations"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getExecutedMigrations"),"(): Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#migrationrow"}),"MigrationRow"),"[]>"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/typings.ts#L340"}),"packages/core/src/typings.ts:340"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#migrationrow"}),"MigrationRow"),"[]>"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getpendingmigrations"},"getPendingMigrations"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getPendingMigrations"),"(): Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#umzugmigration"}),"UmzugMigration"),"[]>"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/typings.ts#L341"}),"packages/core/src/typings.ts:341"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#umzugmigration"}),"UmzugMigration"),"[]>"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"up"},"up"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"up"),"(",Object(i.b)("inlineCode",{parentName:"p"},"options?"),": string ","|"," string[] ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#migrateoptions"}),"MigrateOptions"),"): Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#umzugmigration"}),"UmzugMigration"),"[]>"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/typings.ts#L342"}),"packages/core/src/typings.ts:342"))),Object(i.b)("h4",{id:"parameters-3"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"options?")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string ","|"," string[] ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api#migrateoptions"}),"MigrateOptions"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#umzugmigration"}),"UmzugMigration"),"[]>"))}l.isMDXComponent=!0}}]);