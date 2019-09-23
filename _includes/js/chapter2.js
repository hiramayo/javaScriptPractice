// JSのグローバル変数
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


//2.3 for loop の最適化
function forLoop(){
    for (var i=1; i <10 ; i++){
        (function(msg){
            alert(msg);
        })('hello!')
        setTimeout(function(){
            console.log(idx)
        },1000);
    }
}