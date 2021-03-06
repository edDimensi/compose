import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
  input: 'index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};