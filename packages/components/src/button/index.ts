/**
 * 很多时候我们在vue中使用一个组件会用app.use 将组件挂载到全局。要使用app.use函数的话我们需要让我们的每个组件都提供一个
 * install方法，app.use()的时候就会调用这个方法
 */
import button from './button.vue'

import type { App, Plugin } from "vue"
type SFCWithInstall<T> = T & Plugin
const withInstall = <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: App) => {
        //注册组件
        app.component((comp as any).name, comp)
    }
    return comp as SFCWithInstall<T>
}
const Button = withInstall(button)
export default Button