import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue', '**/*.js'],
    rules: {
      'no-console': 2, // allow console.log in TypeScript files
      'quotes': ['error', 'single'],
      'no-unused-vars': 'error',
      'semi': ['error', 'always'],
    },
  },
);
