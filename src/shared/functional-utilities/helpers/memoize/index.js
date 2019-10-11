/* eslint-disable no-return-assign */
const memoize = fn => {
  const cache = {}

  return (arg) => cache[arg] = cache[arg] || fn(arg)
}

export default memoize
