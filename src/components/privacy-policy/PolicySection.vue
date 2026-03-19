<script setup lang="ts">
import type { PrivacyPolicySection } from '@/types/privacy-policy';
import type { Component } from 'vue';

const props = defineProps<{
  section: PrivacyPolicySection;
  index: number;
}>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <h2>
      <span>{{ props.index }}. </span>
      <span>{{ props.section.title }}</span>
    </h2>
    <span v-html="props.section.html" />
  </div>
</template>
