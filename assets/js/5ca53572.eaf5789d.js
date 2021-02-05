(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var l=b.a.createContext({}),m=function(e){var t=b.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=m(e.components);return b.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),o=m(a),j=n,d=o["".concat(c,".").concat(j)]||o[j]||O[j]||r;return a?b.a.createElement(d,p(p({ref:t},l),{},{components:a})):b.a.createElement(d,p({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=j;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<r;l++)c[l]=a[l];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},476:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return m}));var n=a(3),b=a(7),r=(a(0),a(1256)),c={id:"knex.icriterianode",title:"Interface: ICriteriaNode",sidebar_label:"ICriteriaNode",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/interfaces/knex.icriterianode",id:"api/interfaces/knex.icriterianode",isDocsHomePage:!1,title:"Interface: ICriteriaNode",description:"Interface: ICriteriaNode",source:"@site/docs/api/interfaces/knex.icriterianode.md",slug:"/api/interfaces/knex.icriterianode",permalink:"/docs/next/api/interfaces/knex.icriterianode",editUrl:null,version:"current",sidebar_label:"ICriteriaNode",sidebar:"API",previous:{title:"Interface: ForeignKey",permalink:"/docs/next/api/interfaces/knex.foreignkey"},next:{title:"Interface: IQueryBuilder<T>",permalink:"/docs/next/api/interfaces/knex.iquerybuilder"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"entityName",id:"entityname",children:[]},{value:"key",id:"key",children:[]},{value:"parent",id:"parent",children:[]},{value:"payload",id:"payload",children:[]},{value:"prop",id:"prop",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getPath",id:"getpath",children:[]},{value:"getPivotPath",id:"getpivotpath",children:[]},{value:"process",id:"process",children:[]},{value:"renameFieldToPK",id:"renamefieldtopk",children:[]},{value:"shouldInline",id:"shouldinline",children:[]},{value:"shouldRename",id:"shouldrename",children:[]},{value:"willAutoJoin",id:"willautojoin",children:[]}]}],l={toc:i};function m(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"interface-icriterianode"},"Interface: ICriteriaNode"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex"}),"knex"),".ICriteriaNode"),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"ICriteriaNode"))),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"entityname"},"entityName"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"entityName"),": ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/knex/src/typings.ts#L115"}),"packages/knex/src/typings.ts:115")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"key"},"key"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"key"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/knex/src/typings.ts#L117"}),"packages/knex/src/typings.ts:117")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"parent"},"parent"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"parent"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.icriterianode"}),Object(r.b)("em",{parentName:"a"},"ICriteriaNode"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/knex/src/typings.ts#L116"}),"packages/knex/src/typings.ts:116")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"payload"},"payload"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"payload"),": ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/knex/src/typings.ts#L118"}),"packages/knex/src/typings.ts:118")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"prop"},"prop"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"prop"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"p"},"any"),">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/knex/src/typings.ts#L119"}),"packages/knex/src/typings.ts:119")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"getpath"},"getPath"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getPath"),"(): ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/knex/src/typings.ts#L125"}),"packages/knex/src/typings.ts:125")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getpivotpath"},"getPivotPath"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getPivotPath"),"(",Object(r.b)("inlineCode",{parentName:"p"},"path"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"path")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/knex/src/typings.ts#L126"}),"packages/knex/src/typings.ts:126")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"process"},"process"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"process"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"qb"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.iquerybuilder"}),Object(r.b)("em",{parentName:"a"},"IQueryBuilder")),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"alias?"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"qb")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/knex.iquerybuilder"}),Object(r.b)("em",{parentName:"a"},"IQueryBuilder")),"<T",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"alias?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/knex/src/typings.ts#L120"}),"packages/knex/src/typings.ts:120")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"renamefieldtopk"},"renameFieldToPK"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"renameFieldToPK"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"qb"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.iquerybuilder"}),Object(r.b)("em",{parentName:"a"},"IQueryBuilder")),"<T",">","): ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"qb")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/knex.iquerybuilder"}),Object(r.b)("em",{parentName:"a"},"IQueryBuilder")),"<T",">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/knex/src/typings.ts#L124"}),"packages/knex/src/typings.ts:124")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"shouldinline"},"shouldInline"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"shouldInline"),"(",Object(r.b)("inlineCode",{parentName:"p"},"payload"),": ",Object(r.b)("em",{parentName:"p"},"any"),"): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"payload")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/knex/src/typings.ts#L121"}),"packages/knex/src/typings.ts:121")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"shouldrename"},"shouldRename"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"shouldRename"),"(",Object(r.b)("inlineCode",{parentName:"p"},"payload"),": ",Object(r.b)("em",{parentName:"p"},"any"),"): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"payload")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/knex/src/typings.ts#L123"}),"packages/knex/src/typings.ts:123")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"willautojoin"},"willAutoJoin"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"willAutoJoin"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"qb"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.iquerybuilder"}),Object(r.b)("em",{parentName:"a"},"IQueryBuilder")),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"alias?"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"qb")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/knex.iquerybuilder"}),Object(r.b)("em",{parentName:"a"},"IQueryBuilder")),"<T",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"alias?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b9064d5/packages/knex/src/typings.ts#L122"}),"packages/knex/src/typings.ts:122")))}m.isMDXComponent=!0}}]);