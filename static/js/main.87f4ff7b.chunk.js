(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{13:function(t,e,c){t.exports={header:"ToDo_header__35Y8d",status:"ToDo_status__1GWNN"}},19:function(t,e,c){t.exports={card:"Project_card__1uYxo",status:"Project_status__2mmb7"}},35:function(t,e,c){},36:function(t,e,c){},65:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),s=c(28),r=c.n(s),o=(c(35),c(6)),i=(c(36),c(7)),l=c(0);function j(t){return Object(l.jsx)("header",{className:"row bg-primary text-light py-3",children:Object(l.jsx)("nav",{className:"navbar navbar-light",children:Object(l.jsxs)("form",{className:"container-fluid justify-content-start",children:[Object(l.jsx)(i.b,{to:"/projects",children:Object(l.jsx)("button",{type:"button",className:"btn btn-outline-light me-2",children:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"})}),Object(l.jsx)(i.b,{to:"/todos",children:Object(l.jsx)("button",{type:"button",className:"btn btn-outline-light me-2",children:"\u0417\u0430\u0434\u0430\u0447\u0438"})}),Object(l.jsx)(i.b,{to:"/users",children:Object(l.jsx)("button",{type:"button",className:"btn btn-outline-light me-2",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),t.authNav]})})})}function d(){return Object(l.jsx)("footer",{className:"row justify-content-end bg-dark text-light py-3 mt-auto",children:Object(l.jsx)("div",{className:"col-3",children:Object(l.jsx)("span",{children:"\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b"})})})}function b(t){var e=t.location;return console.log(e),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435"}),Object(l.jsx)("p",{children:e.pathname})]})}var u=c(8),h=c.n(u),p=c(9);function x(t){var e=t.user;return Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title",children:e.username}),Object(l.jsxs)("p",{className:"card-text",children:["\u0418\u043c\u044f: ",e.first_name]}),Object(l.jsxs)("p",{className:"card-text",children:["\u0424\u0430\u043c\u0438\u043b\u0438\u044f: ",e.last_name]}),Object(l.jsxs)("p",{className:"card-text",children:["e-mail: ",e.email]})]})})})}var m=c(12);function O(t,e){return f.apply(this,arguments)}function f(){return(f=Object(p.a)(h.a.mark((function t(e,c){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.get("http://127.0.0.1:8000/api".concat(e),c);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var v=a.a.createContext(void 0);function N(){var t=Object(n.useContext)(v),e=Object(n.useState)([]),c=Object(o.a)(e,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(h.a.mark((function e(){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t){e.next=13;break}return(c={"Content-Type":"application/json"}).Authorization="Token ".concat(t),e.prev=3,e.next=6,O("/users",{headers:c});case 6:n=e.sent,s(n.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438\u0437 API");case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"}),Object(l.jsx)("div",{className:"row row-cols-2 row-cols-md-3 row-cols-lg-4 py-3 gy-3 g-3",children:a.map((function(t){return Object(l.jsx)(x,{user:t},"user_".concat(t.id))}))})]})}var g=c(2),y=c(19),w=c.n(y);function _(t){var e=t.project,c=Object(g.g)();return Object(l.jsx)("div",{className:"col",onClick:function(){return c.push("/project/".concat(e.id,"/todos"))},children:Object(l.jsx)("div",{className:"card ".concat(w.a.card),children:Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title",children:e.name}),Object(l.jsx)("p",{className:"card-text",children:e.description}),Object(l.jsx)("p",{className:"card-text",children:e.create_time}),Object(l.jsxs)("p",{className:"card-text",children:["\u0410\u0432\u0442\u043e\u0440\u044b: ",e.authors.join(", ")]}),Object(l.jsx)("div",{className:"".concat(w.a.status," ").concat("OPEN"===e.status?"bg-warning":"bg-success"),children:e.status})]})})})}function k(){var t=Object(n.useContext)(v),e=Object(n.useState)([]),c=Object(o.a)(e,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(h.a.mark((function e(){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t){e.next=13;break}return(c={"Content-Type":"application/json"}).Authorization="Token ".concat(t),e.prev=3,e.next=6,O("/projects",{headers:c});case 6:n=e.sent,s(n.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 API");case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432"}),Object(l.jsx)("div",{className:"row row-cols-2 row-cols-md-3 row-cols-lg-4 py-3 gy-3 g-3",children:a.map((function(t){return Object(l.jsx)(_,{project:t},"project_".concat(t.id))}))})]})}var C=c(13),T=c.n(C);function D(t){var e=t.todo,c=t.todoDelete;return Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("div",{className:"card ".concat(T.a.card),children:Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsxs)("div",{className:T.a.header,children:[Object(l.jsx)("h5",{className:"card-title",children:e.project}),Object(l.jsx)("div",{className:"".concat(T.a.status," ").concat(e.is_active?"bg-success":"bg-secondary"),children:e.is_active?"OPEN":"DONE"})]}),Object(l.jsx)("h6",{className:"card-title",children:e.name}),Object(l.jsx)("p",{className:"card-text",children:e.description}),Object(l.jsx)("p",{className:"card-text",children:e.create_time}),Object(l.jsx)("p",{className:"card-text",children:e.update_time}),Object(l.jsxs)("p",{className:"card-text",children:["\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c: ",e.author]}),e.is_active&&Object(l.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return c(e.id)},children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})})})}function F(t){var e=t.todoDelete,c=Object(n.useContext)(v),a=Object(g.h)().project_id,s=Object(n.useState)([]),r=Object(o.a)(s,2),j=r[0],d=r[1];return Object(n.useEffect)((function(){!function(){if(void 0!==c){var t={"Content-Type":"application/json"};t.Authorization="Token ".concat(c);var e="/todos";a&&(e+="?project=".concat(a)),O(e,{headers:t}).then((function(t){return d(t.results)}),(function(t){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 API")}))}}()}),[c,a]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"}),Object(l.jsx)("div",{className:"row row-cols-2 row-cols-md-3 row-cols-lg-4 py-3 gy-3 g-3",children:j.length>0?j.map((function(t){return Object(l.jsx)(D,{todo:t,todoDelete:e},"todo_".concat(t.id))})):Object(l.jsx)("h3",{children:"\u0415\u0449\u0451 \u043d\u0435\u0442 \u0437\u0430\u0434\u0430\u0447"})}),Object(l.jsx)("div",{className:"pb-3",children:Object(l.jsx)(i.b,{to:"/project/".concat(a,"/todos/create/"),children:Object(l.jsx)("button",{type:"button",className:"btn btn-primary",children:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"})})})]})}function P(t){var e=t.todoCreate,c=Object(g.h)().project_id,a=Object(n.useState)({name:"",description:"",author:16,project:c}),s=Object(o.a)(a,2),r=s[0],i=s[1];function j(t){r[t.target.name]=t.target.value,i(r)}return Object(l.jsx)("div",{className:"card",style:{width:"18rem"},children:Object(l.jsx)("div",{className:"card-body",children:Object(l.jsxs)("form",{onSubmit:function(t){return c=t,e(r),void c.preventDefault();var c},children:[Object(l.jsxs)("div",{className:"card-text",children:["\u041f\u0440\u043e\u0435\u043a\u0442 id: ",c]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"todoName",className:"form-label",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f todo:"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"todoName",name:"name",onChange:function(t){return j(t)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"todoDescription",className:"form-label",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u043b\u044f todo:"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"todoDescription",name:"description",onChange:function(t){return j(t)}})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})})}function S(t){var e=Object(n.useState)({username:"",password:""}),c=Object(o.a)(e,2),a=c[0],s=c[1];function r(t){a[t.target.name]=t.target.value,s(a)}return Object(l.jsx)("div",{className:"card",style:{width:"18rem"},children:Object(l.jsx)("div",{className:"card-body",children:Object(l.jsxs)("form",{onSubmit:function(e){return c=e,t.getToken(a.username,a.password),void c.preventDefault();var c},children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"inputUser",className:"form-label",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c:"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"inputUser",name:"username",onChange:function(t){return r(t)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"inputPassword",className:"form-label",children:"\u041f\u0430\u0440\u043e\u043b\u044c:"}),Object(l.jsx)("input",{type:"password",className:"form-control",id:"inputPassword",name:"password",onChange:function(t){return r(t)}})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})})})}var A=c(14),E=c(12),z=c.n(E);var I=function(){var t=Object(n.useState)(void 0),e=Object(o.a)(t,2),c=e[0],a=e[1];function s(t,e){var c={username:t,password:e};z.a.post("http://127.0.0.1:8000/api-token-auth/",c).then((function(t){var e;e=t.data.token,(new A.a).set("token",e),a(e)})).catch((function(t){return alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c")}))}function r(t){var e={"Content-Type":"application/json"};e.Authorization="Token ".concat(c),z.a.delete("http://127.0.0.1:8000/api/todos/".concat(t),{headers:e}).then((function(t){return window.history.go(0)})).catch((function(t){return console.log(t)}))}return Object(n.useEffect)((function(){return function(){var t=(new A.a).get("token");a(t)}()}),[]),Object(l.jsx)(v.Provider,{value:c,children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(j,{authNav:c?Object(l.jsx)("button",{type:"button",className:"btn btn-outline-light",onClick:function(){return a(void 0),void(new A.a).remove("token")},children:"\u0412\u044b\u0439\u0442\u0438"}):Object(l.jsx)(i.b,{to:"/login",children:Object(l.jsx)("button",{type:"button",className:"btn btn-outline-light",children:"\u0412\u043e\u0439\u0442\u0438"})})}),Object(l.jsxs)(g.d,{children:[Object(l.jsx)(g.b,{exact:!0,path:"/login",children:Object(l.jsx)(S,{getToken:function(t,e){return s(t,e)}})}),Object(l.jsx)(g.b,{exact:!0,path:"/users",children:Object(l.jsx)(N,{})}),Object(l.jsx)(g.b,{exact:!0,path:"/projects",children:Object(l.jsx)(k,{})}),Object(l.jsx)(g.b,{exact:!0,path:"/todos",children:Object(l.jsx)(F,{todoDelete:r})}),Object(l.jsx)(g.b,{exact:!0,path:"/project/:project_id/todos",children:Object(l.jsx)(F,{todoDelete:r})}),Object(l.jsx)(g.b,{exact:!0,path:"/project/:project_id/todos/create",children:Object(l.jsx)(P,{todoCreate:function(t){var e={"Content-Type":"application/json"};e.Authorization="Token ".concat(c),z.a.post("http://127.0.0.1:8000/api/todos/",t,{headers:e}).then((function(t){return window.history.go(-1)})).catch((function(t){return console.log(t)}))}})}),Object(l.jsx)(g.a,{from:"/",exact:!0,to:"/projects"}),Object(l.jsx)(g.b,{component:b})]}),Object(l.jsx)(d,{})]})})},B=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;c(t),n(t),a(t),s(t),r(t)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root")),B()}},[[65,1,2]]]);
//# sourceMappingURL=main.87f4ff7b.chunk.js.map