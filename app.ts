const arr1 = [1, 2, 3, 4];
const arr2 = ["1","2","3","4","5","6"];
const arr3 = [[1,"2"],3,[[2,3],"5",6],7,8,[7,8]];


// deno-lint-ignore no-explicit-any
export function aplanar(input: any[]){
    const flat = input.flat(Infinity);
    const arrOfNum = flat.map(str => {
        return Number(str);
    });

    // deno-lint-ignore no-explicit-any
    function getProducts(array: any[]) {
        const product = array.reduce((a, b) => a * b, 1);
        return array.map(p => product / p);
    }
    return getProducts(arrOfNum);
}

console.log(aplanar(arr1));
console.log(aplanar(arr2));
console.log(aplanar(arr3));