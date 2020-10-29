'use strict';
// var x let
var varALoop;
{
  {
    varALoop = 1;
  }
}
console.log(varALoop);
/* Problema com VAR */
for (var varALoop = 0; varALoop < 5; varALoop++) {
  console.log(varALoop);
}

console.log(varALoop);
