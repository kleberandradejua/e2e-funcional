/// <reference types='cypress'/>

describe('login', () => {
    beforeEach(() => {
      cy.visit('https://barrigareact.wcaquino.me/')    
    })
    it.only('Inserir conta', () => {
        cy.get('[data-test="email"]').type('kleberandrade98@gmail.com')
        cy.get('[data-test="passwd"]').type('Ble@ch2206')
        cy.get('.btn').click()
        cy.get('.toast-message').contains('Bem vindo, Kleber de Andrade!')
        cy.get('[data-test="menu-settings"]').click()
        cy.get('[href="/contas"]').click()
        cy.get('tbody > tr > :nth-child(1)').should('have.text', 'Antônio Vinicius - Toinho')
        cy.get('tr > :nth-child(2) > :nth-child(1) > .far').click()
        cy.get('[data-test="nome"]')
        .click()
        .clear()
        .type('Antônio Vinicius - Toinho')
        cy.get('.btn').click()
        cy.get('.toast-success').should('be.visible')

    })

})