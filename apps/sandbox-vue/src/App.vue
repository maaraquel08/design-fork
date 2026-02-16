<script setup lang="ts">
import { UIFork } from "uifork-vue";
import HomePage from "./components/HomePage.vue";

const isDev = import.meta.env.DEV;
</script>

<template>
  <HomePage />
  <UIFork v-if="isDev" />
</template>
