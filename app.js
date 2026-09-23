// var nums = [11,15,2,7];
// var target = 9

// var twoSum = function (nums, target) {
//     nums.forEach((num, index) => {

//     })
// };

// console.log(twoSum(nums, target))

// let s = ['s','t','r','i','n','g'];

// for (let i = s.length -1; i >= 0; i--){
//     console.log(s[i])
// }

// const users = [
//     { name: "Ali", age: 17 },
//     { name: "Faiq", age: 23 },
//     { name: "Ahmed", age: 30 },
//     { name: "Usman", age: 16 }
// ];

//  const adults = users.filter((user) => {
//     if (user.age >= 18) {
//         console.log(user.name);
//     }
//     return user.age >= 18
// })

// adults.map((user) => {
//     console.log(user.name)
// })

// const transactions = [
//     {
//         id: 1,
//         customer: "Ali",
//         status: "completed",
//         items: [
//             { name: "Laptop", price: 100000, qty: 1 },
//             { name: "Mouse", price: 2000, qty: 2 }
//         ]
//     },
//     {
//         id: 2,
//         customer: "Faiq",
//         status: "cancelled",
//         items: [
//             { name: "Keyboard", price: 5000, qty: 1 }
//         ]
//     },
//     {
//         id: 3,
//         customer: "Ahmed",
//         status: "completed",
//         items: [
//             { name: "Monitor", price: 30000, qty: 2 },
//             { name: "Mouse", price: 2000, qty: 1 }
//         ]
//     },
//     {
//         id: 4,
//         customer: "Usman",
//         status: "completed",
//         items: [
//             { name: "Keyboard", price: 5000, qty: 2 }
//         ]
//     }
// ];

// console.log(transactions)
// const completedTransaction = transactions
//     .filter((transaction) => transaction.status === "completed")
//     .map((transaction) => {
//         return transaction.items.map((item) => item.price * item.qty)
//             .reduce((total, totalItems) => total + totalItems, 0)
//     })
//     .reduce((total, totalDayAmount) => total + totalDayAmount, 0)

// console.log(completedTransaction);

// const products = [
//     { name: "Laptop", price: 100000, stock: 5, active: true },
//     { name: "Mouse", price: 2000, stock: 0, active: true },
//     { name: "Keyboard", price: 5000, stock: 10, active: false },
//     { name: "Monitor", price: 30000, stock: 3, active: true },
//     { name: "Headphones", price: 5000, stock: 8, active: true }
// ];

// const stockInactive = products
//     .filter((products) => {
//         return products.stock > 0 && products.active === true
//     })
//     .map((products) => products.name
//     )
// console.log(stockInactive)

// const products = [
//     { name: "Laptop", price: 100000, stock: 5, active: true },
//     { name: "Mouse", price: 2000, stock: 10, active: true },
//     { name: "Keyboard", price: 5000, stock: 0, active: true },
//     { name: "Monitor", price: 30000, stock: 3, active: true },
//     { name: "Headphones", price: 5000, stock: 8, active: false }
// ];

// const inventory = products
//     .filter((product) => product.stock > 0 && product.active === true)
//     .reduce((total, product) => total + (product.price * product.stock),0)

//     console.log(inventory)

// const transactions = [
//     { id: 1, customer: "Ali", amount: 5000, status: "completed" },
//     { id: 2, customer: "Faiq", amount: 3000, status: "cancelled" },
//     { id: 3, customer: "Ahmed", amount: 7000, status: "completed" },
//     { id: 4, customer: "Usman", amount: 2000, status: "completed" },
//     { id: 5, customer: "Bilal", amount: 4000, status: "cancelled" }
// ];

// const completed = transactions
//     .filter((transaction) => transaction.status === "completed")
//     .map((transaction) => transaction.customer)
//     console.log(completed);

// const totalPayment = transactions
//     .filter((transaction) => transaction.status === "completed")
//     .reduce((total, transaction) => total + transaction.amount ,0)
//    console.log(totalPayment)

// const products = [
//   { id: 1, name: "Laptop", price: 100000, stock: 5, active: true },
//   { id: 2, name: "Mouse", price: 2000, stock: 0, active: true },
//   { id: 3, name: "Keyboard", price: 5000, stock: 10, active: false },
//   { id: 4, name: "Monitor", price: 30000, stock: 3, active: true },
// ];

