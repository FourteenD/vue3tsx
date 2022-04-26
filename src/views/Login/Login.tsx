import { defineComponent } from "vue";

import loginStyl from "./Login.module.styl";

export default defineComponent({
  name: "Login",
  setup() {
    return () => (
      <div class={loginStyl.page}>
        <div class={loginStyl.title}>登录</div>
      </div>
    );
  },
});
