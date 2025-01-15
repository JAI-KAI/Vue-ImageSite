<template>
<img v-for="photo in photos" src={{ photo.src.large }} alt="">
</template>

<script setup>
defineProps({photos : Array})
</script>