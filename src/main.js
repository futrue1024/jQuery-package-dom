//const api = jQuery(".text"); //再次能再次使用声明api的原因是const是块级作用域
//api.addClass("red").addClass("blue"); //因为addClass值得函数返回值为api，所以addClass可以再次调用api，此形式为链表
//因为jQuery返回的api对象，又因为 api = jQuery被赋值，所以api可以直接操作addClass。

jQuery(".text").addClass("red").addClass("blue");
//将jquery简化，用this代指api。jquery中直接返回了一个对象，而不是将对象先声明在引用，所以jquery可以直接引用addClass
