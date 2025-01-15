<template>
    <Search @search="search" />
    <Pictures :photos="photos" />
</template>

<script setup>
import { ref } from 'vue';
import Search from '../components/Search.vue';
import Pictures from '../components/Picture.vue';
import axios from 'axios';

const photos = ref([]);

const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
const search = async () => {
    let result = await axios.get(initialURL)
    console.log(result.data.photos);
    photos.value = result.data.photos
}
</script>