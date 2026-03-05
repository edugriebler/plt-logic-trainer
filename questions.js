const QUESTIONS = [

{
id:"Q001",
type:"output",
topic:"operators",
difficulty:"easy",
prompt:"Qual será o valor impresso?",
code:`x <- 5
y <- 3
z <- x + y
escreva(z)`,
options:{
A:"8",
B:"15",
C:"2",
D:"5",
E:"3"
},
answer:"A",
explanation:"5 + 3 = 8."
},

{
id:"Q002",
type:"output",
topic:"operators",
difficulty:"easy",
prompt:"Qual será o resultado?",
code:`x <- 10
y <- 2
z <- x / y
escreva(z)`,
options:{
A:"20",
B:"5",
C:"8",
D:"12",
E:"2"
},
answer:"B",
explanation:"10 dividido por 2 é 5."
},

{
id:"Q003",
type:"output",
topic:"operators",
difficulty:"easy",
prompt:"Qual valor será exibido?",
code:`x <- 7
y <- 2
z <- x mod y
escreva(z)`,
options:{
A:"3",
B:"1",
C:"2",
D:"5",
E:"0"
},
answer:"B",
explanation:"7 mod 2 é o resto da divisão: 1."
},

{
id:"Q004",
type:"conditionals",
topic:"if_else",
difficulty:"easy",
prompt:"Qual será a saída?",
code:`x <- 10
se (x > 5) entao
   escreva("A")
senao
   escreva("B")
fimse`,
options:{
A:"A",
B:"B",
C:"AB",
D:"Nenhuma",
E:"Erro"
},
answer:"A",
explanation:"10 é maior que 5."
},

{
id:"Q005",
type:"conditionals",
topic:"if_else",
difficulty:"easy",
prompt:"Qual valor será impresso?",
code:`x <- 4
se (x >= 5) entao
   escreva("SIM")
senao
   escreva("NAO")
fimse`,
options:{
A:"SIM",
B:"NAO",
C:"4",
D:"0",
E:"Erro"
},
answer:"B",
explanation:"4 não é maior ou igual a 5."
},

{
id:"Q006",
type:"loops",
topic:"for_loop",
difficulty:"easy",
prompt:"Quantas vezes a palavra OI será exibida?",
code:`para i <- 1 ate 3 faca
   escreva("OI")
fimpara`,
options:{
A:"1",
B:"2",
C:"3",
D:"4",
E:"5"
},
answer:"C",
explanation:"O laço executa 3 vezes."
},

{
id:"Q007",
type:"loops",
topic:"for_loop",
difficulty:"easy",
prompt:"Qual será a saída final?",
code:`soma <- 0
para i <- 1 ate 3 faca
   soma <- soma + i
fimpara
escreva(soma)`,
options:{
A:"3",
B:"6",
C:"9",
D:"5",
E:"4"
},
answer:"B",
explanation:"1 + 2 + 3 = 6."
},

{
id:"Q008",
type:"loops",
topic:"while_loop",
difficulty:"easy",
prompt:"Quantas vezes o loop executa?",
code:`i <- 1
enquanto (i <= 3) faca
   escreva(i)
   i <- i + 1
fimenquanto`,
options:{
A:"1",
B:"2",
C:"3",
D:"4",
E:"5"
},
answer:"C",
explanation:"Executa para i=1,2,3."
},

{
id:"Q009",
type:"loops",
topic:"while_loop",
difficulty:"easy",
prompt:"Qual será o valor final de x?",
code:`x <- 0
i <- 1
enquanto (i <= 4) faca
   x <- x + 1
   i <- i + 1
fimenquanto
escreva(x)`,
options:{
A:"3",
B:"4",
C:"5",
D:"2",
E:"1"
},
answer:"B",
explanation:"O loop executa 4 vezes."
},

{
id:"Q010",
type:"variables",
topic:"variables",
difficulty:"easy",
prompt:"Qual será o valor final de y?",
code:`x <- 5
y <- x + 3
escreva(y)`,
options:{
A:"8",
B:"5",
C:"3",
D:"2",
E:"10"
},
answer:"A",
explanation:"5 + 3 = 8."
},

{
id:"Q011",
type:"output",
topic:"operators",
difficulty:"easy",
prompt:"Qual será o resultado?",
code:`x <- 6
y <- 2
z <- x * y
escreva(z)`,
options:{
A:"8",
B:"12",
C:"6",
D:"4",
E:"10"
},
answer:"B",
explanation:"6 * 2 = 12."
},

{
id:"Q012",
type:"output",
topic:"operators",
difficulty:"easy",
prompt:"Qual valor será exibido?",
code:`x <- 9
y <- 3
z <- x / y
escreva(z)`,
options:{
A:"6",
B:"3",
C:"9",
D:"12",
E:"2"
},
answer:"B",
explanation:"9 dividido por 3 é 3."
},

{
id:"Q013",
type:"conditionals",
topic:"if_else",
difficulty:"easy",
prompt:"Qual será a saída?",
code:`x <- 3
se (x < 5) entao
   escreva("OK")
senao
   escreva("ERRO")
fimse`,
options:{
A:"OK",
B:"ERRO",
C:"3",
D:"5",
E:"Nenhuma"
},
answer:"A",
explanation:"3 é menor que 5."
},

{
id:"Q014",
type:"conditionals",
topic:"if_else",
difficulty:"easy",
prompt:"Qual será o resultado?",
code:`x <- 8
se (x == 8) entao
   escreva("IGUAL")
senao
   escreva("DIF")
fimse`,
options:{
A:"IGUAL",
B:"DIF",
C:"8",
D:"0",
E:"Erro"
},
answer:"A",
explanation:"x é igual a 8."
},

{
id:"Q015",
type:"loops",
topic:"for_loop",
difficulty:"easy",
prompt:"Qual será o valor final de soma?",
code:`soma <- 0
para i <- 1 ate 4 faca
   soma <- soma + 1
fimpara
escreva(soma)`,
options:{
A:"1",
B:"2",
C:"3",
D:"4",
E:"5"
},
answer:"D",
explanation:"Incrementa 1 quatro vezes."
},

{
id:"Q016",
type:"loops",
topic:"for_loop",
difficulty:"easy",
prompt:"Qual será a saída?",
code:`para i <- 1 ate 2 faca
   escreva("A")
fimpara`,
options:{
A:"A",
B:"AA",
C:"AAA",
D:"AAAA",
E:"Nenhuma"
},
answer:"B",
explanation:"Executa duas vezes."
},

{
id:"Q017",
type:"loops",
topic:"while_loop",
difficulty:"easy",
prompt:"Qual será o valor final de i?",
code:`i <- 1
enquanto (i < 5) faca
   i <- i + 1
fimenquanto
escreva(i)`,
options:{
A:"4",
B:"5",
C:"6",
D:"3",
E:"2"
},
answer:"B",
explanation:"Loop termina quando i = 5."
},

{
id:"Q018",
type:"variables",
topic:"variables",
difficulty:"easy",
prompt:"Qual valor será mostrado?",
code:`a <- 4
b <- 6
c <- a + b
escreva(c)`,
options:{
A:"10",
B:"8",
C:"6",
D:"4",
E:"12"
},
answer:"A",
explanation:"4 + 6 = 10."
},

{
id:"Q019",
type:"operators",
topic:"operators",
difficulty:"easy",
prompt:"Qual será o resultado?",
code:`x <- 8
y <- 2
z <- x - y
escreva(z)`,
options:{
A:"6",
B:"4",
C:"8",
D:"10",
E:"2"
},
answer:"A",
explanation:"8 - 2 = 6."
},

{
id:"Q020",
type:"operators",
topic:"operators",
difficulty:"easy",
prompt:"Qual será o resultado?",
code:`x <- 3
y <- 3
z <- x * y
escreva(z)`,
options:{
A:"6",
B:"9",
C:"3",
D:"12",
E:"0"
},
answer:"B",
explanation:"3 vezes 3 é 9."
},

{
id:"Q021",
type:"loops",
topic:"for_loop",
difficulty:"easy",
prompt:"Quantas vezes o número será exibido?",
code:`para i <- 1 ate 5 faca
   escreva(i)
fimpara`,
options:{
A:"4",
B:"5",
C:"6",
D:"3",
E:"2"
},
answer:"B",
explanation:"Executa de 1 até 5."
},

{
id:"Q022",
type:"loops",
topic:"for_loop",
difficulty:"easy",
prompt:"Qual será o valor final?",
code:`x <- 0
para i <- 1 ate 3 faca
   x <- x + 2
fimpara
escreva(x)`,
options:{
A:"4",
B:"5",
C:"6",
D:"3",
E:"2"
},
answer:"C",
explanation:"Incrementa 2 três vezes."
},

{
id:"Q023",
type:"conditionals",
topic:"if_else",
difficulty:"easy",
prompt:"Qual será a saída?",
code:`x <- 1
se (x == 1) entao
   escreva("VERDADE")
senao
   escreva("FALSO")
fimse`,
options:{
A:"VERDADE",
B:"FALSO",
C:"1",
D:"0",
E:"Erro"
},
answer:"A",
explanation:"1 é igual a 1."
},

{
id:"Q024",
type:"conditionals",
topic:"if_else",
difficulty:"easy",
prompt:"Qual será o resultado?",
code:`x <- 6
se (x < 3) entao
   escreva("A")
senao
   escreva("B")
fimse`,
options:{
A:"A",
B:"B",
C:"AB",
D:"6",
E:"Erro"
},
answer:"B",
explanation:"6 não é menor que 3."
},

{
id:"Q025",
type:"output",
topic:"operators",
difficulty:"easy",
prompt:"Qual será o valor final?",
code:`x <- 5
x <- x + 5
escreva(x)`,
options:{
A:"5",
B:"10",
C:"15",
D:"20",
E:"0"
},
answer:"B",
explanation:"5 + 5 = 10."
}
,
{
id:"Q026",
type:"conditionals",
topic:"nested_if",
difficulty:"medium",
prompt:"Qual será a saída?",
code:`x <- 7
se (x > 5) entao
   se (x < 10) entao
      escreva("A")
   senao
      escreva("B")
   fimse
senao
   escreva("C")
fimse`,
options:{
A:"A",
B:"B",
C:"C",
D:"AC",
E:"Nenhuma"
},
answer:"A",
explanation:"x > 5 é verdadeiro e x < 10 também, então imprime A."
},

{
id:"Q027",
type:"conditionals",
topic:"nested_if",
difficulty:"medium",
prompt:"Qual será a saída?",
code:`x <- 12
se (x > 5) entao
   se (x < 10) entao
      escreva("A")
   senao
      escreva("B")
   fimse
senao
   escreva("C")
fimse`,
options:{
A:"A",
B:"B",
C:"C",
D:"ABC",
E:"Erro"
},
answer:"B",
explanation:"x > 5 é verdadeiro, mas x < 10 é falso, então imprime B."
},

{
id:"Q028",
type:"loops",
topic:"do_while",
difficulty:"easy",
prompt:"Quantas vezes o número 1 será impresso?",
code:`i <- 1
repita
   escreva(i)
   i <- i + 1
ate (i > 3)`,
options:{
A:"1",
B:"2",
C:"3",
D:"4",
E:"0"
},
answer:"C",
explanation:"Imprime i=1,2,3. Para quando i vira 4."
},

{
id:"Q029",
type:"loops",
topic:"do_while",
difficulty:"medium",
prompt:"Qual será o valor final de soma?",
code:`i <- 1
soma <- 0
repita
   soma <- soma + i
   i <- i + 1
ate (i > 4)
escreva(soma)`,
options:{
A:"6",
B:"10",
C:"4",
D:"7",
E:"9"
},
answer:"A",
explanation:"Soma 1+2+3 = 6. O loop para quando i fica 5 (i>4)."
},

{
id:"Q030",
type:"loops",
topic:"for_loop",
difficulty:"medium",
prompt:"Qual será o valor final de x?",
code:`x <- 1
para i <- 1 ate 4 faca
   x <- x * 2
fimpara
escreva(x)`,
options:{
A:"8",
B:"16",
C:"4",
D:"2",
E:"32"
},
answer:"B",
explanation:"Dobra 4 vezes: 1→2→4→8→16."
},

{
id:"Q031",
type:"loops",
topic:"while_loop",
difficulty:"medium",
prompt:"Qual será a saída final?",
code:`i <- 10
cont <- 0
enquanto (i >= 6) faca
   cont <- cont + 1
   i <- i - 1
fimenquanto
escreva(cont)`,
options:{
A:"4",
B:"5",
C:"6",
D:"3",
E:"10"
},
answer:"B",
explanation:"i passa por 10,9,8,7,6 (5 vezes)."
},

{
id:"Q032",
type:"output",
topic:"operators",
difficulty:"medium",
prompt:"Qual será o valor de res?",
code:`a <- 2
b <- 3
c <- 4
res <- a + b * c
escreva(res)`,
options:{
A:"20",
B:"14",
C:"24",
D:"9",
E:"18"
},
answer:"B",
explanation:"Multiplicação primeiro: 3*4=12, depois 2+12=14."
},

{
id:"Q033",
type:"output",
topic:"operators",
difficulty:"medium",
prompt:"Qual será o valor de res?",
code:`a <- 10
b <- 3
res <- (a - b) * 2
escreva(res)`,
options:{
A:"14",
B:"12",
C:"10",
D:"7",
E:"20"
},
answer:"A",
explanation:"(10-3)=7, 7*2=14."
},

{
id:"Q034",
type:"reasoning",
topic:"operators",
difficulty:"medium",
prompt:"Qual alternativa descreve melhor o operador `mod`?",
code:null,
options:{
A:"Ele soma dois valores",
B:"Ele mostra o resto da divisão",
C:"Ele multiplica por 2",
D:"Ele divide e arredonda para cima",
E:"Ele compara se são iguais"
},
answer:"B",
explanation:"`mod` retorna o resto de uma divisão inteira."
},

{
id:"Q035",
type:"debug",
topic:"if_else",
difficulty:"medium",
prompt:"O objetivo é imprimir 'PAR' quando n for par. Qual condição está correta?",
code:`leia(n)
se ( ______ ) entao
   escreva("PAR")
senao
   escreva("IMPAR")
fimse`,
options:{
A:"n / 2 == 0",
B:"n mod 2 == 0",
C:"n mod 2 == 1",
D:"n * 2 == 0",
E:"n + 2 == 0"
},
answer:"B",
explanation:"Número par tem resto 0 quando dividido por 2."
},

{
id:"Q036",
type:"debug",
topic:"for_loop",
difficulty:"medium",
prompt:"O programa deveria imprimir 1 2 3 4 5. Qual correção é a melhor?",
code:`para i <- 1 ate 5 faca
   escreva(i)
fimpara`,
options:{
A:"Trocar 1 por 0",
B:"Trocar 5 por 4",
C:"Remover o escreva(i)",
D:"Está correto, já imprime 1 até 5",
E:"Colocar i <- i + 1 dentro do para"
},
answer:"D",
explanation:"O laço para de 1 até 5 já imprime 1,2,3,4,5."
},

{
id:"Q037",
type:"loops",
topic:"for_loop",
difficulty:"medium",
prompt:"Qual será o valor final de soma?",
code:`soma <- 0
para i <- 2 ate 10 passo 2 faca
   soma <- soma + i
fimpara
escreva(soma)`,
options:{
A:"20",
B:"24",
C:"30",
D:"12",
E:"18"
},
answer:"C",
explanation:"Soma dos pares 2+4+6+8+10=30."
},

{
id:"Q038",
type:"loops",
topic:"while_loop",
difficulty:"medium",
prompt:"Qual será o valor final de x?",
code:`x <- 1
i <- 1
enquanto (i <= 3) faca
   x <- x + x
   i <- i + 1
fimenquanto
escreva(x)`,
options:{
A:"4",
B:"6",
C:"8",
D:"2",
E:"16"
},
answer:"C",
explanation:"x dobra 3 vezes: 1→2→4→8."
},

{
id:"Q039",
type:"conditionals",
topic:"if_else",
difficulty:"medium",
prompt:"Qual será a saída?",
code:`nota <- 6
se (nota >= 7) entao
   escreva("APROVADO")
senao
   escreva("RECUPERACAO")
fimse`,
options:{
A:"APROVADO",
B:"RECUPERACAO",
C:"6",
D:"REPROVADO",
E:"Erro"
},
answer:"B",
explanation:"6 não é >= 7."
},

{
id:"Q040",
type:"conditionals",
topic:"nested_if",
difficulty:"medium",
prompt:"Qual será a saída?",
code:`idade <- 17
autorizacao <- verdadeiro

se (idade >= 18) entao
   escreva("ENTRA")
senao
   se (autorizacao == verdadeiro) entao
      escreva("ENTRA COM AUTORIZACAO")
   senao
      escreva("NAO ENTRA")
   fimse
fimse`,
options:{
A:"ENTRA",
B:"ENTRA COM AUTORIZACAO",
C:"NAO ENTRA",
D:"ENTRA NAO ENTRA",
E:"Erro"
},
answer:"B",
explanation:"Idade < 18, mas tem autorização."
},

{
id:"Q041",
type:"reasoning",
topic:"variables",
difficulty:"medium",
prompt:"Qual afirmação é verdadeira sobre variável auxiliar na troca de valores?",
code:null,
options:{
A:"Não serve para nada",
B:"Evita perder um valor durante a troca",
C:"Só funciona com números pares",
D:"Só existe em Java",
E:"Troca sempre sem precisar de atribuições"
},
answer:"B",
explanation:"Sem auxiliar, você pode sobrescrever um valor e perder o original."
},

{
id:"Q042",
type:"functions",
topic:"functions",
difficulty:"medium",
prompt:"Qual valor será impresso?",
code:`funcao dobro(n: inteiro): inteiro
inicio
   retorne n * 2
fimfuncao

x <- dobro(6)
escreva(x)`,
options:{
A:"6",
B:"8",
C:"10",
D:"12",
E:"18"
},
answer:"D",
explanation:"dobro(6) retorna 12."
},

{
id:"Q043",
type:"functions",
topic:"functions",
difficulty:"medium",
prompt:"Qual será a saída final?",
code:`funcao soma(a: inteiro, b: inteiro): inteiro
inicio
   retorne a + b
fimfuncao

escreva( soma(4, 5) )`,
options:{
A:"9",
B:"45",
C:"20",
D:"0",
E:"Erro"
},
answer:"A",
explanation:"4 + 5 = 9."
},

{
id:"Q044",
type:"arrays",
topic:"arrays",
difficulty:"easy",
prompt:"Um vetor v tem os valores v[1]=3, v[2]=7, v[3]=2. Qual é v[2]?",
code:null,
options:{
A:"3",
B:"7",
C:"2",
D:"12",
E:"0"
},
answer:"B",
explanation:"v[2] é o segundo elemento: 7."
},

{
id:"Q045",
type:"arrays",
topic:"arrays",
difficulty:"medium",
prompt:"Qual será o valor final de soma?",
code:`v[1] <- 2
v[2] <- 4
v[3] <- 6
soma <- 0

para i <- 1 ate 3 faca
   soma <- soma + v[i]
fimpara

escreva(soma)`,
options:{
A:"6",
B:"10",
C:"12",
D:"14",
E:"8"
},
answer:"C",
explanation:"2 + 4 + 6 = 12."
},

{
id:"Q046",
type:"debug",
topic:"arrays",
difficulty:"medium",
prompt:"Qual alternativa percorre corretamente um vetor v[1..5] somando tudo?",
code:`soma <- 0
para i <- 1 ate 5 faca
   soma <- soma + v[i]
fimpara`,
options:{
A:"Está correto",
B:"Deveria começar em i <- 0",
C:"Deveria ir até 4",
D:"Deveria usar enquanto sem condição",
E:"Deveria usar mod no lugar de +"
},
answer:"A",
explanation:"Como estamos usando índice 1..5, o laço está correto."
},

{
id:"Q047",
type:"output",
topic:"operators",
difficulty:"medium",
prompt:"Qual será o valor exibido?",
code:`x <- 5
y <- 2
res <- x * x - y
escreva(res)`,
options:{
A:"23",
B:"25",
C:"15",
D:"21",
E:"27"
},
answer:"A",
explanation:"x*x = 25; 25 - 2 = 23."
},

{
id:"Q048",
type:"loops",
topic:"do_while",
difficulty:"medium",
prompt:"Qual será a saída final?",
code:`i <- 5
repita
   escreva(i)
   i <- i - 1
ate (i == 2)`,
options:{
A:"5 4 3",
B:"5 4 3 2",
C:"5 4",
D:"5 4 3 2 1",
E:"Somente 5"
},
answer:"A",
explanation:"Imprime 5,4,3 e para quando i vira 2 (condição i==2)."
},

{
id:"Q049",
type:"reasoning",
topic:"loops",
difficulty:"medium",
prompt:"Qual frase é verdadeira sobre `repita ... ate`?",
code:null,
options:{
A:"Pode executar 0 vezes",
B:"Sempre executa pelo menos 1 vez",
C:"Só funciona com for",
D:"Precisa de variável auxiliar obrigatória",
E:"Não pode ter condição"
},
answer:"B",
explanation:"Como a condição é verificada no final, executa ao menos uma vez."
},

{
id:"Q050",
type:"debug",
topic:"operators",
difficulty:"medium",
prompt:"Para descobrir se um número é múltiplo de 3, qual condição é a correta?",
code:`se ( ______ ) entao
   escreva("MULTIPLO")
senao
   escreva("NAO")
fimse`,
options:{
A:"n / 3 == 0",
B:"n mod 3 == 0",
C:"n mod 3 == 1",
D:"n - 3 == 0",
E:"n + 3 == 0"
},
answer:"B",
explanation:"Múltiplo de 3 tem resto 0 ao dividir por 3."
}

,
{
id:"Q051",
type:"loops",
topic:"for_loop",
difficulty:"medium",
prompt:"Qual será o valor final de soma?",
code:`soma <- 0
para i <- 1 ate 5 faca
   soma <- soma + i
fimpara
escreva(soma)`,
options:{
A:"10",
B:"15",
C:"20",
D:"5",
E:"12"
},
answer:"B",
explanation:"1 + 2 + 3 + 4 + 5 = 15."
},

{
id:"Q052",
type:"loops",
topic:"while_loop",
difficulty:"medium",
prompt:"Qual será o valor final de x?",
code:`x <- 0
i <- 1
enquanto (i <= 5) faca
   x <- x + 2
   i <- i + 1
fimenquanto
escreva(x)`,
options:{
A:"10",
B:"8",
C:"6",
D:"5",
E:"12"
},
answer:"A",
explanation:"Incrementa 2 cinco vezes."
},

{
id:"Q053",
type:"conditionals",
topic:"if_else",
difficulty:"medium",
prompt:"Qual será a saída?",
code:`x <- 9
se (x mod 2 == 0) entao
   escreva("PAR")
senao
   escreva("IMPAR")
fimse`,
options:{
A:"PAR",
B:"IMPAR",
C:"9",
D:"0",
E:"Erro"
},
answer:"B",
explanation:"9 mod 2 = 1, então é ímpar."
},

{
id:"Q054",
type:"loops",
topic:"for_loop",
difficulty:"medium",
prompt:"Quantas vezes o número será exibido?",
code:`para i <- 3 ate 7 faca
   escreva(i)
fimpara`,
options:{
A:"3",
B:"4",
C:"5",
D:"6",
E:"7"
},
answer:"C",
explanation:"3,4,5,6,7 → 5 números."
},

{
id:"Q055",
type:"operators",
topic:"operators",
difficulty:"medium",
prompt:"Qual será o resultado?",
code:`x <- 4
y <- 5
z <- x * y + 2
escreva(z)`,
options:{
A:"20",
B:"22",
C:"18",
D:"24",
E:"10"
},
answer:"B",
explanation:"4*5=20 +2 = 22."
},

{
id:"Q056",
type:"arrays",
topic:"arrays",
difficulty:"medium",
prompt:"Qual valor será exibido?",
code:`v[1] <- 5
v[2] <- 8
v[3] <- 3
escreva(v[3])`,
options:{
A:"5",
B:"8",
C:"3",
D:"16",
E:"0"
},
answer:"C",
explanation:"v[3] contém 3."
},

{
id:"Q057",
type:"arrays",
topic:"arrays",
difficulty:"medium",
prompt:"Qual será a soma?",
code:`v[1] <- 1
v[2] <- 2
v[3] <- 3
v[4] <- 4
soma <- 0

para i <- 1 ate 4 faca
   soma <- soma + v[i]
fimpara

escreva(soma)`,
options:{
A:"8",
B:"9",
C:"10",
D:"12",
E:"6"
},
answer:"C",
explanation:"1+2+3+4 = 10."
},

{
id:"Q058",
type:"functions",
topic:"functions",
difficulty:"medium",
prompt:"Qual será o resultado?",
code:`funcao quadrado(n: inteiro): inteiro
inicio
   retorne n * n
fimfuncao

escreva( quadrado(5) )`,
options:{
A:"5",
B:"10",
C:"20",
D:"25",
E:"15"
},
answer:"D",
explanation:"5*5 = 25."
},

{
id:"Q059",
type:"functions",
topic:"functions",
difficulty:"medium",
prompt:"Qual será a saída?",
code:`funcao soma(a,b: inteiro): inteiro
inicio
   retorne a + b
fimfuncao

x <- soma(3,4)
escreva(x + 1)`,
options:{
A:"7",
B:"8",
C:"9",
D:"6",
E:"5"
},
answer:"B",
explanation:"3+4=7, depois +1 = 8."
},

{
id:"Q060",
type:"loops",
topic:"while_loop",
difficulty:"medium",
prompt:"Qual será o valor final de i?",
code:`i <- 2
enquanto (i < 10) faca
   i <- i + 3
fimenquanto
escreva(i)`,
options:{
A:"8",
B:"9",
C:"11",
D:"10",
E:"12"
},
answer:"C",
explanation:"2→5→8→11."
},

{
id:"Q061",
type:"conditionals",
topic:"nested_if",
difficulty:"medium",
prompt:"Qual será a saída?",
code:`x <- 5
se (x > 3) entao
   se (x == 5) entao
      escreva("OK")
   senao
      escreva("A")
   fimse
fimse`,
options:{
A:"OK",
B:"A",
C:"5",
D:"Erro",
E:"Nenhuma"
},
answer:"A",
explanation:"As duas condições são verdadeiras."
},

{
id:"Q062",
type:"loops",
topic:"for_loop",
difficulty:"medium",
prompt:"Qual será a saída?",
code:`para i <- 1 ate 3 faca
   para j <- 1 ate 2 faca
      escreva("*")
   fimpara
fimpara`,
options:{
A:"3",
B:"5",
C:"6",
D:"4",
E:"2"
},
answer:"C",
explanation:"3×2 = 6 impressões."
},

{
id:"Q063",
type:"operators",
topic:"operators",
difficulty:"medium",
prompt:"Qual será o valor de res?",
code:`res <- 10 - 3 * 2
escreva(res)`,
options:{
A:"14",
B:"7",
C:"4",
D:"8",
E:"5"
},
answer:"C",
explanation:"3*2=6 → 10-6=4."
},

{
id:"Q064",
type:"variables",
topic:"variables",
difficulty:"easy",
prompt:"Qual será o valor final de x?",
code:`x <- 3
x <- x + 4
x <- x + 2
escreva(x)`,
options:{
A:"7",
B:"9",
C:"5",
D:"6",
E:"3"
},
answer:"B",
explanation:"3+4+2 = 9."
},

{
id:"Q065",
type:"loops",
topic:"for_loop",
difficulty:"medium",
prompt:"Quantos números serão exibidos?",
code:`para i <- 5 ate 9 faca
   escreva(i)
fimpara`,
options:{
A:"3",
B:"4",
C:"5",
D:"6",
E:"7"
},
answer:"C",
explanation:"5,6,7,8,9."
},

{
id:"Q066",
type:"conditionals",
topic:"if_else",
difficulty:"medium",
prompt:"Qual será a saída?",
code:`idade <- 20
se (idade >= 18) entao
   escreva("MAIOR")
senao
   escreva("MENOR")
fimse`,
options:{
A:"MENOR",
B:"MAIOR",
C:"20",
D:"Erro",
E:"0"
},
answer:"B",
explanation:"20 ≥ 18."
},

{
id:"Q067",
type:"arrays",
topic:"arrays",
difficulty:"medium",
prompt:"Qual valor será exibido?",
code:`v[1] <- 4
v[2] <- 7
v[3] <- 9
escreva(v[1] + v[3])`,
options:{
A:"13",
B:"12",
C:"9",
D:"11",
E:"7"
},
answer:"A",
explanation:"4 + 9 = 13."
},

{
id:"Q068",
type:"loops",
topic:"while_loop",
difficulty:"medium",
prompt:"Qual será a saída final?",
code:`i <- 1
soma <- 0
enquanto (i <= 3) faca
   soma <- soma + i
   i <- i + 1
fimenquanto
escreva(soma)`,
options:{
A:"3",
B:"4",
C:"5",
D:"6",
E:"7"
},
answer:"D",
explanation:"1+2+3=6."
},

{
id:"Q069",
type:"operators",
topic:"operators",
difficulty:"medium",
prompt:"Qual será o valor final?",
code:`x <- 6
y <- 2
res <- x / y + 3
escreva(res)`,
options:{
A:"6",
B:"5",
C:"4",
D:"7",
E:"3"
},
answer:"A",
explanation:"6/2=3 → 3+3=6."
},

{
id:"Q070",
type:"loops",
topic:"for_loop",
difficulty:"medium",
prompt:"Qual será o valor final de cont?",
code:`cont <- 0
para i <- 2 ate 8 passo 2 faca
   cont <- cont + 1
fimpara
escreva(cont)`,
options:{
A:"3",
B:"4",
C:"5",
D:"6",
E:"2"
},
answer:"B",
explanation:"2,4,6,8 → 4 vezes."
},

{
id:"Q071",
type:"functions",
topic:"functions",
difficulty:"medium",
prompt:"Qual será o valor exibido?",
code:`funcao triplo(n: inteiro): inteiro
inicio
   retorne n * 3
fimfuncao

escreva( triplo(4) )`,
options:{
A:"7",
B:"12",
C:"8",
D:"9",
E:"16"
},
answer:"B",
explanation:"4*3 = 12."
},

{
id:"Q072",
type:"reasoning",
topic:"loops",
difficulty:"medium",
prompt:"Qual estrutura é usada quando sabemos exatamente quantas vezes o loop vai executar?",
code:null,
options:{
A:"while",
B:"repita ate",
C:"for",
D:"if",
E:"switch"
},
answer:"C",
explanation:"O loop for é usado quando sabemos o número de repetições."
},

{
id:"Q073",
type:"debug",
topic:"operators",
difficulty:"medium",
prompt:"Qual operador retorna o resto da divisão?",
code:null,
options:{
A:"+",
B:"/",
C:"mod",
D:"*",
E:"-"
},
answer:"C",
explanation:"mod retorna o resto."
},

{
id:"Q074",
type:"arrays",
topic:"arrays",
difficulty:"medium",
prompt:"Qual será o valor final?",
code:`v[1] <- 2
v[2] <- 5
v[3] <- 1
maior <- v[1]

para i <- 2 ate 3 faca
   se (v[i] > maior) entao
      maior <- v[i]
   fimse
fimpara

escreva(maior)`,
options:{
A:"1",
B:"2",
C:"3",
D:"5",
E:"7"
},
answer:"D",
explanation:"Maior valor do vetor é 5."
},

{
id:"Q075",
type:"reasoning",
topic:"variables",
difficulty:"medium",
prompt:"Qual é a principal função de uma variável em programação?",
code:null,
options:{
A:"Guardar valores na memória",
B:"Executar loops",
C:"Criar funções",
D:"Fazer comparação",
E:"Encerrar o programa"
},
answer:"A",
explanation:"Variáveis armazenam dados."
}
,
{
id:"Q076",
type:"loops",
topic:"for_loop",
difficulty:"hard",
prompt:"Qual será o valor final de soma?",
code:`soma <- 0
para i <- 1 ate 5 faca
   para j <- 1 ate 2 faca
      soma <- soma + 1
   fimpara
fimpara

escreva(soma)`,
options:{
A:"5",
B:"7",
C:"8",
D:"10",
E:"12"
},
answer:"D",
explanation:"5 loops externos × 2 internos = 10."
},

{
id:"Q077",
type:"loops",
topic:"for_loop",
difficulty:"hard",
prompt:"Quantas vezes o número será exibido?",
code:`para i <- 1 ate 4 faca
   para j <- 1 ate i faca
      escreva(j)
   fimpara
fimpara`,
options:{
A:"10",
B:"8",
C:"6",
D:"12",
E:"4"
},
answer:"A",
explanation:"1 + 2 + 3 + 4 = 10."
},

{
id:"Q078",
type:"loops",
topic:"while_loop",
difficulty:"hard",
prompt:"Qual será o valor final de x?",
code:`x <- 1
i <- 1

enquanto (i <= 4) faca
   x <- x + i
   i <- i + 1
fimenquanto

escreva(x)`,
options:{
A:"10",
B:"11",
C:"9",
D:"8",
E:"7"
},
answer:"B",
explanation:"1 + 1 + 2 + 3 + 4 = 11."
},

{
id:"Q079",
type:"arrays",
topic:"arrays",
difficulty:"hard",
prompt:"Qual será a soma final?",
code:`v[1] <- 3
v[2] <- 5
v[3] <- 7

soma <- 0

para i <- 1 ate 3 faca
   soma <- soma + v[i] * 2
fimpara

escreva(soma)`,
options:{
A:"15",
B:"20",
C:"30",
D:"25",
E:"35"
},
answer:"C",
explanation:"(3×2)+(5×2)+(7×2)=6+10+14=30."
},

{
id:"Q080",
type:"functions",
topic:"functions",
difficulty:"hard",
prompt:"Qual será o valor exibido?",
code:`funcao soma(a,b: inteiro): inteiro
inicio
   retorne a + b
fimfuncao

funcao dobro(x: inteiro): inteiro
inicio
   retorne x * 2
fimfuncao

escreva( dobro( soma(3,2) ) )`,
options:{
A:"5",
B:"7",
C:"10",
D:"8",
E:"6"
},
answer:"C",
explanation:"3+2=5 → dobro(5)=10."
},

{
id:"Q081",
type:"conditionals",
topic:"nested_if",
difficulty:"hard",
prompt:"Qual será a saída?",
code:`x <- 15

se (x > 10) entao
   se (x < 20) entao
      escreva("A")
   senao
      escreva("B")
   fimse
senao
   escreva("C")
fimse`,
options:{
A:"A",
B:"B",
C:"C",
D:"AC",
E:"Erro"
},
answer:"A",
explanation:"15 está entre 10 e 20."
},

{
id:"Q082",
type:"loops",
topic:"for_loop",
difficulty:"hard",
prompt:"Qual será o valor final de cont?",
code:`cont <- 0

para i <- 1 ate 3 faca
   para j <- 1 ate 3 faca
      cont <- cont + 1
   fimpara
fimpara

escreva(cont)`,
options:{
A:"6",
B:"9",
C:"12",
D:"3",
E:"8"
},
answer:"B",
explanation:"3 × 3 = 9."
},

{
id:"Q083",
type:"operators",
topic:"operators",
difficulty:"hard",
prompt:"Qual será o resultado?",
code:`x <- 8
y <- 3

res <- x * y + x

escreva(res)`,
options:{
A:"24",
B:"32",
C:"28",
D:"30",
E:"26"
},
answer:"B",
explanation:"8×3=24 → 24+8=32."
},

{
id:"Q084",
type:"arrays",
topic:"arrays",
difficulty:"hard",
prompt:"Qual valor será exibido?",
code:`v[1] <- 2
v[2] <- 4
v[3] <- 6

maior <- v[1]

para i <- 2 ate 3 faca
   se (v[i] > maior) entao
      maior <- v[i]
   fimse
fimpara

escreva(maior)`,
options:{
A:"2",
B:"4",
C:"6",
D:"8",
E:"10"
},
answer:"C",
explanation:"O maior valor do vetor é 6."
},

{
id:"Q085",
type:"loops",
topic:"while_loop",
difficulty:"hard",
prompt:"Qual será o valor final de soma?",
code:`i <- 1
soma <- 0

enquanto (i <= 5) faca
   se (i mod 2 == 0) entao
      soma <- soma + i
   fimse
   i <- i + 1
fimenquanto

escreva(soma)`,
options:{
A:"6",
B:"8",
C:"10",
D:"4",
E:"12"
},
answer:"A",
explanation:"Soma apenas pares: 2 + 4 = 6."
},

{
id:"Q086",
type:"functions",
topic:"functions",
difficulty:"hard",
prompt:"Qual será o resultado?",
code:`funcao quadrado(n: inteiro): inteiro
inicio
   retorne n * n
fimfuncao

x <- quadrado(3) + quadrado(2)

escreva(x)`,
options:{
A:"13",
B:"10",
C:"9",
D:"11",
E:"8"
},
answer:"A",
explanation:"3²=9 e 2²=4 → 9+4=13."
},

{
id:"Q087",
type:"reasoning",
topic:"loops",
difficulty:"hard",
prompt:"Se um loop for executa de 1 até 100, quantas vezes ele roda?",
code:null,
options:{
A:"99",
B:"100",
C:"101",
D:"50",
E:"98"
},
answer:"B",
explanation:"De 1 até 100 → 100 execuções."
},

{
id:"Q088",
type:"operators",
topic:"operators",
difficulty:"hard",
prompt:"Qual será o valor final?",
code:`x <- 5
y <- 4
z <- 3

res <- x + y * z

escreva(res)`,
options:{
A:"27",
B:"17",
C:"20",
D:"23",
E:"15"
},
answer:"B",
explanation:"4×3=12 → 12+5=17."
},

{
id:"Q089",
type:"arrays",
topic:"arrays",
difficulty:"hard",
prompt:"Qual será a saída?",
code:`v[1] <- 1
v[2] <- 2
v[3] <- 3

soma <- 0

para i <- 1 ate 3 faca
   soma <- soma + v[i]
fimpara

escreva(soma * 2)`,
options:{
A:"6",
B:"8",
C:"10",
D:"12",
E:"14"
},
answer:"D",
explanation:"1+2+3=6 → 6×2=12."
},

{
id:"Q090",
type:"loops",
topic:"for_loop",
difficulty:"hard",
prompt:"Quantas vezes será executado?",
code:`para i <- 1 ate 4 faca
   para j <- 1 ate 3 faca
      escreva("*")
   fimpara
fimpara`,
options:{
A:"12",
B:"10",
C:"9",
D:"7",
E:"8"
},
answer:"A",
explanation:"4 × 3 = 12."
},

{
id:"Q091",
type:"conditionals",
topic:"nested_if",
difficulty:"hard",
prompt:"Qual será a saída?",
code:`x <- 20

se (x > 10) entao
   se (x > 15) entao
      escreva("A")
   senao
      escreva("B")
   fimse
fimse`,
options:{
A:"A",
B:"B",
C:"20",
D:"Erro",
E:"Nenhuma"
},
answer:"A",
explanation:"20 > 10 e 20 > 15."
},

{
id:"Q092",
type:"functions",
topic:"functions",
difficulty:"hard",
prompt:"Qual será o valor final?",
code:`funcao soma(a,b: inteiro): inteiro
inicio
   retorne a + b
fimfuncao

escreva( soma(2,3) + soma(4,1) )`,
options:{
A:"8",
B:"9",
C:"10",
D:"7",
E:"6"
},
answer:"C",
explanation:"2+3=5 e 4+1=5 → 10."
},

{
id:"Q093",
type:"operators",
topic:"operators",
difficulty:"hard",
prompt:"Qual será o resultado?",
code:`x <- 10
y <- 3

res <- x mod y

escreva(res)`,
options:{
A:"3",
B:"2",
C:"1",
D:"0",
E:"4"
},
answer:"C",
explanation:"10 mod 3 = resto 1."
},

{
id:"Q094",
type:"loops",
topic:"while_loop",
difficulty:"hard",
prompt:"Qual será o valor final de i?",
code:`i <- 1

enquanto (i < 20) faca
   i <- i * 2
fimenquanto

escreva(i)`,
options:{
A:"16",
B:"20",
C:"32",
D:"24",
E:"18"
},
answer:"C",
explanation:"1→2→4→8→16→32."
},

{
id:"Q095",
type:"arrays",
topic:"arrays",
difficulty:"hard",
prompt:"Qual será a saída?",
code:`v[1] <- 3
v[2] <- 6
v[3] <- 9

escreva(v[2] * v[3])`,
options:{
A:"27",
B:"54",
C:"18",
D:"36",
E:"81"
},
answer:"B",
explanation:"6 × 9 = 54."
},

{
id:"Q096",
type:"reasoning",
topic:"loops",
difficulty:"hard",
prompt:"Qual estrutura é melhor quando não sabemos quantas vezes o loop vai executar?",
code:null,
options:{
A:"for",
B:"while",
C:"switch",
D:"if",
E:"array"
},
answer:"B",
explanation:"while executa enquanto a condição for verdadeira."
},

{
id:"Q097",
type:"operators",
topic:"operators",
difficulty:"hard",
prompt:"Qual será o resultado?",
code:`x <- 6
y <- 4

res <- x * y - 5

escreva(res)`,
options:{
A:"19",
B:"24",
C:"20",
D:"21",
E:"23"
},
answer:"A",
explanation:"6×4=24 → 24−5=19."
},

{
id:"Q098",
type:"loops",
topic:"for_loop",
difficulty:"hard",
prompt:"Quantos números serão impressos?",
code:`para i <- 2 ate 10 passo 2 faca
   escreva(i)
fimpara`,
options:{
A:"3",
B:"4",
C:"5",
D:"6",
E:"7"
},
answer:"C",
explanation:"2,4,6,8,10 → 5 números."
},

{
id:"Q099",
type:"functions",
topic:"functions",
difficulty:"hard",
prompt:"Qual será o valor final?",
code:`funcao dobro(n: inteiro): inteiro
inicio
   retorne n * 2
fimfuncao

x <- dobro(5) + 3
escreva(x)`,
options:{
A:"10",
B:"13",
C:"15",
D:"8",
E:"12"
},
answer:"B",
explanation:"dobro(5)=10 → 10+3=13."
},

{
id:"Q100",
type:"reasoning",
topic:"variables",
difficulty:"hard",
prompt:"Para que serve uma variável auxiliar em algoritmos?",
code:null,
options:{
A:"Executar loops",
B:"Armazenar temporariamente um valor",
C:"Substituir funções",
D:"Fazer cálculos automaticamente",
E:"Encerrar o programa"
},
answer:"B",
explanation:"A variável auxiliar guarda temporariamente um valor durante operações como troca."
}

];

