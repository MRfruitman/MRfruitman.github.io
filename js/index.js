/**
 * Created by fruit on 17/1/4.
 */
window.onload=function(){
    var menu=document.getElementById("menu");
    var list=menu.getElementsByTagName("a");
    var str=location.href;
    var arr=str.split("/");
    switch (arr[arr.length-1]){
        case "works":
            list[1].style.color="yellow";
            break;
        case "about":
            list[2].style.color="yellow";
            break;
        default:list[0].style.color="yellow";
    }
};