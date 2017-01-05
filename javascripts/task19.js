/**
 * Created by fruit on 16/6/10.
 */
(function(){
        var btns         = document.querySelectorAll("button"),
            lin          = btns[0],
            rin          = btns[1],
            lout         = btns[2],
            rout         = btns[3],
            messBtn      = btns[4],
            bubbleBtn    = btns[5],
            selectionBtn = btns[6],
            insertionBtn    = btns[7],
            queue        = document.querySelector("ul");
        addHandler(lin, "click", leftIn);
        addHandler(rin, "click", rightIn);
        addHandler(lout, "click", leftOut);
        addHandler(rout, "click", rightOut);
        addHandler(queue, "click", deleteEle);
        addHandler(messBtn, "click", function() {
            init(queue, lin);
        });
        addHandler(bubbleBtn, "click", function() {
            bubbleSort(queue);
        });
        addHandler(selectionBtn, "click", function() {
            slectionSort(queue);
        });
        addHandler(insertionBtn, "click", function() {
            insertSort(queue);
        });
        init(queue, lin);
    }
)();
function leftIn() {
    var queue  = document.querySelector("ul"),
        input  = document.querySelector("input"),
        newEle = document.createElement("li"),
        oldEle = queue.querySelectorAll("li")[0],
        temp;

    if(!(temp = transValue(input))) {
        return false;
    }
    newEle.style.height = temp + "px";
    if(queueLength(queue) >= 60) {
        alert("队列满了");
    } else if(!oldEle) {
        queue.appendChild(newEle);
    } else {
        queue.insertBefore(newEle, oldEle);
    }
}

function rightIn() {
    var newEle = document.createElement("li"),
        queue  = document.querySelector("ul"),
        input  = document.querySelector("input"),
        temp;

    if(!(temp = transValue(input))) {
        return false;
    }
    newEle.style.height = temp + "px";
    if(queueLength(queue) >= 60) {
        alert("队列满了");
    } else {
        queue.appendChild(newEle);
    }
}

function leftOut() {
    var queue  = document.querySelector("ul"),
        oldEle = queue.querySelectorAll("li")[0];

    if(!oldEle) {
        alert("队列空了");
    } else {
        alert(oldEle.offsetHeight);
        queue.removeChild(oldEle);
    }
}

function rightOut() {
    var queue  = document.querySelector("ul"),
        oldEle = queue.lastChild;
    if(!oldEle) {
        alert("队列空了");
    } else {
        alert(oldEle.offsetHeight);
        queue.removeChild(oldEle);
    }
}
function deleteEle(event) {
    var oldEle = getTarget(event),
        queue  = document.querySelector("ul");

    if(oldEle.tagName == "LI") {
        queue.removeChild(oldEle);
    }
}
function queueLength(queue) {
    return queue.querySelectorAll("li").length;
}
function transValue(input){
    var result=parseInt(input.value.replace(/\D/g,""),10);
    if (result>100||result<10){
       alert("必须为10-100的整数");
        return false;
    }
    return result;
}
function swap(ele1,ele2){
    var temp=ele1.style.height;
    ele1.style.height=ele2.style.height;
    ele2.style.height=temp;
}
function  bubbleSort(queue){
    var timer;
    var eles=queue.querySelectorAll("li");
    var len=eles.length;
    var i,j= 0,delay=50;
    i=len-1;
    timer=setInterval(function(){
        if (i<1){
            clearInterval(timer);
        }
        if(j==i){
            --i;
            j=0;
        }
        if (eles[j].offsetHeight>eles[j+1].offsetHeight){
            swap(eles[j],eles[j+1]);
        }
        j++;
    },delay);
}
function insertSort(queue){
    var eles = queue.querySelectorAll("li"),
        len  = eles.length,
        temp, i = 1, j = 0, timer, delay = 100, outer = true, inner = false;

    timer = setInterval(function() {
        if(outer) {
            if(i == len) {
                clearInterval(timer);
                return ;
            }
            if(eles[i].offsetHeight < eles[i-1].offsetHeight) {
                temp = eles[i].offsetHeight;
                j = i - 1;
                outer = false;
                inner = true;
            } else {
                i++;
            }
        }
        if(inner) {
            if(j < 0 || eles[j].offsetHeight < temp) {
                eles[j+1].style.height = temp + "px";
                eles[j+1].offsetHeight = temp;
                i++;
                inner = false;
                outer = true;
            } else {
                eles[j+1].style.height = eles[j].style.height;
                eles[j+1].offsetHeight = eles[j].offsetHeight;
                j--;
            }
        }
    }, delay);
}
function slectionSort(queue) {
    var eles = queue.querySelectorAll("li"),
        len  = eles.length, i = 0, j = 1, min = 0, delay = 50, timer;

    timer = setInterval(function() {
        if(i == len - 1) {
            clearInterval(timer);
        }
        if(j == len) {
            swap(eles[i], eles[min]);
            ++i;
            min = i;
            j = i + 1;
        }
        if(eles[j] && eles[j].offsetHeight < eles[min].offsetHeight) {
            min = j;
        }
        ++j;
    }, delay);
}




















