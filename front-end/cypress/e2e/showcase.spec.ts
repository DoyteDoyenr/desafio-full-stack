describe('Complete flow: registration, login, and showcase', () => {
  const email = `user+${Date.now()}@example.com`
  const password = 'superSecurePassword123'

  it('should create an account and log in successfully', () => {
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

    cy.visit('#showcase')

    cy.get('#showcase').should('exist')
    cy.get('#showcase').scrollIntoView()

    cy.contains('Minimalist Watch').should('exist')
    cy.contains('Modern Chair').should('exist')
    cy.contains('Ceramic Vase').should('exist')
  })

  it('should not find items in the showcase', () => {
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

    cy.visit('#showcase')

    cy.get('#showcase').should('exist')
    cy.get('#showcase').scrollIntoView()

    cy.contains('Nonexistent Item 1').should('not.exist')
    cy.contains('Nonexistent Item 2').should('not.exist')
    cy.contains('Nonexistent Item 3').should('not.exist')
  })
})
