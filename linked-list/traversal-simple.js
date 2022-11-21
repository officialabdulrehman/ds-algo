import { list1 } from "./config.js"

const traverse = (node) => {
  console.log("node => ", node.val, !node.next)
  if (!node.next) {
    return node.val
  }

  traverse(node.next)
  return node.val
}

const main = () => {
  return traverse(list1)
}

main()