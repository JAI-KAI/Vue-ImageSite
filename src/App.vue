<template>
  <Navbar />
  <router-view></router-view>
  <Footerarea />
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footerarea from './components/Footerarea.vue';

</script>