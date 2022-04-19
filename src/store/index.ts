import { defineStore } from "pinia";
import useUserStore from "./useUserStore";
interface storeModulesType {
  [key: string]: ReturnType<typeof defineStore>;
}

const files = import.meta.globEager("./*.ts");
export let modules: storeModulesType = {};
Object.keys(files).map((key) => {
  modules[key.slice(2, -3)] = files[key].default;
});
