import tela_inicial from "../support/pageObjects/tela_inicial.page"

describe('Regressivo ToDo app', () => {

    context('Validar a tela inicial', () => {
        beforeEach(()=>{
        cy.visit('/')
        });
        
        it('Validar área label', () => {
            tela_inicial.validarInput("What needs to be done?")
        })
    })
    
    context('Validar adição de itens', () => {
           beforeEach(() => {
            cy.visit('/')
        });

        it('Adicionar mais de um item a lista', () => {
            var todoItens = ["Maça", "Banana", "Cenoura"]
            todoItens.forEach(function(item, indice,array ){
                tela_inicial.inputText(item)
            })

            tela_inicial.validarContador(3)
        });
    })
    
    context('Validar conclusão de itens', () => {
            beforeEach(()=>{
                cy.visit('/')
            });

            it('Adicionar mais de um item a lista', () => {
            var todoItens = ["Item 01", "Item 02", "Item 03"]
            todoItens.forEach(function(item, indice,array ){
                tela_inicial.inputText(item)
            })
            tela_inicial.concluirItem()
            tela_inicial.validarContador(2)
        });
})
    
    context('Validar função filtrar ', () => {
         beforeEach(()=>{
                cy.visit('/')
                var todosItens = ["Item 01", "Item 02", "Item 03"]
            
                todosItens.forEach(function(item, indice, array){
                    tela_inicial.inputText(item)
                })
                tela_inicial.concluirItem()
            });
            it('Filtrar item ativo', () =>{
                tela_inicial.filtrarItem("Active")
                tela_inicial.validarSizeToDo(2)
            })
            
            it('Filtrar item ativo', () =>{
                tela_inicial.filtrarItem("Completed")
                tela_inicial.validarSizeToDo(1)
            })
        
    })
    
    context('Validar remover item', () => {
         beforeEach(()=>{
                cy.visit('/')
                var todosItens = ["Item 01", "Item 02", "Item 03"]
            
                todosItens.forEach(function(item, indice, array){
                    tela_inicial.inputText(item)
                })
            });
            it('Deletar item', () =>{
                tela_inicial.deletarItem()
                tela_inicial.validarSizeToDo(2)
            })
        
    })
}) 
