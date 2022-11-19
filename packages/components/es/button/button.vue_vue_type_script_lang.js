import "./style/index.js";
import { defineComponent, computed } from "vue";
import { buttonProps } from "./types.js";
const _sfc_main = defineComponent({
  name: "KButton",
  props: buttonProps,
  setup(props) {
    const styleClass = computed(() => {
      return {
        [`k-button--${props.type}`]: props.type,
        "is-plain": props.plain,
        "is-round": props.round,
        "is-disabled": props.disabled,
        [`k-button--${props.size}`]: props.size
      };
    });
    const iconFont = computed(() => {
      const iconName = props.icon;
      const position = props.iconPosition;
      return {
        iconName,
        position
      };
    });
    return {
      styleClass,
      iconFont
    };
  }
});
export {
  _sfc_main as default
};
