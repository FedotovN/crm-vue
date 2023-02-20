<template>
<div>
    <div class="preloader" v-show="loading">
        <base-loader></base-loader>
    </div>
    <form class="card auth-card login" @submit.prevent="handleForm" @keyup.enter="handleForm">
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
                        'shown' : v$.email.$errors.length
                    }"
                >
                    {{v$.email.$errors.length ? "Неккоретный email" : ''}}
                </p>
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
                        'shown' : v$.password.$errors.length
                    }"
                >
                    {{v$.password.$errors.length ? "Неккоректный пароль" : ''}}
                </p>
            </div>
        </div>
        <p></p>
        <div class="card-action">
            <base-button type="submit">
                Войти
                <i class="fa-solid fa-forward"></i>
            </base-button>
            <p class="center">
                Нет аккаунта?
                <router-link to="/register">Зарегистрироваться</router-link>
            </p>
        </div>
    </form>
</div>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import {required, minLength, email} from "@vuelidate/validators"
export default {
    data(){
        return {
            v$: useVuelidate(),
            email: '',
            password: '',
            loading: false
        }
    },
    validations(){
        return {
            email: {required, email},
            password: {required, minLength: minLength(6)}
        }
    },
    methods: {
        handleForm(){
            this.v$.$validate()
            if(!this.v$.$errors.length) {
                this.signIn()
            }
        },
        async signIn(){
            this.loading = true
            const user = {email: this.email, password: this.password}
            try {
                await this.$store.dispatch('signIn', user)
                this.loading = false
                this.$router.push('/')
            }
            catch (e) {
                alert('User not found!')
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
    .auth-card.login{
        background-color: white;
        border-radius: 8px;
        height: 500px;
        width: 350px;
        text-align: center;
        padding: 20px 15px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
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
    .incorrect {
        & > input {
            border-color: $error-color;
        }
    }
</style>
