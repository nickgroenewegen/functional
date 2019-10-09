import { useQuery } from './dom/query'
import { addListener, preventDefault } from './dom/event'
import {
  compose,
  head,
  applyTo,
  tap,
  prop,
} from './functional'

const handleFormSubmit = compose(
  alert,
  prop('value'),
  prop('demo_number_input'),
  prop('target'),
  tap(preventDefault),
)

const runApp = compose(
  applyTo(handleFormSubmit),
  addListener('submit'),
  head,
  useQuery(document),
)

runApp('#demo')
