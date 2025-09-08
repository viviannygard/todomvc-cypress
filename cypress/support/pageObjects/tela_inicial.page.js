/**
 * 
 */
const elem = require('../elements/tela_inicial.elements').ELEMENTS
const concluirItem = require('../elements/tela_inicial.elements').ITEM
const filtrarItem = require('../elements/tela_inicial.elements').FILTROS
class telaInicial{
    inputText(dado){
        cy.get(elem.inputToDo).type(dado).type('{enter}')
    }
    validarInput(texto){
        cy.get(elem.inputToDo)
        .should('have.attr', 'placeholder')
        .and('include', texto)
    }
     validarContador(numero){
        cy.get(filtrarItem.contador)
        .should('contains.text', numero)
    }
    validarSizeToDo(numero){
        cy.get(concluirItem.validarListaItens)
        .should('have.length', numero)
    }
    concluirItem(){
        cy.get(concluirItem.buttonConcluirItem)
        .first()
        .click()
    }
    filtrarItem(menu){
        cy.get(filtrarItem.filtroToDo)
        .contains(menu)
        .and('be.visible')
        .click()
    }
    deletarItem(){
        cy.get(concluirItem.listarItem)
        .find('button')
        .invoke('show')
        .first()
        .click()
    }
}
export default new telaInicial();