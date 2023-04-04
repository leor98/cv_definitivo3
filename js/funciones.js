
/// este evento es el que avisa cuando salis de la pagina///
   window.addEventListener("beforeunload", function(event) {
     event.returnValue = "Estas por salir de la pagina..";
}  )

     