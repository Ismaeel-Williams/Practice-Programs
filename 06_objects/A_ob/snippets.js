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