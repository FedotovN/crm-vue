"use strict";(self["webpackChunkcrm_course"]=self["webpackChunkcrm_course"]||[]).push([[170],{9170:function(t,e,a){a.r(e),a.d(e,{default:function(){return L}});var n=a(3396);const l=t=>((0,n.dD)("data-v-27a6a092"),t=t(),(0,n.Cn)(),t),i=l((()=>(0,n._)("div",{class:"page-title"},[(0,n._)("h3",null,"История записей")],-1)));function r(t,e,a,l,r,o){const s=(0,n.up)("history-table");return(0,n.wg)(),(0,n.iD)("div",null,[i,(0,n.Wm)(s)])}var o=a(7139);const s={class:"history_wrapper"},u={class:"header"},d={key:0,class:"table_wrapper"},c={key:0},g=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Сумма"),(0,n._)("th",null,"Дата"),(0,n._)("th",null,"Категория"),(0,n._)("th",null,"Тип"),(0,n._)("th",null,"Открыть")])],-1),h=(0,n._)("i",{class:"fa-solid fa-magnifying-glass"},null,-1),_={key:1,class:"handler_history"},m=(0,n._)("h2",null," Записей пока нет! ",-1),p={key:1,class:"preloader_history"};function f(t,e,a,l,i,r){const f=(0,n.up)("base-pagination"),w=(0,n.up)("base-button"),y=(0,n.up)("router-link"),v=(0,n.up)("base-loader");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",u,[i.info.length>i.recordsLimit?((0,n.wg)(),(0,n.j4)(f,{key:0,itemsAmount:i.info.length,limit:i.recordsLimit,maxToRender:10,onPageChanged:r.changePage},null,8,["itemsAmount","limit","onPageChanged"])):(0,n.kq)("",!0)]),i.loading?((0,n.wg)(),(0,n.iD)("div",p,[(0,n.Wm)(v)])):((0,n.wg)(),(0,n.iD)("div",d,[i.info.length?((0,n.wg)(),(0,n.iD)("table",c,[g,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.info.slice((i.page-1)*i.recordsLimit,(i.page-1)*i.recordsLimit+i.recordsLimit),((t,e)=>((0,n.wg)(),(0,n.iD)("tr",{key:e},[(0,n._)("td",null,(0,o.zw)(t.amount),1),(0,n._)("td",null,(0,o.zw)(r.filterDate(new Date(t.date))),1),(0,n._)("td",null,(0,o.zw)(t.category),1),(0,n._)("td",null,[(0,n._)("span",{class:(0,o.C_)(t.type)},(0,o.zw)("outcome"===t.type?"Расход":"Доход"),3)]),(0,n._)("td",null,[(0,n.Wm)(y,{to:"record/"+t.id},{default:(0,n.w5)((()=>[(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[h])),_:1})])),_:2},1032,["to"])])])))),128))])])):((0,n.wg)(),(0,n.iD)("div",_,[m,(0,n.Wm)(y,{to:"/record"},{default:(0,n.w5)((()=>[(0,n.Uk)("Создайте новую запись здесь")])),_:1})]))]))])}var w=a(1888),y={name:"HistoryTable",data(){return{loading:!0,info:[],page:1,recordsLimit:4}},async mounted(){this.info=await this.$store.dispatch("fetchHistoryInfo"),this.loading=!1},methods:{filterDate(t){return w.m.filterDate(t)},changePage(t){this.page=t}}},v=a(89);const k=(0,v.Z)(y,[["render",f]]);var D=k,b={name:"HistoryPage",components:{HistoryTable:D}};const C=(0,v.Z)(b,[["render",r],["__scopeId","data-v-27a6a092"]]);var L=C}}]);
//# sourceMappingURL=170.5f99f61f.js.map