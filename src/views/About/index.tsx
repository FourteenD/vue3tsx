import { defineComponent } from "vue";
import { useUserStore } from "@/store";

export default defineComponent({
  name: "About",
  setup() {
    const mainStore = useUserStore();
    return () => (
      <div>
        <h1>About</h1>
        <p>This is the about page</p>
        <button onClick={mainStore.reduction}>
          原数{mainStore.count} 乘数{mainStore.countMultiplier}
        </button>
      </div>
    );
  },
});
