let logo=document.getElementById("logo");
logo.style.fontFamily="rustic";
logo.style.fontSize="2em";

let amostra=document.getElementById("amostra"); //imagem do pedido
let meuPedido=document.getElementById("meuPedido"); //hambuguer
let adicinais=document.getElementsByClassName("incremento"); //adicionais
let acomp=document.getElementsByClassName("buttonsC");  //buttons dos acompanhamentos
let acompanhamentos=""; //vai receber o acompanhamento escolido
let finalizar=document.getElementById("finalizar"); //botão finalizar
let res=document.getElementById("res"); //seção que entrega o pedido

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

//Escolhendo o acompanhamento
for(let i=0;i<acomp.length;i++){
    acomp[i].addEventListener("click", function(){
        if(i==0){
            acompanhamentos="Combo";
        }else if(i==1){
            acompanhamentos="Hamburguer + Batata";
        }else if(i==2){
            acompanhamentos="Hamburguer + Refrigerante";
        }else if(i==3){
            acompanhamentos="Avulso"
        }
    })
}


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

    res.innerHTML=`<strong>*Nota*
    </strong><br>Hambuguer: <strong>${hambuger}</strong><br>
    Com <strong>${incrementos}</strong><br>
    <strong>(${acompanhamentos})</strong>`;
    res.style.border="solid rgb(228, 148, 0)"
})