# Integral
### Retângulo
Imagine a função _f(t) = t²_ juntamente ao seu comportamento gráfico, e que você tenha que calcular a área abaixo da curva em determinado intervalo no eixo das abscissas, entretanto, você não faz ideia de como calcular integral. É possível resolver esse problema utilizando uma ideia mais simples de função constante (_f(t) = n_), calculada de partes em partes da função original. Segue o gráfico:

<img src="assets/grafico.png" alt="grafico">

Dado gráfico, podemos afirmar que:
* O intervalo de _x0_ a _x_ é dividido em _p_ partes iguais de funções constantes.
* _delta_ corresponte ao valor de cada parte de _p_ do intervalo de _x0_ a _x_.
* _delta = (x - x0)/p_ | _x_ >= _x0_; _p_ pertece aos Naturais e _p_ != 0.
* Em cada parte do intervalo de _x0_ a _x_ é formado um retângulo com base _delta_ e altura _f(t)_.

| Base | Altura | Área (altura x base) |
|:-|:-:|-:|
| _delta_ | _f(x0)_ | _f(x0)delta_ |
| _delta_ | _f(x0 + delta)_ | _f(x0 + delta)delta_ |
| _delta_ | _f(x0 + 2delta)_ | _f(x0 + 2 delta)delta_ |
|...|...|...|
| _delta_ | _f(x0 - 2delta)_ | _f(x0 - 2 delta)delta_ |
| _delta_ | _f(x0 - delta)_ | _f(x0 - delta)delta_ |

_Área total = f(x0)delta + f(x0 + delta)delta + f(x0 + 2 delta)delta + ... + f(x - 2 delta)delta + f(x - delta)delta_

Essa equação também pode ser escrita na forma de somatório:

<img src="assets/somatorio.png" alt="somatorio">
