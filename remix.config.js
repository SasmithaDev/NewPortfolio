/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    // Directory where Remix builds the server-side and client-side files
    serverBuildPath: "public/build/index.js",
    
    // Path for public assets (used in HTML `<link>` tags for assets like CSS/JS)
    publicPath: "/build/",
  
    // Default settings for your Remix app
    appDirectory: "app",
    assetsBuildDirectory: "public/build",
    ignoredRouteFiles: ["**/.*"], // Ignore hidden files in routes
  };
  