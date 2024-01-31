function filterLongWords(arr){
    let newStr = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length < 5){
            newStr.push(arr[i])
        }
    }
    return newStr
}

console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']