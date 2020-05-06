# BossaBox: Back-end lista de ferramentas

![Tela de Exemplo](https://github.com/JhemersonLucas/Desafio-BossaBox-FrontEnd-Adicional/blob/master/tela_tools.png)

## Pré requisitos 

O projeto utiliza o banco de dados postgres
você pode utilizar o **docker** 
* [Documentação Docker](https://www.docker.com/get-started) 
* [Documentação Postgres](https://hub.docker.com/_/postgres)


- [x] Configure o Docker
- [x] Baixe a imagem do postgres e utilize o ``` docker start ``` para rodar o serviço
- [x] Crie um database com o nome **bossabox**


Caso queira alterar o nome do banco e outras configurações, como a senha do dcoker
basta acessar o arquivo ``` ./ormconfig.json ```e alterar os campos correspondentes

## Instalação

clone o repositório com o comando

```
git clone https://github.com/JhemersonLucas/Desafio-BossaBox-Backend-Tools.git backend
cd backend
yarn 
```

após executar ``` yarn ``` os módulos serão instalados

## Executar
Rode as migrations para que as tabelas sejam criadas automaticamente
``` yarn typeorm migration:run ```

Agora roder o comando ``` yarn dev:server ``` para iniciar a api 

## Rotas

Para visualizar as rodas acesse
``` http://localhost:3003/swagger ```

## FrontEnd

Caso queira visualizar a aplicação pode utilizar o insomnia ou 
utilizar o frontend que criei para consumiar a api
[Documentação FrontEnd](https://github.com/JhemersonLucas/Desafio-BossaBox-FrontEnd-Adicional)
**;)**

