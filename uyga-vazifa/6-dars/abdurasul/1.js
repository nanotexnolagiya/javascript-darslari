function isEmpty(obj) {
  let ownKeyCount = Object.keys(obj).length
  if(ownKeyCount>0) return false
  return true
}
console.log(isEmpty({'lala':'sas'}));