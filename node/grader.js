function average(array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw console.error("Incorrect input");
    }
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return Math.round(sum/array.length);
}
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

var scores = [100, 99];
console.log(average(scores));