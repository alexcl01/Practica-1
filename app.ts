/*const arr = [[2,4], [5,2], [3,3]];
//const arr2 = "12345";
//const arr3 = [1,2,3,4,5];

const Practica1 = arr.reduce((acumulador: number[], elem: number[]) =>{
    return [...acumulador, ...elem];
}, [])


console.log(Practica1);

console.log(Practica1.reduce((acumulador,elem) => {
    return elem*elem / elem ;
}));

/*
const obj = {
    arr1: [[2,4], [5,2], [3,3]]
};

const Practica11 = (obj: unknown): Array => {
    if (typeof obj === "string") return `"${obj}"`;
    if (typeof obj === "number") return `"${obj}"`;
    if (typeof obj === "boolean") return `"${obj}"`;
    if (obj === null) return null;


}*/

const arr1 = [1, 2, 3, 4];
const arr2 = ["1","2","3","4","5","6"];
const arr3 = [[1,"2"],3,[[2,3],"5",6],7,8,[7,8]];

function aplanar(input: any[]){
    const flat = input.flat(Infinity);
    const arrOfNum = flat.map(str => {
        return Number(str);
    });

function getProducts(array: any[]) {
    const product = array.reduce((a, b) => a * b, 1);
    return array.map(p => product / p);
}
    return getProducts(arrOfNum);
}

console.log(aplanar(arr1));
console.log(aplanar(arr2));
console.log(aplanar(arr3));