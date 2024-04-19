<script setup lang="ts">
import { useIpStore } from "@/store/IpStore";
import { Ref, ref, watch } from "vue";
import {
  RouteRecordName,
  RouteLocationNormalizedLoaded,
  Router,
  useRoute,
  useRouter
} from "vue-router";
import MainTable from "@/components/table/MainTable.vue";

const store = useIpStore();
const route: RouteLocationNormalizedLoaded = useRoute();
const router: Router = useRouter();

const searchTimeOut: Ref<number | undefined> = ref();

const ipAddress: Ref<string> = ref("")
if (route.query.search) {
  store.search(route.query.search)
  ipAddress.value = route.query.search as string;
}

watch(() => ipAddress.value, (newIpAddressValue: string) => {
  clearTimeout(searchTimeOut.value);

  searchTimeOut.value = setTimeout(() => {
    store.search(newIpAddressValue);

    if (!newIpAddressValue) {
      router.push({ name: route.name as RouteRecordName });

      return this;
    }

    router.push({ name: route.name as RouteRecordName, query: { search: newIpAddressValue } });
  }, 500)
})
</script>

<template>
<div class="catalog">
  <div class="catalog__container">
    <main-link
      class="catalog_link"
      :link="{
            name: 'home',
            text: 'Добавить Ip'
          }"
    />
    <div class="catalog__block">
      <main-search
        class="catalog_search"
        @changeInputValue="ipAddress = $event"
        placeholder="Поиск по таблице..."
        :value="ipAddress"
      />
      <main-table @remove-items="store.remove($event)" />
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.catalog {
  &_link {
    display: inline-flex;
    width: fit-content;
  }
  &__container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &_search {
    max-width: 620px;
  }
  &__block {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>