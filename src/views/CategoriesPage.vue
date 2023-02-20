<template>
  <div class="content">
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <div class="preloader" v-if="loading">
      <base-loader></base-loader>
    </div>
    <div class="row" v-else>
      <create-category @categoryCreated="createdCategory"></create-category>
      <edit-category :categories="categories" @categoryEdited="categoryEdited" v-if="!editing"></edit-category>
      <base-loader v-else></base-loader>
    </div>
  </div>
</template>

<script>
import CreateCategory from '@/components/Categories/CreateCategory.vue';
import EditCategory from '@/components/Categories/EditCategory.vue';
export default {
  data() {
    return {
        loading: true,
        categories: [],
        editing: false
      }
  },
  methods: {
    async createdCategory(category) {
      this.categories.push(category)
    },
    async categoryEdited(){
      try {
        this.editing = true
        this.categories = await this.$store.dispatch('fetchCategories')
        this.editing = false
      }
      catch(e) {
        console.log(e)
      }
    }
  },
    async mounted() {
      try {
        this.categories = await this.$store.dispatch('fetchCategories')
        this.loading = false
      }
      catch(e) {
        console.log(e)
      }
    },
    components: {
     CreateCategory, EditCategory
    }
  }
</script>

<style lang='scss' scoped>
.content {
  display: flex;
  flex-flow: column nowrap;
    .row {
      padding-top: 20px;
      gap: 20px;
      max-width: 1200px;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
  }
  .preloader{
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 150px);
  }
}
</style>