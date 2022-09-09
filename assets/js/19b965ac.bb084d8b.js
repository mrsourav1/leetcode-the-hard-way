"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5635],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return l}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=m(n),l=r,d=h["".concat(c,".").concat(l)]||h[l]||u[l]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function l(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},59790:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return h}});var a,r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],c={description:"Author: @wingkwong, @iraycd | https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/",tags:["Array","Stack","Greedy","Sorting","Monotonic Stack"]},m="1996 - The Number of Weak Characters in the Game (Medium)",p={unversionedId:"1900-1999/the-number-of-weak-characters-in-the-game-medium",id:"1900-1999/the-number-of-weak-characters-in-the-game-medium",title:"1996 - The Number of Weak Characters in the Game (Medium)",description:"Author: @wingkwong, @iraycd | https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/",source:"@site/solutions/1900-1999/1996-the-number-of-weak-characters-in-the-game-medium.md",sourceDirName:"1900-1999",slug:"/1900-1999/the-number-of-weak-characters-in-the-game-medium",permalink:"/leetcode-the-hard-way/solutions/1900-1999/the-number-of-weak-characters-in-the-game-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1900-1999/1996-the-number-of-weak-characters-in-the-game-medium.md",tags:[{label:"Array",permalink:"/leetcode-the-hard-way/solutions/tags/array"},{label:"Stack",permalink:"/leetcode-the-hard-way/solutions/tags/stack"},{label:"Greedy",permalink:"/leetcode-the-hard-way/solutions/tags/greedy"},{label:"Sorting",permalink:"/leetcode-the-hard-way/solutions/tags/sorting"},{label:"Monotonic Stack",permalink:"/leetcode-the-hard-way/solutions/tags/monotonic-stack"}],version:"current",sidebarPosition:1996,frontMatter:{description:"Author: @wingkwong, @iraycd | https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/",tags:["Array","Stack","Greedy","Sorting","Monotonic Stack"]},sidebar:"tutorialSidebar",previous:{title:"1980 - Find Unique Binary String (Medium)",permalink:"/leetcode-the-hard-way/solutions/1900-1999/find-unique-binary-string-medium"},next:{title:"2000 - 2099",permalink:"/leetcode-the-hard-way/solutions/category/2000---2099"}},u={},h=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2},{value:"Approach 2: Sort with custom comparator",id:"approach-2-sort-with-custom-comparator",level:2}],l=(a="SolutionAuthor",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),d={toc:h};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1996---the-number-of-weak-characters-in-the-game-medium"},"1996 - The Number of Weak Characters in the Game (Medium)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are playing a game that contains multiple characters, and each of the characters has ",(0,i.kt)("strong",{parentName:"p"},"two")," main properties: ",(0,i.kt)("strong",{parentName:"p"},"attack")," and ",(0,i.kt)("strong",{parentName:"p"},"defense"),". You are given a 2D integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"properties")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"properties[i] = [attacki, defensei]")," represents the properties of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ith")," character in the game."),(0,i.kt)("p",null,"A character is said to be ",(0,i.kt)("strong",{parentName:"p"},"weak")," if any other character has ",(0,i.kt)("strong",{parentName:"p"},"both")," attack and defense levels ",(0,i.kt)("strong",{parentName:"p"},"strictly greater")," than this character's attack and defense levels. More formally, a character ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," is said to be ",(0,i.kt)("strong",{parentName:"p"},"weak")," if there exists another character ",(0,i.kt)("inlineCode",{parentName:"p"},"j")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"attackj > attacki")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"defensej > defensei"),"."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the number of ",(0,i.kt)("strong",{parentName:"em"},"weak")," characters"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: properties = [[5,5],[6,3],[3,6]]\nOutput: 0\nExplanation: No character has strictly greater attack and defense than the other.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: properties = [[2,2],[3,3]]\nOutput: 1\nExplanation: The first character is weak because the second character has a strictly greater attack and defense.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: properties = [[1,5],[10,4],[4,3]]\nOutput: 1\nExplanation: The third character is weak because the second character has a strictly greater attack and defense.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2 <= properties.length <= 105")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"properties[i].length == 2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= attacki, defensei <= 105"))),(0,i.kt)("h2",{id:"approach-1-hash-map"},"Approach 1: Hash Map"),(0,i.kt)(l,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    // the idea is to\n    // 1. rearrange the order of attack and defense\n    // 2. count weak characters (those defenses less than the current maximum defense)\n    // 3. update the maximum defense\n    int numberOfWeakCharacters(vector<vector<int>>& p) {\n        // the final answer to be returned\n        int weakCharacters = 0;\n        // record maximum defense. since 1 <= defense_i <= 10 ^ 5\n        // we can set the init value to x where x < 1\n        int maxDefense = 0;\n        // use a hash map to map the attack and defense with greater<int> as a key_compare\n        map<int, vector<int>, greater<int>> m;\n        for(auto x : p) m[x[0]].push_back(x[1]);\n        // for each attack\n        for(auto x : m) {\n            // we count the number of weak characters \n            // and add it to `weakCharacters`\n            weakCharacters += count_if(x.second.begin(), x.second.end(), [&](int curDefense){ return curDefense < maxDefense;});\n            // then update `maxDefense` which is the maximum value in current defenses\n            maxDefense = max(maxDefense, *max_element(x.second.begin(), x.second.end()));\n        }\n        return weakCharacters;\n    }\n};\n")),(0,i.kt)("h2",{id:"approach-2-sort-with-custom-comparator"},"Approach 2: Sort with custom comparator"),(0,i.kt)(l,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    // the idea is to\n    // 1. rearrange the order of attack and defense\n    // 2. count weak characters (those defenses less than the current maximum defense)\n    // 3. update the maximum defense\n    int numberOfWeakCharacters(vector<vector<int>>& p) {\n        // the final answer to be returned\n        int weakCharacters = 0;\n        // record maximum defense. since 1 <= defense_i <= 10 ^ 5\n        // we can set the init value to x where x < 1\n        int maxDefense = 0;\n        // sort properties with custom sort comparator\n        sort(p.begin(), p.end(), [](const vector<int>& x, const vector<int>& y) {\n            // if the attack is same, then sort defense in ascending order  \n            // otherwise, sort attack in in descending order \n           return x[0] == y[0] ? x[1] < y[1] : x[0] > y[0];\n        });\n        // by doing so, we don't need to compare starting from the back\n        for (auto& x : p) {\n            // x[1] is defense of properties[i]\n            // if it is less than current maxDefense, then it means it is a weak character\n            weakCharacters += x[1] < maxDefense;\n            // update maxDefense\n            maxDefense = max(maxDefense, x[1]);\n        }\n        return weakCharacters;\n    }\n};\n")),(0,i.kt)(l,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    # the idea is to\n    # 1. rearrange the order of attack and defense\n    # 2. count weak characters (those defenses less than the current maximum defense)\n    # 3. update the maximum defense\n    def numberOfWeakCharacters(self, p: List[List[int]]) -> int:\n        # the final answer to be returned\n        weakCharacters = 0\n        # record maximum defense. since 1 <= defense_i <= 10 ^ 5\n        # we can set the init value to x where x < 1\n        maxDefense = 0\n        # sort properties with custom sort comparator\n        # if the attack is same, then sort defense in descending order  \n        # otherwise, sort attack in in ascending order \n        p.sort(key = lambda x: (x[0], -x[1]), reverse = True)\n        # or we can do it like \n        # p.sort(key = lambda x: (-x[0], x[1]))\n        for _, defense in p:\n            # if it is less than current maxDefense, then it means it is a weak character\n            if defense < maxDefense: weakCharacters += 1\n            # update maxDefense\n            else: maxDefense = defense\n        return weakCharacters\n")),(0,i.kt)(l,{name:"@iraycd",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-golang"},"// the idea is to\n// 1. rearrange the order of attack and defense\n// 2. count weak characters (those defenses less than the current maximum defense)\n// 3. update the maximum defense\nfunc numberOfWeakCharacters(properties [][]int) int {\n    \n    // Weak starts at 0, this is the variable which is going to be returned\n    weekCharacterCount := 0\n    maxDefence := 0\n    \n    // Sorting the order of the desending order of the attack\n    sort.Sort(ByAttack(properties))\n    for _, elem := range properties {\n        // Appending the count if the current element is less than the max defense \n        // Else change the max defence\n        if(elem[1] < maxDefence){\n            weekCharacterCount++;\n        }else {\n            maxDefence = elem[1]\n        }\n    }\n    return weekCharacterCount\n}\n\n// Custom sorting Logic by attack\ntype ByAttack [][]int\nfunc (a ByAttack) Len() int           { return len(a) }\nfunc (a ByAttack) Less(i, j int) bool { \n    if(a[i][0] == a[j][0]){\n        return a[i][1] < a[j][1]\n    }\n    return a[i][0] > a[j][0] \n}\nfunc (a ByAttack) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }\n")))}f.isMDXComponent=!0}}]);