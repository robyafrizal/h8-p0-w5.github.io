function kaliDigitRekursif(angka) {
  // you can only write your code here!
  var arr = String(angka)
  if(arr.length === 0) {
    return 0
  }
  return Number(arr[0]) * kaliTerusRekursif(arr.slice(1))
}
function kaliTerusRekursif(angka) {
  var arr = String(angka)
  if(arr.length == 1) {
    return angka
  }
  return kaliTerusRekursif(kaliDigitRekursif(angka))


}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6