const sveltePreprocess = require("svelte-preprocess");
const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
  compilerOptions: {
    dev: !prod
  },
  preprocess: sveltePreprocess(),
  emitCss: prod,
  hotReload: !prod
};
