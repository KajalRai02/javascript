const accountId=1234
var name="kajal"
let passwword=890;
address="Jaipur"

console.log(accountId)

console.table([accountId, name, passwword, address])

//accountId=345   [ cannot change its value]
name="rai"
passwword=678
address="Bengaluru"


/*
    prefer not use var, due to block scope issue
*/

console.table([accountId, name, passwword, address])