function keyPair(obj1, obj2, key){
    let arr=[];
    for (let key in obj1){
        arr.push(obj1[key]);
        arr.push(obj2[key]);
    }
}

console.log(keyPair( {a:1,b:2,c:3}, {a:321,b:3,c:1}))