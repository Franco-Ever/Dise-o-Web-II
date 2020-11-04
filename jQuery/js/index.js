/*var cu1=document.querySelector("#cuadrado");
cu1.addEventListener("click",
cambiarColor
);
function cambioColor(){
    cu1.style.background="orange";
}*/

$("#cuadrado").click(
    function(){
        $("#cuadrado").css({
            "background":"#fff",
            "width":"200px",
            "height":"200px",
            "border": "solid 2px black"
        });
    }
)