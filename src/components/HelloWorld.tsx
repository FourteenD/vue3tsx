import { defineComponent } from "vue";
export default defineComponent({
  name: "Error404",
  setup() {
    return (po: { name: string }) => (
      <div>
        <h1>{po.name}</h1>
        <p>Page not found</p>
      </div>
    );
  },
});