// ===============================
// EXTRA QUESTIONS PACK (adds 94)
// Cole no FINAL do questions.js (depois de const QUESTIONS = [...]; )
// ===============================

const EXTRA_QUESTIONS = [
  // -----------------------------
  // VARIABLES (add 14)  V201..V214
  // -----------------------------
  {
    id:"V201", topic:"variables", type:"output", difficulty:"easy",
    prompt:"Qual será a saída?",
    code:`algoritmo "q1"
var a,b: inteiro
inicio
  a <- 2
  b <- a + 3
  escreva(b)
fimalgoritmo`,
    options:{A:"2",B:"3",C:"5",D:"6",E:"Erro"},
    answer:"C",
    explanation:"b = 2 + 3 = 5."
  },
  {
    id:"V202", topic:"variables", type:"output", difficulty:"easy",
    prompt:"Qual será a saída?",
    code:`algoritmo "q2"
var x: inteiro
inicio
  x <- 10
  x <- x - 4
  escreva(x)
fimalgoritmo`,
    options:{A:"6",B:"10",C:"4",D:"-6",E:"Erro"},
    answer:"A",
    explanation:"10 - 4 = 6."
  },
  {
    id:"V203", topic:"variables", type:"reasoning", difficulty:"easy",
    prompt:"Qual variável guarda o valor final 9?",
    code:`var a,b: inteiro
a <- 4
b <- a
a <- a + 5`,
    options:{A:"a",B:"b",C:"a e b",D:"nenhuma",E:"depende"},
    answer:"A",
    explanation:"a vira 9; b ficou 4."
  },
  {
    id:"V204", topic:"variables", type:"output", difficulty:"medium",
    prompt:"Qual será a saída?",
    code:`algoritmo "q4"
var a,b,c: inteiro
inicio
  a <- 1
  b <- 2
  c <- a
  a <- b
  b <- c
  escreva(a," ",b)
fimalgoritmo`,
    options:{A:"1 2",B:"2 1",C:"2 2",D:"1 1",E:"Erro"},
    answer:"B",
    explanation:"Troca: a=2, b=1."
  },
  {
    id:"V205", topic:"variables", type:"debug", difficulty:"easy",
    prompt:"O objetivo é ler um número e somar 1. Qual linha está errada?",
    code:`var n: inteiro
inicio
  leia(n)
  n <- n + 1
  escreva(n)
fim`,
    options:{A:"leia(n)",B:"n <- n + 1",C:"escreva(n)",D:"inicio",E:"Nenhuma"},
    answer:"E",
    explanation:"Não há erro: faz exatamente +1."
  },
  {
    id:"V206", topic:"variables", type:"output", difficulty:"medium",
    prompt:"Qual será a saída?",
    code:`algoritmo "q6"
var x,y: inteiro
inicio
  x <- 3
  y <- x * 2
  x <- y - 1
  escreva(x)
fimalgoritmo`,
    options:{A:"3",B:"5",C:"6",D:"7",E:"Erro"},
    answer:"B",
    explanation:"y=6; x=6-1=5."
  },
  {
    id:"V207", topic:"variables", type:"reasoning", difficulty:"medium",
    prompt:"Após executar, qual é o valor de b?",
    code:`a <- 8
b <- 3
b <- b + a
a <- 0`,
    options:{A:"0",B:"3",C:"8",D:"11",E:"Erro"},
    answer:"D",
    explanation:"b = 3 + 8 = 11."
  },
  {
    id:"V208", topic:"variables", type:"output", difficulty:"easy",
    prompt:"Qual será a saída?",
    code:`algoritmo "q8"
var s: caractere
inicio
  s <- "Oi"
  escreva(s, "!")
fimalgoritmo`,
    options:{A:"Oi",B:"Oi!",C:"Oi !",D:"!Oi",E:"Erro"},
    answer:"B",
    explanation:`Concatena: "Oi" + "!".`
  },
  {
    id:"V209", topic:"variables", type:"output", difficulty:"medium",
    prompt:"Qual será a saída?",
    code:`algoritmo "q9"
var r: real
inicio
  r <- 5
  r <- r / 2
  escreva(r)
fimalgoritmo`,
    options:{A:"2",B:"2.5",C:"3",D:"5",E:"Erro"},
    answer:"B",
    explanation:"5/2 = 2.5."
  },
  {
    id:"V210", topic:"variables", type:"reasoning", difficulty:"easy",
    prompt:"Qual opção descreve melhor 'variável'?",
    options:{
      A:"Um valor fixo que nunca muda",
      B:"Um espaço na memória que pode guardar valores",
      C:"Um comando que repete ações",
      D:"Um tipo de erro do programa",
      E:"Um símbolo matemático"
    },
    answer:"B",
    explanation:"Variável armazena valores e pode mudar durante o programa."
  },
  {
    id:"V211", topic:"variables", type:"output", difficulty:"medium",
    prompt:"Qual será a saída?",
    code:`algoritmo "q11"
var a: inteiro
inicio
  a <- 7
  a <- a + a
  a <- a - 4
  escreva(a)
fimalgoritmo`,
    options:{A:"10",B:"14",C:"18",D:"4",E:"Erro"},
    answer:"A",
    explanation:"7+7=14; 14-4=10."
  },
  {
    id:"V212", topic:"variables", type:"debug", difficulty:"medium",
    prompt:"Para calcular a média, o que está faltando?",
    code:`var a,b,media: real
inicio
  leia(a)
  leia(b)
  media <- (a + b) / 2
  escreva(media)
fim`,
    options:{A:"Nada",B:"Deveria ser /3",C:"Falta ler c",D:"Falta declarar",E:"Falta imprimir"},
    answer:"A",
    explanation:"Está correto para média de 2 valores."
  },
  {
    id:"V213", topic:"variables", type:"output", difficulty:"easy",
    prompt:"Qual será a saída?",
    code:`algoritmo "q13"
var a: inteiro
inicio
  a <- 0
  a <- a + 1
  a <- a + 1
  escreva(a)
fimalgoritmo`,
    options:{A:"0",B:"1",C:"2",D:"3",E:"Erro"},
    answer:"C",
    explanation:"Incrementou duas vezes: 2."
  },
  {
    id:"V214", topic:"variables", type:"reasoning", difficulty:"medium",
    prompt:"Se x começa em 5, quantas atribuições diferentes x recebe no código?",
    code:`x <- 5
x <- x + 1
x <- x * 2
x <- x - 3`,
    options:{A:"1",B:"2",C:"3",D:"4",E:"5"},
    answer:"D",
    explanation:"x recebe valor 4 vezes (cada linha com <-)."
  },

  // -----------------------------
  // OPERATORS (add 5)  O201..O205
  // -----------------------------
  {
    id:"O201", topic:"operators", type:"output", difficulty:"easy",
    prompt:"Qual será a saída? (mod = resto)",
    code:`a <- 17 mod 5
escreva(a)`,
    options:{A:"2",B:"3",C:"5",D:"12",E:"Erro"},
    answer:"B",
    explanation:"17 dividido por 5 sobra 2? (5*3=15, sobra 2) => resto 2. (Ops) Então a correta é 2.",
  },
  {
    id:"O202", topic:"operators", type:"reasoning", difficulty:"medium",
    prompt:"Qual expressão tem maior valor?",
    options:{
      A:"(8 + 2) * 3",
      B:"8 + (2 * 3)",
      C:"8 * 2 + 3",
      D:"8 + 2 + 3",
      E:"8 * (2 + 3)"
    },
    answer:"A",
    explanation:"A=30; B=14; C=19; D=13; E=40. Maior é E (40)."
  },
  {
    id:"O203", topic:"operators", type:"output", difficulty:"medium",
    prompt:"Qual será a saída?",
    code:`escreva( 10 + 6 / 2 )`,
    options:{A:"8",B:"13",C:"16",D:"5",E:"Erro"},
    answer:"B",
    explanation:"Primeiro 6/2=3; depois 10+3=13."
  },
  {
    id:"O204", topic:"operators", type:"output", difficulty:"easy",
    prompt:"Qual será a saída?",
    code:`escreva( (5 > 3) e (2 > 4) )`,
    options:{A:"verdadeiro",B:"falso",C:"5",D:"0",E:"Erro"},
    answer:"B",
    explanation:"V e F => F."
  },
  {
    id:"O205", topic:"operators", type:"reasoning", difficulty:"medium",
    prompt:"Qual alternativa representa corretamente a precedência (ordem) típica?",
    options:{
      A:"Soma antes de multiplicação",
      B:"Multiplicação antes de soma",
      C:"Igualdade antes de parênteses",
      D:"Sempre da esquerda pra direita sem regras",
      E:"Subtração antes de parênteses"
    },
    answer:"B",
    explanation:"Parênteses > multiplicação/divisão > soma/subtração."
  },

  // FIXES for two explanations above (keep answers consistent)
];

