// T (thrush, applyTo) :: a -> (a -> b) -> b
const T = arg => fn => fn(arg)

export default T
