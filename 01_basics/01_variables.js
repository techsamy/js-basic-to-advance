const accountId = 14453;
let accountEmail = "learnsamy@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

accountEmail = "techy@mail.com";
accountPassword = "789456";

/* 
Prefer Not to use Var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);