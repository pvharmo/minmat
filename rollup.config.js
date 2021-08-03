import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import autoPreprocess from 'svelte-preprocess'
import pkg from './package.json'

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase())

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.module, format: 'es', sourcemap: true },
    { file: pkg.main, format: 'umd', name, sourcemap: true }
  ],
  plugins: [
    svelte({
      preprocess: autoPreprocess()
    }),
    resolve(),
    typescript({ sourceMap: true })
  ]
}