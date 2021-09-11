const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader?url=false',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 50,
          },
        },
      ],
      overrideExtension: true,
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      short_name: 'We Food',
      name: 'We Food',
      description: 'Website to find restaurants throughout Indonesia',
      background_color: '#222',
      theme_color: '#222',
      start_url: 'index.html',
      display: 'standalone',
      orientation: 'portrait',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve('src/public/icon/logo.png'),
          destination: 'icon',
          sizes: [57, 60, 72, 76, 96, 114, 120, 128, 144, 152, 180, 192, 256, 384, 512],
          purpose: 'any maskable',
        },
        {
          src: path.resolve('src/public/icon/maskable-icon.png'),
          destination: 'icon',
          size: '192x192',
          purpose: 'maskable',
        },
      ],
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: './src/scripts/sw.js',
      swDest: 'service-worker.js',
    }),
    new FixStyleOnlyEntriesPlugin(),
    new OptimizeCssAssetsPlugin({}),
  ],
};
