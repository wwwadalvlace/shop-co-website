const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'src/assets/icons'),
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        type: 'asset',
        include: path.resolve(__dirname, 'src/assets/images'),
        generator: {
          filename: 'images/[name]-[hash][ext]'
        },
      },
      {
        test: /\.(png|jpe?g|webp|tiff?)$/i,
        type: 'asset',
        include: path.resolve(__dirname, 'src/assets/images'),
        generator: {
          filename: 'images/[name]-[hash][ext]'
        },
        use: [
          {
            loader: 'webpack-image-resize-loader',
            options: {
              quality: 80,
            }
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        type: 'asset/resource',
        include: path.resolve(__dirname, 'src/assets/fonts'),
        generator: {
          filename: 'fonts/[hash][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.png'
    }),
  ],
  devtool: false,
  devServer: {
    static: './dist',
    watchFiles: ['src/**/*'],
    port: 3000,
    open: false,
    hot: true,
  }
};
