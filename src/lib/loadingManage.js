// loading管理逻辑
import Vue from 'vue'

let $requestLoadingCount = 0

export default function (requestOptions) {
  let options = {
    openLoadingSwitch: true, // 设置本次请求开启loading，默认为true
    ...(typeof requestOptions === 'object' ? requestOptions : {}),
  }

  let showLoading, loading, loadingTimer
  if (options.openLoadingSwitch) {
    loadingTimer = setTimeout(() => {
      showLoading = true
      $requestLoadingCount++
      loading = Vue.prototype.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.3)',
      })
    }, 300)
  }

  return () => {
    clearTimeout(loadingTimer)
    if (showLoading) {
      if (--$requestLoadingCount <= 0) {
        setTimeout(() => {
          if ($requestLoadingCount <= 0) {
            loading.close()
          }
        }, 500)
      }
    }
  }
}
