(function(){
    var traversalBtn = document.getElementById("traversal");
    var inputSearch = document.getElementById("searchInput");
    var searchBtn = document.getElementById("search");
    var root = document.getElementById("root");
    var queue = [];
    var timer = null;
    var onAnimate = false;
    var clickSearch = false;

    function addEvent(element,type,handler){
        if (element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if (element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else {
            element["on"+type]=handler;
        }
    }

    function clearBgColor(){
        root.style.backgroundColor="white";
        var divs=root.getElementsByTagName("div");
        for (var i=0,len=divs.length;i<len;i++){
            divs[i].style.backgroundColor="white";
        }
    }
    function traversal(node){
        var childs=node.children;
        if (childs.length!=0){
            for(var i=0,len=childs.length;i<len;i++){
                queue.push(childs[i]);
                traversal(childs[i]);
            }
        }
    }
    //遍历动画
    function traversalAnimate(){
        if(onAnimate){
            alert("根本停不下来！");
            return;
        }
        if(clickSearch){
            var inputSearchText = inputSearch.value;
        }

        clearBgColor();//清空颜色
        onAnimate = true;//表示在运动中
        queue = [root];
        traversal(root);//初始化queue
        clearInterval(timer);

        root.style.backgroundColor = "gold";
        var i= 0,
            len = queue.length,
            found = 0;

        timer = setInterval(function(){
            if(i < len-1){
                if(!(queue[i].style.backgroundColor === "green")){
                    queue[i].style.backgroundColor = "white";
                }
                queue[++i].style.backgroundColor = "gold";
                if(inputSearchText === queue[i].firstChild.nodeValue.trim()){
                    queue[i].style.backgroundColor = "green";
                    found = 1;
                }
            }else {
                queue[i].style.backgroundColor = "white";
                clearInterval(timer);
                onAnimate = false;
                clickSearch = false;

                if(!found){
                    alert("没有找到啊！")
                }
            }
        }, 500);
    }

    //绑定事件
    addEvent(traversalBtn,"click", traversalAnimate);
    addEvent(searchBtn, "click", function(){
        clickSearch = true;
        traversalAnimate();
    })
})();