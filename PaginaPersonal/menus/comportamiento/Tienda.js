

function ventanaProductos(producto, prueba){

document.getElementById(producto).addEventListener("click", function(){document.getElementById(prueba).style.display="contents"});
}
ventanaProductos("producto1", "prueba1");
ventanaProductos("producto2","prueba2");