# -- API APP-ENTREGAS --

Simples end-point para um aplicativo de entregas!

## Resumo:
Esta API foi criada com o intuito de aprimorar o contato com Nodejs.

|TÉCNOLOGIAS / DEPENDÊNCIAS: |
| ------ |
| Node.js - Eventos de entrada/saída para o backend. |
| Express - Framework para Node.js que fornece recursos mínimos para construção de servidores web.|
| Knex - Construtor de consultas SQL |
| MySql - Sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.|

## Instalação:
 - 1º Clone o projeto em sua máquina!
 - 2º Acesse o projeto via terminal.
 - 3º Para instalar as dependências rode o comando com o gerenciador de pacotes de sua preferência! 

| NPM  |
|--|
```sh
npm install
```

| YARN  |
|--|
```sh
yarn
```

### Após instalar as dependências:
#### Precisamos criar nosso banco de dados.
 - Neste projeto foi utilizado o MySql disponibilizado pelo Programa Laragon e para administrar utilizei o PHPMyAdmin.
    - *Fique a vontade para utilizar o servidor de banco de dados que desejar, exemplos de outros Programas XAMPP, WAMP.*
 - Crie um banco com o nome => **entregas**
 - Na aplicação dentro do diretório => **scripts** está disponível o arquivo => **database.sql**.
 - Copiar o conteúdo do arquivo e executar dentro da sua base de dados.
 
#### ***Pronto seu ambiente está pronto.***

#### Vamos subir seu servidor local?

 - Execute o comando abaixo com o gerenciador de pacotes de sua preferência!
 
| NPM  |
|--|
```sh
npm run dev
```

| YARN  |
|--|
```sh
yarn dev
```

| ***E pronto sua Aplicação já está funcionando!*** |
|--|

## Plugins

Utilizei o plugin abaixo dentro do VSCODE para realizar as requisições.

| Plugin | README |
| ------ | ------ |
| REST Client | https://github.com/Huachao/vscode-restclient#readme |

Para realizar as requisições fique a vontade para escolher o Programa ou Plugin que preferir.
-   exemplos (POSTMAN, INSOMNIA,etc)
## Licença

MIT
**Projeto Livre Uhuull!**
