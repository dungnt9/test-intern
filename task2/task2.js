function sumOfTopTwo(arr) {
    if (arr.length < 2) return null;

    let max1 = -Infinity;
    let max2 = -Infinity;

    for (let num of arr) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    }
    return max1 + max2;
}

console.log(sumOfTopTwo([1, 4, 2, 3, 5])); 
console.log(sumOfTopTwo([10, 20, 30, 5, 7])); 
