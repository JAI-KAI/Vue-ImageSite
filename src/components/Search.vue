<template>
    <div class="flex justify-center items-center space-x-4 py-8">
      <input 
        type="text" 
        v-model="userInput"
        @keyup.enter="search"  
        placeholder="輸入關鍵詞"
        class="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" 
      />
      <button 
        @click="search"
        class="px-4 py-2 bg-cyan-500 text-white font-medium rounded-lg hover:bg-cyan-600 transition duration-200"
      >
        Search
      </button>
    </div>
  </template>
  

<script setup>
const userInput = defineModel();
const emit = defineEmits(['search']);
function search() {
    emit('search')
}
</script>