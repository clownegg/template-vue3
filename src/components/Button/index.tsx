import { defineComponent } from 'vue';
import { props } from './props';

const Button = defineComponent({
  props,
  name: 'CsButton',
  setup(props) {
    return () => {
      const { label, autoFocus } = props;

      return (
        <button
          class={{
            'cs-button': true
          }}
          autofocus={autoFocus}
        >
          {label}
        </button>
      );
    };
  }
});

export default Button;
