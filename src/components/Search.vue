<template>
    <div>
        <input type="text">
        <button @click="search">Search</button>
    </div>
</template>

<script setup>
const emit = defineEmits(['search']);
function search() {
    emit('search')
}
</script>