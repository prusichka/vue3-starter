<template>
  <component :is="icon" v-if="icon" class="base-icon" :class="sizeClass" :style="{ color }" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'

interface Props {
  name: string
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

const props = defineProps<Props>()

const sizeClass = computed(() => {
  return {
    sm: 'base-icon--sm',
    md: 'base-icon--md',
    lg: 'base-icon--lg',
  }[props.size ?? 'md']
})

const icon = defineAsyncComponent(() => import(`@/assets/icons/${props.name}.svg`))
</script>

<style scoped lang="scss">
.base-icon {
  display: inline-block;

  &--sm {
    width: 16px;
    height: 16px;
  }

  &--md {
    width: 24px;
    height: 24px;
  }

  &--lg {
    width: 32px;
    height: 32px;
  }
}
</style>
