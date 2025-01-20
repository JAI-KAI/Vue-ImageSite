<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="photo in photos" :key="photo.id" class="flex flex-col items-center mb-8">
            <div class="mt-2 overflow-hidden rounded-lg border border-gray-300 relative">
                <a target="_blank" :href="photo.src.large">
                    <img :src="photo.src.large"
                        class="w-80 h-80 object-cover hover:scale-110 transition-all duration-300" />
                </a>
            </div>
            <p class="text-sm text-right w-80">photographer: {{ photo.photographer }}</p>
        </div>
    </div>
</template>



<script setup>
defineProps({ photos: Array });
</script>