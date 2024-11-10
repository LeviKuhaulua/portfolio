const path = require("path");

module.exports = {
  entry: {
    index: "./src/pages/Index.jsx",
  },
  output: {
    path: path.resolve(__dirname, "./public/dist"),
    filename: "[name].js",
    assetModuleFilename: "assets/[name][ext]",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.pdf$/i,
        type: "asset/resource",
      },
      {
        test: /\.webp$/i,
        type: "asset/resource",
      },
    ],
  },
};
