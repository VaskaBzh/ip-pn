<template>
  <router-link
    :to="{ name: link.name }"
    active-class="link-active"
  >
    {{ link.text }}
  </router-link>
</template>

<script setup lang="ts">
import { LinkType } from "@/types/LinkType";

interface IProps {
  link: LinkType
}

defineProps<IProps>()
</script>

<style scoped lang="scss">
.link {
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
</style>