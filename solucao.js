let arreyH = [0,0,4,0,0,6,0,0,3,0,5,0,1,0,0,0];
let matriz = [];

let arreyOrdenado = [...arreyH];
arreyOrdenado.sort();

let count = 0
var countLinha = 0;
for (let i = arreyOrdenado[arreyOrdenado.length-1]; i >= 0; i--){

    let linha = '';
    let barra = 'i';
    let agua = 'o';

    for (let j = 0; j < arreyH.length-1; j++ ){
        
        if(arreyH[j] == 0){
            linha += agua
        }else{
            arreyH[j]--
            linha += barra
            agua = 'a'

            for(let l = 0; l < linha.length; l++){
                if(linha[l+1] == 'a'){
                    linha = linha.replace('a','x')
                    count++
                }
            }
        }

    }
    
    for(let l = 0; l < linha.length; l++){
        if(linha[l+1] == 'a'){
            linha = linha.replace('a','o')
        }
    }
    matriz.unshift(linha);

}

console.log(matriz);
console.log(count);