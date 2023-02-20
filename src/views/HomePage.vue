<template>
  <div class="content">
    <div class="content_page">
      <div class="page-title">
        <h3>Счет</h3>
        <div class="refresh_btn" @click="refresh">
          <i class="fa-solid fa-refresh"></i>
        </div>
      </div>
      <div class="wrapper">
        <base-bill :rates="currencies" v-show="!loading"></base-bill>
        <base-currency :currencies="currencies" :date="meta" v-show="!loading"></base-currency>
      </div>
    </div>
    <div class="preloader_home" v-if="loading">
        <base-loader></base-loader>     
    </div>
  </div>
</template>

<script>
import BaseBill from '@/components/Home/BaseBill.vue';
import BaseCurrency from '@/components/Home/BaseCurrency.vue';
import BaseLoader from '@/components/UI/BaseLoader.vue';
export default {
  name: "HomePage",
  data: () => ({
    currencies: [],
    meta: '',
    loading: true
  }),
  components: {
    BaseBill, BaseCurrency,
    BaseLoader
  },
  async mounted() {
    const currData = await this.$store.dispatch('fetchCurrency')
    this.currencies = currData
    this.meta = new Date(Date.now())
    this.loading = false;
  },
  methods: {
    async refresh() {
      this.loading = true
      const currData = await this.$store.dispatch('fetchCurrency')
      await this.$store.dispatch("checkForAuth")
      this.currencies = currData
      this.meta = new Date(Date.now())
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.preloader_home{
    height: calc(100vh - 160px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.content {
  display: flex;
  flex-flow: column nowrap;
  height: calc(100vh - 100px);
  width: 100%;
  .wrapper {
    max-width: 1200px;
    flex: 1;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    flex-flow: row wrap;
  }
  .page-title{
    display: flex;
    gap: 50px;
    align-items: center;
    width: 100%;
    .refresh_btn {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      background-color: $accent-color;
      width: 80px;
      height: 40px;
      transition: .3s;
      cursor: pointer;
      i {
        font-size: 22px;
      }
      &:hover{
        background-color: $active-color;
        i {
          color: $white;
          transform: rotateZ(180deg);
        }
      }
    }
  }
}
</style>