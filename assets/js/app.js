
let saludo=alert("Bienvenido al sitio web del curso de JavaScript de CODER HOUSE");

let accion=prompt('Que rubro estás buscando? \n ESCRIBA SIN ACENTOS \n Ferreteria \n Comidas \n Tecnologia \n Kioscos \n Ropa \n Supermercados').toLowerCase();

function buscarRubro(r){
  
  return r===accion;
}

const res=rubros.find(buscarRubro);

document.write(`</br> <b><em>${res}</b></em> </br></br>`);
    
if (res == "ferreteria") {
  for (const ferr of ferret) {
    document.write(
      `<b>Negocio: ${ferr.negocio} - Artículo: ${ferr.articulo} <br></b>`
    );
  }
  
}else if(res == "comidas") {
  for (const c of comida) {
    document.write(
      `<b>Negocio: ${c.negocio} - Artículo: ${c.articulo} <br></b>`
    );
  }
}else if(res == "tecnologia") {
  for (const t of tecno) {
    document.write(
      `<b>Negocio: ${t.negocio} - Artículo: ${t.articulo} <br></b>`
    );
  }
}else if(res == "kioscos") {
  for (const k of kiosco) {
    document.write(
      `<b>Negocio: ${k.negocio} - Artículo: ${k.articulo} <br></b>`
    );
  }
}else if(res == "ropa") {
  for (const r of rop) {
    document.write(
      `<b>Negocio: ${r.negocio} - Artículo: ${r.articulo} <br></b>`
    );
  }
}else if(res == "supermercados") {
  for (const s of supermercado) {
    document.write(
      `<b>Negocio: ${s.negocio} - Artículo: ${s.articulo} <br></b>`
    );
  }
}else{
  alert('Elija el rubro deseado correctamente, lea las instrucciones en el primer renglón')
  let accion=prompt('Que rubro estás buscando? \n ESCRIBA SIN ACENTOS \n Ferreteria \n Comidas \n Tecnologia \n Kioscos \n Ropa \n Supermercados').toLowerCase();
}
