module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.json', '.ios.js', '.android.js'],
        alias: {
          '~': './src',
          components: './src/components',
          configs: './src/configs',
          routes: './src/routes',
          screens: './src/screens',
          services: './src/services',
          utils: './src/utils',
        },
      },
    ],
  ],
}	}