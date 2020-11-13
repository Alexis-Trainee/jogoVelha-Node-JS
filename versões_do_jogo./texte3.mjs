//----------------------------------------------------------------TRANSFORMAR EM FUNÇÂO----------------------------------------------------//
import readlineSync from 'readline-sync';
//var readlineSync = require("readline-sync");
let runGame = true;
let player = 'x';
let cont = 0;
//let line,column;

console.log('_________________________________________________________');

//while(runGame){


//let test1= true;
// let line, column;
//..............................................................................................................................................//
//=> Os comentários aqui feitos são para deixar os erros cometidos explícitos.<=//


let dataInput=(data)=>{
let test1= true;
let resultado;//não tinha no meu código inicíal.

    // line = readlineSync.question('  Digite um valor para a LINHA que esteja entre 0 e 2:\n'); estava fora do laco errado!!!!
    while(test1) {                                              //(LINHA Saiu e deu lugar a data)//
   /*line*/const input = readlineSync.question('  Digite um valor para a  ' + data + ' que esteja entre 0 e 2:\n');// Dentro do laço CERTO!!!//
/*line saiu*/ if (input>=0 && input<=2) {//--------------------------------|concatenou com o parâmetro de dataInput|-------------------------//
    /* test1= true;*///lugar errado!
    resultado=input;//NÃO TINHA NO CÓDIGO.[AQUI RESULTADO QUE ESTAVA VAZIA RECEBE INPUT 'SE' A CONDIÇÃO FOR SATISFEITA.]
    test1 =false;//NÃO TINHA NO CÓDIGO!!!

        }else {
            console.log ('>>>' ,input, 'NÂO É UM VALOR VALIDO PARA A LINHA!!!<<<\n');
            /*test1=false;*///Está no lugar errado. o lugar certo sería 'LINHA 30'
        }

    }
    return resultado;//NÂO TINHA NO CÓDIGO!!!
}    
/*dataInput(line);*///COMO CHAMAR FUNÇÃO DA FORMA ERRADA PARA ESTE EXEMPLO.
const line = dataInput('LINHA');/*'LINHA' e 'COLUNA 'dentro da função dataInput irão substituir +data+ que se encontra na linha 26 */
const column = dataInput('COLUNA');


// UMA AJUDINHA: TODO:
// const dataInput = (name) => {
//     let askInput = true;
//     let result;

//     while(askInput) {
//         const input = readlineSync.question('Digite um valor para a ' + name + ' que esteja entre 0 e 2:');
//         if (input >=0 && input <=2) {
//             result = input
//             askInput = false
//         } else {
//             console.log ('>>>' , input,  'NÂO É UM VALOR VALIDO PARA A LINHA!!!<<<\n');
//         }
//     }

//     return result;
// }

// const line = dataInput('line');
// const column = dataInput('column');







// break;
//}//test1

// }



//__________________________________________________FIM FUNCTION------------------------------------------------------------------//
// let test2 = true;
// while(test2){
//     console.log('_________________________________________________________');
//     column = readlineSync.question('  Digite um valor para a COLUNA que esteja entre 0 e 2: \n');

//     if(column>=0 && column<=2) {
//         runGame =true;
//         test2=true;

//     }else {
//         console.log ('>>>' ,column, 'NÂO É UM VALOR VALIDO PARA A COLUNA!!!<<<\n');
//         continue;

//     }
//     break;
// }//teste2

// if(board[line][column]==='-'){
//     board[line][column] = player;
//     cont = cont+1;
//     console.table(board);

// }else {
//     console.log ('ESTÁ COORDENADA JÁ FOI PREENCHIDA. POR FAVOR, TENTE OUTRA COORDENADA!');
//     continue;
// }



// if (cont >= 5) {
//     checkWinners(board, cont);
// }//while cont

// if(player === 'x') {
//     player = '0';

// }else {
//     player = 'x';

// } 

// }//runGame
