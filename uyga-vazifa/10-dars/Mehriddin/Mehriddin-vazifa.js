function flatArrayToTree(arr, pitem = { id: 0 }) {
  let narr = arr.filter(item => item.parent == pitem.id)
  narr.map(item => {
    item.children = flatArrayToTree(arr, item)
  })
  return narr
}


// console.log(flatArrayToTree(people))

function treeArrayToFlat(arr) {
  let narr = []
  arr.forEach(item => {
    if ("children" in item) {
      narr = narr.concat(treeArrayToFlat(item.children))
      delete item["children"]
    }
    narr.push(item)

  })
  return narr.sort((a, b) => a.id - b.id)
}

// console.log(treeArrayToFlat(peopleTree))

module.exports = {
  treeArrayToFlat,
  flatArrayToTree
}
