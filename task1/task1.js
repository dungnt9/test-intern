function mostFrequentLength(arr) {
    const lengthCount = {};
    arr.forEach(str => {
        const len = str.length;
        lengthCount[len] = (lengthCount[len] || 0) + 1;
    });
    
    let maxFrequency = 0;
    for (let len in lengthCount) {
        if (lengthCount[len] > maxFrequency) {
            maxFrequency = lengthCount[len];
        }
    }

    let mostFrequentLength = 0;
    for (let len in lengthCount) {
        if (lengthCount[len] == maxFrequency) {
            mostFrequentLength = len;
            break;  
        }
    }

    return arr.filter(str => str.length == mostFrequentLength);
}

console.log(mostFrequentLength(['a', 'ab', 'abc', 'cd', 'def', 'gh']));
