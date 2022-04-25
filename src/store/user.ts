import { defineStore } from "pinia";
export const user = defineStore("user", {
  state: () => {
    return {
      count: 0,
    };
  },
  getters: {
    countMultiplier: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    reduction() {
      this.count--;
    },
  },
});

export default user;
