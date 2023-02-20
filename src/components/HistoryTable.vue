<template>
<div class="history_wrapper">
  <div class="header">
    <base-pagination
      v-if="info.length > recordsLimit"
      :itemsAmount="info.length"
      :limit="recordsLimit"
      :maxToRender="10"
      @pageChanged="changePage"
    />
  </div>
  <div class="table_wrapper" v-if="!loading">
    <table v-if="info.length">
      <thead>
        <tr>
          <th>Сумма</th>
          <th>Дата</th>
          <th>Категория</th>
          <th>Тип</th>
          <th>Открыть</th>
        </tr>
      </thead>

      <tbody>
        <tr
        v-for="item, ind in info.slice(((page-1) * recordsLimit), ((page-1) * recordsLimit) + recordsLimit)"
        :key="ind"
        >
          <td>{{item.amount}}</td>
          <td>{{filterDate(new Date(item.date))}}</td>
          <td>{{item.category}}</td>
          <td>
            <span :class="item.type">{{
                item.type === 'outcome'
                    ? 'Расход'
                    : 'Доход'
                }}
            </span>
          </td>
          <td>
            <router-link :to="'record/' + item.id">
              <base-button>
              <i class="fa-solid fa-magnifying-glass"></i>
              </base-button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="handler_history" v-else>
      <h2> Записей пока нет! </h2>
      <router-link to="/record">Создайте новую запись здесь</router-link>
    </div>
</div>
<div class="preloader_history" v-else>
    <base-loader></base-loader>
</div>
</div>
</template>

<script>
import { dataFilter } from '@/filters/dataFilter'
export default {
    name: "HistoryTable",
    data(){
        return {
            loading: true,
            info: [],
            page: 1,
            recordsLimit: 4
        }
    },
    async mounted() {
        this.info = await this.$store.dispatch('fetchHistoryInfo')
        this.loading = false
    },
    methods: {
      filterDate(value){
        return dataFilter.filterDate(value)
      },
      changePage(number) {
        this.page = number
      }
    }
  }
</script>

<style lang="scss">
.history_wrapper {
  max-width: 1200px;
  .header {
    padding-top: 10px;
    display: flex;
    gap: 50px;
  }
}
.table_wrapper {
    margin-top: 10px;
    max-width: 1200px;
    border-radius: 8px;
    height: auto;
    border: 1px solid $light-gray;
    box-shadow: 1px 10px 20px 1px $light-gray;
    border-collapse: collapse;
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
    background-color: white;
    table {
        text-align: center;
        flex: 1;
        table-layout: fixed;
        border-collapse: collapse;
        .row_number {
            font-size: 20px;
        }
        td {
            padding: 20px;
            border-top: 1px solid $light-gray;
            border-bottom: 1px solid $light-gray;
            .outcome, .income {
                color: white;
                padding: 7px;
                border-radius: 4px;
            }
            .outcome { background-color: $error-color; }
            .income { background-color: $accent-color }
        }
        th {
            font-size: 20px;
            font-weight: bold;
            padding: 15px 0;
        }
    }
}
.preloader_history {
    width: 100%;
    height: calc(100vh - 160px);
    display: flex;
    justify-content: center;
    align-items: center;
}
.handler_history {
  padding-left: 20px;
  min-height: 400px;
  h2, a {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>