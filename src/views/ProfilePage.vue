<template>
  <div>
    <base-dialog v-if="showDialog" @closeDialog="showDialog=false">
      <div class="warning">
        <base-loader v-if="dialogLoading"></base-loader>
        <div class="header" v-if="!dialogLoading">
          <h4>Вы уверены, что хотите {{ operationName }}?</h4>
          <p>Операция <strong>необратима</strong></p>
        </div>
        <div class="body" v-if="!dialogLoading">
          <base-button class="agree" @click="handleInput">Продолжить</base-button>
          <base-button class="disagree" @click="showDialog=false">Отмена</base-button>
        </div>
      </div>
    </base-dialog>
    <div class="page-title">
      <h3>Профиль</h3>
    </div>

    <form @submit.prevent = 'handleForm' v-if="!loading">
      <base-input
      v-model="name"
      >
      Имя пользователя
      </base-input>

      <base-button>
        <i class="fa-solid fa-check"></i>
      </base-button>
    </form>
    <div class="preloader" v-else>
      <base-loader></base-loader>
    </div>
    <div class="settings">
      <p>Параметры</p>
      <base-button class="delete_btn" @click="openDialog('удалить записи')">Удалить историю записей</base-button>
      <base-button class="delete_btn" @click="openDialog('удалить категории')">Удалить все категории</base-button>
    </div>
  </div>
</template>

<script>
import BaseBill from '@/components/Home/BaseBill.vue'
export default {
  components: { BaseBill },
  name: "ProfilePage",
  data() {
    return {
      loading: true,
      name: '',
      operationName: '',
      showDialog: false,
      dialogLoading: false
    }
  },
  methods: {
    async handleForm(){
      this.loading = true
      await this.$store.dispatch('setUserName', this.name)
      this.loading = false
    },
    openDialog(operationName) {
      this.showDialog = true
      this.operationName = operationName
    },
    async handleInput(){
      this.dialogLoading = true
      switch(this.operationName){
        case 'удалить записи': 
          await this.$store.dispatch('removeRecords')
          break
        case 'удалить категории':
          await this.$store.dispatch('removeCategories')
          break
        case 'удалить пользователя':
          await this.$store.dispatch('removeUser')
          break
      }
      this.dialogLoading = false
      this.showDialog = false
    }
  },
  mounted() {
    this.name = this.$store.state.auth.userInfo.name
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
form {
  margin-top: 20px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid $light-gray;
  box-shadow: 5px 5px 10px 1px $light-gray;
  padding: 20px;
  max-width: 300px;

}
.preloader {
  height: calc(100vh - 160px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.settings {
  margin-top: 20px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid $light-gray;
  box-shadow: 5px 5px 10px 1px $light-gray;
  padding: 20px;
  max-width: 300px;
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  .delete_btn {
    background-color: $error_color;
  }
}
.warning {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  max-width: 400px;
  .header {
    width: 100%;
    h4 {
      padding-bottom: 20px;
    }
    padding-bottom: 20px;
    border-bottom: 1px solid $light-gray;
  }
  .body {
    padding-top: 20px;
    display: flex;
    gap: 30px;
    width: 100%;
    .agree, .disagree {
      padding: 0 10px;
    }
    .agree {
      flex: 1;
      background-color: $error-color;
    }
    .disagree {
      flex: 3;
    }
  }
}
</style>