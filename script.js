function gerar() {
    var gerador = window.document.getElementById('numero')
    var numero = Number(gerador.value)
    var divUl = document.getElementById('center-ul')
    var nInicial = 1
    var nFinal = 10

    divUl.innerHTML = ''
    if (gerador.value.length == 0) {
        let erro = document.createElement('div')
        divUl.appendChild(erro)
        erro.style.border = '2px black solid'
        erro.style.backgroundColor = 'gray'
        erro.style.marginTop = '40px'
        erro.style.padding = '20px'
        erro.style.fontFamily = 'Belanosima'
        erro.style.borderRadius = '50px'
        erro.innerHTML = `<strong> [ERRO] Insira  um valor <strong>`
    } else {
            var ul = document.createElement('ul')
            divUl.appendChild(ul)
            ul.style.border = '2px black solid'
            ul.style.borderRadius = '5px'
            ul.style.padding = '20px'

        for (nInicial; nInicial <= nFinal; nInicial++) {
            var lista = document.createElement('li')
            ul.appendChild(lista)
            lista.style.fontFamily = 'Belanosima'
            lista.style.textAlign = 'center'
            var tabuada = numero * nInicial
            lista.innerHTML = `${numero} x ${nInicial} = ${tabuada}`
        }
    }
}