function alternatingCaps(str) {
    let words = str.split(' ');
    let arr = [];
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (i % 2 === 0) {
        arr.push(word.toLowerCase());
      } else {
        arr.push(word.toUpperCase());
      }
    }
  
    return arr.join(' ');
  };

console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
console.log(alternatingCaps("What did ThEy EAT before?")); // 'what DID they EAT before?'