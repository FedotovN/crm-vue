"use strict";(self["webpackChunkcrm_course"]=self["webpackChunkcrm_course"]||[]).push([[717],{9642:function(e,a,t){t.d(a,{Z:function(){return p}});var s=t(3396),r=t(7139);const n=e=>((0,s.dD)("data-v-910ae19e"),e=e(),(0,s.Cn)(),e),c={class:"bill"},l={key:0,class:"card_wrapper"},i=n((()=>(0,s._)("h2",{class:"card-title"},"Счет в валюте",-1))),u={key:1,class:"handler"};function d(e,a,t,n,d,o){const h=(0,s.up)("base-loader");return(0,s.wg)(),(0,s.iD)("div",c,[e.$store.state.auth.user?((0,s.wg)(),(0,s.iD)("div",l,[i,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.rates,((e,a)=>((0,s.wg)(),(0,s.iD)("p",{class:"currency_bill",key:a},[(0,s._)("span",null,(0,r.zw)(o.getBillValue(e.RUB)),1),(0,s._)("span",null,(0,r.zw)(a),1)])))),128))])):((0,s.wg)(),(0,s.iD)("div",u,[(0,s.Wm)(h)]))])}var o={props:["rates"],methods:{getBillValue(e){const a=this.$store.state.auth.userInfo;if(a){const t=a.bill/e;return`${t.toFixed(2)}`}}}},h=t(89);const _=(0,h.Z)(o,[["render",d],["__scopeId","data-v-910ae19e"]]);var p=_},2717:function(e,a,t){t.r(a),t.d(a,{default:function(){return W}});var s=t(3396),r=t(9242);const n=e=>((0,s.dD)("data-v-01be2cd6"),e=e(),(0,s.Cn)(),e),c={class:"content"},l={class:"content_page"},i={class:"page-title"},u=n((()=>(0,s._)("h3",null,"Счет",-1))),d=n((()=>(0,s._)("i",{class:"fa-solid fa-refresh"},null,-1))),o=[d],h={class:"wrapper"},_={key:0,class:"preloader_home"};function p(e,a,t,n,d,p){const w=(0,s.up)("base-bill"),v=(0,s.up)("base-currency"),f=(0,s.up)("base-loader");return(0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("div",l,[(0,s._)("div",i,[u,(0,s._)("div",{class:"refresh_btn",onClick:a[0]||(a[0]=(...e)=>p.refresh&&p.refresh(...e))},o)]),(0,s._)("div",h,[(0,s.wy)((0,s.Wm)(w,{rates:e.currencies},null,8,["rates"]),[[r.F8,!e.loading]]),(0,s.wy)((0,s.Wm)(v,{currencies:e.currencies,date:e.meta},null,8,["currencies","date"]),[[r.F8,!e.loading]])])]),e.loading?((0,s.wg)(),(0,s.iD)("div",_,[(0,s.Wm)(f)])):(0,s.kq)("",!0)])}var w=t(9642),v=t(7139);const f=e=>((0,s.dD)("data-v-095abcb8"),e=e(),(0,s.Cn)(),e),m={class:"currency"},g={class:"card_wrapper"},D=f((()=>(0,s._)("div",{class:"header"},[(0,s._)("h2",{class:"card-title"},"Курс валют"),(0,s._)("span",null,"От RUB")],-1))),b=f((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Валюта"),(0,s._)("th",null,"Курс"),(0,s._)("th",null,"Дата")])],-1)));function y(e,a,t,r,n,c){return(0,s.wg)(),(0,s.iD)("div",m,[(0,s._)("div",g,[D,(0,s._)("table",null,[b,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.currencies,((e,a)=>((0,s.wg)(),(0,s.iD)("tr",{key:a},[(0,s._)("td",null,(0,v.zw)(a),1),(0,s._)("td",null,(0,v.zw)(e.RUB),1),(0,s._)("td",null,(0,v.zw)(c.filterDate(t.date)),1)])))),128))])])])])}var k=t(1888),B={props:["currencies","date"],methods:{filterDate(e){const a={year:"numeric",month:"numeric",day:"numeric"};return k.m.filterDate(e,a)}}},C=t(89);const Z=(0,C.Z)(B,[["render",y],["__scopeId","data-v-095abcb8"]]);var $=Z,z=t(6359),F={name:"HomePage",data:()=>({currencies:[],meta:"",loading:!0}),components:{BaseBill:w.Z,BaseCurrency:$,BaseLoader:z.Z},async mounted(){const e=await this.$store.dispatch("fetchCurrency");this.currencies=e,this.meta=new Date(Date.now()),this.loading=!1},methods:{async refresh(){this.loading=!0;const e=await this.$store.dispatch("fetchCurrency");await this.$store.dispatch("checkForAuth"),this.currencies=e,this.meta=new Date(Date.now()),this.loading=!1}}};const I=(0,C.Z)(F,[["render",p],["__scopeId","data-v-01be2cd6"]]);var W=I}}]);
//# sourceMappingURL=717.9d02d833.js.map