import compose from '../util/compose'

function IO(fn) {
  this.__value = fn
}

function useIO(fn) {
  return new IO(fn)
}

function map(fn) {
  return useIO(compose(fn, this.__value))
}

IO.prototype.map = map

export default useIO
