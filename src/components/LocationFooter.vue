<script setup lang="ts">

</script>

<template>
<div class="wrapper">
<main>
  <img src="@/assets/location.png" alt="" width="24" height="24">
  <p>Москва и область</p>
</main>
</div>
</template>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  bottom: 0;
  width: 100svw;
  height: 9svh;
  background-color: #F3F5F6;
  text-align: center;
  display: flex;
  align-items: center;

  main {
    display: flex;
    flex-direction: row;
    width: 80%;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: #959597;
    margin-left: 16px;
  }
}
</style>
