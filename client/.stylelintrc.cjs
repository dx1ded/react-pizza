module.exports = {
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order"
  ],
  "plugins": ["stylelint-order"],
  "customSyntax": "postcss-styled-syntax",
  "rules": {
    "no-empty-source": null,
    "no-missing-end-of-source-newline": null,
    "no-descending-specificity": null,
    "value-no-vendor-prefix": null,
    "scss/operator-no-unspaced": null,
    "scss/operator-no-newline-after": null,
    "selector-class-pattern": null,
    "order/order": [
      [
        "custom-properties",
        "dollar-variables",
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": false
        },
        "declarations",
        {
          "type": "rule",
          "selector": "&::before"
        },
        {
          "type": "rule",
          "selector": "&::after"
        },
        "rules",
        {
          "type": "rule",
          "selector": "&:link"
        },
        {
          "type": "rule",
          "selector": "&:visited"
        },
        {
          "type": "rule",
          "selector": "&:focus"
        },
        {
          "type": "rule",
          "selector": "&:hover"
        },
        {
          "type": "rule",
          "selector": "&:active"
        },
        {
          "type": "rule",
          "selector": "&:disabled"
        },
        {
          "type": "rule",
          "selector": "&:first-child"
        },
        {
          "type": "rule",
          "selector": "&:last-child"
        },
        {
          "type": "rule",
          "selector": "&:nth-child.+"
        },
        {
          "type": "rule",
          "selector": "&\\[[^\\[\\]]+\\]"
        },
        {
          "type": "rule",
          "selector": "&\\..+"
        },
        {
          "type": "rule",
          "selector": "&--.+"
        },
        {
          "type": "rule",
          "selector": ".* &"
        },
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": true
        },
        "at-rules"
      ]
    ]
  }
}
