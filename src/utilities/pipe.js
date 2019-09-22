export default function pipe(...fns) {
  return fns.reduce((prevFn, nextFn) => (...args) => nextFn(prevFn(...args)), (value) => value)
}
