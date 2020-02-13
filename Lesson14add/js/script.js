'use strict';
const DomElement = function(selector, height, width, bg, fontSize, position) {
    this.selector = selector;
    this.height = height + "px";
    this.width = width + "px";
    this.bg = bg;
    this.fontSize = fontSize + "px";
    this.position = position;
    this.element = {};
    this.body = {};
}

DomElement.prototype.set = function(text) {
    if (this.selector[0] === '.') {
        this.element = document.createElement("div");

        // document.body.append(div);
    } else if (this.selector[0] === '#') {
        this.element = document.createElement("p");
        // document.body.append(p);
    }
    this.element.className = this.selector.slice(1);
    this.element.innerHTML = text;
    this.element.style.cssText = `height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize};
        position: ${this.position};`;
    console.dir(this.element);
};
DomElement.prototype.append = function() {
    document.body.append(this.element);
};
DomElement.prototype.contentLoad = function() {
    document.addEventListener("DOMContentLoaded", () => {
        this.append();
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
        console.log(x, y);

        if (e.key === 'ArrowDown') {
            y += 10;
        }
        if (e.key === 'ArrowUp') {
            y -= 10;
        }
        if (e.key === 'ArrowLeft') {
            x -= 10;
        }
        if (e.key === 'ArrowRight') {
            x += 10;
        }
        if (x >= (this.body.offsetWidth - 10)) {
            x -= 10;
        };
        if (x <= -10) {
            x += 10;
        };
        if (y <= -10) {
            y += 10;
        };
        this.element.style.transform = `translate(${x}px, ${y}px)`;
    })
};
DomElement.prototype.callBody = function() {
    this.body = document.querySelector("body");
    console.dir(this.body);
}

const square = new DomElement(".square", 100, 100, 'green', 0, 'absolute');
square.set();
square.contentLoad();
square.callBody();
square.listenKey();