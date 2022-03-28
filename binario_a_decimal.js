function binarioADecimal(num){

    let contador = 0, ccDePotencia = 0;

    for(let i = String(num).length - 1; i >= 0 ; i--){

        contador += Number(String(num)[i]) * 2 ** ccDePotencia;
        ccDePotencia++;

    }

    return contador;
}