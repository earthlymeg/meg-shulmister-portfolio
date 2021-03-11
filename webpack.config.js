const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: '[path][name].[ext]'
        },

      },
      {
        test: /\.(gif|svg|ttf)$/i,
        use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      ]

      },
      // {
      //   test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      //   loader: require.resolve('url-loader'),
      //   options: {
      //     name: 'static/media/[name].[hash:8].[ext]',
      //   },
      // },

    ]
  },
  plugins: [htmlPlugin]
};