<script setup lang="ts">
import { Line } from 'vue-chartjs'
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import {BASE_URL} from '@/services/api'

const dataInFirstChart = ref();
dataInFirstChart.value = {
        labels: [],
        datasets: [
                {
                    backgroundColor: '#f87979',
                    data: []
                }
            ]
        }
const dataInSecondChart = ref();
dataInSecondChart.value = {
        labels: [],
        datasets: [
                {
                    backgroundColor: '#f87979',
                    data: []
                }
            ]
        }

const dataInThirtChart = ref();
dataInThirtChart.value = {
        labels: [],
        datasets: [
                {
                    backgroundColor: '#f87979',
                    data: []
                }
            ]
        }
const firstDate = ref<Date>();
const secondDate = ref<Date>();

const firstDateBySecondChart = ref<Date>();
const secondDateBySecondChart = ref<Date>();

const firstDateByThirtChart = ref<Date>();
const secondDateByThirtChart = ref<Date>();

const loadDataFirstChart = async () => {
    const {data} = await axios.get(BASE_URL + 'Dashboard/GetStatisticsByDaysOfWeek',{
        params: {
            StartDate: firstDate.value,
            EndDate: secondDate.value,
        }   
    });

    const params1 = data.map(x => x.dayOfWeek);
    const params2 = data.map(x => x.errorCount);

    dataInFirstChart.value = {
        labels: params1,
        datasets: [
                {
                    backgroundColor: '#f87979',
                    data: params2
                }
            ]
        }
}

const loadDataSecondChart = async () => {
    const {data} = await axios.get(BASE_URL + 'Dashboard/GetSolvedClustersByDates',{
        params: {
            StartDate: firstDateBySecondChart.value,
            EndDate: secondDateBySecondChart.value,
        }   
    });

    const params1 = data.map(x => x.date);
    const params2 = data.map(x => x.solvedClustersCount);

    dataInSecondChart.value = {
        labels: params1,
        datasets: [
                {
                    backgroundColor: '#f87979',
                    data: params2
                }
            ]
        }
}

const loadDataThirtChart = async () => {
    const {data} = await axios.get(BASE_URL + 'Dashboard/GetErrorCountByDates',{
        params: {
            StartDate: firstDateByThirtChart.value,
            EndDate: secondDateByThirtChart.value,
        }   
    });

    const params1 = data.map(x => x.date);
    const params2 = data.map(x => x.count);

    dataInThirtChart.value = {
        labels: params1,
        datasets: [
                {
                    backgroundColor: '#f87979',
                    data: params2
                }
            ]
        }
}
</script>

<template>
<div class="card" style="width: 50rem;">
    <h5 class="card-title">Статистика по количеству ошибок в день недели</h5>
    <div>
        <label style="margin-right: 10px;">С</label>
        <input type="date" style="margin-right: 10px;" v-model="firstDate"/>
        <label style="margin-right: 10px;">По</label>
        <input type="date" style="margin-right: 10px;" v-model="secondDate"/>
        <button class="btn btn-light" @click="loadDataFirstChart">Сформировать график</button>
    </div>
    <Line :data="dataInFirstChart" />
</div>
<div class="card" style="width: 50rem;margin-top: 10px;">
    <h5 class="card-title">Получить статистику по решенным кластерам задач по промежутку дат</h5>
    <div>
        <label style="margin-right: 10px;">С</label>
        <input type="date" style="margin-right: 10px;" v-model="firstDateBySecondChart"/>
        <label style="margin-right: 10px;">По</label>
        <input type="date" style="margin-right: 10px;" v-model="secondDateBySecondChart"/>
        <button class="btn btn-light" @click="loadDataSecondChart">Сформировать график</button>
    </div>
    <Line :data="dataInSecondChart" />
</div>
<div class="card" style="width: 50rem;margin-top: 10px;">
    <h5 class="card-title"> Получить количество ошибок по датам</h5>
    <div>
        <label style="margin-right: 10px;">С</label>
        <input type="date" style="margin-right: 10px;" v-model="firstDateByThirtChart"/>
        <label style="margin-right: 10px;">По</label>
        <input type="date" style="margin-right: 10px;" v-model="secondDateByThirtChart"/>
        <button class="btn btn-light" @click="loadDataThirtChart">Сформировать график</button>
    </div>
    <Line :data="dataInThirtChart" />
</div>
</template>

<style scoped></style>
