import useIO from '../monads/io'

export default function query(selector, context = document) {
  function func() {
    return context.querySelectorAll(selector)
  }

  return useIO(func)
}
