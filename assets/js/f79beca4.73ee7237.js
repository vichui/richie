"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[19732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),f=a,d=h["".concat(l,".").concat(f)]||h[f]||u[f]||r;return n?i.createElement(d,o(o({ref:t},p),{},{components:n})):i.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},37448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),o=["components"],s={id:"filters-customization",title:"Customizing search filters",sidebar_label:"Search filters customization"},l=void 0,c={unversionedId:"filters-customization",id:"version-2.21.0/filters-customization",title:"Customizing search filters",description:"You may want to customize the filters on the left side bar of the search page.",source:"@site/versioned_docs/version-2.21.0/filters-customization.md",sourceDirName:".",slug:"/filters-customization",permalink:"/docs/2.21.0/filters-customization",draft:!1,tags:[],version:"2.21.0",lastUpdatedBy:"jbpenrath",lastUpdatedAt:1679473023,formattedLastUpdatedAt:"Mar 22, 2023",frontMatter:{id:"filters-customization",title:"Customizing search filters",sidebar_label:"Search filters customization"},sidebar:"docs",previous:{title:"Start your own site",permalink:"/docs/2.21.0/cookiecutter"},next:{title:"Django & React",permalink:"/docs/2.21.0/django-react-interop"}},p={},u=[{value:"Filters configuration",id:"filters-configuration",level:2},{value:"Filters presentation",id:"filters-presentation",level:2},{value:"Writing your own custom filters",id:"writing-your-own-custom-filters",level:2}],h={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You may want to customize the filters on the left side bar of the search page."),(0,r.kt)("p",null,"Richie makes it easy to choose which filters you want to display among the existing filters\nand in which order. You can also configure the existing filters to change their title or the\nway they behave. Lastly, you can completely override a filter or create your own custom filter\nfrom scratch."),(0,r.kt)("h2",{id:"filters-configuration"},"Filters configuration"),(0,r.kt)("p",null,"Filters must first be defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"FILTERS_CONFIGURATION")," setting. It is a dictionary defining\nfor each filter, a predefined ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," in the code where the filter is implemented and the\nparameters to apply to this class when instantiating it."),(0,r.kt)("p",null,"Let's study a few examples of filters in the default configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FILTERS_CONFIGURATION = {\n    ...\n    "pace": {\n        "class": "richie.apps.search.filter_definitions.StaticChoicesFilterDefinition",\n        "params": {\n            "fragment_map": {\n                "self-paced": [{"bool": {"must_not": {"exists": {"field": "pace"}}}}],\n                "lt-1h": [{"range": {"pace": {"lt": 60}}}],\n                "1h-2h": [{"range": {"pace": {"gte": 60, "lte": 120}}}],\n                "gt-2h": [{"range": {"pace": {"gt": 120}}}],\n            },\n            "human_name": _("Weekly pace"),\n            "min_doc_count": 0,\n            "sorting": "conf",\n            "values": {\n                "self-paced": _("Self-paced"),\n                "lt-1h": _("Less than one hour"),\n                "1h-2h": _("One to two hours"),\n                "gt-2h": _("More than two hours"),\n            },\n        },\n    },\n    ...\n}\n')),(0,r.kt)("p",null,"This filter uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticChoicesFilterDefinition")," filter definition class and allows filtering\non the ",(0,r.kt)("inlineCode",{parentName:"p"},"pace")," field present in the Elasticsearch index. The ",(0,r.kt)("inlineCode",{parentName:"p"},"values")," parameter defines 4 ranges\nand their human readable format that will appear as 4 filtering options to the user."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"fragment_map")," parameter defines a fragment of the Elasticsearch query to apply on the ",(0,r.kt)("inlineCode",{parentName:"p"},"pace"),"\nfield when one of these options is selected."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"human_name"),"parameter defines how the filter is entitled. It is defined as a lazy i18n string\nso that it can be translated."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sorting")," parameter determines how the facets are sorted in the left side panel of the filter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"conf"),": facets are sorted as defined in the ",(0,r.kt)("inlineCode",{parentName:"li"},"values")," configuration parameter"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"count"),": facets are sorted according to the number of course results associated with each facet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": facets are sorted by their name in alphabetical order")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"min_doc_count")," parameter defines how many associated results a facet must have at the minimum\nbefore it is displayed as an option for the filter."),(0,r.kt)("p",null,"Let's study another interesting example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FILTERS_CONFIGURATION = {\n    ...\n    "organizations": {\n        "class": "richie.apps.search.filter_definitions.IndexableHierarchicalFilterDefinition",\n        "params": {\n            "human_name": _("Organizations"),\n            "is_autocompletable": True,\n            "is_drilldown": False,\n            "is_searchable": True,\n            "min_doc_count": 0,\n            "reverse_id": "organizations",\n        },\n    },\n    ...\n}\n')),(0,r.kt)("p",null,"This filter uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexableHierarchicalFilterDefinition")," filter definition class and allows\nfiltering on the link between course pages and other pages identified by their IDs like for\nexample here ",(0,r.kt)("inlineCode",{parentName:"p"},"Organization")," pages."),(0,r.kt)("p",null,"In the example above, when an option is selected, results will only include the courses for which\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"organizations")," field in the index is including the ID of the selected organization page."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"reverse_id")," parameter should point to a page's reverse ID (see DjangoCMS documentation) in\nthe CMS. The filter will propose a filtering option for each children organization under this\npage."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"is_autocompletable")," field determines whether organizations should be searched and suggested\nby the autocomplete feature (organizations must have an associated index and API endpoint for\nautocompletion carrying the same name)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"is_drilldown")," parameter determines whether the filter is limited to one active value at a\ntime or allows multi-facetting."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"is_searchable"),' field determines whether organizations filters should present a "more options"\nbutton in case there are more facet options in results than can be displayed (organizations must\nhave an associated API endpoint for full-text search, carrying the same name).'),(0,r.kt)("p",null,"Lastly, let's look at nested filters which, as their name indicates, allow filtering on nested\nfields."),(0,r.kt)("p",null,"For example, in the course index, one of the fields is named ",(0,r.kt)("inlineCode",{parentName:"p"},"course_runs")," and contains a list of\nobjects in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"course_runs": [\n    {\n        "start": "2022-09-09T09:00:00.000000",\n        "end": "2021-10-30T00:00:00.000000Z",\n        "enrollment_start": "2022-08-01T09:00:00.000000Z",\n        "enrollment_end": "2022-09-08T00:00:00.000000Z",\n        "languages": ["en", "fr"],\n    },\n    {\n        "start": "2023-03-01T09:00:00.000000",\n        "end": "2023-06-03T00:00:00.000000Z",\n        "enrollment_start": "2023-01-01T09:00:00.000000Z",\n        "enrollment_end": "2023-03-01T00:00:00.000000Z",\n        "languages": ["fr"],\n    },\n]\n')),(0,r.kt)("p",null,"If we want to filter courses that are available in the english language, we can thus configure the\nfollowing filter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FILTERS_CONFIGURATION = {\n    ...\n    "course_runs": {\n        "class": "richie.apps.search.filter_definitions.NestingWrapper",\n        "params": {\n            "filters": {\n                "languages": {\n                    "class": "richie.apps.search.filter_definitions.LanguagesFilterDefinition",\n                    "params": {\n                        "human_name": _("Languages"),\n                        # There are too many available languages to show them all, all the time.\n                        # Eg. 200 languages, 190+ of which will have 0 matching courses.\n                        "min_doc_count": 1,\n                    },\n                },\n            }\n        },\n    },\n    ...\n}\n')),(0,r.kt)("h2",{id:"filters-presentation"},"Filters presentation"),(0,r.kt)("p",null,"Which filters are displayed in the left side bar of the search page and in which order is defined\nby the ",(0,r.kt)("inlineCode",{parentName:"p"},"RICHIE_FILTERS_PRESENTATION")," setting."),(0,r.kt)("p",null,"This setting is expecting a list of strings, which are the names of the filters as defined\nin the ",(0,r.kt)("inlineCode",{parentName:"p"},"FILTERS_CONFIGURATION")," setting decribed in the previous section. If it, for example,\ncontains the 3 filters presented in the previous section, we could define the following\npresentation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'RICHIE_FILTERS_PRESENTATION = ["organizations", "languages", "pace"]\n')),(0,r.kt)("h2",{id:"writing-your-own-custom-filters"},"Writing your own custom filters"),(0,r.kt)("p",null,"You can write your own filters from scratch although we must warn you that it is not trivial\nbecause it requires a good knowledge of Elasticsearch and studying the mapping defined in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openfun/richie/blob/master/src/richie/apps/search/indexers/courses.py"},"courses indexer"),"."),(0,r.kt)("p",null,"A filter is a class deriving from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openfun/richie/blob/master/src/richie/apps/search/filter_definitions/base.py"},"BaseFilterDefinition")," and defining methods to return the\ninformation to display the filter and query fragments for elasticsearch:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get_form_fields"),": returns the form field instance that will be used to parse and validate this\nfilter's values from the querystring"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get_query_fragment"),": returns the query fragment to use as filter in ElasticSearch"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get_aggs_fragment"),": returns the query fragment to use to extract facets from\nElasticSearch aggregations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get_facet_info"),": returns the dynamic facet information from a filter's Elasticsearch facet\nresults. Together with the facet's static information, it will be used to display the filter\nin its current status in the left side panel of the search page.")),(0,r.kt)("p",null,"We will not go into more details here about how filter definition classes work, but you can refer\nto the code of the existing filters as good examples of what is possible. The code, although not\ntrivial, was given much care and includes many comments in an attempt to help writing new custom\nfilters. Of course, don't hesitate to ask for help by\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openfun/richie/issues"},"opening an issue"),"!"))}f.isMDXComponent=!0}}]);