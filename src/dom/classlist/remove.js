export default function removeClass(name) {
  function remove(element) {
    element.classList.remove(name)
  }

  return remove
}
