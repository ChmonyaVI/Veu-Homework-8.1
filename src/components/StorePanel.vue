<template>
    <div class="wrapper">
        <h1 class="title">Task #1</h1>
        <selector-list :selector-items="getSelectorItems" />
        <items-list :items-list="getItemsList" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ItemsList from './ItemsList.vue'
import SelectorList from './SelectorList.vue'
export default {
    name: 'StorePanel',
    components: {
        SelectorList,
        ItemsList,
    },
    computed: {
        ...mapGetters(['getSelectorItems', 'getItemsList']),
    },
    methods: {
        ...mapActions(['loadSelectorItems', 'loadItemsLaptopList']),
    },
    created() {
        this.loadSelectorItems()
        this.loadItemsLaptopList()
    },
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 36px;
    text-align: center;
}
@import '@/assets/style/index.scss';
</style>
