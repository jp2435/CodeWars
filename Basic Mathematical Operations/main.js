function basicOp(operation, value1, value2){
  switch(operation){
    case '+': return value1 + value2
    case '-': return value1 - value2
    case '*': return value1 * value2
    case '/': return value1 / value2
  }
}

const op1 = basicOp('+',4,7) 
const op1 = basicOp('-',15,18) 
const op1 = basicOp('*',5,5) 
const op1 = basicOp('/',49,7) 
/*
function basicOp(operation, value1, value2){
  return eval(value1 + operation + value2);
}
*/