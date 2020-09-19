(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{400:function(t,a,e){"use strict";e.r(a);var s=e(46),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"html-and-static-assets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-and-static-assets"}},[t._v("#")]),t._v(" HTML and Static Assets")]),t._v(" "),e("h2",{attrs:{id:"html"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),e("h3",{attrs:{id:"the-index-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-index-file"}},[t._v("#")]),t._v(" The Index File")]),t._v(" "),e("p",[t._v("The file "),e("code",[t._v("public/index.html")]),t._v(" is a template that will be processed with "),e("a",{attrs:{href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("html-webpack-plugin"),e("OutboundLink")],1),t._v(". During build, asset links will be injected automatically. In addition, Vue CLI also automatically injects resource hints ("),e("code",[t._v("preload/prefetch")]),t._v("), manifest/icon links (when PWA plugin is used), and the asset links for the JavaScript and CSS files produced during the build.")]),t._v(" "),e("h3",{attrs:{id:"interpolation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interpolation"}},[t._v("#")]),t._v(" Interpolation")]),t._v(" "),e("p",[t._v("Since the index file is used as a template, you can use the "),e("a",{attrs:{href:"https://lodash.com/docs/4.17.10#template",target:"_blank",rel:"noopener noreferrer"}},[t._v("lodash template"),e("OutboundLink")],1),t._v(" syntax to interpolate values in it:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("<%= VALUE %>")]),t._v(" for unescaped interpolation;")]),t._v(" "),e("li",[e("code",[t._v("<%- VALUE %>")]),t._v(" for HTML-escaped interpolation;")]),t._v(" "),e("li",[e("code",[t._v("<% expression %>")]),t._v(" for JavaScript control flows.")])]),t._v(" "),e("p",[t._v("In addition to the "),e("a",{attrs:{href:"https://github.com/jantimon/html-webpack-plugin#writing-your-own-templates",target:"_blank",rel:"noopener noreferrer"}},[t._v("default values exposed by "),e("code",[t._v("html-webpack-plugin")]),e("OutboundLink")],1),t._v(", all "),e("RouterLink",{attrs:{to:"/guide/mode-and-env.html#using-env-variables-in-client-side-code"}},[t._v("client-side env variables")]),t._v(" are also available directly. For example, to use the "),e("code",[t._v("BASE_URL")]),t._v(" value:")],1),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("icon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<%= BASE_URL %>favicon.ico"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("See also:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/config/#publicpath"}},[t._v("publicPath")])],1)]),t._v(" "),e("h3",{attrs:{id:"preload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preload"}},[t._v("#")]),t._v(" Preload")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v('<link rel="preload">')]),e("OutboundLink")],1),t._v(" is a type of resource hint that is used to specify resources that your pages will need very soon after loading, which you therefore want to start preloading early in the lifecycle of a page load, before the browser's main rendering machinery kicks in.")]),t._v(" "),e("p",[t._v("By default, a Vue CLI app will automatically generate preload hints for all files that are needed for the initial rendering of your app.")]),t._v(" "),e("p",[t._v("The hints are injected using "),e("a",{attrs:{href:"https://github.com/vuejs/preload-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vue/preload-webpack-plugin"),e("OutboundLink")],1),t._v(" and can be modified / deleted via "),e("code",[t._v("chainWebpack")]),t._v(" as "),e("code",[t._v("config.plugin('preload')")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"prefetch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prefetch"}},[t._v("#")]),t._v(" Prefetch")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v('<link rel="prefetch">')]),e("OutboundLink")],1),t._v(" is a type of resource hint that tells the browser to prefetch content that the user may visit in the near future in the browser's idle time, after the page finishes loading.")]),t._v(" "),e("p",[t._v("By default, a Vue CLI app will automatically generate prefetch hints for all JavaScript files generated for async chunks (as a result of "),e("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports",target:"_blank",rel:"noopener noreferrer"}},[t._v("on-demand code splitting via dynamic "),e("code",[t._v("import()")]),e("OutboundLink")],1),t._v(").")]),t._v(" "),e("p",[t._v("The hints are injected using "),e("a",{attrs:{href:"https://github.com/vuejs/preload-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vue/preload-webpack-plugin"),e("OutboundLink")],1),t._v(" and can be modified / deleted via "),e("code",[t._v("chainWebpack")]),t._v(" as "),e("code",[t._v("config.plugin('prefetch')")]),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note for multi page setups")]),t._v(" "),e("p",[t._v("When using a multipage setup, the plugin name above should be changed to match the structure 'prefetch-{pagename}', for example 'prefetch-app'.")])]),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// remove the prefetch plugin")]),t._v("\n    config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prefetch'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or:")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// modify its options:")]),t._v("\n    config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prefetch'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fileBlacklist "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fileBlacklist "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fileBlacklist"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/myasyncRoute(.)+?\\.js$/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" options\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("When the prefetch plugin is disabled, you can manually select specific chunks to prefetch using webpack's inline comments:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpackPrefetch: true */")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./someAsyncComponent.vue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("webpack's runtime will inject prefetch links when the parent chunk is loaded.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Prefetch links will consume bandwidth. If you have a large app with many async chunks and your users are primarily mobile and thus bandwidth-aware, you may want to disable prefetch links and manually select chunks to prefetch.")])]),t._v(" "),e("h3",{attrs:{id:"disable-index-generation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disable-index-generation"}},[t._v("#")]),t._v(" Disable Index Generation")]),t._v(" "),e("p",[t._v("When using Vue CLI with an existing backend, you may need to disable the generation of "),e("code",[t._v("index.html")]),t._v(" so that the generated assets can be used in a server-rendered page. To do so, the following can be added to "),e("RouterLink",{attrs:{to:"/config/#vue-config-js"}},[e("code",[t._v("vue.config.js")])]),t._v(":")],1),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// disable hashes in filenames")]),t._v("\n  filenameHashing"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// delete HTML related webpack plugins")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'preload'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prefetch'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("However, this is not really recommended because:")]),t._v(" "),e("ul",[e("li",[t._v("Hard-coded file names makes it more difficult to implement efficient cache control.")]),t._v(" "),e("li",[t._v("Hard-coded file names also do not play well with code-splitting, which generates additional JavaScript files with varying filenames.")]),t._v(" "),e("li",[t._v("Hard-coded file names do not work with "),e("RouterLink",{attrs:{to:"/guide/browser-compatibility.html#modern-mode"}},[t._v("Modern Mode")]),t._v(".")],1)]),t._v(" "),e("p",[t._v("Instead, you should consider using the "),e("RouterLink",{attrs:{to:"/config/#indexpath"}},[t._v("indexPath")]),t._v(" option to use the generated HTML as a view template in your server-side framework.")],1),t._v(" "),e("h3",{attrs:{id:"building-a-multi-page-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#building-a-multi-page-app"}},[t._v("#")]),t._v(" Building a Multi-Page App")]),t._v(" "),e("p",[t._v("Not every app has to be an SPA. Vue CLI supports building a multi-paged app using the "),e("RouterLink",{attrs:{to:"/config/#pages"}},[e("code",[t._v("pages")]),t._v(" option in "),e("code",[t._v("vue.config.js")])]),t._v(". The built app will efficiently share common chunks between multiple entries for optimal loading performance.")],1),t._v(" "),e("h2",{attrs:{id:"static-assets-handling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#static-assets-handling"}},[t._v("#")]),t._v(" Static Assets Handling")]),t._v(" "),e("p",[t._v("Static assets can be handled in two different ways:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Imported in JavaScript or referenced in templates/CSS via relative paths. Such references will be handled by webpack.")])]),t._v(" "),e("li",[e("p",[t._v("Placed in the "),e("code",[t._v("public")]),t._v(" directory and referenced via absolute paths. These assets will simply be copied and not go through webpack.")])])]),t._v(" "),e("h3",{attrs:{id:"relative-path-imports"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#relative-path-imports"}},[t._v("#")]),t._v(" Relative Path Imports")]),t._v(" "),e("p",[t._v("When you reference a static asset using relative path (must start with "),e("code",[t._v(".")]),t._v(") inside JavaScript, CSS or "),e("code",[t._v("*.vue")]),t._v(" files, the asset will be included into webpack's dependency graph. During this compilation process, all asset URLs such as "),e("code",[t._v('<img src="...">')]),t._v(", "),e("code",[t._v("background: url(...)")]),t._v(" and CSS "),e("code",[t._v("@import")]),t._v(" are "),e("strong",[t._v("resolved as module dependencies")]),t._v(".")]),t._v(" "),e("p",[t._v("For example, "),e("code",[t._v("url(./image.png)")]),t._v(" will be translated into "),e("code",[t._v("require('./image.png')")]),t._v(", and")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./image.png"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("will be compiled into:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" attrs"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" src"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./image.png'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Internally, we use "),e("code",[t._v("file-loader")]),t._v(" to determine the final file location with version hashes and correct public base paths, and use "),e("code",[t._v("url-loader")]),t._v(" to conditionally inline assets that are smaller than 4kb, reducing the amount of HTTP requests.")]),t._v(" "),e("p",[t._v("You can adjust the inline file size limit via "),e("RouterLink",{attrs:{to:"/config/#chainwebpack"}},[t._v("chainWebpack")]),t._v(". For example, to set the limit to 10kb instead:")],1),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'images'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url-loader'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("loader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url-loader'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" limit"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10240")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"url-transform-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url-transform-rules"}},[t._v("#")]),t._v(" URL Transform Rules")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("If the URL is an absolute path (e.g. "),e("code",[t._v("/images/foo.png")]),t._v("), it will be preserved as-is.")])]),t._v(" "),e("li",[e("p",[t._v("If the URL starts with "),e("code",[t._v(".")]),t._v(", it's interpreted as a relative module request and resolved based on the folder structure on your file system.")])]),t._v(" "),e("li",[e("p",[t._v("If the URL starts with "),e("code",[t._v("~")]),t._v(", anything after it is interpreted as a module request. This means you can even reference assets inside node modules:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("~some-npm-package/foo.png"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("If the URL starts with "),e("code",[t._v("@")]),t._v(", it's also interpreted as a module request. This is useful because Vue CLI by default aliases "),e("code",[t._v("@")]),t._v(" to "),e("code",[t._v("<projectRoot>/src")]),t._v(". "),e("strong",[t._v("(templates only)")])])])]),t._v(" "),e("h3",{attrs:{id:"the-public-folder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-public-folder"}},[t._v("#")]),t._v(" The "),e("code",[t._v("public")]),t._v(" Folder")]),t._v(" "),e("p",[t._v("Any static assets placed in the "),e("code",[t._v("public")]),t._v(" folder will simply be copied and not go through webpack. You need to reference them using absolute paths.")]),t._v(" "),e("p",[t._v("Note we recommend importing assets as part of your module dependency graph so that they will go through webpack with the following benefits:")]),t._v(" "),e("ul",[e("li",[t._v("Scripts and stylesheets get minified and bundled together to avoid extra network requests.")]),t._v(" "),e("li",[t._v("Missing files cause compilation errors instead of 404 errors for your users.")]),t._v(" "),e("li",[t._v("Result filenames include content hashes so you don’t need to worry about browsers caching their old versions.")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("public")]),t._v(" directory is provided as an "),e("strong",[t._v("escape hatch")]),t._v(", and when you reference it via absolute path, you need to take into account where your app will be deployed. If your app is not deployed at the root of a domain, you will need to prefix your URLs with the "),e("RouterLink",{attrs:{to:"/config/#publicpath"}},[t._v("publicPath")]),t._v(":")],1),t._v(" "),e("ul",[e("li",[e("p",[t._v("In "),e("code",[t._v("public/index.html")]),t._v(" or other HTML files used as templates by "),e("code",[t._v("html-webpack-plugin")]),t._v(", you need to prefix the link with "),e("code",[t._v("<%= BASE_URL %>")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("icon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<%= BASE_URL %>favicon.ico"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("In templates, you will need to first pass the base URL to your component:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    publicPath"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_URL")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Then:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("`${publicPath}my-image.png`"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"when-to-use-the-public-folder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-to-use-the-public-folder"}},[t._v("#")]),t._v(" When to use the "),e("code",[t._v("public")]),t._v(" folder")]),t._v(" "),e("ul",[e("li",[t._v("You need a file with a specific name in the build output.")]),t._v(" "),e("li",[t._v("You have thousands of images and need to dynamically reference their paths.")]),t._v(" "),e("li",[t._v("Some library may be incompatible with Webpack and you have no other option but to include it as a "),e("code",[t._v("<script>")]),t._v(" tag.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);