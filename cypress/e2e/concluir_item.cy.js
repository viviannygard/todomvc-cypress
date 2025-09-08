
import tela_inicial from "../support/pageObjects/tela_inicial.page"

describe('Concluir item da lista', () => {
    beforeEach(()=>{
        cy.visit('/')
        var todosItens = ["Item 01", "Item 02", "Item 03"]
    
        todosItens.forEach(function(item, indice, array){
            tela_inicial.inputText(item)
        })
    });
    it('Concluir item da listagem', () =>{
        tela_inicial.concluirItem()
    })

});