<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import BellApp from '@/components/BellApp.vue'
import HamburgerButton from './HamburgerButton.vue';

const router = useRouter() //я подумал, что будет странно использовать vuex/pinia для хранения роутов, когда для этого есть vue-router)

const isOpenMenu = ref<Boolean>(false)

function toggleMenu(){
    isOpenMenu.value = !isOpenMenu.value
}

</script>

<template>
    <div>
        <header class="header">
            <div class="header__wrap">
                <img class="header__logo" src="@/assets/logo.png" alt="">
                <div class="header__right">

                    <div class="header__location">
                        <img src="@/assets/icons/location.png" class="header__location_img" alt="">
                        <p class="header__location_name">Москва и область</p>
                    </div>
                    <div class="header__bell">
                        <BellApp/>
                    </div>
                    <div class="header-mb__toggle-menu">
                        <HamburgerButton @toggle-menu="toggleMenu"/>
                    </div>
                    <!-- <div @click="toggleMenu" class="header-mb__toggle-menu">
                        <img 
                            class="header-mb__toggle-menu_button" 
                            :class="{'header-mb__toggle-menu_button--hide': isOpenMenu}" 
                            src="@/assets/icons/hamburger.png"
                        >   
                        <img 
                            class="header-mb__toggle-menu_button" 
                            src="@/assets/icons/close.png" 
                            :class="{'header-mb__toggle-menu_button--hide': !isOpenMenu}" 
                        >
                    </div> -->
                </div>
            </div>

            <div class="header__nav-wrap">  
                <div class="header__nav">
                    <router-link 
                        v-for="route in router.options.routes" 
                        :key="route.path" class="header__nav_link"
                        :to="route.path" 
                        active-class="header__nav_link--active" 
                    >{{ route.meta.title }}</router-link>
                        
                </div>
            </div>
            <div class="header-mb__menu" :class="{'header-mb__menu--is-open':isOpenMenu}">
                <div class="header-mb__menu_wrap">
                    <div class="header-mb__menu_wrap-links">
                        <router-link 
                            v-for="route in router.options.routes" 
                            :key="route.path" 
                            class="header-mb__menu_link" 
                            :to="route.path"
                        >
                            {{ route.meta.title }}
                        </router-link>
                    </div>
                    <div class="header-mb__menu_location">
                        <img src="@/assets/icons/location.png" alt="">
                        <p>Москва и область</p>
                    </div>
                </div>
            </div>

        </header>
    </div>
</template>
<style lang="scss">
.header{
    width: 100%;
    
    background: var(--Dark-Gray);
    &-mb{
        &__toggle-menu{
            display: none;
            
        }
        &__menu{
            display: none;
        }
    }
    &__wrap{
        margin: 0 auto;
        height: var(--height-header);
        width: var(--width);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 3;
    }
    &__nav-wrap{
        display: flex;
        justify-content: center;
        background: white;
        height: 47px;
    }
    &__nav{
        height: 100%;
        background: white;
        display: flex;
        align-items: flex-end;
        width: var(--width);
        gap: 18px;
        &_link{
            @include baseText;
            height: 90%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 2px solid transparent;
            transition: .2s;
            color: var(--gray-placeholder);
            &--active{
                color: var(--black);
                border-bottom: 2px solid var(--Dark-Gray);
            }
        }
    }
    &__logo{
        height: 22px;
        width: auto;
    }
    &__right{
        display: flex;
        align-items: center;
    }
    &__location{
        display: flex;
        align-items: center;
        margin-right: 32px;
        &_img{
            height: 18px;
            width: 12px;
            margin-right: 10px;
        }
        &_name{
            @include baseText;
            color: var(--gray);
        }
    }
    @media screen and (max-width: $mediaQuery1) {
        .header{
            &__wrap{
                padding: 0 20px;
                width: 100%;
            }
            &__nav-wrap{
                padding: 0 20px;
                width: 100%;
            }
            &__nav{
                width: 100%;
            }
        }
    }
    @media screen and (max-width: $mediaQuery2) {
        .header{
            &-mb{
                &__toggle-menu{
                    display: block;
                }
                &__menu{
                    display: flex;
                    background: white;
                    position: fixed;
                    top: var(--height-header);
                    left: 0;
                    width: 100%;
                    height: calc(100vh - var(--height-header));
                    // transform: translateY(-100%);
                    height: 0px;
                    z-index: 1;
                    transition: height .2s;
                    &--is-open{
                        height: calc(100vh - var(--height-header));
                    }
                    &_wrap{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        overflow: hidden;
                        &-links{
                            padding: 15px;
                            display: flex;
                            flex-direction: column;
                        }
                    }
                    &_link{
                        min-height: 46px;
                        border-bottom: 1px solid var(--Light-Gray);
                        display: flex;
                        align-items: center;
                        @include grayBoldText;
                    }
                    &_location{
                        height: 56px;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        padding: 15px;
                        background: var(--Light-Gray);
                        margin-top: auto;
                        
                        & > img{
                            width: 20px;
                            height: 20px;
                            margin-right: 4px;
                        }
                        & > p{
                            @include grayText;
                        }
                    }
                    margin-right: 10px;
                    }
                }
                &__bell{
                    margin-right: 20px;
                }
                        
            }
            &__location{
                display: none;
            }
            &__nav-wrap{
                display: none;
            }
            
        }
    }

</style>