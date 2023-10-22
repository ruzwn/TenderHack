<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import {BASE_URL} from '@/services/api'

export interface Log{
    id: String,
    metaId: String,
    log: String,
    date: Date,
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

const loadData = async () => {
    const {data} = await axios.get(BASE_URL + props.api,{
        params: {pageNumber: page.value}   
    });

    logData.value = data as Log[];
    maxPages.value = data.totalCount / 25;
    dataHeader.value = logData.value?.length >= 1 ? Object.keys(logData.value[0]) : [];
}

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
