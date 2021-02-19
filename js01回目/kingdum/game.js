var Img=document.querySelector("#enemy_img");
var Shout=document.querySelector(".shout");
var my_Img=document.querySelector("#my_img");
var img_arr=["images/ikuzo.PNG","images/taiji.PNG"];
var role_arr=["images/guu.png","images/choki.png","images/paa.png"];
var finalResult=document.querySelector("#final_result");
var roleButton=document.querySelectorAll(".role_button");
var n=0;
var Main = $("main").innerHTML;

function HTMLRestore() {
    $(".desctiption").css("display","none");
    document.querySelector('main').innerHTML = defaultHTML;
  }

  var defaultHTML;
  function DefaultSave() {
    defaultHTML = document.querySelector('main').innerHTML;
  }


// ジャーンケーン！
Img.addEventListener("click",ImageChange);

function ImageChange(){
    Img.setAttribute("src",img_arr[0]);
    Shout.textContent="ジャーン";
    setTimeout(ImageChange2,1500);
}
function ImageChange2(){
    Img.setAttribute("src",img_arr[1]); 
    Shout.textContent="ケーン…";  
    }

    // じゃーんけーん
    function jankenShout(){
    
    Shout.textContent="ジャーン";
    setTimeout(jankenShout2,1500);
}
function jankenShout2(){
   
    Shout.textContent="ケーン…";  
    }

    // あーいこーで
function evenShout(){
    Shout.textContent="あーい";
    setTimeout(evenShout2,1500);
}
function evenShout2(){ 
    Shout.textContent="こーで…";  
    }

    // 勝ち負けメッセージ
function winMessage(){
    Shout.textContent="勝利";
    setTimeout(function(){Shout.textContent="もう一回だ！"},1500);
}
function WinMessage(){
    
    if(yHp-33<=0){
        Shout.textContent="わが生涯に、一片の悔いなし！" ;
        Shout.style.color="red";
        Shout.bold;
        finalResult.textContent="You Win!";
        finalResult.style.color="gold";
        roleButton.forEach(e=>e.disabled=true);
    }else{
        winMessage();
        setTimeout(jankenShout,3000);
    }
}

function loseMessage(){
  Shout.textContent="敗北";
  setTimeout(function(){Shout.textContent="リベンジだ！"},1500);
}

function LoseMessage(){
    
    if(Hp-33<=0){
        Shout.textContent="お前はもう、死んでいる！"  ;
        Shout.style.color="blue";
        Shout.bold;
        finalResult.textContent="You Lose…";
        finalResult.style.color="blue";
        roleButton.forEach(e => e.disabled=true);
    }else{
        loseMessage();
        setTimeout(jankenShout,3000);
    } 
    
    
}


// もう一勝負！
function oneMore(){
    Shout.textContent="もう一回！";
}
// ポン！
// 自分の手を表示
function guu_display(){
    my_Img.setAttribute("src",role_arr[0]);
    Shout.textContent="ぽん！！";
}
function choki_display(){
    my_Img.setAttribute("src",role_arr[1]);
    Shout.textContent="ぽん！！";
}
function paa_display(){
    my_Img.setAttribute("src",role_arr[2]);
    Shout.textContent="ぽん！！";
}



// console.log(myRole);
// グーを出した場合
var mydam=100,youdam=100;
var HP=document.querySelector(".hp");
var Hp=Number(document.querySelector(".hp").getAttribute("value"));
var yHP=document.querySelector(".yhp");
var yHp=Number(document.querySelector(".hp").getAttribute("value"));
  
var hpProgress=document.querySelector(".hp");
var yhpProgress=document.querySelector(".yhp");


function selectRole_guu(){
     var ranNum = Math.floor(Math.random()*3) ;
     var enemy_role = role_arr[ranNum];
     var myRole = role_arr[0];
      Img.setAttribute("src",enemy_role);
      setTimeout(function(){
    if(myRole==enemy_role){
    Img.setAttribute("src","images/even.PNG");
    setTimeout(evenShout,1500);
    }else if(enemy_role=="images/choki.png"){
        Img.setAttribute("src","images/make.PNG");
        WinMessage();
        yHp-=34;
        yHP.setAttribute("value",yHp);
        var n = Number(yhpProgress.getAttribute("value"));
        console.log(n);
        if(n<0){
            console.log("you win!");}
    }else{
        Img.setAttribute("src","images/kachi.PNG");
        LoseMessage(); 
        Hp-=34;
        HP.setAttribute("value",Hp);
        var n = Number(hpProgress.getAttribute("value"));
        console.log(n);
        if(n<0){
            console.log("game over");
        }
    }
},1500);
}

function selectRole_choki(){
     var ranNum = Math.floor(Math.random()*3) ;
     var enemy_role = role_arr[ranNum];
     var myRole = role_arr[1];
      Img.setAttribute("src",enemy_role);
      setTimeout(function(){
    if(myRole==enemy_role){
    Img.setAttribute("src","images/even.PNG");
    setTimeout(evenShout,1500);
    }else if(enemy_role=="images/paa.png"){
        Img.setAttribute("src","images/make.PNG");
        WinMessage();
        yHp-=34;
        yHP.setAttribute("value",yHp);
        var n = Number(yhpProgress.getAttribute("value"));
        console.log(n);
        if(n<0){
            console.log("you win!");}
    }else{
        Img.setAttribute("src","images/kachi.PNG");
        LoseMessage();
        Hp-=34;
        HP.setAttribute("value",Hp);
        var n = Number(hpProgress.getAttribute("value"));
        console.log(n);
        if(n<0){
            console.log("game over");
        }
    }
},1500);
}


function selectRole_paa(){
     var ranNum = Math.floor(Math.random()*3) ;
     var enemy_role = role_arr[ranNum];
     var myRole = role_arr[2];
      Img.setAttribute("src",enemy_role);
      setTimeout(function(){
    if(myRole==enemy_role){
    Img.setAttribute("src","images/even.PNG");
    setTimeout(evenShout,1500);
    }else if(enemy_role=="images/guu.png"){
        Img.setAttribute("src","images/make.PNG");
        WinMessage();
        yHp-=34;
        yHP.setAttribute("value",yHp);
        var n = Number(yhpProgress.getAttribute("value"));
        console.log(n);
        if(n<0){
            console.log("you win!");}
    }else{
        Img.setAttribute("src","images/kachi.PNG");
        LoseMessage();
        Hp-=34;
        HP.setAttribute("value",Hp);
        var n = Number(hpProgress.getAttribute("value"));
        console.log(n);
        if(n<0){
            console.log("game over");
        }
    }
},1500);
}


// HTML記述を初期状態に戻す
