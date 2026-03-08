import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      isMobileDevice: false,
    };
  },
  actions: {
    setMobileStatus(status: boolean) {
      this.isMobileDevice = status;
    },
  },
});
