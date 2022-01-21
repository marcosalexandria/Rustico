let logo=document.getElementById("logo");
logo.style.fontFamily="rustic";
logo.style.fontSize="2em";

let amostra=document.getElementById("amostra"); //imagem do pedido
let meuPedido=document.getElementById("meuPedido"); //hambuger

//mostra a imagem do hamburger, conforme escolha do cliente
let ver=setInterval(function(){
    if(meuPedido.value=="twistter"){
        amostra.src="imagens/twistter.jpg";
    }else if(meuPedido.value=="gran-burger"){
        amostra.src="imagens/grand-burger.jpg";
    }else if(meuPedido.value=="gourmet"){
        amostra.src="imagens/gourmet.jpg";
    } else{
        amostra.src="imagens/selecione.jpg"
    }
},300);



//Função que mostra os dados do pedido depois de finalizado
const mostrarPedido=()=>{
    let hambuger="";
    if(meuPedido.value=="twistter"){
        hambuger="Twistter";
    }else if(meuPedido.value=="gran-burger"){
        hambuger="Gran-Burger";
    }else if(meuPedido.value=="gourmet"){
        hambuger="Gurmet";
    }
}