import useUserStore from "./useUserStore";

const modulesFiles = import.meta.globEager("./*.ts");
let modules = [] as any;
for (const path in modulesFiles) {
  modules = [].concat(modules, modulesFiles[path].default);
}

console.log(modules);

export { useUserStore };
