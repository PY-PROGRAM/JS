const accountId = 144553
let accountEmail = "bipingupta8169@gamil.com"
var accountPassword =  "123456"
accountCity = "Bengalore"
let accountState; //it doesn't matter wheater use semicolons or not use

//accountId = 2 //not allowed

accountEmail = "bipingupta819@gamil.com"
accountPassword =  "12345"
accountCity = "Pune"

/*
Prefer no to use var 
because of issue in block scope and functional scope
*/



console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
