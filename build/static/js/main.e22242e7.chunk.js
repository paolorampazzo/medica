(this.webpackJsonpdashrisk=this.webpackJsonpdashrisk||[]).push([[0],{44:function(n,e,t){n.exports=t.p+"static/media/logo_v1 (1).5cc65cb6.webp"},49:function(n,e,t){n.exports=t(77)},77:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),o=t(39),i=t.n(o),c=t(10),l=t(2),u=t(3),d=t(15);t(54);function s(){var n=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');\n\n* {\nmargin: 0;\npadding: 0;\noutline: 0;\nbox-sizing: border-box;\n}\n\n*:focus {\n  outline: 0;\n}\n\nhtml, body, #root {\n  height: 100%;\n  /* background: ","; */\n  background: #ebf8ff;\n}\n\nbody {\n  -webkit-font-smoothing: antialised;\n}\n\nbody, input, button {\n  font: 14px 'Roboto', sans-serif;\n}\n\ninput {\n  background: transparent;\n}\n\na {\n  text-decoration: none;\n}\n\nul {\n  list-style: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n"]);return s=function(){return n},n}var p=Object(u.a)(s(),Object(d.a)(.5,"#225588")),f=t(11),m=t.n(f),b=t(14),x=t(12),g=t(43),h=t.n(g).a.create({baseURL:"http://localhost:3333"}),E=Object(r.createContext)({}),v=function(n){var e=n.children,t=Object(r.useState)((function(){var n=localStorage.getItem("@doctorcourse:token"),e=localStorage.getItem("@doctorcourse:user");return n&&e?{token:n,user:JSON.parse(e)}:{}})),o=Object(x.a)(t,2),i=o[0],c=o[1],l=Object(r.useCallback)(function(){var n=Object(b.a)(m.a.mark((function n(e){var t,r,a,o,i,l;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.email,r=e.password,n.next=3,h.post("sessions",{email:t,password:r});case 3:a=n.sent,o=a.data,i=o.token,l=o.user,localStorage.setItem("@doctorcourse:token",i),localStorage.setItem("@doctorcourse:user",JSON.stringify(l)),c({token:i,user:l});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[]),u=Object(r.useCallback)((function(){localStorage.removeItem("@doctorcourse:token"),localStorage.removeItem("@doctorcourse:user"),c({})}),[]);return a.a.createElement(E.Provider,{value:{user:i.user,signIn:l,signOut:u}},e)};function w(){var n=Object(r.useContext)(E);if(!n)throw new Error("useauth must be used within a auth provider");return n}var O=t(47),j=t(16);function y(){var n=Object(l.a)(["\n  width: 360px;\n\n  position: relative;\n\n  padding: 16px 30px 16px 16px;\n\n  border-radius: 10px;\n\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n\n  display: flex;\n\n  & + div {\n    margin-top: 8px;\n  }\n\n  background: #ebf8ff;\n  color: #3172b7;\n\n  > svg {\n    margin: 4px 12px 0 0;\n  }\n\n  div {\n    flex: 1;\n\n    p {\n      margin-top: 4px;\n      font-size: 14px;\n      opacity: 0.8;\n      line-height: 20px;\n    }\n  }\n\n  button {\n    position: absolute;\n    right: 16px;\n    top: 19px;\n    opacity: 0.8;\n    border: 0;\n    background: transparent;\n    color: inherit;\n  }\n"]);return y=function(){return n},n}function k(){var n=Object(l.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n\n  padding: 30px;\n\n  overflow: hidden;\n"]);return k=function(){return n},n}var R=u.b.div(k()),S=u.b.div(y()),z=function(n){var e=n.messages,t=P().removeToast;return a.a.createElement(R,null,e.map((function(n){return a.a.createElement(S,{key:n.id},"success"!==n.type&&a.a.createElement(j.a,{size:20}),a.a.createElement("div",null,a.a.createElement("strong",null,n.title),n.description&&a.a.createElement("p",null,n.description)),a.a.createElement("button",{onClick:function(){return t(n.id)},type:"button"},a.a.createElement(j.d,{size:18})))})))},A=Object(r.createContext)({}),C=function(n){var e=n.children,t=Object(r.useState)([]),o=Object(x.a)(t,2),i=o[0],c=o[1],l=Object(r.useCallback)((function(n){var e={id:n.id,type:n.type,title:n.title,description:n.description};c((function(n){return[].concat(Object(O.a)(n),[e])}))}),[]),u=Object(r.useCallback)((function(n){c((function(e){return e.filter((function(e){return e.id!==n}))}))}),[]);return a.a.createElement(A.Provider,{value:{addToast:l,removeToast:u}},e,a.a.createElement(z,{messages:i}))};function P(){var n=Object(r.useContext)(A);if(!n)throw new Error("usetoast must be used in context");return n}var G=function(n){var e=n.children;return a.a.createElement(v,null,a.a.createElement(C,null,e))},I=t(4),M=t(48),F=function(n){var e=n.isPrivate,t=void 0!==e&&e,r=n.component,o=Object(M.a)(n,["isPrivate","component"]),i=w().user;return a.a.createElement(I.b,Object.assign({},o,{render:function(n){var e=n.location;return t===!!i?a.a.createElement(r,null):a.a.createElement(I.a,{to:{pathname:t?"/":"/dashboard",state:{from:e}}})}}))},T=t(27);function L(){var n=Object(l.a)(["\n  width: 100%;\n  max-width: 700px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  form {\n    margin: 80px 0;\n    width: 340px;\n    text-align: center;\n\n    h1 {\n      margin-bottom: 24px;\n      color: #225588;\n    }\n\n    div {\n      background: #445566;\n    }\n\n    input {\n      background: #445566;\n      /* border-radius: 10px; */\n      border: 2px solid #445566;\n      color: #fff;\n\n      margin-left: 10px;\n      /* padding: 16px; */\n      width: 100%;\n\n      & + input {\n        margin-top: 8px;\n      }\n\n      ::placeholder {\n        color: #fff;\n      }\n    }\n\n    button {\n      background: #225588;\n      height: 56px;\n      border-radius: 10px;\n      border: 0;\n      padding: 0 16px;\n      color: #fff;\n      width: 100%;\n\n      font-weight: bold;\n\n      margin-top: 16px;\n      transition: background-color 0.2;\n\n      &:hover {\n        background: ",";\n      }\n    }\n  }\n"]);return L=function(){return n},n}function N(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  background: #445566;\n  border-radius: 10px;\n  border: 2px solid #445566;\n  color: #fff;\n\n  padding: 16px;\n  width: 100%;\n\n  & + div {\n    margin-top: 18px;\n  }\n"]);return N=function(){return n},n}function D(){var n=Object(l.a)(["\n  font-family: 'Roboto' sans-serif;\n  font-size: 52px;\n  color: #225588;\n  margin-top: 50px;\n"]);return D=function(){return n},n}function B(){var n=Object(l.a)(["\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  width: 100%;\n"]);return B=function(){return n},n}var J=u.b.div(B()),U=u.b.h1(D()),H=u.b.div(N()),K=u.b.div(L(),Object(d.b)(.2,"#225588")),_=function(){var n=w().signIn,e=P(),t=e.addToast,o=e.removeToast,i=Object(r.useState)(""),c=Object(x.a)(i,2),l=c[0],u=c[1],d=Object(r.useState)(""),s=Object(x.a)(d,2),p=s[0],f=s[1],g=Object(r.useCallback)(function(){var e=Object(b.a)(m.a.mark((function e(r){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,n({email:l,password:p});case 4:f(""),a=Object(T.uuid)(),t({id:a,type:"success",title:"Carregando",description:""}),setTimeout((function(){o(a)}),2e3),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t({id:Object(T.uuid)(),type:"Erro!",title:"Login inv\xe1lido",description:"Houve um erro ao realizar o login"});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}(),[n,l,p,t,o]);return a.a.createElement(J,null,a.a.createElement(K,null,a.a.createElement(U,null,"Slender Group"),a.a.createElement("form",{onSubmit:g},a.a.createElement("h1",null,"Entrar no sistema"),a.a.createElement(H,null,a.a.createElement(j.c,{size:20}),a.a.createElement("input",{name:"email",placeholder:"E-mail",value:l,onChange:function(n){return u(n.target.value)}})),a.a.createElement(H,null,a.a.createElement(j.b,{size:20}),a.a.createElement("input",{name:"password",placeholder:"Senha",type:"password",value:p,onChange:function(n){return f(n.target.value)}})),a.a.createElement("button",{type:"submit"},"Entrar"))))},q=t(45),Q=t(21),V=t(46),W=t(23);function X(){var n=Object(l.a)(["\n  color: #fff;\n  margin-top: 10px;\n  height: 40px;\n\n  margin-bottom: 20px;\n\n  text-align: center;\n"]);return X=function(){return n},n}function Y(){var n=Object(l.a)(["\n  color: #fff;\n  font-size: 24px;\n  font-family: 'Roboto Mono', monospace;\n  margin-top: 10px;\n"]);return Y=function(){return n},n}function Z(){var n=Object(l.a)(["\n  width: 20%;\n  height: 80%;\n  border-radius: 15px;\n  opacity: ",";\n  margin: 30px;\n  box-shadow: 10px 2px 8px rgba(0, 0, 0, 0.3);\n\n  background: ",";\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n\n  cursor: ",";\n\n  @media (max-width: 480px) {\n    width: 250px;\n    height: 200px;\n    margin: 20px 0;\n  }\n"]);return Z=function(){return n},n}function $(){var n=Object(l.a)(["\n  height: 200px;\n  width: 100%;\n\n  display: flex;\n\n  flex-direction: row;\n\n  justify-content: center;\n\n  align-items: center;\n\n  @media (max-width: 480px) {\n    flex-direction: column;\n\n    height: auto;\n    width: auto;\n  }\n"]);return $=function(){return n},n}function nn(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  height: 80%;\n  width: 100%;\n  margin: 25px auto 0;\n\n  @media (max-width: 480px) {\n    height: auto;\n    position: relative;\n    width: auto;\n    margin: 0 auto;\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(l.a)(["\n  width: 100%;\n  max-width: 1100px;\n  margin-top: 35px;\n  display: flex;\n\n  flex-direction: column;\n  align-items: center;\n\n  @media (max-width: 480px) {\n    max-width: 100%;\n    width: auto;\n  }\n\n  form {\n    margin: 80px 0;\n    width: 340px;\n    text-align: center;\n\n    h1 {\n      margin-bottom: 24px;\n      color: #225588;\n    }\n\n    input {\n      background: transparent;\n      /* border-radius: 10px; */\n      border: 2px solid #445566;\n      color: #fff;\n\n      margin-left: 10px;\n      /* padding: 16px; */\n      width: 100%;\n\n      & + input {\n        margin-top: 8px;\n      }\n\n      ::placeholder {\n        color: #fff;\n      }\n    }\n\n    button {\n      background: #225588;\n      height: 56px;\n      border-radius: 10px;\n      border: 0;\n      padding: 0 16px;\n      color: #fff;\n      width: 100%;\n\n      font-weight: bold;\n\n      margin-top: 16px;\n      transition: background-color 0.2;\n\n      &:hover {\n        background: ",";\n      }\n    }\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  background: #445566;\n  border-radius: 10px;\n  border: 2px solid #445566;\n  color: #fff;\n\n  padding: 16px;\n  width: 100%;\n\n  & + div {\n    margin-top: 18px;\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(l.a)(["\n  font-family: 'Roboto' sans-serif;\n  font-size: 52px;\n  color: #225588;\n  margin-top: 20px;\n"]);return rn=function(){return n},n}function an(){var n=Object(l.a)(["\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  width: 100%;\n\n  @media (max-width: 480px) {\n    width: auto;\n  }\n"]);return an=function(){return n},n}var on=u.b.div(an()),cn=(u.b.h1(rn()),u.b.div(tn()),u.b.div(en(),Object(d.b)(.2,"#225588"))),ln=u.b.div(nn()),un=u.b.div($()),dn=u.b.div(Z(),(function(n){return n.disabled?"0.15":"0.8"}),(function(n){return n.color}),(function(n){return n.disabled?"default":"pointer"})),sn=u.b.h1(Y()),pn=u.b.h2(X()),fn=t(44),mn=t.n(fn);function bn(){var n=Object(l.a)(["\n  font-size: 14px;\n  color: #de3b3b;\n  padding: 2px;\n  background: none;\n  border: 0;\n  position: relative;\n"]);return bn=function(){return n},n}function xn(){var n=Object(l.a)(["\n  font-weight: bold;\n  font-size: 14px;\n  color: #666666;\n  padding: 2px;\n"]);return xn=function(){return n},n}function gn(){var n=Object(l.a)(["\n  font-weight: bold;\n  font-size: 15px;\n\n  color: #999999;\n  margin: 22px 21px;\n\n  &:hover {\n    filter: brightness(1.2);\n  }\n"]);return gn=function(){return n},n}function hn(){var n=Object(l.a)(["\n  display: flex;\n  margin: 0 auto;\n  height: 32px;\n  flex-direction: row;\n  align-items: center;\n  border-left: 1px solid #dddddd;\n\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]);return hn=function(){return n},n}function En(){var n=Object(l.a)(["\n  height: 55px;\n  width: 200px;\n  margin: -35px auto;\n"]);return En=function(){return n},n}function vn(){var n=Object(l.a)(["\n  margin: 0 auto;\n  display: flex;\n\n  flex-direction: row;\n  justify-content: space-between;\n\n  nav {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n  }\n\n  aside {\n    display: flex;\n    flex-direction: column;\n    margin: 6px 15px;\n    padding: 0 30px;\n\n    @media (max-width: 480px) {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 0;\n      margin: 10px auto;\n    }\n  }\n\n  img {\n    height: 75px;\n    width: 200px;\n    object-fit: contain;\n    /* margin: 0 30px; */\n  }\n"]);return vn=function(){return n},n}function wn(){var n=Object(l.a)(["\n  background: #ffffff;\n  height: 100%;\n  padding: 0;\n  min-width: 100%;\n  position: relative;\n\n  @media (max-width: 480px) {\n    height: auto;\n    display: flex;\n    justify-content: center;\n  }\n"]);return wn=function(){return n},n}var On=u.b.div(wn()),jn=u.b.div(vn()),yn=u.b.div(En()),kn=u.b.div(hn()),Rn=u.b.div(gn()),Sn=u.b.div(xn()),zn=u.b.button(bn()),An=function(){var n=w().signOut;function e(){return(e=Object(b.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a.a.createElement(On,null,a.a.createElement(jn,null,a.a.createElement("nav",null,a.a.createElement(c.b,{to:"/dashboard"},a.a.createElement(yn,null,a.a.createElement("img",{src:mn.a,alt:"Slender"}))),a.a.createElement(kn,null,a.a.createElement(c.b,{to:"/"},a.a.createElement(Rn,null,"BIBLIOTECA")),a.a.createElement(c.b,{to:"/"},a.a.createElement(Rn,null,"SLENDER")),a.a.createElement(c.b,{to:"/"},a.a.createElement(Rn,null,"EBOOKS")),a.a.createElement(c.b,{to:"/"},a.a.createElement(Rn,null,"CONTATO")))),a.a.createElement("aside",null,a.a.createElement(Sn,null,"Admin Slender"),a.a.createElement(zn,{onClick:function(){return e.apply(this,arguments)}},"sair do sistema"))))},Cn=function(){return a.a.createElement(on,null,a.a.createElement(An,null),a.a.createElement(cn,null,a.a.createElement(ln,null,a.a.createElement(un,null,a.a.createElement(dn,{color:"#4A91D0",disabled:!0},a.a.createElement(sn,null,"PROGRAMA"),a.a.createElement(pn,null,"SLENDER 4U"),a.a.createElement(q.a,{color:"#fff",size:35})),a.a.createElement(dn,{color:"#008000",disabled:!0},a.a.createElement(sn,null,"PROGRAMA"),a.a.createElement(pn,null,"Fam\xedlia SLENDER"),a.a.createElement(Q.a,{color:"#fff",size:35})),a.a.createElement(dn,{color:"#FAC300"},a.a.createElement(sn,null,"PROGRAMA"),a.a.createElement(pn,null,"Gesta\xe7\xe3o Inteligente"),a.a.createElement(V.a,{color:"#fff",size:35}))),a.a.createElement(un,null,a.a.createElement(dn,{color:"#9900FF"},a.a.createElement(sn,null,"PROGRAMA"),a.a.createElement(pn,null,"Gerenciamento da Sa\xfade Pessoal"),a.a.createElement(Q.b,{color:"#fff",size:35})),a.a.createElement(dn,{color:"#FF3300"},a.a.createElement(sn,null,"PROGRAMA"),a.a.createElement(pn,null,"Sa\xfade Senior"),a.a.createElement(Q.c,{color:"#fff",size:35})),a.a.createElement(dn,{color:"#E51C1C"},a.a.createElement(sn,null,"PROGRAMA"),a.a.createElement(pn,null,"Crian\xe7a Sabetudo"),a.a.createElement(W.b,{color:"#fff",size:35}))),a.a.createElement(un,null,a.a.createElement(dn,{color:"#FF0066"},a.a.createElement(sn,null,"PROGRAMA"),a.a.createElement(pn,null,"Beleza Certa"),a.a.createElement(W.c,{color:"#fff",size:35})),a.a.createElement(dn,{color:"#5757E8"},a.a.createElement(sn,null,"PROGRAMA"),a.a.createElement(pn,null,"Calma Mente"),a.a.createElement(W.a,{color:"#fff",size:35})),a.a.createElement(dn,{color:"#3FC83F"},a.a.createElement(sn,null,"PROGRAMA"),a.a.createElement(pn,null,"Peso SLENDER"),a.a.createElement(Q.d,{color:"#fff",size:35}))))))},Pn=function(){return a.a.createElement(I.d,null,a.a.createElement(F,{path:"/",exact:!0,component:_}),a.a.createElement(F,{path:"/dashboard",exact:!0,component:Cn,isPrivate:!0}))},Gn=function(){return a.a.createElement(c.a,null,a.a.createElement(G,null,a.a.createElement(Pn,null)),a.a.createElement(p,null))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Gn,null)),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.e22242e7.chunk.js.map