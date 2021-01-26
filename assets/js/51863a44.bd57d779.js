(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),o=p(a),O=n,d=o["".concat(c,".").concat(O)]||o[O]||m[O]||b;return a?r.a.createElement(d,i(i({ref:t},s),{},{components:a})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<b;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},427:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),b=(a(0),a(1253)),c={id:"knex",title:"Module: knex",sidebar_label:"knex",hide_title:!0},i={unversionedId:"api/modules/knex",id:"api/modules/knex",isDocsHomePage:!1,title:"Module: knex",description:"Module: knex",source:"@site/docs/api/modules/knex.md",slug:"/api/modules/knex",permalink:"/docs/next/api/modules/knex",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/modules/knex.md",version:"current",sidebar_label:"knex",sidebar:"API",previous:{title:"Module: entity-generator",permalink:"/docs/next/api/modules/entity_generator"},next:{title:"Module: migrations",permalink:"/docs/next/api/modules/migrations"}},l=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Namespaces",id:"namespaces",children:[]},{value:"Enumerations",id:"enumerations",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Interfaces",id:"interfaces",children:[]}]},{value:"Type aliases",id:"type-aliases",children:[{value:"Field",id:"field",children:[]},{value:"KnexStringRef",id:"knexstringref",children:[]}]},{value:"Variables",id:"variables",children:[{value:"MonkeyPatchable",id:"monkeypatchable",children:[]}]},{value:"Functions",id:"functions",children:[{value:"Knex",id:"knex",children:[]}]}],s={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"module-knex"},"Module: knex"),Object(b.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(b.b)("h3",{id:"namespaces"},"Namespaces"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/modules/knex.knex-1"}),"Knex"))),Object(b.b)("h3",{id:"enumerations"},"Enumerations"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/enums/knex.querytype"}),"QueryType"))),Object(b.b)("h3",{id:"classes"},"Classes"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),"AbstractSqlConnection")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/knex.abstractsqldriver"}),"AbstractSqlDriver")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/knex.abstractsqlplatform"}),"AbstractSqlPlatform")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/knex.arraycriterianode"}),"ArrayCriteriaNode")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/knex.criterianode"}),"CriteriaNode")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/knex.criterianodefactory"}),"CriteriaNodeFactory")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/knex.databaseschema"}),"DatabaseSchema")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/knex.databasetable"}),"DatabaseTable")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/knex.entitymanager"}),"EntityManager")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/knex.entityrepository"}),"EntityRepository")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/knex.objectcriterianode"}),"ObjectCriteriaNode")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/knex.querybuilder"}),"QueryBuilder")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/knex.querybuilderhelper"}),"QueryBuilderHelper")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/knex.scalarcriterianode"}),"ScalarCriteriaNode")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/knex.schemagenerator"}),"SchemaGenerator")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/knex.schemahelper"}),"SchemaHelper")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/knex.sqlentitymanager"}),"SqlEntityManager")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/knex.sqlentityrepository"}),"SqlEntityRepository"))),Object(b.b)("h3",{id:"interfaces"},"Interfaces"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/interfaces/knex.column"}),"Column")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/interfaces/knex.foreignkey"}),"ForeignKey")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/interfaces/knex.icriterianode"}),"ICriteriaNode")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/interfaces/knex.iquerybuilder"}),"IQueryBuilder")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/interfaces/knex.index"}),"Index")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/interfaces/knex.indexdef"}),"IndexDef")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/interfaces/knex.issame"}),"IsSame")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/interfaces/knex.joinoptions"}),"JoinOptions")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/interfaces/knex.knex-2"}),"Knex")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/interfaces/knex.table"}),"Table")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/interfaces/knex.tabledifference"}),"TableDifference"))),Object(b.b)("h2",{id:"type-aliases"},"Type aliases"),Object(b.b)("h3",{id:"field"},"Field"),Object(b.b)("p",null,"\u01ac ",Object(b.b)("strong",{parentName:"p"},"Field"),"<T",">",": ",Object(b.b)("em",{parentName:"p"},"string")," | keyof T | ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex#knexstringref"}),Object(b.b)("em",{parentName:"a"},"KnexStringRef"))," | ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder"))),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/56682be/packages/knex/src/typings.ts#L14"}),"packages/knex/src/typings.ts:14")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"knexstringref"},"KnexStringRef"),Object(b.b)("p",null,"\u01ac ",Object(b.b)("strong",{parentName:"p"},"KnexStringRef"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.ref"}),Object(b.b)("em",{parentName:"a"},"Ref")),"<",Object(b.b)("em",{parentName:"p"},"string"),", { ","[alias: string]",": ",Object(b.b)("em",{parentName:"p"},"string"),";  }",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/56682be/packages/knex/src/typings.ts#L10"}),"packages/knex/src/typings.ts:10")),Object(b.b)("h2",{id:"variables"},"Variables"),Object(b.b)("h3",{id:"monkeypatchable"},"MonkeyPatchable"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Const")," ",Object(b.b)("strong",{parentName:"p"},"MonkeyPatchable"),": ",Object(b.b)("em",{parentName:"p"},"object")),Object(b.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"MySqlDialect")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"PostgresDialectTableCompiler")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Sqlite3Dialect")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TableCompiler")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/56682be/packages/knex/src/MonkeyPatchable.ts#L14"}),"packages/knex/src/MonkeyPatchable.ts:14")),Object(b.b)("h2",{id:"functions"},"Functions"),Object(b.b)("h3",{id:"knex"},"Knex"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"Knex"),": "),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:384"))}p.isMDXComponent=!0}}]);