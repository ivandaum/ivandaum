const FontLoader = {
  load(fontName) {
    this.LINE_HEIGHT = this.width * 0.1
    this.FONT_PRELOAD = '20vw'
    this.FONT_LOADED = '20vw ' + fontName

    this.text = 'Lorem ipsum sin dolores'

    this.canvas = document.createElement('canvas')
    this.canvas.width = 300
    this.canvas.height = 300

    this.initContext()

    return new Promise(resolve => {
      this.onTypoLoad(() => resolve())
    })
  },

  initContext() {
    this.ctx = this.canvas.getContext('2d')
    this.ctx.font = this.FONT_PRELOAD
    this.fontSize = this.ctx.measureText(this.text[0]).width
  },

  onTypoLoad(callback) {
    this.raf = setInterval(() => {
      this.ctx.font = this.FONT_LOADED
      const size = this.ctx.measureText(this.text[0]).width
      if (size !== this.fontSize) {
        this.fontSize = size
        clearInterval(this.raf)
        this.raf = null
        callback()
      }
    }, 50)
  },
}

export default FontLoader
