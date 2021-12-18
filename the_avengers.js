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