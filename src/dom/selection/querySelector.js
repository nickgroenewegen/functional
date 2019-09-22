export default function querySelector(selector, context = document) {
  return context.querySelector(selector)
}
