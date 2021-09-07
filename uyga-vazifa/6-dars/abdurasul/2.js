function totalValue(obj) {
   let objValues = Object.values(obj)
   let total = 0
   objValues.forEach(el=>{
       if(!isNaN(+el)) total += +el
   })
   return total
}
module.exports = totalValue