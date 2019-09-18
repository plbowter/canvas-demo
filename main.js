var divObj = document.getElementById("canvas");
var painting = false;

// 鼠标按下
divObj.onmousedown = function(a){
    painting = true;
    var x = a.clientX;
    var y = a.clientY;

    var divObjChild = document.createElement("div");
    divObjChild.style = "background:black;" + 
                 "width:6px;height:6px;border-radius:3px;" +
                 "position:absolute;" + 
                 "left:" + (x-3) + "px;" + 
                 "top:" + (y-3) + "px";

    divObj.appendChild(divObjChild);
}

// 鼠标移动
divObj.onmousemove = function(a) {
    if(painting){
        var x = a.clientX;
        var y = a.clientY;

        var divObjChild = document.createElement("div");
        divObjChild.style = "background:black;" + 
                 "width:6px;height:6px;border-radius:3px;" +
                 "position:absolute;" + 
                 "left:" + (x-3) + "px;" + 
                 "top:" + (y-3) + "px";

        divObj.appendChild(divObjChild);
    }
}

// 鼠标抬起
divObj.onmouseup = function(){
    painting = false;
}