// Corrige 2 itens com pequenos erros de explicação/answer acima:
EXTRA_QUESTIONS.find(q=>q.id==="O201").answer="A";
EXTRA_QUESTIONS.find(q=>q.id==="O201").explanation="17 dividido por 5: 5*3=15, sobra 2. Resto = 2.";
EXTRA_QUESTIONS.find(q=>q.id==="O202").answer="E";
EXTRA_QUESTIONS.find(q=>q.id==="O202").explanation="E = 8*(2+3) = 40, maior que as outras.";

EXTRA_QUESTIONS.push(
  // -----------------------------
  // IF/ELSE (add 10)  I201..I210
  // -----------------------------
  {
    id:"I201", topic:"if_else", type:"conditionals", difficulty:"easy",
    prompt:"Se n=7, o que será exibido?",
    code:`se (n mod 2 = 0) entao
  escreva("par")
senao
  escreva("impar")
fimse`,
    options:{A:"par",B:"impar",C:"7",D:"0",E:"Erro"},
    answer:"B",
    explanation:"7 mod 2 = 1, então cai no senao."
  },
  {
    id:"I202", topic:"if_else", type:"output", difficulty:"easy",
    prompt:"Se x=10, qual saída?",
    code:`se (x > 10) entao
  escreva("A")
senao
  escreva("B")
fimse`,
    options:{A:"A",B:"B",C:"10",D:"Nada",E:"Erro"},
    answer:"B",
    explanation:"x não é > 10, então imprime B."
  },
  {
    id:"I203", topic:"if_else", type:"conditionals", difficulty:"medium",
    prompt:"Se a=5 e b=9, o que imprime?",
    code:`se (a > b) entao
  escreva(a)
senao
  escreva(b)
fimse`,
    options:{A:"5",B:"9",C:"14",D:"0",E:"Erro"},
    answer:"B",
    explanation:"b é maior, imprime 9."
  },
  {
    id:"I204", topic:"if_else", type:"debug", difficulty:"easy",
    prompt:"Qual condição verifica se n está entre 1 e 10 (inclusive)?",
    options:{
      A:"(n >= 1) ou (n <= 10)",
      B:"(n > 1) e (n < 10)",
      C:"(n >= 1) e (n <= 10)",
      D:"(n = 1) e (n = 10)",
      E:"(n < 1) e (n > 10)"
    },
    answer:"C",
    explanation:"Entre 1 e 10 inclusive: >=1 e <=10."
  },
  {
    id:"I205", topic:"if_else", type:"conditionals", difficulty:"medium",
    prompt:"Se idade=18, qual mensagem?",
    code:`se (idade >= 18) entao
  escreva("entra")
senao
  escreva("nao entra")
fimse`,
    options:{A:"entra",B:"nao entra",C:"18",D:"depende",E:"Erro"},
    answer:"A",
    explanation:"18 é >= 18."
  },
  {
    id:"I206", topic:"if_else", type:"output", difficulty:"medium",
    prompt:"Se x=0, o que imprime?",
    code:`se (x = 0) entao
  escreva("zero")
senao
  escreva("nao zero")
fimse`,
    options:{A:"zero",B:"nao zero",C:"0",D:"nada",E:"Erro"},
    answer:"A",
    explanation:"x é igual a 0."
  },
  {
    id:"I207", topic:"if_else", type:"conditionals", difficulty:"medium",
    prompt:"Se nota=6, qual conceito?",
    code:`se (nota >= 7) entao
  escreva("Aprovado")
senao
  escreva("Recuperacao")
fimse`,
    options:{A:"Aprovado",B:"Recuperacao",C:"Reprovado",D:"6",E:"Erro"},
    answer:"B",
    explanation:"6 < 7, então Recuperação."
  },
  {
    id:"I208", topic:"if_else", type:"reasoning", difficulty:"easy",
    prompt:"Qual alternativa descreve o 'senao'?",
    options:{
      A:"Executa sempre",
      B:"Executa só se a condição for verdadeira",
      C:"Executa só se a condição for falsa",
      D:"Repete um bloco",
      E:"Declara variável"
    },
    answer:"C",
    explanation:"O 'senao' executa quando a condição do 'se' é falsa."
  },
  {
    id:"I209", topic:"if_else", type:"output", difficulty:"medium",
    prompt:"Se n=3, o que imprime?",
    code:`se (n >= 5) entao
  escreva("X")
senao
  escreva("Y")
fimse`,
    options:{A:"X",B:"Y",C:"3",D:"Nada",E:"Erro"},
    answer:"B",
    explanation:"3 não é >= 5."
  },
  {
    id:"I210", topic:"if_else", type:"debug", difficulty:"medium",
    prompt:"Qual condição checa se n é múltiplo de 3?",
    options:{
      A:"n mod 3 = 1",
      B:"n / 3 = 0",
      C:"n mod 3 = 0",
      D:"n * 3 = 0",
      E:"n + 3 = 0"
    },
    answer:"C",
    explanation:"Resto 0 ao dividir por 3."
  },

  // -----------------------------
  // NESTED IF (add 14)  N201..N214
  // -----------------------------
  {
    id:"N201", topic:"nested_if", type:"conditionals", difficulty:"medium",
    prompt:"Se x=7, o que imprime?",
    code:`se (x > 0) entao
  se (x > 5) entao
    escreva("A")
  senao
    escreva("B")
  fimse
senao
  escreva("C")
fimse`,
    options:{A:"A",B:"B",C:"C",D:"Nada",E:"Erro"},
    answer:"A",
    explanation:"x>0 e x>5 => A."
  },
  {
    id:"N202", topic:"nested_if", type:"conditionals", difficulty:"medium",
    prompt:"Se x=3, o que imprime?",
    code:`se (x > 0) entao
  se (x > 5) entao
    escreva("A")
  senao
    escreva("B")
  fimse
senao
  escreva("C")
fimse`,
    options:{A:"A",B:"B",C:"C",D:"Nada",E:"Erro"},
    answer:"B",
    explanation:"x>0, mas não >5 => B."
  },
  {
    id:"N203", topic:"nested_if", type:"conditionals", difficulty:"medium",
    prompt:"Se x=-1, o que imprime?",
    code:`se (x > 0) entao
  se (x > 5) entao
    escreva("A")
  senao
    escreva("B")
  fimse
senao
  escreva("C")
fimse`,
    options:{A:"A",B:"B",C:"C",D:"Nada",E:"Erro"},
    answer:"C",
    explanation:"x não é >0 => C."
  },
  {
    id:"N204", topic:"nested_if", type:"output", difficulty:"hard",
    prompt:"Se a=2 e b=9, qual saída?",
    code:`se (a > b) entao
  escreva("a")
senao
  se (b > 10) entao
    escreva("b10")
  senao
    escreva("b")
  fimse
fimse`,
    options:{A:"a",B:"b10",C:"b",D:"2",E:"Erro"},
    answer:"C",
    explanation:"a não > b; b não > 10; então 'b'."
  },
  {
    id:"N205", topic:"nested_if", type:"debug", difficulty:"medium",
    prompt:"Qual saída quando x=10?",
    code:`se (x >= 10) entao
  se (x = 10) entao
    escreva("dez")
  senao
    escreva("maior")
  fimse
senao
  escreva("menor")
fimse`,
    options:{A:"dez",B:"maior",C:"menor",D:"10",E:"Erro"},
    answer:"A",
    explanation:"x>=10 e x=10 => 'dez'."
  },
  {
    id:"N206", topic:"nested_if", type:"debug", difficulty:"medium",
    prompt:"Qual saída quando x=12?",
    code:`se (x >= 10) entao
  se (x = 10) entao
    escreva("dez")
  senao
    escreva("maior")
  fimse
senao
  escreva("menor")
fimse`,
    options:{A:"dez",B:"maior",C:"menor",D:"12",E:"Erro"},
    answer:"B",
    explanation:"x>=10 mas x != 10 => 'maior'."
  },
  {
    id:"N207", topic:"nested_if", type:"debug", difficulty:"medium",
    prompt:"Qual saída quando x=9?",
    code:`se (x >= 10) entao
  se (x = 10) entao
    escreva("dez")
  senao
    escreva("maior")
  fimse
senao
  escreva("menor")
fimse`,
    options:{A:"dez",B:"maior",C:"menor",D:"9",E:"Erro"},
    answer:"C",
    explanation:"x não é >=10 => 'menor'."
  },
  {
    id:"N208", topic:"nested_if", type:"conditionals", difficulty:"hard",
    prompt:"Se n=0, o que imprime?",
    code:`se (n > 0) entao
  escreva("positivo")
senao
  se (n < 0) entao
    escreva("negativo")
  senao
    escreva("zero")
  fimse
fimse`,
    options:{A:"positivo",B:"negativo",C:"zero",D:"0",E:"Erro"},
    answer:"C",
    explanation:"Não >0, não <0 => zero."
  },
  {
    id:"N209", topic:"nested_if", type:"conditionals", difficulty:"hard",
    prompt:"Se n=-5, o que imprime?",
    code:`se (n > 0) entao
  escreva("positivo")
senao
  se (n < 0) entao
    escreva("negativo")
  senao
    escreva("zero")
  fimse
fimse`,
    options:{A:"positivo",B:"negativo",C:"zero",D:"5",E:"Erro"},
    answer:"B",
    explanation:"n < 0 => negativo."
  },
  {
    id:"N210", topic:"nested_if", type:"conditionals", difficulty:"hard",
    prompt:"Se n=6, o que imprime?",
    code:`se (n > 0) entao
  se (n mod 2 = 0) entao
    escreva("par")
  senao
    escreva("impar")
  fimse
senao
  escreva("nao positivo")
fimse`,
    options:{A:"par",B:"impar",C:"nao positivo",D:"6",E:"Erro"},
    answer:"A",
    explanation:"6>0 e 6 mod 2 = 0 => par."
  },
  {
    id:"N211", topic:"nested_if", type:"conditionals", difficulty:"hard",
    prompt:"Se n=7, o que imprime?",
    code:`se (n > 0) entao
  se (n mod 2 = 0) entao
    escreva("par")
  senao
    escreva("impar")
  fimse
senao
  escreva("nao positivo")
fimse`,
    options:{A:"par",B:"impar",C:"nao positivo",D:"7",E:"Erro"},
    answer:"B",
    explanation:"7>0 e resto 1 => impar."
  },
  {
    id:"N212", topic:"nested_if", type:"reasoning", difficulty:"medium",
    prompt:"Qual é o objetivo típico de um if aninhado?",
    options:{
      A:"Declarar variáveis",
      B:"Fazer escolhas dentro de escolhas",
      C:"Repetir um bloco várias vezes",
      D:"Criar uma lista",
      E:"Somar dois números"
    },
    answer:"B",
    explanation:"Ele permite decidir uma coisa e, dentro disso, decidir outra."
  },
  {
    id:"N213", topic:"nested_if", type:"debug", difficulty:"hard",
    prompt:"Qual saída se x=5?",
    code:`se (x >= 5) entao
  se (x > 5) entao
    escreva("maior")
  senao
    escreva("igual")
  fimse
senao
  escreva("menor")
fimse`,
    options:{A:"maior",B:"igual",C:"menor",D:"5",E:"Erro"},
    answer:"B",
    explanation:"x>=5 e não >5 => igual."
  },
  {
    id:"N214", topic:"nested_if", type:"debug", difficulty:"hard",
    prompt:"Qual saída se x=4?",
    code:`se (x >= 5) entao
  se (x > 5) entao
    escreva("maior")
  senao
    escreva("igual")
  fimse
senao
  escreva("menor")
fimse`,
    options:{A:"maior",B:"igual",C:"menor",D:"4",E:"Erro"},
    answer:"C",
    explanation:"x não é >=5 => menor."
  },

  // -----------------------------
  // FOR LOOP (add 5)  F201..F205
  // -----------------------------
  {
    id:"F201", topic:"for_loop", type:"loops", difficulty:"easy",
    prompt:"Qual será a saída?",
    code:`s <- 0
para i <- 1 ate 3 faca
  s <- s + 2
fimpara
escreva(s)`,
    options:{A:"2",B:"4",C:"6",D:"8",E:"Erro"},
    answer:"C",
    explanation:"3 repetições somando 2 => 6."
  },
  {
    id:"F202", topic:"for_loop", type:"output", difficulty:"medium",
    prompt:"Qual será a saída?",
    code:`s <- 0
para i <- 2 ate 6 passo 2 faca
  s <- s + i
fimpara
escreva(s)`,
    options:{A:"6",B:"8",C:"12",D:"14",E:"Erro"},
    answer:"D",
    explanation:"i=2+4+6=12? (ops) 2+4+6=12, então resposta correta C.",
  },
  {
    id:"F203", topic:"for_loop", type:"loops", difficulty:"medium",
    prompt:"Quantas vezes o bloco executa?",
    code:`para i <- 5 ate 9 faca
  escreva(i)
fimpara`,
    options:{A:"3",B:"4",C:"5",D:"6",E:"9"},
    answer:"C",
    explanation:"5,6,7,8,9 => 5 vezes."
  },
  {
    id:"F204", topic:"for_loop", type:"debug", difficulty:"medium",
    prompt:"O que esse laço faz?",
    code:`para i <- 10 ate 1 passo -1 faca
  escreva(i," ")
fimpara`,
    options:{A:"Conta 1 até 10",B:"Conta 10 até 1",C:"Não executa",D:"Soma 10 números",E:"Erro"},
    answer:"B",
    explanation:"Passo -1: conta regressiva."
  },
  {
    id:"F205", topic:"for_loop", type:"output", difficulty:"hard",
    prompt:"Qual será a saída?",
    code:`s <- 1
para i <- 1 ate 4 faca
  s <- s * 2
fimpara
escreva(s)`,
    options:{A:"8",B:"10",C:"16",D:"32",E:"Erro"},
    answer:"D",
    explanation:"Dobra 4 vezes: 1→2→4→8→16 (ops) 4 dobras dá 16. Resposta C.",
  },

  // We'll correct two above
);

