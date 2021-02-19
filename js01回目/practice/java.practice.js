
function rand(n){
 var r = Math.floor(Math.random()*n+1);
 return r;
}

var t = rand(2);

$(#java).html(t);