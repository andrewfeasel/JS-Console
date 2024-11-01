var Arr = [];
var num = 0;
function del(source){
    Arr = [];
    $(source).innerHTML = Arr;
    num = 0;
}
function log(source,output){
    Arr.push(`[${num + 1}] ${output}`);
    $(source).innerHTML += Arr[num] + "<br>";
    $(source).scrollTop = $(source).scrollHeight;
    num++;
}
function $(x){
    return document.getElementById(x);
}
