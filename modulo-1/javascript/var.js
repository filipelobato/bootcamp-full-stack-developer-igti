/* 
Var: não é indicado mais o uso, pois permite a redeclaração, 
permite reatribuição e, ainda, tem o escopo muito amplo. São içadas também
*/
console.log(varA);
var varA = 1;
var varA = 2;
console.log(varA);

{
  {
    var varB = 'varB';
  }
}
console.log(varB);
