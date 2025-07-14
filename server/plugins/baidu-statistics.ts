import { defineNitroPlugin } from "nitropack/runtime/plugin"

const script = `
<script>
var _hmt = _hmt || []
_hmt.push(['_requirePlugin', 'UrlChangeTracker', {
  shouldTrackUrlChange: function (newPath, oldPath) {
    console.log('UrlChangeTracker')
    console.log(newPath,oldPath)
    return newPath && oldPath;
  }}
]);
;(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?f4e09a1bc7ff3921b0ef21ee00d12f91";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})()
</script>`

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    if (process.env.NODE_ENV === "production") {
      html.head.push(script)
    }
  })
})
