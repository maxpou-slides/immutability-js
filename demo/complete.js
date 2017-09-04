const Immutable = require('../js/immutable.min.js')

const heroes = [
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

const marvel = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
]

const newList = Immutable
  .List.of(...heroes)
  .push(...marvel)
  .insert(null, { name: "Groot", family: "Marvel", isEvil: false })
  .map(item => Immutable.Map(item).set('name', Immutable.Map(item).get('name').toUpperCase()))
  .sort()
  .toJS()

// console.log(newList)
console.log(heroes, marvel)
