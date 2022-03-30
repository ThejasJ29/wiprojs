//Create array with values 0.001, 0.324, 0.218, 0.889, 0.101. Sort them in descending order.
var array = [0.001, 0.324 , 0.218 , 0.889, 0.101];
array.sort(function(x,y) {
    return y-x;
});
console.log(array);