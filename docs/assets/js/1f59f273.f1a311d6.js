"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[5046],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=s,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7422:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(7462),s=n(3366),r=(n(7294),n(3905)),o=["components"],i={title:"Test Factories",slug:"test-factories.html"},l=void 0,c={unversionedId:"framework/test_factories",id:"framework/test_factories",isDocsHomePage:!1,title:"Test Factories",description:"Sometimes we may wish to write a set of generic tests and then reuse them for specific inputs. In Kotest we can do this via test factories which create tests that can be included into one or more specs.",source:"@site/docs/framework/test_factories.md",sourceDirName:"framework",slug:"/framework/test-factories.html",permalink:"/docs/framework/test-factories.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/test_factories.md",tags:[],version:"current",frontMatter:{title:"Test Factories",slug:"test-factories.html"},sidebar:"framework",previous:{title:"System properties",permalink:"/docs/framework/framework-config-props.html"},next:{title:"Test Timeouts",permalink:"/docs/framework/timeouts/test-timeouts.html"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"Listeners",id:"listeners",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sometimes we may wish to write a set of generic tests and then reuse them for specific inputs. In Kotest we can do this via ",(0,r.kt)("em",{parentName:"p"},"test factories")," which create tests that can be ",(0,r.kt)("em",{parentName:"p"},"included")," into one or more specs."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Say we wanted to build our own collections library. A slightly trite example, but one that serves the documentation purpose well."),(0,r.kt)("p",null,"We could create an interface ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexedSeq")," which has two implementations, ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Vector"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface IndexedSeq<T> {\n\n    // returns the size of t\n    fun size(): Int\n\n    // returns a new seq with t added\n    fun add(t: T): IndexedSeq<T>\n\n    // returns true if this seq contains t\n    fun contains(t: T): Boolean\n}\n")),(0,r.kt)("p",null,"If we wanted to test our ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," implementation, we could do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class ListTest : WordSpec({\n\n   val empty = List<Int>()\n\n   "List" should {\n      "increase size as elements are added" {\n         empty.size() shouldBe 0\n         val plus1 = empty.add(1)\n         plus1.size() shouldBe 1\n         val plus2 = plus1.add(2)\n         plus2.size() shouldBe 2\n      }\n      "contain an element after it is added" {\n         empty.contains(1) shouldBe false\n         empty.add(1).contains(1) shouldBe true\n         empty.add(1).contains(2) shouldBe false\n      }\n   }\n})\n')),(0,r.kt)("p",null,"Now, if we wanted to test ",(0,r.kt)("inlineCode",{parentName:"p"},"Vector")," we have to copy n paste the test. As we add more implementations and more tests, the likelihood is our test suite will become fragmented and out of sync."),(0,r.kt)("p",null,"We can address this by creating a test factory, which accepts an ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexedSeq")," as a parameter."),(0,r.kt)("p",null,"To create a test factory, we use a builder function such as ",(0,r.kt)("inlineCode",{parentName:"p"},"funSpec"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"wordSpec")," and so on. A builder function exists for each of the spec ",(0,r.kt)("a",{parentName:"p",href:"/docs/framework/testing-styles.html"},"styles"),"."),(0,r.kt)("p",null,"So, to convert our previous tests to a test factory, we simply do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun <T> indexedSeqTests(name: String, empty: IndexedSeq<T>) = wordSpec {\n   name should {\n      "increase size as elements are added" {\n         empty.size() shouldBe 0\n         val plus1 = empty.add(1)\n         plus1.size() shouldBe 1\n         val plus2 = plus1.add(2)\n         plus2.size() shouldBe 2\n      }\n      "contain an element after it is added" {\n         empty.contains(1) shouldBe false\n         empty.add(1).contains(1) shouldBe true\n         empty.add(1).contains(2) shouldBe false\n      }\n   }\n}\n')),(0,r.kt)("p",null,"And then to use this, we must include it one or more times into a spec (or several specs)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class IndexedSeqTestSuite : WordSpec({\n   include(indexedSeqTests("vector"), Vector())\n   include(indexedSeqTests("list"), List())\n})\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can include any style factory into any style spec. For example, a fun spec factory can be included into a string spec class."))),(0,r.kt)("p",null,"A test class can include several different types of factory, as well as inline tests as normal. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class HugeTestFile : FunSpec({\n\n   test("first test") {\n     // test here\n   }\n\n   include(factory1("foo"))\n   include(factory2(1, 4))\n\n   test("another test") {\n     //  testhere\n   }\n})\n')),(0,r.kt)("p",null,"Each included test appears in the test output and reports as if it was individually defined."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Tests from factories are included in the order they are defined in the spec class."))),(0,r.kt)("h2",{id:"listeners"},"Listeners"),(0,r.kt)("p",null,"Test factories support the usual before and after test callbacks. Any callback added to a factory, will in turn be added to the spec or specs where the factory is included."),(0,r.kt)("p",null,"However, only those tests generated ",(0,r.kt)("em",{parentName:"p"},"by that factory")," will have the callback applied. This means you can create stand alone factories with their own lifecycle methods and be assured they won't clash with lifecycle methods defined in other factories or specs themselves."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val factory1 = funSpec {\n  beforeTest {\n     println("Executing $it")\n  }\n  test("a") {  }\n  test("b") {  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class LifecycleExample : FunSpec({\n   include(factory1)\n   test("c")\n   test("d")\n})\n')),(0,r.kt)("p",null,"After executing the test suite, the following would be printed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Executing a\nExecuting b\n")),(0,r.kt)("p",null,"And as you can see, the ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeTest")," block added to ",(0,r.kt)("inlineCode",{parentName:"p"},"factory1")," only applies to those tests defined in that factory, and not in the tests defined in the spec it was added to."))}u.isMDXComponent=!0}}]);