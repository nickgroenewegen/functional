/* eslint import/prefer-default-export: 0 */

// useQuery :: Node -> DOMString -> NodeList
const useQuery = context => selector => context.querySelectorAll(selector)

export {
  useQuery,
}
