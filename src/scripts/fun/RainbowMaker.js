export default class RainbowMaker {
    constructor({ canvas }) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')

        this.onResize()
        window.addEventListener('resize', () => this.onResize.bind(this))
    }

    onResize() {
        this.canvas.style.width = window.innerWidth + 'px'
        this.canvas.style.height = window.innerHeight + 'px'
    }

    setTop(y) {
        this.canvas.style.transform = `translate3d(0, ${y}px, 0)`
    }

    render() {}
}
