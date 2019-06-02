module.exports = {
  devServer: {
    // 设置默认端口
    port: 8033
  },
  configureWebpack: {
    externals: {
      BMap: "BMap"
    }
  }
};
