export default {
  name: 'custom-vite-plugin',
  configureServer({ middlewares }) {
    middlewares.use((req, res, next) => {
      if (req.url.startsWith('/build/')) {
        const modifiedUrl = req.url.replace('/build/', '/src/assets/');
        req.url = modifiedUrl;
      }
      next();
    });
  },
};
