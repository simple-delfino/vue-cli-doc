(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{450:function(t,s,a){"use strict";a.r(s);var e=a(46),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"构建目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建目标"}},[t._v("#")]),t._v(" 构建目标")]),t._v(" "),a("p",[t._v("当你运行 "),a("code",[t._v("vue-cli-service build")]),t._v(" 时，你可以通过 "),a("code",[t._v("--target")]),t._v(" 选项指定不同的构建目标。它允许你将相同的源代码根据不同的用例生成不同的构建。")]),t._v(" "),a("h2",{attrs:{id:"应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),a("p",[t._v("应用模式是默认的模式。在这个模式中：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("index.html")]),t._v(" 会带有注入的资源和 resource hint")]),t._v(" "),a("li",[t._v("第三方库会被分到一个独立包以便更好的缓存")]),t._v(" "),a("li",[t._v("小于 4kb 的静态资源会被内联在 JavaScript 中")]),t._v(" "),a("li",[a("code",[t._v("public")]),t._v(" 中的静态资源会被复制到输出目录中")])]),t._v(" "),a("h2",{attrs:{id:"库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#库"}},[t._v("#")]),t._v(" 库")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("关于 IE 兼容性的提醒")]),t._v(" "),a("p",[t._v("在库模式中，项目的 "),a("code",[t._v("publicPath")]),t._v(" 是根据主文件的加载路径"),a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/commands/build/setPublicPath.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("动态设置"),a("OutboundLink")],1),t._v("的（用以支持动态的资源加载能力）。但是这个功能用到了 "),a("code",[t._v("document.currentScript")]),t._v("，而 IE 浏览器并不支持这一特性。所以如果网站需要支持 IE 的话，建议使用库之前先在页面上引入 "),a("a",{attrs:{href:"https://www.npmjs.com/package/current-script-polyfill",target:"_blank",rel:"noopener noreferrer"}},[t._v("current-script-polyfill"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意对 Vue 的依赖")]),t._v(" "),a("p",[t._v("在库模式中，Vue 是"),a("em",[t._v("外置的")]),t._v("。这意味着包中不会有 Vue，即便你在代码中导入了 Vue。如果这个库会通过一个打包器使用，它将尝试通过打包器以依赖的方式加载 Vue；否则就会回退到一个全局的 "),a("code",[t._v("Vue")]),t._v(" 变量。")]),t._v(" "),a("p",[t._v("要避免此行为，可以在"),a("code",[t._v("build")]),t._v("命令中添加"),a("code",[t._v("--inline-vue")]),t._v("标志。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vue-cli-service build --target lib --inline-vue\n")])])])]),t._v(" "),a("p",[t._v("你可以通过下面的命令将一个单独的入口构建为一个库：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vue-cli-service build --target lib --name myLib [entry]\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("File                     Size                     Gzipped\n\ndist/myLib.umd.min.js    13.28 kb                 8.42 kb\ndist/myLib.umd.js        20.95 kb                 10.22 kb\ndist/myLib.common.js     20.57 kb                 10.09 kb\ndist/myLib.css           0.33 kb                  0.23 kb\n")])])]),a("p",[t._v("这个入口可以是一个 "),a("code",[t._v(".js")]),t._v(" 或一个 "),a("code",[t._v(".vue")]),t._v(" 文件。如果没有指定入口，则会使用 "),a("code",[t._v("src/App.vue")]),t._v("。")]),t._v(" "),a("p",[t._v("构建一个库会输出：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("dist/myLib.common.js")]),t._v("：一个给打包器用的 CommonJS 包 (不幸的是，webpack 目前还并没有支持 ES modules 输出格式的包)")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("dist/myLib.umd.js")]),t._v("：一个直接给浏览器或 AMD loader 使用的 UMD 包")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("dist/myLib.umd.min.js")]),t._v("：压缩后的 UMD 构建版本")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("dist/myLib.css")]),t._v("：提取出来的 CSS 文件 (可以通过在 "),a("code",[t._v("vue.config.js")]),t._v(" 中设置 "),a("code",[t._v("css: { extract: false }")]),t._v(" 强制内联)")])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("如果你在开发一个库或多项目仓库 (monorepo)，请注意导入 CSS "),a("strong",[t._v("是具有副作用的")]),t._v("。请确保在 "),a("code",[t._v("package.json")]),t._v(" 中"),a("strong",[t._v("移除")]),t._v(" "),a("code",[t._v('"sideEffects": false')]),t._v("，否则 CSS 代码块会在生产环境构建时被 webpack 丢掉。")])]),t._v(" "),a("h3",{attrs:{id:"vue-vs-js-ts-入口文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-vs-js-ts-入口文件"}},[t._v("#")]),t._v(" Vue vs. JS/TS 入口文件")]),t._v(" "),a("p",[t._v("当使用一个 "),a("code",[t._v(".vue")]),t._v(" 文件作为入口时，你的库会直接暴露这个 Vue 组件本身，因为组件始终是默认导出的内容。")]),t._v(" "),a("p",[t._v("然而，当你使用一个 "),a("code",[t._v(".js")]),t._v(" 或 "),a("code",[t._v(".ts")]),t._v(" 文件作为入口时，它可能会包含具名导出，所以库会暴露为一个模块。也就是说你的库必须在 UMD 构建中通过 "),a("code",[t._v("window.yourLib.default")]),t._v(" 访问，或在 CommonJS 构建中通过 "),a("code",[t._v("const myLib = require('mylib').default")]),t._v(" 访问。如果你没有任何具名导出并希望直接暴露默认导出，你可以在 "),a("code",[t._v("vue.config.js")]),t._v(" 中使用以下 webpack 配置：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  configureWebpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      libraryExport"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"web-components-组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-components-组件"}},[t._v("#")]),t._v(" Web Components 组件")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("兼容性提示")]),t._v(" "),a("p",[t._v("Web Components 模式不支持 IE11 及更低版本。"),a("a",{attrs:{href:"https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-web-component-wrapper/README.md#%E5%85%BC%E5%AE%B9%E6%80%A7",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多细节"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意对 Vue 的依赖")]),t._v(" "),a("p",[t._v("在 Web Components 模式中，Vue 是"),a("em",[t._v("外置的")]),t._v("。这意味着包中不会有 Vue，即便你在代码中导入了 Vue。这里的包会假设在页面中已经有一个可用的全局变量 "),a("code",[t._v("Vue")]),t._v("。")])]),t._v(" "),a("p",[t._v("你可以通过下面的命令将一个单独的入口构建为一个 Web Components 组件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vue-cli-service build --target wc --name my-element [entry]\n")])])]),a("p",[t._v("注意这里的入口应该是一个 "),a("code",[t._v("*.vue")]),t._v(" 文件。Vue CLI 将会把这个组件自动包裹并注册为 Web Components 组件，无需在 "),a("code",[t._v("main.js")]),t._v(" 里自行注册。也可以在开发时把 "),a("code",[t._v("main.js")]),t._v(" 作为 demo app 单独使用。")]),t._v(" "),a("p",[t._v("该构建将会产生一个单独的 JavaScript 文件 (及其压缩后的版本) 将所有的东西都内联起来。当这个脚本被引入网页时，会注册自定义组件 "),a("code",[t._v("<my-element>")]),t._v("，其使用 "),a("code",[t._v("@vue/web-component-wrapper")]),t._v(" 包裹了目标的 Vue 组件。这个包裹器会自动代理属性、特性、事件和插槽。请查阅 "),a("a",{attrs:{href:"https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-web-component-wrapper/README.md",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("@vue/web-component-wrapper")]),t._v(" 的文档"),a("OutboundLink")],1),t._v("了解更多细节。")]),t._v(" "),a("p",[a("strong",[t._v("注意这个包依赖了在页面上全局可用的 "),a("code",[t._v("Vue")]),t._v("。")])]),t._v(" "),a("p",[t._v("这个模式允许你的组件的使用者以一个普通 DOM 元素的方式使用这个 Vue 组件：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("path/to/my-element.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 可在普通 HTML 中或者其它任何框架中使用 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("my-element")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("my-element")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"注册多个-web-components-组件的包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册多个-web-components-组件的包"}},[t._v("#")]),t._v(" 注册多个 Web Components 组件的包")]),t._v(" "),a("p",[t._v("当你构建一个 Web Components 组件包的时候，你也可以使用一个 glob 表达式作为入口指定多个组件目标：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vue-cli-service build --target wc --name foo 'src/components/*.vue'\n")])])]),a("p",[t._v("当你构建多个 web component 时，"),a("code",[t._v("--name")]),t._v(" 将会用于设置前缀，同时自定义元素的名称会由组件的文件名推导得出。比如一个名为 "),a("code",[t._v("HelloWorld.vue")]),t._v(" 的组件携带 "),a("code",[t._v("--name foo")]),t._v(" 将会生成的自定义元素名为 "),a("code",[t._v("<foo-hello-world>")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"异步-web-components-组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步-web-components-组件"}},[t._v("#")]),t._v(" 异步 Web Components 组件")]),t._v(" "),a("p",[t._v("当指定多个 Web Components 组件作为目标时，这个包可能会变得非常大，并且用户可能只想使用你的包中注册的一部分组件。这时异步 Web Components 模式会生成一个 code-split 的包，带一个只提供所有组件共享的运行时，并预先注册所有的自定义组件小入口文件。一个组件真正的实现只会在页面中用到自定义元素相应的一个实例时按需获取：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vue-cli-service build --target wc-async --name foo 'src/components/*.vue'\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("File                Size                        Gzipped\n\ndist/foo.0.min.js    12.80 kb                    8.09 kb\ndist/foo.min.js      7.45 kb                     3.17 kb\ndist/foo.1.min.js    2.91 kb                     1.02 kb\ndist/foo.js          22.51 kb                    6.67 kb\ndist/foo.0.js        17.27 kb                    8.83 kb\ndist/foo.1.js        5.24 kb                     1.64 kb\n")])])]),a("p",[t._v("现在用户在该页面上只需要引入 Vue 和这个入口文件即可：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("path/to/foo.min.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- foo-one 的实现的 chunk 会在用到的时候自动获取 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("foo-one")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("foo-one")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);