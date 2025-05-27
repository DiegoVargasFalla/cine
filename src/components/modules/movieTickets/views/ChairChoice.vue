<template>
    <div @click="clickChair" class="container-component-chair" :class="{'no-available': !available, 'container-proof': proof}" id="chairId">
        <i v-if="selected" class="fa-solid fa-circle-check icon-check"></i>
        <i v-if="exaple" class="fa-solid fa-circle-check icon-check"></i>
        <span>{{ row }}</span>
        <span>{{ num }}</span>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useChairStore } from '../store/ChairStore';


const chairStore = useChairStore();

const selected = ref(false);

const props = defineProps({
    id: Number,
    row: String,
    num: Number,
    available: Boolean,
    exaple: Boolean,
    proof: Boolean
})

const clickChair = () => {
    const seat = {id: props.id, row: props.row, num: props.num}
    if(props.available === true && !props.proof) {
        if(!selected.value) {
            selected.value = true;
            chairStore.addChair(seat);
            chairStore.calculateTotal();
        } else {
            selected.value = false;
            chairStore.deleteChair(seat.id);
            chairStore.substractSeat();
        }
    } 
}


</script>

<style scoped>


.container-component-chair {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 55px;
    background-color: rgb(37, 181, 37);
    color: white;
    text-align: center;
    line-height: 40px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    box-shadow: 1px 1px 3px rgb(87, 85, 85);
    transition: all 0.2s ease;

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: white;
    font-weight: 400;
}

.container-component-chair:hover {
    transform: scale(1.2);
    border: solid 1px rgb(180, 194, 180);
    box-shadow: 1px 1px 4px rgb(185, 209, 185);
}

.no-available {
    background-color:  #a40808; 
}

.icon-check {
    position: absolute;
    color: rgb(0, 0, 0);
    top: 3px;
    left: 3px;
}

@media screen and (max-width: 700px) {
    .container-component-chair {
        height: auto;
        width: auto;
        padding: 2px 15px;
    }
    .container-proof {
        height: 40px;
        width: 42px;
    }
}

</style>