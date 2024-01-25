function funnySound(str1, str2){
    let s1 = str1.slice(0, 3);
    let s2 = str2.slice(0, 3);
    console.log(s1 + s2);
}

funnySound("tiger", "spoon"); // 'tigspo'
funnySound("computer", "phone"); // 'compho'
funnySound("skate", "bottle"); // 'skabot'
funnySound("frog", "ashtray"); // 'froash'