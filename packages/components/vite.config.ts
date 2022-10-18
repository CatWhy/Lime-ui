import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
export default defineConfig(
    {
        build: {
            // 设置最终构建的浏览器兼容目录   //es2015(编译成es5) | modules
            target: 'modules',
            //打包文件目录
            outDir: "es",
            //压缩
            minify: false,
            //css分离
            //cssCodeSplit: true,
            rollupOptions: {
                // 忽略打包vue文件
                external: ['vue'],
                // 打包的指定入口
                input: ['src/index.ts'],
                // 分包配置
                output: [
                    {
                        format: 'es',
                        //不用打包成.es.js,这里我们想把它打包成.js
                        entryFileNames: '[name].js',
                        //让打包目录和我们目录对应
                        preserveModules: true,
                        //配置打包根目录
                        dir: 'es',
                        preserveModulesRoot: 'src'
                    },
                    {
                        format: 'cjs',
                        entryFileNames: '[name].js',
                        preserveModules: true,
                        //配置打包根目录
                        dir: 'lib',
                        preserveModulesRoot: 'src'
                    }
                ]
            },
            lib: {
                entry: './index.ts',
                formats: ['es', 'cjs'],
                name: 'Lime'
            }
        },
        plugins: [
            vue(),
            dts({
                tsConfigFilePath: '../../tsconfig.json'
            }),
            //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
            dts({
                outputDir: 'lib',
                tsConfigFilePath: '../../tsconfig.json'
            })
        ]
    }
)