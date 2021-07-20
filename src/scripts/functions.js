export function getMousePosition(e) {
    let x = e.x
    let y = e.y

    if (e.changedTouches && e.changedTouches.length) {
        x = e.changedTouches[0].pageX
        y = e.changedTouches[0].pageY
    }

    if (e.x === undefined) {
        x = e.pageX
        y = e.pageY
    }

    return [x, y]
}

export const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const lerp = (v0, v1, t) => (1 - t) * v0 + t * v1

export const roundDecimal = (d) => Math.floor(d * 100) * 0.01

export const range = (input, min, max) => ((input - min) * 100) / (max - min)

export const distance2d = (p1, p2) => Math.sqrt((Math.pow(p2[0] - p1[0], 2)) + (Math.pow(p2[1] - p1[1], 2)))

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
