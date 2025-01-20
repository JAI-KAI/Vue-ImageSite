<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="photo in photos" :key="photo.id" class="flex flex-col items-center mb-8">
            <p class="text-center font-medium text-lg">作者: {{ photo.photographer }}</p>
            <div
                class="mt-2 overflow-hidden rounded-lg border border-gray-300 transform transition-all duration-300 hover:scale-110 hover:border-gray-500">
                <img :src="photo.src.large" class="w-80 h-80 object-cover" />
            </div>
            <p class="mt-2 text-center">
                在此下載圖片:
                <a target="_blank" :href="photo.src.large" class="text-blue-500 hover:underline">
                    按一下
                </a>
            </p>
        </div>
    </div>
</template>


<script setup>
defineProps({ photos: Array });
</script>