module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2020: true,
		node: true,
		jest: true
	},
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"prettier"
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly"
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module"
	},
	settings: {
		"import/resolver": {
			typescript: {}
		}
	},
	plugins: [
		"@typescript-eslint",
		"sort-destructure-keys",
		"sort-imports-es6-autofix",
		"import"
	],
	rules: {
		"sort-destructure-keys/sort-destructure-keys": [
			"warn",
			{ caseSensitive: false }
		],
		"sort-imports-es6-autofix/sort-imports-es6": [
			"warn",
			{
				ignoreCase: false
				// ignoreMemberSort: false,
				// memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			}
		]
	}
};
