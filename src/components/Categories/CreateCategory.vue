<template>
  <div class="create_category">
        <div>
          <div class="page-subtitle">
            <h2>Создать</h2>
          </div>

          <form @submit.prevent = "handleCreation">
            <base-input
            :class="{
                incorrect: v$.name.$errors.length
            }"
            v-model='name'
            :placehldr="'Введите название'"
            >
                Название
            </base-input>

            <base-input
            :class="{
                incorrect: v$.limit.$errors.length
            }"
            v-model.number = 'limit'
            :placehldr="'Введите лимит'"
            >
                Лимит затрат
            </base-input>

            <base-button>Создать</base-button>
          </form>
        </div>
      </div>
</template>

<script>
import BaseInput from '../UI/BaseInput.vue'
import { required, minValue } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
export default {
  components: { BaseInput },
  name: 'CreateCategory',
  data: () => ({
    v$: useVuelidate(),
    name: '',
    limit: ''
  }),
  validations() {
    return {
        name: {required},
        limit: {required, minValue: minValue(0.01)}
    }
  },
  methods: {
    async handleCreation() {
        this.v$.$validate()
        if(!this.v$.$errors.length) {
            const newCat = {name: this.name, limit: this.limit}
            const cat = await this.$store.dispatch('createCategory', newCat)
            this.name = this.limit = ''
            this.v$.$reset()
            this.$emit('categoryCreated', cat)
        }
    }
  }
}
</script>

<style lang="scss">
    .create_category {
        background-color: white;
        border-radius: 8px;
        min-width: 325px;
        border: 1px solid $light-gray;
      box-shadow: 1px 10px 20px 1px $light-gray;
        padding: 20px;
        .page-subtitle {
            height: 45px;
            display: flex;
        }
        form {
            padding-top: 48px;
            display: flex;
            flex-flow: column nowrap;
            gap: 20px;
        }
    }
    .incorrect {
        & > input {
            border-color: $error-color;
        }
    }
</style>