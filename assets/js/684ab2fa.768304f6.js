"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4502],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2804:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={description:"Author: @TBC | https://leetcode.com/problems/merge-nodes-in-between-zeros/"},s="2181 - Merge Nodes in Between Zeros (Medium)",p={unversionedId:"2100-2199/merge-nodes-in-between-zeros-medium",id:"2100-2199/merge-nodes-in-between-zeros-medium",title:"2181 - Merge Nodes in Between Zeros (Medium)",description:"Author: @TBC | https://leetcode.com/problems/merge-nodes-in-between-zeros/",source:"@site/solutions/2100-2199/2181-merge-nodes-in-between-zeros-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/merge-nodes-in-between-zeros-medium",permalink:"/leetcode-the-hard-way/solutions/2100-2199/merge-nodes-in-between-zeros-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2181-merge-nodes-in-between-zeros-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:2181,frontMatter:{description:"Author: @TBC | https://leetcode.com/problems/merge-nodes-in-between-zeros/"},sidebar:"tutorialSidebar",previous:{title:"2180 - Count Integers With Even Digit Sum (Easy)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/count-integers-with-even-digit-sum-easy"},next:{title:"2182 - Construct String With Repeat Limit (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/construct-string-with-repeat-limit-medium"}},d={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}],u={toc:m};function c(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2181---merge-nodes-in-between-zeros-medium"},"2181 - Merge Nodes in Between Zeros (Medium)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given the ",(0,i.kt)("inlineCode",{parentName:"p"},"head")," of a linked list, which contains a series of integers ",(0,i.kt)("strong",{parentName:"p"},"separated")," by ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"'s. The ",(0,i.kt)("strong",{parentName:"p"},"beginning")," and ",(0,i.kt)("strong",{parentName:"p"},"end")," of the linked list will have ",(0,i.kt)("inlineCode",{parentName:"p"},"Node.val == 0"),"."),(0,i.kt)("p",null,"For ",(0,i.kt)("strong",{parentName:"p"},"every")," two consecutive ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"'s, ",(0,i.kt)("strong",{parentName:"p"},"merge")," all the nodes lying in between them into a single node whose value is the ",(0,i.kt)("strong",{parentName:"p"},"sum")," of all the merged nodes. The modified list should not contain any ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"'s."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the")," ",(0,i.kt)("inlineCode",{parentName:"p"},"head")," ",(0,i.kt)("em",{parentName:"p"},"of the modified linked list"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/02/02/ex1-1.png",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: head = [0,3,1,0,4,5,2,0]\nOutput: [4,11]\nExplanation: \nThe above figure represents the given linked list. The modified list contains\n- The sum of the nodes marked in green: 3 + 1 = 4.\n- The sum of the nodes marked in red: 4 + 5 + 2 = 11.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/02/02/ex2-1.png",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: head = [0,1,0,3,0,2,2,0]\nOutput: [1,3,4]\nExplanation: \nThe above figure represents the given linked list. The modified list contains\n- The sum of the nodes marked in green: 1 = 1.\n- The sum of the nodes marked in red: 3 = 3.\n- The sum of the nodes marked in yellow: 2 + 2 = 4.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The number of nodes in the list is in the range ",(0,i.kt)("inlineCode",{parentName:"li"},"[3, 2 * 10^5]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= Node.val <= 1000")),(0,i.kt)("li",{parentName:"ul"},"There are ",(0,i.kt)("strong",{parentName:"li"},"no")," two consecutive nodes with ",(0,i.kt)("inlineCode",{parentName:"li"},"Node.val == 0"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"beginning")," and ",(0,i.kt)("strong",{parentName:"li"},"end")," of the linked list have ",(0,i.kt)("inlineCode",{parentName:"li"},"Node.val == 0"),".")),(0,i.kt)("h2",{id:"approach-1-tbc"},"Approach 1: TBC"))}c.isMDXComponent=!0}}]);