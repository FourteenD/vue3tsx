import { defineComponent } from "vue";
import { useUserStore } from "@/store";

export default defineComponent({
  name: "Home",
  setup() {
    const mainStore = useUserStore();

    return () => (
      <div>
        <h1>Home</h1>
        <p>This is the home page</p>
        <button onClick={mainStore.increment}>
          原数{mainStore.count} ; 乘数{mainStore.countMultiplier}
        </button>
      </div>
    );
  },
});
