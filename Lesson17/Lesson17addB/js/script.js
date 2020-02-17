'use strict';
document.addEventListener('DOMContentLoaded', () => {
    let flag = false;
    const buttonStartAndStop = document.createElement('button');

    buttonStartAndStop.innerHTML = 'Нажми, чтобы запустить мячик';
    buttonStartAndStop.style.marginRight = 25 + 'px';
    buttonStartAndStop.className = 'start';
    document.body.append(buttonStartAndStop);
    const buttonReset = document.createElement('button');
    buttonReset.innerHTML = 'Нажми, чтобы обновить';
    buttonReset.className = 'reset';
    document.body.append(buttonReset);
    const ball = document.createElement('img');
    let x = ball.offsetLeft,
        y = ball.offsetTop,
        stepX = 1,
        stepY = 1,
        gravity = 0.1,
        requestId;
    ball.src = 'images/ball.png';
    ball.width = 100;
    ball.height = 100;
    ball.style.position = "relative";
    ball.style.display = 'block';
    document.body.append(ball);
    ball.style.top = 0 + 'px';
    ball.style.left = 0 + 'px';
    console.dir(ball.style.top.match(/\d+/)[0]);

    function animate() {
        requestId = requestAnimationFrame(animate);
        let positionOfBallX = +ball.style.left.match(/\d+/)[0],
            positionOfBallY = +ball.style.top.match(/\d+/)[0];
        if ((positionOfBallX > 200) || (positionOfBallX <= 4)) {
            stepX = -stepX;
        };
        if ((positionOfBallY > 200) || (positionOfBallY <= 2)) {
            stepY = -stepY;
        };
        stepY = stepY + gravity;
        ball.style.top = positionOfBallY + stepY * 2 + 'px';
        ball.style.left = positionOfBallX + stepX * 3 + 'px';
        console.log(ball.style.top, ball.style.left);


    };

    function listening(event) {
        if (event.target.className === 'start') {
            if (flag) {
                cancelAnimationFrame(requestId);
                flag = !flag;
            } else {
                animate();
                flag = !flag;
            }
        } else {
            cancelAnimationFrame(requestId);
            flag = false;
            stepY = 1;
            stepX = 1;
            ball.style.top = y;
            ball.style.left = x;
            console.log(ball.style.top, ball.style.left)

        };
    };

    document.body.addEventListener('click', listening);

});