<script setup>
const { data } = await useFetch("/api/hello")
console.log(data);
</script>

<template>
    <div>
        <pre>{{ data }}</pre>
    </div>
</template>
