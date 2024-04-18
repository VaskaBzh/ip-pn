<template>
  <el-container class="layout">
    <el-header class="header">
      <div class="header__container">
        <router-link :to="{ name: 'home' }" class="header_link header_link-logo">
          <img src="@img/logo.svg" alt="logo" class="header_logo" />
        </router-link>
        <main-search class="header_search" placeholder="95.213.138.174" />
        <main-nav class="header_nav" :links="navLinks" />
      </div>
    </el-header>
    <el-main class="main">
      <slot />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import MainNav from "@/components/MainNav.vue";
import { LinkType } from "@/types/LinkType";

const navLinks: LinkType[] = [
  {
    name: "documentation",
    text: "Documentation",
  },
  {
    name: "contacts",
    text: "Contacts",
  },
  {
    name: "login",
    text: "Log in",
  },
]
</script>

<style scoped lang="scss">
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.header {
  background: var(--gray, #F2F0F0);
  --el-header-padding: 26px 0;
  --el-header-height: fit-content;
  border-radius: 0 0 16px 16px;
  &_link {
    &-logo {
      min-width: 228px;
      max-height: 32px;
    }
  }
  &__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 36px;
    align-items: center;
  }
  &_search {
    max-width: 460px;
  }
}
.main {
  --el-main-padding: 80px 0;
  flex: 1 1 auto;
}
</style>