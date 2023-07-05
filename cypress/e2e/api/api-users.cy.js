// o context e o describe sao a mesma coisa, mas normalmente o context é usado para requisiçoes especificas

describe('Realizando requisicoes na api', () => {
  context('GET /users', () => {
    it('Deve retornar uma lista de usuários', () => {
      cy.request('GET', 'http://localhost:8000/users').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).length.to.be.greaterThan(1);
      });
    });
  });

  context('GET /users/:userid', () => {
    it('Deve retornar um unico usuario', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/users/40a41438-84a6-4b4d-ae1d-7f1713d0a9fe',
      }).then((response) => {
        expect(response.status).to.eq(200);

        // Espera que quando for feito a requisicao encontre o campo nome do usuario
        expect(response.body).to.have.property('nome');
      });
    });
    it('Deve retornar um erro quando o usuario for invalido',()=>{
        cy.request({
            method: 'GET',
            url: 'http://localhost:8000/users/40a41438-84a6-4b4d',
            // Esse failOnStatusCode faz roda o codigo mesmo que de erro, porque como queremos verificar se vai dar erro deixamos como falso para rodar a aplicação
            failOnStatusCode:false
        }).then(response =>{
            expect(response.status).to.eq(404)
            expect(response.body).to.eq('Not Found')
        })
    })
  });
});
