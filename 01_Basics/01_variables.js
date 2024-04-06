const accountId = 1445
let accountEmail = "pravin@google.com"
var accountPassword = "12345"
accountCity = "Nagpur"


//accountId = 3//not allowd
accountEmail = "aj.aj.com"
accountPassword = "12321"
accountCity = "pune"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])