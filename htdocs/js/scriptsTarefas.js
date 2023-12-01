// pegando o botão pelo seu id
let menuBtn = document.querySelector("#menu");
// pegando a nav 
let menu = document.querySelector("nav");

// função ao clicar no botão
menuBtn.addEventListener( "click", function(){
    
    // trazer o menu para dentro da tela
    // .style acessa o css do elemento
    // .setProperty permite alterar o valor de uma propriedade
   
    // se o menu está fora ele puxa para dentro da tela
   if( menu.style.left == null || menu.style.left != "0px" )
   {
        menu.style.setProperty("left", "0");
   }
   else
   {
        menu.style.setProperty("left", "-100vw");
   }

});