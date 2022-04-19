import { defineComponent } from "vue";

import "@/assets/styles/global.styl";

export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <>
        <router-view></router-view>
      </>
    );
  },
});
