function decimalABinario(num){

    let resto, binario = [];

    for(let i = num ; i > 0; i = Math.floor(i/2)){

        resto = i%2;
        binario.unshift(resto);

    }
    
    return Number((binario.toString()).replace(/,/g,""));
}