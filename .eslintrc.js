module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    parser: ['@babel/eslint-parser', '@typescript-eslint/parser'],
    sourceType: 'module', // script或者module
    ecmaVersion: 'latest', // 6 7 8 9
    ecmaFeatures: {
      globalReturn: false, // 允许在全局作用域下使用 return 语句
      jsx: true, // 启用 jsx
      impliedStrict: false, // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
      experimentalObjectRestSpread: false // 启用实验性的 object rest/spread properties 支持
    }
  },
  plugins: ['html', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.html'],
      processor: 'vue/.vue'
    }
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'html/javascript-mime-type': 'off' // 添加 html plugin 允许解析 html 文件中的 script 标签
  },
  // 这是全局变量，找不到引用也可以用
  globals: {
    vConsole: true,
    uni: true,
    plus: true,
    wx: true,
    ROUTES: true,
    getCurrentPages: true
  }
}
