<script setup lang="ts">
  import type { HTMLAttributes } from 'vue';
  import { reactiveOmit } from '@vueuse/core';
  import {
    DropdownMenuLabel,
    type DropdownMenuLabelProps,
    useForwardProps,
  } from 'reka-ui';
  import { cn } from '@/lib/utils';

  const props = defineProps<
    DropdownMenuLabelProps & {
      class?: HTMLAttributes['class'];
      inset?: boolean;
    }
  >();

  const delegatedProps = reactiveOmit(props, 'class');

  const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DropdownMenuLabel
    v-bind="forwardedProps"
    :class="
      cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', props.class)
    "
  >
    <slot />
  </DropdownMenuLabel>
</template>
