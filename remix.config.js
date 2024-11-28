/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    appDirectory: "app",
    assetsBuildDirectory: "public/build", // Where Remix builds static assets
    publicPath: "/build/", // Path in the browser where assets are served
    serverBuildPath: "build/index.js", // Server build output
    ignoredRouteFiles: ["**/.*"], // Ignore hidden files
  };
  