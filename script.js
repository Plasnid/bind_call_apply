let decidiousPlant1 = {
    plantName: "Japanese Maple",
    foliageType: "leaves",
    foliageColour: "red"
}

let decidiousPlant2 = {
    plantName: "Weeping willow",
    foliageType: "leaves",
    foliageColour: "light green"
}
let decidiousPlant3 = {
    plantName: "Cactus",
    foliageType: "spines",
    foliageColour: "brown"
}

function talkAboutTrees(expert){
    console.log(this);
    return(`${expert} says: a ${this.plantName} has ${this.foliageColour} ${this.foliageType}`);
}

// * now with bind
// * bind returns a function that is bound to an object or scope
// * we call that function as we would call the original function
let bindExample = talkAboutTrees.bind(decidiousPlant1);
console.log(bindExample("Horticulturalist"));

// * now with call
// * call does not wrap the original function in a new function
// * the struture looks like this
// * functionName.call(scopeToBindTo,commaSeparatedParameters)
console.log(talkAboutTrees.call(decidiousPlant2, "Horticulturist"));

// * now with apply
// * apply also does not wrap the original function in a new funtion
// * the structure looks like this
// * functionName.apply(scopeToBindTo,[array of parameters]);
console.log(talkAboutTrees.apply(decidiousPlant3,["Horticulturist"]));