$(window).on("load", function(){
 $(".preolader").addClass("loaded");
})

$(document).ready(function(){
  
   //Nav-Toggle
   $(".nav-toggle").click(function(){
    $(".header .navbar").slideToggle();
   })
   $(".header .navbar a").click(function(){
    if($(window).width() < 768){
      $(".header .navbar").slideToggle();
    }
  })

    //fix header
     $(window).scroll(function(){
       
        if($(this).scrollTop() > 100){

            $(".header").addClass("fixed");

        }else{
            $(".header").removeClass("fixed")
        }
     })

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


//Navbar links

const navbar = document.querySelector(".navbar");
 a=navbar.querySelectorAll("a");

 a.forEach(function(element){
   
    element.addEventListener("click", function(){
     for(let i=0; i<a.length; i++){
       
        a[i].classList.remove("active")
     }
      this.classList.add("active")
    

    })
 })


      



//Creamos FUCTION VALIDAR

function validar(){

  //Creamos las variables para almacenar los datos
  //Seleccionamos el elemento por su ID y guardamos su valor
  var nombre , email, comentario , expresion;
  nombre = document.getElementById("nombre").value;
  email = document.getElementById("email").value;
  comentario = document.getElementById("comentario").value;
  expresion = /^[A-Z]+$/i;
  expresion2 = /\w+@\w+\.+[a-z]/;
 // ^ indica que el patrón debe iniciar con los caracteres dentro de los corchetes
 // [A-Z] indica que los caracteres admitidos son letras del alfabeto
 // + indica que los caracteres dentro de los corchetes se pueden repetir
 // $ indica que el patrón finaliza con los caracteres que están dentro de los corchetes
 // i indica que validaremos letras mayúsculas y minúsculas (case-insensitive)
// expresion2 = /\w'@\w'\.'[a-z]/;//Sirve para validar el email


  if(nombre === "" || email === "" || comentario === ""){

    alertify.alert('Todos los campos son obligatorios');
    return false;

  }else if(nombre.length >20 || comentario.length >30){

    alertify.alert('Lo escrito exede los caracteres permitidos');
    return false;

  }else if(!expresion.test(nombre)){
   //Si no se cumple la EXPRESIÓN

    alertify.alert('El nombre no es un texto');
    return false;

  }else if(!expresion.test(comentario)){
  
   
    alertify.alert('El comentario no es un texto');
    return false;

}else if(!expresion2.test(email)){
  
   
  alertify.alert('El email no es valido');
  return false;

}

}



  
  
  
  
