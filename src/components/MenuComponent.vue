<script setup lang="ts">
import { ref } from 'vue'

const linksArr = ['Преимущества Теle2', 'Тарифы', 'Акции и спецпредложения',
  'Промотариф Tele2', 'Технология eSIM', 'Подключение нового абонента']

const chosenLink = ref('Преимущества Теle2')
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <div class="frame" v-for="link in linksArr" :key="link"
           @click="chosenLink = link"
           :class="chosenLink == link && 'chosen-frame'">
        {{ link }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100vw;
  display: flex;
  justify-content: center;
}

.content {
  background-color: #fff;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.frame {
  width: 92svw;
  aspect-ratio: 11.5 / 1;
  margin-top: 16px;
  color: #959597;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  border-bottom: 1px solid #EDEDED;
  cursor: pointer;
}

@media (width > 750px) {
  .content {
    flex-direction: row;
    width: clamp(70%, 80%, 90%);
    border-bottom: 1px solid #EDEDED;
  }

  .frame {
    width: fit-content;
    margin-right: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    padding-bottom: 18px;
  }
}

.chosen-frame {
  color: #1F2229;
  border-bottom: 2px solid #1F2229;
  transition-timing-function: linear;
  transition: 0.25s;
  transform: translateX(0);
}
</style>
