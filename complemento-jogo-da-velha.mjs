//----------------------------------------------PARTE DAS FUNCÕES QUE COMPLEMENTAM O JOGO-------------------------------------------//

const verifyLines = (arr) => {
    const champions = [];

    for(let i = 0; i < arr.length; i++) {
        const line = arr[i];
        const element = line[0];
        let champion = true;

        for(let indexElement = 1; indexElement < line.length; indexElement++) {
            if (element !== line[indexElement] ) {
                champion = false;

            }else if (element === '-') {
                champion = false;
            }
        }

        if (champion) {
            champions.push(element);
        }
    }

    return champions;
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

const checkWinners = (game, totalMoves) => {
    const winners = [verifyLines(game), verifyColumn(game), verifyDiagonal(game)].flat();

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

