function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b
}
// module.exports ={
//     add,
//     sub,
//     mul,
//     div,
// } using object
// module.exports = {
//     "addfcn":add.
// }
// module.exports = add //overwrite
exports.add = (a,b)=> a+b;
exports.sub = (a,b)=> a-b;
exports.mul = (a,b)=> a*b;
exports.div = (a,b)=> a/b;