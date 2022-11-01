"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[42837],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(k,o(o({ref:n},s),{},{components:t})):r.createElement(k,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13343:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var r,a=t(87462),i=t(63366),o=(t(67294),t(3905)),l=["components"],p={description:"Author: @wingkowng | https://leetcode.com/problems/peak-index-in-a-mountain-array/"},u="0852 - Peak Index in a Mountain Array (Easy)",s={unversionedId:"0800-0899/peak-index-in-a-mountain-array-easy",id:"0800-0899/peak-index-in-a-mountain-array-easy",title:"0852 - Peak Index in a Mountain Array (Easy)",description:"Author: @wingkowng | https://leetcode.com/problems/peak-index-in-a-mountain-array/",source:"@site/solutions/0800-0899/0852-peak-index-in-a-mountain-array-easy.md",sourceDirName:"0800-0899",slug:"/0800-0899/peak-index-in-a-mountain-array-easy",permalink:"/leetcode-the-hard-way/solutions/0800-0899/peak-index-in-a-mountain-array-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0800-0899/0852-peak-index-in-a-mountain-array-easy.md",tags:[],version:"current",sidebarPosition:852,frontMatter:{description:"Author: @wingkowng | https://leetcode.com/problems/peak-index-in-a-mountain-array/"},sidebar:"tutorialSidebar",previous:{title:"0847 - Shortest Path Visiting All Nodes (Hard)",permalink:"/leetcode-the-hard-way/solutions/0800-0899/shortest-path-visiting-all-nodes-hard"},next:{title:"0867 - Transpose Matrix (Easy)",permalink:"/leetcode-the-hard-way/solutions/0800-0899/transpose-matrix-easy"}},c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}],d=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),k={toc:m};function y(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0852---peak-index-in-a-mountain-array-easy"},"0852 - Peak Index in a Mountain Array (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/peak-index-in-a-mountain-array/"},"https://leetcode.com/problems/peak-index-in-a-mountain-array/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Let's call an array ",(0,o.kt)("inlineCode",{parentName:"p"},"arr")," a ",(0,o.kt)("strong",{parentName:"p"},"mountain")," if the following properties hold:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arr.length >= 3")),(0,o.kt)("li",{parentName:"ul"},"There exists some ",(0,o.kt)("inlineCode",{parentName:"li"},"i")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"0 < i < arr.length - 1")," such that:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arr[0] < arr[1] < ... arr[i-1] < arr[i]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arr[i] > arr[i+1] > ... > arr[arr.length - 1]"))))),(0,o.kt)("p",null,"Given an integer array ",(0,o.kt)("inlineCode",{parentName:"p"},"arr")," that is ",(0,o.kt)("strong",{parentName:"p"},"guaranteed")," to be a mountain, return any ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," such that ",(0,o.kt)("inlineCode",{parentName:"p"},"arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1]"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: arr = [0,1,0]\nOutput: 1\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: arr = [0,2,1,0]\nOutput: 1\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: arr = [0,10,5,2]\nOutput: 1\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"3 <= arr.length <= 10^4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= arr[i] <= 10^6")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arr")," is ",(0,o.kt)("strong",{parentName:"li"},"guaranteed")," to be a mountain array.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Follow up:")," Finding the ",(0,o.kt)("inlineCode",{parentName:"p"},"O(n)")," is straightforward, could you find an ",(0,o.kt)("inlineCode",{parentName:"p"},"O(log(n))")," solution?\\"),(0,o.kt)("h2",{id:"approach-1-binary-search"},"Approach 1: Binary Search"),(0,o.kt)("p",null,"Prerequisite: ",(0,o.kt)("a",{parentName:"p",href:"../../tutorials/basic-topics/binary-search"},"Binary Search"),"."),(0,o.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int peakIndexInMountainArray(vector<int>& arr) {\n        // arr[i] < arr[i + 1]\n        // [T, T, T, .., T, F, F, F, .., F]\n        int l = 0, r = arr.size() - 1;\n        while (l < r) {\n            int m = l + (r - l) / 2;\n            if (arr[m] < arr[m + 1]) l = m + 1;\n            else r = m;\n        }\n        return l;\n    }\n};\n")))}y.isMDXComponent=!0}}]);