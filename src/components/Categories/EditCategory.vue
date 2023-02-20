<template>
  <div class="edit_category" :key="updateCount">
    <div v-if="categories.length">
        <div class="page-subtitle">
            <h2>Редактировать</h2>
            <div class="input_field">
                <base-select
                v-model="category"
                :options="mutateCategories"
                >
                    Выберите категорию
                </base-select>
            </div>
        </div>
        <form @submit.prevent>
            <base-input
            v-model="name"
            :placehldr="'Введите название'"
            :class="{
                incorrect: v$.name.$errors.length
            }"
            >
                Название
            </base-input>

            <base-input
            v-model="limit"
            :placehldr="'Введите лимит'"
            :class="{
                incorrect: v$.limit.$errors.length
            }"
            >
                Лимит
            </base-input>
            <div class="buttons">
                <base-button class="edit_button" @click="handleEdit">Редактировать</base-button>
                <base-button class="delete_button" @click="deleteCategory">Удалить</base-button>
            </div>
        </form>
    </div>
    <div class="handler_categories" v-else>
        <h2>Категорий пока нет! :(</h2>
        <p>Вы можете создать новую категорию, используя форму слева</p>
    </div>
  </div>
</template>

<script>
import { required, minValue } from "@vuelidate/validators"
import useVuelidate from '@vuelidate/core'
export default {
    name: "EditCategory",
    props: ['categories'],
    data() {
        return {
            v$: useVuelidate(),
            name: '',
            limit: '',
            id: '',
            category: '',
            updateCount: 0
        }
    },
    validations(){
        return {
            name: { required },
            limit: { required, minValue: minValue(0.01) }
        }
    },
    methods: {
        async handleEdit() {
            this.v$.$validate()
                if(!this.v$.$errors.length) {
                    const cat = await this.$store.dispatch('editCategory', 
                                            {name: this.name, limit: this.limit, id: this.id})
                    this.v$.$reset()
                    this.$emit('categoryEdited')
            }
        },
        async deleteCategory(){
            if(this.id) { await this.$store.dispatch('deleteCategory', this.id) }
            this.$emit('categoryEdited')
        }
    },
    computed: {
      mutateCategories(){
        let cat = []
        this.categories.forEach(el => {
          cat.push({
            name: el.title,
            value: el.id
          })
        })
        return cat
      }
    },
    watch: {
        category() {
            this.categories.forEach(el => {
                if(el.id == this.category){
                    this.name = el.title
                    this.limit = el.limit
                    this.id = el.id
                }
            })
        }
    }
}
</script>

<style lang="scss">
    .edit_category {
        select {
            text-align: center;
            cursor: pointer;
            width: 200px;
            height: 45px;
            border-radius: 4px;
            background-color: white;
            color: $dark-color;
            outline: none;
            font-size: 16px;
            transition: .3s;
            border: 1px solid $light-gray;
            border-radius: 4px;
            box-shadow: 5px 5px 10px 1px $light-gray;
            font-weight: bold;
            &:focus {
                border-color: $accent-color;
            }
        }
        .page-subtitle {
            display: flex;
            justify-content: space-between;
        }
        background-color: white;
        flex: 1;
        border-radius: 8px;
        min-width: 300px;
        border: 1px solid $light-gray;
        box-shadow: 1px 10px 20px 1px $light-gray;
        padding: 20px;
        form {
            padding-top: 20px;
            display: flex;
            flex-flow: column nowrap;
            gap: 20px;
            .buttons {
                display: flex;
                gap: 20px;
                .edit_button {
                    flex: 3;
                }
                .delete_button {
                    flex: 1;
                    background-color: $error-color;
                }
            }
        }
    }
    .incorrect {
        & > input {
            border-color: $error-color;
        }
    }
    .handler_categories p{
        padding-top: 20px;
    }
</style>