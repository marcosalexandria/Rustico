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
let preco;

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
            preco=27.50;
        }else if(i==1){
            acompanhamentos="Hamburguer + Batata";
            preco=17.30;
        }else if(i==2){
            acompanhamentos="Hamburguer + Refrigerante";
            preco=15;
        }else if(i==3){
            acompanhamentos="Avulso"
            preco=9;
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
    }else if(hambuger==""){
        alert("ERRO, Selecione um hamburguer");
    }
    //adicionais
    if(adicinais[0].checked==true){
        incrementos.push("Muçarela");
        preco+=2.50;
    }
    if(adicinais[1].checked==true){
        incrementos.push("Bacon");
        preco+=3;
    }
    if(adicinais[2].checked==true){
        incrementos.push("Cheddar");
        preco+=2.50;
    }
    if(adicinais[3].checked==true){
        incrementos.push("Molho");
        preco+=2.50.toExponential;
    }

    res.innerHTML=`<strong>*Nota*
    </strong><br>Hambuguer: <strong>${hambuger}</strong><br>
    Com <strong>${incrementos}</strong><br>
    <strong>(${acompanhamentos})</strong><br>
    <strong>TOTAL: R$${preco.toFixed(2)}</strong>`;
    res.style.border="solid rgb(228, 148, 0)"

    console.log(preco)
})