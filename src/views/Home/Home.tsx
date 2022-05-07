import { defineComponent } from "vue";
import useStore from "@/store";

export default defineComponent({
  name: "Home",
  setup() {
    const userStore = useStore.user();
    return () => (
      <div>
        <h1>Home</h1>
        <p>This is the home page</p>
        <button onClick={userStore.increment}>
          原数{userStore.count} ; 乘数{userStore.countMultiplier}
        </button>
        <button onClick={() => {}}>登录</button>
      </div>
    );
  },
});

alsjdklajsdlkjalksjd;
