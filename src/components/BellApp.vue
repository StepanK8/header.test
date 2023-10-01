<script setup lang="ts">
import {ref} from 'vue'
const isActive = ref<Boolean>(true)
</script>

<template>
    <div @click="isActive = false" class="bell">
        <img src="@/assets/icons/bell/body.png" :class="{'bell__body--active': isActive}" alt="" class="bell__body">
        <img src="@/assets/icons/bell/indicator.png" alt="" class="bell__indicator" :class="{'bell__indicator--hide': !isActive}">
    </div>
</template>

<style lang="scss">
.bell{
    width: 20px;
    height: 20px;
    position: relative;
    cursor: pointer;
    &__body{
        width: 100%;
        height: 100%;
        &--active{
            animation-name: bell;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
            animation-duration: 1.6s;
            animation-delay: .5s;
        }
    }
    &__indicator{
        width: 10px;
        height: 10px;
        position: absolute;
        top: 2px;
        right: 0px;
        transition: .2s;
        &--hide{
            transform: scale(0);
        }
    }
    @keyframes bell {
        0%,
        30% {
            transform: rotate(0deg);
        }
        5%,
        20% {
            transform: rotate(7deg);
        }
        10%,
        25% {
            transform: rotate(-7deg);
        }
    }
}
</style>