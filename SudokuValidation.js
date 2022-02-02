// se o espaco do sudoku nao estiver vazio insere no vetor de linha, coluna ou quadrado recebido
function InsertElem(elem,array){
    if(elem != "."){
        array.push(elem);
    }
    return array;
}
// se na linha, coluna ou quadrado recebido tiver alguma duplicata retorna verdadeiro
function HasDuplicates(array){
    if(array.filter(
        (num,idx) => {
            return array.indexOf(num) != idx;
        }).length)
    {
        return true;
    }
    return false;
}
//verifica se o sudoku eh valido
function SudokuValidation(board){
    var col = [];
    var row = [];
    var square = [];
    if (board.length != 9) //testa se o tabuleiro tem 9 linhas
        return false;
    for(var i = 0; i < 9;i++){
        if(board[i].length != 9) // testa se todas as linhas tem 9 colunas
            return false;
    }
    for(var i = 0; i < 9;i++){
        for(var j = 0; j < 9; j++){
            if(board[i][j].search("[^1-9.]") != -1){ //verifica se tem algo que não seja os caracteres validos no sudoku
                return false;
            }
            InsertElem(board[i][j],row);
            InsertElem(board[j][i],col);
            if((i % 3 === 0 && j % 3 === 0)){
                for(var k = i; k < i+3; k++){
                    for(var l = j; l < j+3;l++){
                        InsertElem(board[k][l],square);
                    }
                }
                if(HasDuplicates(square)){
                    return false;
                }
            }
            square = [];
        }
        if(HasDuplicates(row)){
            return false;
        }
        if(HasDuplicates(col)){
            return false;
        }
        
        col = [];
        row = [];
    }
    return true;
}
module.exports = SudokuValidation;
