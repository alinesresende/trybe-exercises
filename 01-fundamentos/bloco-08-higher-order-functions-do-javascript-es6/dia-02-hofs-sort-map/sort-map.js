// Conteúdo de Sort()

// Exemplos para fixar o entendimento:
let fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

let scores = [1, 10, 2, 21];
scores.sort(); // [1, 10, 2, 21]
// Observe que 10 vem antes do 2,
// porque '10' vem antes de '2' em ponto de código Unicode.

let things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// Em Unicode, números vêem antes de letras maiúsculas,
// as quais vêem antes das minúsculas.
