let saludo=alert("Bienvenido al sitio web del curso de JavaScript de CODER HOUSE");

let accion=prompt('Que rubro estás buscando? \n ESCRIBA SIN ACENTOS \n Ferreteria \n Comidas \n Tecnologia \n Kioscos \n Ropa \n Supermercados').toLowerCase();

console.log(accion);  
let busquedaRubro;

function buscarRubro(){
  busquedaRubro=rubro.filter((item)=>item.rubro==accion);
  console.log(busquedaRubro)
  return busquedaRubro
}

buscarRubro();

document.write(`</br> <b><em>${accion}</b></em> </br></br>`);

function detalleRubro(){
  for (const busqueda of busquedaRubro) {
    document.write(
      `<b>Negocio: ${busqueda.negocio} - Artículo: ${busqueda.articulo} <br></b>`
    ); 
  }
}

function mostrarRubro(){
  if (accion == "ferreteria") {
    detalleRubro();
  }else if(accion == "comidas") {
    detalleRubro();
  }else if(accion == "tecnologia") {
    detalleRubro();
  }else if(accion == "kioscos") {
    detalleRubro();
  }else if(accion == "ropa") {
    detalleRubro();
  }else if(accion == "supermercados") {
    detalleRubro();
  }else{
    alert('Elija el rubro deseado correctamente, lea las instrucciones en el primer renglón')
    let accion=prompt('Que rubro estás buscando? \n ESCRIBA SIN ACENTOS \n Ferreteria \n Comidas \n Tecnologia \n Kioscos \n Ropa \n Supermercados').toLowerCase();
  }}

mostrarRubro();


