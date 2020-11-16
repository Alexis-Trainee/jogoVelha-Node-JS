# jogoVelha-Node-JS
jogo da velha que roda no node js;

	O projeto jogo da velha foi um desafio proposto pelo professor Marcle Rodrigues no curso de desenvolvimento web do Projeto Opala.
	O desafio proposto pelo professor Marcle consistia em desenvolver apartir do zero um um jogo da velha que funcionasse no NODE-JS e que fosse escrito somente com a linguagem de programação javaScript.
	O desafio foi dividido em três passos:
	
	O primeiro passo era a construção do algoritmo que serviria para nortear a construção do jogo, o modelo de algoritmo utilizado foi o algoritmo de descrição narrativa.
	
	O segundo passo foi a implementação do algoritmo, escrever o código do jogo. O jogo foi escrito por partes obedecendo os passos do algoritmo e realizando testes no node-js para checar se estava indo pelo caminho certo.
	
	O jogo é dividido em dois arquivos mjs: 
	O primeiro chamado jogo-da-velha.mjs é responsavél por gerar o tabuleiro na tela do usuario, passar algumas informações importântes para os jogadores como por exemplo, informar que o jogo sempre se inicirá por 'X', solicitar entrada de dados e armazena-lós, testar se o dado recebido é válido, fazer a alternância entre os jogadores 'X' e '0', além de importar funções de outro arquivo chamado complemento-jogo-da-velha-mjs. 
	
	O segundo arquivo chamado de complemento-jogo-da-velha é composto de funções que percorrem um array por suas linhas, colunas e diagonais comparando seus elementos até encontrar um trio em que todos os elementos seja nas linhas, nas diagonais ou nas colunas sejam iguais salvando estes dados em um novo array chamado champions. O mesmo verifica se há elementos iguais apenas em uma linha, coluna ou diagonal com a função checkWinners e retorna para os jogadores a mensagem correspondente ao resultado destes testes, como mensagem de vencedor sendo 'X' ou '0' empate ou invalido, também se verifica a quantidade de jogadas no jogo com a função totalMoves se a quantidade de jogadas for igual a 9 e não houver ganhador o jogo exibirá a mensagem NÂO HÁ GANHADOR O JOGO TERMINOU EMPATADO!!!.
A função checkWinners é exportada para o arquivo jogo-da-velha.mjs que faz uso dela dentro do LOOP chamado runGame. 


DATA: 16/11/2020

