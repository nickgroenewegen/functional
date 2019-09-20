export default function addClass(name) {
  function add(element) {
    element.classList.add(name)
  }

  return add
}
