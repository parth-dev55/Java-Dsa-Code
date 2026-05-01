//all odd nums between 1 to 15

let b = 20;
b = 10;
console.log(b+b);
var a = 10;
var a = 20;
console.log(a+a);
let count = 10;
let tn = setInterval(function(){
    if(count>=0){
        
        console.log(count);
        count--;
    }
    else clearInterval(tn);
}, 1000 );
console.log(tn);