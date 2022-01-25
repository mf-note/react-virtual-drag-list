import babel from 'rollup-plugin-babel'
const packageJson = require('./package.json')
const version = packageJson.version
const homepage = packageJson.homepage

const banner = `
/*!
 * react-virtual-drag-list v${version}
 * open source under the MIT license
 * ${homepage}
 */
`

export default {
  external: ['vue'],
  input: 'src/index.js',
  output: {
    format: 'umd',
    file: 'dist/index.js',
    name: 'virtualDragList',
    sourcemap: false,
    globals: {
      react: 'React'
    },
    banner: banner.replace(/\n/, '')
  },
  plugins: [
    babel()
  ]
}
