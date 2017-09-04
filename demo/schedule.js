const Immutable = require('../js/immutable.min.js')

const schedule = Immutable.Map({
  Monday: "Training",
  Tuesday: 'Training',
  Wednesday: 'Going out',
  Thursday: 'Find something to do',
  Friday: 'Prepare for the battle',
  Saturday: 'Save the world',
  Sunday: 'Relax'
})


const Monday = schedule.get("Monday") 
// console.log(Monday)

const Friday = schedule.set("Friday", "Pizza") 
// console.log(Friday.get("Friday"))


const allDays = schedule.values() 
// console.log(...allDays)
// console.log(...schedule)


const fooHasValue = schedule.has("Friday") 
// console.log(fooHasValue)

//(.toJS())