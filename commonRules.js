module.exports = {
    "import/extensions": [
        "error",
        "ignorePackages",
        {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
        },
    ],
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
        1,
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/destructuring-assignment": ["error", "always"],
    "import/prefer-default-export": "off",
    "complexity": ["warn", 5],
    "max-depth": ["warn", 4],
    "max-nested-callbacks": ["warn", 3],
    "max-params": ["warn", 3],
    "react/jsx-fragments": ["error", "element"],
    "no-param-reassign": [
        "error",
        {
            "props": true,
            "ignorePropertyModificationsFor": [
                "state",
                "acc",
                "e",
                "ctx",
                "req",
                "request",
                "res",
                "response",
                "$scope",
                "registration",
                "draft",
            ]
        }
    ],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "react-perf/jsx-no-new-object-as-prop": "warn",
    "react-perf/jsx-no-new-array-as-prop": "warn",
    "react-perf/jsx-no-new-function-as-prop": "warn"
};