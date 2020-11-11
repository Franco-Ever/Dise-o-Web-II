$(document).ready(function(){
  $("#boton1").click(function(){
    $("p").toggle();
  });
});


$(document).ready(function(){
  $("p").on({
    mouseenter:function () { 
      $(this).css("background","orange");
      $(this).css("border-radius","10px");
      $(this).css("box-shadow","10px 10px 10px black");
      $(this).css("transition","all 0.9s");
    },
    mouseleave:function(){
      $(this).css("background","#443C35");
      $(this).css("color","#fff");
    },
    click:function(){
      $(this).css("background","#fff");
      $(this).css("color","#000");
    }
  });
});

$(document).ready(function(){
  $("#boton2").click(function(){
    $("p").toggle(5000);
  });
});
$(document).ready(function(){
  $("#boton3").click(function(){
    alert("Text: " + $("#parrafo").text());
  });
  $("#boton4").click(function(){
    alert("HTML: " + $("#parrafo").html());
  });
});

function textos(){
  var texto1="<p style='background:#000;color:#fff;width:10rem;border-radius:8px;text-align:center;'>Diseño Web II</p>";
  var texto2=$("<p></p>").text("Diseño Web II").css("background","#a7816f").css("width","10rem").css("border-radius", "8px").css("text-align", "center");
  var texto3=document.createElement("p");
  texto3.innerHTML="Diseño Web II";
  texto3.style.background="#afafaf";
  texto3.style.color="#000";
  texto3.style.width="10rem";
  texto3.style.textAlign="center";
  texto3.style.borderRadius="8px";
  $("body").append(texto1,texto2,texto3);
};