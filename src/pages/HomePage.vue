<template>
    <Search @search="search"/>
    <Picture :photos="photos"/>
</template>
<script setup>
import { ref } from 'vue';
import Search from '../components/Search.vue';
import Picture from '../components/Picture.vue';
import axios from 'axios';

const photos = ref()
const auth = "ebg4hrruqAZurPrCCI2AgRlrSvAT9y0PuQguBwWUrkwojshOQy36wnNR";
const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
const search = async () => {
    let result = await axios.get(initialURL, {
        headers: { Authorization: auth },
    })
    console.log(result.data.photos);
    photos.value = result.data.photos
}

</script>