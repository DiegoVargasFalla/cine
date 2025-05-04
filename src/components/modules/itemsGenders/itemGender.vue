<template>
    <span class="li-per-gender">{{ gender }},</span>
</template>

<script setup>

const props = defineProps({
    id: String,
    gender: String 
})

</script>

<style scoped>

.li-per-gender {
    position: relative;
    /* margin-left: 4px; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Inter", sans-serif;
}

</style>