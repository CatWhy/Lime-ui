"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const ButtonType = ["primary", "success", "info", "warning", "danger", "text"];
const ButtonSize = ["midium", "small", "mini"];
const buttonProps = {
  type: {
    type: String,
    validator(value) {
      return ButtonType.includes(value);
    }
  },
  plain: Boolean,
  round: Boolean,
  disabled: Boolean,
  icon: String,
  iconPosition: String,
  size: {
    type: String,
    validator(value) {
      return ButtonSize.includes(value);
    }
  }
};
exports.ButtonSize = ButtonSize;
exports.ButtonType = ButtonType;
exports.buttonProps = buttonProps;
