function romanToArabic(roman){
  if(roman == null)
      return -1;
  var totalValue = 0, 
      value = 0, 
      prev = 0;
  for(var i=0;i<roman.length;i++){
      var current = char_to_int(roman.charAt(i));
      if (current > prev) {
          totalValue -= 2 * value;
      }
      if (current !== prev) { 
          value = 0; 
      }
      value += current;
      totalValue += current;
      prev = current;
  }
  return totalValue;
}

function char_to_int(character) {
  switch(character){
      case 'I': return 1;
      case 'V': return 5;
      case 'X': return 10;
      case 'L': return 50;
      case 'C': return 100;
      case 'D': return 500;
      case 'M': return 1000;
      default: return -1;
  }
}

// console.log(romanToArabic('XXML'));

module.exports = romanToArabic
