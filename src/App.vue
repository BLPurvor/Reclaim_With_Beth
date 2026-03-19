<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { RouterView } from 'vue-router';
import { useScroll } from './composables/useScroll';

const { hasScrolled, scrollClasses } = useScroll();
</script>

<template>
  <RouterView name="header" />
  <div class="container pb-4" :class="[scrollClasses, hasScrolled ? 'mt-20' : 'mt-45']">
    <RouterView />
  </div>
</template>
