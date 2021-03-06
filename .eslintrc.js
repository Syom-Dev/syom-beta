/* eslint-disable key-spacing */

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
    createDefaultProgram: true
  },
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  settings: {
    "react": {
      pragma: "React",
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  plugins: [
    "@typescript-eslint",
    "array-func",
    "import",
    "jsx-a11y",
    "optimize-regex",
    "promise",
    "react",
    "react-hooks",
    "security",
    "radar"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:array-func/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:security/recommended",
    "plugin:radar/recommended"
  ],
  // Set rules to either "error", "warn" or "off"
  rules: {
    "indent": ["error", 2],
    "@typescript-eslint/consistent-type-assertions": [
      "error"
    ],
    "@typescript-eslint/consistent-type-definitions": [
      "error"
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "warn"
    ],
    "@typescript-eslint/explicit-module-boundary-types": [
      "off"
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "off"
    ],
    "@typescript-eslint/func-call-spacing": [
      "error"
    ],
    "@typescript-eslint/indent": [
      "warn",
      2,
      { SwitchCase: 1 }
    ],
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true
        },
        singleline: {
          delimiter: "semi",
          requireLast: true
        }
      }
    ],
    "@typescript-eslint/naming-convention": [
      "warn",
      // TODO: Tweak these
      {
        selector: "variableLike",
        format: [
          "camelCase",
          "PascalCase",
          "UPPER_CASE"
        ],
        leadingUnderscore: "allow"
      },
      {
        selector: "memberLike",
        modifiers: [
          "private"
        ],
        format: [
          "camelCase"
        ],
        leadingUnderscore: "require"
      },
      {
        selector: "variable",
        modifiers: [
          "const"
        ],
        types: [
          "string"
        ],
        format: [
          "UPPER_CASE",
          "PascalCase",
          "camelCase"
        ]
      },
      {
        selector: "typeParameter",
        format: [
          "PascalCase"
        ]
      },
      {
        selector: "interface",
        format: [
          "PascalCase"
        ]
      }
    ],
    "@typescript-eslint/no-confusing-non-null-assertion": [
      "warn"
    ],
    "@typescript-eslint/no-explicit-any": [
      "warn"
    ],
    "@typescript-eslint/no-inferrable-types": [
      "warn"
    ],
    "@typescript-eslint/no-non-null-assertion": [
      "warn"
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn"
    ],
    "@typescript-eslint/prefer-nullish-coalescing": [
      "warn"
    ],
    "@typescript-eslint/prefer-optional-chain": [
      "warn"
    ],
    "@typescript-eslint/type-annotation-spacing": [
      "error"
    ],
    "array-bracket-spacing": [
      "warn",
      "never"
    ],
    "array-func/prefer-array-from": [
      "off"
    ],
    "arrow-body-style": [
      "warn",
      "as-needed"
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "arrow-spacing": [
      "error"
    ],
    "block-scoped-var": [
      "warn"
    ],
    "block-spacing": [
      "error",
      "always"
    ],
    "brace-style": [
      "error",
      "1tbs",
      { allowSingleLine: true }
    ],
    "camelcase": [
      "error",
      { properties: "always" }
    ],
    "comma-dangle": [
      "warn",
      "never"
    ],
    // TODO: Maybe?
    // "comma-dangle":                                                 ["warn",
    //     {
    //         arrays: "always-multiline",
    //         objects: "always-multiline",
    //         imports: "only-multiline",
    //         exports: "only-multiline",
    //         functions: "only-multiline",
    //     },
    // ],
    "comma-spacing": [
      "warn",
      { before: false, after: true }
    ],
    "comma-style": [
      "warn"
    ],
    "computed-property-spacing": [
      "warn"
    ],
    "constructor-super": [
      "error"
    ],
    "curly": [
      "error",
      "all"
    ],
    "default-case": [
      "error"
    ],
    "dot-notation": [
      "error"
    ],
    "eol-last": [
      "warn",
      "always"
    ],
    "eqeqeq": [
      "error"
    ],
    "func-call-spacing": [
      "warn"
    ],
    "func-style": [
      "error",
      "expression"
    ],
    "function-paren-newline": [
      "error",
      "consistent"
    ],
    "implicit-arrow-linebreak": [
      "warn",
      "beside"
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "groups": [
          [
            "external",
            "builtin",
            "internal"
          ],
          [
            "sibling",
            "parent"
          ]
        ]
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      "warn"
    ],
    "jsx-quotes": [
      "warn",
      "prefer-double"
    ],
    "key-spacing": [
      "warn"
    ],
    "keyword-spacing": [
      "warn"
    ],
    "lines-between-class-members": [
      "warn",
      "always",
      { exceptAfterSingleLine: true }
    ],
    "new-cap": [
      "error"
    ],
    "new-parens": [
      "error"
    ],
    "newline-before-return": [
      "warn"
    ],
    "newline-per-chained-call": [
      "warn",
      { ignoreChainWithDepth: 3 }
    ],
    "no-alert": [
      "error"
    ],
    "no-console": [
      "warn",
      {
        allow: [
          "warn",
          "error"
        ]
      }
    ],
    "no-const-assign": [
      "error"
    ],
    "no-dupe-class-members": [
      "error"
    ],
    "no-duplicate-imports": [
      "error"
    ],
    "no-eval": [
      "error"
    ],
    "no-extra-semi": [
      "error"
    ],
    "no-floating-decimal": [
      "error"
    ],
    "no-invalid-regexp": [
      "error"
    ],
    "no-irregular-whitespace": [
      "error"
    ],
    "no-lonely-if": [
      "error"
    ],
    "no-mixed-spaces-and-tabs": [
      "warn"
    ],
    "no-multi-spaces": [
      "warn"
    ],
    "no-multiple-empty-lines": [
      "warn",
      { max: 1 }
    ],
    "no-redeclare": [
      "warn"
    ],
    "no-this-before-super": [
      "warn"
    ],
    "no-trailing-spaces": [
      "warn"
    ],
    "no-undef-init": [
      "error"
    ],
    "no-unneeded-ternary": [
      "error"
    ],
    "no-unreachable": [
      "error"
    ],
    "no-useless-constructor": [
      "error"
    ],
    "no-useless-rename": [
      "error"
    ],
    "no-useless-return": [
      "error"
    ],
    "no-var": [
      "error"
    ],
    "no-whitespace-before-property": [
      "warn"
    ],
    "object-curly-newline": [
      "warn"
    ],
    "object-curly-spacing": [
      "warn",
      "always"
    ],
    "object-property-newline": [
      "warn",
      { allowAllPropertiesOnSameLine: true }
    ],
    "object-shorthand": [
      "error",
      "always",
      { avoidExplicitReturnArrows: true }
    ],
    "one-var": [
      "error",
      "never"
    ],
    "optimize-regex/optimize-regex": [
      "warn"
    ],
    "padding-line-between-statements": [
      "warn",
      {
        blankLine: "always",
        prev: "*",
        next: [
          "case",
          "class",
          "const",
          "block",
          "block-like",
          "default",
          "break",
          "export",
          "expression",
          "do",
          "for",
          "function",
          "if",
          "import",
          "let",
          "return",
          "switch",
          "try",
          "while"
        ]
      },
      {
        blankLine: "always",
        prev: [
          "class",
          "const",
          "block",
          "block-like",
          "break",
          "export",
          "expression",
          "do",
          "for",
          "function",
          "if",
          "import",
          "let",
          "return",
          "switch",
          "try",
          "while"
        ],
        next: "*"
      },
      {
        blankLine: "any",
        prev: "expression",
        next: [
          "expression",
          "break"
        ]
      },
      {
        blankLine: "any",
        prev: "import",
        next: "import"
      },
      {
        blankLine: "any",
        prev: "export",
        next: "export"
      },
      {
        blankLine: "any",
        prev: [
          "let",
          "const"
        ],
        next: [
          "let",
          "const"
        ]
      },
      {
        blankLine: "any",
        prev: "case",
        next: [
          "case",
          "return"
        ]
      }
    ],
    "prefer-arrow-callback": [
      "error"
    ],
    "prefer-const": [
      "warn"
    ],
    "prefer-destructuring": [
      "warn"
    ],
    "prefer-object-spread": [
      "warn"
    ],
    "prefer-spread": [
      "warn"
    ],
    "prefer-template": [
      "error"
    ],
    "quote-props": [
      "warn",
      "consistent-as-needed"
    ],
    "quotes": [
      "warn",
      "double"
    ],
    "radar/cognitive-complexity": [
      "off"
    ],
    "radar/no-duplicate-string": [
      "off"
    ],
    "radar/no-identical-functions": [
      "warn"
    ],
    "react-hooks/exhaustive-deps": [
      "warn"
    ],
    "react-hooks/rules-of-hooks": [
      "error"
    ],
    "react/button-has-type": [
      "error"
    ],
    "react/function-component-definition": [
      "warn",
      { namedComponents: "arrow-function" }
    ],
    "react/jsx-boolean-value": [
      "warn",
      "never"
    ],
    "react/jsx-closing-bracket-location": [
      "error",
      {
        selfClosing: "tag-aligned",
        nonEmpty: "tag-aligned"
      }
    ],
    "react/jsx-curly-brace-presence": [
      "warn",
      { children: "ignore" }
    ],
    "react/jsx-curly-spacing": [
      "warn"
    ],
    "react/jsx-equals-spacing": [
      "error",
      "never"
    ],
    "react/jsx-fragments": [
      "warn",
      "syntax"
    ],
    "react/jsx-first-prop-new-line": [
      "warn",
      "multiline"
    ],
    "react/jsx-handler-names": [
      "warn"
    ],
    "react/jsx-max-depth": [
      "warn",
      { max: 7 }
    ],
    "react/jsx-max-props-per-line": [
      "warn",
      {
        when: "multiline",
        maximum: 3
      }
    ],
    "react/jsx-no-bind": [
      "error",
      {
        allowArrowFunctions: true,
        allowBind: false,
        ignoreRefs: true
      }
    ],
    "react/jsx-no-useless-fragment": [
      "error"
    ],
    "react/no-array-index-key": [
      "error"
    ],
    "react/jsx-one-expression-per-line": [
      "warn",
      { allow: "single-child" }
    ],
    "react/jsx-tag-spacing": [
      "error",
      { beforeSelfClosing: "always" }
    ],
    "react/jsx-uses-vars": [
      "error"
    ],
    "react/jsx-wrap-multilines": [
      "warn",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line"
      }
    ],
    "react/no-children-prop": [
      "error"
    ],
    "react/no-did-update-set-state": [
      "error"
    ],
    "react/no-unknown-property": [
      "error"
    ],
    "react/no-unused-prop-types": [
      "error"
    ],
    "react/prop-types": [
      "off"
    ],
    "react/react-in-jsx-scope": [
      "off"
    ],
    "rest-spread-spacing": [
      "error",
      "never"
    ],
    "security/detect-non-literal-fs-filename": [
      "off"
    ],
    "security/detect-object-injection": [
      "off"
    ],
    "semi": [
      "error",
      "always"
    ],
    "semi-spacing": [
      "warn"
    ],
    "semi-style": [
      "error"
    ],
    "space-before-blocks": [
      "warn"
    ],
    "space-before-function-paren": [
      "warn",
      "always"
    ],
    "space-in-parens": [
      "warn"
    ],
    "space-infix-ops": [
      "warn"
    ],
    "spaced-comment": [
      "warn",
      "always"
    ],
    "switch-colon-spacing": [
      "error"
    ],
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "wrap-regex": [
      "error"
    ]
  },
  overrides: [
    {
      files: [
        "*.js"
      ],
      rules: {
        "@typescript-eslint/no-var-requires": [
          "off"
        ],
        "@typescript-eslint/explicit-function-return-type": [
          "off"
        ]
      }
    }
  ]
};
