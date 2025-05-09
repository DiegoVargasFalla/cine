<template>
    <div @click="clickChair" class="container-component-chair" :class="{'no-available': !available}" id="chairId">
        <i v-if="selected" class="fa-solid fa-circle-check icon-check"></i>
        <i v-if="exaple" class="fa-solid fa-circle-check icon-check"></i>
        <span>{{ row }}</span>
        <span>{{ num }}</span>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const selected = ref(false);

const props = defineProps({
    id: Number,
    row: String,
    num: Number,
    available: Boolean,
    exaple: Boolean
})

const clickChair = () => {
    if(props.available === true) {
        if(!selected.value) {
            selected.value = true;
        } else {
            selected.value = false;
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
    background-color: rgb(20, 157, 20);
    color: white;
    text-align: center;
    line-height: 40px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    cursor: pointer;
    transition: background-color 0.2s;
    /* border: solid 0.5px whitesmoke; */
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
    background-color:  rgb(177, 30, 30);
}

.icon-check {
    position: absolute;
    color: rgb(0, 0, 0);
    top: 3px;
    left: 3px;
}

</style>






<!-- <template>
    <div class="chair">
    </div>
</template>
  
<script>

</script>
  
<style scoped>

.chair {
    width: 40px;
    height: 40px;
    background-color: #3f3f3f;
    color: white;
    text-align: center;
    line-height: 40px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.2s;
}
  
.asiento:hover {
    background-color: #5c5c5c;
}
</style> -->