export const api = {
  icon: '🚀',
  name: 'markdown.do',
  description: 'Markdown Generation, Parsing & Transformation API',
  url: 'https://markdown.do.do/api',
  type: 'https://apis.do/formats',
  endpoints: {
    listCategories: 'https://markdown.do/api',
    getCategory: 'https://markdown.do/:type',
  },
  site: 'https://markdown.do',
  login: 'https://markdown.do/login',
  signup: 'https://markdown.do/signup',
  subscribe: 'https://markdown.do/subscribe',
  repo: 'https://github.com/drivly/markdown.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://markdown.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
