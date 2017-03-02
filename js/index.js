/**
 * Created by fruit on 17/1/4.
 */
window.onload=function(){
    var menu=document.getElementById("menu");
    var content=document.getElementsByClassName("content");
    var link=menu.getElementsByTagName("a");
    for(i= 0,len=link.length;i<len;i++){
        link[i].index=i;
        link[i].onclick=function(){
            for(var j=0;j<len;j++){
                link[j].className="";
                content[j].style.display="none";
            }
            link[this.index].className="selected";
            content[this.index].style.display="block";
        }
    }
};