// ExtractPropTypes是Vue3内置的类型声明，它的作用是接收一个类型，然后把对应的Vue3所接收的props类型提供出来，后面有需要可以直接使用
import { ExtractPropTypes } from "vue";

export const ButtonType = ['default', 'primary', 'success', 'warning', 'danger']

export const ButtonSize = ['large', 'normal', 'small', 'mini']

export const buttonProps = {
    type: {
        type: String,
        values: ButtonType
    },
    size: {
        type: String,
        values: ButtonSize
    }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>