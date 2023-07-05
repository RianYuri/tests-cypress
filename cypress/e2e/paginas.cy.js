describe('Testando múltiplas páginas', () => { 
  it('Deve conseguir acessar a página de cartões', {browser: 'edge'}, ()=>{
    cy.visit('/')
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()

    cy.location('pathname').should('eq','/home')

    // Esta verificando se quando for na pagina home renderiza o link e clica nele que no caso e um array o 1 e o cartoes

    cy.getByData('app-home').find('a').eq(1).click()
    cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões')
// Esta pegando o path da url e confirmando para ver se é mesmo essa url
    cy.location('pathname').should('eq', '/home/cartoes')
  })
 })