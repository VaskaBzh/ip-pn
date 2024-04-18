<template>
  <el-input
      class="input input-textarea"
      :placeholder="placeholder"
      :label="label"
      type="textarea"
      :autosize="autosize"
      v-model="modelValue"
  >
  </el-input>
</template>

<script setup lang="ts">
import { InputPropsInterface } from "./interfaces";
import { Ref, ref, watch } from "vue";

interface TextareaPropsInterface extends InputPropsInterface {
  autosize?: boolean | object,
}

const props = withDefaults(
    defineProps<TextareaPropsInterface>(),
    {
      value: "",
      autosize: true,
    }
)
const emit = defineEmits<{
  changeInputValue: [modelValue: string]
}>()

const modelValue: Ref<string> = ref(props.value);

watch(() => modelValue.value, (newInputValue: string) => {
  emit('changeInputValue', newInputValue)
})
</script>

<style scoped lang="scss">
@import "./styles/input";
.input {
  &-textarea {
    --el-input-height: 112px;
  }
}
:global(.input-textarea .el-textarea__inner) {
  min-height: 112px;
}
</style>