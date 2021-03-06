module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-undef": [
            "off"
        ],
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "func-call-spacing": [
            "error",
            "never"
        ],
        "comma-dangle": "error",
        "comma-spacing": "error",
        "strict": "error",
        "no-var": "error",
        "no-caller": "error",
        "no-inner-declarations": "warn",
        "no-console": "error",
        "no-undef": "off",
        "no-useless-escape": "off",
        "no-sparse-arrays": "off",   // we give undefined as test cases using pattern [, a, b]
        "no-whitespace-before-property": "error"  // TODO: apply this rule on array bracket properties only
    }
};
