const tap = fn => arg => {
  fn(arg)

  return arg
}

export default tap
