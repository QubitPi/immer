"use strict";(self.webpackChunkimmer_website=self.webpackChunkimmer_website||[]).push([[877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[u]="string"==typeof e?e:a,o[1]=d;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4787:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>p,toc:()=>u});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],d={id:"pitfalls",title:"\u9677\u9631"},l=void 0,p={unversionedId:"pitfalls",id:"pitfalls",title:"\u9677\u9631",description:"\u6027\u80fd\u63d0\u793a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/pitfalls.md",sourceDirName:".",slug:"/pitfalls",permalink:"/zh-CN/pitfalls",draft:!1,editUrl:"https://github.com/immerjs/immer/edit/main/website/docs/pitfalls.md",tags:[],version:"current",frontMatter:{id:"pitfalls",title:"\u9677\u9631"},sidebar:"Immer",previous:{title:"FAQ",permalink:"/zh-CN/faq"},next:{title:"\u57fa\u4e8e Immer",permalink:"/zh-CN/built-with"}},c={},u=[{value:"\u6027\u80fd\u63d0\u793a",id:"\u6027\u80fd\u63d0\u793a",level:3},{value:"\u4e0d\u8981\u91cd\u65b0\u5206\u914d recipe \u53c2\u6570",id:"\u4e0d\u8981\u91cd\u65b0\u5206\u914d-recipe-\u53c2\u6570",level:3},{value:"Immer \u53ea\u652f\u6301\u5355\u5411\u6811",id:"immer-\u53ea\u652f\u6301\u5355\u5411\u6811",level:3},{value:"\u6c38\u8fdc\u4e0d\u8981\u4ece producer \u90a3\u91cc\u663e\u5f0f\u8fd4\u56de <code>undefined</code>",id:"\u6c38\u8fdc\u4e0d\u8981\u4ece-producer-\u90a3\u91cc\u663e\u5f0f\u8fd4\u56de-undefined",level:3},{value:"\u4e0d\u8981\u4fee\u6539\u7279\u6b8a\u5bf9\u8c61",id:"\u4e0d\u8981\u4fee\u6539\u7279\u6b8a\u5bf9\u8c61",level:3},{value:"\u7c7b\u5e94\u8be5\u662f\u53ef draft \u7684\u6216\u4e0d\u53ef\u53d8\u7684",id:"\u7c7b\u5e94\u8be5\u662f\u53ef-draft-\u7684\u6216\u4e0d\u53ef\u53d8\u7684",level:3},{value:"\u53ea\u6709\u6709\u6548\u7684\u7d22\u5f15\u548c\u957f\u5ea6\u53ef\u4ee5\u5728\u6570\u7ec4\u4e0a\u6539\u53d8",id:"\u53ea\u6709\u6709\u6548\u7684\u7d22\u5f15\u548c\u957f\u5ea6\u53ef\u4ee5\u5728\u6570\u7ec4\u4e0a\u6539\u53d8",level:3},{value:"\u53ea\u6709\u6765\u81ea state \u7684\u6570\u636e\u4f1a\u88ab draft",id:"\u53ea\u6709\u6765\u81ea-state-\u7684\u6570\u636e\u4f1a\u88ab-draft",level:3},{value:"Immer patches \u4e0d\u4e00\u5b9a\u662f\u6700\u4f18\u7684",id:"immer-patches-\u4e0d\u4e00\u5b9a\u662f\u6700\u4f18\u7684",level:3},{value:"\u59cb\u7ec8\u4f7f\u7528\u5d4c\u5957 producers \u7684\u7ed3\u679c",id:"\u59cb\u7ec8\u4f7f\u7528\u5d4c\u5957-producers-\u7684\u7ed3\u679c",level:3},{value:"Drafts \u5728\u5f15\u7528\u4e0a\u4e0d\u76f8\u7b49",id:"drafts-\u5728\u5f15\u7528\u4e0a\u4e0d\u76f8\u7b49",level:3}],s={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("center",null,(0,i.kt)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",class:"horizontal bordered"})),(0,i.kt)("h3",{id:"\u6027\u80fd\u63d0\u793a"},"\u6027\u80fd\u63d0\u793a"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u6027\u80fd\u63d0\u793a\uff0c\u9605\u8bfb ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/performance#performance-tips"},"\u6027\u80fd\u63d0\u793a"),"."),(0,i.kt)("h3",{id:"\u4e0d\u8981\u91cd\u65b0\u5206\u914d-recipe-\u53c2\u6570"},"\u4e0d\u8981\u91cd\u65b0\u5206\u914d recipe \u53c2\u6570"),(0,i.kt)("p",null,"\u6c38\u8fdc\u4e0d\u8981\u91cd\u65b0\u5206\u914d ",(0,i.kt)("inlineCode",{parentName:"p"},"draft")," \u53c2\u6570\uff08\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"draft = myCoolNewState"),"\uff09\u3002\u76f8\u53cd\uff0c\u8981\u4e48\u4fee\u6539 draft\uff0c\u8981\u4e48\u8fd4\u56de\u65b0\u72b6\u6001\u3002\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/return"},"\u4ece producers \u8fd4\u56de\u6570\u636e"),"\u3002"),(0,i.kt)("h3",{id:"immer-\u53ea\u652f\u6301\u5355\u5411\u6811"},"Immer \u53ea\u652f\u6301\u5355\u5411\u6811"),(0,i.kt)("p",null,"Immer \u5047\u8bbe\u60a8\u7684\u72b6\u6001\u662f\u5355\u5411\u6811\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4efb\u4f55\u5bf9\u8c61\u90fd\u4e0d\u5e94\u8be5\u5728\u6811\u4e2d\u51fa\u73b0\u4e24\u6b21\uff0c\u4e5f\u4e0d\u5e94\u8be5\u6709\u5faa\u73af\u5f15\u7528\u3002\u4ece\u6839\u5230\u6811\u7684\u4efb\u4f55\u8282\u70b9\u5e94\u8be5\u53ea\u6709\u4e00\u6761\u8def\u5f84\u3002"),(0,i.kt)("h3",{id:"\u6c38\u8fdc\u4e0d\u8981\u4ece-producer-\u90a3\u91cc\u663e\u5f0f\u8fd4\u56de-undefined"},"\u6c38\u8fdc\u4e0d\u8981\u4ece producer \u90a3\u91cc\u663e\u5f0f\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"h3"},"undefined")),(0,i.kt)("p",null,"\u53ef\u4ee5\u4ece producers \u8fd4\u56de\u503c\uff0c\u4f46\u4e0d\u80fd\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u56e0\u4e3a\u5b83\u4e0e\u6839\u672c\u4e0d\u66f4\u65b0 draft \u6ca1\u6709\u533a\u522b\uff01\u5982\u679c\u4f60\u60f3\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," \u66ff\u6362 draft\uff0c\u53ea\u9700\u4ece producer \u90a3\u91cc\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"nothing"),"\u3002"),(0,i.kt)("h3",{id:"\u4e0d\u8981\u4fee\u6539\u7279\u6b8a\u5bf9\u8c61"},"\u4e0d\u8981\u4fee\u6539\u7279\u6b8a\u5bf9\u8c61"),(0,i.kt)("p",null,"Immer ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/immerjs/immer/issues/504"},"\u4e0d\u652f\u6301\u7279\u6b8a\u5bf9\u8c61")," \u6bd4\u5982 window.location."),(0,i.kt)("h3",{id:"\u7c7b\u5e94\u8be5\u662f\u53ef-draft-\u7684\u6216\u4e0d\u53ef\u53d8\u7684"},"\u7c7b\u5e94\u8be5\u662f\u53ef draft \u7684\u6216\u4e0d\u53ef\u53d8\u7684"),(0,i.kt)("p",null,"\u60a8\u5c06\u9700\u8981\u4f7f\u81ea\u5df1\u7684\u7c7b\u80fd\u4e0e Immer \u4e00\u8d77\u6b63\u5e38\u5de5\u4f5c\u3002\u6709\u5173\u8be5\u4e3b\u9898\u7684\u6587\u6863\uff0c\u8bf7\u67e5\u770b\u6709\u5173\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/complex-objects"},"\u590d\u6742\u5bf9\u8c61"),"\u7684\u90e8\u5206\u3002"),(0,i.kt)("h3",{id:"\u53ea\u6709\u6709\u6548\u7684\u7d22\u5f15\u548c\u957f\u5ea6\u53ef\u4ee5\u5728\u6570\u7ec4\u4e0a\u6539\u53d8"},"\u53ea\u6709\u6709\u6548\u7684\u7d22\u5f15\u548c\u957f\u5ea6\u53ef\u4ee5\u5728\u6570\u7ec4\u4e0a\u6539\u53d8"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u6570\u7ec4\uff0c\u53ea\u80fd\u6539\u53d8\u6570\u503c\u5c5e\u6027\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"length")," \u5c5e\u6027\u3002\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e0d\u4f1a\u4fdd\u7559\u5728\u6570\u7ec4\u4e0a\u3002"),(0,i.kt)("h3",{id:"\u53ea\u6709\u6765\u81ea-state-\u7684\u6570\u636e\u4f1a\u88ab-draft"},"\u53ea\u6709\u6765\u81ea state \u7684\u6570\u636e\u4f1a\u88ab draft"),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6765\u81ea\u95ed\u5305\u800c\u4e0d\u662f\u6765\u81ea\u57fa\u672c state \u7684\u6570\u636e\u5c06\u6c38\u8fdc\u4e0d\u4f1a\u88ab draft\uff0c\u5373\u4f7f\u6570\u636e\u5df2\u6210\u4e3a\u65b0 darft \u7684\u4e00\u90e8\u5206\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function onReceiveTodo(todo) {\n    const nextTodos = produce(todos, draft => {\n        draft.todos[todo.id] = todo\n        // \u6ce8\u610f\uff0c\u56e0\u4e3a todo \u6765\u81ea\u5916\u90e8\uff0c\u800c\u4e0d\u662f draft\uff0c\u6240\u4ee5\u4ed6\u4e0d\u4f1a\u88ab draft\uff0c\n        // \u6240\u4ee5\u4e0b\u9762\u7684\u4fee\u6539\u4f1a\u5f71\u54cd\u539f\u6765\u7684 todo!\n        draft.todos[todo.id].done = true\n\n        // \u4e0a\u9762\u7684\u4ee3\u7801\u76f8\u5f53\u4e8e\n        todo.done = true\n        draft.todos[todo.id] = todo\n    })\n}\n")),(0,i.kt)("h3",{id:"immer-patches-\u4e0d\u4e00\u5b9a\u662f\u6700\u4f18\u7684"},"Immer patches \u4e0d\u4e00\u5b9a\u662f\u6700\u4f18\u7684"),(0,i.kt)("p",null,"Immer \u751f\u6210\u7684 patches \u5e94\u8be5\u662f\u6b63\u786e\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5c06\u5b83\u4eec\u5e94\u7528\u4e8e\u76f8\u540c\u7684\u57fa\u7840\u5bf9\u8c61\u5e94\u8be5\u4f1a\u5bfc\u81f4\u76f8\u540c\u7684\u6700\u7ec8\u72b6\u6001\u3002\u7136\u800c\uff0cImmer \u4e0d\u4fdd\u8bc1\u751f\u6210\u7684 patches \u662f\u6700\u4f18\u7684\uff0c\u5373\u53ef\u80fd\u7684\u6700\u5c0f patches"),(0,i.kt)("h3",{id:"\u59cb\u7ec8\u4f7f\u7528\u5d4c\u5957-producers-\u7684\u7ed3\u679c"},"\u59cb\u7ec8\u4f7f\u7528\u5d4c\u5957 producers \u7684\u7ed3\u679c"),(0,i.kt)("p",null,"\u652f\u6301\u5d4c\u5957\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"produce")," \uff0c\u4f46\u8bf7\u6ce8\u610f ",(0,i.kt)("inlineCode",{parentName:"p"},"produce")," \u5c06",(0,i.kt)("em",{parentName:"p"},"\u59cb\u7ec8"),"\u4ea7\u751f\u65b0\u72b6\u6001\uff0c\u56e0\u6b64\u5373\u4f7f\u5c06 draft \u4f20\u9012\u7ed9\u5d4c\u5957 produce\uff0c\u5185\u90e8 produce \u6240\u505a\u7684\u66f4\u6539\u4e5f\u4e0d\u4f1a\u5728\u4f20\u9012\u7ed9\u5b83\u7684 draft \u4e2d\u53ef\u89c1\uff0c\u53ea\u4f1a\u53cd\u6620\u5728\u4ea7\u751f\u7684\u8f93\u51fa\u4e2d\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5f53\u4f7f\u7528\u5d4c\u5957 produce \u65f6\uff0c\u60a8\u4f1a\u5f97\u5230 draft \u7684 draft\uff0c\u5e76\u4e14\u5185\u90e8 produce \u7684\u7ed3\u679c\u5e94\u8be5\u5408\u5e76\u56de\u539f\u59cb draft\uff08\u6216\u8fd4\u56de\uff09\u3002\u4f8b\u5982\uff0c\u5982\u679c\u5185\u90e8 produce \u7684\u8f93\u51fa\u6ca1\u6709\u88ab\u4f7f\u7528\u7684\u8bdd\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},'produce(state, draft => {produce(draft.user, userDraft => { userDraft.name += "!" })})')," \u5c06\u4e0d\u4f1a\u751f\u6548\u3002\u4f7f\u7528\u5d4c\u5957 producers \u7684\u6b63\u786e\u65b9\u6cd5\u662f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'produce(state, draft => {\n    draft.user = produce(draft.user, userDraft => {\n        userDraft.name += "!"\n    })\n})\n')),(0,i.kt)("h3",{id:"drafts-\u5728\u5f15\u7528\u4e0a\u4e0d\u76f8\u7b49"},"Drafts \u5728\u5f15\u7528\u4e0a\u4e0d\u76f8\u7b49"),(0,i.kt)("p",null,"Immer \u4e2d\u7684 draft \u5bf9\u8c61\u5305\u88c5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Proxy")," \u4e2d\uff0c\u56e0\u6b64\u60a8\u4e0d\u80fd\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"==")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"===")," \u6765\u6d4b\u8bd5\u539f\u59cb\u5bf9\u8c61\u4e0e\u5176 draft \u4e4b\u95f4\u7684\u76f8\u7b49\u6027\uff08\u4f8b\u5982\uff0c\u5f53\u5339\u914d\u6570\u7ec4\u4e2d\u7684\u7279\u5b9a\u5143\u7d20\u65f6\uff09\u3002\u76f8\u53cd\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"original")," \u52a9\u624b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const remove = produce((list, element) => {\n    const index = list.indexOf(element) // \u4e0d\u4f1a\u5de5\u4f5c\uff01\n    const index = original(list).indexOf(element) // \u7528\u8fd9\u4e2a\uff01\n    if (index > -1) list.splice(index, 1)\n})\n\nconst values = [a, b, c]\nremove(values, a)\n")),(0,i.kt)("p",null,"\u5982\u679c\u53ef\u4ee5\u7684\u8bdd\uff0c\u5efa\u8bae\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"produce")," \u51fd\u6570\u4e4b\u5916\u6267\u884c\u6bd4\u8f83\uff0c\u6216\u8005\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},".id")," \u4e4b\u7c7b\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u5c5e\u6027\uff0c\u4ee5\u907f\u514d\u9700\u8981\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"original"),"\u3002"))}m.isMDXComponent=!0}}]);