<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['toggleMenu'])
const isOpen = ref<Boolean>(false)
function toggle(){
    emit('toggleMenu')
    isOpen.value = !isOpen.value
}
</script>
<template>
    <div>
        <div @click="toggle" class="hamburger__toggle-menu">
            <img 
                class="hamburger__toggle-menu_button" 
                :class="{'hamburger__toggle-menu_button--hide': isOpen}" 
                src="@/assets/icons/hamburger.png"
            >   
            <img 
                class="hamburger__toggle-menu_button" 
                src="@/assets/icons/close.png" 
                :class="{'hamburger__toggle-menu_button--hide': !isOpen}" 
            >
        </div>
    </div>
</template>
<style lang="scss">
.hamburger{
    &__toggle-menu{
        display: block;
        width: 18px;
        height: 14px;
        position: relative;
        &_button{
            width: 100%;
            height: 100%;
            transition: transform .2s ease-in-out, opacity .2s ease;
            position: absolute;
            
            &--hide{
                transform: scale(0.5);
                opacity: 0;
            }
        }
    }
}
</style>