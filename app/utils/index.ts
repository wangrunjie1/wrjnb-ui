/**
 * 替换当前url，不刷新页面
 * @param url
 */
export function replaceStateUrl(url: string) {
  if (import.meta.client) {
    window.history.replaceState({}, "", url)
  } else {
    navigateTo(url)
  }
}
