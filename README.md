# Desafio de código da Novatics!

Bem vindo a minha solução para o desafio de código da Novatics!

Este desafio faz parte do processo seletivo da Novatics. Nas seções a seguir terão as instruções de como rodar os códigos fornecidos por mim.

Entretanto, antes de começar peço que tenha o Node(para rodar os programas), npm e o Jest(para execução dos testes unitários) instalados

## Problema 1

<details>
<summary>Manipulando listas</summary>
 - Para visualizar a resolução verifique o arquivo de nome ListManipulation.js
 - Para rodar um teste individual utilize: 
 
 ``` node ListManipulationRun.js ```
 
 após isso será requisitado que forneça uma lista no formato x,x,x,x,x,...,x onde x sejam numeros inteiros.

### Exemplo de como será recebido o resultado:

```
 input: 8,5,10,5,2,4,4,3
 output: 2,3,4,5,8,10

```

</details>

## Problema 2

<details>
<summary>Validando Sudoku</summary>
 - Para visualizar a resolução verifique o arquivo de nome ListManipulation.js
 - Para rodar um teste individual peço que substitua o valor da variavel board com a nova entrada e utilize: 
 
 ``` node SudokuValitationRun.js ```
 

#### Exemplo de como será recebido o resultado:

```
board =
   [["5","3",".",".","7",".",".",".","."]
   ,["6",".",".","1","9","5",".",".","."]
   ,[".","9","8",".",".",".",".","6","."]
   ,["8",".",".",".","6",".",".",".","3"]
   ,["4",".",".","8",".","3",".",".","1"]
   ,["7",".",".",".","2",".",".",".","6"]
   ,[".","6",".",".",".",".","2","8","."]
   ,[".",".",".","4","1","9",".",".","5"]
   ,[".",".",".",".","8",".",".","7","9"]]

   output: true
```
</details>

## Casos de teste 

<details>
 - Para executar o teste unitário de ambos os problemas utilize: 
 
 ``` npm test ```


</details>