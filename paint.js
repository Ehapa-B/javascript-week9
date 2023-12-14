// Build a simple loop, inside a function, that takes an array and prints the value of the array to the console.

function paintTypes () {
    const types = ["satin", "weatherproof", "luxury", "emulsion", "premium", ];

    for (let inc = 0; inc < types.length; inc++) {
        console.log(types[inc]);
    }
};
paintTypes();