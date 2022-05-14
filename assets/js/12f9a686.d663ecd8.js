"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3603],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=i,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||a;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4873:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-profit-in-job-scheduling/"},p="1235 - Maximum Profit in Job Scheduling (Hard)",m={unversionedId:"1200-1299/maximum-profit-in-job-scheduling-hard",id:"1200-1299/maximum-profit-in-job-scheduling-hard",title:"1235 - Maximum Profit in Job Scheduling (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-profit-in-job-scheduling/",source:"@site/solutions/1200-1299/1235-maximum-profit-in-job-scheduling-hard.md",sourceDirName:"1200-1299",slug:"/1200-1299/maximum-profit-in-job-scheduling-hard",permalink:"/leetcode-the-hard-way/solutions/1200-1299/maximum-profit-in-job-scheduling-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/1200-1299/1235-maximum-profit-in-job-scheduling-hard.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652449861,formattedLastUpdatedAt:"5/13/2022",sidebarPosition:1235,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-profit-in-job-scheduling/"},sidebar:"tutorialSidebar",previous:{title:"1232 - Check If It Is a Straight Line (Easy)",permalink:"/leetcode-the-hard-way/solutions/1200-1299/check-if-it-is-a-straight-line-easy"},next:{title:"1259 - Handshakes That Don't Cross (Hard)",permalink:"/leetcode-the-hard-way/solutions/1200-1299/handshakes-that-dont-cross-hard"}},s={},u=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2},{value:"Similar Problems:",id:"similar-problems",level:3}],d={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1235---maximum-profit-in-job-scheduling-hard"},"1235 - Maximum Profit in Job Scheduling (Hard)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"We have ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," jobs, where every job is scheduled to be done from ",(0,a.kt)("inlineCode",{parentName:"p"},"startTime[i]")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"endTime[i]"),", obtaining a profit of ",(0,a.kt)("inlineCode",{parentName:"p"},"profit[i]"),"."),(0,a.kt)("p",null,"You're given the ",(0,a.kt)("inlineCode",{parentName:"p"},"startTime"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"endTime")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"profit")," arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range."),(0,a.kt)("p",null,"If you choose a job that ends at time ",(0,a.kt)("inlineCode",{parentName:"p"},"X")," you will be able to start another job that starts at time ",(0,a.kt)("inlineCode",{parentName:"p"},"X"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/10/10/sample1_1584.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]\nOutput: 120\nExplanation: The subset chosen is the first and fourth job. \nTime range [1-3]+[3-6] , we get profit of 120 = 50 + 70.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/10/10/sample22_1584.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]\nOutput: 150\nExplanation: The subset chosen is the first, fourth and fifth job. \nProfit obtained 150 = 20 + 70 + 60.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/10/10/sample3_1584.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]\nOutput: 6\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= startTime.length == endTime.length == profit.length <= 5 * 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= startTime[i] < endTime[i] <= 10^9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= profit[i] <= 10^4"))),(0,a.kt)("h2",{id:"approach-1-dynamic-programming"},"Approach 1: Dynamic Programming"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {\n        int n = startTime.size();\n        // rearrange the input\n        vector<array<int, 3>> events;\n        // put them together\n        for (int i = 0; i < n; i++) events.push_back({startTime[i], endTime[i], profit[i]});\n        // sort by startTime\n        sort(events.begin(), events.end());\n        // 1D dp\n        vector<int> dp(n, -1);\n        function<int(int,int)> dfs = [&](int idx, int end) {\n            // reached all events\n            if (idx == n) return 0;\n            // current start time < previous end time\n            // cannot take it -> move to the next one\n            if (events[idx][0] < end) return dfs(idx + 1, end);\n            // calculate before -> return immediately\n            if (dp[idx] != -1) return dp[idx];\n            // so we only have two choices left, we either\n            return dp[idx] = max(\n                // choice 1: take this job and move to the next one from this end time\n                events[idx][2] + dfs(idx + 1, events[idx][1]),\n                // choice 2: not take this job and move to the next one\n                dfs(idx + 1, end)\n            );\n        };\n        return dfs(0, 0);\n    }\n};\n")),(0,a.kt)("h3",{id:"similar-problems"},"Similar Problems:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../1700-1799/maximum-number-of-events-that-can-be-attended-ii-hard"},"1751 - Maximum Number of Events That Can Be Attended II (Hard)"))))}c.isMDXComponent=!0}}]);