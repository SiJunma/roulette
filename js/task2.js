const pattern = /^[\s]+$/;
const half = 2;
let wordInput = prompt('Please, input a word');

if (wordInput !== null && !pattern.test(wordInput) && wordInput) {
    
    if (wordInput.length%half) {
        let wordIndex = Math.floor(wordInput.length/half);
        alert(wordInput[wordIndex]);
    } else {
        let wordIndex1 = wordInput.length/half;
        let wordIndex2 = wordInput.length/half-1;

        alert(wordInput[wordIndex2] + wordInput[wordIndex1]);
    }

} else {
    alert('Invalid value');
}