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
})