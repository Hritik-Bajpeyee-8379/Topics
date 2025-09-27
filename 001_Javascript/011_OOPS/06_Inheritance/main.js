function calculate(a, b, callback) {
    return callback(a, b);
}

console.log(calculate(5, 3, function(x, y) {
    return x + y;
}));


