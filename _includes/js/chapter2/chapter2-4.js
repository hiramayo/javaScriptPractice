//for-inループ
function forin(){
    //オブジェクト
    var man = {
            name: "hiramayo",
            age: 33,
            address: "Tokyo"
        },
        result = document.getElementById("result"),
        str = "";
    //プロトタイプにプロパティを追加
    Object.prototype.newprop = "newProp";
    //プロパティを表示
    for(var prop in man){
        if(man.hasOwnProperty(prop)){
            str += prop + ":" +  man[prop] + "\n";
        }
    }
    result.innerText = str;
}
