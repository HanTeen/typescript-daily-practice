// 欢迎来学习TypeScript
// -------------------------P1欢迎----------------------------

var message: string = "hello world"

console.log(message)

// -------------------------P2变量声明START-------------------------

var uname: string = "hanteen";
var uname2: boolean; // 声明变量的类型，但没有初始值，变量值会设置为 undefined：
var uname3 = "any";  // 声明变量并初始值，但不设置类型，该变量可以是任意类型：
var uname4: number = 50;
var uname5: any = "任何类型";
var uname6: number[] = [1, 2];
var uname7: [string, number]; // 元组
uname7 = ['1', 2];

enum Color { green, yellow, orange };
var c: Color = Color.orange
console.log(c); // 输出 1

function hello(): void {
    console.log("用于标识方法返回值的类型，表示该方法没有返回值。");
}
hello()

var uname8 = null;
console.log(typeof (uname8)) // null 表示一个空对象引用。 输出 object

var x: number | number[] | string; // 类型联合,如果一个类型可能出现 null 或 undefined， 可以用 | 来支持多种类型
x = [1, 2, 3];
console.log(x)

var uname9: undefined;  // undefined类型，用于初始化变量为一个未定义的值
var uname10: never;     // 代表从不会出现的值

// 变量作用域
var global_num = 12;    // 全局变量
class Numbers {
    num_val = 13;       // 实例变量
    static s_val = 14;  // 静态变量
    store_num():void{
        var inst_val = 15; // 局部变量
        console.log(inst_val)
    }
}

console.log("全局变量：", global_num);
console.log("静态变量：", Numbers.s_val);
console.log("实例变量：", new Numbers().num_val)

// -------------------------P2变量声明END-------------------------

// 算术、关系、逻辑、短路等常见运算符这里就不做练习了，所有语言大同小异。

// -------------------------P3运算符START-------------------------

// -------------------------P3运算符END-------------------------
