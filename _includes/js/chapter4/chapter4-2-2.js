//nodeの配列を取得(callBack中のthisに非対応)
function findNodesBad(callBack) {
    var nodeList = document.querySelectorAll("p"),
        nodeArray = [];

    nodeList.forEach(function(node,index){
        if(typeof callBack === "function"){
            callBack(node);
        }
        nodeArray.push(node);
    })
    return nodeArray;
}
//nodeの配列を取得(callBack中のthisに対応)
function findNodes(callBack,callBackObj) {
    var nodeList = document.querySelectorAll("p"),
        nodeArray = [];

    nodeList.forEach(function(node,index){
        if(typeof callBack === "function"){
            callBack.call(callBackObj, node);
        }
        nodeArray.push(node);
    })
    return nodeArray;
}

//callbackで使用するオブジェクト（のメソッド）
var paintFactory = function (color) {
    return {
        color : color,
        paint : function(node) {
            node.style.color = this.color;
        }
    }
}
var paintGreen = paintFactory("green");

//悪い例
//paintメソッドのthisがグローバルオブジェクトを指すため、色の取得に失敗する
function bad(){
    findNodesBad(paintGreen.paint);
}

//良い例
function good(){
    findNodes(paintGreen.paint,paintGreen);
}