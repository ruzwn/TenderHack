<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted, watch } from 'vue';
import {BASE_URL} from '@/services/api'
import {app} from '@/main'

interface ClasterCardData{
    id: number;
    displayName: String;
    errorByHourStatistics: number[]
    errorCount: number,
    previousErrorsByHourStatistics: number[],
    resolved: boolean,
    recommendation: string,
    description: string,
    errorLog: string,
}

const errorFirst = ref<ClasterCardData>();

const getOneError = async (id: string) => {
    const {data} = await axios.get(BASE_URL + "Demo/GetRawError", {
        params: {id: id} 
    });

    errorFirst.value = data as ClasterCardData;
    if (errorFirst.value.resolved) {
        app.config.globalProperties.$toast.add({ severity: 'info', summary: 'Оповещение', detail: errorFirst.value.displayName, life: 3000 });
    }
    else{
        app.config.globalProperties.$toast.add({ severity: 'error', summary: 'Оповещение', detail: errorFirst.value.errorLog, life: 3000 });
    }
}
</script>



<template>
  <div class="page">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="() => getOneError('00003308-03ad-41ba-98c7-c4f1629d1f69')">Первый вариант</button>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="() => getOneError('00c0be2e-cbd6-42c7-bd41-d67516d954b5')">Второй вариант</button>
  </div>
</template>

<style scoped></style>
