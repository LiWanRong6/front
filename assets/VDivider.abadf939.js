import{j as s,m as v,p as c,k as h,t as m,l as g,n as r,q as x,b as u}from"./index.9f5934ce.js";const f=s({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v()},setup(e,a){let{attrs:i}=a;const{themeClasses:l}=c(e),{backgroundColorClasses:n,backgroundColorStyles:o}=h(m(e,"color")),d=g(()=>{const t={};return e.length&&(t[e.vertical?"maxHeight":"maxWidth"]=r(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=r(e.thickness)),t});return x(()=>u("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},l.value,n.value],style:[d.value,o.value],"aria-orientation":!i.role||i.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${i.role||"separator"}`},null)),{}}});export{f as V};
