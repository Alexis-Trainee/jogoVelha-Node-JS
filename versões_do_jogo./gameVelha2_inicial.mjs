//----------------------------------------------PARTE DAS FUNCÕES QUE COMPLEMENTAM O JOGO-------------------------------------------//

const verifyLines = (arr) => {
    const vencedores = [];

    for(let i = 0; i < arr.length; i++) {
        const linha = arr[i];
        const elemento = linha[0];
        let vencedor = true;

        for(let indexDoElemento = 1; indexDoElemento < linha.length; indexDoElemento++) {
            if (elemento !== linha[indexDoElemento] ) { // tá comparando o primeiro elemento com os outros 2.
                vencedor = false;

            }else if (elemento === '-') {
                vencedor = false;
            }
        }

        if (vencedor) {
            vencedores.push(elemento);
        }
    }

    return vencedores;
}

const verifyDiagonal = (arr) => {
    const diagonal1 = [arr[0][0], arr[1][1], arr[2][2]];
    const diagonal2 = [arr[0][2], arr[1][1], arr[2][0]];

    const callDiagonal = [diagonal1, diagonal2];
    return verifyLines(callDiagonal);
}

const verifyColumn = (arr) => {
    const columns=[];
    for (let i=0; i<arr.length; i++) {
        const column = [];
        for (let j=0; j<arr.length; j++ ){
            column.push(arr[j][i]);
        }
        columns.push(column);
    }
    return verifyLines(columns);
}

const checkWinners = (jogo, totalMoves) => {
    const winners = [verifyLines(jogo), verifyColumn(jogo), verifyDiagonal(jogo)].flat();

    if (winners.length ===1){
        console.log('PARABÉNS ',winners[0],' VOCÊ VENCEU CONGRATULATIONS!!!')
        console.log('Pressione CTRL + C para sair!!!\n\n\n')

    }else if(winners.length > 1){
        console.log('Game Invalid');
        console.log ('APERTE CTRL + C PARA SAIR!!!\n\n\n');

    }else if(winners.length===0 && totalMoves === 9) {
        console.log ('NÂO HÁ GANHADOR O JOGO TERMINOU EMPATADO!!!');
        console.log ('APERTE CTRL + C PARA SAIR!!!\n\n\n');
    }
}

export { checkWinners };

