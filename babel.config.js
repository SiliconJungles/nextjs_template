module.exports = {
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', { targets: { node: 'current' } }],
    'next/babel',
  ],
  plugins: [
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
    [
      'module-resolver',
      {
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _constants: './src/constants',
          _pages: './pages',
          _store: './src/store',
        },
      },
    ],
  ],
}