// const activeProduct = products
//   .filter((product) => product.active === true)
//   .map((product) => product.name);
// console.log(activeProduct);


// const outOffStock = products
//     .some((product) => product.stock === 0)
// console.log(outOffStock)
   
// const checkStock = products
//     .every((product) => product.stock > 0);
// console.log(checkStock)
    
// const productFind = products
//     .find((product) => product.id === 3);
// console.log(productFind)

// const inventoryValue = products
//     // .filter((product) => product.active === true)
//     .reduce((grandTotal, product) => {
//         return grandTotal + (product.price * product.stock)
//     },0)
//     console.log(inventoryValue)




// const order = {
//     id: 101,
//     customer: {
//         name: "Ali",
//         email: "ali@example.com"
//     },
//     payment: {
//         method: "Cash",
//         amount: 5000
//     }
// };

// const { customer: { name }, payment: { amount } } = order;

// console.log(name)
// console.log(amount)



// ============ DSA ===============
// ========= 01
// const arr = [10, 5, 20, 8, 15, 30];

// let max = arr[0];
// for (let i = 1; i < arr.length; i++){
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }
// console.log(max)

// ======== 02
// const arr = [1, 2, 3, 4, 5];

// let reverse = [];
// for (let i = arr.length; i > 0; i--){
//     reverse.push(i);
// }
// console.log(reverse)

// ============= 03
// const arr = [1, 2, 4, 7, 8, 11, 14];

// let count = 0
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0) {
//         count++
//     }
// }
// console.log(count)

// ================ 04
// const arr = [10, 5, 20, 8, 15];

// let largest = arr[0]
// let secodnLargest = arr[0]
// for (let i = 1; i < arr.length; i++){

//     if (arr[i] > largest) {
//         secodnLargest = largest
//         largest = arr[i]
//     }
//     else if (arr[i] > secodnLargest) {
//         secodnLargest = arr[i]
//     }
// }
// console.log(secodnLargest)




// ========= 05
// const arr = [1, 2, 2, 3, 4, 4, 5, 5];

// let removeDuplicate = [];

// for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;

//     for (let j = 0; j < removeDuplicate.length; j++) {
//         if (arr[i] === removeDuplicate[j]) {
//             isDuplicate = true;
//             break;
//         }
//     }
//     if (!isDuplicate) {
//         removeDuplicate.push(arr[i]);
//     }
// }
// console.log(removeDuplicate)


//  =========06
// const arr = [2, 11, 7, 15];
// const target = 9;


// function twoSum(arr, target) {
//     for (let i = 0; i < arr.length; i++){
//     for (let j = i + 1; i < arr.length; j++){
//         if (arr[i] + arr[j] === target){
//             return [i, j]
//         }
//     }
//     return []
// }
// }
// console.log(twoSum(arr, target))

//  let nums = [8,2,3,4,6]
// let k = 2



// var missingMultiple = function (nums, k) {
//     for (let i = 1; i <= nums.length +1; i++){
//         let multi = k * i
//         let found = false

//         for (let j = 0; j < nums.length; j++){
//             if (nums[j] === multi) {
//                 found = true
//                 break
//             }
//         }
//         if (!found) {
//            return multi
//        }
//     }
// };
// console.log(missingMultiple(nums, k))



// let arr = [1, 2, 2, 3, 3, 3, 4]

// let processed = []
// for (let i = 0; i < arr.length; i++){
//     let count = 0;

//     if(processed.includes(arr[i])) continue;
//     processed.push(arr[i])

//     for (let j = 0; j < arr.length; j++){
//         if(arr[i] === arr[j]) count++
//     }
//     console.log(arr[i], count)
// }


// const arr = [10, 5, 20, 8, 15];

// let mini = arr[0];

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < mini) {
//         mini = arr[i]
//     }
// }
// console.log(mini)


// const arr = [10, -5, 20, -8, 15, -3, 0];

// let negative = 0;
// let positive = 0;
// let zero = 0;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < 0) {
//         negative++;
//     }
//     else if (arr[i] > 0) {
//         positive++
//     }
//     else if (arr[i] === 0) {
//         zero++
//     }
// }
// console.log(negative)
// console.log(positive)
// console.log(zero)


// const arr = [10, 5, 20, 8, 15];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {

//   sum = sum + arr[i]
    
// }
// console.log(sum)


// const arr = [10, 25, 7, 30, 15];
// const target = 30;

// let found = false;
// for (let i = 0; i < arr.length; i++){
    
//     if (arr[i] === target) {
//         found = true
//     }
// }

//     if (found) {
//     console.log("Found")
//     } else {
//         console.log("Not Found")
// }



// const arr = [11, 24, 7, 18, 35, 42, 9];

// let evenLargest = arr[0];

// for (let i = 1; i < arr.length; i++){
//     if (arr[i] % 2 === 0 && arr[i] > evenLargest) {
//         evenLargest = arr[i]
//     }
//     else {
//         console.log("Not Fount")
//     }
// }
// console.log(evenLargest)




// const arr = [5, 2, 5, 7, 5, 9, 2];
// const target = 5;

// let count = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === target) {
//         count++
//     }
// }
// console.log(target, count)

// const arr = [4, 7, 2, 9, 7, 5, 2];

// let processed = false
// for (let i = 0; i < arr.length; i++){
//     for (let j = i + 1; j < arr.length; j++){
//         if (arr[i] === arr[j]) {
//             console.log(arr[i])
            
//             processed = true
            
//         }
//     }
//     if (processed) {
//         break
//     }
    
// }


// const arr = [4, 7, 2, 7, 4, 9, 2, 10];


// for (let i = 0; i < arr.length; i++){
//     let count = 0;

//     for (let j = 0; j < arr.length; j++){
//         if (arr[i] === arr[j]) {
//             count++
//         }
//     }
//     if (count === 1) {
//         arr[i]
//         console.log(arr[i])
//        break
//     }
// }



// const arr = [12, 5, 27, 8, 19, 3];

// let max = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }
// console.log(max)


// const arr = [4, 7, 2, 9, 5];
// const target = 9;

// let found = false
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === target) {
//         found = true
//         breake
//     }
// }
// if (found) {
//     console.log("Found")
// }
// else {
//     console.log("Not found")
// }

// Q16 — Find the Largest Difference
// const arr = [10, 5, 20, 8, 15];
// let large = arr[0];
// let small = arr[0];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > large) {
//         large = arr[i]
//     }
//     else if (arr[i] < small) {
//         small = arr[i]
//     }
    
// }
// let subract = large - small
// console.log(subract)

// Q17 — Move All Zeros to the End
// const arr = [0, 5, 0, 3, 8, 0, 2];

// let newArr = []
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] !== 0) {
//         newArr.push(arr[i])
//     }
// }
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === 0) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)

