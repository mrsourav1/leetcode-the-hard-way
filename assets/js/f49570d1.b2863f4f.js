"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4280],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),g=a,h=m["".concat(u,".").concat(g)]||m[g]||c[g]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8227:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={description:"Author: @TBC | https://leetcode.com/problems/longest-substring-without-repeating-characters/"},u="0003 - Longest Substring Without Repeating Characters (Medium)",l={unversionedId:"0000-0099/longest-substring-without-repeating-characters-medium",id:"0000-0099/longest-substring-without-repeating-characters-medium",title:"0003 - Longest Substring Without Repeating Characters (Medium)",description:"Author: @TBC | https://leetcode.com/problems/longest-substring-without-repeating-characters/",source:"@site/solutions/0000-0099/0003-longest-substring-without-repeating-characters-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/longest-substring-without-repeating-characters-medium",permalink:"/leetcode-the-hard-way/solutions/0000-0099/longest-substring-without-repeating-characters-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0000-0099/0003-longest-substring-without-repeating-characters-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652365641,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:3,frontMatter:{description:"Author: @TBC | https://leetcode.com/problems/longest-substring-without-repeating-characters/"},sidebar:"tutorialSidebar",previous:{title:"0001 - Two Sum (Easy)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/two-sum"},next:{title:"0005 - Longest Palindromic Substring (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/longest-palindromic-substring-medium"}},p={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}],m={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0003---longest-substring-without-repeating-characters-medium"},"0003 - Longest Substring Without Repeating Characters (Medium)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given a string ",(0,o.kt)("inlineCode",{parentName:"p"},"s"),", find the length of the ",(0,o.kt)("strong",{parentName:"p"},"longest substring")," without repeating characters."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "abcabcbb"\nOutput: 3\nExplanation: The answer is "abc", with the length of 3.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "bbbbb"\nOutput: 1\nExplanation: The answer is "b", with the length of 1.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "pwwkew"\nOutput: 3\nExplanation: The answer is "wke", with the length of 3.\nNotice that the answer must be a substring, "pwke" is a subsequence and not a substring.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= s.length <= 5 * 10^4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s")," consists of English letters, digits, symbols and spaces.")),(0,o.kt)("h2",{id:"approach-1-tbc"},"Approach 1: TBC"))}g.isMDXComponent=!0}}]);