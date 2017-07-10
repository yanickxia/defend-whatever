/**
 * Created by yann on 2017/7/10.
 */

const stageHeight = 600;
const stageWidth = 800;

let airplane = document.getElementById('airplane');

const airplaneHeight = airplane.height;
const airplaneWidth = airplane.width;


const step = airplaneWidth - 5;

init();


function init() {
    airplane.style.left = ((stageWidth / 2) - airplaneWidth) + "px";
    airplane.style.top = (stageHeight - airplaneHeight) + "px";
    airplane.minTop = 0;
    airplane.maxTop = stageHeight - airplaneHeight;
    airplane.minLeft = 0;
    airplane.maxLeft = stageWidth - airplaneWidth;

    airplane.checkPositionAndReturn = function (dire, number) {
        if (dire === 'left') {
            let newLeft = airplane.getLeft() + number;
            if (newLeft < airplane.minLeft) {
                return 0
            }
            if (newLeft > airplane.maxLeft) {
                return airplane.maxLeft;
            }
            return newLeft;
        } else {
            let newTop = airplane.getTop() + number;
            if (newTop < airplane.minTop) {
                return 0
            }
            if (newTop > airplane.maxTop) {
                return airplane.maxTop
            }
            return newTop;
        }
    };

    airplane.getLeft = function () {
        return parseInt(airplane.style.left.split('px')[0]);
    };

    airplane.getTop = function () {
        return parseInt(airplane.style.top.split('px')[0]);
    };

    airplane.up = function () {
        airplane.style.top = airplane.checkPositionAndReturn("top", -step) + "px";
    };

    airplane.down = function () {
        airplane.style.top = airplane.checkPositionAndReturn("top", step) + "px";
    };

    airplane.left = function () {
        airplane.style.left = airplane.checkPositionAndReturn("left", -step) + "px";
    };

    airplane.right = function () {
        airplane.style.left = airplane.checkPositionAndReturn("left", step) + "px";
    };

    document.onkeypress = airplaneListener
}


function airplaneListener(e) {
    if (e.code === "ArrowUp") {
        airplane.up();
    } else if (e.code === "ArrowDown") {
        airplane.down();
    } else if (e.code === "ArrowLeft") {
        airplane.left();
    } else if (e.code === "ArrowRight") {
        airplane.right();
    }
}


