

function ventanaProductos(botonCerrar,producto, prueba){

document.getElementById(producto).addEventListener("click", function(){document.getElementById(prueba).style.display="contents"});
document.getElementById(botonCerrar).addEventListener("click", function(){document.getElementById(prueba).style.display="none"});
}
ventanaProductos("botonCerrar","producto1", "prueba1");
ventanaProductos("producto2","prueba2");