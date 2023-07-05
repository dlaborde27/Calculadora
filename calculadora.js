let funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        
        let valorPorHora = parseFloat(document.getElementById('valorPorHora').value)
        let interfazHoras = parseFloat(document.getElementById('interfazHoras').value)
        let estructuraHTML = parseFloat(document.getElementById('estructuraHTMLHoras').value)
        let estilizacionCSS = parseFloat(document.getElementById('estilizacionCSSHoras').value)
        let desarrolloJavaScript = parseFloat(document.getElementById('desarrolloJavaScriptHoras').value)
        let pruebas = parseFloat(document.getElementById('pruebasHoras').value)
        let resultado = valorPorHora * (interfazHoras+estructuraHTML+estilizacionCSS+desarrolloJavaScript+pruebas)
        document.getElementById('valorTotal').value = resultado
      })
}

funcionPredeterminada()
