"use strict";(self["webpackChunkcrm_course"]=self["webpackChunkcrm_course"]||[]).push([[813],{2813:function(a,r,e){e.r(r),e.d(r,{default:function(){return y}});var t=e(3396),l=e(7139);const n=a=>((0,t.dD)("data-v-6cd10f6c"),a=a(),(0,t.Cn)(),a),s={class:"page-title"},i=n((()=>(0,t._)("h3",null,"Планирование",-1))),o={key:0,class:"planning_wrapper"},c={key:0,class:"wrapper"},d={class:"category_plan_text"},u={class:"text"},g={key:0,class:"fa-solid fa-triangle-exclamation"},p={class:"progress"},_={key:1,class:"handler_planning"},m=n((()=>(0,t._)("h2",null,"На данный момент операций по категориям не проводилось",-1))),v={class:"links"},w={key:1,class:"preloader"};function f(a,r,e,n,f,h){const k=(0,t.up)("router-link"),A=(0,t.up)("base-loader");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",s,[i,(0,t._)("h4",null,"Общая сумма затрат: "+(0,l.zw)(h.allCategoriesAmount)+" рублей",1)]),f.loading?((0,t.wg)(),(0,t.iD)("div",w,[(0,t.Wm)(A)])):((0,t.wg)(),(0,t.iD)("div",o,[f.info.length?((0,t.wg)(),(0,t.iD)("div",c,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(f.info,(a=>((0,t.wg)(),(0,t.iD)("div",{class:"category_plan",key:a.catId},[(0,t._)("div",d,[(0,t._)("div",u,[(0,t._)("strong",null,(0,l.zw)(a.catName)+":",1),(0,t._)("p",null,(0,l.zw)(a.overallAmount)+" из "+(0,l.zw)(a.catLimit)+" рублей",1)]),a.overallAmount>a.catLimit?((0,t.wg)(),(0,t.iD)("i",g)):(0,t.kq)("",!0)]),(0,t._)("div",p,[(0,t._)("div",{class:"progress_bar",style:(0,l.j5)({width:h.progressBarWidth(a.overallAmount,a.catLimit)+"%","background-color":h.progressBarColor(h.progressBarWidth(a.overallAmount,a.catLimit))})},null,4)])])))),128))])):((0,t.wg)(),(0,t.iD)("div",_,[m,(0,t._)("div",v,[(0,t.Wm)(k,{to:"/categories"},{default:(0,t.w5)((()=>[(0,t.Uk)("Создание категорий")])),_:1}),(0,t.Wm)(k,{to:"/record"},{default:(0,t.w5)((()=>[(0,t.Uk)("Создание записей")])),_:1})])]))]))])}var h={name:"PlanningPage",data(){return{info:[],loading:!0}},async mounted(){this.info=await this.$store.dispatch("fetchPlanningInfo"),this.loading=!1},methods:{progressBarWidth(a,r){return a/r*100},progressBarColor(a){return a<45?"#43AA8B":a<60?"#FAA613":a<80?"#ED254E":"#1E1E24"}},computed:{allCategoriesAmount(){return this.info.reduce(((a,r)=>a+r.overallAmount),0)}}},k=e(89);const A=(0,k.Z)(h,[["render",f],["__scopeId","data-v-6cd10f6c"]]);var y=A}}]);
//# sourceMappingURL=813.ef3c35a0.js.map