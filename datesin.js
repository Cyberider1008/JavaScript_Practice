//Dates

let date = new Date()

console.log(date);
console.log(date.toDateString());
console.log(date.toString());
console.log(typeof date);



let mycreateddate = new Date("11-19-2024")
console.log(mycreateddate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(mycreateddate.getTime());

let newdate = new Date()

console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());

//output
// 2025-03-02T16:19:08.183Z
// Sun Mar 02 2025
// Sun Mar 02 2025 21:49:08 GMT+0530 (India Standard Time)
// object
// 11/19/2024, 12:00:00 AM
// 1740932348309
// 1731954600000
// 2025-03-02T16:19:08.310Z
// 3

// let newdate = newdate.toLocaleString('Default',{weekday:"long"})

// console.log(newdate);
