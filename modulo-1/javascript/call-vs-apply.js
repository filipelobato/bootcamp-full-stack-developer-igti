function fazerAlgo(callback, arg1, arg2) {
    var args = Array.prototype.splice.call(arguments, 1);
    return callback.apply(this, args);
}

console.log("Iniciando!!");

fazerAlgo(function (arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
}, 'foo', 'bar');