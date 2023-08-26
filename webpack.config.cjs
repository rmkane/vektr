const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const LIB_NAME = 'Vektr'
const LIB_ID = 'vektr'

const PATHS = {
  entryPoint: path.resolve(__dirname, 'src/index.ts'),
  bundles: path.resolve(__dirname, '_bundles'),
}

const config = {
  mode: 'production',
  entry: {
    [LIB_ID]: [PATHS.entryPoint],
    [`${LIB_ID}.min`]: [PATHS.entryPoint],
  },
  output: {
    path: PATHS.bundles,
    filename: '[name].js',
    libraryTarget: 'umd',
    library: LIB_NAME,
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, './'),
      publicPath: '/',
    },
    hot: true,
  },
}

module.exports = [config]
