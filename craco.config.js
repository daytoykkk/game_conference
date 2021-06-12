const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#4151a9',
              '@border-radius-base': '4px',
              '@layout-header-background': '#fff',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};