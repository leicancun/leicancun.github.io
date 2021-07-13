module.exports = {
    globPatterns: ["**/*.{js,html,css,png,jpg,webp,ico,gif,svg,eot,ttf,woff}"],
    globDirectory: "/path/to/hexo/public",
    swDest: "/path/to/hexo/service-worker.js",
    runtimeCaching: [
        {
          urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/,
          handler: "CacheFirst"
        },
        {
          urlPattern: /^https:\/\/myql\.coding\.net\/.*/,
          handler: "CacheFirst"
        },
        {
          urlPattern: /^https:\/\/*\.cloudfront\.net\/.*/,
          handler: "CacheFirst"
        },
        {
          urlPattern: /^https:\/\/identity\.netlify\.com\/.*/,
          handler: "CacheFirst"
        },
        {
          urlPattern: /^https:\/\/hm\.baidu\.com\/.*/,
          handler: "CacheFirst"
        }
      ]
  }