module.exports ={
  root: true,
  env: { browser: true, es2020: true },
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      "plugins: react-hooks",
      // 'plugins:react()',
      // "plugins: react-hooks",
      
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.3' } },// note your version may be different
    plugins: ['react-refresh'],
    rules: {
       'react/jsx-no-target-blank': 'off',
       "react/jsx-uses-react": "error",
      "react/prop-types": 0 ,
      "react-hooks/rules-of-hooks": 'error',
    "react-hooks/exhaustive-deps": 'warn', // <--- THIS IS THE NEW RULE
  //  "react-hooks/exhaustive-deps": 0,
      
       "react/jsx-uses-vars": "error" ,
  'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
     ],
   },
   }
