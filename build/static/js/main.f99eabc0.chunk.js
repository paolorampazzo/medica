(this.webpackJsonpdashrisk=this.webpackJsonpdashrisk||[]).push([[0],{31:function(n,e,t){n.exports=t(55)},55:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(25),i=t.n(o),c=t(5),u=t.n(c),l=t(8),s=t(4),d=t(12),p=t(6),b=t(30),f=t(2),m=t(3);function g(){var n=Object(f.a)(["\n  width: 360px;\n\n  position: relative;\n\n  padding: 16px 30px 16px 16px;\n\n  border-radius: 10px;\n\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n\n  display: flex;\n\n  & + div {\n    margin-top: 8px;\n  }\n\n  background: #ebf8ff;\n  color: #3172b7;\n\n  > svg {\n    margin: 4px 12px 0 0;\n  }\n\n  div {\n    flex: 1;\n\n    p {\n      margin-top: 4px;\n      font-size: 14px;\n      opacity: 0.8;\n      line-height: 20px;\n    }\n  }\n\n  button {\n    position: absolute;\n    right: 16px;\n    top: 19px;\n    opacity: 0.8;\n    border: 0;\n    background: transparent;\n    color: inherit;\n  }\n"]);return g=function(){return n},n}function x(){var n=Object(f.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n\n  padding: 30px;\n\n  overflow: hidden;\n"]);return x=function(){return n},n}var v=m.b.div(x()),h=m.b.div(g()),E=function(n){var e=n.messages,t=w().removeToast;return a.a.createElement(v,null,e.map((function(n){return a.a.createElement(h,{key:n.id},"success"!==n.type&&a.a.createElement(p.a,{size:20}),a.a.createElement("div",null,a.a.createElement("strong",null,n.title),n.description&&a.a.createElement("p",null,n.description)),a.a.createElement("button",{onClick:function(){return t(n.id)},type:"button"},a.a.createElement(p.d,{size:18})))})))},O=Object(r.createContext)({}),j=function(n){var e=n.children,t=Object(r.useState)([]),o=Object(s.a)(t,2),i=o[0],c=o[1],u=Object(r.useCallback)((function(n){var e={id:n.id,type:n.type,title:n.title,description:n.description};c((function(n){return[].concat(Object(b.a)(n),[e])}))}),[]),l=Object(r.useCallback)((function(n){c((function(e){return e.filter((function(e){return e.id!==n}))}))}),[]);return a.a.createElement(O.Provider,{value:{addToast:u,removeToast:l}},e,a.a.createElement(E,{messages:i}))};function w(){var n=Object(r.useContext)(O);if(!n)throw new Error("usetoast must be used in context");return n}var k=t(11);function y(){var n=Object(f.a)(["\n  width: 100%;\n  max-width: 700px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  form {\n    margin: 80px 0;\n    width: 340px;\n    text-align: center;\n\n    h1 {\n      margin-bottom: 24px;\n      color: #225588;\n    }\n\n    input {\n      background: transparent;\n      /* border-radius: 10px; */\n      border: 2px solid #445566;\n      color: #fff;\n\n      margin-left: 10px;\n      /* padding: 16px; */\n      width: 100%;\n\n      & + input {\n        margin-top: 8px;\n      }\n\n      ::placeholder {\n        color: #fff;\n      }\n    }\n\n    button {\n      background: #225588;\n      height: 56px;\n      border-radius: 10px;\n      border: 0;\n      padding: 0 16px;\n      color: #fff;\n      width: 100%;\n\n      font-weight: bold;\n\n      margin-top: 16px;\n      transition: background-color 0.2;\n\n      &:hover {\n        background: ",";\n      }\n    }\n  }\n"]);return y=function(){return n},n}function S(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  background: #445566;\n  border-radius: 10px;\n  border: 2px solid #445566;\n  color: #fff;\n\n  padding: 16px;\n  width: 100%;\n\n  & + div {\n    margin-top: 18px;\n  }\n"]);return S=function(){return n},n}function C(){var n=Object(f.a)(["\n  font-family: 'Roboto' sans-serif;\n  font-size: 52px;\n  color: #225588;\n  margin-top: 50px;\n"]);return C=function(){return n},n}function I(){var n=Object(f.a)(["\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  width: 100%;\n"]);return I=function(){return n},n}var z=m.b.div(I()),T=m.b.h1(C()),J=m.b.div(S()),R=m.b.div(y(),Object(k.b)(.2,"#225588")),L=t(29),M=t.n(L).a.create({baseURL:"http://localhost:3333"}),N=Object(r.createContext)({}),P=function(n){var e=n.children,t=Object(r.useState)((function(){var n=localStorage.getItem("@doctorcourse:token"),e=localStorage.getItem("@doctorcourse:user");return n&&e?{token:n,user:JSON.parse(e)}:{}})),o=Object(s.a)(t,2),i=o[0],c=o[1],d=Object(r.useCallback)(function(){var n=Object(l.a)(u.a.mark((function n(e){var t,r,a,o,i,l;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.email,r=e.password,n.next=3,M.post("sessions",{email:t,password:r});case 3:a=n.sent,o=a.data,i=o.token,l=o.user,localStorage.setItem("@doctorcourse:token",i),localStorage.setItem("@doctorcourse:user",JSON.stringify(l)),c({token:i,user:l});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[]),p=Object(r.useCallback)((function(){localStorage.removeItem("@doctorcourse:token"),localStorage.removeItem("@doctorcourse:user"),c({})}),[]);return a.a.createElement(N.Provider,{value:{user:i.user,signIn:d,signOut:p}},e)};var B=function(){var n=function(){var n=Object(r.useContext)(N);if(!n)throw new Error("useauth must be used within a auth provider");return n}(),e=(n.user,n.signIn),t=w(),o=t.addToast,i=t.removeToast,c=Object(r.useState)(""),b=Object(s.a)(c,2),f=b[0],m=b[1],g=Object(r.useState)(""),x=Object(s.a)(g,2),v=x[0],h=x[1],E=Object(r.useCallback)(function(){var n=Object(l.a)(u.a.mark((function n(t){var r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.prev=1,n.next=4,e({email:f,password:v});case 4:r=Object(d.uuid)(),o({id:r,type:"success",title:"Carregando",description:""}),setTimeout((function(){i(r)}),2e3),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),o({id:Object(d.uuid)(),type:"Erro!",title:"Login inv\xe1lido",description:"Houve um erro ao realizar o login"});case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}(),[e,f,v,o,i]);return a.a.createElement(z,null,a.a.createElement(R,null,a.a.createElement(T,null,"Mallu Santos"),a.a.createElement("form",{onSubmit:E},a.a.createElement("h1",null,"Entrar no sistema"),a.a.createElement(J,null,a.a.createElement(p.c,{size:20}),a.a.createElement("input",{name:"email",placeholder:"E-mail",value:f,onChange:function(n){return m(n.target.value)}})),a.a.createElement(J,null,a.a.createElement(p.b,{size:20}),a.a.createElement("input",{name:"password",placeholder:"Senha",type:"password",value:v,onChange:function(n){return h(n.target.value)}})),a.a.createElement("button",{type:"submit"},"Entrar"))))};t(54);function D(){var n=Object(f.a)(["\n@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');\n\n* {\nmargin: 0;\npadding: 0;\noutline: 0;\nbox-sizing: border-box;\n}\n\n*:focus {\n  outline: 0;\n}\n\nhtml, body, #root {\n  height: 100%;\n  background: ",";\n}\n\nbody {\n  -webkit-font-smoothing: antialised;\n}\n\nbody, input, button {\n  font: 14px 'Roboto', sans-serif;\n}\n\na {\n  text-decoration: none;\n}\n\nul {\n  list-style: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n"]);return D=function(){return n},n}var F=Object(m.a)(D(),Object(k.a)(.5,"#225588")),H=function(n){var e=n.children;return a.a.createElement(P,null,a.a.createElement(j,null,e))},U=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(H,null,a.a.createElement(B,null)),a.a.createElement(F,null))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(U,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.f99eabc0.chunk.js.map