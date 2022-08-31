import BLOG from '@/blog.config'

/**
 * 加载部件
 */
function initSakana() {
  let sakana = document.createElement('script')
  sakana.src = BLOG.SAKANAWIDGET_LINK
  document.head.appendChild(sakana)
}
