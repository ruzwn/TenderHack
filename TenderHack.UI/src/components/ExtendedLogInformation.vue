<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import {BASE_URL} from '@/services/api'

interface LogCard{
    id: Number;
    name: String;
}

const props = defineProps({
    id: Number
});

const logCard = ref<LogCard>();

const loadData = async () => {
    const {data} = await axios.get(BASE_URL + "Test/GetLogsType",{
        params: {id: props.id}   
    });

    logCard.value = data.data as LogCard;
}

onMounted(async () => {
    loadData()
})
</script>

<template>
  <div class="modal-dialog modal-lg" tabindex="-1">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Заголовок модального окна</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        <button type="button" class="btn btn-primary">Понял</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
