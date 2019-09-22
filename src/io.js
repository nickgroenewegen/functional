class IO {
  constructor(fn) {
    this.__value = fn
  }

  run() {
    return this.__value()
  }

  map(fn) {
    return new IO(fn(this.run()))
  }
}

export default IO
