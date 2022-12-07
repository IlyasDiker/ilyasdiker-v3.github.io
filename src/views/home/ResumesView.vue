<template>
  <div class="flex-col">
    <div class="flex-col container padded py-4 gap-10">
      <span class="text-3xl fw-600">Resumes</span>
      <span class="text-xl fw-500">Wich kind of resume you are looking for?</span>
    </div>
    <div class="container padded py-5">
      <template v-for="(item, index) in resumes" :key="index">
        <div class="accrd-row" :class="selected == index ? 'open' : ''">
          <div class="accrd-row-title" @click="selected == index ? selected = null : selected = index">
            <span class="text-xl fw-600">{{ item.title }}</span>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
              </svg>
            </button>
          </div>
          <div class="accrd-row-answer text-xl">
            <div class="flex-col gap-10">
              <iframe :src="item.file" frameborder="0" width="100%"></iframe>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { resumes } from '@/data/resumes'
export default {
  data () {
    return {
      selected: null,
    }
  },
  setup(){
    return {resumes}
  }
}
</script>

<style lang="scss" scoped>
.accrd-row{
    display: flex;
    flex-direction: column;
    &-title{
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
      iframe{
        width: 100%;
        min-height: 500px;
      }
    }
    &.open{
      .accrd-row-title{
        button{
          svg{
            transform: rotate(180deg);
          }
        }
      }
      .accrd-row-answer{
        max-height: 500px;
        overflow: hidden;
      }
    }
  }
</style>