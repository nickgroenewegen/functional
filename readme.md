/*
  Goals:
  1) Reduce imperative code (harder to test and less declarative)
  2) Reduce boilerplate
  3) Reduce the use of this binding since it is mostly misunderstood and because of it leads to bugs
  4) Increase testability

  eg:

  class Component {
    constructor(rootNode) {
      this.links = rootNode.querySelectorAll(LINKS)
      this.someThingElse = rootNode.querySelectorAll(SOMETHINGELSE)

      this.addEventListeners()
    }

    addEventListeners() {
      this.links.forEach((element) => {
        element.addEventListener('click', this.doSomething.bind(this))
      })
      this.someThingElse.addEventListener('click', this.doSomethingElse.bind(this))
    }
  }

  Prefer:
  1) Composition over inheritance
  2) First class functions
  3) Pure functions
  4) Unary functions

  Consider:
  1) DOM updates (what if an element is added)
*/