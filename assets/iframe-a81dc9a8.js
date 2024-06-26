document.addEventListener("click", function (t) {
  let e = t.target;
  for (; e;)
    if (e.tagName === "A" && e.getAttribute("href") === "#") {
      t.preventDefault();
      return
    } else e = e.parentElement
});
document.addEventListener("submit", function (t) {
  t.preventDefault()
});
if ("ResizeObserver" in window) i();
else {
  let t = document.createElement("script");
  t.onload = () => {
    window.ResizeObserver = window.ResizeObserver.ResizeObserver, i()
  }, t.src = "./resize-observer.umd.js", document.head.appendChild(t)
}

function i() {
  new window.ResizeObserver(([e]) => {
    let n;
    e.contentBoxSize ? n = (Array.isArray(e.contentBoxSize) ? e.contentBoxSize[0] : e.contentBoxSize).blockSize : n = e.contentRect.height, n !== window.bodyHeight && n > 0 && (window.bodyHeight = n, window.parent.postMessage({
      type: "BODY_HEIGHT",
      name: window.name,
      height: n
    }))
  }).observe(document.body)
}