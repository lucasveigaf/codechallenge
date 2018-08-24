Um app simples para desafios de programação. São exibidas as instruções do desafio (em Markdown), um contador de tempo,
um editor de código com opções para selecionar a linguagem desejada e uma área para exibir o output do código.

## Demo:

https://geekhunter-frontend.herokuapp.com/

## Inicialização:

```
git clone https://github.com/lucasveigaf/codechallenge.git
npm install
npm start
```

## Sobre o projeto:

As informações do desafio são baseadas em um [mock em formato json](https://github.com/lucasveigaf/codechallenge/blob/master/src/mocks/challenge.json). A compilação do código inserido é feito
através da API do [jdoodle](https://www.jdoodle.com/compiler-api/docs/).
O usuário pode testar seu código antes de o enviar. Porém, quando o tempo limite é atingido, o código é
automaticamente enviado e os botões "enviar" e "testar" são desabilitados.

## To do:

- Parametrizar função para submeter o código, que atualmente está "chumbada" no componente [CodeChallenge](https://github.com/lucasveigaf/codechallenge/blob/master/src/components/CodeChallenge/CodeChallenge.js)
- Parametrizar o tema do editor.
- Testes unitários
- Internacionalização
- Melhorar fluxo de informações entre componentes. Atualmente são utilizadas diversas funções callback.
  Em breve a complexidade provavelmente indicará a utilização de uma ferramenta de state management como o Redux.
- ...
