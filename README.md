# -nodejs-Arquitetura_de_Software

# Sobre
- Este projeto é uma aplicação nodejs.
- A Aplicação cria pesquisar de satisfação e encaminha pro email para usuários cadastrados.
- Seu objetivo é adquirir pontos na disciplina de arquitetura de software da PUC MINAS.

# Como executar a aplicação
- Após clonar o projeto, deve rodar o comando yarn no terminal na pasta do projeto.
- O servidor roda a aplicação com yarn dev.
-Abra [http://localhost:3333] no seu browser.

#rotas
- método post - /user - criação de usuários
- método post - /surveys - criação de pesquisa
- método get - /surveys - mostra a lista de pesquisas
- método post - /sendMail - Envia a pesquisa de satisfação para um usuário.
