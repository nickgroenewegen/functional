/* eslint no-return-assign: 0 */

const compose = (...fns) => fns.reduce((a, b) => (...val) => a(b(...val)))

const pipe = (...fns) => fns.reduceRight((a, b) => (...val) => a(b(...val)))

// applyTo :: a -> (a -> b) -> b
const applyTo = arg => fn => fn(arg)

const tap = fn => arg => {
  fn(arg)
  return arg
}

// head :: [a] -> a
const head = arr => arr[0]

// tail :: [a] -> a
const tail = arr => arr[arr.length]

// prop :: String a -> b -> *
const prop = string => source => source[string]

const memoize = fn => {
  const cache = {}

  return (arg) => cache[arg] = cache[arg] || fn(arg)
}

export {
  compose,
  pipe,
  applyTo,
  tap,
  head,
  tail,
  prop,
  memoize,
}
