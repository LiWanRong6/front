import{ad as v,u as g,a5 as b,r as d,a as m,o as h,a6 as x,b as a,w as s,V as w,i as S,S as B,d as l,g as o,a9 as n,ab as R,e as k,f as q,h as C}from"./index.9f5934ce.js";import{V as N}from"./VDivider.abadf939.js";import{V as U,a as D}from"./VTextField.75ffae4c.js";import{V as F}from"./VOverlay.169008ee.js";const T={id:"product"},j={class:"text-center"},E={style:{"white-space":"pre"}},I=C("\u52A0\u5165\u8CFC\u7269\u8ECA"),M=o("h1",{class:"text-black"},"\u5DF2\u4E0B\u67B6",-1),H={__name:"ProductView",setup(O){const p=v(),_=g(),V=b(),i=d(0),f=m([t=>t>=1||"\u6578\u91CF\u932F\u8AA4"]),u=d(!1),e=m({_id:"",name:"",price:0,category:"",sell:!0,image:"",description:""}),y=()=>{!u.value||V.addCart({product:e._id,quantity:i.value})};return(async()=>{try{const{data:t}=await S.get("/products/"+p.params.id);e._id=t.result._id,e.name=t.result.name,e.price=t.result.price,e.category=t.result.category,e.sell=t.result.sell,e.image=t.result.image,e.description=t.result.description}catch{B.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u8CC7\u6599\u5931\u6557"}),_.go(-1)}})(),(t,r)=>(h(),x("div",T,[a(w,null,{default:s(()=>[a(l,{cols:"12"},{default:s(()=>[o("h1",j,n(e.name),1)]),_:1}),a(N),a(l,{class:"text-center",cols:"12"},{default:s(()=>[a(R,{src:e.image},null,8,["src"]),o("p",null,"$"+n(e.price),1)]),_:1}),a(l,{cols:"12"},{default:s(()=>[o("p",E,n(e.description),1)]),_:1}),a(l,{cols:"12"},{default:s(()=>[a(U,{modelValue:u.value,"onUpdate:modelValue":r[1]||(r[1]=c=>u.value=c),onSubmit:k(y,["prevent"])},{default:s(()=>[a(D,{type:"number",label:"\u6578\u91CF",modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=c=>i.value=c),rules:f},null,8,["modelValue","rules"]),a(q,{color:"primary",type:"submit"},{default:s(()=>[I]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1}),a(F,{class:"align-center justify-center","model-value":!e.sell},{default:s(()=>[M]),_:1},8,["model-value"])]),_:1})]))}};export{H as default};
