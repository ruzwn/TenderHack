<script setup lang="ts">
  import TheHeader from "@/components/TheHeader.vue";
  import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <div>
    <TheHeader />
    <main class="app-layout-error-main bg-red-600">
      <div>AppLayoutError</div>
      <slot />
    </main>
    <TheFooter/>
  </div>
</template>
