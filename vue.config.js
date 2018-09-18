module.exports = {
  devServer: {
    proxy: {
      'api': {
        /** Using a sample appliction that exposes a rest endpoint. */
        target: 'http://localhost:8081',
        changeOrigin: true,
      }
    }
  },
};