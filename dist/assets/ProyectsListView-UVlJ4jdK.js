import{u as m}from"./proyectos-CfqgkmwA.js";import{_ as p,o,c as s,d as e,t as a,F as d,r as _,a as n,w as y,e as b,u as f,R as h,f as g,g as x,h as v}from"./index-BaPqJSWK.js";import{_ as k}from"./HeaderApp-CwyMxzDE.js";const P={class:"card border-0 rounded-0 bg-transparent mb-3"},$=["src","alt"],w={class:"card-body"},B={class:"card-title"},L={class:"card-subtitle"},V={__name:"ProyectCard",props:{proyecto:{type:Object,required:!0}},setup(t){return(c,r)=>(o(),s("div",P,[e("img",{src:t.proyecto.imagen,class:"card-img-top rounded-0 h-100 object-fit-cover shadow-sm",alt:t.proyecto.nombre},null,8,$),e("div",w,[e("h3",B,a(t.proyecto.nombre),1),e("p",L,a(t.proyecto.descripcion),1),e("p",null,[(o(!0),s(d,null,_(t.proyecto.tecnologias,(i,l)=>(o(),s("span",{key:l,class:"badge text-dark bg-transparent mt-4 mx-1"},a(i),1))),128))]),n(f(h),{to:{name:"proyecto-detalle",params:{id:t.proyecto.id}},class:"btn btn-primary mt-3"},{default:y(()=>r[0]||(r[0]=[b("Detalles del proyecto")])),_:1},8,["to"])])]))}},j=p(V,[["__scopeId","data-v-d3800160"]]),C={class:"container bg-custom pb-5 mb-5"},N={class:"row d-flex justify-content-center"},S={__name:"ProyectsList",setup(t){const c=m(),r=g(()=>c.proyectos);return x(()=>{c.getProyectos()}),(i,l)=>(o(),s("div",C,[e("div",N,[(o(!0),s(d,null,_(r.value,u=>(o(),v(j,{key:u.id,proyecto:u,class:"col-12 col-md-6 p-0 m-4"},null,8,["proyecto"]))),128))])]))}},D={class:"container"},E={__name:"ProyectsListView",setup(t){return(c,r)=>(o(),s(d,null,[n(k,{title:"Proyectos"}),e("div",D,[n(S)])],64))}};export{E as default};
