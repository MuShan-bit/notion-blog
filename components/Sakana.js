import BLOG from '@/blog.config'

/**
 * 加载部件
 */
function initSakana() {
  let sakana = document.createElement('script')
  sakana.src = BLOG.SAKANA_LINK
  document.head.appendChild(sakana)
}
