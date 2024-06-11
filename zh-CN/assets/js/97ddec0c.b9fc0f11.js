"use strict";(self.webpackChunkimmer_website=self.webpackChunkimmer_website||[]).push([[871],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:a,i[1]=d;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],d={id:"return",title:"\u4ece producers \u8fd4\u56de\u65b0\u6570\u636e"},l=void 0,u={unversionedId:"return",id:"return",title:"\u4ece producers \u8fd4\u56de\u65b0\u6570\u636e",description:"<div",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/return.mdx",sourceDirName:".",slug:"/return",permalink:"/zh-CN/return",draft:!1,editUrl:"https://github.com/immerjs/immer/edit/main/website/docs/return.mdx",tags:[],version:"current",frontMatter:{id:"return",title:"\u4ece producers \u8fd4\u56de\u65b0\u6570\u636e"},sidebar:"Immer",previous:{title:"\u81ea\u52a8\u51bb\u7ed3",permalink:"/zh-CN/freezing"},next:{title:"createDraft / finishDraft",permalink:"/zh-CN/async"}},s={},p=[{value:"\u4f7f\u7528 <code>nothing</code> \u4ea7\u751f <code>undefined</code>",id:"\u4f7f\u7528-nothing-\u4ea7\u751f-undefined",level:2},{value:"\u4f7f\u7528 <code>void</code> \u7684\u5185\u8054\u5feb\u6377\u65b9\u5f0f",id:"\u4f7f\u7528-void-\u7684\u5185\u8054\u5feb\u6377\u65b9\u5f0f",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("center",null,(0,o.kt)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",className:"horizontal bordered"}))," ",(0,o.kt)("details",null,(0,o.kt)("summary",{className:"egghead-summary"},"egghead.io \u7b2c9\u8bfe: \u8fd4\u56de\u5168\u65b0 state"),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("iframe",{width:"760",height:"427",scrolling:"no",src:"https://egghead.io/lessons/react-return-completely-new-state-from-an-immer-producer/embed"})),(0,o.kt)("a",{className:"egghead-link",href:"https://egghead.io/lessons/react-return-completely-new-state-from-an-immer-producer"},"Hosted on egghead.io")),(0,o.kt)("p",null,"\u4e0d\u9700\u8981\u4ece producer \u90a3\u91cc\u8fd4\u56de\u4efb\u4f55\u4e1c\u897f\uff0c\u56e0\u4e3a Immer \u65e0\u8bba\u5982\u4f55\u90fd\u4f1a\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"draft")," \u7684\uff08\u6700\u7ec8\uff09\u7248\u672c\u3002\u4f46\u662f\uff0c\u4e5f\u5141\u8bb8\u4ec5\u4ec5 ",(0,o.kt)("inlineCode",{parentName:"p"},"return draft"),"\u3002"),(0,o.kt)("p",null,"\u4e5f\u5141\u8bb8\u4ece producer \u51fd\u6570\u4e2d\u4efb\u610f\u8fd4\u56de\u5176\u4ed6\u6570\u636e\u3002\u4f46",(0,o.kt)("em",{parentName:"p"},"\u524d\u63d0"),"\u662f\u4f60\u6ca1\u6709\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"draft"),"\u3002\u8fd9\u5bf9\u4e8e\u4ea7\u751f\u4e00\u4e2a\u5168\u65b0\u7684 state \u5f88\u6709\u7528\u3002\u4e00\u4e9b\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const userReducer = produce((draft, action) => {\n    switch (action.type) {\n        case "renameUser":\n            //\u53ef\u4ee5\uff1a \u6211\u4eec\u4fee\u6539\u4e86\u5f53\u524d\u7684 state\n            draft.users[action.payload.id].name = action.payload.name\n            return draft // \u4e0e\u4ec5\u4ec5 \'return\' \u76f8\u540c\n        case "loadUsers":\n            // \u53ef\u4ee5: \u6211\u4eec\u8fd4\u56de\u4e86\u4e00\u4e2a\u5168\u65b0\u7684 state\n            return action.payload\n        case "adduser-1":\n            // \u4e0d\u884c: \u8fd9\u4e0d\u4f1a\u6539\u53d8 draft \uff0c\u4e5f\u4e0d\u4f1a\u8fd4\u56de\u65b0\u7684\u72b6\u6001\n            // \u5b83\u4e0d\u4f1a\u4fee\u6539 draft\uff08\u5b83\u53ea\u662f\u91cd\u65b0\u58f0\u660e\u5b83\uff09\n            // \u4e8b\u5b9e\u4e0a\uff0c\u8fd9\u6839\u672c\u6ca1\u6709\u505a\u4efb\u4f55\u4e8b\u60c5\n            draft = {users: [...draft.users, action.payload]}\n            return\n        case "adduser-2":\n            // \u4e0d\u884c: \u4fee\u6539 draft \u7684\u540c\u65f6\u8fd4\u56de\u4e86\u4e00\u4e2a\u65b0\u7684\u72b6\u6001\n            draft.userCount += 1\n            return {users: [...draft.users, action.payload]}\n        case "adduser-3":\n            // \u53ef\u4ee5: \u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u72b6\u6001\u3002\u4f46\u662f\uff0c\u4e0d\u5fc5\u8981\u7684\u590d\u6742\u548c\u6602\u8d35\n            return {\n                userCount: draft.userCount + 1,\n                users: [...draft.users, action.payload]\n            }\n        case "adduser-4":\n            // \u53ef\u4ee5: immer \u7684\u65b9\u5f0f\n            draft.userCount += 1\n            draft.users.push(action.payload)\n            return\n    }\n})\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u6ce8\u610f\uff1a\u65e0\u6cd5\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"em"},"undefined")," \uff0c\u56e0\u4e3a\u5b83\u4e0e\u4e0d\u66f4\u65b0 draft \u6ca1\u6709\u533a\u522b\uff01\u7ee7\u7eed\u9605\u8bfb......")),(0,o.kt)("h2",{id:"\u4f7f\u7528-nothing-\u4ea7\u751f-undefined"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h2"},"nothing")," \u4ea7\u751f ",(0,o.kt)("inlineCode",{parentName:"h2"},"undefined")),(0,o.kt)("p",null,"\u56e0\u6b64\uff0c\u4e00\u822c\u6765\u8bf4\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ece producer \u8fd4\u56de\u4e00\u4e2a\u65b0\u503c\u6765\u66ff\u6362\u5f53\u524d state\uff0c\u800c\u4e0d\u662f\u4fee\u6539 draft\u3002\u7136\u800c\uff0c\u6709\u4e00\u4e2a\u5fae\u5999\u7684\u8fb9\u7f18\u60c5\u51b5\uff1a\u5982\u679c\u60a8\u5c1d\u8bd5\u7f16\u5199\u4e00\u4e2a\u60f3\u8981\u7528 undefined \u66ff\u6362\u5f53\u524d\u72b6\u6001\u7684 producer\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"produce({}, draft => {\n    // \u4ec0\u4e48\u4e5f\u4e0d\u5e72\n})\n")),(0,o.kt)("p",null,"\u6216\u8005:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"produce({}, draft => {\n    // \u5c1d\u8bd5\u4ece producer \u4e2d\u8fd4\u56de undefined\n    return undefined\n})\n")),(0,o.kt)("p",null,"\u95ee\u9898\u5728\u4e8e\uff0c\u5728 JavaScript \u4e2d\uff0c\u4e00\u4e2a\u4e0d\u8fd4\u56de\u4efb\u4f55\u5185\u5bb9\u7684\u51fd\u6570\u4e5f\u4f1a\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"\uff01\u6240\u4ee5 immer \u65e0\u6cd5\u533a\u5206\u8fd9\u4e9b\u4e0d\u540c\u7684\u60c5\u51b5\u3002\u56e0\u6b64\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cImmer \u4f1a\u5047\u8bbe\u4efb\u4f55\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," \u7684 producer \u53ea\u662f\u8bd5\u56fe\u4fee\u6539 draft\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u4e3a\u4e86\u8ba9 Immer \u6e05\u695a\u60a8\u6709\u610f\u751f\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," \u503c\uff0c\u60a8\u53ef\u4ee5\u8fd4\u56de\u5185\u7f6e\u6807\u8bb0 ",(0,o.kt)("inlineCode",{parentName:"p"},"nothing"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import {produce, nothing} from "immer"\n\nconst state = {\n    hello: "world"\n}\n\nproduce(state, draft => {})\nproduce(state, draft => undefined)\n// \u90fd\u4f1a\u8fd4\u56de\u6700\u521d\u7684\u72b6\u6001: { hello: "world"}\n\nproduce(state, draft => nothing)\n// \u4ea7\u751f\u4e00\u4e2a\u65b0\u7684\u72b6\u6001, \'undefined\'\n')),(0,o.kt)("p",null,"\u6ce8\uff1a\u8bf7\u6ce8\u610f\uff0c\u6b64\u95ee\u9898\u7279\u5b9a\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," \u503c\uff0c\u4efb\u4f55\u5176\u4ed6\u503c\uff08\u5305\u62ec ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"\uff09\u90fd\u4e0d\u4f1a\u53d7\u5230\u6b64\u95ee\u9898\u7684\u5f71\u54cd"),(0,o.kt)("p",null,"\u63d0\u793a\uff1a\u4e3a\u4e86\u80fd\u591f\u5728\u4f7f\u7528 TypeScript \u65f6\u4ece recipe \u4e2d\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"nothing"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"state")," \u7684\u7c7b\u578b\u5fc5\u987b\u63a5\u53d7 undefined \u503c\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528-void-\u7684\u5185\u8054\u5feb\u6377\u65b9\u5f0f"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h2"},"void")," \u7684\u5185\u8054\u5feb\u6377\u65b9\u5f0f"),(0,o.kt)("details",null,(0,o.kt)("summary",{className:"egghead-summary"},"egghead.io \u7b2c10\u8bfe: \u4f7f\u7528 _void_ \u907f\u514d\u610f\u5916\u7684\u8fd4\u56de"),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("iframe",{width:"760",height:"427",scrolling:"no",src:"https://egghead.io/lessons/react-avoid-accidental-returns-of-new-state-by-using-the-void-keyword/embed"})),(0,o.kt)("a",{className:"egghead-link",href:"https://egghead.io/lessons/react-avoid-accidental-returns-of-new-state-by-using-the-void-keyword"},"Hosted on egghead.io")),(0,o.kt)("p",null,"Immer \u4e2d\u7684 draft \u4fee\u6539\u901a\u5e38\u9700\u8981\u4e00\u6bb5\u4ee3\u7801\u5757\uff0c\u56e0\u4e3a\u8fd4\u56de\u8868\u793a\u8986\u76d6\u3002\u6709\u65f6\u5019\u4f60\u53ef\u80fd\u89c9\u5f97\u8fd9\u4e48\u591a\u7684\u6837\u677f\u4ee3\u7801\u5f88\u7cdf\u5fc3\u3002"),(0,o.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 javascripts ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void"},(0,o.kt)("inlineCode",{parentName:"a"},"void"))," \u8fd0\u7b97\u7b26\uff0c\u5b83\u8ba1\u7b97\u8868\u8fbe\u5f0f\u5e76\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5355\u6b21\u4fee\u6539\nproduce(draft => void (draft.user.age += 1))\n\n// \u591a\u6b21\u4fee\u6539\nproduce(draft => void ((draft.user.age += 1), (draft.user.height = 186)))\n")),(0,o.kt)("p",null,"\u4ee3\u7801\u98ce\u683c\u662f\u9ad8\u5ea6\u4e2a\u4eba\u5316\u7684\uff0c\u4f46\u5bf9\u4e8e\u8981\u88ab\u8bb8\u591a\u4eba\u7406\u89e3\u7684\u4ee3\u7801\u5e93\uff0c\u6211\u4eec\u5efa\u8bae\u575a\u6301\u7ecf\u5178\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"draft => { draft.user.age += 1}")," \u4ee5\u907f\u514d\u8ba4\u77e5\u5f00\u9500\u3002"))}m.isMDXComponent=!0}}]);