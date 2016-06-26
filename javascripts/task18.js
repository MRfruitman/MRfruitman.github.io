/**
 * Created by fruit on 16/6/8.
 */
function $(id){
    return document.getElementById(id);
}
function leftInput(){
    var left=document.createElement("div");
    var b=$("input").value.trim();
    if (!b.match(/^\d+$/)){
        alert("请输入数字!");
    }else {
        var a=$("input").value;
        left.innerHTML=a;
        $("clear").insertBefore(left,$("clear").firstElementChild);
    }
}
function  rightInput(){
    var right=document.createElement("div");
    var a=$("input").value;
    right.innerHTML=a;
    $("clear").appendChild(right);
}
function leftOut(){
    $("clear").removeChild($("clear").firstElementChild);
}
function rightOut(){
    $("clear").removeChild($("clear").lastElementChild);
}
function init(){
    $("leftInput").onclick=leftInput;
    $("rightInput").onclick=rightInput;
    $("leftOut").onclick=leftOut;
    $("rightOut").onclick=rightOut;
}
init();