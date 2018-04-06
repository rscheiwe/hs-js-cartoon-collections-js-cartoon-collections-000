function dwarfRollCall(dwarves) {
  let output = ""
  for (let i = 0, l = dwarves.length; i < l; i++) {
    output += `${i + 1}. ${dwarves[i]} `
  }
  return output
}

/*function dwarfRollCall(array) {
  let output = []
  for (let i = 0; i < array.length) {
    output.push('${i + 1}. ${array[i]')
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
  words.forEach(function(word) {
    if (word.length > 4) {
      return true
    } else {
      return false
    }
  })
}

function findTheCheese (foods) {
}
