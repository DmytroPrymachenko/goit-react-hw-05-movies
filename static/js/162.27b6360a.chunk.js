"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[162],{162:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var i,o,r,a,f,s,p,d=t(861),l=t(439),c=t(757),h=t.n(c),u=t(686),m=t(791),b=t(87),g=t(168),x=t(867),O=x.ZP.form(i||(i=(0,g.Z)(["\n  width: 400px;\n  height: 40px;\n  position: relative;\n  background: #fff;\n  color: #fff;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 1.5em;\n  letter-spacing: 0.1em;\n  font-weight: 400;\n  padding: 10px 30px;\n  transition: 0.5s;\n  padding-top: 15px;\n\n  &:hover,\n  &:focus-within {\n    background: #6eff3e;\n    color: #6eff3e;\n    letter-spacing: 0.25em;\n    box-shadow: 0 0 35px #6eff3e;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    inset: 2px;\n    background: #27282c;\n  }\n"]))),Z=x.ZP.input(o||(o=(0,g.Z)(["\n  position: absolute;\n\n  border: none;\n  background: none;\n  color: #fff;\n  font-size: 1.2em; \n  text-transform: uppercase;\n  letter-spacing: 0.05em; \n  outline: none;\n  transition: border-bottom 0.5s, color 0.5s, letter-spacing 0.5s;\n  z-index: 9;\n\n  &:before {\n    content: '';\n    position: absolute;\n    inset: 2px;\n    background: #27282c;\n  }\n\n  &:focus {\n    border-bottom: 2px solid #6eff3e;\n    color: #6eff3e;\n    letter-spacing: 0.1em;\n    border-bottom: none; \n  }\n  padding-left: 25px;\n  padding-right: 30px;\n"]))),j=x.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  transition: transform 0.3s ease-in-out;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  &:hover {\n    transform: scale(1.2);\n  }\n"]))),P=x.ZP.div(a||(a=(0,g.Z)(["\n  position: absolute;\n  top: -65%;\n  left: 3%;\n  /* transform: translate(-51%, -52%); */\n  z-index: 9;\n"]))),v=x.ZP.button(f||(f=(0,g.Z)(["\n  width: 32px;\n  height: 32px;\n  position: relative;\n  margin: 60px 5% auto;\n  margin-bottom: 60px;\n  content: '';\n  display: block;\n  position: absolute;\n  left: -2px;\n  top: -2px;\n  background: linear-gradient(\n    45deg,\n    #e6fb04,\n    #ff6600,\n    #00ff66,\n    #00ffff,\n    #ff00ff,\n    #ff0099,\n    #6e0dd0,\n    #ff3300,\n    #099fff\n  );\n  background-size: 400%;\n\n  z-index: -1;\n  border-radius: 50%;\n  overflow: hidden;\n  animation: animate 20s linear infinite;\n\n  &::before,\n  &::after {\n    content: '';\n    display: block;\n    position: absolute;\n    left: -2px;\n    top: -2px;\n    background: linear-gradient(\n      45deg,\n      #e6fb04,\n      #ff6600,\n      #00ff66,\n      #00ffff,\n      #ff00ff,\n      #ff0099,\n      #6e0dd0,\n      #ff3300,\n      #099fff\n    );\n    background-size: 400%;\n\n    z-index: -1;\n    animation: animate 20s linear infinite;\n  }\n\n  @keyframes animate {\n    0% {\n      background-position: 0 0;\n    }\n    50% {\n      background-position: 400% 0;\n    }\n    100% {\n      background-position: 0 0;\n    }\n  }\n\n  &::after {\n    filter: blur(40px);\n  }\n\n  &:hover {\n    transform: scale(1.1);\n  }\n\n  transition: transform 0.3s ease, color 0.5s, letter-spacing 0.5s;\n  position: relative;\n  border: 30px transparent;\n"]))),Q=(x.ZP.img(s||(s=(0,g.Z)(["\n  position: absolute;\n"]))),x.ZP.img(p||(p=(0,g.Z)(["\n  position: absolute;\n  top: 0%;\n  left: 3%;\n\n  width: 30px;\n  height: 30px;\n"])))),Y=t(184),A=function(){var n=(0,m.useState)(""),e=(0,l.Z)(n,2),t=e[0],i=e[1],o=(0,b.lr)(),r=(0,l.Z)(o,2)[1];return(0,Y.jsx)(j,{children:(0,Y.jsxs)(O,{onSubmit:function(n){n.preventDefault(),t&&r({search:t})},children:[(0,Y.jsx)(Z,{type:"text",name:"search",placeholder:"Movie",value:t,onChange:function(n){i(n.target.value)}}),(0,Y.jsx)(P,{children:(0,Y.jsx)(v,{type:"submit",children:(0,Y.jsx)(Q,{src:"data:image/png;base64,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",alt:""})})})]})})},N=t(689),z=t(919),w=t(159),y=t(583),B=t(209),R=function(){var n=(0,m.useState)([]),e=(0,l.Z)(n,2),t=e[0],i=e[1],o=(0,m.useState)(!1),r=(0,l.Z)(o,2),a=r[0],f=r[1],s=(0,b.lr)(),p=(0,l.Z)(s,1)[0],c=(0,N.TH)();return(0,m.useEffect)((function(){function n(){return(n=(0,d.Z)(h().mark((function n(){var e,t,o;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,f(!0),e=p.get("search"),n.next=5,(0,u.gH)(e);case 5:t=n.sent,o=t.results,i(o),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),z.Notify.failure(n.t0.message);case 13:return n.prev=13,f(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[p]),(0,Y.jsxs)("section",{children:[(0,Y.jsx)(A,{}),a&&(0,Y.jsx)(B.gb,{}),t&&t.length>0&&(0,Y.jsx)(w.Qp,{children:t.map((function(n){return(0,Y.jsx)(w.x4,{children:(0,Y.jsx)(w.hq,{children:(0,Y.jsxs)(b.rU,{to:"/movies/".concat(n.id),state:c,children:[(0,Y.jsx)(w.sz,{src:n.poster_path?"https://image.tmdb.org/t/p/original/".concat(n.poster_path):y,alt:"Logo"}),(0,Y.jsx)(w.R9,{children:n.original_title})]})})},n.id)}))})]})}}}]);
//# sourceMappingURL=162.27b6360a.chunk.js.map