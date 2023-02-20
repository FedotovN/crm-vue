<template>
  <div class="record">
    <div class="page-title">
      <h3>Новая запись</h3>
    </div>

    <form class="record_form" v-if="!loading" @submit.prevent="handleForm">
      <div class="form_header">
        <div class="radio">
          <strong>Тип записи:</strong>
          <div class="radio_input">
            <label for="income">Доход</label>
            <input
                v-model="type"
                name="type"
                type="radio"
                value="income"
                id="income"
            />
          </div>
          <div class="radio_input">
            <label for="outcome">Расход</label>
            <input
              v-model="type"
                name="type"
                type="radio"
                value="outcome"
                id="outcome"
            />
          </div>
        </div>
        <div class="select" v-if="categories.length">
          <base-select
          v-model="category"
          :options="categories"
          >Выберите категорию</base-select>
        </div>
        <p v-else>Категорий пока нет. <router-link to="/categories">Создать</router-link></p>
      </div>
      <base-input
      v-model.number = "amount"
      :placehldr="'Введите сумму'"
      :class="{
        'incorrect': v$.amount.$errors.length
      }"
      >
        Сумма
      </base-input>

      <base-input
      v-model="description"
      :placehldr="'Введите описание'"
      :class="{
        'incorrect': v$.description.$errors.length
      }"
      >Описание</base-input>

      <base-button v-if="category">Создать <i class="fa-solid fa-check"></i></base-button>
      <p v-else class="handle_category">Выберите категорию операции выше</p>
    </form>
    <div class="handler" v-else>
      <base-loader></base-loader>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue'
import useVuelidate from '@vuelidate/core'
import {required, minValue} from '@vuelidate/validators'
export default {
  components: { BaseButton },
  name: "RecordPage",
  data() {
    return {
      v$: useVuelidate(),
      amount: 1,
      description: '',
      category: '',
      loading: true,
      categories: [],
      type: 'income'
    }
  },
  validations(){
    return {
      amount: {required, minValue: minValue(0.01)},
      description: {required},
      category: {required},
      type: {required}
    }
  },
  async mounted() {
    const temp = await this.$store.dispatch('fetchCategories')
    temp.forEach(el => {
      this.categories.push({
        name: el.title,
        value: el.id
      })
    })
    this.loading = false
  },
  computed: {
    canCreateRecord() {
      const bill = this.$store.state.auth.userInfo.bill
      if(this.type === "outcome"){
        if(bill >= this.amount) return true
        else return false
      }
      return true
    }
  },
  methods: {
    async handleForm() {
      this.v$.$validate()
      if(!this.v$.$errors.length){
        if(this.canCreateRecord) { this.pushRecord() }
        else alert(`Для совершения операции на вашем счету недостаточно средств - ${this.amount - this.$store.state.auth.userInfo.bill}`)
      }
    },
    async pushRecord() {
      const newRecord = {description: this.description, amount: this.amount,
                         date: new Date().toJSON(), category: this.category, type: this.type}
      const bill = newRecord.type === "income"
        ? this.$store.state.auth.userInfo.bill += newRecord.amount
        : this.$store.state.auth.userInfo.bill -= newRecord.amount
      await this.$store.dispatch('pushRecord', newRecord)
      await this.$store.dispatch('setUserBill', bill)

      this.description = ''
      this.amount = 1
      this.v$.$reset()
    }
  }
}
</script>

<style lang="scss" >
  .page-title {
    margin-top: 10px;
  }
  .record_form {
    margin-top: 20px;
    min-height: 400px;
    max-width: 600px;
    background-color: white;
    border-radius: 8px;
    border: 1px solid $light-gray;
    box-shadow: 1px 10px 20px 1px $light-gray;
    display: flex;
    flex-flow: column nowrap;
    gap: 30px;  
    padding: 25px 20px;
    .handle_category{
      text-align: center;
      width: 100%;
      font-weight: bold;
    }
    .form_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid $light-gray;
      padding-bottom: 20px;
      .radio {
        display: flex;
        align-items: center;
        gap: 15px;
        .radio_input {
          display: flex;
          align-items: center;
          & label { 
            margin-right: 10px;
            cursor: pointer;
          }
          & input[type="radio"] {
            cursor: pointer;
            border-radius: 50%;
            border: 1px solid $light-gray;
            height: 20px;
            width: 20px;
            appearance: none;
            &:checked {
              background-color: $accent-color;
            }
          }
        }
      }
    }
  }
  .handler {
    width: 100%;
    height: calc(100vh - 150px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .incorrect {
    & > input {
      border-color: $error-color
    }
  }
</style>