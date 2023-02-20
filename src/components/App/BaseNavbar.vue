<template>
  <header>
    <div class="content">
        <div class="info">
            <i class="fa-solid fa-bars"
                v-if="$store.state.auth.user"
                @click="toggleSidebar"
                :class="{active: toggleBar}"
            ></i>
            <p ref="timeDisplay"></p>
        </div>
        <div class="user" v-if="$store.state.auth.user">
            <p class="name" v-if="$store.state.auth.userInfo">
                {{ $store.state.auth.userInfo.name }}
            </p>
            <base-loader class="small_loader loader_handler" v-else></base-loader>
            <div class="buttons">
                <router-link to="/record"><i class="fa-regular fa-plus plus"></i></router-link>
                <router-link to="/"><i class="fa-solid fa-house"></i></router-link>
                <router-link to="/profile"><i class="fa-solid fa-user"></i></router-link>
                <i @click="logout" class="fa-solid fa-arrow-right-from-bracket exit"></i>
            </div>
        </div>    
    </div>
  </header>
</template>

<script>
import { dataFilter } from "@/filters/dataFilter.js"
export default {
    name: "BaseNavbar",
    data() {
        return{
            timeDisplay: null,
            interval: null,
            dropdownOptions: [
                {name: 'Профиль', value: "/profile"},
                {name: 'Выход', value: "logout"}
            ],
            toggleBar: false
        }
    },
    methods: {
        toggleSidebar(){
            this.$emit('sidebarToggle')
            this.toggleBar = !this.toggleBar
        },
        logout(){
            this.$router.push('/login')
            this.$store.dispatch('logOut')
        }
    },
    mounted(){
        this.timeDisplay = this.$refs.timeDisplay
        let date = new Date()
        this.timeDisplay.innerText = dataFilter.filterDate(date)
        this.interval = setInterval(()=>{   
            date = new Date()
            this.timeDisplay.innerText = dataFilter.filterDate(date)
        }, 1000)
    },
    beforeDestroy(){
        this.timeDisplay = null
        this.interval = null
    }
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: $dark-color;
    box-shadow: 1px 10px 20px 1px $light-gray;
    .user {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        height: 80px;
        font-size: 18px;
        color: white;
        transition: .3s;
        padding: 0 20px;
        .name {
            display: block;
            max-width: 250px;
            overflow-x: hidden;
            margin-right: 15px;
        }
        .buttons {
            display: flex;
            align-items: center;
            gap: 25px;
            font-size: 20px;
            .plus {
                font-size: 28px;
                margin-right: -5px;
            }
            a {
                color: white;
            }
            i:hover {
                color: $accent-color;
            }
            .exit {
                margin-left: 25px;
            }
        }
        p {
            white-space: nowrap;
        }
        .loader_handler {
            margin-right: 25px;
        }
    }
    .info {   
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: row nowrap;
        gap: 60px;
        width: 340px;
        height: 80px;
        p {
            font-weight: bold;
            white-space: nowrap;
            color: white;
        }
        i {
            color: white;
            font-size: 30px;
            cursor: pointer;
            transition: .3s;
            &:hover, &.active {
                color: $active-color;
            }
        }
    }
}
.content {
    display: flex;
    width: calc(100% - 30px);
    justify-content: space-between;
    align-items: center;
    
}
</style>