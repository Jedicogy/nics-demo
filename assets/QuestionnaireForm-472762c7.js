import{u as Q,a as S,r as _,i as N,b as m,o as t,c as n,d as o,F as c,e as h,f as a,w as R,j as $,t as U,k as r}from"./index-62637659.js";import{Q as D}from"./QuestionnarieService-82dc270a.js";const j={class:"grid"},E={class:"col-2 md:col-2"},G={class:"card p-fluid"},M=o("h3",null,"標題",-1),z={class:"col-10 md:col-10"},H={class:"card p-fluid"},J=o("h2",null,"建立自評表",-1),K={class:"field"},P=o("label",{for:"name"},"名稱",-1),W={class:"field"},X=o("label",{for:"email1"},"描述",-1),Y={class:"card p-fluid mt-1"},Z={class:"formgrid grid"},q={class:"field col-10"},ee=o("label",{for:"title"},"標題",-1),le=o("label",{for:"question",class:"mt-2"},"問題",-1),oe={class:"field col-2"},ae={id:"tag",class:"bg-orange-500 p-1 text-sm font-medium text-white border-round-xs ml-2 m-2"},te=o("br",null,null,-1),ne=o("br",null,null,-1),se={class:"formgrid grid"},de={class:"field col-2 mr-2"},ie=o("label",{for:"name2"},"答案類型",-1),ce={class:"field col-2 mr-2"},ue=o("label",{for:"weights"},"權重",-1),me={class:"field col-6"},re=o("label",{for:"reference"},"參考資料連結",-1),pe={class:"formgrid grid"},_e={class:"field col-4"},ve={class:"field col-1"},Ve={class:"field col-12"},he=["for"],fe={class:"field col-6"},ye={class:"field col-1"},ke={class:"field col-8"},Ue=["for"],be={class:"field col-6"},ge={class:"field col-1"},xe={class:"field col-8"},we={key:3,class:"field col-8"},Ce={key:4,class:"field col-8"},Oe={key:5,class:"field col-8"},Ae={key:6,class:"field col-8"},Fe={__name:"QuestionnaireForm",setup(Be){Q();const x=S(),w=new D,b=_([]),f=_([]);_({sort:1,question:"",type:"radio",options:[]});const p=_({id:1,name:"",description:"",owner:"System",create_date:"2024-04-20 12:00:00",questions:[]}),C=_([{name:"選擇題",value:"radio"},{name:"多選題",value:"checkbox"},{name:"下拉選單",value:"dropdown"},{name:"問題回答",value:"text"},{name:"問題詳答",value:"textarea"},{name:"檔案上傳",value:"fileupload"},{name:"連結",value:"link"}]),O=_([{name:"1",value:1},{name:"2",value:2},{name:"3",value:3},{name:"4",value:4},{name:"5",value:5}]),A=()=>{f.value.push({sort:1,title:"",question:"",weights:"",tag:"",reference:"",type:"radio",options:[],tmpAnsOption:""})},y=(s,d)=>{f.value[s].options.push({key:d,name:d}),f.value[s].tmpAnsOption=""};N(()=>{const s=x.query;w.getQuestionnaireById(s.group,s.id).then(d=>{p.value=d,b.value=[...new Set(d.questions.map(u=>u.group))]})});const B=s=>s.length>10?`${s.substring(0,10)}...`:s;return(s,d)=>{const u=m("Button"),i=m("InputText"),g=m("Textarea"),k=m("Dropdown"),I=m("RadioButton"),T=m("Checkbox"),F=m("FileUpload"),L=m("Toolbar");return t(),n("div",j,[o("div",E,[o("div",G,[M,(t(!0),n(c,null,h(b.value,(e,v)=>(t(),$(u,{key:v,label:B(e),link:"",alt:e},null,8,["label","alt"]))),128))])]),o("div",z,[o("div",H,[J,o("div",K,[P,a(i,{id:"name",type:"text",modelValue:p.value.name,"onUpdate:modelValue":d[0]||(d[0]=e=>p.value.name=e)},null,8,["modelValue"])]),o("div",W,[X,a(g,{id:"description",rows:"3",cols:"30",modelValue:p.value.description,"onUpdate:modelValue":d[1]||(d[1]=e=>p.value.description=e)},null,8,["modelValue"])])]),(t(!0),n(c,null,h(p.value.questions,(e,v)=>(t(),n("div",Y,[o("div",Z,[o("div",q,[ee,a(i,{modelValue:e.title,"onUpdate:modelValue":l=>e.title=l,id:"title",type:"text"},null,8,["modelValue","onUpdate:modelValue"]),le,a(i,{modelValue:e.question,"onUpdate:modelValue":l=>e.question=l,id:"question",type:"text"},null,8,["modelValue","onUpdate:modelValue"])]),o("div",oe,[(t(!0),n(c,null,h(e.tags,(l,V)=>(t(),n(c,{key:V},[o("span",ae,U(l),1),te,ne],64))),128))])]),o("div",se,[o("div",de,[ie,a(k,{modelValue:e.type,"onUpdate:modelValue":l=>e.type=l,options:C.value,optionLabel:"name",optionValue:"value",placeholder:"選擇答案類型",class:"w-full md:w-14rem"},null,8,["modelValue","onUpdate:modelValue","options"])]),o("div",ce,[ue,a(k,{modelValue:e.weights,"onUpdate:modelValue":l=>e.weights=l,options:O.value,optionLabel:"name",optionValue:"value",placeholder:"選擇權重",class:"w-full md:w-14rem"},null,8,["modelValue","onUpdate:modelValue","options"])]),o("div",me,[re,a(i,{modelValue:e.reference.link,"onUpdate:modelValue":l=>e.reference.link=l,id:"question",type:"text"},null,8,["modelValue","onUpdate:modelValue"])])]),o("div",pe,[e.type==="radio"?(t(),n(c,{key:0},[o("div",_e,[a(i,{modelValue:e.tmpAnsOption,"onUpdate:modelValue":l=>e.tmpAnsOption=l,id:"ansOption",type:"text",placeholder:"新增選項"},null,8,["modelValue","onUpdate:modelValue"])]),o("div",ve,[a(u,{icon:"pi pi-plus",severity:"secondary",onClick:l=>y(v,e.tmpAnsOption)},null,8,["onClick"])]),o("div",Ve,[(t(!0),n(c,null,h(e.options,l=>(t(),n("div",{key:l.key,class:"flex align-items-center mt-1"},[a(I,{modelValue:e.ans,"onUpdate:modelValue":V=>e.ans=V,inputId:l.key,name:"dynamic",value:l.name},null,8,["modelValue","onUpdate:modelValue","inputId","value"]),o("label",{for:l.key,class:"ml-2"},U(l.name),9,he)]))),128))])],64)):r("",!0),e.type==="checkbox"?(t(),n(c,{key:1},[o("div",fe,[a(i,{modelValue:e.tmpAnsOption,"onUpdate:modelValue":l=>e.tmpAnsOption=l,id:"ansOption",type:"text",placeholder:"新增選項"},null,8,["modelValue","onUpdate:modelValue"])]),o("div",ye,[a(u,{icon:"pi pi-plus",class:"mr-2",severity:"secondary",onClick:l=>y(v,e.tmpAnsOption)},null,8,["onClick"])]),o("div",ke,[(t(!0),n(c,null,h(e.options,l=>(t(),n("div",{key:l.key,class:"flex align-items-center mt-1"},[a(T,{modelValue:e.ans,"onUpdate:modelValue":V=>e.ans=V,inputId:l.key,name:"category",value:l.name,class:"mr-2"},null,8,["modelValue","onUpdate:modelValue","inputId","value"]),o("label",{for:l.key},U(l.name),9,Ue)]))),128))])],64)):r("",!0),e.type==="dropdown"?(t(),n(c,{key:2},[o("div",be,[a(i,{modelValue:e.ans,"onUpdate:modelValue":l=>e.ans=l,id:"ansOption",type:"text",placeholder:"新增選項"},null,8,["modelValue","onUpdate:modelValue"])]),o("div",ge,[a(u,{icon:"pi pi-plus",class:"mr-2",severity:"secondary",onClick:l=>y(v,e.tmpAnsOption)},null,8,["onClick"])]),o("div",xe,[a(k,{modelValue:e.ans,"onUpdate:modelValue":l=>e.ans=l,options:e.options,optionLabel:"name",optionValue:"name",class:"w-full md:w-14rem",placeholder:"請選擇答案"},null,8,["modelValue","onUpdate:modelValue","options"])])],64)):r("",!0),e.type==="text"?(t(),n("div",we,[a(i,{modelValue:e.ans,"onUpdate:modelValue":l=>e.ans=l,id:"ans",type:"text",placeholder:"回答"},null,8,["modelValue","onUpdate:modelValue"])])):r("",!0),e.type==="textarea"?(t(),n("div",Ce,[a(g,{modelValue:e.ans,"onUpdate:modelValue":l=>e.ans=l,id:"ans",rows:"3",cols:"30",placeholder:"詳細回答"},null,8,["modelValue","onUpdate:modelValue"])])):r("",!0),e.type==="fileupload"?(t(),n("div",Oe,[a(F,{mode:"basic",name:"demo[]",accept:"*",customUpload:"",onUploader:s.customBase64Uploader},null,8,["onUploader"])])):r("",!0),e.type==="link"?(t(),n("div",Ae,[a(i,{modelValue:e.ans,"onUpdate:modelValue":l=>e.ans=l,id:"ans",rows:"3",cols:"30",placeholder:"輸入連結網址"},null,8,["modelValue","onUpdate:modelValue"])])):r("",!0)])]))),256)),a(L,null,{start:R(()=>[a(u,{icon:"pi pi-plus",class:"mr-2",severity:"secondary",label:"新增題目",onClick:A}),a(u,{icon:"pi pi-minus",class:"mr-2",severity:"secondary",label:"刪除題目"})]),_:1})])])}}};export{Fe as default};
