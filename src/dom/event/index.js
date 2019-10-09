// addListener :: String -> Node -> fn -> fn -> undefined
const addListener = type => node => handler => {
  node.addEventListener(type, handler)

  return () => node.removeEventListener(type, handler)
}

// preventDefault :: Event -> undefined
const preventDefault = event => event.preventDefault()

export {
  addListener,
  preventDefault,
}
