module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    "plugins": [
        'vue'
    ],
    "parserOptions": {},
    "env": {
        "node": true
    },
    "globals": {},
    "rules": {
        "vue/max-attributes-per-line": "off",
        "vue/html-self-closing": "off",
        "vue/singleline-html-element-content-newline": "off",
        "vue/multiline-html-element-content-newline": "off",
        "vue/require-prop-types": "off"
    },
    "overrides": [
        {
            "files": ["*/static/js/*.js"],
            "rules": {
                "no-undef": "off",
                "no-empty": "off",
                "no-unused-vars": "off"
            }
        }
    ],
}