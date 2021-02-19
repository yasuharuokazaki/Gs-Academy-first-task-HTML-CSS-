
//    $("#op_text1,#op_text2").css('display',"none");

//    $("#op_text1").fadeIn(2000);
//    $(function(){
//        setTimeout(function(){
//         $("#op_text1").fadeOut(2000);  
//        },7000);
//    });

//    $(function(){
//        setTimeout(function(){
//         $("#op_text2").fadeIn(2000);
//    $(function(){
//        setTimeout(function(){
//         $("#op_text2").fadeOut(2000);  
//        },7000);
//    });
//        },9000);
//    });
   
//    $("#description_wrapper,#game_wrapper,#chara,#cho,#so,#kan").css('display',"none");
//    $(function(){
//        setTimeout(function(){
//         $("#description_wrapper").fadeIn(2000);
//        },17700);
//    }) ;
   
// // ゲーム開始
  var start = document.querySelector("#start");
  console.log(start);
  start.addEventListener("click",function(){
    $("#description_wrapper").css('display',"none");
    $("#game_wrapper,#chara,#cho,#so,#kan").css("display","none");
    $("#description_wrapper").remove();
console.log("ok");
$("#game_wrapper,#chara,#cho,#so,#kan").css("display","block");
$('#talk').html("<span id='talk_letter'>これから秦は諸外国に討って出る。まずはどこを討つか、何か考えはあるか？</span>");
})

//楚選
function soVs(){
    $("#anime1").show(10)
    $("#anime1").animate({'marginLeft':'-100px'},5000);
    $(function(){
        setTimeout(function(){
            $("#anime1").fadeOut(10);
            $("#anime2").show(10);
        },5700);
    }) 
    $(function(){
        setTimeout(function(){
            $("#anime2").hide(100);
            $("#anime3").show(100);
        },8000);
    });
}
// イベント セリフのidは"talk"
$("#so").on("click",function(){
    $("#talk").html('<p>楚を攻めるぞ！</p>');
    $(function(){
        setTimeout(function(){
         $("#game_wrapper").fadeOut(1000);  
      },1500);
    });
    $(function(){
        setTimeout(function(){
            soVs();
        },3000);
    });
    $(function(){
        setTimeout(function(){
            gameWrapper();
        },13000);
    })
    
});

function gameWrapper(){
 $("#mainGame").css("display","block");
}


 
