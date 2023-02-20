<template>
  <div class="container">
    <router-view @pushNotification="pushNotification"></router-view>
  </div>
</template>

<script>
export default {
    name: "AuthLayout",
    methods: {
      pushNotification(notification){
        this.$emit('pushNotification', notification)
      }
    }
}
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}
body {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: $dark-color;
}
</style>