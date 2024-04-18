<template>
  <el-form class="form" @submit.prevent="$emit('submitForm')">
    <slot />
  </el-form>
</template>

<script setup lang="ts">
defineEmits<{
  (event: 'submitForm'): unknown
}>()
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
}
</style>