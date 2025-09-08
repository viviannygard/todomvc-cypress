import tela_inicial from "../support/pageObjects/tela_inicial.page"

describe('Adicionar itens na listagem de toDo', () => {
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Adicionar um item a lista', () => {
      tela_inicial.inputText("dado1")
   })
    it('Adicionar lista de itens', () => {
        var todosItens = ["Item 01", "Item 02", "Item 03"]
            todosItens.forEach(function(item, indice, array){
                tela_inicial.inputText(item)
            })
        
    });
});