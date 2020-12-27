import { PropType } from 'vue';

type ButtonTheme = PropType<
  'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
>;
type ButtonType = PropType<'button' | 'submit' | 'reset'>;

export const props = {
  type: {
    type: String as ButtonType,
    default: 'button',
    validator: (val: string) => {
      return ['button', 'submit', 'reset'].includes(val);
    }
  },
  theme: {
    type: String as ButtonTheme,
    default: 'default',
    validator: (val: string) => {
      return [
        'default',
        'primary',
        'success',
        'warning',
        'danger',
        'info'
      ].includes(val);
    }
  },
  loading: Boolean,
  disabled: Boolean,
  autoFocus: Boolean
};
