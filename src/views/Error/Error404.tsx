import { defineComponent } from "vue";
export default defineComponent({
  name: "Error404",
  setup() {
    return () => (
      <div>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    );
  },
});
