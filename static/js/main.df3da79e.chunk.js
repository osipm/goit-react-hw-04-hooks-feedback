(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={section:"section_section__2syvT"}},function(e,t,n){e.exports={btns:"FeedbackOptions_btns__1nU_L"}},function(e,t,n){e.exports={item:"Statistics_item__GBIuS"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(4),r=n.n(s),i=(n(12),n(2)),a=n(5),o=n.n(a),u=n(0),b=function(e){var t=e.title,n=e.children;return Object(u.jsxs)("section",{className:o.a.section,children:[t&&Object(u.jsx)("h2",{children:t}),n]})},j=n(6),d=n.n(j),l=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(u.jsx)("div",{children:t.map((function(e){return Object(u.jsx)("button",{type:"button",className:d.a.btns,onClick:n,name:e,children:e},e)}))})},h=n(7),O=n.n(h);function f(e){var t=e.good,n=e.neutral,c=e.bad,s=e.total,r=e.positivePercentage;return Object(u.jsxs)("ul",{className:O.a.item,children:[Object(u.jsxs)("li",{children:["Good:",t]}),Object(u.jsxs)("li",{children:["Neutral:",n]}),Object(u.jsxs)("li",{children:["Bad:",c]}),Object(u.jsxs)("li",{children:["Total: ",s]}),Object(u.jsxs)("li",{children:["Positive feedback:",r]})]})}var x=function(e){var t=e.message;return Object(u.jsx)("p",{children:t})};function v(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(0),a=Object(i.a)(r,2),o=a[0],j=a[1],d=Object(c.useState)(0),h=Object(i.a)(d,2),O=h[0],v=h[1],p=function(){return n+o+O};return Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{title:"Please leave feedback",children:Object(u.jsx)(l,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e.currentTarget.name){case"good":return s((function(e){return e+1}));case"neutral":return j((function(e){return e+1}));case"bad":return v((function(e){return e+1}));default:return}}})}),Object(u.jsx)(b,{title:"Statistics",children:p()>0?Object(u.jsx)(f,{good:n,neutral:o,bad:O,total:p(),positivePercentage:function(){var e=p();return Math.round(100*n/e,0)}()}):Object(u.jsx)(x,{message:"No feedback given"})})]})}r.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.df3da79e.chunk.js.map