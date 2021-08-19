import svelte from 'rollup-plugin-svelte'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import autoPreprocess from 'svelte-preprocess'
import pkg from './package.json'
import { terser } from 'rollup-plugin-terser'
import sveld from 'sveld'

const production = !process.env.ROLLUP_WATCH
const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase())

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: production
    },
    {
      file: pkg.main,
      format: 'umd',
      name,
      sourcemap: production
    }
  ],
  plugins: [
    commonjs(),
    svelte({
      dev: !production,
      preprocess: autoPreprocess()
    }),
    resolve({
      dedupe: ['svelte']
    }),
    typescript({ sourceMap: true }),
    sveld(),
    production && terser()
  ]
}
