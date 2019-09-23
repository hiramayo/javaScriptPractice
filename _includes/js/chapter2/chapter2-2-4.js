//単独varパターン
function singleVarPattern(){
    //テキストを取得し、先頭に「Hello」を追加する
    var textBox = document.getElementById("textBox"),
        result = document.getElementById("result"),
        name = textBox.value;
    result.textContent = "Hello, " + name;
}
