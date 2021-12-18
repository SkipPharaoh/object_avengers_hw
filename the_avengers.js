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