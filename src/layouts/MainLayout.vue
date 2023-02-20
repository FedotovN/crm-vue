<template>
        <base-navbar @sidebarToggle="toggleSidebar"></base-navbar>
        <div class="content">
            <div class="page_content" v-if="$store.state.auth.userInfo">
                <base-sidebar :showSidebar = "showSidebar"></base-sidebar>
                <div class="main_content">
                    <router-view class= "main" />
                </div>
            </div>
            <div class="preloader" v-else>
                <base-loader></base-loader>
            </div>
        </div>
</template>

<script>
import BaseNavbar from '@/components/App/BaseNavbar.vue'
import BaseSidebar from '@/components/App/BaseSidebar.vue'
export default {
  components: { BaseSidebar, BaseNavbar },
    name: "MainLayout",
    data(){
        return {
            showSidebar: false,
            loading: false
        }
    },
    methods: {
        toggleSidebar(){
            this.showSidebar = !this.showSidebar
        }
    }
}
</script>

<style lang="scss" scoped>
.handler {
    background-color: $dark-color;
    color: $white;
    height: calc(100vh - 80px);
    display: flex;
    flex-flow: column nowrap;
    gap: 30px;
    justify-content: center;
    align-items: center;
    h2 {
        font-size: 50px;

    }
    a {
        font-size: 30px;
        font-weight: bold;
    }
}
.preloader {
    width: 100%;
    min-height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
}
.content, .page_content{
    display: flex;
    width: 100%;
    .main_content {
        flex: 1;
        height: calc(100vh - 100px);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .main {
            height: calc(100% - 20px);
            width: calc(100% - 20px);
            .page-title h3 {
                font-size: 25px;
                width: 100%;
                border-bottom: 1px solid $light_gray;
            }
        }
    }
    .fixed-action-btn {
        position: fixed;
        right: 10%;
        bottom: 15%;
        height: 70px;
        width: 70px;
        background-color: $accent-color;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        color: $white;
        cursor: pointer;
        transition: .3s;   
        &:hover{
            background-color: $active-color;
            transform: rotateZ(180deg);
        }
    }
}
</style>