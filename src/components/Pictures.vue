<template>
    <div v-for="photo in photos">
        <p>{{ photo.photographer }}</p>
        <div>
            <img :src="photo.src.large">
        </div>
        <p>
            在此下載圖片:
            <a target="_blank" :href="photo.src.large">
                按一下
            </a>
        </p>
    </div>
</template>

<script setup>
defineProps({ photos: Array });
</script>