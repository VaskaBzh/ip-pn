<template>
  <el-table
    @select-all="saveSelectedArray($event)"
    @select="saveSelectedArray($event)"
    :data="store.ipList"
    stripe
    :max-height="40 * 6"
    class="table"
    row-class-name="table_row"
    ref="table"
  >
    <el-table-column type="selection" />
    <el-table-column class="no-border" prop="ip" label="Ip" width="120" />
    <el-table-column align="center" width="230" >
      <template #header>
        <div class="table_row__block">
          <main-button
            size="small"
            class="table_button table_button-remove"
            v-show="savedSelectedArray.length > 0"
            @click="table?.clearSelection(); $emit('remove-items', savedSelectedArray)"
          >
            Удалить выбранные
          </main-button>
        </div>
      </template>
    </el-table-column>
    <el-table-column sortable prop="city" label="Country" width="300" />
    <el-table-column prop="country" label="City/Town" />
    <el-table-column align="right" width="48" >
      <template #default="scope">
        <div v-show="scope.row.status" class="table_row__block" :class="[`table_row__block-${scope.row.status}`]">
          <main-icon class="table_icon" :color="StatusColorsEnum[scope.row.status as keyof typeof StatusColorsEnum]" size="16">
            <component :is="StatusIconsEnum[scope.row.status as keyof typeof StatusIconsEnum]" />
          </main-icon>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { useIpStore } from "@/store/IpStore";
import { IpType } from "@/types/IpType";
import { Ref, ref } from "vue";
import MainIcon from "@/components/ui/MainIcon.vue";
import { StatusIconsEnum } from "@/enums/StatusIconsEnum";

defineEmits<{
  'remove-items': [savedSelectedArray: IpType[]]
}>()

const table: Ref<any | null> = ref(null);

// Такое не очень практично, но в условиях тестового пойдет)
const store = useIpStore();

const savedSelectedArray: Ref<IpType[]> = ref([])
function saveSelectedArray(element: IpType[]) {
  savedSelectedArray.value = [...element]
}

enum StatusColorsEnum {
  success = "#3E7919",
  fail = "#791919",
}
</script>

<style lang="scss">
.table {
  --el-table-border-color: var(--table-row-border, #CCCCCC);
  --el-table-border: 1px solid var(--table-row-border, #CCCCCC);
  --el-table-text-color: var(--text-primary, #2C2C2C);
  --el-table-header-text-color: var(--text-primary, #2C2C2C);
  --el-table-row-hover-bg-color: var(--table-row-v1, #F7F7F7);
  --el-table-current-row-bg-color: transparent;
  --el-table-header-bg-color: transparent;
  --el-table-fixed-box-shadow: 0px 4px 8px 0px #0000001F;;
  --el-table-bg-color: var(--white, #FFFFFF);
  --el-table-tr-bg-color: transparent;
  --el-table-expanded-cell-bg-color: transparent;
  font-size: 16px;
  line-height: 24px;
  &_row {
    &__block {
      margin: 0 6px;
      &-success,
      &-fail {
        transition: all 0.3s ease 0s;
        background: transparent;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: -8px;
        min-height: 40px;
        min-width: 40px;
      }
      .table {
        &_button {
          max-width: 147px;
          max-height: 24px;
          min-height: 24px;
          font-size: 13px;
          line-height: 20px;
          --el-button-font-weight: 500;
          &-remove {
            --el-button-bg-color: var(--red-remove-background, #F8E8E8);
            --el-button-text-color: var(--red-remove-text, #791919);
            --el-button-hover-text-color: var(--red-remove-background, #F8E8E8);
            --el-button-hover-bg-color: var(--red-remove-text, #791919);
            --el-button-hover-border-color: transparent;
            --el-button-active-text-color: var(--red-remove-background, #F8E8E8);
            --el-button-active-border-color: transparent;
            --el-button-active-bg-color: var(--red-remove-text, #791919);
          }
        }
      }
    }
  }
}
</style>