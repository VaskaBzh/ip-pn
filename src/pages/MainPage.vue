<script setup lang="ts">
// import { IpController } from "@/controllers";
// import { IpControllerContract } from "@/controllers/contracts";
import { Ref, ref } from "vue";
import { useIpStore } from "@/store/IpStore";

// Перенес в стор (первый вариант был таким)
// function createNewIpController(): IpControllerContract {
//   return new IpController();
// }
//
// const ipController: IpControllerContract = createNewIpController();

const store = useIpStore();

const ipAddress: Ref<string> = ref("")
</script>

<template>
  <div class="main">
    <div class="main__container">
      <main-link
        class="main_link"
        :link="{
          name: 'catalog',
          text: 'Таблица ip'
        }"
      />
      <main-form class="main__form">
        <main-textarea
            @changeInputValue="ipAddress = $event"
            placeholder="Введите IP адреса"
            class="main_textarea"
            :autosize="{ minRows: 6 }"
            :value="ipAddress"
            :clear="ipAddress === ''"
        />
        <main-button class="main_button" @click.prevent="store.create(ipAddress)">
          Отправить
        </main-button>
      </main-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__form {
    max-width: 620px;
  }
}
</style>