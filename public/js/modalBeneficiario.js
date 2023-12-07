const modalBeneficiario = new bootstrap.Modal(document.getElementById('modalBeneficiario'))
const onB = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
onB(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode;
    console.log(fila);
    document.getElementById('id_Editar').value = fila.children[0].innerHTML;
    document.getElementById('identificacion_Editar').value = fila.children[1].innerHTML;
    document.getElementById('nombre_Completo_Editar').value = fila.children[2].innerHTML;
    document.getElementById('telefono_Editar').value = fila.children[3].innerHTML;
    document.getElementById('num_Familiares_Editar').value = fila.children[4].innerHTML;
    modalBeneficiario.show();
});
