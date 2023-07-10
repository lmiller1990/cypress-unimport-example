import HelloWorld from './HelloWorld.vue'

describe('<HelloWorld />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(HelloWorld)
    cy.get('.todo').should('have.length', 5)
  })
})