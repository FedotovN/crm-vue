<template>
  <div class="loader">

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .loader {
        width: 60px;
        height: 60px;
        border: 4.5px solid $light-gray;
        border-radius: 50%;
        border-top-color: $accent-color;
        animation: loader .8s linear infinite;
        &.small_loader {
            width: 30px;
            height: 30px;
        }
    }
    @keyframes loader {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
</style>