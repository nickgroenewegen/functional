import curry from './curry'
import map from './map'

function eachFunc(func, list) {
  let newList

  list.forEach(func)

  return newList
}

const each = curry(eachFunc)

export default each
