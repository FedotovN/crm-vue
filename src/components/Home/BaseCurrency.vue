<template>
  <div class="currency">
    <div class="card_wrapper">
      <div class="header"> 
        <h2 class="card-title">Курс валют</h2>
        <span>От RUB</span>
      </div>
      <table>
        <thead>
        <tr>
          <th>Валюта</th>
          <th>Курс</th>
          <th>Дата</th>
        </tr>
        </thead>

        <tbody>
        <tr 
          v-for="curr, ind in currencies"
          :key="ind">
          <td>{{ ind }}</td>
          <td>{{ curr.RUB }}</td>
          <td>{{ filterDate(date) }}</td>
        </tr>
        </tbody>
      </table>
      </div>
    </div>
</template>

<script>
import { dataFilter } from '@/filters/dataFilter';
export default {
  props: ['currencies', 'date'],
  methods: {
    filterDate(val){
      const option = {year: "numeric", month: "numeric", day:'numeric'}
      return dataFilter.filterDate(val, option)
    }
  }
}
</script>

<style lang="scss" scoped>
  .card_wrapper{
    background-color: white;
    margin-top: 10px;
    width: calc(100% - 20px);
    min-width: 250px;
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
    .header{
      display: flex;
      justify-content: space-between;
    }
      .card-title {
        font-size: 22px;
        letter-spacing: 1.05px;
      }
    }
    .currency {
      flex: 1;
      height: auto;
      border: 1px solid $light-gray;
      box-shadow: 1px 10px 20px 1px $light-gray;
      border-collapse: collapse;
      min-height: 400px;
      table {
        text-align: center;
        table-layout: fixed;
        border-collapse: collapse;
        width: 100%;
        td {
          padding: 20px 0 20px 0;
          border-top: 1px solid $light-gray;
          border-bottom: 1px solid $light-gray;
        }
        th {
          font-size: 20px;
          font-weight: bold;
          padding: 15px 0 15px 0;
        }
      }
}
  .currency {
    color: $dark-color;
    border-radius: 8px;
    display: flex;
    justify-content: center;
}
</style>