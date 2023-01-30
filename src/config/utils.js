 const Utils = {
  parsedHTML: (rawHTML)  => {
    if (rawHTML) {
      const htmlSource = document.createElement('div')
      htmlSource.innerHTML = rawHTML
      const images = htmlSource.getElementsByTagName('img')
      if (images.length > 0) {
        for (let i =0; i< images.length;i++) {
          images[i].setAttribute('onerror', `tryToLoadFromSite(this)`)
        }
        return htmlSource.innerHTML
      }
    }
    return rawHTML
  },
  parseDrupalURL : (url) => {
    if (url) {
      if (url.startsWith("internal")) {
        const replaceWith = url.replace("internal:", "")
        return replaceWith
      }
      return url
    }
    return url
  }
}
export default Utils