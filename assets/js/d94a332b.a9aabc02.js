"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2870],{3905:function(a,e,t){t.d(e,{Zo:function(){return l},kt:function(){return k}});var n=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var i=n.createContext({}),o=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},l=function(a){var e=o(a.components);return n.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,m=a.originalType,i=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),N=o(t),k=r,h=N["".concat(i,".").concat(k)]||N[k]||c[k]||m;return t?n.createElement(h,s(s({ref:e},l),{},{components:t})):n.createElement(h,s({ref:e},l))}));function k(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var m=t.length,s=new Array(m);s[0]=N;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p.mdxType="string"==typeof a?a:r,s[1]=p;for(var o=2;o<m;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},6384:function(a,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var n=t(7462),r=t(3366),m=(t(7294),t(3905)),s=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/recover-the-original-array/"},i="2122 - Recover the Original Array (Hard)",o={unversionedId:"2100-2199/recover-the-original-array-hard",id:"2100-2199/recover-the-original-array-hard",title:"2122 - Recover the Original Array (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/recover-the-original-array/",source:"@site/solutions/2100-2199/2122-recover-the-original-array-hard.md",sourceDirName:"2100-2199",slug:"/2100-2199/recover-the-original-array-hard",permalink:"/leetcode-the-hard-way/solutions/2100-2199/recover-the-original-array-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2122-recover-the-original-array-hard.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:2122,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/recover-the-original-array/"},sidebar:"tutorialSidebar",previous:{title:"2121 - Intervals Between Identical Elements (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/intervals-between-identical-elements-medium"},next:{title:"2127 - Maximum Employees to Be Invited to a Meeting (Hard)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/maximum-employees-to-be-invited-to-a-meeting-hard"}},l={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Try all possible k",id:"approach-1-try-all-possible-k",level:2}],N={toc:c};function k(a){var e=a.components,t=(0,r.Z)(a,s);return(0,m.kt)("wrapper",(0,n.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"2122---recover-the-original-array-hard"},"2122 - Recover the Original Array (Hard)"),(0,m.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,m.kt)("p",null,"Alice had a ",(0,m.kt)("strong",{parentName:"p"},"0-indexed")," array ",(0,m.kt)("inlineCode",{parentName:"p"},"arr")," consisting of ",(0,m.kt)("inlineCode",{parentName:"p"},"n")," ",(0,m.kt)("strong",{parentName:"p"},"positive")," integers. She chose an arbitrary ",(0,m.kt)("strong",{parentName:"p"},"positive integer")," ",(0,m.kt)("inlineCode",{parentName:"p"},"k")," and created two new ",(0,m.kt)("strong",{parentName:"p"},"0-indexed")," integer arrays ",(0,m.kt)("inlineCode",{parentName:"p"},"lower")," and ",(0,m.kt)("inlineCode",{parentName:"p"},"higher")," in the following manner:"),(0,m.kt)("ol",null,(0,m.kt)("li",{parentName:"ol"},(0,m.kt)("inlineCode",{parentName:"li"},"lower[i] = arr[i] - k"),", for every index ",(0,m.kt)("inlineCode",{parentName:"li"},"i")," where ",(0,m.kt)("inlineCode",{parentName:"li"},"0 <= i < n")),(0,m.kt)("li",{parentName:"ol"},(0,m.kt)("inlineCode",{parentName:"li"},"higher[i] = arr[i] + k"),", for every index ",(0,m.kt)("inlineCode",{parentName:"li"},"i")," where ",(0,m.kt)("inlineCode",{parentName:"li"},"0 <= i < n"))),(0,m.kt)("p",null,"Unfortunately, Alice lost all three arrays. However, she remembers the integers that were present in the arrays ",(0,m.kt)("inlineCode",{parentName:"p"},"lower")," and ",(0,m.kt)("inlineCode",{parentName:"p"},"higher"),", but not the array each integer belonged to. Help Alice and recover the original array."),(0,m.kt)("p",null,"Given an array ",(0,m.kt)("inlineCode",{parentName:"p"},"nums")," consisting of ",(0,m.kt)("inlineCode",{parentName:"p"},"2n")," integers, where ",(0,m.kt)("strong",{parentName:"p"},"exactly")," ",(0,m.kt)("inlineCode",{parentName:"p"},"n")," of the integers were present in ",(0,m.kt)("inlineCode",{parentName:"p"},"lower")," and the remaining in ",(0,m.kt)("inlineCode",{parentName:"p"},"higher"),", return ",(0,m.kt)("em",{parentName:"p"},"the ",(0,m.kt)("strong",{parentName:"em"},"original")," array")," ",(0,m.kt)("inlineCode",{parentName:"p"},"arr"),". In case the answer is not unique, return ",(0,m.kt)("em",{parentName:"p"},(0,m.kt)("strong",{parentName:"em"},"any")," valid array"),"."),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Note:")," The test cases are generated such that there exists ",(0,m.kt)("strong",{parentName:"p"},"at least one")," valid array ",(0,m.kt)("inlineCode",{parentName:"p"},"arr"),"."),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 1:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: nums = [2,10,6,4,8,12]\nOutput: [3,7,11]\nExplanation:\nIf arr = [3,7,11] and k = 1, we get lower = [2,6,10] and higher = [4,8,12].\nCombining lower and higher gives us [2,6,10,4,8,12], which is a permutation of nums.\nAnother valid possibility is that arr = [5,7,9] and k = 3. In that case, lower = [2,4,6] and higher = [8,10,12]. \n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 2:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: nums = [1,1,3,3]\nOutput: [2,2]\nExplanation:\nIf arr = [2,2] and k = 1, we get lower = [1,1] and higher = [3,3].\nCombining lower and higher gives us [1,1,3,3], which is equal to nums.\nNote that arr cannot be [1,3] because in that case, the only possible way to obtain [1,1,3,3] is with k = 0.\nThis is invalid since k must be positive.\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 3:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: nums = [5,435]\nOutput: [220]\nExplanation:\nThe only possible combination is arr = [220] and k = 215. Using them, we get lower = [5] and higher = [435].\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Constraints:")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"2 * n == nums.length")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= n <= 1000")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 10^9")),(0,m.kt)("li",{parentName:"ul"},"The test cases are generated such that there exists ",(0,m.kt)("strong",{parentName:"li"},"at least one")," valid array ",(0,m.kt)("inlineCode",{parentName:"li"},"arr"),".")),(0,m.kt)("h2",{id:"approach-1-try-all-possible-k"},"Approach 1: Try all possible k"),(0,m.kt)("p",null,"In short, we just need to try all possible ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"k")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"))))),". If we sort ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"s")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"nums")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"))))),", the smallest element must be in the lower array. It is easy to see ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"k")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"))))),"k can be ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mn",{parentName:"mrow"},"0"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,m.kt)("mn",{parentName:"mrow"},"2")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(nums[i]\u2212nums[0])/2")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"])"),(0,m.kt)("span",{parentName:"span",className:"mord"},"/2"))))),". We try each ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"k")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))," to see if we can match all the pairs. If the size of lower array is same as that of higher array, then the answer would be ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"j"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"j"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"j"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,m.kt)("mn",{parentName:"mrow"},"2")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"ans[j]=(l[j]+r[j])/2")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"])"),(0,m.kt)("span",{parentName:"span",className:"mord"},"/2"))))),"."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> recoverArray(vector<int>& nums) {\n        int n = nums.size();\n        sort(nums.begin(), nums.end());\n        for (int i = 0; i < nums.size(); i++) {\n            unordered_map<int, int> m;\n            int d = nums[i] - nums.front();\n            if (d == 0 || d & 1) {\n                continue;\n            }\n            vector<int> l, r;\n            for (int j = 0; j < n; j++) {\n                if (m.count(nums[j] - d)) {\n                    r.push_back(nums[j]);\n                    if (--m[nums[j] - d] == 0) {\n                        m.erase(nums[j] - d);\n                    }\n                } else {\n                    l.push_back(nums[j]);\n                    m[nums[j]]++;\n                }\n            }\n            if (l.size() == r.size()) {\n                vector<int> ans;\n                for (int j = 0; j < n / 2; j++) {\n                    ans.push_back((l[j] + r[j]) / 2);\n                }\n                return ans;\n            }\n        }\n        return {};\n    }\n};\n")))}k.isMDXComponent=!0}}]);