<!-- button.vue -->
<template>
  <button
    class="k-button"
    :class="styleClass"
  >
    测试组件
  </button>
</template>

<script lang="ts">
import './style/index.less'
import { defineComponent, computed } from 'vue'
import { buttonProps } from './types'
export default defineComponent({
    name: 'KButton',
    props: buttonProps,
    setup(props) {
        const styleClass = computed(() => {
            return {
                [`k-button--${props.type}`]: props.type,
                'is-plain': props.plain,
                'is-round': props.round,
                'is-disabled': props.disabled,
                [`k-button--${props.size}`]: props.size,
            }
        })

        //图标
        const iconFont = computed(() => {
            const iconName = props.icon
            const position = props.iconPosition
            return {
                iconName,
                position
            }
        })

        return {
            styleClass,
            iconFont
        };
    },
});
</script>
