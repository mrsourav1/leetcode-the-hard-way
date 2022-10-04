"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[39051],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),c=o(t),h=r,k=c["".concat(p,".").concat(h)]||c[h]||u[h]||s;return t?a.createElement(k,i(i({ref:n},l),{},{components:t})):a.createElement(k,i({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=c;var m={};for(var p in n)hasOwnProperty.call(n,p)&&(m[p]=n[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var o=2;o<s;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},38625:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return u}});var a=t(87462),r=t(63366),s=(t(67294),t(3905)),i=["components"],m={description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/missing-number/",tags:["Array","Hash Table","Math","Bit Manupulation","Sorting"]},p="0268 - Missing Number (Easy)",o={unversionedId:"0200-0299/missing-number-easy",id:"0200-0299/missing-number-easy",title:"0268 - Missing Number (Easy)",description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/missing-number/",source:"@site/solutions/0200-0299/0268-missing-number-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/missing-number-easy",permalink:"/leetcode-the-hard-way/solutions/0200-0299/missing-number-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0268-missing-number-easy.md",tags:[{label:"Array",permalink:"/leetcode-the-hard-way/solutions/tags/array"},{label:"Hash Table",permalink:"/leetcode-the-hard-way/solutions/tags/hash-table"},{label:"Math",permalink:"/leetcode-the-hard-way/solutions/tags/math"},{label:"Bit Manupulation",permalink:"/leetcode-the-hard-way/solutions/tags/bit-manupulation"},{label:"Sorting",permalink:"/leetcode-the-hard-way/solutions/tags/sorting"}],version:"current",sidebarPosition:268,frontMatter:{description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/missing-number/",tags:["Array","Hash Table","Math","Bit Manupulation","Sorting"]},sidebar:"tutorialSidebar",previous:{title:"0261 - Graph Valid Tree (Medium)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/graph-valid-tree-medium"},next:{title:"0278 - First Bad Version (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/first-bad-version-easy"}},l={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting",id:"approach-1-sorting",level:2},{value:"Approach 2: Bit Manupulation",id:"approach-2-bit-manupulation",level:2},{value:"Approach 3: Math",id:"approach-3-math",level:2}],c=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",n)}},h=c("Tabs"),k=c("TabItem"),d=c("SolutionAuthor"),g={toc:u};function b(e){var n=e.components,t=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0268---missing-number-easy"},"0268 - Missing Number (Easy)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/missing-number/"},"https://leetcode.com/problems/missing-number/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Given an array ",(0,s.kt)("inlineCode",{parentName:"p"},"nums")," containing ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," distinct numbers in the range ",(0,s.kt)("inlineCode",{parentName:"p"},"[0, n]"),", return ",(0,s.kt)("em",{parentName:"p"},"the only number in the range that is missing from the array.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: nums = [3,0,1]\nOutput: 2\nExplanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: nums = [0,1]\nOutput: 2\nExplanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: nums = [9,6,4,2,3,5,7,0,1]\nOutput: 8\nExplanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"n == nums.length")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"0 <= nums[i] <= n")),(0,s.kt)("li",{parentName:"ul"},"All the numbers of ",(0,s.kt)("inlineCode",{parentName:"li"},"nums")," are ",(0,s.kt)("strong",{parentName:"li"},"unique"),".")),(0,s.kt)("h2",{id:"approach-1-sorting"},"Approach 1: Sorting"),(0,s.kt)(h,{mdxType:"Tabs"},(0,s.kt)(k,{value:"c++",label:"C++",mdxType:"TabItem"},(0,s.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        int n = nums.size();\n        sort(nums.begin(), nums.end());\n        // check the first element\n        if (nums.front() != 0) return 0;\n        // check [1, n)\n        for (int i = 1; i < n; i++) {\n            // after sorting, the difference is expected to be 1\n            // e.g. 1 - 2 - 3 - 4\n            // if not, then it means the current index is the missing number\n            // e.g. 1 - 2 - 4 (the diff is 2 here)\n            if (nums[i] - nums[i - 1] != 1) {\n                return i;\n            }\n        }\n        // check the last element\n        return n;\n    }\n};\n"))),(0,s.kt)(k,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(d,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int missingNumber(int[] nums) {\n        int n = nums.length;\n        // Sort the numbers\n        // After sorting, if any number is not the same as the index then that's the missing number\n        Arrays.sort(nums);\n        // Search for first missing number\n        if (nums[0] != 0) return 0;\n        for (int i = 0; i < n; i++) {\n            if (nums[i] != i) {\n                return i;\n            }\n        }\n        return n;\n    }\n}\n")))),(0,s.kt)("h2",{id:"approach-2-bit-manupulation"},"Approach 2: Bit Manupulation"),(0,s.kt)(h,{mdxType:"Tabs"},(0,s.kt)(k,{value:"c++",label:"C++",mdxType:"TabItem"},(0,s.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        // we can utilise the properties of XOR:\n        // a ^ a = 0\n        // a ^ 0 = a\n        // a ^ b ^ c = a ^ c ^ b\n        int n = (int) nums.size();\n        int ans = n;\n        // we can see that the elements in nums would cancel out with their indices\n        // except the one which is missing\n        for(int i = 0; i < n; i++) {\n            ans ^= (i ^ nums[i]);\n        }\n        return ans;\n    }\n};\n"))),(0,s.kt)(k,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(d,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int missingNumber(int[] nums) {\n        int n = nums.length;\n        int ans = n;\n        // we can utilise the properties of XOR:\n        // a ^ a = 0\n        // a ^ 0 = a\n        // a ^ b ^ c = a ^ c ^ b\n        for (int i = 0; i < n; i++) {\n            ans ^= (nums[i] ^ i);\n        }\n        return ans;\n    }\n}\n")))),(0,s.kt)("h2",{id:"approach-3-math"},"Approach 3: Math"),(0,s.kt)("p",null,"To calculate the sum of first n element, we can use Gauss' Formula - ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n * (n + 1) / 2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4653em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mord"},"/2"))))),". The missing number would be the expected sum minus the sum of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"s")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"nums")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"))))),"."),(0,s.kt)(h,{mdxType:"Tabs"},(0,s.kt)(k,{value:"c++",label:"C++",mdxType:"TabItem"},(0,s.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        int n = (int) nums.size();\n        int sum = 0;\n        for(int x : nums) sum += x;\n        return (n * (n + 1) / 2) - sum; \n    }\n};\n"))),(0,s.kt)(k,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(d,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int missingNumber(int[] nums) {\n        int n = nums.length;\n        int sum = 0;\n        for (int x : nums) sum += x;\n        return (n * (n + 1) / 2) - sum;\n    }\n}\n")))))}b.isMDXComponent=!0}}]);