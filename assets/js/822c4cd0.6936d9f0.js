"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[46966],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70643:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),a=["components"],i={id:"css-guidelines",title:"CSS Guidelines",sidebar_label:"CSS Guidelines"},l=void 0,c={unversionedId:"css-guidelines",id:"version-2.16.0/css-guidelines",title:"CSS Guidelines",description:"The purpose of these CSS guidelines is to make our CSS as easy as possible to maintain, prune and/or modify over time. To that end, they forgo some of the unwanted parts of CSS. They also require the use of a CSS preprocessor (we picked SASS) to be used effortlessly.",source:"@site/versioned_docs/version-2.16.0/css-guidelines.md",sourceDirName:".",slug:"/css-guidelines",permalink:"/docs/2.16.0/css-guidelines",draft:!1,tags:[],version:"2.16.0",lastUpdatedBy:"jbpenrath",lastUpdatedAt:1662716990,formattedLastUpdatedAt:"Sep 9, 2022",frontMatter:{id:"css-guidelines",title:"CSS Guidelines",sidebar_label:"CSS Guidelines"},sidebar:"docs",previous:{title:"Accessibility testing",permalink:"/docs/2.16.0/accessibility-testing"}},u={},p=[{value:"File structuration",id:"file-structuration",level:2},{value:"Code structuration",id:"code-structuration",level:2},{value:"Quick pointers",id:"quick-pointers",level:2}],d={toc:p},m="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The purpose of these CSS guidelines is to make our CSS as easy as possible to maintain, prune and/or modify over time. To that end, they forgo some of the unwanted parts of CSS. They also require the use of a CSS preprocessor (we picked SASS) to be used effortlessly."),(0,s.kt)("p",null,"Our approach is two-pronged. First, we put every piece of CSS as close as we can to the place it is used in a template or component. Second, we use strict class naming rules that act as a replacement to CSS selector combinations."),(0,s.kt)("h2",{id:"file-structuration"},"File structuration"),(0,s.kt)("p",null,"Rules should be placed where their purpose is most apparent, and where they are easiest to find."),(0,s.kt)("p",null,"Generally, this means CSS rules should live as close as possible to the place they are used. For example, the selectors and rules that define the look for a component should live in a ",(0,s.kt)("inlineCode",{parentName:"p"},".scss")," file in the same folder as the JS file for this component. This goes for templates too. Such files can only contain rules that are ",(0,s.kt)("strong",{parentName:"p"},"specific to this component/template and this one only")),(0,s.kt)("p",null,"Only general base rules, utility rules, site layout rules as well as our custom variables should live in the central ",(0,s.kt)("inlineCode",{parentName:"p"},"app/static/scss")," folder."),(0,s.kt)("h2",{id:"code-structuration"},"Code structuration"),(0,s.kt)("p",null,"In order to understand what classes are about at a glance and avoid collisions, naming conventions must be enforced for classes."),(0,s.kt)("p",null,"Following the ",(0,s.kt)("a",{parentName:"p",href:"http://getbem.com/introduction/"},"BEM naming convention"),", we will write our classes as follows :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},".block {}\n.block__element {}\n.block--modifier {}\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},".block")," represents the higher level of an abstraction or component."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},".block__element")," represents a descendent of .block that helps form .block as a whole."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},".block--modifier")," represents a different state or version of .block.")),(0,s.kt)("p",null,"We use double hyphens and double underscores as delimiters so that names themselves can be hyphen-delimited (e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},".site-search__field--full"),")."),(0,s.kt)("p",null,"Yes, this notation is ugly. However, it allows our classes to express what they are doing. Both our CSS and our markup become more meaningful. It allows us to easily see what classes are related to others, and how they are related, when we look at the markup."),(0,s.kt)("h2",{id:"quick-pointers"},"Quick pointers"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"In general, ",(0,s.kt)("strong",{parentName:"li"},"do not use IDs"),". ",(0,s.kt)("em",{parentName:"li"},"They can cause specificity wars and are not supposed to be reusable, and are therefore not very useful.")),(0,s.kt)("li",{parentName:"ul"},"Do not nest selectors unnecessarily. ",(0,s.kt)("em",{parentName:"li"},"It will increase specificity and affect where else you can use your styles.")),(0,s.kt)("li",{parentName:"ul"},"Do not qualify selectors unnecessarily. ",(0,s.kt)("em",{parentName:"li"},"It will impact the number of different elements you can apply styles to.")),(0,s.kt)("li",{parentName:"ul"},"Comment profusely, ",(0,s.kt)("em",{parentName:"li"},"whenever you think the CSS is getting complex or it would not be easy to understand its intent.")),(0,s.kt)("li",{parentName:"ul"},"Use !important proactively. ",(0,s.kt)("em",{parentName:"li"},"!important is a very useful tool when used proactively to make a state or a very specific rule on a tightly-scoped selector stronger. It is however to be avoided at all costs as an easy solution to specificity issues, reactively."))),(0,s.kt)("p",null,"(Direct) child selectors can sometimes be useful. Please remember that the key selector to determine performance is the rightmost one. i.e. ",(0,s.kt)("inlineCode",{parentName:"p"},"div > #example")," is A LOT more efficient than ",(0,s.kt)("inlineCode",{parentName:"p"},"#example > div")," although it may appear otherwise at first glance. Browsers parse multi part selectors from the right. See ",(0,s.kt)("a",{parentName:"p",href:"http://csswizardry.com/2011/09/writing-efficient-css-selectors/"},"CSS Wizardry")," for more details."))}f.isMDXComponent=!0}}]);