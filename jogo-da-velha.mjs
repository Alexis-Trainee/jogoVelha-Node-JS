//------------------------------------JOGO DA VELHA-------------------------------------//
//--------------------------------------------------------------------------------------//
import { checkWinners } from './complemento-jogo-da-velha.mjs';
import readlineSync from 'readline-sync';

console.log("**********JOGO DA VELHA**********\n");
let board = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
];

console.log('>>>A primeira jogada sempre se iniciará por  X <<<\n\n');
console.table(board);

const dataInput=(data)=>{
    let checkData= true;
    let result;

    while(checkData) {                                             
        const input = readlineSync.question('  Digite um valor para a  ' + data + ' que esteja entre 0 e 2:\n');
        if (input>=0 && input<=2) {
            result=input;
            checkData=false;

        }else {
            console.log ('>>>' ,input, 'NÂO É UM VALOR VALIDO PARA A LINHA!!!<<<\n');     
        }
    }
    return result;
}

let runGame = true;
let player = 'x';
let cont = 0;

while(runGame) {
    const line = dataInput('LINHA');
    const column = dataInput('COLUNA');

    if(board[line][column]==='-'){
        board[line][column] = player; 
        cont = cont+1;
        console.table(board);

    }else {
        console.log ('ESTÁ COORDENADA JÁ FOI PREENCHIDA. POR FAVOR, TENTE OUTRA COORDENADA!');      
        continue;    
    }

    if (cont >= 5) {
        checkWinners(board, cont);
    }

    if(player === 'x') {
        player = '0';

    }else {
        player = 'x';
    } 

}//runGame
