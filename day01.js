// 欢迎来学习TypeScript
// -------------------------P1欢迎----------------------------
var message = "hello world";
console.log(message);
// -------------------------P2变量声明-------------------------
var uname = "hanteen";
var uname2; // 声明变量的类型，但没有初始值，变量值会设置为 undefined：
var uname3 = "any"; // 声明变量并初始值，但不设置类型，该变量可以是任意类型：
var uname4 = 50;
var uname5 = "任何类型";
var uname6 = [1, 2];
var uname7; // 元组
uname7 = ['1', 2];
var Color;
(function (Color) {
    Color[Color["green"] = 0] = "green";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
;
var c = Color.orange;
console.log(c); // 输出 1
function hello() {
    console.log("用于标识方法返回值的类型，表示该方法没有返回值。");
}
hello();
var uname8 = null;
console.log(typeof (uname8)); // null 表示一个空对象引用。 输出 object
var x; // 类型联合,如果一个类型可能出现 null 或 undefined， 可以用 | 来支持多种类型
x = [1, 2, 3];
console.log(x);
var uname9; // undefined类型，用于初始化变量为一个未定义的值
var uname10; // 代表从不会出现的值
// 变量作用域
var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 实例变量
    }
    Numbers.prototype.store_num = function () {
        var inst_val = 15; // 局部变量
        console.log(inst_val);
    };
    Numbers.s_val = 14; // 静态变量
    return Numbers;
}());
console.log("全局变量：", global_num);
console.log("静态变量：", Numbers.s_val);
console.log("实例变量：", new Numbers().num_val);
console.log("局部变量：", new Numbers().store_num());
