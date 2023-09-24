const webpack = require("webpack");

module.exports = {
  webpack: /* the normal config-overrides.js function */
    (config, env) => {
        const fallback = config.resolve.fallback || {};
        Object.assign(fallback, {
          crypto: require.resolve("crypto-browserify"),
          stream: require.resolve("stream-browserify"),
          assert: require.resolve("assert/"),
          http: require.resolve("stream-http"),
          https: require.resolve("https-browserify"),
          os: require.resolve("os-browserify"),
          url: require.resolve("url"),
          zlib: require.resolve('browserify-zlib'),
        });
        config.resolve.fallback = fallback;
        config.plugins = (config.plugins || []).concat([
          new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
          }),
        ]);
        config.ignoreWarnings = [/Failed to parse source map/];
        config.stats = {
          warningsFilter: /Module not found: Error: Can't resolve/
        };
        config.module.rules.push({
          test: /\.(js|mjs|jsx)$/,
          enforce: "pre",
          loader: require.resolve("source-map-loader"),
          resolve: {
            fullySpecified: false,
          },
        });
        return config;
  },
  devServer: (configFunction) =>
    (proxy, allowedHost) => {
      // Create the default devServer config by calling configFunction with the 
      // CRA proxy/allowedHost parameters
      const devServerConfig = configFunction(proxy, allowedHost);
      
      // Set your customisation for the dev server
      devServerConfig.allowedHosts = [
        'api.1inch.dev'
      ];
      return devServerConfig;
    }
};

// module.exports = function override(config) {
//   const fallback = config.resolve.fallback || {};
//   Object.assign(fallback, {
//     crypto: require.resolve("crypto-browserify"),
//     stream: require.resolve("stream-browserify"),
//     assert: require.resolve("assert/"),
//     http: require.resolve("stream-http"),
//     https: require.resolve("https-browserify"),
//     os: require.resolve("os-browserify"),
//     url: require.resolve("url"),
//     zlib: require.resolve('browserify-zlib'),
//   });
//   config.resolve.fallback = fallback;
//   config.plugins = (config.plugins || []).concat([
//     new webpack.ProvidePlugin({
//       process: "process/browser",
//       Buffer: ["buffer", "Buffer"],
//     }),
//   ]);
//   config.ignoreWarnings = [/Failed to parse source map/];
//   config.stats = {
//     warningsFilter: /Module not found: Error: Can't resolve/
//   };
//   config.module.rules.push({
//     test: /\.(js|mjs|jsx)$/,
//     enforce: "pre",
//     loader: require.resolve("source-map-loader"),
//     resolve: {
//       fullySpecified: false,
//     },
//   });
//   return config;
// };
