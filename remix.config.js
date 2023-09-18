/**
 * @see {@link https://remix.run/docs/en/main/file-conventions/remix-config}
 */

/** @type {import('@remix-run/dev').AppConfig} */
const appConfig = {
  future: {},

  ignoredRouteFiles: ['**/.*'],
  appDirectory: 'app',
  assetsBuildDirectory: './public/build',
  cacheDirectory: '.cache',
  publicPath: '/build/',
  serverBuildPath: 'build/index.js',
  serverMainFields: ['main', 'module'],
  serverMinify: false,
  serverModuleFormat: 'cjs',
  serverPlatform: 'node',
}

module.exports = appConfig
