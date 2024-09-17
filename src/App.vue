<template>
  <MainHeader/>
  <MenuComponent v-if="!store.isMobile" />
  <div v-if="store.isOpen && store.isMobile">
    <MenuComponent/>
    <LocationFooter/>
  </div>
</template>

<script lang="ts" setup>
import MainHeader from '@/components/MainHeader.vue'
import MenuComponent from '@/components/MenuComponent.vue'
import { useMenuStore } from '@/store/MenuStore'
import LocationFooter from '@/components/LocationFooter.vue'
import { onBeforeMount, onMounted, ref } from 'vue'

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
</style>
