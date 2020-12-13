import { defineComponent } from 'vue';
import { Button } from '@/components';

const Home = defineComponent({
  setup() {
    return () => (
      <div>
        <Button label="test"></Button>
      </div>
    );
  }
});

export default Home;
