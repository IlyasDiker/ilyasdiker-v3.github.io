<template>
  <div class="flex-col">
    <div class="flex-col container padded py-4 gap-10">
      <span class="text-3xl fw-600">FAQ</span>
      <span class="text-xl fw-500">Frequently asked questions</span>
    </div>
    <div class="container padded py-5">
      <template v-for="(item, index) in questions" :key="index">
        <div class="faq-row" :class="selected == index ? 'open' : ''">
          <div class="faq-row-question" @click="selected == index ? selected = null : selected = index">
            <span class="text-xl fw-600">{{ item.question }}</span>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
              </svg>
            </button>
          </div>
          <div class="faq-row-answer text-xl paragraph">
            <div class="flex-col gap-10">
              <p>{{ item.asnwer }}</p>
              <img :src="item.img" v-if="item.img" width="200">
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { questions } from '@/data/faq'
export default {
  data () {
    return {
      selected: null,
    }
  },
  setup(){
    return {questions}
  }
}
</script>

<style lang="scss" scoped>
  .faq-row{
    display: flex;
    flex-direction: column;
    &-question{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 15px 20px;
      transition: 0.2s ease-in-out;
      user-select: none;
      cursor: pointer;
      &:hover{
        background: whitesmoke;
      }
      button{
        padding: 0;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        svg{
          transition: 0.2s ease-in-out;
          width: 18px;
          height: 18px;
        }
      }
    }
    &-answer{
      max-height: 0;
      overflow: hidden;
      transition: 0.2s ease-in-out;
      padding: 0 20px;
    }
    &.open{
      .faq-row-question{
        button{
          svg{
            transform: rotate(180deg);
          }
        }
      }
      .faq-row-answer{
        max-height: 500px;
        overflow: hidden;
        padding: 15px 20px;
      }
    }
  }
</style>