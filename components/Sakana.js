/* eslint-disable no-undef */
import BLOG from '@/blog.config'
import { useGlobal } from '@/lib/global'
import { loadExternalResource } from '@/lib/utils'
import { useEffect } from 'react'

export default function Sakana() {
  if (!BLOG.SAKANA_WIDGET) {
    return <></>
  }
  const { switchTheme } = useGlobal()

  function handleClick() {
    if (BLOG.WIDGET_PET_SWITCH_THEME) {
      switchTheme()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', initSakana)
    return () => {
      window.removeEventListener('scroll', initSakana)
    }
  }, [])

  return <div id="sakana-widget"></div>
}

/**
 * 加载部件
 */
function initSakana() {
  loadExternalResource('https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/live2d.min.js', 'js');
  new SakanaWidget().mount('#sakana-widget');
}
