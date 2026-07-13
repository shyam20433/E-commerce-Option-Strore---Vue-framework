<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/NavBar.vue'
</script>

<template>
  <v-app>
  <Navbar />
  <RouterView />
  </v-app>
</template>
