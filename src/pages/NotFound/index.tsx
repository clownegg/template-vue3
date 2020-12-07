import { defineComponent } from 'vue';

const NotFound = defineComponent({
  setup() {
    return () => <div>not found</div>;
  }
});

export default NotFound;
