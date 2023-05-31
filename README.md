# Store Manager

Esta é uma API desenvolvida em Node.js utilizando o framework Express.js e um banco de dados MySQL. Ela possui endpoints para criar, exibir, atualizar e excluir produtos e vendas.

## Endpoints

### Produtos

- GET /produtos - Retorna todos os produtos cadastrados.
- GET /produtos/:id - Retorna os detalhes de um produto específico.
- POST /produtos - Cria um novo produto.
- PUT /produtos/:id - Atualiza as informações de um produto existente.
- DELETE /produtos/:id - Exclui um produto.

### Vendas
- GET /vendas - Retorna todas as vendas registradas.
- GET /vendas/:id - Retorna os detalhes de uma venda específica.
- POST /vendas - Registra uma nova venda.
- PUT /vendas/:id - Atualiza as informações de uma venda existente.
- DELETE /vendas/:id - Exclui uma venda.

### Resumo

Coloquei em prática o conhecimento sobre padrões arquiteturais, usando a arquitetura MSC (model-service-controller). Além disso, exercitei meus conhecimentos sobre REST, criando uma API completamente RESTful.

O MSC no back-end é uma abordagem em que o sistema é dividido em pequenos serviços independentes, permitindo um desenvolvimento mais ágil, escalável e modular do aplicativo ou sistema.