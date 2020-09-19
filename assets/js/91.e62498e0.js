(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{456:function(e,t,a){"use strict";a.r(t);var n=a(46),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("关于旧版本")]),e._v(" "),a("p",[e._v("Vue CLI 的包名称由 "),a("code",[e._v("vue-cli")]),e._v(" 改成了 "),a("code",[e._v("@vue/cli")]),e._v("。\n如果你已经全局安装了旧版本的 "),a("code",[e._v("vue-cli")]),e._v(" (1.x 或 2.x)，你需要先通过 "),a("code",[e._v("npm uninstall vue-cli -g")]),e._v(" 或 "),a("code",[e._v("yarn global remove vue-cli")]),e._v(" 卸载它。")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Node 版本要求")]),e._v(" "),a("p",[e._v("Vue CLI 4.x 需要 "),a("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),a("OutboundLink")],1),e._v(" v8.9 或更高版本 (推荐 v10 以上)。你可以使用 "),a("a",{attrs:{href:"https://github.com/tj/n",target:"_blank",rel:"noopener noreferrer"}},[e._v("n"),a("OutboundLink")],1),e._v("，"),a("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[e._v("nvm"),a("OutboundLink")],1),e._v(" 或 "),a("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("nvm-windows"),a("OutboundLink")],1),e._v(" 在同一台电脑中管理多个 Node 版本。")]),e._v(" "),a("p",[e._v("由于 Node.js v8 已不再维护，我们建议使用 Node.js v10 以上的版本，以保证最佳的兼容性。\n如果暂时无法升级 Node.js 版本，请使用 npm v6 作为默认的包管理工具。（可以用 "),a("code",[e._v("npm -v")]),e._v(" 检查 npm 版本，然后运行 "),a("code",[e._v("vue config --set packageManager npm")]),e._v(" 以设置默认包管理工具。）")])]),e._v(" "),a("p",[e._v("可以使用下列任一命令安装这个新的包：")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g @vue/cli\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# OR")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" @vue/cli\n")])])]),a("p",[e._v("安装之后，你就可以在命令行中访问 "),a("code",[e._v("vue")]),e._v(" 命令。你可以通过简单运行 "),a("code",[e._v("vue")]),e._v("，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功。")]),e._v(" "),a("p",[e._v("你还可以用这个命令来检查其版本是否正确：")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("vue --version\n")])])]),a("h3",{attrs:{id:"升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级"}},[e._v("#")]),e._v(" 升级")]),e._v(" "),a("p",[e._v("如需升级全局的 Vue CLI 包，请运行：")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" update -g @vue/cli\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 或者")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" global upgrade --latest @vue/cli\n")])])]),a("h4",{attrs:{id:"项目依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目依赖"}},[e._v("#")]),e._v(" 项目依赖")]),e._v(" "),a("p",[e._v("上面列出来的命令是用于升级全局的 Vue CLI。如需升级项目中的 Vue CLI 相关模块（以 "),a("code",[e._v("@vue/cli-plugin-")]),e._v(" 或 "),a("code",[e._v("vue-cli-plugin-")]),e._v(" 开头），请在项目目录下运行 "),a("code",[e._v("vue upgrade")]),e._v("：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("用法： upgrade [options] [plugin-name]\n\n（试用）升级 Vue CLI 服务及插件\n\n选项：\n  -t, --to <version>    升级 <plugin-name> 到指定的版本\n  -f, --from <version>  跳过本地版本检测，默认插件是从此处指定的版本升级上来\n  -r, --registry <url>  使用指定的 registry 地址安装依赖\n  --all                 升级所有的插件\n  --next                检查插件新版本时，包括 alpha/beta/rc 版本在内\n  -h, --help            输出帮助内容\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);