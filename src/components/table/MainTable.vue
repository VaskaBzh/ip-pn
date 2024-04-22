<template>
  <el-table
    @select-all="saveSelectedArray($event)"
    @select="saveSelectedArray($event)"
    :data="store.ipList"
    stripe
    :max-height="41.5 * 6"
    class="table"
    row-class-name="table_row"
    ref="table"
    border
  >
    <el-table-column class="table_row" type="selection" />
    <el-table-column class="table_row" label="Ip" width="300">
      <template #header>
        <div class="table_row__block">
          <span class="table_text table_text-head">
            Ip
          </span>
          <main-button
            size="small"
            class="table_button table_button-remove"
            v-show="savedSelectedArray.length > 0"
            @click="removeSelected"
          >
            Удалить выбранные
          </main-button>
        </div>
      </template>
      <template #default="scope">
        <div class="table_row__block">
          <span class="table_text table_text-ip">
            <span class="table_icon table_icon-flag" v-if="scope.row?.countryIcon" :class="`vf-icon-${scope.row.countryIcon}`"></span>
            <span class="table_icon table_icon-flag" v-else>?</span>
            {{ scope.row.ip }}
          </span>
          <div class="table__buttons table__buttons-icons">
            <el-button class="table_button table_button-icon table_button-copy" @click="copyIp(scope.row.ip)">
              <main-icon color="#929496" size="16">
                <copy-document />
              </main-icon>
            </el-button>
          </div>
        </div>
      </template>
    </el-table-column>
    <el-table-column class="table_row" sortable prop="city" label="Country" width="300" />
    <el-table-column class="table_row" prop="country" label="City/Town" />
    <el-table-column class="table_row" align="right" width="48" >
      <template #default="scope">
        <div v-show="scope.row.status" class="table_row__block" :class="[`table_row__block-${scope.row.status}`]">
          <main-icon class="table_icon" :color="getEnumValue(StatusColorsEnum, scope.row.status, StatusColorsEnum.fail)" size="16">
            <component :is="getEnumValue(StatusIconsEnum, scope.row.status, StatusColorsEnum.fail)" />
          </main-icon>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import 'v-flag-icons/css/rectangular.min.css';
import 'v-flag-icons/css/square.min.css';
import 'v-flag-icons/css/hexagonal.min.css';
import 'v-flag-icons/css/mast.min.css';
import 'v-flag-icons/css/rounded-rectangle.min.css';
import 'v-flag-icons/css/rounded-square.min.css';
import { useIpStore } from "@/store/IpStore";
import { IpType } from "@/types/IpType";
import { Ref, ref} from "vue";
import MainIcon from "@/components/ui/MainIcon.vue";
import { StatusIconsEnum } from "@/enums";
import { StatusColorsEnum } from "@/enums";
import { ElMessage } from 'element-plus';
import { CopyDocument } from "@element-plus/icons-vue";
import { getEnumValue } from "@/utils";

const emits = defineEmits<{
  'remove-items': [savedSelectedArray: IpType[]]
}>()

const table: Ref<any | null> = ref(null);

// Такое не очень практично, но в условиях тестового пойдет)
const store = useIpStore();

const savedSelectedArray: Ref<IpType[]> = ref([])
function saveSelectedArray(element: IpType[]) {
  savedSelectedArray.value = [...element]
}

function removeSelected() {
  emits('remove-items', savedSelectedArray.value);
  savedSelectedArray.value= [];
  table.value?.clearSelection();
}

async function copyIp(ip: string) {
  try {
    await navigator.clipboard.writeText(ip);
    ElMessage({ type: 'success', message: `IP скопирован: ${ip}` });
  } catch (err) {
    ElMessage({ type: 'error', message: 'Ошибка при копировании IP' });
  }
};
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
  &-scroll {
    box-shadow: 0px 4px 8px 0px #0000001F;
  }
  &_text {
    &-ip {
      display: flex;
      gap: 4.5px;
    }
  }
  &_icon {
    &-flag {
      min-width: 21px;
      min-height: 15px;
      display: block;
    }
  }
  &_row {
    &:hover {
      .table_button-copy {
        opacity: 1;
        z-index: 1;
      }
    }
    &__block {
      margin: 0 6px;
      display: flex;
      justify-content: space-between;
      &-success,
      &-fail {
        transition: all 0.3s ease 0s;
        background: transparent;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: -9px;
        min-height: 40px;
        min-width: 40px;
      }
      .table {
        &__buttons {
          display: flex;
          gap: 6px;
          &-icons {
            margin-right: -8px;
          }
        }
        &_button {
          max-width: 147px;
          max-height: 24px;
          min-height: 24px;
          font-size: 13px;
          line-height: 20px;
          --el-button-font-weight: 500;
          &-icon {
            --el-button-bg-color: transparent;
            --el-button-text-color: transparent;
            --el-button-hover-text-color: transparent;
            --el-button-hover-bg-color: transparent;
            --el-button-hover-border-color: transparent;
            --el-button-active-text-color: transparent;
            --el-button-active-border-color: transparent;
            --el-button-active-bg-color: transparent;
            --el-button-border-color: transparent;
            padding: 0;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            min-width: 36px;
            min-height: 36px;
            margin: -8px 0;
          }
          &-copy {
            opacity: 0;
            transition: all 0.2s ease 0s;
            z-index: -1;
          }
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