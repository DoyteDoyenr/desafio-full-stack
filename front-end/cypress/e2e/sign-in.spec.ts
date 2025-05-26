describe('Sign up + login', () => {
  it('should create an account and log in successfully', () => {
    const email = `user+${Date.now()}@example.com`
    const password = 'superSecurePassword123'

    cy.visit('/auth/sign-up')
    cy.get('#email').type(email)
    cy.get('input[type="password"]').type(password)
    cy.get('button[type="submit"]').click()

    cy.url().should('not.include', '/sign-up')
    cy.contains('Faça seu login').should('exist')

    cy.visit('/auth/sign-in')
    cy.get('#email').type(email)
    cy.get('input[type="password"]').type(password)
    cy.get('button[type="submit"]').click()

    cy.url().should('not.include', '/sign-in')
    cy.contains('Bem-vindo à nossa Loja').should('exist')
  })

  it('should not allow login with an invalid email', () => {
    cy.visit('/auth/sign-in')

    const invalidEmail = 'email-invalido'
    const password = 'senhaSuperSegura123'

    cy.get('#email').type(invalidEmail)
    cy.get('input[type="password"]').type(password)
    cy.get('button[type="submit"]').click()

    cy.contains('Email inválido').should('exist')
  })

  it('should not allow login with incorrect password', () => {
    cy.visit('/auth/sign-in')

    const email = `usuario+${Date.now()}@exemplo.com`
    const wrongPassword = 'senhaErrada123'

    cy.visit('/auth/sign-up')
    cy.get('#email').type(email)
    cy.get('input[type="password"]').type('senhaSuperSegura123')
    cy.get('button[type="submit"]').click()

    cy.url().should('not.include', '/sign-up')

    cy.visit('/auth/sign-in')
    cy.get('#email').type(email)
    cy.get('input[type="password"]').type(wrongPassword)
    cy.get('button[type="submit"]').click()

    cy.contains('Credenciais inválidas').should('exist')
  })

  it('should allow login after account creation and redirect to home when accessing sign-in', () => {
    const email = `user+${Date.now()}@example.com`
    const password = 'superSecurePassword123'

    cy.visit('/auth/sign-up')
    cy.get('#email').type(email)
    cy.get('input[type="password"]').type(password)
    cy.get('button[type="submit"]').click()

    cy.url().should('not.include', '/sign-up')
    cy.contains('Faça seu login').should('exist')

    cy.visit('/auth/sign-in')
    cy.get('#email').type(email)
    cy.get('input[type="password"]').type(password)
    cy.get('button[type="submit"]').click()

    cy.url().should('not.include', '/sign-in')
    cy.contains('Bem-vindo à nossa Loja').should('exist')

    cy.visit('/auth/sign-in')

    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
})
