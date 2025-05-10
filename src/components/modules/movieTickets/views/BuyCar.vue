<template>
    <div class="container-car">
        <div class="container-title">
            <h2 class="title-resume">Resumen de compra</h2>
            <span class="span-total-seats">Total asientos: {{ chairStore.getSeatTotal() }}</span>
        </div>
        <div class="container-list-seat">
            <div v-if="numChairSelected" class="not-seats">No hay asientos seleccionados</div>
            <div v-else class="container-list-seats">
                <ul class="ul-list">
                    <li class="text-li" v-for="(item, index) in chairStore.getListSeat()" :key="index">
                        <strong class="text-strong">Fila</strong> {{ item.row }} <strong class="text-strong">Asiento</strong> {{ item.num }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="container-total">
            <strong>Precio unitario: <strong class="text-strong">{{ new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(chairStore.unitPrice) }}</strong> </strong>
            <strong>Total:  <strong class="text-strong">{{ new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(total) }}</strong></strong>
            </div>
        <div class="container-button-pay">
            <div class="button-pay"><strong>Ir a pagar</strong></div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useChairStore } from '../store/ChairStore';

const chairStore = useChairStore();

const numChairSelected = computed(() => chairStore.getListSeat().length === 0);
const total = computed(() => chairStore.getTotal());

</script>

<style scoped>
.container-car {
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  border: 1px solid #616060;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  gap: 0.75rem;
  box-sizing: border-box;
  overflow: hidden;
}

.container-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.title-resume {
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  color: #fff;
  font-weight: 600;
  margin: 0;
}

.container-list-seat {
  flex: 1;
  overflow-y: auto;
  width: 100%;
  padding-right: 4px;
  /* max-height: 35%; */
}

.container-list-seat::-webkit-scrollbar {
  width: 6px;
}
.container-list-seat::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
}
.container-list-seat::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}

.not-seats {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    font-family: 'Roboto', sans-serif;
    font-size: 0.95rem;
    color: #ccc;
    text-align: center;
}

.ul-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.text-li {
  font-family: 'Roboto', sans-serif;
  font-size: 0.95rem;
  color: #ddd;
  padding: 4px 0;
  line-height: 1.4;
}

.text-strong {
  font-weight: 500;
  color: #fff;
}

.container-total {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  gap: 2px;
  font-family: 'Roboto', sans-serif;
  font-size: 0.95rem;
  color: #eee;
}

.container-button-pay {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: auto;
}

.button-pay {
  background-color: #a40808;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  width: 100%;
  max-width: 200px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: 0.2s ease;
  
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
}

.button-pay:hover {
  background-color: #c51919;
  transform: scale(1.03);
}

.span-total-seats {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
}

@media screen and (max-width: 1450px) {
    .container-title {
        flex-direction: column;
        align-items: start;
        gap: 3px;
    }
}

</style>
