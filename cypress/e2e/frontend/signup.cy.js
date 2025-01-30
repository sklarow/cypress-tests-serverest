describe('Signup Test', () => {
  it('Create a new user successfully', () => {
    cy.createTestUserViaUI()
    cy.contains('Lista de Compras')
  })

  it('Create a new admin user successfully', () => {
    cy.createTestUserViaUI({ admin: true })
    cy.contains('Este é seu sistema para administrar seu ecommerce.')
  })
})
