// let array = [1,2,4,5,6]

// console.log(array);

// let array1 = new Array([3,4,5,6,7,])
// console.log(array1);

//array method

// array.push(6)
// array.push(7)
// array.push(6)
// array.pop()
// console.log(array)

// console.log(array.includes(8));
// console.log(array.indexOf(4));

//slice, splice diffrence between 

// const newarr = [1,2,3,4,5,6]

// console.log('original array', newarr);
// const n1 = newarr.slice(1,3)

// console.log("A",n1);

// const n2 = newarr.splice(1,3)
// console.log("B",n2); //remove from original array object
// console.log(newarr);


//array operation 

const sasmira = ['mayur','alex','akash']
const siddhant =['aniket','shreyash','sachin']
const school = ['vishal','deepak','sagar']

let concat_all_frd = sasmira.concat(siddhant)

console.log(concat_all_frd);
const all = [...sasmira, ...siddhant, ...school]
console.log(all);

console.log(Array.isArray("ashish"));
console.log(Array.from("ashish"));
console.log(Array.from({"name":"ashish"}));

let marks1 = 100
let marks2 = 200
let marks3 = 300

console.log(Array.of(marks1, marks2, marks3));



