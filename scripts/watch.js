require('esbuild').build({
    entryPoints: ['./src/js/index.jsx'],
    bundle: true,
    minify : true,
    watch : true,
    jsxFactory: "h",
    outfile: './build/js/out.js',
  }).catch(() => process.exit(1))
