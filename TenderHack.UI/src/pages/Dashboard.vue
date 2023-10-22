<script setup lang="ts">
import { Line } from 'vue-chartjs'
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import {BASE_URL} from '@/services/api'

const dataInFirstChart = ref();
const firstDate = ref<Date>();
const secondDate = ref<Date>();

const loadData = async () => {
    const {data} = await axios.get(BASE_URL + 'Dashboard/GetStatisticsByDaysOfWeek',{
        params: {
            StartDate: firstDate.value,
            EndDate: secondDate.value,
        }   
    });

    const params1 = data.statisticsOfDayOfWeeks.map(x => x.dayOfWeek);
    const params2 = data.statisticsOfDayOfWeeks.map(x => x.errorCount);

    dataInFirstChart.value = {
        labels: params1,
        datasets: [
                {
                    label: 'График один',
                    backgroundColor: '#f87979',
                    data: params2
                }
            ]
        }
}

onMounted(async () => {
    await loadData();
});
</script>

<template>
<div>
    <label style="margin-right: 10px;">С</label>
    <input type="date" style="margin-right: 10px;" v-model="firstDate"/>
    <label style="margin-right: 10px;">По</label>
    <input type="date" style="margin-right: 10px;" v-model="secondDate"/>
    <button class="btn btn-light" @click="loadData">Получить графики</button>
    <Line :data="dataInFirstChart" />
</div>
</template>

<style scoped></style>
