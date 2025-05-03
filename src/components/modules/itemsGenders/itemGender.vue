<template>
    <div class="gender">
        <span class="text-gender">
            {{ gender }}
        </span>
    </div>
</template>

<script setup>

const props = defineProps({
    id: String,
    gender: String 
})

</script>

<style scoped></style>