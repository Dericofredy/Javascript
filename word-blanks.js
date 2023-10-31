/* Preencher espaços em branco

Você recebe frases com algumas palavras faltando, como substantivos, verbos, adjetivos e advérbios. Você então preencherá os pedaços faltantes com palavras de sua escolha de modo que a frase completa faça sentido.

Considere esta frase:

It was really ____, and we ____ ourselves ____.
Essa frase possui três pedaços faltando - um adjetivo, um verbo e um advérbio, e nós podemos adicionar palavras de nossa escolha para completar. Em seguida, podemos atribuir a frase completa para uma variável como se segue:

const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
Nesse desafio, nós fornecemos a você um substantivo, um verbo, um adjetivo e um advérbio. Você precisar formular uma frase completa usando palavras de sua escolha, junto com as palavras que nós fornecemos.

Você precisará usar o operador de concatenação de string + para criar uma nova string, usando as variáveis fornecidas: myNoun, myAdjective, myVerb e myAdverb. Em seguida, você atribuirá a string formada para a variável wordBlanks. Você não deve alterar as palavras atribuídas às variáveis.

Você também precisará se responsabilizar por espaços em sua string, para que na frase final possua espaços entre todas as palavras. O resultado não deve ser uma frase completa.

ATIVIDADE

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Altere apenas o código abaixo desta linha
const wordBlanks = ""; // Altere esta linha
// Altere apenas o código acima desta linha

*/
//EXECUÇÃO

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";


const wordBlanks = myNoun+" "+myAdjective+" "+myVerb+" "+myAdverb; 

console.log(wordBlanks);
