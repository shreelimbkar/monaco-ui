const path = require('path');

exports.onCreateWebpackConfig = (args) => {
  const documentationNodeModules = path.resolve('../node_modules');
  const sourceNodeModules = path.resolve('../packages/components/node_modules');

  args.actions.setWebpackConfig({
    resolve: {
      modules: [documentationNodeModules, sourceNodeModules],
    },
  });
};
