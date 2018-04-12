function dwarfRollCall(dwarves) {
  let output = ""
  for (let i = 0, l = dwarves.length; i < l; i++) {
    output += `${i + 1}. ${dwarves[i]} `
  }
  return output
}

/*
function dwarfDictionary(array) {
  let ouput = {}
  for (let i = 0; i < array.length; i++) {
    output[i + 1] = array[i]
  }
  return output
}

*/

function summonCaptainPlanet(planeteerCalls){
  let output = []
  for (let i = 0, l = planeteerCalls.length; i < l; i++) {
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + '!'
    output.push(planeteerCalls[i])
  }
  return output
}

/*
function captainPlanet(array) {
  let output = []
  for (let i = 0; i < array.length; i++) {
    output.push(array[i].toUpperCase() + '!')
  }
  return output
}
*/

function longPlaneteerCalls(words) {
  for (let i = 0, l = words.length; i < l; i++) {
    if (words[i].length > 4) {
      return true;
    } 
  } return false
}

/* 
function forEachTest(words) {
    let array = []
    words.forEach(function(word) {
        //console.log(word.length)
        array.push(word.length)
        })
    console.log(array)
    for (let i = 0; i < words.length; i++) {
        if (array[i] > 4) {
            return true
        } return false
    } 
}
*/


function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'cheddar') {
      return foods[i];
    } else if (foods[i] === 'gouda') {
      return foods[i];
    } else if (foods[i] === 'camembert') {
      return foods[i];
    } else if (foods[i] === 'swiff') {
      return foods[i];
    }    
  } return 'no cheese!'
}

function wordsWithB(words){
}

// wordsWithB(['james', 'sally', 'bob']) => ['bob']
// wordsWithB(['james', 'bob', 'billy']) => ['bob', 'billy']
// wordsWithB(['sally', 'james']) => []
}
