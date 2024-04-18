
<template>
  <el-icon :size="size" :color="color">
    <slot />
  </el-icon>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from "vue";

interface IProps {
  size?: string,
  color?: string,
}

const props: IProps = withDefaults(
    defineProps<IProps>(),
    {
      size: "20",
      color: "black",
    }
)

const symbolId: ComputedRef<string> = computed(() => `#${props.prefix}-${props.name}`)
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
