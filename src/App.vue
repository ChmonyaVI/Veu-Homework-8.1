<template>
    <store-panel />
</template>

<script>
import StorePanel from './components/StorePanel.vue'
export default {
    name: 'App',
    components: { StorePanel },
}
</script>

<style lang="scss">
@import './assets/style/index.scss';
#app {
    padding: 25px;
    // text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
