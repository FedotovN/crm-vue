<template>
  <div>
  <div class="page-title">
    <h3>Планирование</h3>
    <h4>Общая сумма затрат: {{ allCategoriesAmount }} рублей</h4>
  </div>

  <div class="planning_wrapper" v-if="!loading">
    <div class="wrapper" v-if="info.length">
      <div class="category_plan"
      v-for="cat in info"
      :key="cat.catId"
      >
        <div class="category_plan_text">
          <div class="text">
            <strong>{{cat.catName}}:</strong>
            <p>{{cat.overallAmount}} из {{cat.catLimit}} рублей</p>
          </div>
          <i class="fa-solid fa-triangle-exclamation"
          v-if="cat.overallAmount > cat.catLimit"
          ></i>
        </div>
        <div class="progress" >
          <div
              class="progress_bar"
              :style="{
                'width': progressBarWidth(cat.overallAmount, cat.catLimit) + '%',
                'background-color': progressBarColor(progressBarWidth(cat.overallAmount, cat.catLimit))
                }"
          ></div>
        </div>
      </div>
    </div>
    <div class="handler_planning" v-else>
      <h2>На данный момент операций по категориям не проводилось</h2>
      <div class="links">
        <router-link to="/categories">Создание категорий</router-link>
        <router-link to="/record">Создание записей</router-link>
      </div>
    </div>
  </div>
  <div class="preloader" v-else>
    <base-loader></base-loader>
  </div>
</div>
</template>

<script>
export default {
    name: "PlanningPage",
    data(){
      return {
        info: [],
        loading: true
      }
    },
    async mounted(){
      this.info = await this.$store.dispatch('fetchPlanningInfo')
      this.loading = false
    },
    methods: {
      progressBarWidth(overall, limit){
        return (overall / limit) * 100
      },
      progressBarColor(width){
        return width < 45
        ? '#43AA8B'
        : width < 60
        ? '#FAA613'
        : width < 80
        ? '#ED254E'
        : '#1E1E24'
      }
    },
    computed: {
      allCategoriesAmount(){
        return this.info.reduce((acc, item)=>{
          return acc + item.overallAmount
        }, 0)
      }
    }
}
</script>

<style lang="scss" scoped>
  .planning_wrapper {
    background-color: white;
    margin-top: 20px;
    border-radius: 8px;
    border: 1px solid $light-gray;
    box-shadow: 1px 10px 20px 1px $light-gray;
    max-height: calc(100vh - 180px);
    overflow-y: scroll;
  }
  .preloader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 150px);
  }
  .page-title {
    display: flex;
    justify-content: space-between;
    h4 {
      margin-top: 10px;
    }
  }
  .category_plan {
    height: 80px;
    margin: 10px 0;
    padding: 10px 20px;
    border-bottom: 1px solid $light-gray;
    display: flex;
    flex-flow: column nowrap;
    .category_plan_text {
      display: flex;
      justify-content: space-between;
      p {
        margin-top: 10px;
      }
      i {
        color: $error-color;
        font-size: 25px;
      }
    }
    .progress{ 
      margin-top: 20px;
      height: 15px;
      background-color: $light-gray;
      .progress_bar {
        max-width: 100%;
        height: 15px;
        z-index: 1;
      }
    }
  }
.handler_planning {
  margin-top: 20px;
  padding-left: 20px;
  min-height: 400px;
  .links {
    margin-top: 20px;
    display: flex;
    gap: 20px;
  }
}
</style>