// 欢迎来学习TypeScript
// -------------------------P1 欢迎 ----------------------------

var message: string = "hello world"

console.log(message)

// -------------------------P2 变量声明 START-------------------------

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
    store_num(): void {
        var inst_val = 15; // 局部变量
        console.log(inst_val)
    }
}

console.log("全局变量：", global_num);
console.log("静态变量：", Numbers.s_val);
console.log("实例变量：", new Numbers().num_val)

// -------------------------P2 变量声明 END-------------------------

// 常见运算符和条件语句这里就不做练习了，所有语言大同小异。

// -------------------------P3 循环 START-------------------------
var i: number = 1;
for (i = 0; i < 10; i++) {
    //console.log(i + 1);
}

var j: any;
var k: number[] = [1, 2, 3];
for (j in k) {
    //console.log(k[j]);
}

// ES6 for of
var jj: [string, number] = ['111', 222];
for (var kk of jj) {
    //console.log(kk);
}

/**
 * every 用于检查数组中的所有元素是否满足给定条件。如果有一个值不满足该元素，则输出将为 false，否则将返回 true
 * some  与every相反
 **/
var testArr: number[] = [1, 2, 3, 4];
var res = testArr.every(
    (ele, index, testArr) => {
        if (ele > 1) {
            return true;
        }
        //console.log(ele, index, testArr);
    }
);
//console.log(res); //false

// filter 创建一个新数组，新数组中的元素都是符合指定条件过滤后的元素。
var res2 = testArr.filter((ele, index, testArr) => {
    if (ele >= 1) {
        return ele;
    }
});
//console.log(res2);

// -------------------------P3 循环 END-------------------------

// -------------------------P3 函数 START-------------------------
// 可选参数必须跟在必需参数后面,除非都是可选
function testHan(x: number, y: number, z?: string, o: number = 5): number {
    return 12;
}
//console.log(testHan(1, 2));

// 剩余参数
function residue(xx: number, ...hanten: string[]) {
    var res: string = '';
    res = xx + hanten.join(' ');
    console.log(res);
}
residue(1, '2', '3');

// 匿名函数
var ni = function () {
    console.log('匿名函数');
}
ni();

// 匿名函数自调用
(function () {
    console.log('匿名函数自调用');
})();

// 构造函数
var gouzao = new Function("a", "b", "return a * b");
console.log(gouzao(2, 3));

// -------------------------P3 函数 END-------------------------
