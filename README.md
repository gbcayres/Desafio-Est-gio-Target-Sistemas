# Desafio Target Sistemas

## Questão 1
Observe o trecho de código abaixo:

```javascript
int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);
```
### Resposta:
<a href="https://github.com/gbcayres/Desafio-Estagio-Target-Sistemas/blob/master/desafioTarget/1.js">Código Questão 1</a>

***
## Questão 2
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
### Resposta:
<a href="https://github.com/gbcayres/Desafio-Estagio-Target-Sistemas/blob/master/desafioTarget/2.js">Código Questão 2</a>

***
## Questão 3
Descubra a lógica e complete o próximo elemento:

 a - 1, 3, 5, 7, 9
  
b - 2, 4, 8, 16, 32, 64, 128
  
c - 0, 1, 4, 9, 16, 25, 36, 49
  
d - 4, 16, 36, 64, 100
  
e - 1, 1, 2, 3, 5, 8, 13
  
f - 2,10, 12, 16, 17, 18, 19, 22

### Resposta:
a) 1, 3, 5, 7, <strong>9</s>

b) 2, 4, 8, 16, 32, 64,  <strong>128</s>

c) 0, 1, 4, 9, 16, 25, 36,  <strong>49</s>

d) 4, 16, 36, 64,  <strong>100</s>

e) 1, 1, 2, 3, 5, 8,  <strong>13</s>

f) 2,10, 12, 16, 17, 18, 19,  <strong>?</s>

***
## Questão 4

4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

### Resposta:
<strong>Como poderia saber como uma lâmpada estava ligada mesmo depois de apagada?</strong><i> Somente se ela ainda estiver quente.</i>

Então, se eu conseguir encostar nas lampadas poderia fazer o seguinte:

Deixar ligado um interruptor aceso tempo o suficiente pra sua lâmpada esquentar.

Ligar outro interruptor e ir para alguma das salas e concluir que que:

  Se a lampada estiver apagada e quente, ela é a do primeiro interruptor.
  Se a lampada estiver acesa, ela é a do segundo interruptor.
  Se estiver apagada e fria, é a do que não foi aceso.

Assim descobriria uma das lampadas.

Depois, testaria as duas outras ligando um dos dois interruptores que sobraram e indo até uma das salas, concluindo que:

  Se a lampada estiver acesa, ela é a do interruptor que liguei, senão, é a do que não liguei.

Porém isso só seria possivel caso as lâmpadas estivessem ao meu alcance.

***
## Questão 5
Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
  
a - Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
  
b - Evite usar funções prontas, como, por exemplo, reverse; -

### Resposta:
<a href="https://github.com/gbcayres/Desafio-Estagio-Target-Sistemas/blob/master/desafioTarget/5.js">Código Questão 5</a>
