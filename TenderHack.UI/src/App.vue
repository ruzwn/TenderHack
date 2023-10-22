<script setup lang="ts">
  import { RouterView } from "vue-router";
  import AppLayout from "./layouts/AppLayout.vue";
  import Toast from 'primevue/toast';
</script>

<template>
  <AppLayout>
    <RouterView />
    <Toast />
  </AppLayout>
</template>


<style lang="css">
  @import "assets/main.css";
</style>

