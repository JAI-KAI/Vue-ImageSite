<template>
    <div class="bg-gray-100 min-h-screen px-36 sm:px-24 lg:px-36">
        <!-- 搜索區域 -->
        <Search @search="search(searchURL)" v-model="userInput" />

        <!-- 圖片顯示區域 -->
        <Pictures :photos="photos" />
        <div class="flex justify-center my-6">
            <button @click="morePicture"
                class="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition duration-300">
                載入更多
            </button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import Search from '../components/Search.vue';
import Pictures from '../components/Pictures.vue';
import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;
const photos = ref([]);
const page = ref(1);
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

const morePicture = async () => {
    page.value += 1;
    let newURL = "";
    if (userInput.value == "") {
        newURL = `https://api.pexels.com/v1/curated?page=${page.value}&per_page=15`;
    } else {
        newURL = `https://api.pexels.com/v1/search?query=${userInput.value}&page=${page.value}&per_page=15`
    }
    let result = await axios.get(newURL, {
        headers: {
            Authorization: API_KEY
        }
    });
    photos.value = photos.value.concat(result.data.photos);
}

onMounted(() => {
    search(initialURL);
});
</script>