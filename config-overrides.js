module.exports = function override (config, env) {
  console.log('override')
  let loaders = config.resolve
  loaders.fallback = {
      "fs": false,
      "tls": false,
      "net": false,
      "http": false,
      "https": false,
      "url": false,
      "timers": require.resolve("timers-browserify"),
      "stream": require.resolve("stream-browserify")
  }
  
  return config
}