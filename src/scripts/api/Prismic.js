import config from '~/prismic.config.js'

const Prismic = require('prismic-javascript')

const accessToken = config.token
const url = config.url

const Api = async () => {
    try {
        return await Prismic.getApi(url, { accessToken })
    } catch (e) {
        return {}
    }
}

export const getProjects = async () => {
    try {
        const api = await Api()
        const response = await api.query(Prismic.Predicates.at('document.type', 'work'))

        return response.results.map(project => project.data)
    } catch (e) {
        return []
    }
}

export const getAbout = async () => {
    try {
        const api = await Api()
        const response = await api.getSingle('about')
        return response.data
    } catch (e) {
        return []
    }
}
