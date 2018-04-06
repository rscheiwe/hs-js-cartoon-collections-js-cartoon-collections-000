function dwarfRollCall(dwarves) {
  let output = ""
  for (let i = 0, l = dwarves.length; i < l; i++) {
    output += `${i + 1}. ${dwarves[i]} `
  }
  return output
}

/*function dwarfRollCall(array) {
  let output = []
  for (let i = 0; i < array.length; i++) {
    output.push('${i + 1}. ${array[i]')
    output.join(', ')
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

function longPlaneteerCalls(words) {
  for (let i = 0, l = words.length; i < l; i++) {
    if (words[i].length > 4) {
      console.log(true)
    } else {
      console.log(false)
    }
  }
}

/* 
function longPlaneteerCalls(words) {
  words.forEach(function(word) {
    if (word.length > 4) {
      return true
    } else {
      return false
    }
  })
}
*/


function findTheCheese (foods) {
  foods.forEach(function(word) {
    if (word === 'cheddar') {
      return word
    } else if (word === 'gouda') {
      return word
    } else if (word === 'camembert') {
      return word
    } else {
      return 'no cheese!'
    }
  })
}
