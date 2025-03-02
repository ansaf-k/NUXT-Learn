<script setup lang="ts">
const counter = useCounter();
const nuxtApp = useNuxtApp()
console.log(nuxtApp);
</script>

<template>
    <div>
        Counter: {{ counter }}
        <button @click="counter++">
            +
        </button>
        <button @click="counter--">
            -
        </button>
        <Counter />
    </div>
</template>
