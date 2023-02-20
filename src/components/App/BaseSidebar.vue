<template>
  <nav :class="{
    active: showSidebar,
    disabled: !showSidebar
  }">
    <ul>
        <router-link
        tag="li"
        active-class="active-option"
        v-for="link in links"
        :key="link.url"
        :to="link.url"
        :exact="link.exact"
        >{{ link.title }}</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
    name: "BaseSidebar",
    props: ['showSidebar'],
    data() {
        return{ 
            links: [
                {title: 'Счёт', url: '/', exact: true},
                {title: 'История', url: '/history'},
                {title: 'Планирование', url: '/planning'},
                {title: 'Новая запись', url: "/record"},
                {title: 'Категории', url: "/categories"}
            ]
        }
    }
}
</script>

<style lang="scss">
nav {
    transition: .3s;
    display: flex;
    gap: 20px;
    left: 0;
    width: 250px;
    padding: 15.5px 20px 0 20px;
    height: calc(100vh - 100px);
    ul {
        display: flex;
        flex-flow: column nowrap;
        font-size: 17px;
        width: 100%;
        a {
            white-space: nowrap;
            cursor: pointer;
            width: calc(100% - 20px);
            padding: 20px 10px;
            transition: .3s ease-in;
            font-weight: bold;
            border-bottom: 1px solid transparent;
            &:hover{
                border-color: $active-color;
            }
        }
    }
}
.disabled {
    opacity: 0;
    width: 0;
    padding: 0;
    pointer-events: none;
}
.active {
    z-index: 11;
    width: 225px;
    opacity: 1;
}
.active-option {
    border-bottom: 1px solid $light-gray;
    color: $active-color;
}
</style>