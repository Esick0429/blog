import{g as I,d as x,a as C}from"./dayjs.min.7ec8fc08.js";import{d as h,f as m,l as D,m as f,o as r,g as i,i as v,h as e,t as s,F as _,u as l,q as p,k as T,p as b,j as w}from"./vendor.74d6075c.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";const H={class:"item"},S=["onClick"],Y={style:{"text-decoration":"none",color:"var(--titlecolor)"}},A={class:"articleDate"},B={class:"articleTitle"},L=["onClick"],M=h({setup(o){let t=m([]);const c=D();f(async()=>{let a=await I();console.log(a.data),t.value=a.data});function d(a){c.push({name:"archives",query:{archiveId:a}})}function $(a){c.push({name:"tagList",params:{tagName:a}})}return(a,j)=>(r(!0),i(_,null,v(l(t),(k,u)=>(r(),i("div",H,[e("div",{class:"itemTitle",onClick:n=>$(`${u}`)},[e("a",Y,s(u),1)],8,S),(r(!0),i(_,null,v(k,n=>(r(),i("div",{class:"itemContent",key:n.archiveTitle},[e("div",A,s(l(x)(n.archiveDate).format("YYYY-MM-DD")),1),e("div",B,[e("a",{onClick:z=>d(n.archiveId)},s(n.archiveTitle),9,L)])]))),128))]))),256))}});var N=y(M,[["__scopeId","data-v-f958a3ac"]]);const g=o=>(b("data-v-0decb4ac"),o=o(),w(),o),V={class:"about"},q=g(()=>e("br",null,null,-1)),E=g(()=>e("br",null,null,-1)),F={style:{float:"right"}},Q={class:"srcoll_view"},R=h({setup(o){let t=m({});return f(async()=>{let c=await C();t.value=c.data,console.log(t)}),(c,d)=>(r(),i(_,null,[e("div",V,[e("span",null,[p(s(l(t).content),1),q,p(" "+s(l(t).translation),1)]),E,e("span",F," \u2014\u2014"+s(l(t).author),1)]),e("div",Q,[T(N)])],64))}});var O=y(R,[["__scopeId","data-v-0decb4ac"]]);export{O as default};
