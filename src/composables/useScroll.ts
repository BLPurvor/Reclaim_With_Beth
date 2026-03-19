import { computed, onMounted, onUnmounted, ref } from 'vue';

export const useScroll = () => {
  const scrollY = ref(0);
  const hasScrolled = computed(() => scrollY.value > 0);

  const scrollClasses = 'transition-all transition-discrete duration-300';

  const handleScroll = () => (scrollY.value = window.scrollY);

  onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }));
  onUnmounted(() => window.removeEventListener('scroll', handleScroll));

  return {
    value: scrollY,
    hasScrolled,
    scrollClasses,
  };
};
