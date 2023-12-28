<template>
  <nav class="w-full bg-white py-4 px-6 flex justify-between items-center">
    <div class="space-x-4 flex items-center">
      <span class="iconify" data-icon="ri:menu-2-line"></span>
      <select name="dropdown1" id="dropdown1" v-model="dropdown1">
        <option value="1" selected>My Workspace</option>
        <option value="2">My office</option>
      </select>
    </div>
    <div class="flex space-x-6 items-center text-[#79788E]">
      <form @submit.prevent="search()">
        <input type="text" v-model="search" placeholder="Search here" />
        <button>Search <span class="iconify" data-icon="iconamoon:search-thin"></span></button>
      </form>
      <button>
        <span class="iconify" data-icon="clarity:notification-solid"></span>
      </button>
      <button>
        <span class="iconify" data-icon="ic:outline-info"></span>
      </button>
      <div class="font-medium font-primary text-sm flex space-x-4 items-center">
        <img :src="user.avatar" :alt="user.name" class="rounded h-10 w-10 aspect-square cursor-pointer" />
        <div>
          <p class="text-[#363636]">Welcome {{ user.name }}</p>
          <p class="text-[#9D9D9D]">{{ user.role }}</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore();

const { user } = userStore;

const dropdown1 = ref(1);
const search = ref('');
</script>

<style lang="less" scoped>
select {
  @apply p-2 bg-[#F5F4FA] text-sm text-[#989898] font-primary ;
  background-image: url('https://api.iconify.design/fe/arrow-down.svg?color=%2377aef4');
  background-repeat: no-repeat;
  background-position: calc(100% - 0.75rem) center !important;
  -moz-appearance:none !important;
  -webkit-appearance: none !important; 
  appearance: none !important;
  padding-right: 2rem !important;
}

form {
  @apply flex items-stretch text-sm font-primary;
  input[type="text"] {
    @apply p-2 bg-[#F5F4FA]  text-[#989898] ;
  }
  button {
    @apply bg-primary-blue hover:bg-secondary-blue transition-colors ease-linear duration-500 px-3 text-white;
  }
}
</style>