<template>
<div class="select_wrapper">
    <p><slot></slot></p>
    <select
        @change="updateInput($event.target.value)"
        :value="modelValue"
        >
            <option
            v-for="option in options"
            :key="option.id"
            :value="option.value"
            >
                {{ option.name }}
            </option>
    </select>
</div>
</template>

<script>
export default {
    name: "BaseSelect",
    props: ['options', 'modelValue'],
    methods: {
        updateInput(value) {
            this.$emit('update:modelValue', value)
        }
    }
}
</script>

<style lang="scss" scoped>
.select_wrapper {
    select {
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
        width: 200px;
        height: 45px;
        border-radius: 4px;
        background-color: white;
        color: $dark-color;
        outline: none;
        font-size: 16px;
        transition: .3s;
        border: 1px solid $medium-gray;
        border-radius: 4px;
        font-weight: bold;
        &:focus {
            border-color: $accent-color;
        }
    }
}
</style>