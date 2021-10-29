const purchaseInput = document.getElementById('purchaseValue')
const discountInput = document.getElementById('discountAmount')
const totalInput = document.getElementById('totalAmount')

// Esta función se llama despues de que la pagina termino de cargar
document.addEventListener('DOMContentLoaded', function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString); 
// Extraigo la cantidad de computadores comprados de la URL
    const computadores = urlParams.get('computadores');
    calcularValorCompra(computadores)
})

function calcularValorCompra(numeroComputadores) {
    const valorComputador = 820000
    const valorCompra = numeroComputadores * valorComputador
    // Aqui se pinta el valor de compra en la pagina
    purchaseInput.value = valorCompra
    CalcularValorDescuento(valorCompra)
}

function CalcularValorDescuento(valorCompra) {
    let descuento = 0
    if (valorCompra >= 1640000 && valorCompra <= 3280000) {
        descuento = 15
    } else if (valorCompra > 3280000 && valorCompra <= 6560000) {
        descuento = 25
    } else if (valorCompra > 6560000 && valorCompra <= 9840000) {
        descuento = 35
    } else {
        descuento = 0
    }
    discountInput.value = descuento +' %' 
    CalcularTotal(valorCompra,descuento)
}

function CalcularTotal(valorCompra, porcentajeDeDescuento){
    const descuento= (porcentajeDeDescuento/100) *valorCompra
    const valorTotal = valorCompra - descuento  
    totalInput.value = valorTotal
    
}




