<template>
    <span class="li-per-gender">{{ gender }} <strong v-if="last">,</strong> <strong v-else>.</strong></span>
</template>

<script setup>
import { useMoviesStore } from '@/stores/moviesStore/MoviesStore';
import { Number } from 'core-js';
import { computed } from 'vue';

const moviesStore = useMoviesStore();

const props = defineProps({
    id: String,
    gender: String,
})

const last = computed(() => moviesStore.getListGendersPerMovie().length === Number(props.id) ? false : true)
</script>

<style scoped>

.li-per-gender {
    position: relative;
    /* margin-left: 4px; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Oswald", sans-serif;
}

</style>