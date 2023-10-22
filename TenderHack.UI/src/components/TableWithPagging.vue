<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import {BASE_URL} from '@/services/api'

export interface Log{
    id: String,
    metaId: String,
    log: String,
    date: Date,
    clusterId: number,
}

interface LastErrors{
    id: string;
    message: string;
}

interface ClasterCardData{
    id: number;
    displayName: String;
    errorByHourStatistics: number[]
    errorCount: number,
    lastErrors: LastErrors,
    previousErrorsByHourStatistics: number[],
    resolved: boolean,
    recommendation: string,
    description: string
}

const props = defineProps({
    api: String,
    columns: {
        type: Array,
        default: function(){
                return []
            }
    },
});

const logData = ref<Log[]>();
const page = ref<number>(0);
const maxPages = ref<number>(0);
const dataHeader = ref<String[]>();
const clasterCardData = ref<ClasterCardData>();
const currentId = ref<Number>();
const description = ref<String>();
const answer = ref<String>();
const resolved = ref<Boolean>();

const loadData = async () => {
    const {data} = await axios.get(BASE_URL + props.api,{
        params: {pageNumber: page.value}   
    });

    logData.value = data as Log[];
    maxPages.value = data.totalCount / 25;
    dataHeader.value = logData.value?.length >= 1 ? Object.keys(logData.value[0]) : [];
}

const saveClaster = async () => {
    await axios.post(BASE_URL + "Cluster/Update", {
        Id: currentId.value,
        Description: description.value,
        Recommendation: answer.value,
        Resolved: resolved.value
    });

    const button = document.getElementById('closebuttonmodal');
    button?.click();
}

watch(currentId, async (value) => {
    if (value && value !== null) {
        const {data} = await axios.get(BASE_URL + "Cluster/Get/" + value);

        clasterCardData.value = data as ClasterCardData;
        resolved.value = clasterCardData.value.resolved;
        description.value = clasterCardData.value.description;
        answer.value = clasterCardData.value.recommendation;
    }
})

onMounted(async () => {
    loadData()
})

watch(page, async () => {
    loadData();
})

</script>

<template>
  <div class="page">
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col" v-for="(item, index) in props.columns" :key="index">{{ item }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in logData" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.metaId }}</td>
                <td>{{ item.log }}</td>
                <td>{{ item.date }}</td>
                <td><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="() => currentId = item.clusterId">Перейти к кластеру</button></td>
            </tr>
        </tbody>
    </table>
    <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <button class="btn btn-light" :disabled="page === 0" @click="page -= 1">Previous</button>
    </li>
    <input type="number" min="0" v-model="page"/>
    <li class="page-item" :disabled="page === maxPages">
        <button class="btn btn-light" :disabled="page === maxPages" @click="page += 1">Next</button>
    </li>
  </ul>
  </nav>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Карточка кластера {{ clasterCardData?.displayName }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Количество ошибок в кластере</h5>
                <h6 class="card-text">{{ clasterCardData?.errorCount }}</h6>
            </div>
        </div>
        <div class="card" style="margin-top: 20px">
            <div class="card-body">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Описание</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="description"></textarea>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Решение</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="answer"></textarea>
                </div>
            </div>
            <div class="mb-3" style="margin-left: 20px">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="resolved">
                <label class="form-check-label" for="flexCheckDefault" style="margin-left: 20px">
                    Ошибка устранена
                </label>
            </div>
        </div>
        <div class="card" style="margin-top: 20px">
            <table class="table table-hover">
                <tbody>
                    <tr v-for="(item, index) in clasterCardData?.lastErrors" :key="index">
                        <td>{{ item.id }}</td>
                        <td>{{ item.message }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="closebuttonmodal">Закрыть</button>
        <button type="button" class="btn btn-primary" @click="saveClaster">Сохранить</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<style scoped>
.table {
  table-layout:fixed;
}

.table td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
