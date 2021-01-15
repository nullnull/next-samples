const withLess = require("@zeit/next-less");

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => { };
}

module.exports = withLess({
  lessLoaderOptions: {
    // [FYI] To customize, see https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
    modifyVars: {
      "primary-color": "green",
    },
    javascriptEnabled: true,
  },
});
