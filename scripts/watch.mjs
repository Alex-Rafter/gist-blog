import { sassPlugin } from 'esbuild-sass-plugin'
import esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['./src/js/index.jsx'],
  bundle: true,
  minify: true,
  watch: true,
  jsxFactory: 'h',
  outfile: './build/out/out.js',
  plugins: [sassPlugin()]
}).catch(() => process.exit(1))
