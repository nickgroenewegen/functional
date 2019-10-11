import { query } from '@shared/dom-utilities/selection'
import { addListener, preventDefault } from '@shared/dom-utilities/event'
import { compose, prop, tap } from '@shared/functional-utilities/helpers'
import { head } from '@shared/functional-utilities/point-free'
import { T } from '@shared/functional-utilities/combinators'

const handleFormSubmit = compose(
  alert,
  prop('value'),
  prop('demo_number_input'),
  prop('target'),
  tap(preventDefault),
)

/*
Or from left to right:
const handleFormSubmit = pipe(
  tap(preventDefault),
  prop('target'),
  prop('demo_number_input'),
  prop('value'),
  alert,
)
*/

const runApp = compose(
  T(handleFormSubmit),
  addListener('submit'),
  head,
  query(document),
)

// Let it loose!
runApp('#demo')
