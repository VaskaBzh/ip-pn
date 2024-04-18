<template>
  <component :is="$route.meta.layoutComponent">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { useIpStore } from "@/store/IpStore";

const { read } = useIpStore();

read();
</script>

<style scoped lang="scss">
</style>
