
const closure = () => {
    const arr = [1,2,3,4,5,]
    function showArr() {
        return arr;
    }

    function showEvenNumber() {
        return arr.filter((item) => item%2 === 0);
    }

    function showOddNumber() {
        return arr.filter((item) => item%2 !==0);
    }

    function showSum() {
        let result = 0;
        arr.forEach((item) => result+=item)
        return result;
    }
    function addNumber(num) {
        if(typeof num !== number && num.isNaN()) return;
        arr.push(num);
    }
    return {showArr, showEvenNumber, showOddNumber, showSum, addNumber}; 

}

const { showArr, showEvenNumber, showOddNumber, showSum, addNumber} = closure ()

console.log(showArr())
console.log(showEvenNumber())
console.log(showOddNumber())
console.log(showSum())
addNumber(showarr().length + 1)
console.log(showArr())







