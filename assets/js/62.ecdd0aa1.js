(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{428:function(e,v,_){"use strict";_.r(v);var t=_(46),r=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"введение"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#введение"}},[e._v("#")]),e._v(" Введение")]),e._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[e._v("Предупреждение")]),e._v(" "),_("p",[e._v("Эта документация для "),_("code",[e._v("@vue/cli")]),e._v(". Для старой версии "),_("code",[e._v("vue-cli")]),e._v(", см. "),_("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/v2#vue-cli--",target:"_blank",rel:"noopener noreferrer"}},[e._v("здесь"),_("OutboundLink")],1),e._v(".")])]),e._v(" "),_("p",[e._v("Vue CLI — полноценная система для быстрой разработки на Vue.js, предоставляющая:")]),e._v(" "),_("ul",[_("li",[e._v("Интерактивное создание проекта через "),_("code",[e._v("@vue/cli")]),e._v(".")]),e._v(" "),_("li",[e._v("Быстрое прототипирование через "),_("code",[e._v("@vue/cli")]),e._v(" + "),_("code",[e._v("@vue/cli-service-global")]),e._v(" без конфигурации.")]),e._v(" "),_("li",[e._v("Runtime-зависимость ("),_("code",[e._v("@vue/cli-service")]),e._v(") предоставляющая:\n"),_("ul",[_("li",[e._v("Возможность обновления;")]),e._v(" "),_("li",[e._v("Создана поверх webpack, с оптимальными настройками по умолчанию;")]),e._v(" "),_("li",[e._v("Настройка с помощью конфигурационного файла в проекте;")]),e._v(" "),_("li",[e._v("Расширяемость плагинами")])])]),e._v(" "),_("li",[e._v("Большая коллекция официальных плагинов, интегрирующих лучшие инструменты экосистемы фронтенда.")]),e._v(" "),_("li",[e._v("Полноценный графический пользовательский интерфейс для создания и управления проектами Vue.js.")])]),e._v(" "),_("p",[e._v("Vue CLI стремится стать стандартным инструментарием для экосистемы Vue. Он обеспечивает бесперебойную работу различных инструментов сборки, устанавливает разумные значения по умолчанию, поэтому вы сможете сосредоточиться на разработке приложения, а не проводить дни за его настройкой. В то же время, остаётся гибкость настройки конфигурации каждого инструмента без необходимости извлечения конфигурации в отдельный файл.")]),e._v(" "),_("h2",{attrs:{id:"компоненты-системы"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#компоненты-системы"}},[e._v("#")]),e._v(" Компоненты системы")]),e._v(" "),_("p",[e._v("Vue CLI состоит из нескольких составных частей — если вы посмотрите на "),_("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("исходный код"),_("OutboundLink")],1),e._v(", то обнаружите, что это монорепозиторий, в котором несколько отдельно опубликованных пакетов.")]),e._v(" "),_("h3",{attrs:{id:"cli"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),_("p",[e._v("CLI ("),_("code",[e._v("@vue/cli")]),e._v(") — это npm-пакет, устанавливаемый глобально и предоставляющий команду "),_("code",[e._v("vue")]),e._v(" в терминале. Он позволяет быстро создать новый проект командой "),_("code",[e._v("vue create")]),e._v(", или мгновенно прототипировать ваши новые идеи через "),_("code",[e._v("vue serve")]),e._v(". Также можно управлять проектами в графическом интерфейсе через "),_("code",[e._v("vue ui")]),e._v(". Мы рассмотрим, что он может делать, в следующих разделах руководства.")]),e._v(" "),_("h3",{attrs:{id:"сервис-cli"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#сервис-cli"}},[e._v("#")]),e._v(" Сервис CLI")]),e._v(" "),_("p",[e._v("Сервис CLI ("),_("code",[e._v("@vue/cli-service")]),e._v(") — это зависимость для разработки. Это npm-пакет, устанавливаемый локально в каждый проект, создаваемый с помощью "),_("code",[e._v("@vue/cli")]),e._v(".")]),e._v(" "),_("p",[e._v("Сервис CLI построен на основе "),_("a",{attrs:{href:"http://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack"),_("OutboundLink")],1),e._v(" и "),_("a",{attrs:{href:"https://github.com/webpack/webpack-dev-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack-dev-server"),_("OutboundLink")],1),e._v(". Он содержит:")]),e._v(" "),_("ul",[_("li",[e._v("Ядро сервиса, которое загружает другие плагины для CLI;")]),e._v(" "),_("li",[e._v("Внутреннюю конфигурацию webpack, оптимизированную для большинства приложений;")]),e._v(" "),_("li",[e._v("Бинарный файл "),_("code",[e._v("vue-cli-service")]),e._v(" внутри проекта, который позволяет использовать команды "),_("code",[e._v("serve")]),e._v(", "),_("code",[e._v("build")]),e._v(" и "),_("code",[e._v("inspect")]),e._v(".")])]),e._v(" "),_("p",[e._v("Если вы знакомы с "),_("a",{attrs:{href:"https://github.com/facebookincubator/create-react-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("create-react-app"),_("OutboundLink")],1),e._v(", то "),_("code",[e._v("@vue/cli-service")]),e._v(" похож на "),_("code",[e._v("react-scripts")]),e._v(", хотя набор возможностей и отличается.")]),e._v(" "),_("p",[e._v("В разделе "),_("RouterLink",{attrs:{to:"/ru/guide/cli-service.html"}},[e._v("Сервис CLI")]),e._v(" всё это разбирается подробнее.")],1),e._v(" "),_("h3",{attrs:{id:"пnагины-дnя-cli"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#пnагины-дnя-cli"}},[e._v("#")]),e._v(" Плагины для CLI")]),e._v(" "),_("p",[e._v("Плагины для CLI — это npm-пакеты, которые предоставляют дополнительные возможности для ваших проектов, создаваемых через Vue CLI, такие как транспиляция Babel / TypeScript, интеграция ESLint, модульное тестирование, и E2E-тестирование. Легко определять плагины для Vue CLI, поскольку их имена начинаются с "),_("code",[e._v("@vue/cli-plugin-")]),e._v(" (для встроенных плагинов) или "),_("code",[e._v("vue-cli-plugin-")]),e._v(" (для плагинов сообщества).")]),e._v(" "),_("p",[e._v("Когда вы запускаете бинарный файл "),_("code",[e._v("vue-cli-service")]),e._v(" внутри проекта, он автоматически определяет и загружает все плагины CLI, указанные в файле "),_("code",[e._v("package.json")]),e._v(" проекта.")]),e._v(" "),_("p",[e._v("Плагины могут добавляться как часть проекта на этапе его создания или их можно добавить в проект позднее. Они могут быть также сгруппированы в переиспользуемые пресеты настроек. Мы обсудим их подробнее в разделе "),_("RouterLink",{attrs:{to:"/ru/guide/plugins-and-presets.html"}},[e._v("плагины и пресеты")]),e._v(".")],1)])}),[],!1,null,null,null);v.default=r.exports}}]);