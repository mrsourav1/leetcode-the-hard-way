"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[7365],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8902:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/swap-nodes-in-pairs/"},l="0024 - Swap Nodes in Pairs (Medium)",p={unversionedId:"0000-0099/swap-nodes-in-pairs-medium",id:"0000-0099/swap-nodes-in-pairs-medium",title:"0024 - Swap Nodes in Pairs (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/swap-nodes-in-pairs/",source:"@site/solutions/0000-0099/0024-swap-nodes-in-pairs-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/swap-nodes-in-pairs-medium",permalink:"/leetcode-the-hard-way/solutions/0000-0099/swap-nodes-in-pairs-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0000-0099/0024-swap-nodes-in-pairs-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652365641,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:24,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/swap-nodes-in-pairs/"},sidebar:"tutorialSidebar",previous:{title:"0023 - Merge k Sorted Lists (Hard)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/merge-k-sorted-lists-hard"},next:{title:"0028 - Implement strStr() (Easy)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/implement-strstr-easy"}},d={},u=[{value:"Problem Statement:",id:"problem-statement",level:2},{value:"Approach 1: Recursive",id:"approach-1-recursive",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0024---swap-nodes-in-pairs-medium"},"0024 - Swap Nodes in Pairs (Medium)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement:"),(0,a.kt)("p",null,"Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: head = [1,2,3,4]\nOutput: [2,1,4,3]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: head = []\nOutput: []\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: head = [1]\nOutput: [1]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of nodes in the list is in the range ",(0,a.kt)("inlineCode",{parentName:"li"},"[0, 100]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= Node.val <= 10"))),(0,a.kt)("h2",{id:"approach-1-recursive"},"Approach 1: Recursive"),(0,a.kt)("p",null,"For each round, we just need to take care of two nodes to be swapped. The remaining nodes are passed to the next call. First, we check if we can take two nodes. If not, return head. Otherwise, take the first two nodes and process the following logic."),(0,a.kt)("p",null,"Let's think of the second node first. If two nodes are swapped, the second node will link to the first node after swapping. Therefore, we can simply link the second node to the first node. After swapping, the first one will link to the all nodes linked by the original second node. We just need to call swapPairs again to handle it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    ListNode* swapPairs(ListNode* head) {\n        // check if it is possible to take two nodes\n        if (head == nullptr || head->next == nullptr) return head;\n        // take the first node\n        ListNode* f = head;\n        // take the second node\n        ListNode* s = head->next;\n        // the first node links to all nodes originally linked by the second node\n        f->next = swapPairs(s->next);\n        // the second node links to the first node\n        s->next = f; \n        // return head\n        return s;\n    }\n};\n")))}m.isMDXComponent=!0}}]);