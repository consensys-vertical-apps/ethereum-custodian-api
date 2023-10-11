/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const fs = require('fs');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

// get OpenRPC Document at build time
// eslint-disable-next-line
const resultData = fs.readFileSync(`${__dirname}/src/openrpc.json`).toString();

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // create node for build time openrpc document on the site
  createNode({
    openrpcDocument: resultData,
    // required fields
    id: `openrpcDocument`,
    parent: null,
    children: [],
    internal: {
      type: `OpenrpcDocument`,
      contentDigest: createContentDigest(resultData),
    },
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-json-view/u,
            use: loaders.null(),
          },
          {
            test: /monaco-editor/u,
            use: loaders.null(),
          },
          {
            test: /monaco-vim/u,
            use: loaders.null(),
          },
          {
            test: /@open-rpc\/inspector/u,
            use: loaders.null(),
          },
        ],
      },
    });
  } else {
    actions.setWebpackConfig({
      plugins: [
        new MonacoWebpackPlugin({
          // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
          languages: ['json'],
        }),
      ],
    });
  }
};