// Q18 — Find Missing Number
// const arr = [1, 2, 3, 5, 6];
// let num = 1;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === num) {
//         num++
//     }
// }
// console.log(num)

// Q18 — Find Missing Number

// const arr = [3, 1, 5, 2, 6];
// let find;
// for (let i = 0; i < arr.length; i++){
//     let count = 0
//     for (let j = 0; j < arr.length; j++){
//         if (arr[i] === arr[j]) {
//            count++
//        }
//     }
// }
// console.log(find)


// const arr = [4, 7, 2, 9, 5];
// const target = 9;
// let found = false
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === target) found = true
//     break
// }
// if (found) {
//     console.log("Found")
// }
// else {
//     console.log("No Found")
// }


// let find;
// const arr = [1, 3, 4, 2, 2];

// for (let i = 0; i < arr.length; i++){
//     let count = 0;
//     for (let j = 0; j < arr.length; j++){
//         if (arr[i] === arr[j]) {
//             count++
//         }
//     }
//     if (count  === 2) {
//         find = count
//     }
// }
// console.log(find)

// Q20 — Second Smallest Number
// const arr = [10, 5, 20, 8, 15];

// let smallest = arr[0]
// let secondSmallest = arr[0]
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < smallest) {
//         secondSmallest = smallest
//        smallest = arr[i]
//     }
//     else if (arr[i] < secondSmallest) {
//         secondSmallest = arr[i]
//     }
// }
// console.log(secondSmallest, smallest)

// 🔥 Q21 — Count Even & Odd Numbers
// const arr = [10, 5, 8, 7, 3, 12, 4];
// let evenCount = 0;
// let oddCount = 0;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0) {
//         evenCount++
//     }
//     else {
//         oddCount++
//     }
// }
// console.log(evenCount, oddCount)
