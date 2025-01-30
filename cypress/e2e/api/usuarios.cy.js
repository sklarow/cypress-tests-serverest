describe('Test endpoint /usuarios/', () => {
  it('Should create an user successfully', () => {
    cy.request('POST', Cypress.env('apiBaseUrl') + '/usuarios', {
      nome: 'Teste QA',
      email: `teste${Date.now()}@teste.com`,
      password: Cypress.env('defaultPassword'),
      administrador: 'true'
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property(
        'message',
        'Cadastro realizado com sucesso'
      )
    })
  })

  it('Should return the user list', () => {
    cy.request('GET', Cypress.env('apiBaseUrl') + '/usuarios').then(
      (response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('quantidade')
        expect(response.body).to.have.property('usuarios')
      }
    )
  })
})
