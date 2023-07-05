describe('Jornadas de usuário', () => {
  it('Deve permitir que a pessoa usuária acesse a aplicação, realize uma transação e faça um logout', () => {
    cy.visit('/');

    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
//  depois do click o usuario vai ser direcionado para a pagina home 
    cy.location('pathname').should('eq', '/home');
// Estamos verificando se a url está na pagina home
    cy.getByData('select-opcoes').select('Transferência');
    cy.getByData('form-input').type('80');
    cy.getByData('realiza-transacao').click();
// Aqui simulamos uma transferencia
    cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80');
    // Aqui estou vendo se o ultima transferencia foi o valor que eu coloquei
    cy.getByData('botao-sair').click();
    cy.location('pathname').should('eq', '/');
  });
});
