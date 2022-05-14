"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[290],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,d=m["".concat(u,".").concat(h)]||m[h]||c[h]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6559:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/guess-number-higher-or-lower/"},u="0374 - Guess Number Higher or Lower (Easy)",s={unversionedId:"0300-0399/guess-number-higher-or-lower-easy",id:"0300-0399/guess-number-higher-or-lower-easy",title:"0374 - Guess Number Higher or Lower (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/guess-number-higher-or-lower/",source:"@site/solutions/0300-0399/0374-guess-number-higher-or-lower-easy.md",sourceDirName:"0300-0399",slug:"/0300-0399/guess-number-higher-or-lower-easy",permalink:"/leetcode-the-hard-way/solutions/0300-0399/guess-number-higher-or-lower-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0300-0399/0374-guess-number-higher-or-lower-easy.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652449861,formattedLastUpdatedAt:"5/13/2022",sidebarPosition:374,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/guess-number-higher-or-lower/"},sidebar:"tutorialSidebar",previous:{title:"0367 - Valid Perfect Square (Easy)",permalink:"/leetcode-the-hard-way/solutions/0300-0399/valid-perfect-square-easy"},next:{title:"0389 - Find the Difference (Easy)",permalink:"/leetcode-the-hard-way/solutions/0300-0399/find-the-difference-easy"}},p={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}],m={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0374---guess-number-higher-or-lower-easy"},"0374 - Guess Number Higher or Lower (Easy)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"We are playing the Guess Game. The game is as follows:"),(0,i.kt)("p",null,"I pick a number from ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),". You have to guess which number I picked."),(0,i.kt)("p",null,"Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess."),(0,i.kt)("p",null,"You call a pre-defined API ",(0,i.kt)("inlineCode",{parentName:"p"},"int guess(int num)"),", which returns three possible results:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-1"),": Your guess is higher than the number I picked (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"num > pick"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1"),": Your guess is lower than the number I picked (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"num < pick"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0"),": your guess is equal to the number I picked (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"num == pick"),").")),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the number that I picked"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: n = 10, pick = 6\nOutput: 6\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: n = 1, pick = 1\nOutput: 1\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: n = 2, pick = 1\nOutput: 1\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= n <= 2^31 - 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= pick <= n"))),(0,i.kt)("h2",{id:"approach-1-binary-search"},"Approach 1: Binary Search"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"../../tutorials/basic-topics/binary-search"},"Binary Search")," for basic understanding."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"/** \n * Forward declaration of guess API.\n * @param  num   your guess\n * @return   -1 if num is higher than the picked number\n *           1 if num is lower than the picked number\n *               otherwise return 0\n * int guess(int num);\n */\n\nclass Solution {\npublic:\n    int guessNumber(int n) {\n        int l = 1, r = n;\n        while (l < r) {\n            // middle point\n            int m = l + (r - l) / 2;\n            // check the result\n            int x = guess(m);\n            // found the answer\n            if (x == 0) return m;\n            // exclude m\n            else if (x == 1) l = m + 1;\n            // include m\n            else r = m;\n        }\n        return l;\n    }\n};\n")))}h.isMDXComponent=!0}}]);