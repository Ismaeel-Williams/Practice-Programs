function greatestPopulation(arr){
    let num = 0
    let name = ""
    for(let i = 0; i < arr.length; i++){
        if(arr[i].population > num){
            num = arr[i].population
            name = arr[i].name
        }
    }
    return name
}

let countries1 = [
    { name: "Cameroon", population: 27744989, gdp: 38.68 },
    { name: "Belarus", population: 9477918, gdp: 59.66 },
    { name: "Indonesia", population: 267026366, gdp: 1042 },
    { name: "Guyana", population: 750204, gdp: 3.88 },
  ];
  
  console.log(greatestPopulation(countries1)); // 'Indonesia'
  
  let countries2 = [
    { name: "New Zealand", population: 4925477, gdp: 204.9 },
    { name: "Mozambique", population: 30098197, gdp: 14.72 },
    { name: "Greenland", population: 57616, gdp: 2.71 },
    { name: "Kazakhstan", population: 19091949, gdp: 179.3 },
    { name: "Burma", population: 56590071, gdp: 71.21 },
  ];
  
  console.log(greatestPopulation(countries2)); // 'Burma'