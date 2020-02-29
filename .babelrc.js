const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ["./"],
      alias: {
        components: "./src/components",
        configs: "./src/configs",
        routes: "./src/routes",
        screens: "./src/screens",
        services: "./src/services",
        utils: "./src/utils",
      }
    } 
  ]
];