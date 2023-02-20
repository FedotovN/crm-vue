<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>
<script>
import MainLayout from './layouts/MainLayout.vue';
import AuthLayout from './layouts/AuthLayout.vue';
export default {
  data(){
    return {}
  },
  computed: {
    layout(){
      return this.$route.meta.layout + '-layout'
    }
  },
  components: {
    MainLayout, AuthLayout
  },
  mounted() {
    this.$store.dispatch("checkForAuth")
  },
  methods: {
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: $font-family;
  background-color: $white;
}
.toast_notifications {
  position: absolute;
  right: 50px;
  top: 100px;
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
  
}
</style>
