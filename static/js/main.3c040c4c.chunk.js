(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{13:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_Learn_ReactJS_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_const_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),initialState={val:"",res:0,isEval:!1},calReducer=function calReducer(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,action=arguments.length>1?arguments[1]:void 0;switch(action.type){case _const_index__WEBPACK_IMPORTED_MODULE_1__.a:if("0"===state.val&&(state.val=state.val.substr(1)),!0===state.isEval)return state.val=action.val,state.isEval=!1,Object(D_Learn_ReactJS_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state);var reg=/\+|-|\*|\//;return reg.test(state.val[state.val.length-1])&&reg.test(action.val)?Object(D_Learn_ReactJS_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state):Object(D_Learn_ReactJS_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_Learn_ReactJS_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{val:state.val+action.val});case _const_index__WEBPACK_IMPORTED_MODULE_1__.d:"0"===state.val[0]&&(state.val=state.val.substr(1));try{eval(state.val)}catch(e){return Object(D_Learn_ReactJS_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_Learn_ReactJS_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{res:"Syntax Error",isEval:!0})}return Object(D_Learn_ReactJS_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_Learn_ReactJS_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{res:eval(state.val),isEval:!0});case _const_index__WEBPACK_IMPORTED_MODULE_1__.c:return Object(D_Learn_ReactJS_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_Learn_ReactJS_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{val:1===state.val.length?"0":state.val.substr(0,state.val.length-1)});case _const_index__WEBPACK_IMPORTED_MODULE_1__.b:return Object(D_Learn_ReactJS_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_Learn_ReactJS_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{val:"",res:0});default:return state}};__webpack_exports__.a=calReducer},18:function(e,_,t){},19:function(e,_,t){},20:function(e,_,t){},28:function(e,_,t){},29:function(e,_,t){"use strict";t.r(_);var a=t(0),c=t.n(a),l=t(6),n=t.n(l),r=(t(18),t(19),t(11)),s=(t(20),t(1));function o(e){var _=Object(a.useState)(e.val),t=Object(r.a)(_,2),c=t[0],l=t[1],n=Object(a.useState)(e.res),o=Object(r.a)(n,2),u=o[0],b=o[1];return Object(a.useEffect)((function(){l(e.val),b(e.res)})),Object(s.jsxs)("div",{className:"show-val",children:[Object(s.jsx)("p",{children:c}),Object(s.jsx)("p",{children:u})]})}var u=t(5),b=(t(28),t(3));var d=Object(u.b)(null,(function(e){return{addSymbol:function(_){var t;e((t=_,{type:b.a,val:t}))},even:function(){e({type:b.d})},deleteSymbol:function(){e({type:b.c})},clearSymbol:function(){e({type:b.b})}}}))((function(e){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"col-value",children:[[0,".",1,2,3,4,5,6,7,8,9].map((function(_,t){return Object(s.jsx)("button",{value:_,className:"value",onClick:function(){return e.addSymbol(_+"")},children:_},t)})),Object(s.jsx)("button",{onClick:function(){return e.clearSymbol()},className:"value",id:"clear-symbol",children:" AC "}),Object(s.jsx)("button",{onClick:function(){return e.deleteSymbol()},className:"value",id:"delete-symbol",children:" DEL "}),Object(s.jsx)("button",{value:"%",className:"value",onClick:function(){return e.addSymbol("%")},children:"%"})]}),Object(s.jsxs)("div",{className:"col-symbol",children:[["+","-","*","/"].map((function(_,t){return Object(s.jsx)("button",{value:_,className:"symbol",onClick:function(){return e.addSymbol(_)},children:_},t)})),Object(s.jsx)("button",{onClick:function(){return e.even()},className:"symbol",value:"=",children:" = "})]})]})}));var i=Object(u.b)((function(e,_){return{cal:e.cal}}),null)((function(e){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o,{val:e.cal.val,res:e.cal.res}),Object(s.jsx)(d,{})]})})),p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(_){var t=_.getCLS,a=_.getFID,c=_.getFCP,l=_.getLCP,n=_.getTTFB;t(e),a(e),c(e),l(e),n(e)}))},m=t(4),O=t(13),j=Object(m.b)({cal:O.a}),E=Object(m.c)(j);n.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(u.a,{store:E,children:Object(s.jsx)(i,{})})}),document.getElementById("root")),p()},3:function(e,_,t){"use strict";t.d(_,"a",(function(){return a})),t.d(_,"d",(function(){return c})),t.d(_,"c",(function(){return l})),t.d(_,"b",(function(){return n}));var a="ADD_SYMBOL",c="EVEN",l="DELETE_SYMBOL",n="CLEAR_SYMBOL"}},[[29,1,2]]]);
//# sourceMappingURL=main.3c040c4c.chunk.js.map