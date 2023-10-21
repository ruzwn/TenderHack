<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted, watch } from 'vue';
import {BASE_URL} from '@/services/api'

interface CardList{
    id: number;
    displayName: String;
}

interface ClasterCardData{
    id: number;
    displayName: String;
}

const api = 'Test/GetLogsType'

const cardData = ref<CardList[]>();
const clasterCardData = ref<ClasterCardData>();
const currentId = ref<Number>();

const loadData = async () => {
    const {data} = await axios.get(BASE_URL + api);

    cardData.value = data.data as CardList[];
}

const saveClaster = async () => {
    const response = await axios.post(BASE_URL + api, {
        params: {

        }
    });
}

onMounted(async () => {
    loadData()
})

watch(currentId, async () => {
    const {data} = await axios.get(BASE_URL + "Test/GetLogsType");

    clasterCardData.value = data.data as ClasterCardData;
})
</script>

<template>
<div class="row gy-2">
    <div class="col-sm-3" v-for="(item, index) in cardData" :key="index">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ item.displayName }}</h5>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="() => currentId = item.id">Подробнее</button>
            </div>
        </div>
    </div>
</div>

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
                <h6 class="card-text">Количество ошибок в кластере</h6>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        <button type="button" class="btn btn-primary" @click="saveClaster">Сохранить</button>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped></style>
