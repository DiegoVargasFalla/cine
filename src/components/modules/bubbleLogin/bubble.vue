<template>
    <div class="container-buble" :style="{ top: `${props.top}px`, left: `${props.left}px`, width: `${props.width}px`, height: `${props.height}px`}"></div>
</template>

<script setup>

const props = defineProps({
    height: Number,
    width: Number,
    left: Number,
    top: Number,
});


</script>

<style scoped>

.container-buble {
    position: absolute;
    display: flex;
    border-radius: 50%;
    background-color: #a40808;
    animation: bubbleLight 10s ease-in-out infinite;
    /* z-index: 500; */
}

@keyframes bubbleLight {
  0% {
    transform: translate(0px, 0px) scale(1);
    box-shadow: 0 0 10px rgba(200, 68, 68, 0.8),
                0 0 20px rgba(137, 32, 32, 0.6);
    opacity: 1;
  }

  25% {
    transform: translate(20px, -20px) scale(1.05);
    box-shadow: 0 0 5px rgba(128, 45, 45, 0.4),
                0 0 15px rgba(117, 16, 16, 0.3);
    opacity: 0.9;
  }

  50% {
    transform: translate(-25px, 10px) scale(1);
    box-shadow: 0 0 0px rgba(255, 255, 100, 0),
                0 0 0px rgba(255, 255, 150, 0);
    opacity: 0.4;
  }

  75% {
    transform: translate(15px, 20px) scale(1.05);
    box-shadow: 0 0 5px rgba(185, 1, 1, 0.6),
                0 0 10px rgba(113, 17, 17, 0.4);
    opacity: 0.8;
  }

  100% {
    transform: translate(0px, 0px) scale(1);
    box-shadow: 0 0 10px rgba(206, 54, 54, 0.9),
                0 0 20px rgba(165, 35, 35, 0.7);
    opacity: 1;
  }
}

</style>