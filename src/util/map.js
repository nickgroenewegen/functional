import curry from './curry'

function mapFunc(func, functor) {
  return functor.map(func)
}

const map = curry(mapFunc)

export default map
