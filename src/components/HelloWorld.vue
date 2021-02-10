<template>
   <div class="bg-red-500 text-white p-4 m-auto">{{msg}}</div>
   <button class="bg-blue-500 hover:bg-blue-800 text-white px-6 py-2 m-4 rounded-lg shadow-lg ring-2 hover:ring-4">{{count}}</button>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps } from "vue";

defineProps({
   msg: String,
});
const count = ref(0);
</script>