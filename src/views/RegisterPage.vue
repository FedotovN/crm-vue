<template>
    <div class="preloader" v-show="loading">
        <base-loader></base-loader>
    </div>
    <form class="card auth-card" @submit.prevent = "submitForm" @keyup.enter="handleForm">
        <div class="card-content">
            <span class="card-title">Домашняя бухгалтерия</span>
            <div class="input_field">
                <base-input
                v-model="email"
                :type="'text'"
                :class="{
                    'incorrect': v$.email.$errors.length
                }"
                >   
                    Электронная почта
                </base-input>
                <p :class="{
                    'shown': v$.email.$errors.length
                }">{{ v$.email.$errors.length ? "Введите корректный email" : ''}}</p>
            </div>
            <div class="input_field">
                <base-input
                v-model="password"
                :type="'password'"
                :class="{
                    'incorrect': v$.password.$errors.length
                }"
                >
                    Пароль
                </base-input>
                <p :class="{
                    'shown': v$.password.$errors.length
                }">{{v$.password.$errors.length ? `Минимальная длина пароля - 10 символов. Текущая длина пароля - ${password.length}` : ''}}</p>
            </div>
            <div class="input_field">
                <base-input
                v-model="confirmPassword"
                :type="'password'"
                :class="{
                    'incorrect': v$.confirmPassword.$errors.length
                }"
                >
                    Подтвердите пароль
                </base-input>
                <p :class="{
                    'shown': v$.confirmPassword.$errors.length
                }">{{v$.confirmPassword.$errors.length ? "Введённое значение не равно паролю" : ''}}</p>
            </div>
            <div class="input_field">
                <base-input
                v-model="name"
                :type="'text'"
                :class="{
                    'incorrect': v$.name.$errors.length
                }"
                >
                    Имя Пользователя
                </base-input>
                <p :class="{
                    'shown': v$.name.$errors.length
                }">{{ v$.name.$errors.length ? "Введите имя пользователя" : '' }}</p>
            </div>
            <label class="agreement">
                <label for="agree"> С правилами согласен (никаких правил) </label>
                <input id = "agree" type="checkbox" v-model="checked" />
            </label>
        </div>
        <div class="card-action">
            <div>
            <base-button
                type="submit"
            >
                Зарегистрироваться
                <i class="fa-solid fa-forward"></i>
            </base-button>
            </div>

            <p class="center">
            Уже есть аккаунт?
            <router-link to="/login">Войти!</router-link>
            </p>
        </div>
    </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import {required, minLength, sameAs, email} from '@vuelidate/validators'
export default {
    name: "RegisterPage",
    data(){
        return {
            v$: useVuelidate(),
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            checked: '',
            loading: false
        }
    },
    validations(){
        return {
            email: {required, email},
            password: {required, minLength: minLength(6)},
            confirmPassword: {required, sameAs: sameAs(this.password)},
            name: {required},
            checked: {required, sameAs: sameAs(true)}
        }
    },
    methods: {
        submitForm() {
            this.v$.$validate()
            if(!this.v$.$errors.length){
                this.createAccount()
            }
        },
        async createAccount(){
            try {
                this.loading = true
                let userInfo = {email: this.email, password: this.password, name: this.name}
                await this.$store.dispatch('signUp', userInfo)
                this.loading = false
                this.$router.push('/login')
            }
            catch(e){
                console.log(e)
                alert("Возникла непредвиденная ошибка, наши гномы уже разбираются, что к чему")
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.preloader {
    z-index: 10;
    position: fixed;
    top: 0; 
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba($dark-color, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}
.auth-card{
        background-color: white;
        border-radius: 8px;
        width: 350px;
        max-height: calc(100vh - 40px);
        overflow-y: scroll;
        text-align: center;
        padding: 20px 15px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
        &::-webkit-scrollbar{
            width: 0;
        }
        .card-title {
            font-weight: bold;
            letter-spacing: 1.02px;
        }
        .card-action {
            width: 100%;
            display: flex;
            flex-flow: column nowrap;
            gap: 20px;
            button i{
                padding-left: 15px;
            }
        }
        .card-content {
            height: calc(100% - 150px);
            display: flex;
            flex-flow: column nowrap;
            gap: 30px;
            .input_field {
                .input {
                    width: 100%;
                }
                p {
                    color: $error-color;
                    transition: .3s;
                    opacity: 0
                }
                p.shown {
                    opacity: 1;
                }
            }
        }
    }
    .agreement {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 40px;
        label {
            user-select: none;
            cursor: pointer;
        }
        input[type='checkbox'] {
            accent-color: $accent-color;
            color: white;
            transform: scale(2);
        }
    }
</style>