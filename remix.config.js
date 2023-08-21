/**
 * @see {@link https://remix.run/docs/en/main/file-conventions/remix-config}
 */

/** @type {import('@remix-run/dev').AppConfig} */
const appConfig = {
  future: {
    v2_dev: true,
    v2_meta: true,
    v2_headers: true,
    v2_routeConvention: true,
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
  },
  ignoredRouteFiles: ['**/.*'],
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  serverBuildPath: 'build/index.js',
  publicPath: '/build/',
  cacheDirectory: '.cache',
  serverModuleFormat: 'cjs',
}

module.exports = appConfig
