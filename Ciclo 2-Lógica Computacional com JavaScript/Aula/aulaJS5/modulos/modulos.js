const msgLog=function(msg=''){
    
    try{
     
        if(msg.lenght<=6) {throw "Digite uma mensagem válida!"};
     
        alert(msg);
    
    }catch(err){
     
        alert(`Erro: ${err}`)
   
    }
}
const Produtos =[

{	codigoProduto:1,
	descProduto:"Mesa",
	precoProduto:890.00}
]
export{msgLog,Produtos}