import { defineComponent } from 'vue';
import { Button } from '@/components';

const ButtonPage = defineComponent({
  setup() {
    return () => (
      <div class="p-button">
        <section class="content">
          <div class="section-header">
            <h2>Button</h2>
            <p>Commonly used button.</p>
          </div>

          <h3>Basic usage</h3>
          <div class="demo-block">
            <div class="demo-components">
              <div class="row">
                <Button>Default</Button>
                <Button theme="primary">Primary</Button>
                <Button theme="success">Success</Button>
                <Button theme="warning">Warning</Button>
                <Button theme="danger">Danger</Button>
              </div>
            </div>
          </div>

          <h3>Disabled Button</h3>
          <div class="demo-block">
            <div class="demo-components">
              <div class="row">
                <Button disabled>Default</Button>
                <Button theme="primary" disabled>
                  Primary
                </Button>
                <Button theme="success" disabled>
                  Success
                </Button>
                <Button theme="warning" disabled>
                  Warning
                </Button>
                <Button theme="danger" disabled>
                  Danger
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
});

export default ButtonPage;
