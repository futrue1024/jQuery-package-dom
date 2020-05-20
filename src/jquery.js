window.jQuery = function (selectorOrArray) {
  let elements; //作用域提升
  if (typeof selectorOrArray === "string") {
    elements = document.querySelectorAll(selectorOrArray); //选择所有符合条件的选择器
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray;
  }

  const api = Object.create(jQuery.prototype);
  Object.assign(api, {
    elements: elements,
    oldApi: selectorOrArray.oldApi,
  });
  return api; //返回api能进行链表操作
};
jQuery.prototype = {
  //return = 'const api = '
  //闭包，调用外部变量elements
  //将array得旧api保存，方便使用end调用旧api从而实现对最开始标签的继续操作。
  addClass(className) {
    const element = this.elements;
    for (let i = 0; i < element.length; i++) {
      element[i].classList.add(className);
    }
    return this; //return api;
  },
  find(selector) {
    //发现jQuery('#xxx')中的find('.xxx')
    let array = [];
    const element = this.elements;
    for (let i = 0; i < element.length; i++) {
      let elements2 = Array.from(element[i].querySelectorAll(selector));
      array = array.concat(elements2);
    }
    array.oldApi = this; //给数组新添加一个属性，属性值为旧api，因为此时还没有执行jQuery(array)，得不到新Api
    return jQuery(array); //如果需要在find中的标签也加样式，需要return重新调用jQuery(array),从而调用addClass完成添加样式。
  },
  end() {
    return this.oldApi; //
  },
  each(fn) {
    for (let i = 0; i < elements.length; i++) {
      const element = this.elements[i];
      fn.call(null, element[i], i);
    }
    return this;
  },
  parent() {
    const array = [];
    this.each((node) => {
      //node就是为elements[i]
      if ((array, indexOf === -1)) {
        //通过遍历将名字相同的标签得出，然后逐个得出他们的父级，父级相同的只push一次。
        array.push(node.parentNode);
      }
    });
    return jQuery(array);
  },
  children() {
    const array = [];
    this.each((node) => {
      array.push(...node.children);
    });
    return jQuery(array);
  },
  print() {
    const element = this.elements[i];
    console.log(element);
  }, //调用print打印出elements
};
// return api; 返回api，不返回elements，jQuery操作的就是api
//可以简化为直接返回这个对象}

window.$ = window.jQuery;
