"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2310],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},151:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/find-closest-number-to-zero/"},u="2239 - Find Closest Number to Zero (Easy)",l={unversionedId:"2200-2299/find-closest-number-to-zero-easy",id:"2200-2299/find-closest-number-to-zero-easy",title:"2239 - Find Closest Number to Zero (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/find-closest-number-to-zero/",source:"@site/solutions/2200-2299/2239-find-closest-number-to-zero-easy.md",sourceDirName:"2200-2299",slug:"/2200-2299/find-closest-number-to-zero-easy",permalink:"/leetcode-the-hard-way/solutions/2200-2299/find-closest-number-to-zero-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2200-2299/2239-find-closest-number-to-zero-easy.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:2239,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-closest-number-to-zero/"},sidebar:"tutorialSidebar",previous:{title:"2237 - Count Positions on Street With Required Brightness (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/count-positions-on-street-with-required-brightness-medium"},next:{title:"2240 - Number of Ways to Buy Pens and Pencils (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/number-of-ways-to-buy-pens-and-pencils-medium"}},p={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: ",id:"approach-1-",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2239---find-closest-number-to-zero-easy"},"2239 - Find Closest Number to Zero (Easy)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given an integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," of size ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),", return ",(0,a.kt)("em",{parentName:"p"},"the number with the value ",(0,a.kt)("strong",{parentName:"em"},"closest")," to")," ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," ",(0,a.kt)("em",{parentName:"p"},"in")," ",(0,a.kt)("inlineCode",{parentName:"p"},"nums"),". If there are multiple answers, return ",(0,a.kt)("em",{parentName:"p"},"the number with the ",(0,a.kt)("strong",{parentName:"em"},"largest")," value"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [-4,-2,1,4,8]\nOutput: 1\nExplanation:\nThe distance from -4 to 0 is |-4| = 4.\nThe distance from -2 to 0 is |-2| = 2.\nThe distance from 1 to 0 is |1| = 1.\nThe distance from 4 to 0 is |4| = 4.\nThe distance from 8 to 0 is |8| = 8.\nThus, the closest number to 0 in the array is 1.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [2,-1,1]\nOutput: 1\nExplanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n <= 1000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-105 <= nums[i] <= 10^5"))),(0,a.kt)("h2",{id:"approach-1-"},"Approach 1:"," "),(0,a.kt)("p",null,"If we sort the input and check if the absolute value is minimal, the answer would be found in the last round. However, it is not necessary to sort it here. We just need to check if the number is greater that answer or not."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int findClosestNumber(vector<int>& nums) {\n        int ans = INT_MAX, mi = INT_MAX;\n        for (auto x : nums) {\n            int d = abs(x);\n            if (d < mi || (d == mi && x > ans)) {\n                mi = d;\n                ans = x;\n            }\n        }\n        return ans;\n    }\n};\n")))}d.isMDXComponent=!0}}]);