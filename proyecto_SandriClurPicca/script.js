emailjs.init("msandri@pioix.edu.ar");

function enviarConsulta(){
    var nombre= document.getElementById("nombre").value
    var apellido= document.getElementById("apellido").value
    var vocacion= document.getElementById("vocacion").value
    var consulta= document.getElementById("consulta").value
    var mensaje = "el usuario "+ nombre +""+ apellido + "de vocacion" + vocacion + ", tiene la siguienteconsulta" + consulta
    alert(nombre+" "+apellido+" su mail se ha enviado con exito")
    
    /*HACER EL MAIL JS*/
}


function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}
  