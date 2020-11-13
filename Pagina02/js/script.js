// Header fixed

/*window.onscroll= function(){

    const docScrollTop = document.documentElement.scrollTop;

    if(window.innerWidth>800){
        if(docScrollTop>100){
            document.querySelector("header").classList.add("fixed")

    }else{
        document.querySelector("header").classList.remove("fixed")
    }

   }
   
}*/

//Header Sticky

window.addEventListener("scroll", function(){
 var header = document.querySelector("header");
 header.classList.toggle("sticky", window.scrollY > 0);

})



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

 
 //Desplegando el menu Responsive
 $(document).ready(main);
 
 var contador = 1;
  
 function main(){
     $('.menu_bar').click(function(){
         // $('nav').toggle(); 
  
         if(contador == 1){
             $('.navbar').animate({
                 left: '0'
                 
             });
             contador = 0;
         } else {
             contador = 1;
             $('.navbar').animate({
                 left: '-100%'
             });
         }
  
     });
  
 };

// Cambiando el color a los input
 $(document).ready(function(){
   $('input , textarea').focus(function(){
     $(this).css('outline-color' , '#ffe082');
   });
 });