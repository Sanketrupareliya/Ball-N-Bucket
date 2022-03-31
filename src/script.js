"use strict";
function restart() {
    // document.getElementById('startscreen')!.style.visibility='visible';
    // document.getElementById('opacity')!.classList.add("opacity-25");
    // document.getElementById('bucket')!.classList.remove("imgani");
    // scorereset();
    // ele.style.left='14px'
    // ele.style.top = '150px'
    window.location.reload();
    score = 0;
}
// const scorereset=()=>{
//     document.getElementById('nscore')!.innerText='0'
// }
const start = () => {
    document.getElementById('startscreen').style.visibility = 'hidden';
    document.getElementById('opacity').classList.remove("opacity-25");
    buck.classList.add("imgani");
    dragElement(ele);
};
document.getElementById("btn").addEventListener("click", start);
document.getElementById("reset").addEventListener("click", restart);
function dragElement(elmnt) {
    var pos1 = 0, pos3 = 0;
    elmnt.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        ele.classList.remove("topDownAni");
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos3 = e.clientX;
        if (elmnt.offsetLeft - pos1 > 14 && (elmnt.offsetLeft - pos1 + 200) < screen.width) {
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        ballanimate();
    }
}
const winCheck = () => {
    var rect = ele.getBoundingClientRect();
    var rectb = buck.getBoundingClientRect();
    var topBallPos = rect.top;
    let lef = rect.left;
    let right = Math.abs(rect.right - rectb.right);
    let left = Math.abs(rect.left - rectb.left);
    if (right > 0 && right < 95 && left > 0 && left < 90) {
        score += 1;
        document.getElementById('nscore').innerHTML = score.toString();
        ele.style.top = '128px';
        ele.style.left = '16px';
    }
    else {
        bounceAnimate(topBallPos, lef);
    }
};
function bounceAnimate(tPos, left) {
    let f = false;
    let lpos = left;
    let t = tPos;
    let id = null;
    clearInterval(id);
    id = setInterval(frame, 0.001);
    function frame() {
        if (tPos < (t - 140)) {
            clearInterval(id);
            bounceAnimationTwo();
        }
        else {
            lpos += 1;
            tPos = tPos - 3;
            ele.style.top = tPos + "px";
            ele.style.left = lpos + "px";
        }
    }
}
function bounceAnimationTwo() {
    var bodyRect = document.body.getBoundingClientRect(), elemRect = buck.getBoundingClientRect(), offset = elemRect.top - bodyRect.top + 40;
    var rect = ele.getBoundingClientRect();
    let tpos = rect.top;
    let rpos = rect.left;
    let id = null;
    clearInterval(id);
    id = setInterval(frame, 0.001);
    function frame() {
        if (tpos > offset) {
            clearInterval(id);
            ele.style.top = '128px';
            ele.style.left = '16px';
        }
        else {
            rpos += 0.5;
            tpos = tpos + 2;
            ele.style.top = tpos + "px";
            ele.style.left = rpos + "px";
        }
    }
}
const ballanimate = () => {
    var bodyRect = document.body.getBoundingClientRect(), elemRect = buck.getBoundingClientRect(), offset = elemRect.top - bodyRect.top + 40;
    let id = null;
    let pos = 150;
    clearInterval(id);
    id = setInterval(frame, 0.001);
    function frame() {
        if (pos > Math.round(offset)) {
            clearInterval(id);
            winCheck();
        }
        else {
            pos = pos + 5;
            ele.style.top = pos + "px";
        }
    }
};
const ele = document.getElementById("ball");
const buck = document.getElementById('bucket');
let score = 0;
