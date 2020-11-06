function cambio1(){
    var cam1=document.getElementById("navegacion");
    cam1.innerHTML="<div style='font-size: 0.8rem;'> <ul><li><a href='#'>Inicio</a></li><li><a href= '#'>acerca de</a></li><li><a href= '#'>Servicio</a></li><li><a href= '#'>Capturas de pantalla</a></li><li><a href= '#'>Precios</a></li><li><a href= '#'>Equipo</a></li><li><a href= '#'>Contacto</a></li><li><a href= '#'>Obtener Apoyo</a></li> </ul> </div>";
}
function cambio2(){
    var cam5=document.getElementById("img");
    cam5.style.backgroundImage="url(/Dise-o-Web-II/Practica1/imagenes/img.png)"
}
function cambio3(){
    var cam3=document.getElementById("texto1");
    cam3.style.color="rgb(131, 45, 45)";
    cam3.style.transform="scale(0.9)";
    cam3.style.transition="all 0.9s";
}
function cambio4(){
    var cam4=document.getElementById("footer");
    cam4.style.textAlign="center";
    cam4.style.transition="all 0.9s";
    cam4.style.fontSize="2rem";
}
function cambio5(){
    var cam2=document.getElementById("categoria");
    cam2.innerHTML="<div style='font-size:1.5rem; background:brown; border-radius: 10px;' >¿Qué hace un diseñador web?<br>Si bien es común pensar que un diseñador web es responsable de crear sitios web atractivos y completamente funcionales, hacen más que eso.Los diseñadores web tienen en su trabajo tareas rutinarias relacionadas con la creación de un diseño para medios digitales y la creación de contenido.Por lo tanto, deben analizar tanto las necesidades del cliente como los objetivos para configurar un sitio web a fin de brindar a los visitantes la mejor experiencia.Además, diseñadores web deben saber cómo insertar gráficos, usar lenguajes como HTML y actualizar el sitio cuando sea necesario.</div>"
    cam2.style.color="yellow";
    cam2.style.transition="all 0.9s";
    cam2.style.textAlign="center";
}
function cambio6(){
    var cam6=document.getElementById("logo");
    cam6.style.width="15rem"
    cam6.style.transform="scale(0.9)";
    cam6.style.transition="all 0.9s";
}
document.write(Date());
function animacion() {
    var elem = document.getElementById("animate");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 1150) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.right = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
}
var w = window.innerWidth
 document.documentElement.clientWidth
 document.body.clientWidth;

var h = window.innerHeight
 document.documentElement.clientHeight
 document.body.clientHeight;

var x = document.getElementById("demo");
x.innerHTML = "Ancho de la ventana interior del navegador " + w + ", height: " + h + ".";

document.getElementById("demo2").innerHTML = "La altura de pantalla disponible es  " + screen.availHeight;

document.getElementById("demo3").innerHTML = 
"La URL completa de esta página es: <br>" + window.location.href;