import BLOG from '@/blog.config'
import { loadExternalResource } from '@/lib/utils'

export default function Sakana() {
  if (!BLOG.SAKANA_WIDGET) {
    return <></>
  }

  new SakanaWidget().mount('#sakana-widget');
  return <div id="sakana-widget"></div>
}

/**
 * 加载部件
 */
function initSakana() {
  loadExternalResource('https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/live2d.min.js', 'js');
}
