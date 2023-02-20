<template>
<div class="field">
    <label ref="placeholder">
        <slot>
        </slot>
    </label>
    <input
        :value="modelValue"
        @input = "updateInput"
        :type="type" 
        autocomplete="off"
        @click = 'activateInput'
        />
</div>
</template>

<script>
export default {
    name: "BaseInput",
    data(){
        return {
            value: ''
        }
    },  
    props: ['modelValue', 'type'],
    methods: {
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style lang="scss">
    .field{
        width: 100%;
        label {
            transition: .3s;
            font-size: 15px;
        }
        input {
            width: calc(100% - 40px);
            height: 35px;
            margin: 10px 0;
            border: none;
            border-bottom: 1px solid $medium-gray;
            background-color: white;
            outline: none;
            font-size: 18px;
            transition: .3s;
            padding: 10px 20px;
            &:focus {
                border-color: $accent-color;
                background-color: $light-gray;
            }
        }
        &.incorrect > input{
            border-color: $error-color;       
        }
    }
</style>