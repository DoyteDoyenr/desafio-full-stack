import { MessageError } from './message-error'

describe('<MessageError />', () => {
  it('should render the error message correctly', () => {
    const errorMessage = 'Required field'

    cy.mount(<MessageError message={errorMessage} />)
    cy.get('[role="alert"]').should('contain.text', errorMessage)
    cy.get('[role="alert"]').should('have.class', 'text-red-500')
  })

  it('should render empty if no message is passed', () => {
    cy.mount(<MessageError />)

    cy.get('[role="alert"]').should('exist').invoke('text').should('eq', '')
  })
})