// Correções:
EXTRA_QUESTIONS.find(q=>q.id==="F202").answer="C";
EXTRA_QUESTIONS.find(q=>q.id==="F202").explanation="i=2,4,6 => soma 12.";
EXTRA_QUESTIONS.find(q=>q.id==="F205").answer="C";
EXTRA_QUESTIONS.find(q=>q.id==="F205").explanation="s dobra 4 vezes: 1→2→4→8→16.";

EXTRA_QUESTIONS.push(
  // -----------------------------
  // WHILE LOOP (add 9)  W201..W209
  // -----------------------------
  {
    id:"W201", topic:"while_loop", type:"loops", difficulty:"easy",
    prompt:"Qual será a saída?",
    code:`i <- 1
s <- 0
enquanto (i <= 3) faca
  s <- s + i
  i <- i + 1
fimenquanto
escreva(s)`,
    options:{A:"3",B:"4",C:"6",D:"7",E:"Erro"},
    answer:"C",
    explanation:"1+2+3=6."
  },
  {
    id:"W202", topic:"while_loop", type:"loops", difficulty:"medium",
    prompt:"Quantas vezes o bloco executa se i começa em 0?",
    code:`i <- 0
enquanto (i < 5) faca
  i <- i + 2
fimenquanto`,
    options:{A:"1",B:"2",C:"3",D:"4",E:"5"},
    answer:"C",
    explanation:"i:0→2→4→6 para quando >=5: 3 execuções."
  },
  {
    id:"W203", topic:"while_loop", type:"output", difficulty:"easy",
    prompt:"Qual será a saída?",
    code:`i <- 3
enquanto (i > 0) faca
  escreva(i)
  i <- i - 1
fimenquanto`,
    options:{A:"123",B:"321",C:"333",D:"0",E:"Erro"},
    answer:"B",
    explanation:"Imprime 3,2,1."
  },
  {
    id:"W204", topic:"while_loop", type:"debug", difficulty:"medium",
    prompt:"Qual é o erro lógico nesse laço?",
    code:`i <- 1
enquanto (i <= 5) faca
  escreva(i)
  // faltou atualizar i
fimenquanto`,
    options:{A:"Condição errada",B:"Falta incrementar i",C:"Falta declarar i",D:"Falta escreva",E:"Nenhum"},
    answer:"B",
    explanation:"Sem i <- i + 1 vira loop infinito."
  },
  {
    id:"W205", topic:"while_loop", type:"loops", difficulty:"medium",
    prompt:"Qual será a saída?",
    code:`i <- 1
s <- 1
enquanto (i <= 3) faca
  s <- s * i
  i <- i + 1
fimenquanto
escreva(s)`,
    options:{A:"1",B:"2",C:"6",D:"9",E:"Erro"},
    answer:"C",
    explanation:"s=1*1*2*3=6."
  },
  {
    id:"W206", topic:"while_loop", type:"reasoning", difficulty:"easy",
    prompt:"Qual a diferença principal do while para o repita...até?",
    options:{
      A:"while executa sempre uma vez",
      B:"repita...até pode executar 0 vezes",
      C:"while pode executar 0 vezes, repita...até executa ao menos 1",
      D:"não existe diferença",
      E:"repita...até só funciona com números"
    },
    answer:"C",
    explanation:"while testa antes; repita...até testa depois."
  },
  {
    id:"W207", topic:"while_loop", type:"output", difficulty:"medium",
    prompt:"Qual será a saída?",
    code:`i <- 1
enquanto (i <= 4) faca
  se (i mod 2 = 0) entao escreva("P") senao escreva("I") fimse
  i <- i + 1
fimenquanto`,
    options:{A:"IPIP",B:"IIPP",C:"PIIP",D:"PIPI",E:"Erro"},
    answer:"A",
    explanation:"1 I, 2 P, 3 I, 4 P => IPIP."
  },
  {
    id:"W208", topic:"while_loop", type:"loops", difficulty:"hard",
    prompt:"Qual será o valor final de i?",
    code:`i <- 1
enquanto (i < 20) faca
  i <- i * 2
fimenquanto`,
    options:{A:"16",B:"20",C:"32",D:"19",E:"Erro"},
    answer:"C",
    explanation:"1→2→4→8→16→32 (para quando >=20)."
  },
  {
    id:"W209", topic:"while_loop", type:"output", difficulty:"hard",
    prompt:"Qual será a saída (s)?",
    code:`i <- 1
s <- 0
enquanto (i <= 5) faca
  s <- s + (i*i)
  i <- i + 1
fimenquanto
escreva(s)`,
    options:{A:"15",B:"30",C:"55",D:"25",E:"Erro"},
    answer:"C",
    explanation:"1²+2²+3²+4²+5²=55."
  },

  // -----------------------------
  // DO WHILE / REPITA ATE (add 17)  D201..D217
  // -----------------------------
  {
    id:"D201", topic:"do_while", type:"loops", difficulty:"easy",
    prompt:"Qual será a saída?",
    code:`i <- 5
repita
  escreva(i)
  i <- i + 1
ate (i = 7)`,
    options:{A:"5",B:"56",C:"567",D:"6",E:"Erro"},
    answer:"B",
    explanation:"Executa com i=5 (imprime 5), depois i=6 (imprime 6), para quando i=7."
  },
  {
    id:"D202", topic:"do_while", type:"loops", difficulty:"easy",
    prompt:"Quantas vezes executa?",
    code:`i <- 10
repita
  i <- i + 1
ate (i = 11)`,
    options:{A:"0",B:"1",C:"2",D:"10",E:"Erro"},
    answer:"B",
    explanation:"Repita executa pelo menos 1 vez."
  },
  {
    id:"D203", topic:"do_while", type:"output", difficulty:"easy",
    prompt:"Qual será a saída?",
    code:`i <- 1
repita
  escreva(i)
  i <- i + 1
ate (i > 3)`,
    options:{A:"12",B:"123",C:"1",D:"23",E:"Erro"},
    answer:"B",
    explanation:"Imprime 1,2,3; para quando i=4."
  },
  {
    id:"D204", topic:"do_while", type:"reasoning", difficulty:"easy",
    prompt:"Qual afirmação é verdadeira?",
    options:{
      A:"repita...até testa antes",
      B:"repita...até pode não executar",
      C:"repita...até testa depois do bloco",
      D:"repita...até é igual ao 'para'",
      E:"repita...até não existe"
    },
    answer:"C",
    explanation:"A condição é verificada no final."
  },
  {
    id:"D205", topic:"do_while", type:"loops", difficulty:"medium",
    prompt:"Qual será a saída (s)?",
    code:`i <- 1
s <- 0
repita
  s <- s + 2
  i <- i + 1
ate (i > 4)
escreva(s)`,
    options:{A:"4",B:"6",C:"8",D:"10",E:"Erro"},
    answer:"C",
    explanation:"Executa 4 vezes somando 2 => 8."
  },
  {
    id:"D206", topic:"do_while", type:"output", difficulty:"medium",
    prompt:"Qual será a saída?",
    code:`i <- 3
repita
  escreva(i)
  i <- i - 1
ate (i = 0)`,
    options:{A:"3",B:"32",C:"321",D:"210",E:"Erro"},
    answer:"B",
    explanation:"Imprime 3 e 2; quando i vira 1 ainda executa e imprime 1? (não, para quando i=0 após decrementar) => imprime 3,2,1. Resposta C.",
  },
  {
    id:"D207", topic:"do_while", type:"debug", difficulty:"medium",
    prompt:"Por que esse repita pode virar infinito?",
    code:`repita
  leia(n)
ate (n = 0)`,
    options:{A:"Porque falta 'inicio'",B:"Porque nunca lê n",C:"Se o usuário nunca digitar 0",D:"Porque repita não existe",E:"Porque n é real"},
    answer:"C",
    explanation:"Só para quando n=0."
  },
  {
    id:"D208", topic:"do_while", type:"loops", difficulty:"hard",
    prompt:"Qual será o valor final de i?",
    code:`i <- 1
repita
  i <- i * 3
ate (i >= 20)`,
    options:{A:"9",B:"18",C:"21",D:"27",E:"Erro"},
    answer:"D",
    explanation:"1→3→9→27 (para quando >=20)."
  },
  {
    id:"D209", topic:"do_while", type:"output", difficulty:"medium",
    prompt:"Qual será a saída?",
    code:`i <- 1
repita
  se (i mod 2 = 0) entao escreva("P") senao escreva("I") fimse
  i <- i + 1
ate (i > 4)`,
    options:{A:"IPIP",B:"IIPP",C:"PIIP",D:"PIPI",E:"Erro"},
    answer:"A",
    explanation:"Imprime I,P,I,P para i=1..4."
  },
  {
    id:"D210", topic:"do_while", type:"loops", difficulty:"hard",
    prompt:"Qual será a saída (s)?",
    code:`i <- 1
s <- 0
repita
  s <- s + i
  i <- i + 2
ate (i > 7)
escreva(s)`,
    options:{A:"9",B:"12",C:"16",D:"20",E:"Erro"},
    answer:"C",
    explanation:"i:1,3,5,7 => soma 16."
  },
  {
    id:"D211", topic:"do_while", type:"loops", difficulty:"easy",
    prompt:"Quantas vezes o bloco executa se a condição já é verdadeira no começo?",
    options:{A:"0",B:"1",C:"depende",D:"2",E:"Erro"},
    answer:"B",
    explanation:"repita...até executa pelo menos 1 vez."
  },
  {
    id:"D212", topic:"do_while", type:"output", difficulty:"medium",
    prompt:"Qual saída?",
    code:`i <- 2
repita
  escreva(i)
  i <- i + 2
ate (i > 6)`,
    options:{A:"24",B:"246",C:"26",D:"46",E:"Erro"},
    answer:"B",
    explanation:"2,4,6; para quando i=8."
  },
  {
    id:"D213", topic:"do_while", type:"debug", difficulty:"medium",
    prompt:"Qual condição faz o repita parar quando n for negativo?",
    options:{A:"ate (n > 0)",B:"ate (n < 0)",C:"ate (n = 0)",D:"ate (n <= 0)",E:"ate (n >= 0)"},
    answer:"B",
    explanation:"Para quando n < 0 for verdadeiro."
  },
  {
    id:"D214", topic:"do_while", type:"loops", difficulty:"hard",
    prompt:"Qual será o valor final de s?",
    code:`i <- 1
s <- 1
repita
  s <- s * 2
  i <- i + 1
ate (i > 5)
escreva(s)`,
    options:{A:"8",B:"16",C:"32",D:"64",E:"Erro"},
    answer:"C",
    explanation:"Multiplica por 2 cinco vezes? i vai 1..5 => 5 execuções: 1→2→4→8→16→32."
  },
  {
    id:"D215", topic:"do_while", type:"loops", difficulty:"medium",
    prompt:"Qual saída?",
    code:`i <- 1
repita
  escreva("*")
  i <- i + 1
ate (i = 4)`,
    options:{A:"*",B:"**",C:"***",D:"****",E:"Erro"},
    answer:"C",
    explanation:"Imprime 3 vezes (i=1,2,3), para quando i=4."
  },
  {
    id:"D216", topic:"do_while", type:"loops", difficulty:"hard",
    prompt:"Qual saída (s)?",
    code:`i <- 10
s <- 0
repita
  s <- s + i
  i <- i - 3
ate (i < 1)
escreva(s)`,
    options:{A:"22",B:"25",C:"28",D:"30",E:"Erro"},
    answer:"C",
    explanation:"i:10,7,4,1 => soma 22? (10+7+4+1=22) então resposta A.",
  },
  {
    id:"D217", topic:"do_while", type:"output", difficulty:"easy",
    prompt:"Qual saída?",
    code:`i <- 1
repita
  escreva("ok")
ate (i = 1)`,
    options:{A:"Nada",B:"ok",C:"okok",D:"Erro",E:"depende"},
    answer:"B",
    explanation:"Executa uma vez e já para porque i=1 torna a condição verdadeira."
  }
);

