let logo=document.getElementById("logo");
logo.style.fontFamily="rustic";
logo.style.fontSize="2em";

let amostra=document.getElementById("amostra"); //imagem do pedido
let meuPedido=document.getElementById("meuPedido"); //hambuguer
let adicinais=document.getElementsByClassName("incremento"); //adicionais

let finalizar=document.getElementById("finalizar"); //botão finalizar

//mostra a imagem do hamburguer, conforme escolha do cliente
let ver=setInterval(function(){
    if(meuPedido.value=="twistter"){
        amostra.src="imagens/twistter.jpg";
    }else if(meuPedido.value=="gran-burger"){
        amostra.src="imagens/grand-burger.jpg";
    }else if(meuPedido.value=="gourmet"){
        amostra.src="imagens/gourmet.jpg";
    } else{
        amostra.src="imagens/selecione.jpg";
    }
},300);



//Função que mostra os dados do pedido depois de finalizado
finalizar.addEventListener("click", function(){
    //hamburguer
    let hambuger="";
    let incrementos=[];
    if(meuPedido.value=="twistter"){
        hambuger="Twistter";
    }else if(meuPedido.value=="gran-burger"){
        hambuger="Gran-Burger";
    }else if(meuPedido.value=="gourmet"){
        hambuger="Gurmet";
    };
    //adicionais
    if(adicinais[0].checked==true){
        incrementos.push("Muçarela");
    }
    if(adicinais[1].checked==true){
        incrementos.push("Bacon");
    }
    if(adicinais[2].checked==true){
        incrementos.push("Cheddar");
    }
    if(adicinais[3].checked==true){
        incrementos.push("Molho");
    }
})
