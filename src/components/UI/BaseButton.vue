<template>
  <button><slot></slot></button>
</template>

<script>
export default {
    name: "BaseButton"
}
</script>

<style lang="scss" scoped>
    button{
        cursor: pointer;
        width: 100%;
        height: 50px;
        background-color: $accent-color;
        border-radius: 4px;
        border: none;
        font-size: 20px;
        color: white;
        transition: .3s;
        &:hover{
            filter: opacity(.8);
        }
    }
</style>