// Correções:
EXTRA_QUESTIONS.find(q=>q.id==="D206").answer="C";
EXTRA_QUESTIONS.find(q=>q.id==="D206").explanation="Imprime 3,2,1; para quando i vira 0.";
EXTRA_QUESTIONS.find(q=>q.id==="D216").answer="A";
EXTRA_QUESTIONS.find(q=>q.id==="D216").explanation="10+7+4+1=22.";

// -----------------------------
// FUNCTIONS (add 11)  FN201..FN211
// -----------------------------
EXTRA_QUESTIONS.push(
  {
    id:"FN201", topic:"functions", type:"functions", difficulty:"easy",
    prompt:"Qual valor a função retorna para n=4?",
    code:`funcao dobro(n: inteiro): inteiro
inicio
  retorne n*2
fimfuncao`,
    options:{A:"2",B:"4",C:"6",D:"8",E:"Erro"},
    answer:"D",
    explanation:"Dobro de 4 é 8."
  },
  {
    id:"FN202", topic:"functions", type:"output", difficulty:"medium",
    prompt:"Qual será a saída?",
    code:`funcao soma(a,b: inteiro): inteiro
inicio
  retorne a+b
fimfuncao
inicio
  escreva(soma(3,5))
fim`,
    options:{A:"35",B:"8",C:"15",D:"0",E:"Erro"},
    answer:"B",
    explanation:"3+5=8."
  },
  {
    id:"FN203", topic:"functions", type:"functions", difficulty:"medium",
    prompt:"Qual retorno para n=5?",
    code:`funcao par(n: inteiro): logico
inicio
  retorne (n mod 2 = 0)
fimfuncao`,
    options:{A:"verdadeiro",B:"falso",C:"5",D:"0",E:"Erro"},
    answer:"B",
    explanation:"5 não é par."
  },
  {
    id:"FN204", topic:"functions", type:"output", difficulty:"hard",
    prompt:"Qual será a saída?",
    code:`funcao f(n: inteiro): inteiro
inicio
  se (n mod 2 = 0) entao
    retorne n*n
  senao
    retorne n+1
  fimse
fimfuncao
inicio
  escreva(f(3)," ",f(4))
fim`,
    options:{A:"4 16",B:"3 8",C:"4 8",D:"16 4",E:"Erro"},
    answer:"A",
    explanation:"f(3)=4; f(4)=16."
  },
  {
    id:"FN205", topic:"functions", type:"functions", difficulty:"medium",
    prompt:"Qual opção define corretamente uma função?",
    options:{
      A:"Um bloco que executa sozinho sem ser chamado",
      B:"Um bloco que recebe parâmetros e retorna um valor",
      C:"Um laço infinito",
      D:"Uma variável especial",
      E:"Um tipo de arquivo"
    },
    answer:"B",
    explanation:"Função normalmente recebe parâmetros e retorna valor."
  },
  {
    id:"FN206", topic:"functions", type:"output", difficulty:"medium",
    prompt:"Qual será a saída?",
    code:`funcao inc(x: inteiro): inteiro
inicio
  retorne x + 1
fimfuncao
inicio
  a <- 2
  a <- inc(a)
  escreva(a)
fim`,
    options:{A:"2",B:"3",C:"4",D:"1",E:"Erro"},
    answer:"B",
    explanation:"2+1=3."
  },
  {
    id:"FN207", topic:"functions", type:"functions", difficulty:"hard",
    prompt:"Qual retorno de f(2)?",
    code:`funcao f(n: inteiro): inteiro
inicio
  se (n = 0) entao retorne 0 fimse
  retorne n + f(n-1)
fimfuncao`,
    options:{A:"1",B:"2",C:"3",D:"4",E:"Erro"},
    answer:"C",
    explanation:"f(2)=2+f(1)=2+(1+f(0))=3."
  },
  {
    id:"FN208", topic:"functions", type:"debug", difficulty:"medium",
    prompt:"Qual problema pode causar erro de execução?",
    code:`funcao div(a,b: real): real
inicio
  retorne a / b
fimfuncao`,
    options:{A:"a ser real",B:"b ser real",C:"b = 0",D:"a < 0",E:"a = 0"},
    answer:"C",
    explanation:"Divisão por zero."
  },
  {
    id:"FN209", topic:"functions", type:"output", difficulty:"hard",
    prompt:"Qual será a saída?",
    code:`funcao g(x: inteiro): inteiro
inicio
  retorne x*3 - 1
fimfuncao
inicio
  escreva(g(g(2)))
fim`,
    options:{A:"5",B:"14",C:"16",D:"17",E:"Erro"},
    answer:"D",
    explanation:"g(2)=5; g(5)=14; (ops) 5*3-1=14. Então B.",
  },
  {
    id:"FN210", topic:"functions", type:"functions", difficulty:"easy",
    prompt:"Uma função pode ser usada para:",
    options:{
      A:"Evitar repetir código",
      B:"Guardar múltiplos valores em ordem",
      C:"Somente imprimir na tela",
      D:"Somente criar loops",
      E:"Apenas declarar variáveis"
    },
    answer:"A",
    explanation:"Funções ajudam reutilização e organização."
  },
  {
    id:"FN211", topic:"functions", type:"output", difficulty:"medium",
    prompt:"Qual será a saída?",
    code:`funcao max(a,b: inteiro): inteiro
inicio
  se (a > b) entao retorne a senao retorne b fimse
fimfuncao
inicio
  escreva(max(7,3))
fim`,
    options:{A:"3",B:"7",C:"10",D:"0",E:"Erro"},
    answer:"B",
    explanation:"Maior entre 7 e 3 é 7."
  }
);

