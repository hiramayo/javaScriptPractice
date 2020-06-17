//nodeListを検索
function findNode(callBack) {
    var nodeList = document.querySelectorAll("input");
    if(typeof callBack === "function"){
        nodeList.forEach(callBack);
    }
    return nodeList;
}

//nodeListのforEachで呼び出されるcallBack
//nodeList.prototype.forEachには、以下の３つのパラメータが設定可能。
function hide(currentValue, currentIndex, listObj){
    currentValue.style.display = "none";
    console.log(currentIndex);
    console.log(listObj);
}

//nodeの配列を取得
function findNodeArray(callBack) {
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

//nodeListのforEachで呼び出されるcallBack
//nodeList.prototype.forEachには、以下の３つのパラメータが設定可能。
function color(node){
    node.style.color = "green";
}


//nodeを隠す
function execute(){
    findNode(hide);
}

//nodeを緑色にする
function execute2(){
    findNodeArray(color);
}