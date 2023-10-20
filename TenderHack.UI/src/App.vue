<script setup lang="ts">
  import { RouterView } from "vue-router";
  import AppLayout from "./layouts/AppLayout.vue";
</script>

<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>


<style lang="css">
  @import "assets/main.css";
</style>

