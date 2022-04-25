import user from "./user";
import { defineStore, StoreDefinition } from "pinia";

const modules = import.meta.globEager("./*.ts");

export default Object.keys(modules).reduce<{ [key: string]: any }>(
  (pre, curKey) => {
    let key = curKey.replace(/^\.\//, "").replace(/\.ts$/, "");
    return { ...pre, [key]: modules[curKey].default };
  },
  {}
);

// export default {
//   user,
// };
