/*
Let: escopo mais reduzido. Possui escopo de bloco e local
*/
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 1;

{
  {
    let c = 123; // ReferenceError: c is not defined
  }
}
console.log(c);
