'use strict';
const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height + "px";
    this.width = width + "px";
    this.bg = bg;
    this.fontSize = fontSize + "px";
}

DomElement.prototype.set = function(text) {
    if (this.selector[0] === '.') {
        let div = document.createElement("div");
        div.className = this.selector.slice(1);
        div.innerHTML = text;
        div.style.cssText = `height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize};`;
        document.body.append(div);
    } else if (this.selector[0] === '#') {
        let p = document.createElement("p");
        p.id = this.selector.slice(1);
        p.innerHTML = text;
        p.style.cssText = `height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize};`;
        document.body.append(p);
    }
};

const domEl1 = new DomElement(".button", 100, 500, 'red', 50);
console.log(domEl1);
domEl1.set("Создание по классу");
const domEl2 = new DomElement("#wrapper", 200, 300, 'green', 30);
console.log(domEl2);
domEl2.set("Cоздание по индентификатору");