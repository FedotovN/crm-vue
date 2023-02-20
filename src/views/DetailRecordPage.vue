<template>
    <main>
        <base-dialog v-if="showDialog" @closeDialog = "showDialog = false">
            <div class="warning">
                <base-loader v-if="dialogLoading"></base-loader>
                <div class="header" v-if="!dialogLoading">
                    <h4>Вы уверены, что хотите удалить запись?</h4>
                    <p>Операция <strong>необратима</strong></p>
                </div>
                <div class="body" v-if="!dialogLoading">
                    <base-button class="agree" @click="handleInput">Продолжить</base-button>
                    <base-button class="disagree" @click="showDialog=false">Отмена</base-button>
                </div>
            </div>
        </base-dialog>
        <div class="row">
            <router-link to="/history">История</router-link>
            <i class="fa-solid fa-arrow-right"></i>
            <p v-show="!loading">
               {{
                type==='income'
                 ? 'Доход'
                 : 'Расход'
               }}
            </p>
            <base-loader v-show="loading" class="small_loader"></base-loader>
        </div>
        <div class="details_content" v-if="!loading">
            <div class="card-content">
                <p ><span class="detail_title">Описание:</span> {{ description }}</p>
                <p ><span class="detail_title">Сумма:</span> {{ amount }} рублей</p>
                <p ><span class="detail_title">Категория:</span> {{ category }}</p>

                <small class="detail_footer">{{ date }}</small>
            </div>
            <div class="card-buttons">
                <base-button class="delete_btn" @click="showDialog = true">Удалить запись</base-button>
            </div>
        </div>
        <div class="details_preloader" v-else>
            <base-loader></base-loader>
        </div>
    </main>
</template>

<script>
import { dataFilter } from '@/filters/dataFilter'
export default {
    name: "DetailRecordPage",
    data() {
        return {
            type: '',
            date: '',
            description: '',
            amount: '',
            category: '',
            loading: true,
            showDialog: false,
            dialogLoading: false
        }
    },
    async mounted() {
        const recordId = this.$route.params.id,
              currRecord = await this.$store.dispatch("fetchRecordById", recordId)
        this.type = currRecord.type
        this.date = dataFilter.filterDate(new Date(currRecord.date))
        this.description = currRecord.description
        this.amount = currRecord.amount
        this.category = await this.$store.dispatch("fetchCategoryById", currRecord.category)

        this.loading = false
    },
    methods: {
        async handleInput() {
            this.dialogLoading = true
            await this.$store.dispatch('deleteRecordById', this.$route.params.id)
            this.dialogLoading = false
            this.$router.back()
        }
    }
}
</script>

<style lang="scss">
    main {
        display: flex;
        flex-flow: column nowrap;
        gap: 20px;
        margin: 20px 20px 0 20px;
        .row {
            font-size: 25px;
            display: flex;
            align-items: center;
            gap: 15px;
            .small_loader {
                transform: scale(0.5);
            }
        }
        .details_content {
            padding: 20px;
            max-width: 1200px;
            max-height: 800px;
            background-color: white;
            border-radius: 8px;
            border: 1px solid $light-gray;
            box-shadow: 5px 5px 10px 1px $light-gray;
            display: flex;
            justify-content: space-between;
            .card-buttons {
                width: 200px;
                .delete_btn {
                    background-color: $error-color;
                }
            }
            .card-content {
                display: flex;
                flex-flow: column nowrap;
                gap: 10px;
                .detail_title {
                    font-weight: bold;
                    font-size: 17px;
                    padding-right: 10px;
                }
                .detail_footer {
                    padding-top: 25px;
                    color: $medium-gray;
                }
            }
            
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