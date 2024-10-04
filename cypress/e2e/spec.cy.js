/// <reference types='cypress'/>

describe('login', () => {
  beforeEach(() => {
    cy.visit('https://barrigareact.wcaquino.me/')    
  })
  
  it('Acesso ao sistema', () => {
    cy.get('[data-test="email"]').type('kleberandrade98@gmail.com')
    cy.get('[data-test="passwd"]').type('Ble@ch2206')
    cy.get('.btn').click()
    cy.get('.toast-message').contains('Bem vindo, Kleber de Andrade!')    
  })
  it('Erro de senha', () => {
    cy.get('[data-test="email"]').type('kleberandrade98@gmail.com')
    cy.get('[data-test="passwd"]').type('Blech2206')
    cy.get('.btn').click()
  })
  it('Conta errada', () => {
    cy.get('[data-test="email"]').type('kleberandrade98@gmail.co')
    cy.get('[data-test="passwd"]').type('Ble@ch2206')
    cy.get('.btn').click()
  })
  it.only('Inserir conta', () => {
    cy.get('[data-test="email"]').type('kleberandrade98@gmail.com')
    cy.get('[data-test="passwd"]').type('Ble@ch2206')
    cy.get('.btn').click()
    cy.get('.toast-message').contains('Bem vindo, Kleber de Andrade!')
    cy.get('[data-test="menu-settings"]').click()
    cy.get('[href="/contas"]').click()
    cy.get('[data-test="nome"]')
    .click()
    .type('Antônio Vinicius')
    cy.get('.btn').click()
    cy.get('.toast-success').should('contain.text','Conta inserida com sucesso!')
    cy.get('tbody > tr > :nth-child(1)').should('have.text', 'Antônio Vinicius')





  })
})