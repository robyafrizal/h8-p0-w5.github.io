function changeVocals (str) {
  //code di sini
  var output = ''
  for(var i = 0; i < str.length; i++) {
    switch(str[i]) {
      case 'a' : output += 'b'; break;
      case 'i' : output += 'j'; break;
      case 'u' : output += 'v'; break;
      case 'e' : output += 'f'; break;
      case 'o' : output += 'p'; break;
      case 'A' : output += 'B'; break;
      case 'I' : output += 'J'; break;
      case 'U' : output += 'V'; break;
      case 'E' : output += 'F'; break;
      case 'O' : output += 'P'; break;
      default : output += str[i]
    }
  }
  return output

  //Cara lain :
  // var vocal = ['a','i','u','e','o','A','I','U','E','O']
  // var change = ['b','j','v','f','p','B','J','V','F','P']
  // for(var i = 0; i < str.length; i++) {
  //   for(var j = 0; j < vocal.length; j++) {
  //     if(str[i] === vocal[j]) {
  //       str[i] = change[j]
  //     }
  //   }
  // }
  // return str
}

function reverseWord (str) {
  //code di sini
  var output = ''
  for(var i = str.length -1; i >= 0; i--) {
    output += str[i]
  }
  return output
}

function setLowerUpperCase (str) {
  //code di sini
  var output = ''
  for(var i = 0; i < str.length; i++) {
    if(str[i] == str[i].toLowerCase()) {
      output += str[i].toUpperCase()
    }
    else if(str[i] == str[i].toUpperCase()) {
      output += str[i].toLowerCase()
    }
  }
  return output
}

function removeSpaces (str) {
  //code di sini
  var output = ''
  for(var i = 0; i < str.length; i++) {
    if(str[i] != ' ') {
      output += str[i]
    }
  }
  return output
}

function passwordGenerator (name) {
  //code di sini
  if(name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'