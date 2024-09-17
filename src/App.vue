<template>
  <MainHeader/>
  <MenuComponent v-if="!store.isMobile"/>
  <transition name="menu">
    <MenuComponent v-if="store.isOpen && store.isMobile"/>
  </transition>

  <transition name="footer">
    <LocationFooter v-if="store.isOpen && store.isMobile"/>
  </transition>

</template>

<script lang="ts" setup>
import MainHeader from '@/components/MainHeader.vue'
import MenuComponent from '@/components/MenuComponent.vue'
import { useMenuStore } from '@/store/MenuStore'
import LocationFooter from '@/components/LocationFooter.vue'
import { onBeforeMount, ref } from 'vue'

const store = useMenuStore()

const width = ref(0)
const changeWidth = () => {
  width.value = window.innerWidth
  store.isMobile = width.value < 750
  if (!store.isMobile) {
    store.isOpen = false
  }
}

onBeforeMount(() => {
  width.value = window.innerWidth
  window.addEventListener('resize', changeWidth)
})
</script>

<style lang="scss">
@import "styles/reset.css";

#app {
  font-family: "Roboto", sans-serif;
}

.menu-enter-active,
.menu-leave-active,
.footer-enter-active,
.footer-leave-active{
  transition: linear 0.15s;
}

.menu-enter-from,
.menu-leave-to,
.footer-enter-from,
.footer-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
