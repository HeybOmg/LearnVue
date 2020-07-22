// 1.导入{}中的变量
import {flag,sum} from "./aaa.js" ;
if (flag){
  console.log('It‘s Britney , Bitch')
  console.log(sum(40,50))
}

// 2.导入export定义的变量
import {num1,height} from "./aaa.js";
console.log(num1,height)

// 3.导入函数类
import {mul ,Person} from "./aaa.js";
console.log(mul(20,50))
const p =new Person();
p.run();

// 4.导入export default中的内容
import lady from "./aaa.js";
console.log(lady)

// 5.统一全部导入
import * as aaa from './aaa.js'

console.log(aaa.flag,aaa);