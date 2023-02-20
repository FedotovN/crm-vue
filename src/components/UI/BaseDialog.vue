<template>
  <div class="layer" @click="closeDialog">
    <Transition>
        <div class="dialog_window" @click.stop>
            <slot></slot>
        </div>
    </Transition>
  </div>
</template>

<script>
export default {
    name: 'BaseDialog',
    methods: {
        closeDialog(){
            this.$emit('closeDialog')
        }
    }
}
</script>

<style lang="scss">
    .layer {
        background-color: rgba($dark-color, 0.8);
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 11;
        .dialog_window {
            padding: 20px;
            background-color: $white;
            border-radius: 8px;
            min-width: 200px;
            min-height: 100px;
        }
    }
</style>