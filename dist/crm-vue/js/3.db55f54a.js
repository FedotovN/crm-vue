"use strict";(self["webpackChunkcrm_course"]=self["webpackChunkcrm_course"]||[]).push([[3],{3:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var i=a(3396);const s=e=>((0,i.dD)("data-v-1b67d29c"),e=e(),(0,i.Cn)(),e),r={class:"content"},o=s((()=>(0,i._)("div",{class:"page-title"},[(0,i._)("h3",null,"Категории")],-1))),l={key:0,class:"preloader"},n={key:1,class:"row"};function d(e,t,a,s,d,c){const u=(0,i.up)("base-loader"),m=(0,i.up)("create-category"),h=(0,i.up)("edit-category");return(0,i.wg)(),(0,i.iD)("div",r,[o,d.loading?((0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(u)])):((0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(m,{onCategoryCreated:c.createdCategory},null,8,["onCategoryCreated"]),d.editing?((0,i.wg)(),(0,i.j4)(u,{key:1})):((0,i.wg)(),(0,i.j4)(h,{key:0,categories:d.categories,onCategoryEdited:c.categoryEdited},null,8,["categories","onCategoryEdited"]))]))])}a(7658);var c=a(9242),u=a(7139);const m={class:"create_category"},h=(0,i._)("div",{class:"page-subtitle"},[(0,i._)("h2",null,"Создать")],-1);function g(e,t,a,s,r,o){const l=(0,i.up)("base-input"),n=(0,i.up)("base-button");return(0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("div",null,[h,(0,i._)("form",{onSubmit:t[2]||(t[2]=(0,c.iM)(((...e)=>o.handleCreation&&o.handleCreation(...e)),["prevent"]))},[(0,i.Wm)(l,{class:(0,u.C_)({incorrect:e.v$.name.$errors.length}),modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.name=t),placehldr:"Введите название"},{default:(0,i.w5)((()=>[(0,i.Uk)(" Название ")])),_:1},8,["class","modelValue"]),(0,i.Wm)(l,{class:(0,u.C_)({incorrect:e.v$.limit.$errors.length}),modelValue:e.limit,"onUpdate:modelValue":t[1]||(t[1]=t=>e.limit=t),modelModifiers:{number:!0},placehldr:"Введите лимит"},{default:(0,i.w5)((()=>[(0,i.Uk)(" Лимит затрат ")])),_:1},8,["class","modelValue"]),(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Создать")])),_:1})],32)])])}var p=a(7871),y=a(9117),C=a(3053),v={components:{BaseInput:p.Z},name:"CreateCategory",data:()=>({v$:(0,C.ZP)(),name:"",limit:""}),validations(){return{name:{required:y.C1},limit:{required:y.C1,minValue:(0,y.uv)(.01)}}},methods:{async handleCreation(){if(this.v$.$validate(),!this.v$.$errors.length){const e={name:this.name,limit:this.limit},t=await this.$store.dispatch("createCategory",e);this.name=this.limit="",this.v$.$reset(),this.$emit("categoryCreated",t)}}}},_=a(89);const $=(0,_.Z)(v,[["render",g]]);var f=$;const w={key:0},k={class:"page-subtitle"},b=(0,i._)("h2",null,"Редактировать",-1),V={class:"input_field"},U={class:"buttons"},E={key:1,class:"handler_categories"},W=(0,i._)("h2",null,"Категорий пока нет! :(",-1),D=(0,i._)("p",null,"Вы можете создать новую категорию, используя форму слева",-1),Z=[W,D];function q(e,t,a,s,r,o){const l=(0,i.up)("base-select"),n=(0,i.up)("base-input"),d=(0,i.up)("base-button");return(0,i.wg)(),(0,i.iD)("div",{class:"edit_category",key:r.updateCount},[a.categories.length?((0,i.wg)(),(0,i.iD)("div",w,[(0,i._)("div",k,[b,(0,i._)("div",V,[(0,i.Wm)(l,{modelValue:r.category,"onUpdate:modelValue":t[0]||(t[0]=e=>r.category=e),options:o.mutateCategories},{default:(0,i.w5)((()=>[(0,i.Uk)(" Выберите категорию ")])),_:1},8,["modelValue","options"])])]),(0,i._)("form",{onSubmit:t[3]||(t[3]=(0,c.iM)((()=>{}),["prevent"]))},[(0,i.Wm)(n,{modelValue:r.name,"onUpdate:modelValue":t[1]||(t[1]=e=>r.name=e),placehldr:"Введите название",class:(0,u.C_)({incorrect:r.v$.name.$errors.length})},{default:(0,i.w5)((()=>[(0,i.Uk)(" Название ")])),_:1},8,["modelValue","class"]),(0,i.Wm)(n,{modelValue:r.limit,"onUpdate:modelValue":t[2]||(t[2]=e=>r.limit=e),placehldr:"Введите лимит",class:(0,u.C_)({incorrect:r.v$.limit.$errors.length})},{default:(0,i.w5)((()=>[(0,i.Uk)(" Лимит ")])),_:1},8,["modelValue","class"]),(0,i._)("div",U,[(0,i.Wm)(d,{class:"edit_button",onClick:o.handleEdit},{default:(0,i.w5)((()=>[(0,i.Uk)("Редактировать")])),_:1},8,["onClick"]),(0,i.Wm)(d,{class:"delete_button",onClick:o.deleteCategory},{default:(0,i.w5)((()=>[(0,i.Uk)("Удалить")])),_:1},8,["onClick"])])],32)])):((0,i.wg)(),(0,i.iD)("div",E,Z))])}var M={name:"EditCategory",props:["categories"],data(){return{v$:(0,C.ZP)(),name:"",limit:"",id:"",category:"",updateCount:0}},validations(){return{name:{required:y.C1},limit:{required:y.C1,minValue:(0,y.uv)(.01)}}},methods:{async handleEdit(){if(this.v$.$validate(),!this.v$.$errors.length){await this.$store.dispatch("editCategory",{name:this.name,limit:this.limit,id:this.id});this.v$.$reset(),this.$emit("categoryEdited")}},async deleteCategory(){this.id&&await this.$store.dispatch("deleteCategory",this.id),this.$emit("categoryEdited")}},computed:{mutateCategories(){let e=[];return this.categories.forEach((t=>{e.push({name:t.title,value:t.id})})),e}},watch:{category(){this.categories.forEach((e=>{e.id==this.category&&(this.name=e.title,this.limit=e.limit,this.id=e.id)}))}}};const j=(0,_.Z)(M,[["render",q]]);var I=j,P={data(){return{loading:!0,categories:[],editing:!1}},methods:{async createdCategory(e){this.categories.push(e)},async categoryEdited(){try{this.editing=!0,this.categories=await this.$store.dispatch("fetchCategories"),this.editing=!1}catch(e){console.log(e)}}},async mounted(){try{this.categories=await this.$store.dispatch("fetchCategories"),this.loading=!1}catch(e){console.log(e)}},components:{CreateCategory:f,EditCategory:I}};const S=(0,_.Z)(P,[["render",d],["__scopeId","data-v-1b67d29c"]]);var B=S}}]);
//# sourceMappingURL=3.db55f54a.js.map