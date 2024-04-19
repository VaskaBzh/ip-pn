
<template>
  <el-icon :size="size" :color="color">
    <slot />
  </el-icon>
</template>

<script setup lang="ts">
interface IProps {
  size?: string,
  color?: string,
}

withDefaults(
    defineProps<IProps>(),
    {
      size: "20",
      color: "black",
    }
)
</script>

<style scoped lang="scss">
.icon {
  width: 32px;
  height: 32px;
  fill: var(--icons-primary, #98a2b3);
  stroke: none;
  &-stroke {
    stroke: var(--icons-primary, #98a2b3);
    fill: none;
  }
  &-warning {
    fill: var(--status-waiting, #ffb868);
    stroke: none;
    &.icon-stroke {
      stroke: var(--status-waiting, #ffb868);
      fill: none;
    }
  }
  &-md {
    width: 24px;
    height: 24px;
    min-width: 24px;
  }
  &-sm {
    width: 16px;
    height: 16px;
  }
}
</style>
