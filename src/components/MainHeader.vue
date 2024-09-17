<script setup lang="ts">
import { useMenuStore } from '@/store/MenuStore'

const store = useMenuStore()
</script>

<template>
  <div class="header">
    <div class="content">
      <img src="@/assets/tele2-logo.png" alt="" width="48" height="18">

      <div class="right-part">

        <div class="location" v-if="!store.isMobile">
          <img src="@/assets/location.png" alt="" width="24" height="24">
          <p class="location-text">Москва и область</p>
        </div>

        <img class="bell" src="@/assets/notification-bell.png" alt="" width="27"
             height="27"
             v-if="!store.isOpen">

        <img class="close" src="@/assets/close.png" alt="" width="18"
             height="18"
             v-if="store.isOpen"
             @click="store.isOpen = false">

        <img src="@/assets/burger-menu.png" alt="" width="18" height="14"
             v-if="!store.isOpen && store.isMobile"
             @click="store.isOpen = true">
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  width: 100svw;
  height: 7svh;
  background-color: #000;
  display: flex;
  justify-content: center;

  .content {
    width: clamp(70%, 80%, 90%);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .right-part {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 17svw;
      height: 100%;

      .location {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: fit-content;
        height: 100%;

        .location-text {
          color: #7C8792;
          font-size: 14px;
          font-weight: 400;
          line-height: 18px;
        }
      }

      .bell {
        animation: shake 1s;
        animation-iteration-count: infinite;
      }

      .close {
        margin-left: auto;
      }
    }
  }
}

@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(-10deg);
  }
  80% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
