import BLOG from '@/blog.config'
import { loadExternalResource } from '@/lib/utils'

export default function Sakana() {
  if (!BLOG.SAKANA_WIDGET) {
    return <></>
  }
  return <div id="sakana-widget"></div>
}

/**
 * 加载部件
 */
function initSakana() {
  let sakana = document.createElement('script')
  sakana.src = 'https://cdn.jsdelivr.net/npm/sakana-widget@2.2.1/lib/sakana.min.js'
  document.head.appendChild(sakana)
  sakana.async
  sakana.onload = function(){
    new SakanaWidget().mount('#sakana-widget');
  }
}
