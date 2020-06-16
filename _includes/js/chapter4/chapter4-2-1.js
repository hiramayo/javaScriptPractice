//nodeListを検索
function findNode(callBack) {
    var nodeList = document.querySelectorAll("input");
    if(typeof callBack === "function"){
        nodeList.forEach(hide);
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

//nodeを隠す
function execute(){
    findNode(hide);
}