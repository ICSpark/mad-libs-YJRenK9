// ---- Write code below ---- \\
function dinner() {
    let food = prompt("Name a food: ");
    let scent = prompt("Name a strange scent: ");
    let adjective = prompt("Name an adjective: ");
    let animal = prompt("Name an animal: ");
    let verb = prompt("Name a verb: ");
    let object = prompt("Name an object: ");
    let quote = prompt("Name a funny quote: ");
    let quote2 = prompt("Name another funny quote: ");

    document.getElementById("output").innerHTML = `
        <p>The dinner party started with a dish of ${food} that smelled like ${scent}. 
        Suddenly, a ${adjective} ${animal} appeared and started ${verb}ing on the table! 
        The host grabbed a ${object} and yelled "${quote}!" 
        We all laughed and said "${quote2}." It was unforgettable!</p>
    `;
}

function mystery() {
    let food = prompt("Name a food: ");
    let place = prompt("Name a place: ");
    let adjective = prompt("Name an adjective: ");
    let sound = prompt("Name an sound: ");
    let verb = prompt("Name a verb: ");
    let object = prompt("Name an object: ");
    let name = prompt("Type in a silly name: ");
    let name2 = prompt("Type in another silly name: ");
    let noun = prompt("Name a noun: ");
    let jobTitle = prompt("Name a job title: ");
    let substance = prompt("Name a substance: ");

    document.getElementById("output").innerHTML = `
        <p>On a(n) ${adjective} night in the grand ${place}, a loud ${sound} revealed Lord ${name} lying beside a ${object}, muttering, "It was the ${noun}!"
        Detective ${name2}, questioned the ${jobTitle}, who was caught ${verb}ing near the scene. But the truth was stranger than fiction.
        It turns out Lord ${name} had slipped on ${substance} while trying to steal a plate of ${food}.
        Everyone laughed, and the detective vowed to investigate only serious cases from now on.</p>
    `;
}

function travel() {
    let figure = prompt("Name a historical figure: ");
    let place = prompt("Name a place: ");
    let adjective = prompt("Name an adjective: ");
    let adjective2 = prompt("Name another adjective: ");
    let verb = prompt("Name a verb: ");
    let object = prompt("Name an object: ");
    let name = prompt("Type in a silly name: ");
    let event = prompt("Name an event in time: ");
    let noun = prompt("Name a plural noun: ");

    document.getElementById("output").innerHTML = `
        <p>Your time machine malfunctions, and a ${figure} steals your homework escaping to ${place}!
        Armed with a ${object}, you chase them through time, dodging ${noun} and a ${adjective} dinosaur trying to ${verb} you.
        You finally catch the thief at the ${event} and grab your homework just time.
        Back in class, your teacher, ${name}, says, "That's the most ${adjective2} excuse ever!" But hey, you got an A!</p>
    `;
}