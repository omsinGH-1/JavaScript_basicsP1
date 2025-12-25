const accountId = 144553 // change mhi kiya ja skta - const
// constant declaration use const keyword   
let accountEmail = "omsingh@yahoo.com" // variable declaration -> use let keyword
var accountPassword = "123456789"
accountCity = "Jaipur"
// accountId = 2  // not allowed
accountEmail = "pq@12gmail.com"
accountPassword = "987654321"
accountCity = "Gorakhpur"
let accountState;

/*
Prefer not to use var because of issues in block scop and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
// result in tabular form
