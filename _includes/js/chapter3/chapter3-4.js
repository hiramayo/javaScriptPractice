//コンストラクタ
var objA = function (name, year){
    this.name = name;
    this.year = year;
}
//コンストラクタのプロトタイプにメソッドを追加
Person.prototype.greeting = function() {
    return "I am " + this.name + ". I am " + this.year + "years old."
}

//オブジェクトの作成＆greet
function display(){
    var hiramayo = new Person("hiramayo",33),
        result = document.getElementById("result");
    result.innerText = hiramayo.greeting();
}