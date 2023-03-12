/**
 * @see {@link https://remix.run/docs/en/main/file-conventions/remix-config}
 */

/** @type {import('@remix-run/dev').AppConfig} */
const appConfig = {
  future: {
    v2_meta: true,
    v2_routeConvention: true,
  },
  ignoredRouteFiles: ['**/.*'],
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  serverBuildPath: 'build/index.js',
  publicPath: '/build/',
  cacheDirectory: '.cache',
}

module.exports = appConfig
