<template>
  <div class="bill">
    <div class="card_wrapper" v-if="$store.state.auth.user">
        <h2 class="card-title">Счет в валюте</h2>
        <p class="currency_bill"
          v-for="curr, ind in rates"
          :key="ind"
        >
                <span>{{ getBillValue(curr.RUB) }}</span>
                <span>{{ ind }}</span>
        </p>
    </div>
    <div class="handler" v-else>
      <base-loader></base-loader>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rates'],
  methods: {
    getBillValue(currValue) {
      const userInfo = this.$store.state.auth.userInfo
      if(userInfo) { 
        const val = userInfo.bill / currValue
        return `${val.toFixed(2)}`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card_wrapper{
  margin-top: 10px;
  width: calc(100% - 20px);
    .card-title {
      font-size: 22px;
      letter-spacing: 1.05px;
    }
  }
  .bill {
    background-color: white;
    color: $dark-color;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    min-height: 400px;
    width: 250px;
    border: 1px solid $light-gray;
    box-shadow: 1px 10px 20px 1px $light-gray;
    .currency_bill {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid $light-gray;
      margin-top: 40px;
      padding-bottom: 15px;
      font-weight: bold;
      font-size: 16px;
      &:last-child {
        border-bottom: none;
      }
    }
  }
</style>