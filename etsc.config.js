module.exports = {
  outDir: './lib',
  esbuild: {
    minify: false,
    target: 'node8',
    plugins: []
  },
  assets: {
    baseDir: 'src',
    filePatterns: ['**/*.json']
  }
}
