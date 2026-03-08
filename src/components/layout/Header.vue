<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import HeaderLogo from './HeaderLogo.vue';

const scrollY = ref(0);
const handleScroll = () => (scrollY.value = window.scrollY);
onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
const isShrunk = computed(() => scrollY.value > 1);
</script>

<template>
  <div
    class="fixed top-0 left-0 z-20 bg-primary text-accent w-full h-45 flex items-center justify-between transition-all transition-discrete duration-300 px-20"
    :class="[{ 'h-20! px-10!': isShrunk }]"
  >
    <RouterLink :to="{ name: 'home' }" class="h-full flex items-center">
      <HeaderLogo />
    </RouterLink>
    <nav class="nav-menu flex items-center transition-all transition-discrete duration-300" :class="[isShrunk ? 'text-sm gap-1' : 'text-xl gap-2']">
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'privacy-policy' }">Privacy Policy</RouterLink>
      <RouterLink :to="{ name: 'contact' }">Contact Us</RouterLink>
    </nav>
  </div>
</template>

<style scoped lang="css">
@reference "@/assets/main.css";

.nav-menu > a {
  @apply hover:bg-accent/15 px-3 py-1.5 rounded-2xl transition-colors duration-150;
}
</style>
