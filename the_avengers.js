const ironMan = {
    regularName: 'Anthony Edward "Tony" Stark',
    abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
    marvelMovieAppearances: {
        ironMan: true,
        theHulk: true,
        ironManTwo: true,
        thor: false,
        captainAmerica: false,
        theAvengers: true,
        ironManThree: true,
        thorTwo: false,
        captainAmericaTwo: false,
        guardiansOfTheGalaxy: false,
        avengersTwo: true,
        antMan: false,
        captainAmericaThree: true,
        doctorStrange: false,
        guardiansOfTheGalaxyTwo: false,
        spiderManHomecoming: false,
        thorThree: false,
        blackPanther: false,
        avengersThree: true
    },
    jarvisAreYouThere: () => {
       console.log('At your service, sir')
    }
}

// IRON MAN
// 1) Log Iron Man's third ability

console.log(ironMan.abilities[2])

// 2) Log all of Iron Man's abilities by looping through the array

for (let i=0;i<ironMan.abilities.length; i++) {
    console.log(ironMan.abilities[i])
}

// 3) Log whether or not Iron Man appeared in spiderManHomecoming

console.log(ironMan.marvelMovieAppearances.spiderManHomecoming)

// 4) Wait, that's not right -- he did appear in that movie! Change the value to true without editing the object itself and log it again to verify it changed

ironMan.marvelMovieAppearances.spiderManHomecoming = true
console.log(ironMan.marvelMovieAppearances.spiderManHomecoming)

// 5) Check if jarvis is there by calling on the jarvisAreYouThere function

ironMan.jarvisAreYouThere()

// ASSEMBLING OTHER AVENGERS

const captainAmerica = {
    regularName: 'Steven Grant "Steve" Rogers',
    aliases: {
        superheroName: 'Captain America'
    },
    abilities: ['peak human agility', 'peak human stamina','peak human strength'],
    sayPhrase: function(){
        return "I can do this all day"
    }
}

// 1) The following code logs Captain America

console.log(captainAmerica.aliases.superheroName)

// 2) The following code logs peak human strength

console.log(captainAmerica.abilities[2])

// 3) The following code logs i can do this all day

console.log(captainAmerica.sayPhrase())

// Create a data structure for blackWidow such that...

const blackWidow = {
    aliases: {
        realName: 'Natalia Alianovna Romanova',
        otherNotableAliases: ['Natasha Romanoff','Natalie Rushman', 'Nat']
    }
}

// 1) The following code logs Natalia Alianovna Romanova

console.log(blackWidow.aliases.realName)

// 2) The following code logs Natalie Rushman

console.log(blackWidow.aliases.otherNotableAliases[1])

// AVENGERS NESTED 

const theAvengers = [
    { name: 'Tony Stark', superheroName: 'Iron Man'},
    { name: 'Steve Rogers', superheroName: 'Captain America' },
    { name: 'Bruce Banner', superheroName: 'The Hulk'},
    { name: 'Thor' },
    { name: 'Natasha Romanoff', superheroName: 'Black Widow' },
    { name: 'Clint Barton', superheroName: 'Hawkeye' }
  ]

// Looping through theAvengers and log just their name.

for (let i=0;i<theAvengers.length;i++){
    console.log(theAvengers[i].name)
}

// MCU MOVIES

const mcuMovies = [
    ['ant-man', 'ant-man and the wasp'],
    ['the avengers', 'avengers: age of ultron', 'avengers: infinity war', 'avengers: end game'],
    ['black panther'],
    ['captain america: the first avenger', 'captain america: the winter soldier', 'captain america: civil war'],
    ['doctor strange'],
    ['guardians of the galaxy', 'guardians of the galaxy vol.2'],
    ['the hulk'],
    ['iron man', 'iron man 2', 'iron man 3'],
    ['spiderman: homecoming'],
    ['thor', 'thor: the dark world', 'thor: ragnarok']
  ]

for (let i=0;i<mcuMovies.length;i++){
    for (let j=0;j<mcuMovies[i].length;j++){
        console.log(mcuMovies[i][j])
    }
}