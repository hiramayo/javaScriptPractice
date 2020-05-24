//他オブジェクトのメソッドを利用
function display(){
    var p1 = document.getElementById("p1").value,
    p2 = document.getElementById("p2").value,
    p3 = document.getElementById("p3").value;
    function innerFunction(p1,p2,p3){
        //配列ライクなオブジェクトargumentsに配列のメソッドを適用
        var sortedArgs = Array.prototype.sort.call(arguments);
        var csvText = Array.prototype.join.call(sortedArgs,", ");
        var result = document.getElementById("result");
        result.innerText = csvText;
    };
    innerFunction(p1,p2,p3);
}