const oper = require('./operations')   // ./ means curret directory , by default installed packages of node directory

const operation = '*'

console.log(oper)
switch(operation){
    case '+':
        console.log(oper.add(2,3));
    break;
    case '-':
        console.log(oper.sub(2,3));
    break;
    case '*':
        console.log(oper.mul(2,3));
    break;
    case '/':
        console.log(oper.div(2,3));
    break;
}
