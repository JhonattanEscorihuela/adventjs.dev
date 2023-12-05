function findNaughtyStep(original, modified) {
    // Code here

    if (original === '') {
        return modified.charAt(0);
    }

    const largeOriginal = original.length;
    const largeModified = modified.length;

    const longerString = largeOriginal > largeModified ? original : modified;
    const shorterString = largeOriginal > largeModified ? modified : original;

    for (let i = 0; i < longerString.length; i++) {
        if (i >= shorterString.length || longerString.charAt(i) !== shorterString.charAt(i)) {
            return longerString.charAt(i);
        }
    }

    return '';
}


// const original = 'abcd'
// const modified = 'abcde'
// console.log(findNaughtyStep(original, modified)); // 'e'

// const original = 'stepfor'
// const modified = 'stepor'
// console.log(findNaughtyStep(original, modified));  // 'f'

// const original = 'abcde'
// const modified = 'abcde'
// console.log(findNaughtyStep(original, modified));  // ''


const original = ''
const modified = 'abcde'
console.log(findNaughtyStep(original, modified));  // ''