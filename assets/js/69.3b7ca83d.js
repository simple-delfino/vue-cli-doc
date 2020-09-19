(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{433:function(t,a,s){"use strict";s.r(a);var n=s(46),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"html-и-статические-ресурсы"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-и-статические-ресурсы"}},[t._v("#")]),t._v(" HTML и статические ресурсы")]),t._v(" "),s("h2",{attrs:{id:"html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),s("h3",{attrs:{id:"стартовый-файn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#стартовый-файn"}},[t._v("#")]),t._v(" Стартовый файл")]),t._v(" "),s("p",[t._v("Файл "),s("code",[t._v("public/index.html")]),t._v(" — шаблон, который будет обрабатываться "),s("a",{attrs:{href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("html-webpack-plugin"),s("OutboundLink")],1),t._v(". На этапе сборки, ссылки на все ресурсы будут внедряться автоматически. Кроме того, Vue CLI автоматически внедряет подсказки для ресурсов ("),s("code",[t._v("preload/prefetch")]),t._v("), ссылки на манифест/иконки (когда используется PWA-плагин), и ссылки на ресурсы для файлов JavaScript и CSS, созданных во время сборки.")]),t._v(" "),s("h3",{attrs:{id:"интерпоnяции"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#интерпоnяции"}},[t._v("#")]),t._v(" Интерполяции")]),t._v(" "),s("p",[t._v("Поскольку стартовый файл используется в качестве шаблона, можно использовать "),s("a",{attrs:{href:"https://lodash.com/docs/4.17.10#template",target:"_blank",rel:"noopener noreferrer"}},[t._v("синтаксис шаблонов lodash"),s("OutboundLink")],1),t._v(" для интерполяции значений в нём:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("<%= VALUE %>")]),t._v(" для неэкранированной подстановки;")]),t._v(" "),s("li",[s("code",[t._v("<%- VALUE %>")]),t._v(" для экранированного HTML-кода;")]),t._v(" "),s("li",[s("code",[t._v("<% expression %>")]),t._v(" для потоков управления JavaScript.")])]),t._v(" "),s("p",[t._v("В дополнение к "),s("a",{attrs:{href:"https://github.com/jantimon/html-webpack-plugin#writing-your-own-templates",target:"_blank",rel:"noopener noreferrer"}},[t._v("значениям по умолчанию, предоставляемым "),s("code",[t._v("html-webpack-plugin")]),s("OutboundLink")],1),t._v(", все "),s("RouterLink",{attrs:{to:"/ru/guide/mode-and-env.html#испоnьзование-переменных-окружения-в-кnиентском-коде"}},[t._v("переменные окружения в клиентском коде")]),t._v(" также доступны напрямую. Например, чтобы использовать значение "),s("code",[t._v("BASE_URL")]),t._v(":")],1),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("icon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<%= BASE_URL %>favicon.ico"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("См. также:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ru/config/#publicpath"}},[t._v("publicPath")])],1)]),t._v(" "),s("h3",{attrs:{id:"preload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preload"}},[t._v("#")]),t._v(" Preload")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v('<link rel="preload">')]),s("OutboundLink")],1),t._v(" — это подсказки для браузера, указывающие на ресурсы, которые необходимо загрузить в первую очередь. Запросы на такие ресурсы будут отправлены ещё на этапе загрузки страницы, до начала её рендеринга.")]),t._v(" "),s("p",[t._v("По умолчанию приложение Vue CLI автоматически генерирует preload-подсказки для всех файлов, которые необходимы при первоначальном рендеринге вашего приложения.")]),t._v(" "),s("p",[t._v("Эти подсказки внедряются "),s("a",{attrs:{href:"https://github.com/vuejs/preload-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vue/preload-webpack-plugin"),s("OutboundLink")],1),t._v(" и могут быть изменены / удалены с помощью "),s("code",[t._v("chainWebpack")]),t._v(" через "),s("code",[t._v("config.plugin('preload')")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"prefetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prefetch"}},[t._v("#")]),t._v(" Prefetch")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v('<link rel="prefetch">')]),s("OutboundLink")],1),t._v(" — это подсказки для ресурсов, которые сообщают браузеру предварительно загрузить контент, который пользователь может посетить в ближайшем будущем, пока браузер находится в режиме ожидания после загрузки страницы.")]),t._v(" "),s("p",[t._v("По умолчанию приложение Vue CLI автоматически генерирует prefetch-подсказки для всех JavaScript-файлов, сгенерированных для асинхронных фрагментов (в результате "),s("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports",target:"_blank",rel:"noopener noreferrer"}},[t._v("разделения кода с помощью динамических импортов "),s("code",[t._v("import()")]),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("p",[t._v("Эти подсказки внедряются "),s("a",{attrs:{href:"https://github.com/vuejs/preload-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vue/preload-webpack-plugin"),s("OutboundLink")],1),t._v(" и могут быть изменены / удалены с помощью "),s("code",[t._v("chainWebpack")]),t._v(" через "),s("code",[t._v("config.plugin('prefetch')")]),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Примечание для многостраничных конфигураций")]),t._v(" "),s("p",[t._v("При использовании многостраничной конфигурации имя плагина нужно изменить в соответствии со структурой "),s("code",[t._v("prefetch-{pagename}")]),t._v(", например "),s("code",[t._v("prefetch-app")]),t._v(".")])]),t._v(" "),s("p",[t._v("Например:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// удаляем prefetch плагин:")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prefetch'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ИЛИ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// изменяем его настройки:")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prefetch'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fileBlacklist "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fileBlacklist "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fileBlacklist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/myasyncRoute(.)+?\\.js$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" options\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Когда prefetch плагин отключён, вы можете вручную указывать необходимые фрагменты для prefetch с помощью инлайновых комментариев для webpack:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpackPrefetch: true */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./someAsyncComponent.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Webpack добавит prefetch-ссылки когда родительский фрагмент будет загружен.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Совет")]),t._v(" "),s("p",[t._v("Использование prefetch ссылок нагружает канал связи. Если у вас большое приложение с множеством асинхронных фрагментов (chunks) и ваши пользователи в основном используют мобильные устройства (а значит, чувствительны к использованию канала связи), вы можете пожелать отключить использование prefetch ссылок и вручную выбирать фрагменты для prefetch.")])]),t._v(" "),s("h2",{attrs:{id:"откnючение-генерации-index-html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#откnючение-генерации-index-html"}},[t._v("#")]),t._v(" Отключение генерации index.html")]),t._v(" "),s("p",[t._v("При использовании Vue CLI с существующим бэкендом, вам может потребоваться отключить генерацию "),s("code",[t._v("index.html")]),t._v(", чтобы сгенерированные ресурсы могли быть использованы с другим документом по умолчанию. Для этого добавьте в файл "),s("RouterLink",{attrs:{to:"/ru/config/#vue-config-js"}},[s("code",[t._v("vue.config.js")])]),t._v(" следующее:")],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// отключение хэшей в именах файлов")]),t._v("\n  filenameHashing"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// удаление плагинов webpack связанных с HTML")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'preload'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prefetch'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Однако, это не рекомендуется потому что:")]),t._v(" "),s("ul",[s("li",[t._v("Жёстко заданные имена файлов затрудняют реализацию эффективного управления кэшированием.")]),t._v(" "),s("li",[t._v("Жёстко заданные имена файлов плохо работают с разделением кода, что генерирует дополнительные файлы JavaScript с различными именами файлов.")]),t._v(" "),s("li",[t._v("Жёстко заданные имена файлов не работают с "),s("RouterLink",{attrs:{to:"/ru/guide/browser-compatibility.html#современный-режим"}},[t._v("современным режимом")]),t._v(".")],1)]),t._v(" "),s("p",[t._v("Вместо этого вы должны использовать опцию "),s("RouterLink",{attrs:{to:"/ru/config/#indexpath"}},[t._v("indexPath")]),t._v(", чтобы указать сгенерированный HTML в качестве шаблона вашего фреймворка на стороне сервера.")],1),t._v(" "),s("h3",{attrs:{id:"создание-многостраничного-приnожения"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#создание-многостраничного-приnожения"}},[t._v("#")]),t._v(" Создание многостраничного приложения")]),t._v(" "),s("p",[t._v("Не каждое приложение должно быть одностраничным (SPA). Vue CLI поддерживает создание многостраничных приложений с помощью "),s("RouterLink",{attrs:{to:"/ru/config/#pages"}},[t._v("опции "),s("code",[t._v("pages")]),t._v(" в "),s("code",[t._v("vue.config.js")])]),t._v(". Код приложения будет эффективно переиспользоваться между его частями для оптимизации скорости загрузки.")],1),t._v(" "),s("h2",{attrs:{id:"обработка-статических-ресурсов"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#обработка-статических-ресурсов"}},[t._v("#")]),t._v(" Обработка статических ресурсов")]),t._v(" "),s("p",[t._v("Статические ресурсы могут обрабатываться двумя различными способами:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Импорт в JavaScript или указание ссылки на них в шаблоне/CSS с использованием относительных путей. Такие ресурсы будут обрабатываться webpack.")])]),t._v(" "),s("li",[s("p",[t._v("Расположение в каталоге "),s("code",[t._v("public")]),t._v(" и добавление ссылки на них с использованием абсолютных путей. Такие ресурсы просто копируются и не обрабатываются webpack.")])])]),t._v(" "),s("h3",{attrs:{id:"импорты-относитеnьных-путей"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#импорты-относитеnьных-путей"}},[t._v("#")]),t._v(" Импорты относительных путей")]),t._v(" "),s("p",[t._v("Если вы ссылаетесь на статический ресурс, используя относительный путь (должен начинаться с "),s("code",[t._v(".")]),t._v(") внутри JavaScript, CSS или "),s("code",[t._v("*.vue")]),t._v(" файлов, то он будет добавлен в дерево зависимостей webpack. В процессе компиляции все URL ресурсов, такие как "),s("code",[t._v('<img src="...">')]),t._v(", "),s("code",[t._v("background: url(...)")]),t._v(" и CSS "),s("code",[t._v("@import")]),t._v(" будут обрабатываться "),s("strong",[t._v("как зависимости модуля")]),t._v(".")]),t._v(" "),s("p",[t._v("Например, "),s("code",[t._v("url(./image.png)")]),t._v(" будет преобразован в "),s("code",[t._v("require('./image.png')")]),t._v(", а тег шаблона")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./image.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("будет скомпилирован в:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" attrs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./image.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Внутри используется "),s("code",[t._v("file-loader")]),t._v(" для определения конечного расположения файла с хэшем версии и правильный путь относительно корня, а также "),s("code",[t._v("url-loader")]),t._v(" для инлайн-встраивания ресурсов, чей размер меньше 4 КБайт, чтобы уменьшить количество HTTP-запросов к серверу.")]),t._v(" "),s("p",[t._v("Изменить размер можно через "),s("RouterLink",{attrs:{to:"/ru/config/#chainwebpack"}},[t._v("chainWebpack")]),t._v(". Например, чтобы установить лимит в 10 КБайт:")],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'images'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" limit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10240")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"правиnа-преобразования-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#правиnа-преобразования-url"}},[t._v("#")]),t._v(" Правила преобразования URL")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Если в URL абсолютный путь (например, "),s("code",[t._v("/images/foo.png")]),t._v("), он будет оставлен как есть.")])]),t._v(" "),s("li",[s("p",[t._v("Если URL начинается с "),s("code",[t._v(".")]),t._v(", он будет интерпретироваться как запрос модуля относительно текущего каталога и разрешаться на основе структуры каталогов вашей файловой системы.")])]),t._v(" "),s("li",[s("p",[t._v("Если URL начинается с "),s("code",[t._v("~")]),t._v(", то всё что после него будет интерпретироваться как запрос модуля. Это означает, что вы можете ссылаться на ресурсы даже внутри "),s("code",[t._v("node_modules")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("~some-npm-package/foo.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Если URL начинается с "),s("code",[t._v("@")]),t._v(", то он также будет интерпретироваться как запрос модуля. Это удобно, потому что Vue CLI по умолчанию добавляет псевдоним "),s("code",[t._v("@")]),t._v(" для "),s("code",[t._v("<projectRoot>/src")]),t._v(". "),s("strong",[t._v("(только в шаблонах)")])])])]),t._v(" "),s("h3",{attrs:{id:"катаnог-public"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#катаnог-public"}},[t._v("#")]),t._v(" Каталог "),s("code",[t._v("public")])]),t._v(" "),s("p",[t._v("Любые статические ресурсы в каталоге "),s("code",[t._v("public")]),t._v(" просто копируются в каталог итоговой сборки и не будут обрабатываться webpack. Вы должны ссылаться на них, используя абсолютные пути.")]),t._v(" "),s("p",[t._v("Обратите внимание, что мы рекомендуем импортировать ресурсы как часть дерева зависимостей модуля, чтобы они обрабатывались webpack со следующими преимуществами:")]),t._v(" "),s("ul",[s("li",[t._v("Скрипты и стили минифицируются и объединяются, уменьшая количество сетевых запросов.")]),t._v(" "),s("li",[t._v("Недостающие файлы вызывают ошибку сборки вместо ошибок 404 для пользователей.")]),t._v(" "),s("li",[t._v("Имена файлов в результате будут с хэшем, поэтому не нужно беспокоиться о том, что браузеры используют старые версии из кэша.")])]),t._v(" "),s("p",[t._v("Каталог "),s("code",[t._v("public")]),t._v(" предоставляется для "),s("strong",[t._v("крайних случаев")]),t._v(", поэтому, когда вы ссылаетесь на него по абсолютному пути, необходимо учитывать, где будет опубликовано ваше приложение. Если публикуется не в корне домена, нужно указать префикс для URL-адресов в "),s("RouterLink",{attrs:{to:"/ru/config/#publicpath"}},[t._v("publicPath")]),t._v(":")],1),t._v(" "),s("ul",[s("li",[s("p",[t._v("В "),s("code",[t._v("public/index.html")]),t._v(" или других HTML-файлах, используемых "),s("code",[t._v("html-webpack-plugin")]),t._v(" в качестве шаблонов, необходимо добавлять префикс в ссылки с помощью "),s("code",[t._v("<%= BASE_URL %>")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("icon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<%= BASE_URL %>favicon.ico"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("В шаблонах потребуется сначала передать "),s("code",[t._v("BASE_URL")]),t._v(" в компонент:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    publicPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_URL")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("А затем использовать в шаблоне:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("`${publicPath}my-image.png`"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"когда-испоnьзовать-катаnог-public"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#когда-испоnьзовать-катаnог-public"}},[t._v("#")]),t._v(" Когда использовать каталог "),s("code",[t._v("public")])]),t._v(" "),s("ul",[s("li",[t._v("Вам требуется файл с определённым именем в каталоге сборки.")]),t._v(" "),s("li",[t._v("У вас тысячи изображений и необходимо динамически ссылаться на их пути.")]),t._v(" "),s("li",[t._v("Какая-нибудь библиотека несовместима с Webpack и у вас нет другого варианта, кроме как подключения её через тег "),s("code",[t._v("<script>")]),t._v(".")])])])}),[],!1,null,null,null);a.default=e.exports}}]);