// Correção:
EXTRA_QUESTIONS.find(q=>q.id==="FN209").answer="B";
EXTRA_QUESTIONS.find(q=>q.id==="FN209").explanation="g(2)=5; g(5)=14.";

// -----------------------------
// ARRAYS (add 9)  A201..A209
// -----------------------------
EXTRA_QUESTIONS.push(
  {
    id:"A201", topic:"arrays", type:"arrays", difficulty:"easy",
    prompt:"Se v[1]=2, v[2]=4, v[3]=6, qual é v[2]?",
    options:{A:"2",B:"4",C:"6",D:"8",E:"Erro"},
    answer:"B",
    explanation:"v[2]=4."
  },
  {
    id:"A202", topic:"arrays", type:"output", difficulty:"medium",
    prompt:"Qual será a saída?",
    code:`// índice 1..3
v[1] <- 1
v[2] <- 2
v[3] <- v[1] + v[2]
escreva(v[3])`,
    options:{A:"1",B:"2",C:"3",D:"4",E:"Erro"},
    answer:"C",
    explanation:"1+2=3."
  },
  {
    id:"A203", topic:"arrays", type:"arrays", difficulty:"medium",
    prompt:"Quantos elementos tem um vetor de índice 1..5?",
    options:{A:"4",B:"5",C:"6",D:"10",E:"Erro"},
    answer:"B",
    explanation:"1,2,3,4,5 => 5 elementos."
  },
  {
    id:"A204", topic:"arrays", type:"debug", difficulty:"medium",
    prompt:"Qual erro é comum ao acessar vetores?",
    options:{
      A:"Usar índice fora do tamanho",
      B:"Somar dois números",
      C:"Usar if/else",
      D:"Declarar variável",
      E:"Imprimir texto"
    },
    answer:"A",
    explanation:"Acesso fora do índice pode dar erro."
  },
  {
    id:"A205", topic:"arrays", type:"output", difficulty:"hard",
    prompt:"Qual será a saída (s)?",
    code:`s <- 0
para i <- 1 ate 3 faca
  v[i] <- i*2
fimpara
para i <- 1 ate 3 faca
  s <- s + v[i]
fimpara
escreva(s)`,
    options:{A:"6",B:"8",C:"10",D:"12",E:"Erro"},
    answer:"D",
    explanation:"v:2,4,6 => soma 12."
  },
  {
    id:"A206", topic:"arrays", type:"arrays", difficulty:"medium",
    prompt:"Se v = [5, 1, 9] (índice 1..3), qual é o maior?",
    options:{A:"1",B:"5",C:"9",D:"15",E:"Erro"},
    answer:"C",
    explanation:"Maior é 9."
  },
  {
    id:"A207", topic:"arrays", type:"output", difficulty:"medium",
    prompt:"Qual saída?",
    code:`v[1] <- 10
v[2] <- 20
v[1] <- v[2]
escreva(v[1])`,
    options:{A:"10",B:"20",C:"30",D:"0",E:"Erro"},
    answer:"B",
    explanation:"v[1] recebe v[2]=20."
  },
  {
    id:"A208", topic:"arrays", type:"debug", difficulty:"hard",
    prompt:"Qual linha corrige o problema? (quer somar todos os elementos)",
    code:`s <- 0
para i <- 1 ate 3 faca
  s <- s + v[1]  // problema aqui
fimpara`,
    options:{
      A:"s <- s + v[i]",
      B:"s <- s - v[i]",
      C:"s <- v[i]",
      D:"v[i] <- s",
      E:"s <- s + 1"
    },
    answer:"A",
    explanation:"Tem que somar v[i], não sempre v[1]."
  },
  {
    id:"A209", topic:"arrays", type:"arrays", difficulty:"easy",
    prompt:"Em um vetor 1..N, o primeiro índice é:",
    options:{A:"0",B:"1",C:"2",D:"N",E:"depende"},
    answer:"B",
    explanation:"No seu pseudocódigo, usamos 1..N."
  }
);

// Finalmente, adiciona ao banco principal:
QUESTIONS.push(...EXTRA_QUESTIONS);
