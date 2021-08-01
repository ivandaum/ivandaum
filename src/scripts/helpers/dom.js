export const copyToClipboard = str => {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    if (selected) {
        document.getSelection().removeAllRanges()
        document.getSelection().addRange(selected)
    }
}

export const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const observe = (el, callback) => {
    const observer = new IntersectionObserver(changes => {
        const [{ isIntersecting }] = changes
        callback({ isIntersecting })
    })

    observer.observe(el)
}
export const range = (input, min, max) => ((input - min) * 100) / (max - min)

export const lerp = (v0, v1, t) => (1 - t) * v0 + t * v1
