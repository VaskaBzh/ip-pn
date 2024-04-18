<template>
  <el-button
    :type="type"
    class="button"
    :disabled="disabled"
    :size="size"
    :loading="loading"
  >
    <slot />
  </el-button>
</template>

<script setup lang="ts">
interface ButtonPropsInterface {
  type?: string,
  disabled?: boolean,
  size?: string,
  loading?: boolean,
}

withDefaults(
    defineProps<ButtonPropsInterface>(),
    {
      type: "button",
      disabled: false,
      size: "small",
      loading: false,
    }
)
</script>

<style scoped lang="scss">
.button {
  --el-button-font-weight: 400;
  --el-button-border-color: transparent;
  --el-button-bg-color: var(--gray, #F2F0F0);
  --el-button-text-color: var(--text-primary, #2C2C2C);
  --el-button-disabled-text-color: rgba(var(--text-primary, #2C2C2C), 0.7);
  --el-button-disabled-bg-color: rgba(var(--gray, #F2F0F0), 0.7);
  --el-button-disabled-border-color: transparent;
  --el-button-divide-border-color: transparent;
  width: fit-content;
  min-width: 125px;
  min-height: 48px;
  font-family: Inter, serif;
  font-size: 16px;
  line-height: 24px;
  padding: 0 20px;
}
</style>