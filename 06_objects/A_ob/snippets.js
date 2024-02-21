//snippet 1
let movie = {
    title: "Fight Club",
    year: 1999,
    genre: ["drama", "thriller"],
    starring: ["Brad Pitt", "Edward Norton"],
};

console.log(movie.year); //1999
console.log(movie["title"]); //Fight Club
console.log(movie.genre); //drama thriller //["drama", "thriller"]
console.log(movie.genre[0]); //drama
console.log(movie.genre[1]); //thriller

console.log(movie.duration); //4 //undefined
console.log(movie["starring"][1]); //Edward Norton
console.log(movie.starring.length); //2

console.log(" ")

//snippet 2
let restaurant = {
    name: "bob's Burgers",
    location: "123 Ocean Avenue",
    owners: ["Bob Belcher", "linda belcher"],
    established: 2011,
    menu: ["burgers", "fries", "shakes"],   
};

console.log("owners" in restaurant); // ["Bob Belcher", "Linda Belcher"] //true
console.log("employees" in restaurant); //undefined //false

let someKey = "menu";
console.log(someKey in restaurant); //undefined  //true

console.log(restaurant.menu); //["burgers", "fries", "shakes"],
console.log(restaurant["menu"]); //["burgers", "fries", "shakes"]
console.log(restaurant[someKey]); //undefined //["burgers", "fries", "shakes"]
console.log(restaurant.someKey); //undefined

console.log(restaurant.menu.includes("fries")); //true

console.log(" ")

//snippet 3
let dog = {
    name: "Manny",
    age: 5,
    breed: "pug",
    color: "fawn",
    favouriteFoods: ["bacon"],
};

console.log(dog.age); //5
console.log(dog.breed); //pug
console.log(dog.favouriteFoods); //["bacon"]

dog.age++;
dog.breed = dog.breed.toUpperCase();
dog.favouriteFoods.push("sausage"); 

console.log(dog.age); //6
console.log(dog.breed); //PUG
console.log(dog.favouriteFoods); //["bacon", "sausage"]

for (let property in dog) {
    console.log(property + " is " + dog[property]); //undefined //name is Manny //age is 6 //breed is PUG //color is fawn //favouriteFoods is bacon,sausage
}

console.log(" ")

//snippet 4
let recipe = {
    name: "Old Fashioned Pancakes",
    difficulty: "easy",
    tasy: true,
    ingrediants: ["eggs", "milk", "butter", "flour", "sugar"], 
};

console.log(recipe.name); //
console.log(recipe["name"]);
console.log(recipe.ingrediants.length);
console.log(recipe.calories);

let someVariable = "difficulty";
console.log(recipe[someVariable]);
console.log(recipe.someVariable);

for (let i = 0; i < recipe.ingrediants.length; i++){
    console.log(recipe.ingrediants[i])
}

console.log(" ")