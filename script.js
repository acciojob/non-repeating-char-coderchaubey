//your JS code here. If required.
function solve(s){
    let hashTable={};
    for(let a of s){
        if(hashTable[a]) hashTable[a]++;
        else hashTable[a]=1;
    }
    for(let a of s){
        if(hashTable[a]===1) return a;
    }
}

let s=prompt();
alert(solve(s));
