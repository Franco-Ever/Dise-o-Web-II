/*var cu1=document.querySelector("#cuadrado");
cu1.addEventListener("click",
cambiarColor
);
function cambioColor(){
    cu1.style.background="orange";
}*/

/*$("#cuadrado").click(
    function(){
        $("#cuadrado").css({
            "background":"#fff",
            "width":"200px",
            "height":"200px",
            "border": "solid 2px black"
        });
    }
);*/
/*$("#cuadrado").click(
    function(){
        $("#cuadrado").hide(1500),
        $("#cuadrado").show(1500);
        $("#cuadrado").css({
            "background":"yellow",
            
        });
    }
);*/

$("#cuadrado").click(
    function(){
        $("#cuadrado").animate({
            "fontSize":"2.4em",
            "width":"800px",
            "padding":"24px"
        }, 2500);
        $("#cuadrado").fadeToggle(3000);
        $("#cuadrado").fadeIn(3000);
        $("#cuadrado").animate({
            "opacity":"0.1",              
            "left":"+=400", 
            "fontsize":"1em", 
            "width":"200px"

        }, 1250)
        .animate({
            "opacity":"0.1",
            "top":"+=160",
            "height":"20px",
            "width":"80px",
            "fontSize":"0.5em"
        },"slow")
        .animate({
            "opacity":"1",
            "left":"0",
            "width":"250"
        },"slow")
        .animate({
            "top":"0",
            "width":"250",
            "fontSize":"1.2em"
        },"fast")
        .slideUp()
        .slideDown()
        return false;
    }
);
