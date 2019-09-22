import { querySelectorAll } from './dom/selection'
import { addClass, removeClass } from './dom/classlist'
import compose from './utilities/compose'
import pipe from './utilities/pipe'
import curry from './utilities/curry'
import map from './utilities/map'

// Curried.
const getElementsAndAddClass = compose(
  curry(map, addClass('red')),
  Array.from,
  querySelectorAll,
)

getElementsAndAddClass('input, button')

// Non curried.
function mapAndRemoveClass(args) {
  return map(removeClass('red'), args)
}

const getElementsAndRemoveClass = compose(
  mapAndRemoveClass,
  Array.from,
  querySelectorAll,
)

getElementsAndRemoveClass('input, button')

// Curried map.
const curriedMap = curry(map)

const getElementsAndAddClassCurriedMap = compose(
  curriedMap(addClass('green')),
  Array.from,
  querySelectorAll,
)

getElementsAndAddClassCurriedMap('input, button')

// The other way arround.
const getElementsAndAddClassPiped = pipe(
  querySelectorAll,
  Array.from,
  curriedMap(addClass('orange')),
)

getElementsAndAddClassPiped('input, button')
