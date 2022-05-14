"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[7064],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2393:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={description:"Author: @wingkwong | https://leetcode.com/problems/add-two-integers/"},p="2235 - Add Two Integers (Easy)",l={unversionedId:"2200-2299/add-two-integers-easy",id:"2200-2299/add-two-integers-easy",title:"2235 - Add Two Integers (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/add-two-integers/",source:"@site/solutions/2200-2299/2235-add-two-integers-easy.md",sourceDirName:"2200-2299",slug:"/2200-2299/add-two-integers-easy",permalink:"/leetcode-the-hard-way/solutions/2200-2299/add-two-integers-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2200-2299/2235-add-two-integers-easy.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:2235,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/add-two-integers/"},sidebar:"tutorialSidebar",previous:{title:"2233 - Maximum Product After K Increments (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/maximum-product-after-k-increments-medium"},next:{title:"2237 - Count Positions on Street With Required Brightness (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/count-positions-on-street-with-required-brightness-medium"}},s={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: A + B",id:"approach-1-a--b",level:2},{value:"Approach 2: Half Adder",id:"approach-2-half-adder",level:2},{value:"Approach 3: Log &amp; Exp",id:"approach-3-log--exp",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2235---add-two-integers-easy"},"2235 - Add Two Integers (Easy)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given two integers ",(0,o.kt)("inlineCode",{parentName:"p"},"num1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"num2"),", return ",(0,o.kt)("em",{parentName:"p"},"the ",(0,o.kt)("strong",{parentName:"em"},"sum")," of the two integers"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: num1 = 12, num2 = 5\nOutput: 17\nExplanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: num1 = -10, num2 = 4\nOutput: -6\nExplanation: num1 + num2 = -6, so -6 is returned.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-100 <= num1, num2 <= 100"))),(0,o.kt)("h2",{id:"approach-1-a--b"},"Approach 1: A + B"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int sum(int num1, int num2) {\n        return num1 + num2;\n    }\n};\n")),(0,o.kt)("h2",{id:"approach-2-half-adder"},"Approach 2: Half Adder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"class Solution {\npublic:\n    int sum(int num1, int num2) {\n        return num2 == 0 ? num1 : sum(num1 ^ num2, (unsigned) (num1 & num2) << 1);\n    }\n};\n")),(0,o.kt)("h2",{id:"approach-3-log--exp"},"Approach 3: Log & Exp"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int sum(int num1, int num2) {}\n        return log(exp(num1) * exp(num2)));\n    }\n};\n")))}d.isMDXComponent=!0}}]);