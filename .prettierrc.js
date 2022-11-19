module.exports = {
    // 行尾不需要有分号
    "semi": false,
    // 使用单引号
    "singleQuote": true,
    /* 
    overrides作用是指定A类文件使用B类文件作为分析器，如果遇到 No parser could be inferred for file 提示，
    则可以使用overrides解决。下面的意思是.prettierrc文件使用json分析器来格式化
    */
    "overrides": [
        {
            "files": ".prettierrc",
            "options": {
                "parser": "json"
            }
        }
    ]
}