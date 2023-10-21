<script setup lang="ts">
import TableWithPagging from '@/components/TableWithPagging.vue';

</script>

<template>
  <div class="page">
    <TableWithPagging :columns="['Идентификатор', 'Идентификатор лога', 'Лог', 'Время лога']" api="Test/GetLogs"/>
  </div>
</template>

<style scoped></style>
