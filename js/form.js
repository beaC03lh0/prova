let botaoAdd = document.querySelector('#enviar')
botaoAdd.addEventListener('click', function (evento) {

    evento.preventDefault()

    let form = document.querySelector('#adicionar')

    let pedido = getValueForm(form)


    let erros = validaPedido(pedido)

     if (erros.length > 0) {
         MenssagemErro(erros)
        return
     }

     addPedido(pedido)

})

//-------------------------Validar um cliente---------------------------
//                                  |
//                                  |
//                                 \/
function validaPedido(pedido){
    let erros = []

    if(pedido.nome.length == 0){
        erros.push('O campo "CLIENTE" não pode estar em branco')
    }
    if(pedido.origem.length == 0){
        erros.push('O campo "ORIGEM" não pode estar em branco')
    }
    if(pedido.destino.length == 0){
        erros.push('O campo "DESTINO" não pode estar em branco')
    }
    if(pedido.produto.length == 0){
        erros.push('O campo "PRODUTO" não pode estar em branco')
    }
    
    
    return erros
}

function MenssagemErro(erros){
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''

    erros.forEach(function(erros){
        let li = document.createElement('li')
        li.textContent = erros
        ul.appendChild(li)
    })
}
//-------------------------Montar um paciente---------------------------
//                                  |
//                                  |
//                                 \/

function addPedido(pedido) {
    let pedidoTr = montarTr(pedido)
    let tabela = document.querySelector('#tabela01')

    tabela.appendChild(pedidoTr)
}
//----------------------Montar uma linha da tabela------------------------
//                                  |
//                                  |
//                                 \/

function montarTr(pedido) {
    let pedidoTr = document.createElement('tr')
    pedidoTr.classList.add('pedido')

    
    pedidoTr.appendChild(montarTd(pedido.nome, 'info-nome'))
    pedidoTr.appendChild(montarTd(pedido.origem, 'info-origem'))
    pedidoTr.appendChild(montarTd(pedido.destino, 'info-destino'))
    pedidoTr.appendChild(montarTd(pedido.produto, 'info-produto'))
    pedidoTr.appendChild(montarTd(pedido.status, 'info-status'))
    

    return pedidoTr
}

//----------------------Montar uma celula da linha------------------------
//                                  |
//                                  |
//                                 \/

function montarTd(dado, classe) {
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

//----------------------Receber valores para tabela------------------------
//                                  |
//                                  |
//                                 \/

function getValueForm(form) {
    let pedido = {
        nome: form.nome.value,
        origem: form.origem.value,
        destino: form.destino.value,
       produto: form.produto.value,
        status: form.select.value
    }
   
    
    return pedido
}