import{c as l,a,r as d,F as h,j as i}from"./jsx-runtime.js";const g=()=>{var n;const[o,s]=d.exports.useState((n=localStorage.getItem("chineseChrUnique"))!=null?n:""),c=e=>{localStorage.setItem("chineseChrUnique",e.target.value),s(e.target.value)},r=new Set;for(let e of o){const t=e.codePointAt(0);t>256&&!(t>=12288&&t<=12351)&&!(t>=65280&&t<=65535)&&r.add(e)}const u=[...r.values()];return u.sort((e,t)=>Math.random()-.5),a(h,{children:i("div",{className:"header",children:[a("textarea",{value:o,onChange:c,placeholder:"\u968F\u673A\u6392\u5217\u5B57\u7B26\uFF0C\u6BCF\u4E2A\u5B57\u7B26\u53EA\u51FA\u73B0\u4E00\u6B21"}),a("textarea",{value:u.join(" ")})]})})};l(document.getElementById("root")).render(a(g,{}));
