
function normalFunc1(x,y){
    return x * y;
}
function curryFunc1(x){
    return function curryFunc2(y) {
        return x * y;
    }
}
//単独varパターン
function singleVarPattern(){
    //リザルトのテキストを取得し、先頭に「Hello」を追加する
    var el = document.getElementById("result"),
        text = el.innerText;
    el.textContent = "Hello, " + text;
}
//グローバル変数を環境に依存せず取得
var global = function() {
    return this;
}();