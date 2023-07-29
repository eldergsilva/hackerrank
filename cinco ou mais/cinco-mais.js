const precos =[100, 500 ,100, 200];
let menor=precos[0];
let valor=0;           
for ( let preco of precos){    
    valor +=preco; 
    if ( preco  < menor){   
        menor = preco;                 
        }                        
} 
if (precos.length >=5) {
    console.log(valor-menor)
} else {
    console.log(valor)
}
 




