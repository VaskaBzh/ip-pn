<template>
  <component :is="$route.meta.layoutComponent ?? LoadLayout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import LoadLayout from "@/layouts/LoadLayout.vue";
import { useIpStore } from "@/store/IpStore";

const { read } = useIpStore();

read();
</script>

<style scoped lang="scss">
</style>
