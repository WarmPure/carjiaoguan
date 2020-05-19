module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/typescript'
    ],
    rules: {
        // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
            "generator-star-spacing": "off",
            "no-tabs":"off",
            "no-unused-vars":"off",
            "no-console":"off",
            "no-irregular-whitespace":"off",
            "no-debugger": "off"
    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    }
}
