(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{178:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request","aria-hidden":"true"}},[t._v("#")]),t._v(" Request")]),t._v(" "),e("p",[t._v("The request objects directly maps to the request item which is sent. The attributes in the script are read only.\nThe "),e("code",[t._v("add_header")]),t._v(" method allows to temporarily, i.e. until the request has finished, add headers to the request.")]),t._v(" "),e("h2",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name","aria-hidden":"true"}},[t._v("#")]),t._v(" name")]),t._v(" "),e("p",[t._v("Name of the request. The name is of type "),e("em",[t._v("string")]),t._v(".")]),t._v(" "),e("blockquote",[e("p",[t._v("This property is read only")])]),t._v(" "),e("h2",{attrs:{id:"uri"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uri","aria-hidden":"true"}},[t._v("#")]),t._v(" uri")]),t._v(" "),e("p",[t._v("URI of the request. The URI is of type "),e("em",[t._v("string")]),t._v(".")]),t._v(" "),e("blockquote",[e("p",[t._v("This property is read only")])]),t._v(" "),e("h2",{attrs:{id:"method"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#method","aria-hidden":"true"}},[t._v("#")]),t._v(" method")]),t._v(" "),e("p",[t._v("Method of the request. The method is of type "),e("em",[t._v("string")]),t._v(".")]),t._v(" "),e("blockquote",[e("p",[t._v("This property is read only")])]),t._v(" "),e("h2",{attrs:{id:"headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#headers","aria-hidden":"true"}},[t._v("#")]),t._v(" headers")]),t._v(" "),e("p",[t._v("Headers of request. The methods is an object with "),e("em",[t._v("string")]),t._v("-"),e("em",[t._v("string")]),t._v(" key-value pairs.")]),t._v(" "),e("blockquote",[e("p",[t._v("This property is read only")])]),t._v(" "),e("h2",{attrs:{id:"add-header-key-value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-header-key-value","aria-hidden":"true"}},[t._v("#")]),t._v(" add_header (key, value)")]),t._v(" "),e("p",[e("strong",[t._v("key")]),t._v(" a string")]),t._v(" "),e("p",[e("strong",[t._v("value")]),t._v(" a string")]),t._v(" "),e("p",[t._v("Temporarily adds a header to the request.")]),t._v(" "),e("blockquote",[e("p",[e("em",[e("strong",[t._v("Example:")])])])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("before_sending")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("request")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_header")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forgot"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"some header"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"abort"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abort","aria-hidden":"true"}},[t._v("#")]),t._v(" abort ()")]),t._v(" "),e("p",[t._v("Aborts the request sending action, i.e. the script and the actual request are aborted.")]),t._v(" "),e("blockquote",[e("p",[e("em",[e("strong",[t._v("Example:")])])])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("before_sending")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("request")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" res "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8000/important"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("abort")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Aborts the real request")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);a.default=r.exports}}]);