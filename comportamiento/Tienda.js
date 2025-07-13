const btnCerrar =document.getElementById("botonCerrar");

    

function ventanaProductos(producto, prueba){
document.getElementById(producto).addEventListener("click", function(){document.getElementById(prueba).style.display="contents"});
}
btnCerrar.addEventListener('click', function(){document.getElementById('prueba1').style.display='none'});
ventanaProductos("botonCerrar","producto1", "prueba1");
ventanaProductos("producto2","prueba2");