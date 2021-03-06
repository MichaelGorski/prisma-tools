import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const settings = {
  plugins: [
    typescript({
      typescript: require('typescript'),
      check: false,
      clean: true,
    }),
  ],
  external: [
    ...Object.keys(pkg.devDependencies || {}),
    ...Object.keys(pkg.dependencies || {}),
    'fs',
  ],
};

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    ...settings,
  },
  {
    input: 'src/Settings/index.tsx',
    output: [{ file: 'dist/Settings.js', format: 'cjs' }],
    ...settings,
  },
  {
    input: 'src/generateAdmin/index.ts',
    output: [{ file: 'dist/generateAdmin.js', format: 'cjs' }],
    ...settings,
  },
];
