/**
 * @fileoverview Webpack core config
 *
 * @license Copyright 2020 The Coding with Chrome Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author mbordihn@google.com (Markus Bordihn)
 */

import HtmlWebpackPlugin from 'html-webpack-plugin';
import ServiceWorkerWebpackPlugin from 'serviceworker-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      // @ts-ignore
      VERSION: JSON.stringify(require('./package.json').version)
    }),
    new WebpackPwaManifest({
      name: 'Coding with Chrome Suite',
      short_name: 'Coding with Chrome',
      description: 'Educational Coding Development Environment',
      start_url: 'index.html',
      display: 'standalone',
      icons: [
        {
          src: path.resolve('assets/svg/logo.svg'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, 'src/service-worker/service-worker.js'),
      filename: 'service-worker.js'
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve('assets/svg/logo.svg'),
      inject: true
    })
  ]
};
