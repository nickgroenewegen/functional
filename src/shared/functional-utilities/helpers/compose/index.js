const compose = (...fns) => fns.reduce((a, b) => (...val) => a(b(...val)))

export default compose
