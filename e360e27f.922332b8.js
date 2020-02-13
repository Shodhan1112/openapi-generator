(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{269:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(9),o=(n(0),n(293)),l={id:"plugins",title:"Plugins"},p={id:"plugins",title:"Plugins",description:"## Maven",source:"@site/../docs/plugins.md",permalink:"/docs/plugins",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/plugins.md",lastUpdatedBy:"Daniel Fr\u0105k",lastUpdatedAt:1580733185,sidebar:"docs",previous:{title:"CLI Installation",permalink:"/docs/installation"},next:{title:"Online",permalink:"/docs/online"}},i=[{value:"Maven",id:"maven",children:[{value:"Example",id:"example",children:[]}]},{value:"Gradle",id:"gradle",children:[{value:"Example",id:"example-1",children:[]}]}],c={rightToc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"maven"},"Maven"),Object(o.b)("p",null,"A Maven plugin to support the OpenAPI generator project"),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"Add to your ",Object(o.b)("inlineCode",{parentName:"p"},"build->plugins")," section (default phase is ",Object(o.b)("inlineCode",{parentName:"p"},"generate-sources")," phase)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<plugin>\n    <groupId>org.openapitools</groupId>\n    <artifactId>openapi-generator-maven-plugin</artifactId>\n    <version>3.3.4</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate</goal>\n            </goals>\n            <configuration>\n                <inputSpec>${project.basedir}/src/main/resources/api.yaml</inputSpec>\n                <generatorName>java</generatorName>\n                <configOptions>\n                   <sourceFolder>src/gen/java/main</sourceFolder>\n                </configOptions>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),Object(o.b)("p",null,"Followed by:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mvn clean compile\n")),Object(o.b)("p",null,"For full details of all options, see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator-maven-plugin"}),"plugin README"),"."),Object(o.b)("h2",{id:"gradle"},"Gradle"),Object(o.b)("p",null,"This gradle plugin offers a declarative DSL via extensions (these are Gradle project extensions). These map almost fully 1:1 with the options you\u2019d pass to the CLI or Maven plugin. The plugin maps the extensions to a task of the same name to provide a clean API. If you\u2019re interested in the extension/task mapping concept from a high-level, you can check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.gradle.org/current/userguide/custom_plugins.html#sec:mapping_extension_properties_to_task_properties"}),"Gradle\u2019s docs"),"."),Object(o.b)("p",null,"To include in your project, add the following to ",Object(o.b)("inlineCode",{parentName:"p"},"build.gradle"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),'buildscript {\n  repositories {\n    mavenLocal()\n    maven { url "https://repo1.maven.org/maven2" }\n  }\n  dependencies {\n    classpath "org.openapitools:openapi-generator-gradle-plugin:3.3.4"\n  }\n}\n\napply plugin: \'org.openapi.generator\'\n')),Object(o.b)("p",null,"This gives access to the following tasks:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Task"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"openApiGenerate"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Generate code via Open API Tools Generator for Open API 2.0 or 3.x specification documents.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"openApiGenerators"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Lists generators available via Open API Generators.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"openApiMeta"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Generates a new generator to be consumed via Open API Generator.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"openApiValidate"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Validates an Open API 2.0 or 3.x specification document.")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The plugin implements the above tasks as project extensions of the same name. If you\u2019d like to declare these tasks as dependencies to other tasks (using ",Object(o.b)("inlineCode",{parentName:"p"},"dependsOn"),"), you\u2019ll need a task reference. e.g.:"),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),"compileJava.dependsOn tasks.openApiGenerate\n"))),Object(o.b)("p",null,"For full details of all options, see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator-gradle-plugin"}),"plugin README"),"."),Object(o.b)("h3",{id:"example-1"},"Example"),Object(o.b)("p",null,"An example task for generating a kotlin client:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),'openApiGenerate {\n    generatorName = "kotlin"\n    inputSpec = "$rootDir/specs/petstore-v3.0.yaml".toString()\n    outputDir = "$buildDir/generated".toString()\n    apiPackage = "org.openapi.example.api"\n    invokerPackage = "org.openapi.example.invoker"\n    modelPackage = "org.openapi.example.model"\n    modelFilesConstrainedTo = [\n            "Error"\n    ]\n    configOptions = [\n        dateLibrary: "java8"\n    ]\n}\n')))}s.isMDXComponent=!0},293:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},b=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,p({ref:t},c,{components:n})):r.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);