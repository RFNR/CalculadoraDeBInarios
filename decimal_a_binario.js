function decimalABinario(num){

    let binario = [];

    for(let i = num ; i > 0; i = Math.floor(i/2)){

        binario.unshift(i%2);

    }
    
    return Number((binario.toString()).replace(/,/g,""));
}