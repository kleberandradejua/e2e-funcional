/// <reference types='cypress'/>

describe('login', () => {
  before(() => {
    cy.visit('https://barrigareact.wcaquino.me/')    
  })
  
  it('login no sistema', () => {
    cy.get('[data-test="email"]').type('kleberandrade98@gmail.com')
    cy.get('[data-test="passwd"]').type('Ble@ch2206')
    cy.get('.btn').click()
    
  })
})