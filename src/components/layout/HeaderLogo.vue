<script setup lang="ts">
import origLogo from '@/assets/img/origLogo.png';
import newHeaderLogo from '@/assets/img/newHeaderLogo.png';
import mobileIcon from '@/assets/img/mobileIcon.png';
import { computed, onMounted, ref, type HTMLAttributes } from 'vue';
import { useAppStore } from '@/stores/app';

const useNew = true;

const { isMobileDevice, setMobileStatus } = useAppStore();
onMounted(() => {
  setMobileStatus(screen.width > 768);
});

const logoClass = ref<string | undefined>();

const headerLogo = computed(() => {
  if (useNew) {
    if (isMobileDevice) {
      logoClass.value = 'h-4/5';
      return mobileIcon;
    } else {
      logoClass.value = 'h-2/5';
      return newHeaderLogo;
    }
  } else {
    logoClass.value = 'h-full';
    return origLogo;
  }
});

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <img :src="headerLogo" alt="Reclaim with Beth" class="aspect-auto" :class="[logoClass, props.class]" />
</template>
