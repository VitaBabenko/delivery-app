"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[316],{5316:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r,i,o,a,d,s,l,c,p,u,x,m,h,Z,b,g,j,f,y=t(2134),C=t(168),P=t(6562),v=P.ZP.div(r||(r=(0,C.Z)(["\n  display: flex;\n"]))),k=P.ZP.input(i||(i=(0,C.Z)(["\n  width: 90px;\n  height: 50px;\n"]))),w=P.ZP.div(o||(o=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),S=P.ZP.button(a||(a=(0,C.Z)(["\n  width: 26px;\n  height: 26px;\n"]))),q=t(184),V=function(n){var e=n.count,t=n.id,r=n.incrementCount,i=n.decrementCount,o=n.changeValue;return(0,q.jsxs)(v,{children:[(0,q.jsx)(k,{type:"number",min:"1",max:"50",value:e,onChange:function(n){return o(t,n.target.value)}}),(0,q.jsxs)(w,{children:[(0,q.jsx)(S,{type:"button",onClick:function(){return r(t)},children:(0,q.jsx)(y.Vs3,{})}),(0,q.jsx)(S,{type:"button",onClick:function(){return i(t)},children:(0,q.jsx)(y.i0B,{})})]})]})},z=t(1413),D=t(5705),N=t(5984),_=t(6727),F=(0,P.ZP)(D.l0)(d||(d=(0,C.Z)(["\n  padding: 15px;\n  width: 400px;\n"]))),R=P.ZP.div(s||(s=(0,C.Z)(["\n  border: 1px solid black;\n  border-radius: 20px;\n  padding: 15px;\n"]))),A=P.ZP.div(l||(l=(0,C.Z)(["\n  display: flex;\n  gap: 50px;\n"]))),I=P.ZP.label(c||(c=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  width: 300px;\n  margin-bottom: 25px;\n"]))),T=P.ZP.button(p||(p=(0,C.Z)(["\n  display: block;\n  width: 150px;\n  height: 60px;\n  font-size: 25px;\n  border-radius: 10px;\n  border: 1px solid black;\n  padding: 5px;\n  cursor: pointer;\n\n  &:hover {\n    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n    transform: scale(1.05);\n    border-color: #5cd3a8;\n    color: #5cd3a8;\n  }\n"]))),B=(0,P.ZP)(D.Bc)(u||(u=(0,C.Z)(["\n  color: red;\n  width: 100%;\n"]))),E=P.ZP.div(x||(x=(0,C.Z)(["\n  display: flex;\n  margin-top: 30px;\n  justify-content: flex-end;\n  gap: 80px;\n"]))),J=_.Ry().shape({name:_.Z_().required("Required").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces!"),email:_.Z_().email("Invalid email address").required("Required"),phone:_.Z_().required("Required").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +!"),address:_.Z_().required("Required")}),$=function(n){var e=n.total,t=n.onSubmit;return(0,q.jsx)(D.J9,{initialValues:{name:"",email:"",phone:"",address:""},validationSchema:J,onSubmit:function(n,e){t((0,z.Z)((0,z.Z)({},n),{},{id:(0,N.x0)()})),e.resetForm()},children:(0,q.jsxs)(F,{children:[(0,q.jsx)(A,{children:(0,q.jsxs)(R,{children:[(0,q.jsxs)(I,{children:["Name",(0,q.jsx)(D.gN,{name:"name",type:"text"}),(0,q.jsx)(B,{name:"name",component:"span"})]}),(0,q.jsxs)(I,{children:["Email",(0,q.jsx)(D.gN,{name:"email",type:"email"}),(0,q.jsx)(B,{name:"email",component:"span"})]}),(0,q.jsxs)(I,{children:["Phone",(0,q.jsx)(D.gN,{name:"phone",type:"phone"}),(0,q.jsx)(B,{name:"phone",component:"span"})]}),(0,q.jsxs)(I,{children:["Address",(0,q.jsx)(D.gN,{name:"address",type:"text"}),(0,q.jsx)(B,{name:"address",component:"span"})]})]})}),(0,q.jsxs)(E,{children:[(0,q.jsxs)("h3",{children:["Total price: ",e]}),(0,q.jsx)(T,{type:"submit",children:"Submit"})]})]})})},G=P.ZP.div(m||(m=(0,C.Z)(["\n  display: flex;\n  gap: 40px;\n"]))),H=P.ZP.section(h||(h=(0,C.Z)(["\n  width: 800px;\n  padding: 15px;\n"]))),K=P.ZP.ul(Z||(Z=(0,C.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),L=P.ZP.li(b||(b=(0,C.Z)(["\n  display: flex;\n  gap: 70px;\n  margin-bottom: 20px;\n  border: 1px solid black;\n  border-radius: 15px;\n  padding: 20px;\n"]))),M=P.ZP.img(g||(g=(0,C.Z)(["\n  width: 250px;\n  border-radius: 15px;\n"]))),O=P.ZP.div(j||(j=(0,C.Z)(["\n  flex-direction: column;\n"]))),Q=P.ZP.button(f||(f=(0,C.Z)(["\n  display: block;\n  height: 40px;\n  margin-top: auto;\n  margin-bottom: auto;\n  border-radius: 10px;\n  border: 1px solid black;\n  padding: 5px;\n  cursor: pointer;\n\n  &:hover {\n    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n    transform: scale(1.05);\n    border-color: #5cd3a8;\n    color: #5cd3a8;\n  }\n"]))),U=function(n){var e=n.goodsToCart,t=n.total,r=n.onDeleteFromShoppingCart,i=n.onIncrementCount,o=n.onDecrementCount,a=n.onChangeValue,d=n.onSubmit;return(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(G,{children:[(0,q.jsx)($,{total:t,onSubmit:d}),(0,q.jsx)(H,{children:0===e.length?(0,q.jsx)("h2",{children:"Please, add goods to your cart!"}):(0,q.jsx)(K,{children:e.map((function(n){return(0,q.jsxs)(L,{children:[(0,q.jsx)(M,{src:n.photo,alt:""}),(0,q.jsxs)(O,{children:[(0,q.jsx)("h3",{children:n.name}),(0,q.jsxs)("p",{children:["Price: ",n.totalPrice]}),(0,q.jsx)(V,{count:n.count,incrementCount:i,decrementCount:o,id:n.id,changeValue:a})]}),(0,q.jsx)(Q,{type:"button",onClick:function(){return r(n.id)},children:"delete from Cart"})]},n.id)}))})})]})})},W=function(n){var e=n.goodsToCart,t=n.total,r=n.onDeleteFromShoppingCart,i=n.onIncrementCount,o=n.onDecrementCount,a=n.onChangeValue,d=n.onSubmit;return(0,q.jsx)(U,{goodsToCart:e,total:t,onDeleteFromShoppingCart:r,onIncrementCount:i,onDecrementCount:o,onChangeValue:a,onSubmit:d})}}}]);
//# sourceMappingURL=316.0c194d0b.chunk.js.map