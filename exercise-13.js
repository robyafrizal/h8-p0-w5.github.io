function sorting(arrNumber) {
  // code di sini
  var output = 0  //menggunakan bubble sort algoritma
  for(var i = 0; i < arrNumber.length; i++) {
    for(var j = i + 1; j < arrNumber.length; j++) {
      if(arrNumber[i] > arrNumber[j]){
        output = arrNumber[i]
        arrNumber[i] = arrNumber[j]
        arrNumber[j] = output
      }
    }
  }
  return arrNumber
}

function getTotal(arrNumber) {
  // code di sini
  var result = 0
  for(var i = 0; i < arrNumber.length; i++) {
    if(arrNumber[i] == arrNumber[arrNumber.length - 1]){
      result++
    }
  }
  if(result == 0){
    return ''
  }

  return 'Angka paling besar adalah ' + arrNumber[arrNumber.length - 1] + ' dan jumlah kemunculannya ' + result +' kali.'
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''