export function getScrollbarSize(el: HTMLElement = document.body): number {
  if (el === document.body) {
    return window.innerWidth - el.offsetWidth
  }

  return el.offsetWidth - el.scrollWidth
}
