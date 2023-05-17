# App

GYmPass sytle app.

## RFs (requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuario logado;
- [x] Deve ser possível obter o numero de check-ins realizados pelo usuario logado;
- [x] Deve ser possível o usuario obter seu historico de check-ins;
- [x] Deve ser possível o usuario buscar academias proximas;
- [x] Deve ser possível o usuario buscar academias pelo nome;
- [x] Deve ser possível o usuario realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuario;
- [x] Deve ser possível cadastrar uma academia;

## RNs(Regra de negocio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estuver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos apos criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser validado por administradores;


## RNFs (Requisitos não funcionais)

- [x] A senhado usuario precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por pagina
- [ ] O usuario deve ser identificado por um JWT;