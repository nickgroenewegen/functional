// prop :: String | Number a -> m b -> *
const prop = a => b => b[a]

export default prop
