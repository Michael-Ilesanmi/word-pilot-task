import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    name: 'Grace',
    role: 'Admin',
    avatar: 'https://picsum.photos/seed/picsum/50'

  })
  return { user }
})
