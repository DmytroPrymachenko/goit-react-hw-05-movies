"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[995],{995:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var o,r,s=t(861),i=t(439),a=t(757),c=t.n(a),p=t(686),u=t(791),f=t(947),l=t(168),d=t(867),h=d.ZP.form(o||(o=(0,l.Z)(["\n  width: 400px;\n  height: 40px;\n  position: relative;\n  background: #fff;\n  color: #fff;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 1.5em;\n  letter-spacing: 0.1em;\n  font-weight: 400;\n  padding: 10px 30px;\n  transition: 0.5s;\n  padding-top: 15px;\n\n  &:hover,\n  &:focus-within {\n    background: #6eff3e;\n    color: #6eff3e;\n    letter-spacing: 0.25em;\n    box-shadow: 0 0 35px #6eff3e;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    inset: 2px;\n    background: #27282c;\n  }\n"]))),x=d.ZP.input(r||(r=(0,l.Z)(["\n  position: relative;\n  width: 100%;\n  border: none;\n  background: none;\n  color: #fff;\n  font-size: 1.2em; /* \u0417\u043c\u0435\u043d\u0448\u0435\u043d\u043e \u0440\u043e\u0437\u043c\u0456\u0440 \u0448\u0440\u0438\u0444\u0442\u0443 */\n  text-transform: uppercase;\n  letter-spacing: 0.05em; /* \u0417\u043c\u0435\u043d\u0448\u0435\u043d\u043e \u0432\u0456\u0434\u0441\u0442\u0430\u043d\u044c \u043c\u0456\u0436 \u0431\u0443\u043a\u0432\u0430\u043c\u0438 */\n  outline: none;\n  transition: border-bottom 0.5s, color 0.5s, letter-spacing 0.5s;\n  z-index: 9;\n\n  &:before {\n    content: '';\n    position: absolute;\n    inset: 2px;\n    background: #27282c;\n  }\n\n  &:focus {\n    border-bottom: 2px solid #6eff3e;\n    color: #6eff3e;\n    letter-spacing: 0.1em;\n    border-bottom: none; /* \u0417\u043c\u0435\u043d\u0448\u0435\u043d\u043e \u0432\u0456\u0434\u0441\u0442\u0430\u043d\u044c \u043c\u0456\u0436 \u0431\u0443\u043a\u0432\u0430\u043c\u0438 \u043f\u0440\u0438 \u0444\u043e\u043a\u0443\u0441\u0456 */\n  }\n"]))),g=t(184),m=function(){var n=(0,u.useState)(""),e=(0,i.Z)(n,2),t=e[0],o=e[1],r=(0,f.lr)(),s=(0,i.Z)(r,2)[1];return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(h,{onSubmit:function(n){n.preventDefault(),t&&s({search:t})},children:[(0,g.jsx)(x,{type:"text",name:"search",placeholder:"Movie",value:t,onChange:function(n){o(n.target.value)}}),(0,g.jsx)("button",{})]})})},b=t(689),v=t(919),k=t(509),j=function(){var n=(0,u.useState)([]),e=(0,i.Z)(n,2),t=e[0],o=e[1],r=(0,u.useState)(!1),a=(0,i.Z)(r,2),l=a[0],d=a[1],h=(0,f.lr)(),x=(0,i.Z)(h,1)[0],j=(0,b.TH)();return(0,u.useEffect)((function(){function n(){return(n=(0,s.Z)(c().mark((function n(){var e,t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),e=x.get("search"),n.next=5,(0,p.gH)(e);case 5:t=n.sent,r=t.results,o(r),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),v.Notify.failure(n.t0.message);case 13:return n.prev=13,d(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[x]),(0,g.jsxs)("section",{children:[(0,g.jsx)(m,{}),l&&(0,g.jsx)("div",{}),(0,g.jsx)(k.Qp,{children:t&&t.map((function(n){return(0,g.jsx)(k.x4,{children:(0,g.jsxs)(f.rU,{to:"/movies/".concat(n.id),state:j,children:[(0,g.jsx)(k.sz,{src:n.poster_path?"https://image.tmdb.org/t/p/original/".concat(n.poster_path):"./photo/ukrkino.jpg",alt:"Logo"}),(0,g.jsx)("p",{children:n.original_title})]})},n.id)}))})]})}}}]);
//# sourceMappingURL=995.d9043ad8.chunk.js.map