function endsInLy(str){
    let n1 = str.length - 2
    let n2 = str.length
    if (str.toLowerCase().slice(n1, n2) === "ly"){
        console.log(true)
    } else {
        console.log(false)
    }
}

endsInLy("pretty"); // false
endsInLy("instant"); // false
endsInLy("analytic"); // false
endsInLy("timidly"); // true
endsInLy("fly"); // true
endsInLy("gallantly"); // true