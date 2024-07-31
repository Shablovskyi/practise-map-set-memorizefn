// Map

const personInfo =
  {
    "John" : 25,
    "Anna" : 23,
    "Alex" : 13,
    "Ben" : 29,
    "Huan" : 30
  }


const map = new Map(Object.entries(personInfo));

const getAverageAge = (map) => {

  const age = map.values()
  let averageAge = 0
  let count = 0

  age.forEach(e => {
    averageAge = averageAge + e
    count ++
  });

  console.log(averageAge / count)
}

console.log(map)

getAverageAge(map)

map.set("Ben", 88)
map.delete("Huan")

console.log(map)
getAverageAge(map)