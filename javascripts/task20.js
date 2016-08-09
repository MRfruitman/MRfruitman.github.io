/**
 * Created by fruit on 16/7/9.
 */
function init(){
    var btn=document.getElementsByTagName("button");
    var insert=btn[0];
    var search=btn[1];
    addHandler(insert,"click",Insert);
    addHandler(search,"click",Search);
}
function Insert(){
    var Li=document.createElement("li");
    var text=document.getElementById("text");
    var ul=document.getElementById("ul");
    Li.innerText=text.value;
    ul.appendChild(Li);
}
function Search(){
    var inp=document.getElementsByTagName("input");
    var a=inp[0].value;
    var li=document.getElementsByTagName("li");
    var len=li.length;
    for(var i=0;i<len;i++){
        if (li[i].innerText==a){
            li[i].style.backgroundColor="red";
        }
        if(li[i].innerText!=a){
            li[i].style.backgroundColor="#00c7d6";
        }
    }
}
init();