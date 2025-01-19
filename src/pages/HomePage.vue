<template>
    <Search @search="search(searchURL)" v-model="userInput" />
    <Pictures :photos="photos" />
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import Search from '../components/Search.vue';
import Pictures from '../components/Pictures.vue';
import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;
const photos = ref([]);
const userInput = ref('');
const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

const searchURL = computed(() => {
    return `https://api.pexels.com/v1/search?query=${userInput.value}&page=1&per_page=15`;
});

const search = async (url) => {
    let result = await axios.get(url, {
        headers: {
            Authorization: API_KEY
        }
    });
    photos.value = result.data.photos;
}

onMounted(() => {
    search(initialURL);
});
</script>