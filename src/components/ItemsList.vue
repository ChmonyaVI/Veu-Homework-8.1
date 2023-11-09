<template>
    <div class="item-list__from">
        <p>
            <span>{{ getCurrentCategory }}</span> из Украины
        </p>
    </div>
    <div class="item-list__container">
        <div v-for="item in getItemsFromSelector" :key="item.title" class="item-list__block">
            <div class="item-list__img-block">
                <img :src="item.imgSrc" class="item-list__image" />
            </div>
            <div class="item-list__info">
                <div class="item-list__title">{{ item.title }}</div>
                <div class="item-list__current-price">{{ item.currentPrice }}</div>
                <div v-if="item.oldPrice" class="item-list__old-price">{{ item.oldPrice }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ItemsList',
    props: {
        itemsListFilter: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        ...mapGetters(['getItemsFromSelector', 'getCurrentCategory']),
    },
}
</script>

<style lang="scss" scoped></style>
