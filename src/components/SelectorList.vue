<template>
    <div class="selector-item__item">
        <div v-for="item in selectorItems" :key="item.id" @click="selectCategory(item.category)">
            <div class="selector-item__image" :class="{ 'active-border': item.category === categorySubTitle }">
                <img :src="item.imgSrc" class="selector-item__img-src" alt="Путь к файлу нарушен." />
            </div>
            <div class="selector-item__title">{{ item.category }}</div>
        </div>
    </div>
    <!-- Тут будет появляться списоки -->
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'SelectorList',
    props: {
        selectorItems: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            categorySubTitle: null,
        }
    },
    methods: {
        ...mapActions(['selectCategoryCart']),

        selectCategory(category) {
            this.selectCategoryCart(category)
            this.categorySubTitle = category
            console.log(category)
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';
</style>
