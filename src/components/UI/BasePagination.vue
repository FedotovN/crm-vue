<template>
  <div class="pagination_wrapper">
    <p>Страница {{ page }} / {{ pageAmount }}</p>
    <div class="pagination">
      <div class="left" @click="changePage( page - 1)">
        <i class="fa-solid fa-angle-left"></i>
      </div>
      <div class="base_row" v-if="!wrapPages">
        <div
        @click="changePage(pageNumber)"
        class="pagination_page"
        v-for="pageNumber of pageAmount"
        :key = "pageNumber"
        :class="{
            'active_page': page === pageNumber
        }"
        >
            {{ pageNumber }}
      </div>
      </div>
      <div class="base_row" v-else>
        <div
        v-if="page - 1 > 0"
        class="left_page pagination_page"
        @click="changePage(page - 1)"
        >
        ..
        {{ page - 1 }}
        </div>
        <div
        @click="changePage(page)"
        class="pagination_page active_page"
        >
         {{ page }}
        </div>
        <div
        v-if="page + 1 <= pageAmount"
        class="right_page pagination_page"
        @click="changePage(page + 1)"
        >
          {{ page + 1 }}
          ..
        </div>
      </div>
      <div class="right" @click = 'changePage( page + 1 )'>
        <i class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasePagination',
  props: ['itemsAmount', 'limit', 'maxToRender'],
  data() {
    return {
      page: 1,
      wrapPages: false
    }
  },
  methods: {
    changePage(number) {
      if(number <= this.pageAmount && number > 0) {
        this.page = number
        this.$emit('pageChanged', number)
      }
    }
  },
  computed: {
    pageAmount(){
      const amount = Math.ceil(this.itemsAmount / this.limit)
      if(amount > this.maxToRender)
        this.wrapPages = true
      else
        this.wrapPages = false
      return amount
    }
  }
}
</script>

<style lang="scss" scoped>
  p {
    padding: 10px 0;
  }
  .pagination, .base_row {
    height: 45px;
    gap: 5px;
    display: flex;
    align-items: center;
    .left, .right {
      background-color: white;
      border: 1px solid $light-gray;
      border-radius: 8px;
      height: 100%;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: .3s;
      &:hover {
        box-shadow: 5px 5px 10px 1px $light-gray;
      }
    }
    .pagination_page {
      background-color: white;
      border: 1px solid $light-gray;
      border-radius: 8px;
      height: 100%;
      flex: 1;
      min-width: 40px;
      max-width: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 20px;
      transition: .3s;
      user-select: none;
      &:hover, &.active_page {
        box-shadow: 5px 5px 10px 1px $light-gray;
      }

    }
  }
</style>