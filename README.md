# IMusics-BackEnd

## Intrudoção

Neste repositório está a estrutura do BackEnd da aplicação *IMusics*. A proposta da aplicação é adicionar, armazenar e reproduzir suas músicas preferidas
sempre presando os pilares da segurança da informação: confidencialidade, integridade e disponibilidade.
As principais tecnologias usadas foram: TypeScript, Nest.js e prisma.

## Passos para rodar a aplicação
- Crie o clone do repositório na sua máquina.
-  Faça a instalação de todas as dependências:
    -  **npm install** ou **yarn install**.
    - Configure o arquivo **.env** use o **env.exemplo** como base.
- Após estes passos acesse o Readme da pasta */back*, onde estará os próximos passos para rodar a aplicação na sua máquina.

     
## Endpoints da aplicação

| Método | Endpoint    | Responsabilidade             |
| ------ | ----------- | ----------------------       |
| POST   | /login      | Logar o usuário na aplicação |


| Método | Endpoint    | Responsabilidade         |
| ------ | ----------- | ----------------------   |
| POST   | /users      | Criar os usuários        |
| GET    | /users      | Listar todos os usuários |
| PATCH  | /users/:id  | Atualizar usuário por id |
| DELETE | /users/:id  | Deletar usuários por id  |

| Método | Endpoint    | Responsabilidade          |
| ------ | ----------- | ----------------------    |
| POST   | /musics      | Criar música             |
| GET    | /musics      | Listar todas as música   |
| GET    | /musics/:id  | Listar música por id     |
| PATCH  | /musics/:id  | Atualizar música por id  |
