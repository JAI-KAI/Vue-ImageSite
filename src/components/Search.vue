<template>
    <div>
        <input type="text" v-model="userInput">
        <button @click="search">Search</button>
    </div>
</template>

<script setup>
const userInput = defineModel();
const emit = defineEmits(['search']);
function search() {
    emit('search')
}
</script>