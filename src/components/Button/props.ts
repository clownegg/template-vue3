import { PropType } from 'vue';

type ButtonType = PropType<'button' | 'submit' | 'reset'>;

export const props = {
  type: {
    type: String as ButtonType,
    default: 'button',
    validator: (val: string) => {
      return ['button', 'submit', 'reset'].includes(val);
    }
  },
  label: String,
  loading: Boolean,
  disabled: Boolean,
  autoFocus: Boolean,
  onClick: Function
};
