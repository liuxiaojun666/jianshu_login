(this.webpackJsonpjianshu=this.webpackJsonpjianshu||[]).push([[0],{102:function(e,a,s){},142:function(e,a,s){},239:function(e,a,s){"use strict";s.r(a);var t=s(0),r=s.n(t),n=s(25),c=s.n(n),i=(s(142),s(82)),o=s(35),l=s(132),j=s(242),b=s(243),u=s(244),d=s(131),m=s(245),p=s(246),O=(s(102),s(70)),h=s.n(O),x=s(9),f={wrapperCol:{offset:4,span:16}},g={wrapperCol:{offset:4,span:16}},w={email:[{required:!0,message:"\u8bf7\u8f93\u5165\u90ae\u7bb1!"}],Password:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}]};function y(){var e=r.a.useState(!1),a=Object(i.a)(e,2),s=a[0],t=a[1],n=localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"));return n&&n.remember||(n=""),Object(x.jsx)("div",{children:Object(x.jsxs)(j.a,Object(o.a)(Object(o.a)({},f),{},{name:"basic",initialValues:n,onFinish:function(e){console.log("Success:",e);var a={email:e.email,password:e.password};t(!0),h.a.post("https://conduit.productionready.io/api/users/login",{user:a}).then((function(){localStorage.setItem("user",JSON.stringify(Object(o.a)({remember:e.remember},a))),l.b.success("\u767b\u5f55\u6210\u529f"),t(!1)})).catch((function(e){t(!1),l.b.error(JSON.stringify(e.response.data.errors))}))},children:[Object(x.jsx)(j.a.Item,{name:"email",rules:w.email,children:Object(x.jsx)(b.a,{prefix:Object(x.jsx)(m.a,{}),placeholder:"\u624b\u673a\u53f7\u6216\u90ae\u7bb1"})}),Object(x.jsx)(j.a.Item,{name:"password",rules:w.Password,children:Object(x.jsx)(b.a.Password,{prefix:Object(x.jsx)(p.a,{}),placeholder:"\u5bc6\u7801"})}),Object(x.jsxs)(j.a.Item,Object(o.a)(Object(o.a)({},g),{},{children:[Object(x.jsx)(j.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(x.jsx)(u.a,{children:"\u8bb0\u4f4f\u6211"})}),Object(x.jsx)("span",{style:{float:"right"},children:"\u767b\u5f55\u9047\u5230\u95ee\u9898?"})]})),Object(x.jsx)(j.a.Item,Object(o.a)(Object(o.a)({},g),{},{name:"loginBtn",children:Object(x.jsxs)(d.a,{type:"primary",shape:"round",htmlType:"submit",size:"large",block:!0,style:{background:"#3194d0"},children:["\u767b\u5f55",s&&Object(x.jsx)("span",{className:"loading",children:"..."})]})}))]}))})}var v=s(247),I={wrapperCol:{offset:4,span:16}},S={wrapperCol:{offset:4,span:16}},k={username:[{required:!0,message:"\u8bf7\u8f93\u5165\u6635\u79f0!"}],email:[{required:!0,message:"\u8bf7\u8f93\u5165\u90ae\u7bb1!"}],Password:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801!"}]};function N(){return Object(x.jsx)("div",{children:Object(x.jsxs)(j.a,Object(o.a)(Object(o.a)({},I),{},{name:"basic",onFinish:function(e){var a={username:e.username,email:e.email,password:e.password};h.a.post("https://conduit.productionready.io/api/users",{user:a}).then((function(){l.b.success("\u6ce8\u518c\u6210\u529f")})).catch((function(e){l.b.error(e)}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(x.jsx)(j.a.Item,{name:"username",rules:k.username,children:Object(x.jsx)(b.a,{prefix:Object(x.jsx)(m.a,{}),placeholder:"\u4f60\u7684\u6635\u79f0"})}),Object(x.jsx)(j.a.Item,{name:"email",rules:k.email,children:Object(x.jsx)(b.a,{prefix:Object(x.jsx)(v.a,{}),placeholder:"\u90ae\u7bb1"})}),Object(x.jsx)(j.a.Item,{name:"password",rules:k.Password,children:Object(x.jsx)(b.a.Password,{prefix:Object(x.jsx)(p.a,{}),placeholder:"\u8bbe\u7f6e\u5bc6\u7801"})}),Object(x.jsx)(j.a.Item,Object(o.a)(Object(o.a)({},S),{},{name:"loginBtn",children:Object(x.jsx)(d.a,{type:"primary",shape:"round",htmlType:"submit",size:"large",block:!0,style:{background:"#42c02e",border:"none"},children:"\u6ce8\u518c"})}))]}))})}var P=s(241),C=s(87),q=s(22);var F=function(){var e=Object(t.useState)(0),a=Object(i.a)(e,2),s=a[0],r=a[1];function n(e){r(e)}return Object(t.useEffect)((function(){"/signup"===window.location.pathname&&r(1)}),[]),Object(x.jsx)("div",{className:"login",children:Object(x.jsx)(P.a,{children:Object(x.jsxs)(C.a,{basename:"jianshu_login",children:[Object(x.jsxs)("div",{className:"sign-in-sing-up",children:[Object(x.jsx)(C.b,{to:"/login",className:0===s?"current-router":"",onClick:function(){return n(0)},children:"\u767b\u5f55"}),Object(x.jsx)("b",{children:"\xb7"}),Object(x.jsx)(C.b,{to:"/signup",className:1===s?"current-router":"",onClick:function(){return n(1)},children:"\u6ce8\u518c"})]}),Object(x.jsx)(q.a,{path:"/",component:y,exact:!0}),Object(x.jsx)(q.a,{path:"/login",component:y}),Object(x.jsx)(q.a,{path:"/signup",component:N})]})})})},J=s(130),z=s.n(J),B=s(97),E=s.n(B),T=(s(233),s(15));s(234);E.a.locale("zh-cn"),c.a.render(Object(x.jsx)(T.a,{locale:z.a,children:Object(x.jsx)(F,{})}),document.getElementById("root"))}},[[239,1,2]]]);
//# sourceMappingURL=main.ff7f8e6a.chunk.js.map