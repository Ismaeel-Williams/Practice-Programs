function emailParse(str){
    let user = str.split("@");
    let username = user[0];
    let domain = user[1];
    return {
        username: username, 
        domain: domain
    };
};

console.log(emailParse("coolcoder42@goodmail.com"));
// { username: 'coolcoder42', domain: 'goodmail.com' }

console.log(emailParse("az@woohoomail.com"));
// { username: 'az', domain: 'woohoomail.com' }

console.log(emailParse("1337pr0graMmer@coldmail.edu"));
// { username: '1337pr0graMmer', domain: 'coldmail.edu' }