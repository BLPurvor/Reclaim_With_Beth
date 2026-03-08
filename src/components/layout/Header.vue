<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

const scrollY = ref(0);
const handleScroll = () => (scrollY.value = window.scrollY);
onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
const isShrunk = computed(() => scrollY.value > 1);
</script>

<template>
  <div
    class="fixed top-0 left-0 z-20 bg-primary text-accent w-full h-45 flex items-center justify-between transition-all transition-discrete duration-200 px-20"
    :class="[{ 'h-20! px-10!': isShrunk }]"
  >
    <h1>Reclaim with Beth Logo</h1>
    <nav v-if="!isShrunk" class="flex items-center gap-2 text-lg">
      <RouterLink :to="{ name: 'home' }" active-class="bg-accent/15" class="px-3 py-1.5 rounded-2xl hover:bg-accent/15">Home</RouterLink>
      <RouterLink :to="{ name: 'privacy-policy' }" active-class="bg-accent/15" class="px-3 py-1.5 rounded-2xl hover:bg-accent/15">Privacy Policy</RouterLink>
      <RouterLink :to="{ name: 'contact' }" active-class="bg-accent/15" class="px-3 py-1.5 rounded-2xl hover:bg-accent/15">Contact Us</RouterLink>
    </nav>
  </div>
</template>
