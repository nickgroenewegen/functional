// useQuery :: Node -> DOMString -> NodeList
const query = context => selector => context.querySelectorAll(selector)

export default query
