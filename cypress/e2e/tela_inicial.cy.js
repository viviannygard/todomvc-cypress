/**
 * Feature = describe
 * background = contexto ou beforeEach
 * it = caso de testes ou cenário de teste
*/
import tela_inicial from "../support/pageObjects/tela_inicial.page"
describe('Acessar a página do todoMVC', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/javascript-es5/dist/')
    tela_inicial.inputText()
  })
})