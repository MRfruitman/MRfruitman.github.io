(function(){
    var traversalBtn = document.getElementById("traversal");
    var inputSearch = document.getElementById("searchInput");
    var searchBtn = document.getElementById("search");
    var deleteBtn = document.getElementById("delete");
    var addBtn = document.getElementById("add");
    var addInput = document.getElementById("addInput");
    var root = document.getElementById("root");
    var queue = [];
    var timer = null;
    var onAnimate = false;
    var clickSearch = false;
    var target = null;

    //事件的兼容函数
    function addEvent(element, type, handler){
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    }

    //清空所有背景颜色
    function clearBgColor(){
        root.style.backgroundColor = "white";
        var elements = root.getElementsByTagName("div");

        for(var i= 0, len=elements.length; i<len; i++){
            elements[i].style.backgroundColor = "white";
        }
    }

    //遍历函数
    function traversal(node){
        var childs = node.children;
        if(childs.length !== 0){
            for(var i= 0, len=childs.length; i<len; i++){
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
        target = null;
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

                if(!found && clickSearch){
                    alert("没有找到啊！");
                }
            }
        }, 500);
    }

    //选择,删除，添加节点
    function checkNode(event){
        if(onAnimate){
            alert("停不下来了！");
            return;

        }

        var ev = event || window.event;
        target = event.target || event.srcElement;
        clearBgColor();
        target.style.backgroundColor = "green";
    }

    //删除节点
    function deleteNode(){
        if(target === null){
            alert("请选择节点");
            return;
        }
        target.parentNode.removeChild(target);
    }

    //添加节点
    function addNode(){
        if(target ==null){
            alert("请选择节点");
            return;
        }

        var addInputText = addInput.value;
        if(addInputText === ""){
            alert("请输入值!");
        }else {
            var divEle = document.createElement("div");
            divEle.innerHTML = addInputText;
            target.appendChild(divEle);
        }
    }


    //绑定事件
    addEvent(traversalBtn, "click", traversalAnimate);
    addEvent(searchBtn, "click", function(){
        clickSearch = true;
        traversalAnimate();
    });
    addEvent(root, "click", function(){
        checkNode(event);
    });
    addEvent(deleteBtn, "click", deleteNode);
    addEvent(addBtn, "click", addNode);
})();