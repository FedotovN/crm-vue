<template>
  <div>
    <div class="page-title">
      <h3>История записей</h3>
    </div>
  <history-table></history-table>
</div>
</template>

<script>
import HistoryTable from '@/components/HistoryTable.vue';
export default {
  name: 'HistoryPage',
  components: {
    HistoryTable
  },
}
</script>

<style lang="scss" scoped>
.page-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>