import { MessageBox } from 'element-ui'

// 全局指令, 在main.ts文件中全局引入
// 功能: 消息中图片添加点击预览功能
export default {
  install(Vue) {
    Vue.directive('preview-img', {
      bind: function (el) {
        // 添加class
        el.classList.add('v-preview-img')
        // 图片预览, APP.vue中添加preview-img-modal固定样式
        const showImg = function (src) {
          if (src) {
            MessageBox({
              title: '',
              customClass: 'preview-img-modal',
              dangerouslyUseHTMLString: true,
              showClose: false,
              showConfirmButton: false,
              message: `<img src="${src}" class="preview-img-content"/>`,
            })
          }
        }

        // 用代理方式，兼容子元素更新、有增减的场景
        el.addEventListener('click', function (e) {
          if (e.target?.nodeName === 'IMG') {
            showImg(e.target.getAttribute('src'))
          }
        })
      },
    })
  },
}
