describe('Sign up flow (SignUpForm)', () => {
  it('should allow creating an account with valid data', () => {
    cy.visit('/auth/sign-up')

    const email = `user+${Date.now()}@example.com`
    cy.get('#email').type(email)
    cy.get('input[type="password"]').type('superSecurePassword123')

    cy.get('button[type="submit"]').click()

    cy.url().should('not.include', '/sign-up')

    cy.contains('Faça seu login').should('exist')
  })

  it('should not allow creating an account with an invalid email', () => {
    cy.visit('/auth/sign-up')

    const email = 'invalid-email'
    cy.get('#email').type(email)
    cy.get('input[type="password"]').type('superSecurePassword123')

    cy.get('button[type="submit"]').click()

    cy.contains('Email inválido').should('exist')
  })

  it('should not allow creating an account with a password shorter than 6 characters', () => {
    cy.visit('/auth/sign-up')

    const email = `user+${Date.now()}@example.com`
    cy.get('#email').type(email)
    cy.get('input[type="password"]').type('12345')

    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/sign-up')
    cy.contains('Senha deve ter pelo menos 6 caracteres').should('exist')
  })

  it('should not allow creating an account with the same email twice', () => {
    cy.visit('/auth/sign-up')

    const email = `user+${Date.now()}@example.com`
    cy.get('#email').type(email)
    cy.get('input[type="password"]').type('superSecurePassword123')

    cy.get('button[type="submit"]').click()

    cy.url().should('not.include', '/sign-up')

    cy.contains('Faça seu login').should('exist')

    cy.visit('/auth/sign-up')
    cy.get('#email').type(email)
    cy.get('input[type="password"]').type('superSecurePassword123')

    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/sign-up')
    cy.contains('Este e-mail já está em uso. Tente outro.').should('exist')
  })
})
