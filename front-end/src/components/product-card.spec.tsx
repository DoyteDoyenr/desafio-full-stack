import { ProductCard } from './product-card'

const mockProduct = {
  id: '123',
  name: 'Minimalist Watch',
  price: 149.99,
  image:
    'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  category: 'Accessories',
}

describe('<ProductCard />', () => {
  it('should render the information correctly', () => {
    cy.mount(<ProductCard product={mockProduct} />)

    cy.get('img')
      .should('have.attr', 'src')
      .and('include', 'pexels-photo-2783873')

    cy.contains(mockProduct.name).should('be.visible')
    cy.contains(mockProduct.category).should('be.visible')
    cy.contains(`R$${mockProduct.price.toFixed(2)}`).should('be.visible')
    cy.contains('Ver Detalhes').should('exist')

    cy.get('a[href="/product/123"]').should('exist')
  })
})
