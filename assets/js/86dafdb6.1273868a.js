"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[187],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5761:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/min-cost-to-connect-all-points/"},s="1584 - Min Cost to Connect All Points (Medium)",p={unversionedId:"1500-1599/min-cost-to-connect-all-points-medium",id:"1500-1599/min-cost-to-connect-all-points-medium",title:"1584 - Min Cost to Connect All Points (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/min-cost-to-connect-all-points/",source:"@site/solutions/1500-1599/1584-min-cost-to-connect-all-points-medium.md",sourceDirName:"1500-1599",slug:"/1500-1599/min-cost-to-connect-all-points-medium",permalink:"/leetcode-the-hard-way/solutions/1500-1599/min-cost-to-connect-all-points-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/1500-1599/1584-min-cost-to-connect-all-points-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:1584,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/min-cost-to-connect-all-points/"},sidebar:"tutorialSidebar",previous:{title:"1575 - Count All Possible Routes (Hard)",permalink:"/leetcode-the-hard-way/solutions/1500-1599/count-all-possible-routes-hard"},next:{title:"1600 - 1699",permalink:"/leetcode-the-hard-way/solutions/1600-1699/"}},c={},u=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Kruskal&#39;s Algorithm",id:"approach-1-kruskals-algorithm",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1584---min-cost-to-connect-all-points-medium"},"1584 - Min Cost to Connect All Points (Medium)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given an array ",(0,i.kt)("inlineCode",{parentName:"p"},"points")," representing integer coordinates of some points on a 2D-plane, where ",(0,i.kt)("inlineCode",{parentName:"p"},"points[i] = [xi, yi]"),"."),(0,i.kt)("p",null,"The cost of connecting two points ",(0,i.kt)("inlineCode",{parentName:"p"},"[xi, yi]")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"[xj, yj]")," is the ",(0,i.kt)("strong",{parentName:"p"},"manhattan distance")," between them: ",(0,i.kt)("inlineCode",{parentName:"p"},"|xi - xj| + |yi - yj|"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"|val|")," denotes the absolute value of ",(0,i.kt)("inlineCode",{parentName:"p"},"val"),"."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the minimum cost to make all points connected.")," All points are connected if there is ",(0,i.kt)("strong",{parentName:"p"},"exactly one")," simple path between any two points."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/08/26/d.png",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]\nOutput: 20\nExplanation: \n\nWe can connect the points as shown above to get the minimum cost of 20.\nNotice that there is a unique path between every pair of points.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: points = [[3,12],[-2,5],[-4,1]]\nOutput: 18\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= points.length <= 1000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-106 <= xi, yi <= 106")),(0,i.kt)("li",{parentName:"ul"},"All pairs ",(0,i.kt)("inlineCode",{parentName:"li"},"(xi, yi)")," are distinct.")),(0,i.kt)("h2",{id:"approach-1-kruskals-algorithm"},"Approach 1: Kruskal's Algorithm"),(0,i.kt)("p",null,"If we see this problem as a graph problem, it is same as find a minimum spanning tree (MST).  We can use Kruskal's algorithm with disjoint-set data structure (DSU) to solve it. We calculate the weight and build edges for all points. Then sort the array in an increasing order. For each edge, we check if two points are united or not. If not, we unite them and and the cost."),(0,i.kt)("p",null,"For more, please see ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Kruskal's_algorithm"},"Kruskal's Algorithm"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"DSU Template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class dsu {\n public:\n  vector<int> root, rank;\n  int n;\n  int cnt;\n\n  dsu(int _n) : n(_n) {\n    root.resize(n);\n    rank.resize(n);\n    for(int i = 0; i < n; i++) {\n        root[i] = i;\n        rank[i] = 1;\n    }\n    cnt = n;\n  }\n\n  inline int getCount() { return cnt; }\n\n  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }\n\n  inline bool unite(int x, int y) {\n    x = get(x);\n    y = get(y);\n    if (x != y) {\n        if (rank[x] > rank[y]) {\n            root[y] = x;\n        } else if (rank[x] < rank[y]) {\n            root[x] = y;\n        } else {\n            root[y] = x;\n            rank[x] += 1;\n        }\n        cnt--;\n      return true;\n    }\n    return false;\n  }\n};\n"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int minCostConnectPoints(vector<vector<int>>& points) {\n        int n = points.size(); \n        vector<array<int, 3>> edges;\n        // build all the edges\n        for(int i = 0; i < n; i++) {\n            for(int j = i + 1; j < n; j++) {\n                int w = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1]);\n                // put w first - as we want to sort by weight\n                edges.push_back({w, i, j});\n            }\n        }\n        // init dsu\n        dsu d(n);\n        // sort by weight - as we choose the shortest edge for each round\n        sort(edges.begin(), edges.end());\n        int ans = 0;\n        for (auto x : edges) {\n            // unite both point and add the weight\n            if (d.unite(x[1], x[2])) ans += x[0];\n        }\n        return ans;\n    }\n};\n")))}d.isMDXComponent=!0}}]);