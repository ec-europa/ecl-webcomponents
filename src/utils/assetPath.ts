import { Build } from '@stencil/core'

/**
 * Reads components asset path config from meta tag or global variable.
 * This is a workaround until the following issues are resolved:
 * https://github.com/ionic-team/stencil/issues/3470
 * https://github.com/ionic-team/stencil-ds-output-targets/issues/186
 */
const getAssetPath = (path: string) => {
  const assetBasePath = Build.isTesting
    ? '/'
    : document.head.querySelector<HTMLMetaElement>('meta[data-ecl-asset-path]')
        ?.dataset.eclAssetPath || window.__ECL_ASSET_PATH__
  if (!assetBasePath) {
    throw new Error(
      `Asset path not set yet. 
       Please define a <meta> data-ecl-asset-path in your head or an __ECL_ASSET_PATH__ prop in the window object,
       the path to the assets will start from the value you set. EX: <meta data-ecl-asset-path="/" />`
    )
  }
  let assetPath = path

  if (path.startsWith('./')) {
    assetPath = path.substring(2)
  }

  if (!assetBasePath.endsWith('/')) {
    assetPath = '/' + assetPath
  }

  return assetBasePath + assetPath
}

export default getAssetPath;