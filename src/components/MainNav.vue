<template>
  <nav class="nav">
    <main-link
        v-for="link in links"
        :link="link"
        :key="link.name"
        class="nav_link"
    />
  </nav>
</template>

<script setup lang="ts">
import { LinkType } from "@/types/LinkType";

interface IProps {
  links: LinkType[]
}

defineProps<IProps>()
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  gap: 32px;
  &_link {
    font-weight: 500;
    line-height: 24px;
    color: var(--gray-link, #494949);
    transition: all 0.3s ease 0s;
    &:hover {
      color: rgba(var(--gray-dirt, #0E2E3B), 0.8);
    }
    &-active {
      color: var(--gray-dirt, #0E2E3B);
    }
  }
}
</style>