"use strict";(self["webpackChunkcrm_course"]=self["webpackChunkcrm_course"]||[]).push([[543],{9642:function(a,e,s){s.d(e,{Z:function(){return p}});var l=s(3396),t=s(7139);const i=a=>((0,l.dD)("data-v-910ae19e"),a=a(),(0,l.Cn)(),a),o={class:"bill"},n={key:0,class:"card_wrapper"},d=i((()=>(0,l._)("h2",{class:"card-title"},"Счет в валюте",-1))),r={key:1,class:"handler"};function c(a,e,s,i,c,u){const g=(0,l.up)("base-loader");return(0,l.wg)(),(0,l.iD)("div",o,[a.$store.state.auth.user?((0,l.wg)(),(0,l.iD)("div",n,[d,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.rates,((a,e)=>((0,l.wg)(),(0,l.iD)("p",{class:"currency_bill",key:e},[(0,l._)("span",null,(0,t.zw)(u.getBillValue(a.RUB)),1),(0,l._)("span",null,(0,t.zw)(e),1)])))),128))])):((0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(g)]))])}var u={props:["rates"],methods:{getBillValue(a){const e=this.$store.state.auth.userInfo;if(e){const s=e.bill/a;return`${s.toFixed(2)}`}}}},g=s(89);const h=(0,g.Z)(u,[["render",c],["__scopeId","data-v-910ae19e"]]);var p=h},5543:function(a,e,s){s.r(e),s.d(e,{default:function(){return D}});var l=s(3396),t=s(7139),i=s(9242);const o=a=>((0,l.dD)("data-v-343170fa"),a=a(),(0,l.Cn)(),a),n={class:"warning"},d={key:1,class:"header"},r=o((()=>(0,l._)("p",null,[(0,l.Uk)("Операция "),(0,l._)("strong",null,"необратима")],-1))),c={key:2,class:"body"},u=o((()=>(0,l._)("div",{class:"page-title"},[(0,l._)("h3",null,"Профиль")],-1))),g=o((()=>(0,l._)("i",{class:"fa-solid fa-check"},null,-1))),h={key:2,class:"preloader"},p={class:"settings"},m=o((()=>(0,l._)("p",null,"Параметры",-1)));function w(a,e,s,o,w,k){const _=(0,l.up)("base-loader"),f=(0,l.up)("base-button"),v=(0,l.up)("base-dialog"),D=(0,l.up)("base-input");return(0,l.wg)(),(0,l.iD)("div",null,[w.showDialog?((0,l.wg)(),(0,l.j4)(v,{key:0,onCloseDialog:e[1]||(e[1]=a=>w.showDialog=!1)},{default:(0,l.w5)((()=>[(0,l._)("div",n,[w.dialogLoading?((0,l.wg)(),(0,l.j4)(_,{key:0})):(0,l.kq)("",!0),w.dialogLoading?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("h4",null,"Вы уверены, что хотите "+(0,t.zw)(w.operationName)+"?",1),r])),w.dialogLoading?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",c,[(0,l.Wm)(f,{class:"agree",onClick:k.handleInput},{default:(0,l.w5)((()=>[(0,l.Uk)("Продолжить")])),_:1},8,["onClick"]),(0,l.Wm)(f,{class:"disagree",onClick:e[0]||(e[0]=a=>w.showDialog=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)("Отмена")])),_:1})]))])])),_:1})):(0,l.kq)("",!0),u,w.loading?((0,l.wg)(),(0,l.iD)("div",h,[(0,l.Wm)(_)])):((0,l.wg)(),(0,l.iD)("form",{key:1,onSubmit:e[3]||(e[3]=(0,i.iM)(((...a)=>k.handleForm&&k.handleForm(...a)),["prevent"]))},[(0,l.Wm)(D,{modelValue:w.name,"onUpdate:modelValue":e[2]||(e[2]=a=>w.name=a)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Имя пользователя ")])),_:1},8,["modelValue"]),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[g])),_:1})],32)),(0,l._)("div",p,[m,(0,l.Wm)(f,{class:"delete_btn",onClick:e[4]||(e[4]=a=>k.openDialog("удалить записи"))},{default:(0,l.w5)((()=>[(0,l.Uk)("Удалить историю записей")])),_:1}),(0,l.Wm)(f,{class:"delete_btn",onClick:e[5]||(e[5]=a=>k.openDialog("удалить категории"))},{default:(0,l.w5)((()=>[(0,l.Uk)("Удалить все категории")])),_:1})])])}var k=s(9642),_={components:{BaseBill:k.Z},name:"ProfilePage",data(){return{loading:!0,name:"",operationName:"",showDialog:!1,dialogLoading:!1}},methods:{async handleForm(){this.loading=!0,await this.$store.dispatch("setUserName",this.name),this.loading=!1},openDialog(a){this.showDialog=!0,this.operationName=a},async handleInput(){switch(this.dialogLoading=!0,this.operationName){case"удалить записи":await this.$store.dispatch("removeRecords");break;case"удалить категории":await this.$store.dispatch("removeCategories");break;case"удалить пользователя":await this.$store.dispatch("removeUser");break}this.dialogLoading=!1,this.showDialog=!1}},mounted(){this.name=this.$store.state.auth.userInfo.name,this.loading=!1}},f=s(89);const v=(0,f.Z)(_,[["render",w],["__scopeId","data-v-343170fa"]]);var D=v}}]);
//# sourceMappingURL=543.12c71b4f.js.map