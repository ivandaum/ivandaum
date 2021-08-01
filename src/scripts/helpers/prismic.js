export const richText = strings =>
    strings.map(str => {
        const replacements = {}
        str.spans.map(span => {
            const word = str.text.substr(span.start, span.end - span.start)
            if (span.type === 'hyperlink') {
                const link = `<a target="_blank" class="is-external" href="${span.data.url}">${word}</a>`
                replacements[word] = link
            }
        })

        for (let w in replacements) {
            str.text = str.text.replace(w, replacements[w])
        }

        return str
    })

export const richTextJson = strings => {
    const datas = {}
    strings.map(str => {
        str.spans.map(span => {
            const word = str.text.substr(span.start, span.end - span.start)
            if (span.type === 'hyperlink') {
                datas[word.toLowerCase()] = span.data.url
            }
        })
    })
    return datas
}
