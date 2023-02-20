<template>
  <div class="dropdown_body" @click="showSelect = true">
    <p
    @click="showSelect = true">
      <slot></slot>
    </p>
    <select 
    @input="updateInput"
    ref="custom_select"
    class="dropdown_body"
    >
        <option hidden></option>
        <option
        v-for="option in options"
        :key="option.value"
        class="option"
        :value="option.value"
        >
          {{ option.name }}
        </option>
    </select>
  </div>
</template>

<script>
export default {
    name: "BaseDropDown",
    props: ['options'],
    data()  {
      return {
        showSelect: false
      }
    },
    methods: {
      updateInput(event){
        this.$emit("chosen", event.target.value)
      }
    }
}
</script>

<style lang="scss" scoped>
.dropdown_body {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 120px;
  cursor: pointer;
  p {
    position: absolute;
    white-space: nowrap;
  }
}
select {
  position: relative;
  height: 0;
  width: 120px;
  text-align: center;
  appearance: none;
  outline: none;
  border: none;
  font-size: 20px;
  background-color: transparent;
}
.option {
  cursor: pointer;
  height: 45px;
}
.enabled {
  opacity: 1;
}
</style>