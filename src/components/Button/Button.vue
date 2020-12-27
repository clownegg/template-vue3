<template>
  <button
    :class="[
      'cs-button',
      theme ? 'cs-button--' + theme : '',
      {
        'is-disabled': buttonDisabled
      }
    ]"
    :disabled="buttonDisabled"
    :autofocus="autoFocus"
    :type="type"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { props } from './props';

export default defineComponent({
  name: 'CsButton',
  props,
  emits: ['click'],
  setup(props, ctx) {
    const buttonDisabled = computed(() => {
      return props.disabled || props.loading;
    });

    const handleClick = (event: MouseEvent) => {
      ctx.emit('click', event);
    };

    return {
      buttonDisabled,
      handleClick
    };
  }
});
</script>
