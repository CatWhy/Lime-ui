"use strict";
require("./style/index.js");
const vue = require("vue");
const types = require("./types.js");
const _sfc_main = vue.defineComponent({
  name: "KButton",
  props: types.buttonProps,
  setup(props) {
    const styleClass = vue.computed(() => {
      return {
        [`k-button--${props.type}`]: props.type,
        "is-plain": props.plain,
        "is-round": props.round,
        "is-disabled": props.disabled,
        [`k-button--${props.size}`]: props.size
      };
    });
    const iconFont = vue.computed(() => {
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
module.exports = _sfc_main;
