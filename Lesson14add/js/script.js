'use strict';
const DomElement = function(selector, height, width, bg, fontSize, position) {
    this.selector = selector;
    this.height = height + "px";
    this.width = width + "px";
    this.bg = bg;
    this.fontSize = fontSize + "px";
    this.position = position;
    this.element = {};
}

DomElement.prototype.set = function(text) {
    if (this.selector[0] === '.') {
        let div = document.createElement("div");
        div.className = this.selector.slice(1);
        div.innerHTML = text;
        div.style.cssText = `height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize};
        position: ${this.position};`;
        this.element = div;
        // document.body.append(div);
    } else if (this.selector[0] === '#') {
        let p = document.createElement("p");
        p.id = this.selector.slice(1);
        p.innerHTML = text;
        p.style.cssText = `height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize};
        position: ${this.position};`;
        this.element = div;
        // document.body.append(p);
    }
};
DomElement.prototype.append = function() {
    document.body.append(this.element);
};
DomElement.prototype.contentLoad = function() {
    document.addEventListener("DOMContentLoaded", () => {
        square.append();
    });
}
DomElement.prototype.listenKey = function() {
    document.addEventListener("keydown", (e) => {
        let x = 0,
            y = 0;
        if (this.element.style.transform) {
            x = +this.element.style.transform.match(/\d+/g)[0];
            y = +this.element.style.transform.match(/\d+/g)[1];
        }
        if (e.key === 'ArrowDown') {
            y += 10;
            this.element.style.transform = `translate(${x}px, ${y}px)`;
        }
        if (e.key === 'ArrowUp') {
            y -= 10;
            this.element.style.transform = `translate(${x}px, ${y}px)`;
        }
        if (e.key === 'ArrowLeft') {
            x -= 10;
            this.element.style.transform = `translate(${x}px, ${y}px)`;
        }
        if (e.key === 'ArrowRight') {
            x += 10;
            this.element.style.transform = `translate(${x}px, ${y}px)`;
        }
    })
};

const square = new DomElement(".square", 100, 100, 'green', 0, 'absolute');
square.set();
square.contentLoad();
square.listenKey();



// 1) Используя class DomElement из основного задания №1, создать квадрат 100 на 100 пикселей. Ему необходимо задать фон(background) любого цвета и свойство position: absolute.
// 2) Поместить его на страницу только после выполнения события DOMContentLoaded.
// Внутри тега должно быть только подключение скрипта.

// 3) Написать обработчик события для keydown, который будет принимать callback-функцию. Данная функция будет отлавливать нажатие на стрелки клавиатуры. В зависимости от нажатой кнопки(Вверх - стрелка вверх, Влево - стрелка влево, Вправо - стрелка вправо, Вниз - стрелка вниз) наш квадрат будет перемещаться на 10 пикселей.

// 4) Добавить папку с уроком на свой GitHub