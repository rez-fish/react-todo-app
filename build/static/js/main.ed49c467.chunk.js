(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(6),l=a.n(c),s=(a(13),a(2)),r=(a(14),a(7)),i=function(e){var t=e.setInputText,a=e.todos,o=e.setTodos,c=e.inputText,l=e.setStatus;return n.a.createElement("form",null,n.a.createElement("input",{onChange:function(e){console.log(e.target),t(e.target.value)},type:"text",value:c,className:"todo-input"}),n.a.createElement("button",{className:"todo-button",type:"submit",onClick:function(e){e.preventDefault(),o([].concat(Object(r.a)(a),[{text:c,completed:!1,id:1e3*Math.random()}])),t("")}},n.a.createElement("i",{className:"fas fa-plus-square"})),n.a.createElement("div",{className:"select"},n.a.createElement("select",{onChange:function(e){l(e.target.value)},name:"todos",className:"filter-todo"},n.a.createElement("option",{value:"all"},"All"),n.a.createElement("option",{value:"completed"},"Completed"),n.a.createElement("option",{value:"uncompleted"},"Uncompleted"))))},u=a(4),m=function(e){var t=e.text,a=e.todo,o=e.todos,c=e.setTodos;return n.a.createElement("div",{className:"todo"},n.a.createElement("li",{className:"todo-item ".concat(a.completed?"completed":"")},t),n.a.createElement("button",{className:"complete-btn",onClick:function(){c(o.map((function(e){return e.id===a.id?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e})))}},n.a.createElement("i",{className:"fas fa-check"})),n.a.createElement("button",{onClick:function(){c(o.filter((function(e){return e.id!==a.id})))},className:"trash-btn"},n.a.createElement("i",{className:"fas fa-trash"})))},d=function(e){var t=e.todos,a=e.setTodos,o=e.filteredTodos;return n.a.createElement("div",{className:"todo-container"},n.a.createElement("ul",{className:"todo-list"},o.map((function(e){return n.a.createElement(m,{setTodos:a,text:e.text,key:e.id,todo:e,todos:t})}))))};var f=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(o.useState)([]),r=Object(s.a)(l,2),u=r[0],m=r[1],f=Object(o.useState)("all"),p=Object(s.a)(f,2),E=p[0],b=p[1],v=Object(o.useState)([]),h=Object(s.a)(v,2),N=h[0],T=h[1];return Object(o.useEffect)((function(){!function(){switch(E){case"completed":T(u.filter((function(e){return!0===e.completed})));break;case"uncompleted":T(u.filter((function(e){return!1===e.completed})));break;default:T(u)}}()}),[E,u]),n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("h1",null,"My Todo List")),n.a.createElement(i,{todos:u,setTodos:m,setInputText:c,inputText:a,setStatus:b}),n.a.createElement(d,{setTodos:m,todos:u,filteredTodos:N}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.ed49c467.chunk.js.map