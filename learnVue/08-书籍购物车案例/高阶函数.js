//filter/map/reduce
// filter中的回调函数有一个要求：必须返回一个boolean值
// true：当返回true时，函数内部会自动将这次回调的n加入新的数组中
// false：当返回false时，函数会过滤掉这次n
const nums=[10,20,30,50,100,120,200,344,500]

let total = nums.filter(function (n) {
  return n < 100
}).map(function (n) {
 return n * 2
}).reduce(function (preValue,n) {
  return preValue + n
},0)

let total =nums.filter( n=>n<100).map(n>=n*2).reduce((pre,n)=>pre +n );

// 1.filter函数的使用
const nums=[10,20,30,50,100,120,200,344,500]
let newNums = nums.filter(function (n) {
  return n<100
})

// 2.map函数的使用
let new2Nums=newNums.map(function (n) {
  return n*2
})

//3.reduce的使用
let total = new2Nums.reduce(function (preValue,n) {
  return preValue + n
},0)