<template>
  <el-input
      class="input input-search"
      :placeholder="placeholder"
      :label="label"
      :model-value="modelValue"
      :type="type"
      v-model="modelValue"
  >
    <template #prefix>
      <main-icon color="#494949">
        <Search />
      </main-icon>
    </template>
  </el-input>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from "vue";
import { InputPropsInterface } from "./interfaces";
import MainIcon from "@/components/ui/MainIcon.vue";


const props: InputPropsInterface = withDefaults(
    defineProps<InputPropsInterface>(),
    {
      value: "",
      type: "text"
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
  &-search {
    --el-input-height: 48px;
  }
}
</style>