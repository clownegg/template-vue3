import { defineComponent } from 'vue';
import { props } from './props';

const Button = defineComponent({
  props,
  name: 'CsButton',
  setup(props) {
    return () => {
      const { label, autoFocus, loading, disabled, onClick } = props;

      return (
        <button
          class={{
            'cs-button': true
          }}
          disabled={loading || disabled}
          onClick={event => {
            onClick?.(event);
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
