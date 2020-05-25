(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3pVP":function(e,a,t){"use strict";var n=t("dsAS"),s=t("vOnD"),c=Object(s.d)(n.c).withConfig({displayName:"MdxCard",componentId:"w7n1ci-0"})(["",""],(function(e){var a=e.theme;return Object(s.c)(["","{margin-top:-3.75rem;padding-top:4.75rem;padding-right:40px;padding-left:40px;}p > img{text-align:center;max-width:100%;}li{margin-top:10px;}.note{border-radius:0.25rem;margin-bottom:1rem;padding:0.6rem;.note-title{font-weight:500;text-transform:uppercase;margin-bottom:1.5rem;}.note-body{font-size:0.875rem;line-height:1.5;}&.note-info,&.note-info p{color:",";background-color:#f0f6ff;}&.note-warning{color:",";background-color:#fffae4;}}.color-swatch{display:inline-block;border:1px solid black;width:0.875rem;height:0.875rem;margin-left:7px;margin-bottom:-2px;border-radius:2px;}p{font-size:",";line-height:1.5;}a{color:",";font-weight:",";text-decoration:none;&:hover{color:",";text-decoration:underline;}}.menu-items > .menu-item{margin-bottom:0.5rem;font-weight:bold;a:hover{font-weight:bold;text-decoration:none;}li{font-size:0.875rem;font-weight:normal;}li.menu-group{font-weight:bold;padding-top:1.25rem;padding-bottom:1rem;}}"],n.d,a.colorInfo600,a.colorWarning600,a.textParagraphFontSize,a.linkTextColor,a.cardTextFontWeight,a.linkTextHoverColor)}));a.a=c},"5HAd":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return i}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("q1tI");var n=t("7ljp"),s=t("eW/1"),c=t("1Yd/"),o=t("3pVP"),b=t("dsAS");var p={},m={_frontmatter:p},r=s.a;function i(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.b)(r,Object.assign({},m,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)(c.a,{title:"Admin Generator",mdxType:"SEO"}),Object(n.b)(o.a,{mdxType:"MdxCard"},Object(n.b)(b.d,{mdxType:"CardBody"},Object(n.b)("h3",{id:"generate-pages-queries-and-mutations"},"Generate pages, Queries and Mutations"),Object(n.b)("p",null,"It's a small tool to generate pages and .graphql files for every model in your prisma schema"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"NOTE: You can't use this tool outside our project ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/AhmedElywa/prisma-admin"}),"prisma-admin"))),Object(n.b)("h3",{id:"type-definition"},"Type definition"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"typescript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-typescript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"interface")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"Options")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// schema.json file output path default './server/src/graphql/schema/schema.json'"),"\n  schemaOutput",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"string"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// .graphql files output for queries and mutations default './admin/src/graphql'"),"\n  graphqlOutput",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"string"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// pages output for generate page for every model default './admin/src/pages/models'"),"\n  pagesOutput",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"string"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// exclude fields from all models"),"\n  fieldsExclude",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"string"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// exclude fields from one or more models will merge it with general fieldsExclude"),"\n  excludeFieldsByModel",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"modelName",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"string"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"string"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// exclude queries or mutations for one or more models"),"\n  modelsExclude",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," name",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"string"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," queries",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"boolean"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," mutations",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"boolean")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// disable all queries for all models"),"\n  disableQueries",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"boolean"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// disable all mutations for all models"),"\n  disableMutations",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"boolean"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  disableCreatePages",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"boolean"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  disableCreateGraphql",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"boolean"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// exclude queries and mutations for one or more model it's object with key : model name value array of QueriesAndMutations type"),"\n  excludeQueriesAndMutationsByModel",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"modelName",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"string"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," QueriesAndMutations",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// exclude queries and mutations for all models array of QueriesAndMutations type"),"\n  excludeQueriesAndMutations",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," QueriesAndMutations",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"type")," QueriesAndMutations ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"|")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'findOne'"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"|")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'findMany'"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"|")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'findCount'"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"|")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'createOne'"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"|")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'updateOne'"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"|")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'deleteOne'"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"|")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'updateMany'"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"|")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'deleteMany'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h3",{id:"use"},"Use"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"ts"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-ts"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," generateAdmin",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," Schema ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'@prisma-tools/admin'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," defaultSchema ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'./server/src/graphql/schema/schema.json'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// accept three args"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// first one path to your schema.prisma file"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// second import generated schema.json to merge changes you must create this file form first and add"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// {models: [], enums: []}"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// third arg is options look to the interface to know options"),"\n\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"generateAdmin"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'./server/prisma/schema.prisma'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," defaultSchema ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"as")," Schema",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  excludeFieldsByModel",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    User",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'password'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  excludeQueriesAndMutations",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'updateMany'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'deleteMany'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))))))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-generator-md-3089f2cabf86cce5cc1c.js.map